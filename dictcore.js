(function () {
const DICT = {}, ALIAS = {}, EXTRA = {};
let parsed = false;
function parse() {
  if (parsed) return; parsed = true;
  (window.DICT_SRC || []).forEach(src => src.split('\n').forEach(line => {
    line = line.trim(); if (!line) return;
    if (line.indexOf('|') < 0 && line.indexOf('>') > 0) { const [a, b] = line.split('>'); ALIAS[a] = b; return; }
    const p = line.split('|');
    (DICT[p[0]] = DICT[p[0]] || []).push([p[1], p[2] || '']);
  }));
}
const undouble = b => (b.length > 2 && b[b.length - 1] === b[b.length - 2]) ? b.slice(0, -1) : null;
function stems(w) {
  const c = [];
  const add = x => { if (x && x.length >= 2 && c.indexOf(x) < 0) c.push(x); };
  if (/ies$/.test(w)) add(w.slice(0, -3) + 'y');
  if (/ied$/.test(w)) add(w.slice(0, -3) + 'y');
  if (/(ier|iest)$/.test(w)) add(w.replace(/(ier|iest)$/, 'y'));
  if (/ing$/.test(w)) { const b = w.slice(0, -3); add(b + 'e'); add(b); add(undouble(b)); }
  if (/ed$/.test(w)) { const b = w.slice(0, -2); add(w.slice(0, -1)); add(b); add(undouble(b)); }
  if (/[^s]s$/.test(w)) add(w.slice(0, -1));
  if (/es$/.test(w)) add(w.slice(0, -2));
  if (/ly$/.test(w)) { add(w.slice(0, -2)); add(w.slice(0, -3) + 'y'); if (/[bp]ly$/.test(w)) add(w.slice(0, -1) + 'e'); }
  if (/er$/.test(w)) { const b = w.slice(0, -2); add(b); add(w.slice(0, -1)); add(undouble(b)); }
  if (/est$/.test(w)) { const b = w.slice(0, -3); add(b); add(w.slice(0, -2)); add(undouble(b)); }
  if (/ness$/.test(w)) add(w.slice(0, -4));
  return c;
}
const has = w => DICT[w] || EXTRA[w];
const sensesOf = w => DICT[w] || EXTRA[w];
function lookup(raw) {
  parse();
  let w = String(raw).toLowerCase().replace(/’/g, "'"), poss = false;
  if (!has(w) && !ALIAS[w] && /'s$/.test(w)) { w = w.slice(0, -2); poss = true; }
  if (has(w)) return { form: raw, lemma: w, senses: sensesOf(w), poss };
  if (ALIAS[w] && has(ALIAS[w])) return { form: raw, lemma: ALIAS[w], senses: sensesOf(ALIAS[w]), poss };
  const cs = stems(w);
  for (const x of cs) if (has(x)) return { form: raw, lemma: x, senses: sensesOf(x), poss };
  for (const x of cs) if (ALIAS[x] && has(ALIAS[x])) return { form: raw, lemma: ALIAS[x], senses: sensesOf(ALIAS[x]), poss };
  return { form: raw, lemma: null, senses: null, poss };
}
window.DictCore = {
  lookup, parse,
  setExtra(map) { Object.keys(map).forEach(k => { if (!EXTRA[k]) EXTRA[k] = map[k]; }); },
  size() { parse(); return Object.keys(DICT).length; }
};
})();
