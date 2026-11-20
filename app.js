(function () {
'use strict';
const UNITS = window.UNITS, GUIDE = window.GUIDE, SCALE = window.SCALE, SPR = window.SPRITES;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
const pick = a => a[Math.floor(Math.random() * a.length)];
const hash = s => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
const pickStable = (a, key) => a[hash(key) % a.length];
const REDUCED = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const SECN = { G: '知識', S: '文法', R: '読解', L: 'リスニング' };
const LET = 'ABCD';

/* ───────── ワールドとセリフ ───────── */
const WORLD = {
  u0: 'はじまりの村', u1: '主語と動詞の草原', u2: '一致の双子橋', u3: '単語の宝物庫', u4: 'ならび道の並木', u5: '品詞の変身屋敷',
  u6: '耳すましの洞窟', u7: 'つなぎの吊り橋', u8: '鏡の間', u9: '冠詞の小人村', u10: '比較の天秤山', u11: 'イディオム市場',
  u12: '時の時計塔', u13: '長文の大図書館', u14: 'さかさま城', u15: 'うらよみ劇場', u16: 'ペアの双子島', u17: '推理の霧の森',
  u18: '講義の大聖堂', u19: '最終試験の塔'
};
const LINES = {
  ok: ['ふぉっふぉっ、正解じゃ。よい味がするのう', 'うむ、その一粒、わしのほっぺ袋にしまっておこう', 'みごとじゃ。ひまわりの種をひとつ進ぜよう', '迷いのない手つきじゃな。さては予習してきおったな？',
    'よい読みじゃ。わしのヒゲもピンと立ったわい', '作問者めが歯ぎしりしておるのが見えるのう', 'ほっほ、若いのにやりおる', 'カリッ…うむ、よい音の正解じゃ', 'その調子じゃ。わしの回し車まで回りだしたわい', '正解じゃ。わしより筋がよいかもしれんのう'],
  okSec: {
    S: ['主語と動詞が見えておったな。それが文法の極意じゃ', '下線部の罠を見破ったか。あっぱれじゃ', '文の骨組みが見えておる者の解き方じゃな'],
    R: ['答えは本文にあったじゃろう？', '言いかえを見抜く目、なかなかのものじゃ', '単語の宝箱をまたひとつ開けたのう'],
    L: ['よい耳をしておる。ハムスター並みじゃ', '2人目の言葉をよく聞いておったな', '音の罠にも惑わされなんだか。えらいぞ']
  },
  ng: ['ふむ…はじき返されたか。なに、気にすることはない', 'おっと、ほっぺ袋から種がひと粒こぼれたのう', '今のは罠がいやらしかった。作問者め、相変わらずじゃのう', 'この問題は宿屋で倒し直すがよい', 'おしいのう。あと半歩じゃった',
    'ここを覚えれば、本番で一問拾えるぞい', 'まちがいは宝じゃ。わしが復習用にとっておこう', 'うっかりは誰にでもある。わしなぞ昨日、回し車から落ちたわい'],
  ngType: {
    er: '下線部をひとつずつ「本当に正しいか」と疑ってみるのじゃ', fb: 'まずは主語と動詞を探す。それを忘れてはならんぞ',
    ls: 'スクリプトで、聞き取れなんだ音をたしかめておくがよい', lt: '話の最初の数文で主題をつかむ。それがコツじゃ',
    vc: '選択肢を本文に入れて読んでみるがよい。見えてくるはずじゃ', rd: '本文の言いかえになっておる選択肢を探すのじゃ', mc: 'ここは考え方の要じゃ。解説をよく読んでおくれ'
  },
  combo: { 3: '3連続じゃと！？ほっぺ袋がぱんぱんじゃ', 6: '6連続…わしの小さな胸も高鳴るわい', 9: '9連続じゃと…おぬし、さては試験官じゃな？', 12: '12連続…生まれて半年、こんなのは初めて見たわい' },
  start: {
    G: ['まずは試験のしくみを知るのじゃ。敵を知れば恐れることはない', 'この村からすべてが始まる。わしが案内してしんぜよう'],
    S: ['文法は一問の重みがいちばん大きい。ここで稼ぐのじゃ', '主語と動詞を探せ。それが文法の地図となる', '型を覚えればすぐに点になる。おいしい土地じゃぞ'],
    R: ['語彙の問題は数秒で一点。ごちそうのような問題じゃ', '答えは本文の中に隠れておる。わしの種のようにのう', '知らぬ単語は、前後の文から推し量るのじゃ'],
    L: ['耳をすませよ。答えは2人目の言葉にある', '知らぬ単語が出ても、立ち止まってはならんぞ', '会話と同じ単語の選択肢は罠かもしれん。気をつけるのじゃ']
  },
  check: ['この地のボス戦じゃ。これまでの技をすべてぶつけるがよい', 'ここを越えれば次の地じゃ。ほっぺ袋の準備はよいか？'],
  mock: ['本番と同じ順に出すぞい。リスニング、文法、読解じゃ', '最終試験の塔…ここまで来たおぬしなら案ずることはない'],
  learn: ['まずは巻物で作戦を練るとしよう', '解き方を知ってから挑めば、ぐっと楽になるぞい'],
  replay: ['もう一度か。復習こそ最強の術じゃ', 'まちがえた所を倒し直せば、本番で必ず効いてくる'],
  locked: ['この先はまだ霧の中じゃ。前の地を越えてからにせい', '鍵がかかっておる。順に進めば迷うことはない'],
  scroll: ['ここは試験に出るぞい', '書き留める用意はよいか？', 'わしもこれで、ひと粒多く拾えたものじゃ', 'あと少しで巻物を読み終えるぞ', 'ここまで読めたおぬしは立派じゃ', 'これで支度はととのった'],
  tips: ['TOEFL ITPは誤答で減点されぬ。迷うたら必ず印をつけるのじゃ', '文法は一問で合計点およそ3点分。いちばんの稼ぎどころじゃ', '読解は一つの文章におよそ11分。時を忘れてはならんぞ', 'Part Aの答えは2人目の言葉にある。覚えておくがよい',
    '会話と同じ単語が入った選択肢は、罠であることが多いのう', '単語は同義語の組で覚えるとよい。abundant ＝ plentiful じゃ', '-ing形はひとりでは動詞になれん。さみしがりなやつじゃ',
    'neither A nor B はBに合わせる。Bが主じゃ', 'わしの好物はひまわりの種。おぬしの好物は…正解かのう？', '一日ひとつでもよい。続ける者がいちばん強いのじゃ',
    '合計点は (L＋S＋R)×10÷3。目標から逆算するのじゃ', 'despite の後ろは名詞。節が来たら although を使うのじゃ', 'まちがえた問題は宿屋で倒せば、HPが戻るぞい'],
  result: { perfect: 'ふぉっふぉっふぉ、満点じゃ！ほっぺ袋がはちきれそうじゃわい', good: 'よい冒険であった。この調子で進むがよい', ok: '見事越えたのう。まちがえた所は宿屋で癒やすのじゃ', low: 'ここまで来ただけで立派なものじゃ。復習すれば、ぐんと伸びるぞい' },
  levelup: 'レベルが上がったのう。わしの帽子のふさも誇らしげじゃ'
};

/* ───────── ドット絵 ───────── */
const MPAL = { K: '#1A1020', k: '#3B2A20', o: '#F4A54E', d: '#E8913A', c: '#FFF3E2', p: '#FFB3C1', b: '#FF9DB0', r: '#D9675C', n: '#3A3560', m: '#2E2A47', y: '#FFC93C', w: '#FFFFFF', t: '#7CC6FF', g: '#5B4636', l: '#EADBC8' };
const rle = (rows, fillOf) => {
  let out = '';
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x]; if (ch === '.') { x++; continue; }
      let w = 1; while (row[x + w] === ch) w++;
      out += `<rect x="${x}" y="${y}" width="${w}" height="1" fill="${fillOf(ch)}"/>`; x += w;
    }
  });
  return out;
};
const MC = {}, IC = {};
function toffee(mood = 'idle', cls = 'toffee') {
  if (!MC[mood]) MC[mood] = rle(SPR.M[mood] || SPR.M.idle, ch => MPAL[ch]);
  return `<svg class="${cls}" viewBox="0 0 32 32" aria-hidden="true">${MC[mood]}</svg>`;
}
function ic(name, cls = '') {
  if (!IC[name]) IC[name] = rle(SPR.I[name], () => 'currentColor');
  return `<svg class="ic ${cls}" viewBox="0 0 16 16" aria-hidden="true">${IC[name]}</svg>`;
}

/* ───────── 保存データ ───────── */
const KEY = 'toffy-itp-v1';
const MAXH = 5, REGEN = 30 * 60 * 1000, PERLV = 50;
const DEF = { v: 1, onboard: false, target: 500, goal: 30, xp: 0, seeds: 0, streak: 0, best: 0, lastDay: null, hearts: 5, heartTs: 0,
  done: {}, mist: [], stats: { S: [], R: [], L: [] }, ua: {}, hist: {}, set: { inf: false, all: false, rate: 0.95, sound: true } };
function normalize(j) {
  const d = JSON.parse(JSON.stringify(DEF));
  if (j && j.v === 1) return Object.assign(d, j, { set: Object.assign(d.set, j.set || {}), stats: Object.assign(d.stats, j.stats || {}) });
  return d;
}
function load() {
  try { return normalize(JSON.parse(localStorage.getItem(KEY))); } catch (e) { return normalize(null); }
}
const bodyOf = s => JSON.stringify(Object.assign({}, s, { updatedAt: 0 }));
let S = load();
let lastSaved = bodyOf(S);
function save() {
  const body = bodyOf(S);
  if (body === lastSaved) return;
  lastSaved = body; S.updatedAt = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* 保存領域が使えない環境でも動く */ }
  cloudQueue();
}
const dayStr = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const dayOffset = n => { const d = new Date(); d.setDate(d.getDate() + n); return dayStr(d); };
const levelOf = xp => ({ lv: 1 + Math.floor(xp / PERLV), cur: xp % PERLV });
function refreshDaily() {
  if (S.lastDay && S.lastDay !== dayStr() && S.lastDay !== dayOffset(-1)) S.streak = 0;
  if (S.hearts >= MAXH) S.heartTs = 0;
  else if (!S.heartTs) S.heartTs = Date.now();
  else {
    const n = Math.floor((Date.now() - S.heartTs) / REGEN);
    if (n > 0) { S.hearts = Math.min(MAXH, S.hearts + n); S.heartTs = S.hearts >= MAXH ? 0 : S.heartTs + n * REGEN; }
  }
  save();
}
function bumpStreak() {
  const t = dayStr();
  if (S.lastDay === t) return false;
  S.streak = S.lastDay === dayOffset(-1) ? S.streak + 1 : 1;
  S.best = Math.max(S.best, S.streak);
  S.lastDay = t;
  return true;
}
const todayXP = () => S.hist[dayStr()] || 0;
function addXP(n) { S.xp += n; S.hist[dayStr()] = todayXP() + n; }
function loseHeart() { if (S.set.inf) return; S.hearts = Math.max(0, S.hearts - 1); if (!S.heartTs) S.heartTs = Date.now(); }
function heartWait() {
  if (S.hearts >= MAXH || !S.heartTs) return '';
  return Math.max(1, Math.ceil((REGEN - (Date.now() - S.heartTs)) / 60000)) + '分';
}

/* ───────── クラウドセーブ（Googleアカウント・Firebase） ───────── */
const FB_CONFIG = { apiKey: 'AIzaSyDUPgDqwbTM4pz0QUGoG3_ItshCl7G5LZ8', authDomain: 'toffee-itp-quest.firebaseapp.com', projectId: 'toffee-itp-quest', appId: '1:370071498459:web:cd60362eec098e351f66fe', messagingSenderId: '370071498459' };
const CLOUD = { ok: /(^|\.)github\.io$/.test(location.hostname) || location.hostname === 'localhost', ready: false, user: null, state: 'idle', at: 0, err: '', timer: null };
function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
async function cloudInit() {
  if (!CLOUD.ok) return;
  try {
    const base = 'https://www.gstatic.com/firebasejs/10.12.2/';
    await loadScript(base + 'firebase-app-compat.js');
    await Promise.all([loadScript(base + 'firebase-auth-compat.js'), loadScript(base + 'firebase-firestore-compat.js')]);
    firebase.initializeApp(FB_CONFIG);
    CLOUD.auth = firebase.auth(); CLOUD.db = firebase.firestore();
    CLOUD.auth.getRedirectResult().catch(cloudErr);
    CLOUD.auth.onAuthStateChanged(async u => {
      CLOUD.user = u; CLOUD.ready = true;
      if (u) await cloudPull(); else CLOUD.state = 'idle';
      cloudRefresh();
    });
  } catch (e) { CLOUD.ready = true; CLOUD.state = 'offline'; cloudRefresh(); }
}
const cloudRef = () => CLOUD.db.collection('users').doc(CLOUD.user.uid);
async function cloudPull() {
  CLOUD.state = 'sync';
  try {
    const snap = await cloudRef().get();
    const d = snap.exists ? snap.data() : null;
    const remoteNewer = d && ((d.xp || 0) > S.xp || ((d.xp || 0) === S.xp && (d.updatedAt || 0) > (S.updatedAt || 0)));
    if (remoteNewer) {
      S = normalize(JSON.parse(d.save)); lastSaved = bodyOf(S);
      try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* noop */ }
      CLOUD.state = 'ok'; CLOUD.at = Date.now();
      toast('アカウントのセーブを読み込んだ');
      if (!L && !learnCtl && !obCtl) { closeLayer(); render(true); }
    } else await cloudPush();
  } catch (e) { cloudErr(e); }
}
async function cloudPush() {
  if (!CLOUD.user) return;
  CLOUD.state = 'sync';
  try {
    await cloudRef().set({ save: JSON.stringify(S), xp: S.xp, updatedAt: S.updatedAt || Date.now() });
    CLOUD.state = 'ok'; CLOUD.at = Date.now(); CLOUD.err = '';
  } catch (e) { cloudErr(e); }
  cloudRefresh();
}
function cloudQueue() {
  if (!CLOUD.user) return;
  clearTimeout(CLOUD.timer);
  CLOUD.timer = setTimeout(cloudPush, 1500);
}
function cloudErr(e) {
  const code = (e && e.code) || '';
  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return;
  CLOUD.state = 'error';
  CLOUD.err = code === 'auth/unauthorized-domain' || code === 'auth/operation-not-allowed' ? 'ログインの設定がまだ完了していません' :
    code === 'auth/network-request-failed' || code === 'unavailable' ? '通信できませんでした。電波のある所でもう一度' : 'うまく保存できませんでした';
  cloudRefresh();
}
async function cloudSignIn() {
  if (!CLOUD.auth) return;
  const p = new firebase.auth.GoogleAuthProvider();
  try { await CLOUD.auth.signInWithPopup(p); }
  catch (e) {
    if (e && (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment')) {
      try { await CLOUD.auth.signInWithRedirect(p); } catch (e2) { cloudErr(e2); }
    } else cloudErr(e);
  }
}
function cloudRefresh() { if (tab === 'me' && !L && !learnCtl && !obCtl && !$('.modal')) render(); }
function cloudPanel() {
  if (!CLOUD.ok) return `<div class="win panel"><h3>アカウント保存</h3><p class="small" style="margin:0">この表示ではアカウント保存を使えません。<br>https://mizune86.github.io/toffee-itp-quest/ から開くと、Googleアカウントにセーブできます。</p></div>`;
  if (!CLOUD.ready) return `<div class="win panel"><h3>アカウント保存</h3><p class="small" style="margin:0">読み込み中…</p></div>`;
  if (CLOUD.state === 'offline' && !CLOUD.user) return `<div class="win panel"><h3>アカウント保存</h3><p class="small" style="margin:0">今は通信できないため使えません。セーブはこの端末に保存されています。</p></div>`;
  if (!CLOUD.user) return `<div class="win panel"><h3>アカウント保存</h3><p class="small" style="margin:0 0 10px">Googleでログインすると、セーブデータがアカウントに保存されます。PCとスマホで同じ進み具合で遊べるぞい。</p>
${CLOUD.err ? `<p class="small" style="color:var(--red);margin:0 0 8px">${esc(CLOUD.err)}</p>` : ''}<button class="btn gold wide" data-act="login">▶ Googleでログイン</button></div>`;
  const t = CLOUD.at ? new Date(CLOUD.at) : null;
  const st = CLOUD.state === 'sync' ? '保存中…' : CLOUD.state === 'error' ? `<span style="color:var(--red)">${esc(CLOUD.err)}</span>` : t ? `保存ずみ（${t.getHours()}:${String(t.getMinutes()).padStart(2, '0')}）` : '保存ずみ';
  return `<div class="win panel"><h3>アカウント保存</h3>
<div class="stats" style="grid-template-columns:1fr"><div>アカウント<b style="font-family:var(--f);font-size:14px">${esc(CLOUD.user.displayName || CLOUD.user.email || 'Google')}</b></div><div>状態<b style="font-family:var(--f);font-size:14px">${st}</b></div></div>
<p class="small" style="margin:8px 0 10px">進み具合は自動でアカウントに保存されます。</p><button class="btn ghost wide" data-act="logout">ログアウト</button></div>`;
}

/* ───────── 問題バンクとステージ ───────── */
const Q = {}, CTX = {};
UNITS.forEach((u, ui) => {
  u.idx = ui; u.pool = []; u.vocabIds = []; u.groups = []; u.solo = [];
  (u.vocab || []).forEach((v, i) => {
    const id = `${u.id}-v${i}`;
    Q[id] = { id, t: 'vc', w: v[0], s: v[1], o: v.slice(2, 6), jp: v[6], sec: 'R', unit: u.id };
    u.pool.push(id); u.vocabIds.push(id);
  });
  (u.qs || []).forEach((r, i) => {
    const base = `${u.id}-${i}`;
    if (Array.isArray(r)) {
      let q;
      if (r[0] === 'fb') q = { t: 'fb', q: r[1], o: r[2], e: r[3] };
      else if (r[0] === 'er') q = { t: 'er', q: r[1], a: r[2], fix: r[3], e: r[4] };
      else if (r[0] === 'mc') q = { t: 'mc', q: r[1], o: r[2], e: r[3] };
      else q = { t: 'ls', d: r[1], q: r[2], o: r[3], e: r[4] };
      Object.assign(q, { id: base, sec: u.sec, unit: u.id });
      Q[base] = q; u.pool.push(base); u.solo.push(base);
    } else {
      CTX[base] = { t: r.t, title: r.title, p: r.p, d: r.d };
      const g = [];
      r.qs.forEach((s, j) => {
        const id = `${base}-${j}`;
        Q[id] = { id, t: r.t, ctx: base, q: s[0], o: s[1], e: s[2], hl: s[3] || '', sec: u.sec, unit: u.id };
        u.pool.push(id); g.push(id);
      });
      u.groups.push(g);
    }
  });
  u.lessons = buildLessons(u);
  u.nodes = [];
  if (u.learn) u.nodes.push({ id: `${u.id}-learn`, kind: 'learn', unit: u, title: '作戦の巻物' });
  u.lessons.forEach((l, i) => u.nodes.push({ id: `${u.id}-p${i}`, kind: 'practice', unit: u, title: `バトル${i + 1}`, items: l }));
  if (u.final) {
    u.nodes.push({ id: `${u.id}-mock0`, kind: 'mock', unit: u, title: 'ミニ模試 1' });
    u.nodes.push({ id: `${u.id}-mock1`, kind: 'mock', unit: u, title: 'ミニ模試 2' });
  } else u.nodes.push({ id: `${u.id}-check`, kind: 'check', unit: u, title: 'ボス戦' });
  u.nodes.forEach((n, i) => { n.stage = `STAGE ${ui}-${i + 1}`; });
});
function chunk(ids, size) {
  const n = Math.max(1, Math.round(ids.length / size)), out = [];
  for (let i = 0; i < n; i++) out.push(ids.slice(Math.floor(i * ids.length / n), Math.floor((i + 1) * ids.length / n)));
  return out;
}
function buildLessons(u) {
  const voc = u.vocabIds.length ? chunk(u.vocabIds, 10).map(c => c.concat(['PAIR'])) : [];
  const grp = u.groups.slice();
  const out = [];
  while (voc.length || grp.length) { if (voc.length) out.push(voc.shift()); if (grp.length) out.push(grp.shift()); }
  if (u.solo.length >= 4) chunk(u.solo, 7).forEach(c => out.push(c));
  else if (u.solo.length) {
    const gi = out.findIndex(l => Q[l[0]] && Q[l[0]].ctx);
    if (gi >= 0) out[gi] = u.solo.concat(out[gi]); else if (out.length) out[0] = u.solo.concat(out[0]); else out.push(u.solo.slice());
  }
  return out;
}
const ALL = UNITS.flatMap(u => u.nodes);
const NODE = Object.fromEntries(ALL.map(n => [n.id, n]));
const isDone = n => !!S.done[n.id];
function isOpen(n) { const i = ALL.indexOf(n); return S.set.all || i === 0 || isDone(n) || isDone(ALL[i - 1]); }
const currentNode = () => ALL.find(n => !isDone(n) && isOpen(n)) || null;
const secOf = q => (q.t === 'fb' || q.t === 'er') ? 'S' : (q.t === 'vc' || q.t === 'rd' || q.t === 'pr') ? 'R' : (q.t === 'ls' || q.t === 'lt') ? 'L' : null;
const standalone = id => !Q[id].ctx;
function makePair(ids) {
  const v = sample(ids.filter(id => Q[id] && Q[id].t === 'vc'), 5);
  return { id: 'pair-' + Math.random().toString(36).slice(2, 7), t: 'pr', pairs: v.map(id => [Q[id].w, Q[id].o[0]]) };
}
function lessonItems(node) {
  const u = node.unit;
  if (node.kind === 'practice') return node.items.map(id => id === 'PAIR' ? makePair(node.items) : Q[id]);
  if (node.kind === 'check') {
    const own = sample(u.pool.filter(standalone), 8);
    const prev = UNITS.slice(1, u.idx).flatMap(x => x.pool.filter(id => standalone(id) && Q[id].t !== 'mc'));
    const ids = own.concat(sample(prev, 2));
    if (u.groups.length) ids.push(...sample(u.groups.flat(), 2));
    return shuffle(ids).map(id => Q[id]);
  }
  if (node.kind === 'mock') {
    const all = Object.values(Q);
    const Lq = sample(all.filter(q => q.t === 'ls'), 5);
    const Sq = sample(all.filter(q => q.t === 'fb'), 2).concat(sample(all.filter(q => q.t === 'er'), 4));
    const Rq = sample(all.filter(q => q.t === 'vc'), 3).concat(sample(all.filter(q => q.t === 'rd'), 2));
    return Lq.concat(shuffle(Sq), Rq);
  }
  return [];
}

/* ───────── 読み上げ（リスニング） ───────── */
const TTS = { ok: typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined', voices: [], token: 0 };
function loadVoices() { try { TTS.voices = speechSynthesis.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang)); } catch (e) { TTS.voices = []; } }
if (TTS.ok) { loadVoices(); try { speechSynthesis.addEventListener('voiceschanged', loadVoices); } catch (e) { speechSynthesis.onvoiceschanged = loadVoices; } }
const FEM = /female|hazel|samantha|zira|aria|jenny|susan|karen|victoria|allison|ava|serena|libby|sonia|emma|michelle|joanna|salli|kendra|kimberly|ivy|nancy|linda|heather|catherine|moira|tessa|fiona|google us english/i;
const MAL = /\bmale|david|mark|guy|daniel|\balex\b|fred|ryan|eric|christopher|brian|matthew|justin|joey|george|james|richard|aaron|arthur|oliver|thomas|roger|davis|tony|jason/i;
function pickVoices() {
  const vs = TTS.voices; if (!vs.length) return {};
  const us = vs.filter(v => /US/i.test(v.lang)); const pool = us.length >= 2 ? us : vs;
  const f = pool.find(v => FEM.test(v.name)) || pool[0];
  const m = pool.find(v => MAL.test(v.name) && !/female/i.test(v.name) && v !== f) || vs.find(v => MAL.test(v.name) && !/female/i.test(v.name) && v !== f) || pool.find(v => v !== f) || f;
  const n = pool.find(v => v !== f && v !== m) || f;
  return { W: f, M: m, P: m, N: n };
}
function speak(lines, rate, onend) {
  if (!TTS.ok) { if (onend) onend(); return; }
  const tok = ++TTS.token;
  try { speechSynthesis.cancel(); } catch (e) { /* noop */ }
  const V = pickVoices(), same = V.W === V.M;
  const parts = [];
  lines.forEach(([spk, txt]) => (txt.match(/[^.!?]+[.!?]+["')]*\s*|[^.!?]+$/g) || [txt]).forEach(s => { s = s.trim(); if (s) parts.push([spk, s]); }));
  parts.forEach(([spk, s], i) => {
    const ut = new SpeechSynthesisUtterance(s);
    ut.lang = 'en-US'; if (V[spk]) ut.voice = V[spk];
    ut.rate = rate;
    ut.pitch = spk === 'W' ? (same ? 1.35 : 1.05) : spk === 'N' ? 1 : (same ? 0.75 : 0.95);
    if (i === parts.length - 1) ut.onend = ut.onerror = () => { if (tok === TTS.token && onend) onend(); };
    speechSynthesis.speak(ut);
  });
}
function stopSpeak() { TTS.token++; try { if (TTS.ok) speechSynthesis.cancel(); } catch (e) { /* noop */ } }

/* ───────── 効果音（効果音ラボ https://soundeffect-lab.info/） ───────── */
const SFXVOL = { tap: .4, ok: .8, ng: .6, fail: .6, match: .5, combo: .5, chest: .7, loot: .55, levelup: .6, msg: .35, heal: .55, start: .5 };
const SFX = {};
Object.keys(SFXVOL).forEach(k => { try { SFX[k] = new Audio(`sfx/${k}.mp3`); SFX[k].preload = 'auto'; } catch (e) { /* noop */ } });
function sfx(k) {
  if (!S.set.sound || !SFX[k]) return;
  try {
    const a = SFX[k].paused ? SFX[k] : SFX[k].cloneNode();
    a.volume = SFXVOL[k]; a.currentTime = 0;
    const r = a.play(); if (r && r.catch) r.catch(() => {});
  } catch (e) { /* 音が出せない環境は無音 */ }
}
function pixelBurst() {
  if (REDUCED) return;
  const c = document.createElement('canvas'); c.className = 'confetti'; document.body.appendChild(c);
  const x = c.getContext('2d'), W = c.width = innerWidth, H = c.height = innerHeight;
  const cols = ['#FFD447', '#FF9F45', '#4FD3E6', '#FF79AC', '#9BE15D', '#F7EFD9'];
  const ps = Array.from({ length: 70 }, () => ({ x: W / 2, y: H * .3, vx: (Math.random() - .5) * 12, vy: -Math.random() * 11 - 3, s: Math.random() < .5 ? 6 : 9, c: pick(cols) }));
  let f = 0;
  (function tick() {
    x.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vy += .35; p.x += p.vx; p.y += p.vy; x.fillStyle = p.c; x.fillRect(Math.round(p.x / 3) * 3, Math.round(p.y / 3) * 3, p.s, p.s); });
    if (++f < 90) requestAnimationFrame(tick); else c.remove();
  })();
}
let typeTimer = null;
function typeInto(el, text) {
  clearInterval(typeTimer);
  if (!el) return;
  if (REDUCED) { el.textContent = text; return; }
  let i = 0; el.textContent = '';
  typeTimer = setInterval(() => { i++; el.textContent = text.slice(0, i); if (i >= text.length) clearInterval(typeTimer); }, 26);
}

/* ───────── 画面の骨組み ───────── */
const app = $('#app'), layer = $('#layer');
let tab = 'path', sub = null, selNode = null;
const TABS = [['path', '冒険', 'sword'], ['review', '宿屋', 'redo'], ['guide', '図書館', 'scroll'], ['me', 'ステータス', 'chart']];
function hpHtml(n) {
  if (S.set.inf) return `<span class="chip" style="color:var(--red)">${ic('heart')}∞</span>`;
  return `<span class="hp">${Array.from({ length: MAXH }, (_, i) => ic('heart', i < n ? '' : 'empty')).join('')}</span>`;
}
function hud() {
  const { lv, cur } = levelOf(S.xp), on = S.lastDay === dayStr();
  return `<header class="hud gutter">
<button class="me" data-act="talk" aria-label="トッフィーに話しかける">${toffee('idle')}<span class="lv"><b>Lv.${lv}</b><span class="expbar" aria-label="EXP ${cur}/${PERLV}"><i style="width:${cur / PERLV * 100}%"></i></span></span></button>
<button class="chip fire ${on ? '' : 'off'}" data-act="streakinfo" aria-label="連続 ${S.streak}日">${ic('flame')}${S.streak}</button>
<button data-act="hearts" aria-label="HP">${hpHtml(S.hearts)}</button>
</header>`;
}
function tabbar() {
  return `<nav class="tabbar" aria-label="メニュー"><div class="in" role="tablist">${TABS.map(([id, lb, icon]) =>
    `<button class="tab" role="tab" data-tab="${id}" aria-selected="${tab === id}">${ic(icon)}<span>${lb}</span></button>`).join('')}</div></nav>`;
}
function render(scrollToCurrent) {
  refreshDaily();
  let body = '';
  if (tab === 'path') body = viewPath();
  else if (tab === 'review') body = sub === 'words' ? viewWords() : viewReview();
  else if (tab === 'guide') body = sub ? viewArticle(sub) : viewGuide();
  else body = viewMe();
  app.innerHTML = hud() + `<main class="gutter ${tab === 'path' ? 'with-sheet' : ''}">${body}</main>` + tabbar();
  if (tab === 'path') drawTrails();
  restSheet();
  if (tab === 'path' && (scrollToCurrent === true || scrollToCurrent === 'smooth')) {
    const cur = $('.tw.cur');
    if (cur) requestAnimationFrame(() => cur.scrollIntoView({ block: 'center', behavior: scrollToCurrent === 'smooth' ? 'smooth' : 'auto' }));
  } else if (scrollToCurrent === 'top') window.scrollTo(0, 0);
}

/* ───────── 冒険（ワールドマップ） ───────── */
const ZIG = [0, 48, 72, 48, 0, -48, -72, -48];
function nodeIcon(n) {
  if (!isOpen(n)) return 'lock';
  if (n.kind === 'learn') return 'scroll';
  if (n.kind === 'check') return 'chest';
  if (n.kind === 'mock') return 'trophy';
  return n.unit.sec === 'L' ? 'head' : n.unit.sec === 'R' ? 'seed' : n.unit.sec === 'G' ? 'star' : 'sword';
}
function viewPath() {
  const cur = currentNode(), tx = todayXP(), segs = 10, on = Math.min(segs, Math.floor(tx / S.goal * segs));
  let html = `<div class="win goal"><span class="small" style="color:var(--gold)">${ic('exp')}</span><div style="min-width:0;flex:1"><div class="small">今日の冒険 ${Math.min(tx, S.goal)} / ${S.goal} EXP</div>
<div class="bar" aria-hidden="true">${Array.from({ length: segs }, (_, i) => `<i class="${i < on ? 'on' : ''}"></i>`).join('')}</div></div>
<small>${tx >= S.goal ? '目標達成！' : 'あと' + (S.goal - tx)}</small></div>`;
  let gi = 0;
  UNITS.forEach((u, ui) => {
    html += `<section class="world sec-${u.sec}" id="w-${u.id}">
<div class="win wbanner"><div class="meta"><div class="wtag">WORLD ${ui} · ${SECN[u.sec]}</div><h2>${esc(WORLD[u.id])}</h2><p class="wsub">${esc(u.title)} ― ${esc(u.sub)}</p>
<div class="roi">得点効率 ${[1, 2, 3].map(i => ic('seed', i <= u.roi ? '' : 'off')).join('')}</div></div>
${u.learn ? `<button class="scrollbtn" data-learn="${u.id}" aria-label="${esc(u.title)}の巻物を読む">${ic('scroll')}</button>` : ''}</div>
<div class="nodes">`;
    u.nodes.forEach(n => {
      const done = isDone(n), open = isOpen(n), isCur = cur === n, off = ZIG[gi % 8], st = done ? S.done[n.id].s : 0;
      const isSel = selNode === n.id;
      html += `<div class="tw ${isCur ? 'cur' : ''}" style="transform:translateX(${off}px)">
${isCur ? `<span class="nexttag blink">NEXT</span><span class="walker" style="${off >= 0 ? 'left:-80px' : 'right:-80px'}">${toffee('idle')}</span>` : ''}
<button class="tile ${done ? 'done' : open ? '' : 'locked'} ${isSel ? 'sel' : ''}" data-node="${n.id}" aria-label="${n.stage} ${esc(n.title)}${done ? ' クリア済み' : open ? '' : ' ロック中'}">${ic(nodeIcon(n))}</button>
${done && n.kind !== 'learn' ? `<div class="tstars">${[1, 2, 3].map(i => ic('star', i <= st ? '' : 'off')).join('')}</div>` : `<div class="tlabel">${esc(n.title)}</div>`}
</div>`;
      gi++;
    });
    html += `</div></section>`;
  });
  html += `<div class="mapend">${toffee('joy')}<p>塔のてっぺんで、ひまわりの種の宴じゃ！</p></div>`;
  return html;
}
function drawTrails() {
  $$('.nodes').forEach(box => {
    const old = $('.trail', box); if (old) old.remove();
    const b = box.getBoundingClientRect();
    const pts = $$('.tile', box).map(t => { const r = t.getBoundingClientRect(); return `${Math.round(r.left + r.width / 2 - b.left)},${Math.round(r.top + r.height / 2 - b.top)}`; });
    if (pts.length < 2) return;
    box.insertAdjacentHTML('afterbegin', `<svg class="trail" width="${b.width}" height="${b.height}" aria-hidden="true"><polyline points="${pts.join(' ')}"/></svg>`);
  });
}
let rz = null;
addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { if (tab === 'path') drawTrails(); }, 150); });

function sheetLine(n) {
  const u = n.unit, key = n.id + dayStr();
  if (!isOpen(n)) return pickStable(LINES.locked, key);
  if (isDone(n)) return pickStable(LINES.replay, key);
  if (n.kind === 'learn') return pickStable(LINES.learn, key);
  if (n.kind === 'check') return pickStable(LINES.check, key);
  if (n.kind === 'mock') return pickStable(LINES.mock, key);
  return pickStable(LINES.start[u.sec], key);
}
function openSheet(n) {
  const u = n.unit, open = isOpen(n), done = isDone(n), cur = currentNode();
  const cnt = n.kind === 'practice' ? n.items.length : n.kind === 'check' ? (u.groups.length ? 12 : 10) : n.kind === 'mock' ? 15 : u.learn.length;
  const desc = !open ? 'ひとつ前のステージをクリアすると開放' :
    n.kind === 'learn' ? `巻物${cnt}枚 ・ 解き方と考え方` :
      n.kind === 'check' ? `${cnt}問 ・ このワールドの総まとめ＋前のワールドの復習` :
        n.kind === 'mock' ? `${cnt}問 ・ リスニング→文法→読解の本番順` : `${cnt}問 ・ まちがえた問題は最後にもう一度出る`;
  const xp = n.kind === 'learn' ? 5 : n.kind === 'check' ? 15 : n.kind === 'mock' ? 20 : 10;
  const mood = !open ? 'think' : done ? 'joy' : 'idle';
  layer.innerHTML = `<div class="sheet sec-${u.sec}"><div class="win" role="dialog" aria-label="${n.stage}">
<div class="head">${toffee(mood)}<div style="min-width:0"><div class="stg">${n.stage} · ${esc(WORLD[u.id])}</div><h3>${esc(n.title)}</h3><p class="say">${esc(sheetLine(n))}</p></div></div>
<p class="desc">${desc}</p>
${open ? `<button class="btn ${done ? 'sky' : 'gold'}" data-start="${n.id}">▶ ${done ? 'もう一度' : 'はじめる'}　+${xp} EXP</button>` : ''}
${cur && cur !== n ? `<button class="linkbtn" data-act="tocurrent">次のステージ（${cur.stage}）にもどる</button>` : ''}
</div></div>`;
}
const closeLayer = () => { layer.innerHTML = ''; };
function restSheet() {
  if (tab !== 'path' || layer.children.length) return;
  const n = (selNode && NODE[selNode]) || currentNode();
  if (n) openSheet(n);
}

/* ───────── 宿屋（復習） ───────── */
function viewReview() {
  const m = S.mist.filter(id => Q[id]).length;
  const doneUnits = UNITS.filter(u => u.nodes.some(isDone) && u.pool.length);
  const rows = UNITS.filter(u => S.ua[u.id] && S.ua[u.id][1]).map(u => {
    const [c, n] = S.ua[u.id], p = Math.round(c / n * 100);
    return `<div class="uacc sec-${u.sec}"><span>${esc(WORLD[u.id])}</span><div class="gauge"><i style="width:${p}%"></i></div><span>${p}%</span></div>`;
  });
  return `<h1 class="page-h">宿屋 <small>復習</small></h1>
<div class="npc" style="margin-top:14px">${toffee(m ? 'think' : 'joy')}<div class="bubble">${m ? `まちがえた問題が${m}匹うろついておる。倒せばHPが2戻るぞい` : 'まちがいはひとつもない。ゆるりと休んでいくがよい'}</div></div>
<div class="list">
<button class="win item sec-L" data-act="review" ${m ? '' : 'disabled'}><span class="icbox">${ic('heart')}</span><span><b>まちがいを倒す（${m}問）</b><small>やりきると HP+2</small></span><span class="chev">${ic('chev')}</span></button>
<button class="win item sec-S" data-act="random" ${doneUnits.length ? '' : 'disabled'}><span class="icbox">${ic('dice')}</span><span><b>ランダム10問</b><small>${doneUnits.length ? 'これまでのワールドからシャッフル出題' : 'ワールドを1つ進めると使える'}</small></span><span class="chev">${ic('chev')}</span></button>
<button class="win item sec-R" data-act="words"><span class="icbox">${ic('cards')}</span><span><b>単語ずかん</b><small>同義語ペアを一覧で確認</small></span><span class="chev">${ic('chev')}</span></button>
</div>
<div class="win panel"><h3>ワールド別の正答率</h3>${rows.length ? rows.join('') + '<p class="small" style="margin-top:10px">低いワールドは、マップのステージをもう一度プレイしよう。</p>' : '<p class="small">問題を解くとここに表示されるよ。</p>'}</div>`;
}
function viewWords() {
  const us = UNITS.filter(u => u.vocab);
  return `<button class="back" data-act="back">${ic('back')}宿屋にもどる</button><h1 class="page-h">単語ずかん</h1><p class="lead">左の単語と右の同義語をペアで覚えよう。</p>` +
    us.map(u => `<div class="win article"><h3 style="margin-top:0">${esc(WORLD[u.id])}</h3><table class="tbl"><tr><th>単語</th><th>同義語</th><th>意味</th></tr>${u.vocab.map(v => `<tr><td>${esc(v[0])}</td><td>${esc(v[2])}</td><td>${esc(v[6])}</td></tr>`).join('')}</table></div>`).join('');
}

/* ───────── 図書館（ガイド） ───────── */
function viewGuide() {
  const learned = UNITS.filter(u => u.learn && isOpen(u.nodes[0]));
  const secs = ['G', 'G', 'S', 'S', 'R', 'L', 'G', 'S', 'G'];
  return `<h1 class="page-h">図書館 <small>ガイド</small></h1>
<div class="npc" style="margin-top:14px">${toffee('think')}<div class="bubble">TOEFL ITPのしくみ・取り組み方・考え方の書がそろっておる。好きに読むがよい</div></div>
<div class="list">${GUIDE.map((g, i) => `<button class="win item sec-${secs[i] || 'G'}" data-article="${g.id}"><span class="icbox">${ic('scroll')}</span><span><b>${esc(g.title)}</b><small>${esc(g.sub)}</small></span><span class="chev">${ic('chev')}</span></button>`).join('')}</div>
<h2 class="page-h" style="font-size:19px;margin-top:28px">作戦の巻物</h2><p class="lead">開放したワールドの解き方カードを読み返せるよ。</p>
<div class="list">${learned.map(u => `<button class="win item sec-${u.sec}" data-learn="${u.id}"><span class="icbox">${ic('scroll')}</span><span><b>${esc(WORLD[u.id])}</b><small>${esc(u.title)} ・ 巻物${u.learn.length}枚</small></span><span class="chev">${ic('chev')}</span></button>`).join('')}</div>`;
}
function viewArticle(id) {
  const g = GUIDE.find(x => x.id === id);
  return `<button class="back" data-act="back">${ic('back')}本だなにもどる</button><h1 class="page-h">${esc(g.title)}</h1><div class="win article">${g.html}</div>`;
}

/* ───────── ステータス ───────── */
function interp(pts, c) {
  for (let i = 1; i < pts.length; i++) if (c <= pts[i][0]) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; return y0 + (y1 - y0) * (c - x0) / (x1 - x0); }
  return pts[pts.length - 1][1];
}
function predict(sec) {
  const a = S.stats[sec] || []; if (a.length < 10) return null;
  const acc = a.reduce((x, y) => x + y, 0) / a.length;
  return { acc, n: a.length, score: Math.round(interp(SCALE[sec].pts, acc * SCALE[sec].n)) };
}
function viewMe() {
  const nDone = ALL.filter(isDone).length, { lv, cur } = levelOf(S.xp);
  const pr = { L: predict('L'), S: predict('S'), R: predict('R') };
  const tgtSec = S.target / 10;
  const total = pr.L && pr.S && pr.R ? Math.round((pr.L.score + pr.S.score + pr.R.score) * 10 / 3) : null;
  const srow = (k, name) => {
    const p = pr[k], max = k === 'R' ? 67 : 68;
    const w = p ? (p.score - 31) / (max - 31) * 100 : 0, t = Math.min(100, Math.max(0, (tgtSec - 31) / (max - 31) * 100));
    return `<div class="srow sec-${k}"><span>${name}</span><div class="gauge"><i style="width:${w}%"></i><span class="tgt" style="left:${t}%"></span></div><span>${p ? p.score : '--'}</span></div>`;
  };
  const days = Array.from({ length: 7 }, (_, i) => dayOffset(i - 6));
  const mx = Math.max(S.goal, ...days.map(d => S.hist[d] || 0));
  const wd = ['日', '月', '火', '水', '木', '金', '土'];
  const need = ['L', 'S', 'R'].filter(k => !pr[k]).map(k => `${SECN[k]}あと${10 - (S.stats[k] || []).length}問`).join('・');
  return `<h1 class="page-h">ステータス</h1>
${cloudPanel()}
<div class="win panel"><div class="row">${toffee('idle')}<div style="min-width:0;flex:1"><div class="p8" style="font-size:12px;color:var(--gold)">TOFFEE Lv.${lv}</div><div class="expbar" style="width:100%;margin-top:8px"><i style="width:${cur / PERLV * 100}%"></i></div><div class="small" style="margin-top:4px">次のレベルまで ${PERLV - cur} EXP</div></div></div>
<div class="stats"><div>HP<b>${S.set.inf ? '∞' : S.hearts + '/' + MAXH}</b></div><div>EXP<b>${S.xp}</b></div><div>連続<b>${S.streak}日</b></div><div>最高連続<b>${S.best}日</b></div><div>ひまわりの種<b>${S.seeds}</b></div><div>クリア<b>${nDone}/${ALL.length}</b></div></div></div>
<div class="win panel"><h3>予想スコア（目安）</h3>
<div class="row" style="align-items:flex-end;gap:10px"><span class="score-big">${total ?? '---'}</span><span class="small">目標 ${S.target}点${total ? (total >= S.target ? ' ・ 達成ペース！' : ` ・ あと${S.target - total}点`) : ''}</span></div>
${srow('L', 'リスニング')}${srow('S', '文法')}${srow('R', '読解')}
<p class="small" style="margin-top:10px">${total ? '直近の正答率をスコア換算表の傾向にあてはめた目安。白い線は目標に必要なセクション平均。' : `各セクション10問以上で表示（${need}）`}</p></div>
<div class="win panel"><h3>この7日間の EXP</h3><div class="week">${days.map(d => { const v = S.hist[d] || 0; const dt = new Date(d + 'T00:00'); return `<div class="col ${v ? '' : 'zero'}"><em>${v}</em><i style="height:${Math.max(4, v / mx * 90)}px"></i><small>${wd[dt.getDay()]}</small></div>`; }).join('')}</div></div>
<div class="win panel"><h3>せってい</h3>
<p class="small" style="margin:0">目標スコア</p><div class="seg">${[450, 500, 550, 600].map(v => `<button data-target="${v}" aria-pressed="${S.target === v}">${v}点</button>`).join('')}</div>
<p class="small" style="margin:12px 0 0">1日の目標</p><div class="seg">${[[10, 'ゆるく'], [20, 'ふつう'], [30, 'しっかり'], [50, 'がっつり']].map(([v, l]) => `<button data-goal="${v}" aria-pressed="${S.goal === v}">${l} ${v}</button>`).join('')}</div>
<p class="small" style="margin:12px 0 0">リスニングの速さ</p><div class="seg">${[[0.75, 'ゆっくり'], [0.95, 'ふつう'], [1.1, '速め']].map(([v, l]) => `<button data-rate="${v}" aria-pressed="${S.set.rate === v}">${l}</button>`).join('')}</div>
<div style="margin-top:10px">
<div class="switch"><span>効果音</span><button class="tog" role="switch" data-set="sound" aria-checked="${S.set.sound}" aria-label="効果音"></button></div>
<div class="switch"><span>HP無制限<small>まちがえてもHPが減らない</small></span><button class="tog" role="switch" data-set="inf" aria-checked="${S.set.inf}" aria-label="HP無制限"></button></div>
<div class="switch"><span>全ステージ開放<small>好きなワールドから始めたいとき</small></span><button class="tog" role="switch" data-set="all" aria-checked="${S.set.all}" aria-label="全ステージ開放"></button></div>
</div></div>
<div class="win panel"><h3>セーブデータ</h3><p class="small" style="margin:0 0 10px">記録はこの端末のブラウザに保存されます。</p>
<button class="btn ghost wide" data-act="reset1">セーブデータを消す</button></div>`;
}

/* ───────── モーダル ───────── */
function modal(html) {
  if (L && $('#lesson')) { const m = document.createElement('div'); m.className = 'modal'; m.innerHTML = `<div class="win box" role="dialog">${html}</div>`; layer.appendChild(m); return; }
  layer.innerHTML = `<div class="modal" data-act="closemodal"><div class="win box" role="dialog">${html}</div></div>`;
}
function heartsModal() {
  modal(`${toffee(S.hearts ? 'idle' : 'sad')}<h3>HP ${S.set.inf ? '∞' : S.hearts + ' / ' + MAXH}</h3>
<p>まちがえるとHPが1減るのじゃ。${S.hearts < MAXH && !S.set.inf ? `30分ごとに1回復（次まで約${heartWait()}）。` : ''}宿屋で復習をやりきれば HP+2 じゃ。</p>
<div class="stack"><button class="btn pink" data-act="review" ${S.mist.length ? '' : 'disabled'}>宿屋で回復する</button><button class="btn ghost" data-act="closemodal">とじる</button></div>`);
}

/* ───────── レッスン（バトル） ───────── */
let L = null;
function startNode(id) {
  const n = NODE[id]; selNode = null; closeLayer();
  if (n.kind === 'learn') return startLearn(n.unit, n);
  startLesson({ node: n, unit: n.unit, kind: n.kind, items: lessonItems(n) });
}
function needHearts() {
  if (S.set.inf || S.hearts > 0) return false;
  modal(`${toffee('sad')}<h3>HPが尽きてしもうた…</h3><p>宿屋でまちがえた問題を倒せばHPが戻る。30分ごとにもひとつ戻るぞい（次まで約${heartWait()}）。</p>
<div class="stack"><button class="btn pink" data-act="review" ${S.mist.length ? '' : 'disabled'}>宿屋へ行く</button><button class="btn ghost" data-act="closemodal">あとで</button></div>`);
  return true;
}
function startLesson(o) {
  const free = o.kind === 'review';
  if (!free && needHearts()) return;
  L = Object.assign({ queue: o.items.slice(), i: 0, total: o.items.length, solved: 0, firstC: 0, firstN: 0, seen: new Set(), combo: 0, free, played: new Set(), t0: Date.now(), seeds: 0,
    xpBase: { practice: 10, check: 15, mock: 20, review: 10, random: 10 }[o.kind] || 10 }, o);
  stopSpeak(); sfx('start');
  const sec = o.unit ? o.unit.sec : 'L';
  layer.innerHTML = `<div class="overlay sec-${sec}" id="lesson"><div class="inner gutter">
<div class="lhead"><button class="xbtn" data-act="quit" aria-label="にげる">${ic('x')}</button><div class="prog" id="prog"></div><span id="lh">${hpHtml(S.hearts)}</span></div>
<div class="lbody" id="lbody"></div></div><div class="lfoot" id="lfoot"><div class="inner gutter" style="max-width:640px;margin:0 auto"></div></div></div>`;
  showQ();
}
function setProg() {
  const p = $('#prog'); if (!p) return;
  if (p.children.length !== L.total) p.innerHTML = Array.from({ length: L.total }, () => '<i></i>').join('');
  Array.from(p.children).forEach((x, i) => x.classList.toggle('on', i < L.solved));
}
function setHP() { const h = $('#lh'); if (h) h.innerHTML = L.free ? `<span class="chip" style="color:var(--red)">${ic('heart')}∞</span>` : hpHtml(S.hearts); }
function foot(html, cls = '') { const f = $('#lfoot'); f.className = 'lfoot ' + cls; f.firstElementChild.innerHTML = html; }

function showQ() {
  setProg(); setHP();
  if (L.i >= L.queue.length) return finishLesson();
  const q = L.queue[L.i];
  L.cur = q; L.sel = null; L.answered = false;
  L.order = q.o ? shuffle([0, 1, 2, 3]) : null;
  const b = $('#lbody');
  const u = UNITS.find(x => x.id === q.unit);
  b.className = 'lbody sec-' + (secOf(q) || (u ? u.sec : 'G'));
  const menu = () => `<div class="menu">${L.order.map((oi, k) => `<button class="opt" data-opt="${k}" aria-pressed="false"><span class="k">${LET[k]}</span><span>${esc(q.o[oi])}</span></button>`).join('')}</div>`;
  let h = '';
  if (q.t === 'fb') {
    h = `<span class="qtag">STRUCTURE</span><p class="qtitle">空所に入る最も適切なものを選ぼう</p>
<div class="win qwin">${esc(q.q).replace('___', '<span class="blank" id="blank">&nbsp;</span>')}</div>${menu()}`;
  } else if (q.t === 'er') {
    let k = 0;
    const sent = q.q.split(/(\{[^}]+\})/).map(part => {
      if (/^\{.*\}$/.test(part)) { const i = k++; return `<span class="seg-u" role="button" tabindex="0" data-seg="${i}" aria-pressed="false">${esc(part.slice(1, -1))}<sub>${LET[i]}</sub></span>`; }
      return esc(part);
    }).join('');
    h = `<span class="qtag">WRITTEN EXPRESSION</span><p class="qtitle">下線部のうち、まちがっているものを1つタップしよう</p><div class="win ersent">${sent}</div>`;
  } else if (q.t === 'mc') {
    h = `<span class="qtag">作戦クイズ</span><p class="qtitle">${q.q}</p>${menu()}`;
  } else if (q.t === 'vc') {
    const sent = esc(q.s).replace(new RegExp('\\b(' + q.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b'), '<span class="hl">$1</span>');
    h = `<span class="qtag">VOCABULARY</span><div class="vword">${esc(q.w)}</div>
<p class="qtitle" style="font-size:16px;margin-top:4px">The word "${esc(q.w)}" is closest in meaning to …</p><div class="win qwin" style="font-size:17px">${sent}</div>${menu()}`;
  } else if (q.t === 'rd') {
    const c = CTX[q.ctx];
    let p = esc(c.p);
    if (q.hl) { const hl = esc(q.hl); const at = p.indexOf(hl); if (at >= 0) p = p.slice(0, at) + '<mark id="hlmark">' + hl + '</mark>' + p.slice(at + hl.length); }
    p = p.split(/\n\n/).map(x => `<p>${x}</p>`).join('');
    h = `<span class="qtag">READING · ${esc(c.title)}</span>
<details class="win passage" open><summary><span>本文</span><span>たたむ／ひらく</span></summary><div class="ptext">${p}</div></details>
<p class="qtitle" style="font-size:18px">${esc(q.q)}</p>${menu()}`;
  } else if (q.t === 'ls' || q.t === 'lt') {
    const isLong = q.t === 'lt', c = isLong ? CTX[q.ctx] : null;
    h = `<span class="qtag">LISTENING · ${isLong ? esc(c.title) : 'PART A'}</span>
<div class="audio"><button class="play" data-act="play" aria-label="音声を再生">${ic('speaker')}</button><button class="play slow" data-act="playslow" aria-label="ゆっくり再生">${ic('slow')}</button>
<p>${TTS.ok ? (isLong ? '長い音声。最初の数文で話題をつかもう。何度でも再生できるよ' : '左はふつう、右はゆっくり。何度でも聞けるよ') : 'このブラウザは読み上げに未対応のため、スクリプトを表示しています'}</p></div>
${TTS.ok ? '' : `<div class="script">${scriptHtml(q)}</div>`}
<p class="qtitle" style="font-size:18px">${esc(q.q)}</p>${menu()}`;
  } else if (q.t === 'pr') {
    const left = shuffle(q.pairs.map((p, i) => [i, p[0]])), right = shuffle(q.pairs.map((p, i) => [i, p[1]]));
    L.pr = { left: null, right: null, done: 0, err: 0 };
    h = `<span class="qtag">PAIR MATCH</span><p class="qtitle">同じ意味のペアをそろえよう</p>
<div class="pairs"><div class="colp">${left.map(([i, w]) => `<button class="pbtn" data-pl="${i}">${esc(w)}</button>`).join('')}</div><div class="colp">${right.map(([i, w]) => `<button class="pbtn" data-pr="${i}">${esc(w)}</button>`).join('')}</div></div>`;
  }
  b.innerHTML = h; b.scrollTop = 0;
  if (q.t === 'rd') { const mk = $('#hlmark'); if (mk) { const box = mk.closest('.ptext'); box.scrollTop = Math.max(0, mk.offsetTop - box.offsetTop - 60); } }
  foot(q.t === 'pr' ? `<button class="btn wide" disabled>ペアをすべてそろえよう</button>` : `<button class="btn gold wide" id="checkbtn" data-act="check" disabled>▶ けってい</button>`);
  if ((q.t === 'ls' || (q.t === 'lt' && !L.played.has(q.ctx))) && TTS.ok) setTimeout(() => { if (L && L.cur === q && !L.answered) play(1); }, 450);
}
function scriptHtml(q) {
  const lines = q.t === 'lt' ? CTX[q.ctx].d : q.d;
  const nm = { M: 'Man', W: 'Woman', P: 'Professor', N: 'Narrator' };
  return lines.map(([s, t]) => `<div><b>${nm[s]}:</b>${esc(t)}</div>`).join('') + (q.t === 'ls' ? `<div><b>Narrator:</b>${esc(q.q)}</div>` : '');
}
function play(mult) {
  const q = L && L.cur; if (!q || (q.t !== 'ls' && q.t !== 'lt')) return;
  const lines = (q.t === 'lt' ? CTX[q.ctx].d : q.d).concat([['N', q.q]]);
  if (q.t === 'lt') L.played.add(q.ctx);
  const btn = $(mult < 1 ? '.play.slow' : '.play:not(.slow)');
  $$('.play').forEach(x => x.classList.remove('playing'));
  if (btn) btn.classList.add('playing');
  speak(lines, S.set.rate * mult, () => $$('.play').forEach(x => x.classList.remove('playing')));
}
function select(k) {
  if (!L || L.answered) return;
  if (L.sel !== k) sfx('tap');
  L.sel = k;
  $$('#lbody [data-opt],#lbody [data-seg]').forEach(x => x.setAttribute('aria-pressed', String(+(x.dataset.opt ?? x.dataset.seg) === k)));
  const c = $('#checkbtn'); if (c) c.disabled = false;
}
function record(q, ok) {
  if (L.seen.has(q.id)) return;
  L.seen.add(q.id);
  L.firstN++; if (ok) { L.firstC++; L.seeds++; S.seeds++; }
  const sec = secOf(q);
  if (sec && q.t !== 'pr') { const a = S.stats[sec]; a.push(ok ? 1 : 0); if (a.length > 80) a.shift(); }
  if (q.unit) { const ua = S.ua[q.unit] || (S.ua[q.unit] = [0, 0]); ua[1]++; if (ok) ua[0]++; }
}
function check() {
  const q = L.cur; if (L.answered || L.sel === null) return;
  L.answered = true;
  let ok, ansText;
  if (q.t === 'er') {
    ok = L.sel === q.a;
    const segs = $$('#lbody [data-seg]');
    segs[q.a].classList.add('ok'); if (!ok) segs[L.sel].classList.add('ng');
    ansText = `誤りは (${LET[q.a]})「${esc(segs[q.a].firstChild.textContent)}」 → 正しくは ${esc(q.fix)}`;
    segs.forEach(x => x.removeAttribute('tabindex'));
  } else {
    const right = L.order.indexOf(0);
    ok = L.sel === right;
    const opts = $$('#lbody [data-opt]');
    opts.forEach(x => x.disabled = true);
    opts[right].classList.add('ok'); if (!ok) opts[L.sel].classList.add('ng');
    if (q.t === 'fb') { const bl = $('#blank'); if (bl) bl.textContent = q.o[0]; }
    ansText = `正解は (${LET[right]}) ${esc(q.o[0])}`;
  }
  record(q, ok);
  if (!L.free && !ok && !S.mist.includes(q.id)) { S.mist.push(q.id); if (S.mist.length > 300) S.mist.shift(); }
  if (L.kind === 'review') { S.mist = S.mist.filter(x => x !== q.id); if (!ok) S.mist.push(q.id); }
  let line;
  if (ok) {
    L.solved++; L.combo++; sfx('ok');
    const sec = secOf(q);
    line = sec && Math.random() < .4 ? pick(LINES.okSec[sec]) : pick(LINES.ok);
    if (LINES.combo[L.combo]) { const msg = LINES.combo[L.combo]; setTimeout(() => sfx('combo'), 420); toast(`${L.combo} COMBO!`); line = msg; }
  } else {
    L.combo = 0; sfx('ng');
    if (!L.free) { loseHeart(); setHP(); }
    L.queue.push(q);
    line = Math.random() < .5 && LINES.ngType[q.t] ? LINES.ngType[q.t] : pick(LINES.ng);
  }
  save(); setProg();
  const extra = q.t === 'vc' ? `<div>${esc(q.w)} ＝ ${esc(q.o[0])}（${esc(q.jp)}）</div>` : '';
  const scr = (q.t === 'ls' || q.t === 'lt') && TTS.ok ? `<button class="linkbtn" data-act="script">スクリプトを見る</button><div class="script" id="scr" hidden>${scriptHtml(q)}</div>` : '';
  foot(`<div class="dlg">${toffee(ok ? 'eat' : 'wow')}<div style="min-width:0"><div class="who">TOFFEE</div><p class="line" id="say"></p></div></div>
<div class="fb-body">${ok && q.t !== 'er' ? '' : `<div class="ans">${ansText}</div>`}${extra}<div class="exp">${q.e ? esc(q.e) : ''}</div>${scr}${!ok ? '<div class="small" style="margin-top:4px">この問題は、あとでもう一度出てくるぞい</div>' : ''}</div>
<button class="btn wide ${ok ? '' : 'red'}" data-act="next" id="nextbtn">▶ つぎへ</button>`, ok ? 'ok' : 'ng');
  typeInto($('#say'), line);
  const nb = $('#nextbtn'); if (nb) nb.focus({ preventScroll: true });
}
function toast(t) { const c = document.createElement('div'); c.className = 'toast'; c.textContent = t; document.body.appendChild(c); setTimeout(() => c.remove(), 1300); }
function next() {
  stopSpeak(); clearInterval(typeTimer);
  if (!L.free && !S.set.inf && S.hearts <= 0) return failLesson();
  L.i++; showQ();
}
function pairTap(side, i, btn) {
  const pr = L.pr; if (btn.classList.contains('gone')) return;
  $$(`#lbody [data-p${side}]`).forEach(x => x.classList.remove('sel'));
  pr[side === 'l' ? 'left' : 'right'] = i; btn.classList.add('sel');
  if (pr.left === null || pr.right === null) { sfx('tap'); return; }
  const lb = $(`#lbody [data-pl="${pr.left}"]`), rb = $(`#lbody [data-pr="${pr.right}"]`);
  if (pr.left === pr.right) { [lb, rb].forEach(x => { x.classList.remove('sel'); x.classList.add('gone'); x.disabled = true; }); pr.done++; sfx('match'); }
  else { pr.err++; sfx('ng'); [lb, rb].forEach(x => { x.classList.remove('sel'); x.classList.add('bad'); setTimeout(() => x.classList.remove('bad'), 320); }); }
  pr.left = pr.right = null;
  if (pr.done === L.cur.pairs.length) {
    L.solved++; L.answered = true; setProg();
    foot(`<div class="dlg">${toffee('joy')}<div style="min-width:0"><div class="who">TOFFEE</div><p class="line" id="say"></p></div></div>
<div class="fb-body">${L.cur.pairs.map(p => `${esc(p[0])} ＝ ${esc(p[1])}`).join('　/　')}</div><button class="btn wide" data-act="next" id="nextbtn">▶ つぎへ</button>`, 'ok');
    typeInto($('#say'), pr.err ? 'そろったのう。単語の宝箱をひとつ開けたぞ' : '一度も迷わなんだか。単語探しの才があるのう');
  }
}
function finishLesson() {
  stopSpeak();
  const acc = L.firstN ? L.firstC / L.firstN : 1;
  const stars = acc >= .9 ? 3 : acc >= .7 ? 2 : 1;
  const perfect = L.firstN > 0 && L.firstC === L.firstN;
  const xp = L.xpBase + (perfect ? 5 : 0);
  const lvBefore = levelOf(S.xp).lv;
  if (L.node) { const prev = S.done[L.node.id]; S.done[L.node.id] = { s: Math.max(prev ? prev.s : 0, stars), n: (prev ? prev.n : 0) + 1 }; }
  if (L.kind === 'review') S.hearts = Math.min(MAXH, S.hearts + 2);
  const before = todayXP();
  addXP(xp);
  const newStreak = bumpStreak();
  const lvAfter = levelOf(S.xp).lv;
  save();
  const goalHit = before < S.goal && todayXP() >= S.goal;
  const title = L.kind === 'review' ? 'REST<br>COMPLETE' : perfect ? 'PERFECT!' : 'STAGE<br>CLEAR!';
  const msg = L.kind === 'review' ? '宿屋でひと休みじゃ。HPが2戻ったぞい' : perfect ? LINES.result.perfect : acc >= .8 ? LINES.result.good : acc >= .6 ? LINES.result.ok : LINES.result.low;
  const sub = goalHit ? '今日の目標を果たしたのう。あっぱれじゃ' : newStreak ? `連続 ${S.streak}日目じゃ。続ける者がいちばん強い` : '';
  const mins = Math.max(1, Math.round((Date.now() - L.t0) / 60000));
  const seeds = L.seeds, isReview = L.kind === 'review', hasNode = !!L.node;
  L = null;
  layer.innerHTML = `<div class="overlay"><div class="inner gutter center" style="justify-content:center;flex:1;overflow-y:auto;padding-block:20px">
<div class="chestbox" id="chest">${ic('chest')}</div>
<div class="reveal center" id="reveal" hidden style="width:100%">
${toffee('joy')}<div class="clear">${title}</div>
${hasNode && !isReview ? `<div class="tstars" style="margin-top:8px">${[1, 2, 3].map(i => ic('star', i <= stars ? '' : 'off').replace('class="ic ', 'style="width:36px;height:36px" class="ic ')).join('')}</div>` : ''}
<p class="say" style="margin-top:10px">${esc(msg)}</p>${sub ? `<p class="small" style="margin:2px 0 0">${esc(sub)}</p>` : ''}
<div class="win rstats">
<div class="rline"><span>EXP</span><b style="color:var(--ok)">${ic('exp')}+${xp}</b></div>
<div class="rline"><span>ひまわりの種</span><b style="color:var(--gold)">${ic('seed')}+${seeds}</b></div>
<div class="rline"><span>せいかい率</span><b>${Math.round(acc * 100)}%</b></div>
<div class="rline"><span>じかん</span><b>${ic('clock')}${mins}分</b></div>
</div>
${lvAfter > lvBefore ? `<div class="lvup">LEVEL UP! Lv.${lvAfter}</div><p class="small">${esc(LINES.levelup)}</p>` : ''}
<button class="btn gold wide" style="max-width:440px;margin-top:20px" data-act="done">▶ マップにもどる</button>
</div></div></div>`;
  const reveal = () => {
    const c = $('#chest'), r = $('#reveal'); if (!c || !r) return;
    c.hidden = true; r.hidden = false; sfx(isReview ? 'heal' : 'loot'); pixelBurst();
    if (lvAfter > lvBefore) setTimeout(() => sfx('levelup'), 700);
  };
  sfx('chest');
  if (REDUCED) reveal(); else setTimeout(reveal, 750);
}
function failLesson() {
  stopSpeak(); L = null; sfx('fail');
  layer.innerHTML = `<div class="overlay"><div class="inner gutter center" style="justify-content:center;flex:1">${toffee('sad', 'toffee" style="width:128px;height:128px')}
<div class="clear" style="color:var(--red)">OOPS!</div><p class="say">ずっこけたのう…HPが尽きてしもうた</p><p class="lead" style="max-width:340px">宿屋でまちがえた問題を倒せば、HPが2戻る。苦手を片づけてから、また挑むがよい</p>
<div class="stack" style="width:100%;max-width:420px"><button class="btn pink" data-act="review" ${S.mist.length ? '' : 'disabled'}>▶ 宿屋で回復する</button><button class="btn ghost" data-act="done">マップにもどる</button></div></div></div>`;
}

/* 作戦の巻物（レクチャー） */
let learnCtl = null;
function startLearn(u, node) {
  let i = 0;
  const cards = u.learn;
  const draw = () => {
    const c = cards[i], last = i === cards.length - 1;
    layer.innerHTML = `<div class="overlay sec-${u.sec}"><div class="inner gutter">
<div class="lhead"><button class="xbtn" data-act="closelearn" aria-label="とじる">${ic('x')}</button><div class="prog">${cards.map((_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join('')}</div></div>
<div class="lbody"><div class="npc">${toffee(last ? 'joy' : i % 3 === 2 ? 'think' : 'idle')}<div class="bubble">${esc(LINES.scroll[i % LINES.scroll.length])}</div></div>
<article class="win scroll"><div class="wtag">${esc(WORLD[u.id])} · 巻物 ${i + 1}/${cards.length}</div><h2>${esc(c.h)}</h2>${c.b}</article></div></div>
<div class="lfoot"><div class="inner gutter" style="max-width:640px;margin:0 auto"><div class="lnav">
${i > 0 ? `<button class="btn ghost" data-act="lprev">もどる</button>` : ''}
<button class="btn ${last ? 'gold' : 'sky'}" data-act="${last ? 'lend' : 'lnext'}">${last ? (node && !isDone(node) && isOpen(node) ? '▶ 読みおわった +5 EXP' : '▶ 読みおわった') : '▶ つぎへ'}</button></div></div></div></div>`;
  };
  learnCtl = {
    next() { if (i < cards.length - 1) { i++; sfx('msg'); draw(); } },
    prev() { if (i > 0) { i--; draw(); } },
    end() {
      learnCtl = null;
      if (node && !isDone(node) && isOpen(node)) { S.done[node.id] = { s: 3, n: 1 }; addXP(5); bumpStreak(); save(); sfx('loot'); }
      closeLayer(); render('smooth');
    }
  };
  sfx('msg'); draw();
}

/* タイトル画面・はじめての設定 */
let obCtl = null;
function onboarding() {
  let step = 0, target = S.target, goal = S.goal;
  const draw = () => {
    let h = '';
    if (step === 0) h = `${toffee('idle', 'toffee" style="width:160px;height:160px')}<div class="title-logo">TOFFEE'S<br>ITP QUEST</div><div class="title-sub">トッフィーのITPクエスト</div>
<button class="btn gold" style="margin-top:34px;min-width:240px" data-ob="next"><span class="blink">▶</span> PRESS START</button>`;
    else if (step === 1) h = `<div class="npc" style="max-width:440px">${toffee('joy')}<div class="bubble" style="text-align:left">ふぉっふぉっ、よう来たのう。わしはトッフィー。生まれて半年のハムスターじゃが、ITPの塔のことならよう知っておる。点になりやすい順に、わしが道案内をしてしんぜよう。おぬしの目標は何点じゃ？</div></div>
<div class="choice">${[[450, 'まずは基礎固め'], [500, 'バランスよく底上げ'], [550, '得意を伸ばして上位へ'], [600, '全セクションで高得点']].map(([v, t]) => `<button class="opt" data-obt="${v}" aria-pressed="${target === v}"><span class="k">${v}</span><span>${t}</span></button>`).join('')}</div>
<button class="btn gold" style="margin-top:14px;min-width:240px" data-ob="next">▶ けってい</button>`;
    else h = `<div class="npc" style="max-width:440px">${toffee('think')}<div class="bubble" style="text-align:left">一日にどれほど冒険するかの？ 少しずつでも、毎日続ける者がいちばん強いのじゃ</div></div>
<div class="choice">${[[10, 'ゆるく', '約5分'], [20, 'ふつう', '約10分'], [30, 'しっかり', '約15分'], [50, 'がっつり', '約25分']].map(([v, a, b]) => `<button class="opt" data-obg="${v}" aria-pressed="${goal === v}"><span class="k">${v}</span><span>${a}（${b}）</span></button>`).join('')}</div>
<button class="btn gold" style="margin-top:14px;min-width:240px" data-ob="go">▶ 冒険に出る</button>`;
    layer.innerHTML = `<div class="overlay"><div class="inner gutter center" style="justify-content:center;flex:1;overflow-y:auto;padding-block:24px 30px">${h}</div></div>`;
  };
  obCtl = {
    next() { step++; sfx(step === 1 ? 'start' : 'msg'); draw(); },
    t(v) { target = v; sfx('tap'); draw(); },
    g(v) { goal = v; sfx('tap'); draw(); },
    go() { S.target = target; S.goal = goal; S.onboard = true; save(); obCtl = null; sfx('start'); closeLayer(); render(true); }
  };
  draw();
}

/* ───────── イベント ───────── */
document.addEventListener('click', e => {
  const t = e.target.closest('button,[data-seg],[data-act],.sheet,.modal');
  if (!t) { if ($('.sheet') && selNode) { selNode = null; closeLayer(); render(); } return; }
  if ($('.sheet') && !t.closest('.sheet') && !t.dataset.node && selNode) { selNode = null; }
  const d = t.dataset;
  if (d.tab) { tab = d.tab; sub = null; selNode = null; closeLayer(); render(tab === 'path' ? true : 'top'); return; }
  if (d.node) { const c = currentNode(); selNode = c && c.id === d.node ? null : d.node; sfx('msg'); closeLayer(); render(); return; }
  if (d.start) { startNode(d.start); return; }
  if (d.learn) { const u = UNITS.find(x => x.id === d.learn); startLearn(u, u.nodes[0].kind === 'learn' ? u.nodes[0] : null); return; }
  if (d.article) { sub = d.article; render('top'); return; }
  if (d.opt !== undefined && L) { select(+d.opt); return; }
  if (d.seg !== undefined && L) { select(+d.seg); return; }
  if (d.pl !== undefined && L) { pairTap('l', +d.pl, t); return; }
  if (d.pr !== undefined && L) { pairTap('r', +d.pr, t); return; }
  if (d.target) { S.target = +d.target; sfx('tap'); save(); render(); return; }
  if (d.goal) { S.goal = +d.goal; sfx('tap'); save(); render(); return; }
  if (d.rate) { S.set.rate = +d.rate; sfx('tap'); save(); render(); return; }
  if (d.set) { S.set[d.set] = !S.set[d.set]; save(); sfx('tap'); render(); return; }
  if (d.ob && obCtl) { obCtl[d.ob](); return; }
  if (d.obt && obCtl) { obCtl.t(+d.obt); return; }
  if (d.obg && obCtl) { obCtl.g(+d.obg); return; }
  switch (d.act) {
    case 'closemodal': if (e.target === t || t.tagName === 'BUTTON') { closeLayer(); restSheet(); } return;
    case 'tocurrent': { selNode = null; closeLayer(); render(true); return; }
    case 'talk': sfx('msg'); modal(`${toffee(pick(['idle', 'joy', 'think']))}<h3>トッフィー</h3><p style="color:var(--ink)">「${esc(pick(LINES.tips))}」</p><div class="stack"><button class="btn gold" data-act="closemodal">▶ OK</button></div>`); return;
    case 'hearts': heartsModal(); return;
    case 'login': CLOUD.err = ''; cloudSignIn(); return;
    case 'logout': if (CLOUD.auth) CLOUD.auth.signOut(); return;
    case 'streakinfo': modal(`${toffee(S.lastDay === dayStr() ? 'joy' : 'think')}<h3>連続 ${S.streak}日</h3><p>${S.lastDay === dayStr() ? '今日はもう冒険したのう。明日もひとつ進めば記録がのびるぞい' : '今日ひとつ進めば、連続記録がのびるぞい'}（最高 ${S.best}日）</p><div class="stack"><button class="btn gold" data-act="closemodal">▶ OK</button></div>`); return;
    case 'review': {
      const ids = S.mist.filter(id => Q[id]).slice(0, 10);
      if (!ids.length) return;
      closeLayer(); tab = 'review'; sub = null;
      startLesson({ node: null, unit: null, kind: 'review', items: ids.map(id => Q[id]) });
      return;
    }
    case 'random': {
      const pool = UNITS.filter(u => u.nodes.some(isDone)).flatMap(u => u.pool.filter(id => standalone(id) && Q[id].t !== 'mc'));
      if (!pool.length) return;
      startLesson({ node: null, unit: null, kind: 'random', items: sample(pool, 10).map(id => Q[id]) });
      return;
    }
    case 'words': sub = 'words'; render('top'); return;
    case 'back': sub = null; render('top'); return;
    case 'check': check(); return;
    case 'next': next(); return;
    case 'play': play(1); return;
    case 'playslow': play(0.72); return;
    case 'script': { const s = $('#scr'); if (s) { s.hidden = !s.hidden; t.textContent = s.hidden ? 'スクリプトを見る' : 'スクリプトをかくす'; } return; }
    case 'quit': modal(`${toffee('wow')}<h3>にげる？</h3><p>ここでにげると、このステージの進み具合は残らんぞ</p><div class="stack"><button class="btn gold" data-act="keepgoing">▶ たたかう</button><button class="btn ghost" data-act="reallyquit">にげる</button></div>`); return;
    case 'keepgoing': { const m = $('.modal'); if (m) m.remove(); return; }
    case 'reallyquit': stopSpeak(); L = null; closeLayer(); render(true); return;
    case 'done': closeLayer(); render('smooth'); return;
    case 'closelearn': learnCtl = null; closeLayer(); render(); return;
    case 'lnext': if (learnCtl) learnCtl.next(); return;
    case 'lprev': if (learnCtl) learnCtl.prev(); return;
    case 'lend': if (learnCtl) learnCtl.end(); return;
    case 'reset1': t.textContent = CLOUD.user ? 'もう一度押すと、アカウントの記録もすべて消えます' : 'もう一度押すと、すべての記録が消えます'; t.classList.remove('ghost'); t.classList.add('red'); t.dataset.act = 'reset2'; return;
    case 'reset2': S = JSON.parse(JSON.stringify(DEF)); save(); tab = 'path'; render(); onboarding(); return;
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if ($('.modal') && L) { $('.modal').remove(); return; } if ($('.modal') || (selNode && $('.sheet'))) { selNode = null; closeLayer(); render(); } return; }
  if (e.target.matches('[data-seg]') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); select(+e.target.dataset.seg); return; }
  if (L && !$('.modal')) {
    if (/^[1-4]$/.test(e.key) && !L.answered && L.cur && L.cur.t !== 'pr') { select(+e.key - 1); return; }
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') { if (L.answered) next(); else check(); }
  } else if (learnCtl && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { e.key === 'ArrowRight' ? learnCtl.next() : learnCtl.prev(); }
});
setInterval(() => { if (!L && !learnCtl && !obCtl && !$('.modal') && S.hearts < MAXH) { const before = S.hearts; refreshDaily(); if (S.hearts !== before) render(); } }, 60000);

refreshDaily();
render(true);
if (!S.onboard) onboarding();
cloudInit();

/* PWA：自分のURLで公開したときだけオフライン対応を有効にする */
try {
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
} catch (e) { /* 埋め込み表示などでは使えない */ }
})();
