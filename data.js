/* トッフィーのTOEFL ITP — 学習コンテンツ（問題・解説はすべてオリジナル）
   問題形式:
   ['fb', 文(___が空所), [正解, 誤1, 誤2, 誤3], 解説]           … Structure 空所補充
   ['er', 文({}で下線4か所), 誤りの番号(0-3), 正しい形, 解説]    … Written Expression 誤り指摘
   ['mc', 問い, [正解, 誤1, 誤2, 誤3], 解説]                    … 考え方・戦略クイズ
   ['ls', [[話者,セリフ]...], 設問, [正解,...], 解説]           … Listening Part A
   {t:'rd', title, p:本文, qs:[[設問,[正解,...],解説,強調語]]}   … Reading 長文
   {t:'lt', d:[[話者,セリフ]...], qs:[[設問,[正解,...],解説]]}  … Listening Part B/C
   vocab: [単語, 例文, 同義語(正解), 誤1, 誤2, 誤3, 日本語]
   選択肢は表示時にシャッフルされる（正解はデータ上いつも先頭）。 */

window.UNITS = [
/* ───────────────────────── UNIT 0 ───────────────────────── */
{ id:'u0', sec:'G', title:'TOEFL ITPのしくみ', sub:'まずはゲームのルールを知ろう', roi:3,
  learn:[
    {h:'TOEFL ITPってなに？', b:`<p>TOEFL ITPは、TOEFLを作っている<b>ETS</b>の<b>団体向けテスト</b>。大学のクラス分けや交換留学の選考によく使われるよ。</p>
<p>測っているのは「<b>英語で大学の授業についていけるか</b>」。だから話題は生物・地学・歴史・芸術などのアカデミックな内容と、キャンパスでの会話が中心なんだ。</p>
<div class="tip">専門知識はいらない！答えは必ず<b>本文・会話の中</b>にあるよ。</div>`},
    {h:'3つのセクション', b:`<table class="tbl"><tr><th>セクション</th><th>問題数</th><th>時間</th></tr>
<tr><td>① Listening</td><td>50問</td><td>約35分</td></tr>
<tr><td>② Structure &amp; Written Expression（文法）</td><td>40問</td><td>25分</td></tr>
<tr><td>③ Reading</td><td>50問</td><td>55分</td></tr></table>
<ul><li>Listening：Part A 短い会話30問／Part B 長い会話8問／Part C 講義・トーク12問</li>
<li>文法：Structure 空所補充15問／Written Expression 誤り指摘25問</li>
<li>Reading：5つ前後のパッセージに約10問ずつ</li></ul>
<p class="small">Level 1は全140問・約115分。紙のマークシート版とデジタル版があるよ。</p>`},
    {h:'スコアの計算', b:`<p>各セクションの正答数が<b>31〜68点</b>（Readingは31〜67点）に換算されるよ。</p>
<div class="ex">合計 ＝（L ＋ S ＋ R）× 10 ÷ 3</div>
<p>例：L 48・S 52・R 50 なら （150）×10÷3 ＝ <b>500点</b></p>
<p>合計の範囲は<b>310〜677点</b>。</p>`},
    {h:'1問の重さはちがう！', b:`<p>文法セクションは<b>40問</b>で31〜68点（幅37点）。ListeningとReadingは<b>50問</b>で同じくらいの幅。</p>
<table class="tbl"><tr><th></th><th>1問あたり</th><th>合計スコアへの影響</th></tr>
<tr><td>文法</td><td>約0.9点</td><td><b>約3点</b></td></tr>
<tr><td>Listening / Reading</td><td>約0.7点</td><td>約2.4点</td></tr></table>
<div class="tip">文法は<b>1問の価値が一番大きく</b>、出題パターンも決まっている。だから最初に攻めるのが最も効率的！</div>`},
    {h:'減点はない！', b:`<p>まちがえても<b>減点されない</b>。つまり空欄は0点確定、適当でも25%の確率で得点。</p>
<div class="tip">わからない問題も<b>必ずマーク</b>。時間切れで塗れなかった…が一番もったいない！</div>
<p>目安時間：文法は1問<b>約37秒</b>、Readingは1パッセージ<b>約11分</b>、Listeningは音声に合わせて1問<b>約12秒</b>で答えるよ。</p>`},
    {h:'このアプリの進め方', b:`<p>ステージは<b>「得点につながりやすい順」</b>に並んでいるよ。</p>
<ol><li><b>文法の頻出パターン</b>（1問の価値が最大＆短期間で伸びる）</li>
<li><b>Readingの語彙問題</b>（知っていれば数秒で取れる）</li>
<li><b>Listening Part A</b>（30問と数が多く、コツで伸びる）</li>
<li>長文読解・長い会話（時間をかけて伸ばす）</li></ol>
<p>道にそって進めば迷わないよ。まちがえた問題は「復習」に自動でたまるから、こまめに復習してハートも回復しよう！</p>`}
  ],
  qs:[
    ['mc','TOEFL ITP（Level 1）の3つのセクションに<b>含まれない</b>のは？',['ライティング（英作文）','リスニング','文法（Structure & Written Expression）','リーディング'],'ITP Level 1はリスニング・文法・リーディングの3セクション。英作文はないよ。'],
    ['mc','文法セクションの問題数と制限時間は？',['40問・25分','50問・55分','50問・35分','30問・20分'],'40問を25分。1問あたり約37秒のスピード勝負だよ。'],
    ['mc','L 50点・S 52点・R 48点のとき、合計スコアは？',['500点','450点','150点','520点'],'(50＋52＋48)×10÷3 ＝ 150×10÷3 ＝ 500点。'],
    ['mc','まちがえた解答は減点される？',['減点されない（だから必ずマークする）','1問につき1点減点','2問まちがえると1問分減点','空欄より減点が大きい'],'誤答の減点はなし。わからなくても必ずマークしよう。'],
    ['mc','1問あたりの得点インパクトが最も大きいセクションは？',['文法（Structure & Written Expression）','リスニング','リーディング','どれも同じ'],'文法は40問で他と同じくらいのスコア幅。1問あたり合計スコア約3点分の価値があるよ。'],
    ['mc','Readingで1パッセージにかけられる時間の目安は？',['約11分','約5分','約20分','約30分'],'55分で5パッセージ前後 → 1つ約11分。最後のパッセージを読み残さないように！'],
    ['mc','Written Expressionはどんな問題？',['下線4か所から誤りを1つ選ぶ','空所に入る語句を選ぶ','英文を日本語に訳す','文を並べかえる'],'下線部(A)〜(D)のうち、文法的にまちがっている1か所を選ぶ問題。25問出るよ。'],
    ['mc','合計スコアの範囲は？',['310〜677点','0〜120点','10〜990点','200〜800点'],'ITP Level 1の合計は310〜677点。各セクションは31〜68点（Readingは67点まで）。'],
    ['mc','Listening Part A（短い会話）は何問？',['30問','8問','12問','50問'],'Part Aは30問でListeningの半分以上！短い会話のコツをつかむと一気に伸びるよ。'],
    ['mc','TOEFLの読解で「自分の知識では違う」と感じたら？',['本文に書かれている内容を根拠に答える','自分の知識を優先して答える','その問題は必ず空欄にする','一番長い選択肢を選ぶ'],'答えの根拠は常に本文。背景知識や思い込みで選ぶとミスにつながるよ。']
  ]
},
/* ───────────────────────── UNIT 1 ───────────────────────── */
{ id:'u1', sec:'S', title:'主語と動詞', sub:'空所補充の最頻出パターン', roi:3,
  learn:[
    {h:'英文の骨組み＝主語＋動詞', b:`<p>Structure（空所補充）で一番多いのが、<b>動詞が足りない</b>／<b>主語が足りない</b>パターン。</p>
<div class="ex">The giant panda <span class="hl">feeds</span> on bamboo.<br><span class="small">主語 ＋ 動詞（述語）がそろって、はじめて文になる</span></div>`},
    {h:'解き方の3ステップ', b:`<ol><li>文の中の<b>動詞（述語）</b>に印をつける</li>
<li>接続詞・関係詞の数を数える → <b>節の数 ＝ 接続詞の数＋1</b></li>
<li>足りない部品（主語？動詞？）を選択肢から選ぶ</li></ol>
<div class="tip">修飾語（前置詞句・カンマで挟まれた部分）を（　）でくくると骨組みが見えるよ。</div>`},
    {h:'動詞になれないもの', b:`<p>次の形は<b>単独では述語動詞になれない</b>：</p>
<ul><li>-ing形：<s>The panda feeding</s> on bamboo.</li>
<li>to不定詞：<s>The panda to feed</s> on bamboo.</li>
<li>関係詞節：<s>The panda which feeds</s> on bamboo.（主語の説明だけで文が終わる）</li></ul>`},
    {h:'主語を補う「同格」', b:`<div class="ex">Hummingbirds, <span class="hl">the smallest birds</span>, can fly backward.</div>
<p>カンマで挟まれた名詞は前の名詞の言いかえ（同格）。ここには<b>動詞を入れない</b>のがポイント。</p>`},
    {h:'分詞構文と強調構文', b:`<div class="ex"><span class="hl">Built</span> in 1825, the canal connected ...</div>
<p>主節がすでにあるときは、文頭は<b>分詞</b>で始まる（運河は「建設された」→過去分詞）。</p>
<div class="ex">It was not until 1920 <span class="hl">that</span> women gained ...</div>
<p>It is/was ～ that … の強調構文も頻出！</p>`}
  ],
  qs:[
    ['mc','Structure（空所補充）でまず確認すべきことは？',['文に主語と動詞（述語）がそろっているか','選択肢をすべて日本語に訳す','一番長い選択肢','知らない単語の意味'],'まず骨組み（主語＋動詞）をチェック。足りない部品が答えになることが多いよ。'],
    ['fb','The giant panda ___ almost entirely on bamboo.',['feeds','feeding','to feed','which feeds'],'主語 The giant panda に対する動詞がない。-ing・to不定詞・関係詞節は述語になれないので feeds。'],
    ['fb','___ is the largest organ of the human body.',['The skin','Because the skin','The skin which','That the skin'],'動詞 is に対する主語が必要。接続詞や関係詞をつけると主語にならない。'],
    ['fb','In 1869, the first transcontinental railroad in the United States ___.',['was completed','completing','to be completed','having completed'],'鉄道は「完成された」もの → 受動態 was completed。文に述語が必要だよ。'],
    ['fb','Hummingbirds, ___, can fly backward.',['the smallest birds','are the smallest birds','they are the smallest birds','which the smallest birds'],'カンマで挟まれた部分は同格。主節の動詞は can fly があるので、名詞句だけを入れる。'],
    ['fb','___ in the early nineteenth century, the Erie Canal connected the Great Lakes to the Atlantic Ocean.',['Built','It was built','Was built','Building it'],'主節（the Erie Canal connected …）があるので分詞構文。運河は「建設された」→ 過去分詞 Built。'],
    ['fb','There ___ more than 3,000 species of snakes in the world.',['are','is','being','have'],'There + be + 主語。主語は species（ここでは複数）なので are。'],
    ['fb','It was not until 1920 ___ women in the United States gained the right to vote.',['that','when','which','what'],'It was not until ～ that …「～になってはじめて…した」という強調構文。'],
    ['fb','The Rocky Mountains ___ from Canada to New Mexico.',['stretch','stretching','which stretch','to stretch'],'主語 The Rocky Mountains の述語動詞が必要 → stretch。'],
    ['fb','Although it looks like a fish, the dolphin ___ a mammal.',['is','being','that is','as'],'Although節のあとの主節に動詞が必要。the dolphin is a mammal。'],
    ['fb','Coral reefs, ___ by tiny animals called polyps, provide homes for many sea creatures.',['built','are built','they are built','building'],'主節の動詞は provide。挿入部分はサンゴ礁を説明する過去分詞（作られた）。'],
    ['er','The koala {sleeping} up to {twenty} hours {a} day {in} eucalyptus trees.',0,'sleeps','文に述語動詞がない。-ing形は単独で動詞になれないので sleeps に。'],
    ['er','{Located} in the Pacific Ocean, Hawaii {it} {consists} of eight main {islands}.',1,'（it を削除）','主語 Hawaii があるのに it が重複している。主語は1つだけ。'],
    ['er','The invention of the telephone {in} 1876 {changing} the way people {communicated} {with} one another.',1,'changed','主語 The invention に対する述語がない。changing → changed。'],
    ['mc','-ing形（例: studying）は、単独で文の述語動詞になれる？',['なれない（be動詞などが必要）','なれる','主語が複数ならなれる','過去の話ならなれる'],'The student studying … は「勉強している学生」で、文として未完成。is studying ならOK。']
  ]
},
/* ───────────────────────── UNIT 2 ───────────────────────── */
{ id:'u2', sec:'S', title:'主語と動詞の一致', sub:'誤り指摘で毎回のように出る', roi:3,
  learn:[
    {h:'主語が単数なら動詞も単数', b:`<p>Written Expressionの定番。<b>本当の主語</b>を見つけて、動詞の形（is/are, has/have, -s）をチェック。</p>
<div class="ex">The population of honeybees <span class="hl">has</span> declined.<br><span class="small">主語は population（単数）。honeybees にだまされない！</span></div>`},
    {h:'あいだの修飾語にだまされない', b:`<p>次の部分は主語に<b>含めない</b>：</p>
<ul><li>of句：The results <i>(of the experiment)</i> <b>were</b> …</li>
<li>along with / as well as / together with：The professor <i>(along with her students)</i> <b>was</b> …</li>
<li>関係詞節・同格</li></ul>`},
    {h:'単数扱い・複数扱いの決まり', b:`<table class="tbl"><tr><th>単数扱い</th><th>複数扱い</th></tr>
<tr><td>each / every / everyone<br>one of the ＋複数名詞<br>the number of ～<br>economics, physics, news</td><td>a number of ～<br>bacteria, criteria, phenomena<br>both A and B</td></tr></table>
<p class="small">neither A nor B / either A or B は <b>Bに合わせる</b>。</p>`},
    {h:'倒置の文は主語が後ろ', b:`<div class="ex">Among the most famous paintings <span class="hl">is</span> the Mona Lisa.</div>
<p>場所・範囲の句が文頭に来ると、動詞の<b>後ろ</b>に主語が来ることがあるよ。</p>`}
  ],
  qs:[
    ['mc','主語と動詞の一致をチェックするとき、あいだに挟まった修飾語は？',['（　）でくくって無視し、本当の主語を探す','一番近い名詞を主語とみなす','修飾語の名詞に動詞を合わせる','気にせず意味で判断する'],'動詞の直前の名詞は「ワナ」のことが多い。修飾語を外して主語を見つけよう。'],
    ['er','The population of honeybees {have} {declined} {sharply} {in} recent years.',0,'has','主語は population（単数）。of honeybees は修飾語なので has。'],
    ['er','Each of the students {in} the program {are} {required} to {submit} a final report.',1,'is','Each of ～ は単数扱い → is。'],
    ['fb','The number of international students in Japan ___ increased steadily.',['has','have','having','are'],'the number of ～「～の数」は単数扱い → has。'],
    ['fb','A number of species ___ already disappeared from the island.',['have','has','is','was'],'a number of ～「多くの～」は複数扱い → have。'],
    ['er','Economics {are} the study of how people {make} choices {about} {limited} resources.',0,'is','economics（経済学）は -s で終わるが単数扱い。'],
    ['er','The professor, along with her students, {were} {invited} to {present} {the} findings.',0,'was','along with ～ は主語に含まれない。主語は The professor（単数）。'],
    ['er','The results of the experiment {was} {published} {in} a {leading} journal.',0,'were','主語は results（複数）→ were。'],
    ['fb','One of the most important inventions of the twentieth century ___ the computer.',['is','are','being','were'],'one of the ＋複数名詞 は「そのうちの1つ」なので単数扱い → is。'],
    ['er','Neither the teacher nor the students {was} {aware} {of} the {schedule} change.',0,'were','neither A nor B は B（the students・複数）に合わせる。'],
    ['fb','Among the most famous paintings in the world ___ the Mona Lisa.',['is','are','it is','being'],'倒置の文。主語は後ろの the Mona Lisa（単数）なので is。'],
    ['er','Bacteria {is} {found} in {almost} every {environment} on Earth.',0,'are','bacteria は bacterium の複数形 → are。'],
    ['er','Every student and teacher {in} the school {were} {asked} to {participate}.',1,'was','every A and B は単数扱い → was。'],
    ['fb','The criteria for admission ___ been changed this year.',['have','has','is','was'],'criteria は criterion の複数形 → have。'],
    ['er','The news {about} the discoveries {were} {reported} {around} the world.',1,'was','news は単数扱い → was。']
  ]
},
/* ───────────────────────── UNIT 3 ───────────────────────── */
{ id:'u3', sec:'R', title:'語彙問題①　同義語', sub:'知っていれば数秒で1点', roi:3,
  learn:[
    {h:'語彙問題は「速攻で取れる」得点源', b:`<p>Readingでよく出るのが</p>
<div class="ex">The word "abundant" in line 3 is closest in meaning to …</div>
<p>という<b>同義語問題</b>。知っていれば本文をほとんど読まずに数秒で答えられる、<b>最も効率のよい問題</b>だよ。</p>`},
    {h:'解き方', b:`<ol><li>知っている意味でまず選ぶ</li>
<li>選択肢を本文の単語の位置に<b>入れて読んでみる</b></li>
<li>多義語は<b>文脈</b>で決める（辞書の1つ目の意味とは限らない）</li></ol>
<div class="tip">知らない単語でも、前後の文の流れ（プラス／マイナス、原因／結果）から推測できることが多いよ。</div>`},
    {h:'覚え方のコツ', b:`<p>単語は<b>「1語＝1訳」ではなく「同義語のペア」</b>で覚えよう。</p>
<div class="ex">abundant ＝ plentiful　／　diminish ＝ decrease</div>
<p>TOEFLは生物・地学・歴史・芸術などの<b>アカデミック語彙</b>が中心。このアプリの単語ステージで少しずつ増やしていこう。</p>`}
  ],
  vocab:[
    ['abundant','Fish were abundant in the river before the dam was built.','plentiful','scarce','ancient','dangerous','豊富な'],
    ['vital','Water is vital to all living things.','essential','harmful','invisible','similar','不可欠な'],
    ['rapid','The city experienced rapid growth in the 1990s.','quick','slow','careful','partial','急速な'],
    ['obtain','Students can obtain a library card at the front desk.','get','return','lose','design','手に入れる'],
    ['approximately','The bridge is approximately two kilometers long.','roughly','exactly','hardly','only','およそ'],
    ['diminish','The pain will diminish over time.','decrease','increase','remain','spread','減る'],
    ['enormous','Blue whales are enormous animals.','huge','tiny','gentle','rare','巨大な'],
    ['reside','Most of the island\'s people reside near the coast.','live','work','travel','fish','住む'],
    ['significant','The study found a significant difference between the two groups.','important','small','unknown','false','重要な・著しい'],
    ['primary','The primary purpose of the meeting is to choose a leader.','main','secondary','final','hidden','主な'],
    ['demonstrates','The experiment demonstrates how plants respond to light.','shows','hides','changes','questions','示す'],
    ['sufficient','There was not sufficient time to finish the test.','enough','extra','free','exact','十分な'],
    ['prominent','She became a prominent scientist in her field.','well-known','inexperienced','retired','wealthy','著名な'],
    ['emerge','New leaders often emerge during difficult times.','appear','disappear','argue','rest','現れる'],
    ['remarkable','The athlete showed remarkable strength.','extraordinary','ordinary','limited','typical','驚くべき'],
    ['gradually','The temperature rose gradually throughout the day.','slowly','suddenly','rarely','sharply','徐々に'],
    ['retains','Clay soil retains water well.','keeps','loses','cleans','heats','保持する'],
    ['consequently','It rained for weeks; consequently, the river flooded.','as a result','however','meanwhile','for example','その結果'],
    ['ancient','The museum displays ancient tools from Egypt.','very old','modern','broken','expensive','古代の'],
    ['frequently','Earthquakes frequently occur in this region.','often','seldom','never','slightly','頻繁に']
  ],
  qs:[
    ['mc','語彙問題で迷ったときのベストな確認方法は？',['選択肢を本文の単語の位置に入れて意味が通るか読む','一番難しそうな単語を選ぶ','本文を最初から全部読み直す','いつも同じ記号の選択肢を選ぶ'],'代入して文意が通るかを確認するのが確実。特に多義語で効くよ。']
  ]
},
/* ───────────────────────── UNIT 4 ───────────────────────── */
{ id:'u4', sec:'S', title:'並列構造', sub:'and / or の前後をそろえる', roi:3,
  learn:[
    {h:'and / or / but の前後は同じ形', b:`<p>つなぐものは<b>同じ品詞・同じ形</b>にそろえるのがルール。</p>
<div class="ex">Visitors can hike, <s>fishing</s> <span class="hl">fish</span>, or camp.</div>
<p>名詞なら名詞、動詞の原形なら原形、-ingなら-ing、形容詞なら形容詞。</p>`},
    {h:'ペアになる接続詞', b:`<ul><li><b>both</b> A <b>and</b> B</li><li><b>either</b> A <b>or</b> B</li><li><b>neither</b> A <b>nor</b> B</li><li><b>not only</b> A <b>but (also)</b> B</li><li>A <b>as well as</b> B</li></ul>
<p>AとBの形をそろえる。both … or のような<b>組み合わせミス</b>も出るよ。</p>`},
    {h:'見つけたらすぐチェック', b:`<div class="tip">Written Expressionで <b>and / or</b> とカンマの列挙を見つけたら、<b>並んでいる部分の形</b>を最初に見比べよう。1つだけ形がちがう部分が答え！</div>
<p>than / as の前後（比べるもの）も並列と同じ考え方でそろえるよ。</p>`}
  ],
  qs:[
    ['mc','Written Expressionで A, B, and C のような列挙を見つけたら？',['A・B・Cの形（品詞・形）がそろっているか確認する','andの位置が正しいか確認する','カンマの数を数える','何もせず次の下線部へ'],'並列は頻出。1つだけ形がちがう部分が誤りになっていることが多いよ。'],
    ['er','Visitors to the park can {hike}, {fishing}, or {camp} {near} the lake.',1,'fish','hike, ___, camp と動詞の原形が並ぶので fishing → fish。'],
    ['er','The new {policy} is simple, {effective}, and {economy} {for} most families.',2,'economical','simple, effective と形容詞が並ぶので、名詞 economy → 形容詞 economical。'],
    ['fb','The scientist\'s work was both innovative ___.',['and influential','but influential','and it influenced','influencing'],'both A and B。A＝innovative（形容詞）にそろえて and influential。'],
    ['fb','Students may submit the essay either by email ___.',['or in person','nor in person','and in person','or they come in person'],'either A or B。by email（副詞句）にそろえて or in person。'],
    ['er','{Swimming} is good {for} the heart, the lungs, and {to strengthen} the {muscles}.',2,'the muscles（to strengthen を削除）','the heart, the lungs と名詞が並ぶので、to strengthen ではなく the muscles。'],
    ['er','The author was known not only {for} her novels but also {she wrote} {many} {essays}.',1,'for（she wrote → for）','not only for her novels but also for her essays と形をそろえる。'],
    ['fb','Neither the cost ___ the location of the new library has been decided.',['nor','or','and','but'],'neither A nor B のペア。'],
    ['fb','Reading quickly is often less important than ___ carefully.',['reading','to read','read','you read'],'than の前後を比べる。Reading quickly と reading carefully で形をそろえる。'],
    ['er','Early settlers built houses, {planted} crops, and {raising} {cattle} {on} the plains.',1,'raised','built, planted と過去形が並ぶので raising → raised。'],
    ['fb','The Amazon rainforest produces oxygen, stores carbon, and ___.',['provides habitat for millions of species','providing habitat for millions of species','habitat for millions of species','it provides habitat for millions of species'],'produces, stores と現在形の動詞が並ぶので provides …。'],
    ['er','The {lecture} was informative, {well organized}, and {entertainment} {for} the audience.',2,'entertaining','informative, well organized と形容詞が並ぶので entertaining。'],
    ['fb','Ice skating requires balance as well as ___.',['strength','strong','to be strong','strengthen'],'A as well as B。balance（名詞）にそろえて strength。']
  ]
},
/* ───────────────────────── UNIT 5 ───────────────────────── */
{ id:'u5', sec:'S', title:'品詞', sub:'形容詞？副詞？名詞？', roi:3,
  learn:[
    {h:'品詞の役割', b:`<table class="tbl"><tr><th>品詞</th><th>役割</th></tr>
<tr><td>名詞</td><td>主語・目的語になる</td></tr>
<tr><td>形容詞</td><td>名詞を修飾／be動詞のあと</td></tr>
<tr><td>副詞</td><td>動詞・形容詞・副詞・文を修飾</td></tr></table>
<div class="ex">a <s>danger</s> <span class="hl">dangerous</span> chemical　／　<s>extreme</s> <span class="hl">extremely</span> slowly</div>`},
    {h:'語尾で見抜く', b:`<ul><li>名詞：-tion, -ment, -ness, -ity, -ance, -ence, -al（survival）</li>
<li>形容詞：-ous, -ful, -ive, -al, -ic, -able, -ent</li>
<li>副詞：-ly（ただし friendly, lovely, costly は形容詞！）</li></ul>`},
    {h:'よく出るワナ', b:`<ul><li><b>形容詞⇔副詞</b>の取りちがえ（a <s>highly</s> … / <s>high</s> developed）</li>
<li><b>名詞⇔形容詞</b>（<s>economy</s> growth → economic growth）</li>
<li><b>数＋名詞</b>のハイフン形容詞は単数：a <span class="hl">three-year</span> project</li></ul>
<div class="tip">下線部の単語が「何を修飾しているか」を矢印で考えると見抜きやすいよ。</div>`}
  ],
  qs:[
    ['mc','-ly で終わるけれど<b>形容詞</b>なのはどれ？',['friendly','quickly','carefully','recently'],'friendly（親しみやすい）は名詞 friend ＋ -ly の形容詞。costly, lovely, lively も同じ仲間。'],
    ['er','The city has a {remarkable} {efficiently} public {transportation} {system}.',1,'efficient','名詞 system を修飾するのは形容詞 efficient。'],
    ['er','Bees {communicate} {through} {complexly} {dances}.',2,'complex','名詞 dances を修飾するので形容詞 complex。'],
    ['er','The {survive} of many species {depends} on {healthy} {forests}.',0,'survival','The ___ of … の位置は名詞。survive（動詞）→ survival。'],
    ['er','Glaciers move {extreme} {slowly}, {often} only a few {centimeters} a day.',0,'extremely','副詞 slowly を修飾するのは副詞 extremely。'],
    ['er','Benjamin Franklin was {famous} for his {scientific} {experiments} and his {politics} career.',3,'political','名詞 career を修飾するので形容詞 political。'],
    ['fb','The volcano erupted ___, surprising scientists.',['unexpectedly','unexpected','unexpecting','unexpectation'],'動詞 erupted を修飾するので副詞。'],
    ['er','Many {danger} {chemicals} are {stored} {safely} underground.',0,'dangerous','名詞 chemicals を修飾するので形容詞 dangerous。'],
    ['er','It was a {three-years} {project} that {required} {careful} planning.',0,'three-year','数＋名詞のハイフン形容詞では名詞を単数にする。'],
    ['fb','The ___ of the bridge took nearly ten years.',['construction','construct','constructive','constructively'],'The ___ of … の位置には名詞。'],
    ['er','Penguins are {well} {adapted} to {extremely} {coldly} climates.',3,'cold','名詞 climates を修飾するのは形容詞 cold。'],
    ['fb','The data were analyzed ___ before the results were published.',['carefully','careful','care','caring'],'動詞 were analyzed を修飾するので副詞 carefully。'],
    ['er','Mozart showed {extraordinary} musical {able} at a {very} {young} age.',1,'ability','形容詞 musical に修飾される名詞が必要。able → ability。'],
    ['er','The {economy} growth of the region {was} {largely} due to {trade}.',0,'economic','名詞 growth を修飾するので形容詞 economic。']
  ]
},
/* ───────────────────────── UNIT 6 ───────────────────────── */
{ id:'u6', sec:'L', title:'Part A の基本', sub:'2人目のひと言がカギ', roi:2,
  learn:[
    {h:'Part A ってどんな問題？', b:`<p>2人の短い会話（ほぼ1往復）→ ナレーターが質問 → 問題用紙の4択から選ぶ。<b>30問</b>あってListeningの半分以上！</p>
<p>音声は<b>1回しか流れない</b>。このアプリでは練習のために何度でも再生できるよ。</p>`},
    {h:'カギは「2人目の発言」', b:`<p>質問の多くは</p>
<div class="ex">What does the woman mean? ／ What does the man suggest?</div>
<p>で、答えのヒントは<b>2人目のセリフ</b>にあることがほとんど。1人目で話題をつかみ、2人目に集中しよう。</p>`},
    {h:'正解は「言いかえ」', b:`<ul><li>会話と<b>同じ単語</b>が入った選択肢は<b>ワナ</b>のことが多い</li>
<li><b>音が似た単語</b>（coast / cost, walk / work）にも注意</li>
<li>正解は同じ意味を<b>別の言葉</b>で言ったもの</li></ul>`},
    {h:'選択肢の先読み', b:`<div class="tip">音声が流れる前に、次の問題の選択肢をサッと見て「話題」と「主語（He/She）」を予想しておこう。</div>
<p>1問約12秒で答えて、わからなければ<b>すぐマークして次へ</b>。引きずると次の問題も落とすよ。</p>`}
  ],
  qs:[
    ['mc','Part A で特に集中して聞くべきなのは？',['2人目の発言','1人目の最初の単語','ナレーターの声の高さ','会話の最後の1語だけ'],'質問の答えは2人目の発言にあることがほとんど。'],
    ['mc','会話に出てきた単語がそのまま入っている選択肢は？',['ワナのことが多い。言いかえた選択肢を優先して考える','必ず正解','必ず不正解','一番短ければ正解'],'同じ単語・似た音の単語はひっかけの定番。意味が同じ「言いかえ」を探そう。'],
    ['ls',[['M',"I can't find my calculator anywhere. Have you seen it?"],['W',"Did you check the front pocket of your backpack?"]],'What does the woman suggest?',['He should look in his backpack.','He should buy a new calculator.','He can borrow her calculator.','He should ask the professor.'],'Did you check …? は「…を見てみたら？」という提案。'],
    ['ls',[['W',"Are you going to the concert tonight?"],['M',"I wish I could, but I have to finish my lab report."]],'What does the man mean?',["He can't go to the concert.",'He has already finished his report.','He will go after the concert.',"He doesn't like concerts."],'I wish I could, but … は「行けたらいいけど行けない」。'],
    ['ls',[['M',"How was your trip to the coast?"],['W',"Too short. I wanted to stay longer."]],'What does the woman mean?',['She enjoyed the trip.','The weather at the coast was cold.','The trip cost too much.',"She didn't want to go."],'「短すぎた、もっといたかった」＝楽しかった。coast と cost の音のワナに注意。'],
    ['ls',[['W',"I've been studying for six hours straight."],['M',"Why don't you take a break?"]],'What does the man suggest?',['She should rest for a while.','She should study more.','She should go straight home.','She should break the record.'],'Why don\'t you …? は提案。take a break ＝ rest。straight / break の単語のワナに注意。'],
    ['ls',[['M',"Professor Lee's lecture was really hard to follow."],['W',"You can say that again."]],'What does the woman mean?',['She agrees with the man.','She wants him to repeat it.',"She didn't attend the lecture.",'She thought the lecture was easy.'],'You can say that again. は「本当にそうだね（大賛成）」という決まり文句。'],
    ['ls',[['W',"Is the library open on Sunday?"],['M',"Only in the afternoon."]],'What does the man mean?',['The library opens on Sunday afternoons.','The library is closed on Sundays.','He goes to the library every Sunday.','The library is open all day.'],'Only in the afternoon ＝ 日曜は午後だけ開いている。'],
    ['ls',[['M',"I'm thinking about dropping my chemistry class."],['W',"Have you talked to your advisor yet?"]],'What does the woman imply?',['He should talk to his advisor first.','Chemistry is an easy class.','She also wants to drop the class.','The advisor has already left.'],'「もうアドバイザーに相談した？」＝ まず相談すべき、という含み。'],
    ['ls',[['W',"Did you get the apartment near campus?"],['M',"The rent was more than I could afford."]],'What does the man imply?',["He didn't take the apartment.",'He moved near campus.','He paid the rent early.','The apartment was too far away.'],'家賃が払えない額だった → 借りなかった。'],
    ['ls',[['M',"Would you mind if I opened the window?"],['W',"Not at all. It's a little warm in here."]],'What does the woman mean?',['He can open the window.','She wants the window closed.','She feels cold.','She minds very much.'],'Would you mind …? に Not at all. は「全然かまわない＝どうぞ」。'],
    ['ls',[['W',"The bus is late again."],['M',"It's always like this when it snows."]],'What does the man mean?',['Snow often delays the bus.','He likes the snow.','The bus came early.','It rarely snows here.'],'雪の日はいつもこう ＝ 雪でバスが遅れる。'],
    ['ls',[['M',"I heard the history exam was moved to Friday."],['W',"Great, that gives me two more days to review."]],'What does the woman mean?',['She has more time to prepare.','The exam is today.',"She doesn't need to review.",'She will miss the exam.'],'two more days to review ＝ 準備の時間が増えた。'],
    ['ls',[['W',"Your presentation was excellent."],['M',"Thanks, but I was so nervous I could hardly breathe."]],'What does the man mean?',['He felt very nervous.',"He didn't give a presentation.",'He had a cold.','He felt relaxed.'],'could hardly breathe は「息もできないほど緊張した」という誇張表現。']
  ]
},
/* ───────────────────────── UNIT 7 ───────────────────────── */
{ id:'u7', sec:'S', title:'接続詞と関係詞', sub:'節と節をつなぐルール', roi:2,
  learn:[
    {h:'接続詞と前置詞のちがい', b:`<table class="tbl"><tr><th>後ろに節（S＋V）</th><th>後ろに名詞</th></tr>
<tr><td>although / though</td><td>despite / in spite of</td></tr>
<tr><td>because / since</td><td>because of / due to</td></tr>
<tr><td>while / when</td><td>during</td></tr></table>
<div class="ex"><s>Despite</s> <span class="hl">Although</span> it was raining, the game continued.</div>`},
    {h:'意味の向きをチェック', b:`<p>前後が<b>逆の内容</b>なら although / but / while（対比）、<b>原因→結果</b>なら because / since / so。</p>
<p>so that「～するために」、unless「～しない限り」も頻出。</p>`},
    {h:'関係代名詞', b:`<ul><li><b>who</b>（人）・<b>which</b>（物）・<b>that</b>（両方）</li>
<li><b>whose</b>：所有（～の）→ 後ろに名詞が続く</li>
<li><b>what</b>：the thing which（先行詞を含む）</li>
<li><b>前置詞＋which</b>：in which, about which</li></ul>
<div class="tip">that は<b>カンマの後</b>や<b>前置詞の後</b>には使えない！</div>`},
    {h:'関係副詞', b:`<p>where（場所）・when（時）の後ろは<b>完全な文</b>。関係代名詞の後ろは<b>主語か目的語が欠けた文</b>。</p>
<div class="ex">the city <span class="hl">where</span> I was born（I was born は完全な文）</div>`}
  ],
  qs:[
    ['mc','despite の後ろに続くのは？',['名詞（句）','主語＋動詞の節','動詞の原形','to不定詞'],'despite は前置詞。後ろは名詞。節を続けたいなら although を使う。'],
    ['fb','___ it was raining heavily, the game continued.',['Although','Despite','Because of','However'],'後ろが節（it was raining）で、意味は逆接 → Although。'],
    ['fb','The festival was canceled ___ the storm.',['because of','because','although','since'],'後ろは名詞 the storm なので前置詞 because of。'],
    ['er','{Despite} the bridge was old, it {remained} {in} {use} for decades.',0,'Although','後ろが節（the bridge was old）なので接続詞 Although。'],
    ['fb','Marie Curie, ___ research on radioactivity won two Nobel Prizes, was born in Poland.',['whose','who','which','her'],'「彼女の研究」と所有の関係 → whose ＋ 名詞。'],
    ['er','The city {which} I was born {has} {changed} {greatly}.',0,'where','I was born は完全な文なので関係副詞 where（in which）。'],
    ['fb','___ surprised the researchers was the speed of the change.',['What','That','Which','It'],'「研究者を驚かせたこと」＝ What（the thing which）。'],
    ['er','The scientist {who} discoveries {changed} medicine {was} {widely} honored.',0,'whose','「その科学者の発見」なので所有格 whose。'],
    ['fb','The museum has a room ___ visitors can touch ancient tools.',['where','which','what','whose'],'visitors can touch ancient tools は完全な文 → where。'],
    ['fb','Plants need light ___ they can produce food through photosynthesis.',['so that','because of','in order','despite'],'so that ＋ S can V「～できるように」。'],
    ['er','{During} the plane {was} {landing}, passengers {remained} seated.',0,'While','後ろが節なので前置詞 During ではなく接続詞 While。'],
    ['fb','The tool, ___ was invented in the 1800s, is still used today.',['which','that','what','it'],'カンマの後ろに that は使えない → which。'],
    ['er','This is the book {about that} the professor {talked} {in} {class}.',0,'about which','前置詞の後ろに that は置けない → about which。'],
    ['fb','___ the weather improves, the hikers will wait at the lodge.',['Unless','Despite','Without','Even'],'「天気がよくならない限り」→ Unless ＋ 節。']
  ]
},
/* ───────────────────────── UNIT 8 ───────────────────────── */
{ id:'u8', sec:'R', title:'参照問題と語彙②', sub:'it / they は何を指す？', roi:3,
  learn:[
    {h:'参照問題の解き方', b:`<div class="ex">The word "they" in line 6 refers to …</div>
<ol><li>その語の<b>直前の文</b>を読む</li>
<li><b>単数・複数</b>で候補をしぼる（it＝単数、they＝複数）</li>
<li>選択肢を<b>代入</b>して意味が通るか確認</li></ol>
<div class="tip">参照問題も短時間で解ける得点源。必ず取りにいこう！</div>`},
    {h:'多義語は文脈で', b:`<div class="ex">The committee will <b>address</b> the problem.</div>
<p>address は「住所」だけじゃない！ここでは<b>deal with（取り組む）</b>。</p>
<p>難しめの語彙問題ほど、ふだん使う意味とちがう意味で出題されやすいよ。</p>`}
  ],
  vocab:[
    ['address','The committee met to address the problem of rising costs.','deal with','ignore','mail','celebrate','取り組む（多義語）'],
    ['bear','The old bridge can no longer bear heavy trucks.','support','see','attract','produce','支える（多義語）'],
    ['yield','These apple trees yield fruit every autumn.','produce','lose','protect','sell','生み出す'],
    ['assume','Many people assume that bats are blind.','suppose','deny','prove','forget','思い込む'],
    ['decline','Sales began to decline after the holiday season.','decrease','rise','continue','stabilize','減少する'],
    ['subsequent','Subsequent studies confirmed the original results.','later','earlier','smaller','private','その後の'],
    ['notion','The notion that the Earth is flat was rejected long ago.','idea','map','law','picture','考え'],
    ['feasible','Building a bridge across the bay was not feasible at the time.','possible','popular','legal','visible','実現可能な'],
    ['acquire','Children acquire language skills quickly.','gain','lose','test','teach','獲得する'],
    ['dense','The explorers walked through a dense forest.','thick','dry','quiet','small','密集した'],
    ['fragile','Handle the fragile glass vases carefully.','easily broken','heavy','expensive','colorful','壊れやすい'],
    ['conceal','The animal\'s color helps conceal it from predators.','hide','show','feed','warn','隠す'],
    ['inhabit','Polar bears inhabit the Arctic region.','live in','leave','explore','rule','生息する'],
    ['durable','Oak is a durable wood used for furniture.','long-lasting','light','cheap','rare','耐久性のある'],
    ['merely','The difference in price was merely a few cents.','only','at least','more than','nearly','単に'],
    ['trait','Curiosity is a common trait among scientists.','characteristic','problem','tool','goal','特徴'],
    ['commence','The ceremony will commence at noon.','begin','end','pause','repeat','始まる'],
    ['predominantly','The town\'s population is predominantly young.','mainly','partly','rarely','never','主に'],
    ['vast','The Sahara is a vast desert.','very large','very dry','very hot','very old','広大な'],
    ['crucial','Sleep is crucial for memory.','very important','harmful','unrelated','optional','極めて重要な']
  ],
  qs:[
    {t:'rd', title:'The Waggle Dance', p:`Honeybees communicate the location of food through a movement known as the waggle dance. When a worker bee returns to the hive after finding flowers, it performs a series of figure-eight movements on the honeycomb. The angle of the dance shows the direction of the food relative to the sun, while the length of the waggle indicates the distance. Other bees follow the dancer closely, and they soon fly off to the same source.

Remarkably, this system works even inside the dark hive, where the bees must sense the dance through touch and vibration rather than sight.`, qs:[
      ['The word "it" in "it performs a series of figure-eight movements" refers to',['a worker bee','the hive','food','the honeycomb'],'直前の When a worker bee returns … の a worker bee が主語。ダンスをするのはハチ。','it performs'],
      ['The word "they" in "they soon fly off" refers to',['other bees','the flowers','the movements','the waggles'],'they は複数。直前の Other bees follow the dancer … を受けている。','they soon'],
      ['The word "indicates" is closest in meaning to',['shows','hides','reduces','doubles'],'the length of the waggle indicates the distance ＝ 距離を示す。','indicates'],
      ['According to the passage, the angle of the dance shows',['the direction of the food','the distance to the food','the number of flowers','the time of day'],'The angle of the dance shows the direction … と本文にある。距離はwaggleの長さ。','angle'],
      ['The word "Remarkably" is closest in meaning to',['Surprisingly','Slowly','Fortunately','Rarely'],'暗い巣の中でも機能する、という驚きを表す副詞。','Remarkably'],
      ['How do bees sense the dance inside the dark hive?',['Through touch and vibration','By looking at the sun','By smelling the flowers','By following a sound signal'],'through touch and vibration rather than sight と書かれている。言いかえに注意。','vibration']
    ]},
    ['mc','参照問題で "they" が指すものを探すとき、まずしぼりこむ条件は？',['複数の名詞であること','文の最初にある名詞であること','一番長い名詞であること','固有名詞であること'],'they は複数を指す。単数・複数で候補をしぼってから代入して確認しよう。']
  ]
},
/* ───────────────────────── UNIT 9 ───────────────────────── */
{ id:'u9', sec:'S', title:'名詞・冠詞・数', sub:'単数？複数？数えられる？', roi:2,
  learn:[
    {h:'数えられる名詞・数えられない名詞', b:`<p>数えられない名詞（不可算）は <b>-s がつかない</b>、<b>a/an もつかない</b>。</p>
<div class="ex">information, equipment, research, advice, furniture, evidence, knowledge</div>
<table class="tbl"><tr><th>可算（複数）</th><th>不可算</th></tr>
<tr><td>many / few / a number of</td><td>much / little / an amount of</td></tr></table>`},
    {h:'冠詞 a / an / the', b:`<ul><li>可算名詞の単数には冠詞などが必要</li>
<li>a / an は<b>発音</b>で決まる：<b>a</b> university / <b>an</b> hour</li>
<li>最上級・唯一のものには <b>the</b>：the largest ocean</li></ul>`},
    {h:'数のワナ', b:`<ul><li>one of / several / various ＋<b>複数名詞</b></li>
<li><b>hundreds of</b> samples ／ two <b>hundred</b> samples</li>
<li>代名詞の一致：単数 → <b>its</b>、複数 → <b>their</b></li></ul>`}
  ],
  qs:[
    ['mc','数えられない（不可算）名詞はどれ？',['equipment','tool','machine','device'],'equipment（機器・装備）は不可算。many equipments とは言わないよ。'],
    ['er','There {is} a great deal of {informations} {available} {online}.',1,'information','information は不可算名詞なので -s はつかない。'],
    ['er','{An} university {in} Ohio {offered} the {first} course.',0,'A','university は「ユ」の音（子音）で始まるので a。'],
    ['er','Few {people} {realize} how {much} {species} live in the deep sea.',2,'many','species は数えられる名詞 → many。'],
    ['fb','The museum received ___ of new equipment.',['a large amount','a large number','many','several'],'equipment は不可算 → an amount of。'],
    ['er','Each of the {planets} {has} {their} own {orbit}.',2,'its','each は単数扱い → 代名詞も its。'],
    ['er','The bald eagle builds {one of} the largest {nest} of any {bird} in {North America}.',1,'nests','one of the ＋ 複数名詞 → nests。'],
    ['fb','Spiders are not insects because ___ eight legs.',['they have','it has','their','they has'],'Spiders（複数）を受けるので they have。'],
    ['er','{Several} {kind} of {wildflowers} {bloom} in early spring.',1,'kinds','several の後ろは複数名詞 → kinds。'],
    ['fb','It takes about ___ for light from the Sun to reach the Earth.',['eight minutes','eight minute','eight-minutes','the eight minute'],'名詞として使うときは複数形 eight minutes（ハイフン形容詞の eight-minute とは区別）。'],
    ['er','The {Pacific} is {a} largest {ocean} {on} Earth.',1,'the','最上級には the。'],
    ['er','Researchers have collected {hundred} of {samples} {from} the {lake}.',0,'hundreds','「何百もの～」は hundreds of。'],
    ['fb','Professor Kim gave the students ___ about the exam.',['some advice','an advice','advices','many advices'],'advice は不可算名詞。some advice / a piece of advice。']
  ]
},
/* ───────────────────────── UNIT 10 ───────────────────────── */
{ id:'u10', sec:'S', title:'比較', sub:'比較級・最上級・as ～ as', roi:2,
  learn:[
    {h:'比較の基本形', b:`<ul><li>比較級：-er / <b>more</b> ～ <b>than</b></li>
<li>最上級：<b>the</b> -est / <b>the most</b> ～（in / of）</li>
<li>同等：<b>as</b> ～ <b>as</b>　／　the same <b>as</b>　／　similar <b>to</b>　／　different <b>from</b></li></ul>
<div class="ex"><s>the most fastest</s> → the fastest　／　<s>more smaller</s> → smaller</div>`},
    {h:'比べるものをそろえる', b:`<div class="ex">The population of Tokyo is larger than <span class="hl">that of</span> Osaka.</div>
<p>「東京の人口」と「大阪の人口」を比べる。人口と都市を比べてはダメ！</p>`},
    {h:'よく出る形', b:`<ul><li><b>The</b> 比較級 …, <b>the</b> 比較級 …：The more you practice, the better you get.</li>
<li>比較級の強調：<b>much / far / even</b>（<s>very</s> more は×）</li>
<li>倍数：three times <b>as</b> large <b>as</b> / three times larger <b>than</b></li></ul>
<div class="tip">than を見つけたら、①比較級になっているか ②比べる対象がそろっているか をチェック！</div>`}
  ],
  qs:[
    ['mc','比較の問題で than を見つけたら何をチェックする？',['比較級の形と、比べる対象がそろっているか','than の綴りが正しいか','文が過去形か','主語が人かどうか'],'more ＋ -er の重複や、比べる対象のズレがよく狙われるよ。'],
    ['er','Mercury is {more} {smaller} than {any} other {planet}.',0,'（more を削除）','smaller だけで比較級。more との重複はNG。'],
    ['er','The cheetah is {the} {most fastest} land animal {in} the {world}.',1,'fastest','最上級は fastest だけ。most と重ねない。'],
    ['fb','The longer you wait, ___ the problem becomes.',['the worse','worse','the worst','more bad'],'The 比較級 …, the 比較級 … の形。'],
    ['er','The {population} of Tokyo {is} {larger} than {Osaka}.',3,'that of Osaka','比べるのは「人口」同士。that of Osaka とする。'],
    ['fb','Copper is not ___ gold.',['as valuable as','as valuable than','more valuable as','valuable as'],'同等比較 as ～ as。'],
    ['er','Her second novel was {very} {more} {successful} {than} the first.',0,'much','比較級の強調は much / far / even。very は使えない。'],
    ['fb','Of all the Great Lakes, Lake Superior is ___.',['the largest','the larger','largest than','more large'],'Of all ～ は最上級のサイン。'],
    ['er','This year\'s results are {similar} {with} {those} of last {year}.',1,'to','similar to ～「～に似ている」。'],
    ['fb','Jupiter is about eleven times ___ Earth in diameter.',['wider than','as wide','the widest','wide than'],'倍数 ＋ 比較級 ＋ than。木星の直径は地球の約11倍。'],
    ['er','Diamonds are {the} {hardest} of all natural {substance} {known}.',2,'substances','of all ＋ 複数名詞。'],
    ['er','The new model uses {less} energy {and} is {more efficient} {that} the old one.',3,'than','比較級の後ろは than。'],
    ['fb','Nothing is ___ than good health.',['more important','most important','importanter','as important'],'Nothing is 比較級 than … で最上級の意味になる。']
  ]
},
/* ───────────────────────── UNIT 11 ───────────────────────── */
{ id:'u11', sec:'L', title:'イディオム・句動詞', sub:'Part A の半分近くに登場', roi:2,
  learn:[
    {h:'Part A はイディオムだらけ', b:`<p>Part Aの会話には<b>イディオム（慣用表現）</b>や<b>句動詞</b>がたくさん出るよ。</p>
<div class="tip">文字通りの意味の選択肢（a piece of cake → ケーキを食べた）は<b>ワナ</b>！</div>`},
    {h:'頻出イディオム ①', b:`<table class="tbl">
<tr><td>call off</td><td>中止する</td></tr><tr><td>put off</td><td>延期する</td></tr>
<tr><td>turn down</td><td>断る</td></tr><tr><td>look into</td><td>調べる</td></tr>
<tr><td>figure out</td><td>理解する・解決する</td></tr><tr><td>run out of</td><td>使い切る</td></tr>
<tr><td>drop by</td><td>立ち寄る</td></tr><tr><td>pick up</td><td>取りに行く・買う</td></tr>
<tr><td>go over</td><td>見直す</td></tr><tr><td>catch up on</td><td>遅れを取り戻す</td></tr></table>`},
    {h:'頻出イディオム ②', b:`<table class="tbl">
<tr><td>a piece of cake</td><td>とても簡単</td></tr><tr><td>under the weather</td><td>体調が悪い</td></tr>
<tr><td>on the house</td><td>（お店の）サービス・無料</td></tr><tr><td>hit the books</td><td>猛勉強する</td></tr>
<tr><td>sleep on it</td><td>一晩じっくり考える</td></tr><tr><td>give ～ a hand</td><td>手伝う</td></tr>
<tr><td>It's up to you.</td><td>あなたに任せる</td></tr><tr><td>No wonder …</td><td>どうりで…</td></tr>
<tr><td>I'll pass.</td><td>遠慮しておく</td></tr><tr><td>cut class</td><td>授業をサボる</td></tr></table>`}
  ],
  qs:[
    ['ls',[['W',"Are we still having the picnic on Saturday?"],['M',"No, they called it off because of the rain forecast."]],'What does the man mean?',['The picnic was canceled.','The picnic was moved indoors.','He will call the woman later.','The forecast is sunny.'],'call off ＝ 中止する。'],
    ['ls',[['M',"How did you do on the quiz?"],['W',"It was a piece of cake."]],'What does the woman mean?',['The quiz was easy.','She ate cake during the quiz.',"She didn't take the quiz.",'The quiz was very difficult.'],'a piece of cake ＝ とても簡単。「ケーキ」の選択肢は典型的なワナ。'],
    ['ls',[['W',"You look pale. Are you OK?"],['M',"I'm a little under the weather today."]],'What does the man mean?',['He feels slightly sick.','He got wet in the rain.','He is worried about the weather.','It is cold outside.'],'under the weather ＝ 体調がすぐれない。weather の単語につられないように。'],
    ['ls',[['M',"I can't figure out this math problem."],['W',"Let's go over it together after lunch."]],'What does the woman suggest?',['Reviewing the problem together later','Having lunch with the professor','Asking someone else for help','Skipping the problem'],'go over ＝ 見直す・検討する。after lunch ＝ later。'],
    ['ls',[['W',"Should I accept the job offer now?"],['M',"Why not sleep on it?"]],'What does the man suggest?',['She should take time to decide.','She should go to bed early.','She should reject the offer.','She should accept it immediately.'],'sleep on it ＝ 一晩考える（即決しない）。'],
    ['ls',[['M',"We've run out of printer paper."],['W',"I'll pick some up on my way back from class."]],'What will the woman probably do?',['Buy paper later','Print his paper','Run to class','Fix the printer'],'run out of ＝ 切らす。pick up ＝ 買ってくる。'],
    ['ls',[['W',"Can you give me a hand with these boxes?"],['M',"Sure. Where do you want them?"]],'What will the man probably do?',['Help her move the boxes','Shake her hand','Buy some boxes','Leave the boxes there'],'give ～ a hand ＝ 手伝う。'],
    ['ls',[['M',"I've missed three classes this week."],['W',"You'd better catch up on your reading before the exam."]],'What does the woman suggest?',['He should do the reading he missed.','He should catch the bus.','He should skip the exam.','He should read the newspaper.'],'catch up on ＝ 遅れを取り戻す。'],
    ['ls',[['W',"The dessert is on the house tonight."],['M',"That's very kind of you."]],'What does the woman mean?',['The dessert is free.','The dessert is upstairs.','The dessert is homemade.','The dessert costs extra.'],'on the house ＝ お店のおごり・無料。'],
    ['ls',[['M',"Jane has been studying in the library every night."],['W',"No wonder she got the highest score."]],'What does the woman mean?',["She isn't surprised by Jane's score.","She wonders about Jane's score.",'She thinks Jane was lucky.',"She didn't know Jane studied."],'No wonder … ＝ どうりで…（驚かない）。wonder につられないで！'],
    ['ls',[['W',"Should we eat Italian or Chinese tonight?"],['M',"It's up to you."]],'What does the man mean?',['The woman can decide.','He wants Italian food.','He wants to cook.',"He isn't hungry."],"It's up to you. ＝ 君が決めていいよ。"],
    ['ls',[['M',"I was offered the scholarship, but I turned it down."],['W',"Really? Why?"]],'What did the man do?',['He refused the scholarship.','He accepted the scholarship.','He lost the scholarship.','He applied again.'],'turn down ＝ 断る。']
  ]
},
/* ───────────────────────── UNIT 12 ───────────────────────── */
{ id:'u12', sec:'S', title:'動詞の形', sub:'時制・受動態・不定詞・動名詞', roi:2,
  learn:[
    {h:'時制のサイン', b:`<ul><li>in 1876 / ago / last year → <b>過去形</b></li>
<li>since ～ / for ＋期間（今まで） → <b>現在完了</b></li>
<li>by the time ＋過去 → <b>過去完了</b>（had ＋過去分詞）</li></ul>`},
    {h:'受動態は be ＋ 過去分詞', b:`<div class="ex">The telephone was <s>invent</s> <span class="hl">invented</span> by Bell.</div>
<p>主語が「される側」なら受動態。過去分詞の形のミス（<s>founded</s> → found, <s>rose</s> → risen）もよく出るよ。</p>`},
    {h:'to不定詞？ -ing？', b:`<table class="tbl"><tr><th>-ing をとる</th><th>to do をとる</th></tr>
<tr><td>enjoy, avoid, finish, consider, suggest, mind</td><td>want, decide, plan, hope, refuse, agree</td></tr></table>
<ul><li><b>前置詞の後ろ</b>は -ing：interested in <span class="hl">studying</span></li>
<li>助動詞の後ろは<b>原形</b>：can <span class="hl">freeze</span></li>
<li>make / let / have ＋ O ＋<b>原形</b></li></ul>`}
  ],
  qs:[
    ['mc','enjoy の後ろに動詞を続けるときの形は？',['-ing形（enjoy reading）','to不定詞（enjoy to read）','原形（enjoy read）','過去分詞（enjoy read）'],'enjoy, avoid, finish, consider などは -ing をとる動詞。'],
    ['er','The telephone {was} {invent} by Alexander Graham Bell {in} {1876}.',1,'invented','受動態は be ＋ 過去分詞。'],
    ['er','Since 2010, the city {built} {three} new {libraries} {and} a museum.',0,'has built','Since 2010（～以来ずっと）は現在完了。'],
    ['fb','Many students avoid ___ difficult classes in their first year.',['taking','to take','take','taken'],'avoid ＋ -ing。'],
    ['er','The committee decided {postponing} the {meeting} {until} next {month}.',0,'to postpone','decide ＋ to不定詞。'],
    ['er','Water {can} {freezes} {at} {zero} degrees Celsius.',1,'freeze','助動詞の後ろは原形。'],
    ['fb','The professor made the students ___ the essay.',['rewrite','to rewrite','rewriting','rewrote'],'使役 make ＋ O ＋ 原形。'],
    ['er','By six o\'clock, the sun {had} {rose} {over} the {mountains}.',1,'risen','rise – rose – risen。had の後ろは過去分詞。'],
    ['fb','The ancient city ___ by a volcanic eruption in A.D. 79.',['was destroyed','destroyed','has destroyed','was destroying'],'都市は「破壊された」→ 受動態。A.D. 79 は過去の一時点。'],
    ['er','She is interested {in} {study} marine {biology} {at} university.',1,'studying','前置詞 in の後ろは動名詞。'],
    ['fb','By the time the firefighters arrived, the building ___.',['had already burned down','has already burned down','already burns down','is burning down already'],'by the time ＋ 過去 → それより前に完了していたので過去完了。'],
    ['er','The old letters were {founded} in the attic {of} an {abandoned} {house}.',0,'found','find – found – found（見つける）。founded は found（設立する）の過去形。'],
    ['fb','Regular exercise helps people ___ stress.',['reduce','reducing','reduced','to reducing'],'help ＋ O ＋（to）原形。']
  ]
},
/* ───────────────────────── UNIT 13 ───────────────────────── */
{ id:'u13', sec:'R', title:'主題・詳細・NOT問題', sub:'長文の設問タイプ別攻略', roi:2,
  learn:[
    {h:'主題（Main idea）問題', b:`<div class="ex">What is the passage mainly about? ／ Which title is best?</div>
<ul><li>第1段落と<b>各段落の最初の文</b>をつなげて考える</li>
<li><b>細かすぎる</b>選択肢（1段落の話だけ）と<b>広すぎる</b>選択肢は×</li></ul>
<div class="tip">全体がつかめるまでは後回しにしてもOK。他の設問を解くうちに見えてくるよ。</div>`},
    {h:'詳細（According to the passage）問題', b:`<ol><li>設問の<b>キーワード</b>を本文から探す（スキャン）</li>
<li>その前後を丁寧に読む</li>
<li>本文の<b>言いかえ</b>になっている選択肢を選ぶ</li></ol>`},
    {h:'NOT / EXCEPT 問題', b:`<div class="ex">Which of the following is NOT mentioned …?</div>
<p>本文で確認できた選択肢を<b>1つずつ消していく</b>。時間がかかるので、残り時間が少ないときは後回しに。</p>
<p class="small">「書かれていない」ものを選ぶ問題。NOT を見落とすと逆を選んでしまうから、設問は最後まで読もう！</p>`}
  ],
  vocab:[
    ['altered','The river has altered its course many times.','changed','kept','cleaned','crossed','変える'],
    ['apparent','It soon became apparent that the plan would fail.','clear','hidden','unlikely','false','明らかな'],
    ['contributed to','Many factors contributed to the city\'s growth.','led to','prevented','followed','measured','寄与する'],
    ['distinct','The two languages have distinct grammars.','different','similar','simple','ancient','異なる・はっきりした'],
    ['eventually','The team eventually found a solution.','finally','quickly','never','recently','ついに'],
    ['exhibited','The patient exhibited signs of fatigue.','showed','hid','treated','ignored','示す'],
    ['hazardous','Hazardous waste must be stored safely.','dangerous','useless','liquid','common','危険な'],
    ['illustrate','The teacher used a map to illustrate the trade routes.','explain','hide','change','close','説明する'],
    ['intense','The intense heat damaged the crops.','extreme','mild','brief','usual','強烈な'],
    ['numerous','The author has written numerous books.','many','few','long','famous','多数の'],
    ['precise','Scientists need precise measurements.','exact','rough','quick','cheap','正確な'],
    ['revealed','The survey revealed surprising results.','made known','covered','delayed','reduced','明らかにする'],
    ['sole','He was the sole owner of the company.','only','first','former','wealthy','唯一の'],
    ['thrive','Cacti thrive in dry climates.','grow well','die','struggle','rest','よく育つ・繁栄する'],
    ['widespread','The disease was widespread in the 18th century.','common','rare','mild','deadly','広まった'],
    ['rigid','The rules were too rigid for the new students.','strict','loose','unclear','kind','厳格な・硬い']
  ],
  qs:[
    ['mc','主題を問う問題を解くコツは？',['第1段落と各段落の最初の文をつなげて考える','最後の1文だけを読む','一番細かい情報を含む選択肢を選ぶ','本文で一番多く出てくる単語を選ぶ'],'各段落の冒頭（トピックセンテンス）に要点が集まりやすいよ。'],
    {t:'rd', title:'The Dust Bowl', p:`During the 1930s, a series of severe dust storms swept across the southern Great Plains of the United States, a region that came to be known as the Dust Bowl. The disaster had both natural and human causes. A long drought dried out the soil, but the land had already been made vulnerable by decades of intensive farming. In the early twentieth century, settlers plowed millions of acres of native grassland to plant wheat. The deep roots of the prairie grasses had once held the soil in place and trapped moisture. Without them, the dry topsoil was easily lifted by strong winds.

The storms were devastating. Clouds of dust darkened the sky for hours, buried fences and machinery, and damaged the lungs of people and livestock. Thousands of farm families lost their livelihoods, and many of them migrated west to California in search of work.

The crisis also changed agricultural policy. In 1935, the federal government created the Soil Conservation Service, which taught farmers techniques such as crop rotation, contour plowing, and planting rows of trees to break the wind. These methods helped restore the land, and many are still used today.`, qs:[
      ['What is the passage mainly about?',['The causes and effects of the Dust Bowl','The history of wheat farming in California','How prairie grasses grow deep roots','Modern methods of predicting droughts'],'第1段落＝原因、第2段落＝被害、第3段落＝その後の政策。全体をまとめているのはこれ。ほかは一部分だけ。',''],
      ['According to the passage, what made the land vulnerable before the drought?',['Plowing up native grasses for farming','Heavy rainfall','Building fences','Migration from California'],'the land had already been made vulnerable by decades of intensive farming → 草原を耕したこと。','vulnerable'],
      ['The word "them" in "Without them" refers to',['the deep roots of the prairie grasses','the settlers','millions of acres','strong winds'],'直前の文の The deep roots of the prairie grasses。根がなくなって土が飛ばされた。','Without them'],
      ['The word "devastating" is closest in meaning to',['extremely destructive','surprisingly brief','mostly harmless','very colorful'],'後ろに被害の具体例が続く → 非常に破壊的な。','devastating'],
      ['Which of the following is NOT mentioned as an effect of the dust storms?',['Rising wheat prices','Damaged lungs','Buried machinery','Families moving west'],'肺の損傷・機械が埋まる・西への移住は書かれている。小麦の価格は書かれていない。','buried'],
      ['The Soil Conservation Service taught farmers all of the following EXCEPT',['burning old crops','crop rotation','contour plowing','planting rows of trees'],'本文にある3つを消去。burning old crops はどこにもない。','crop rotation'],
      ['It can be inferred from the passage that the prairie grasses',['helped protect the soil from wind','were planted by the settlers','grew only in California','caused the drought'],'根が土を押さえていた → なくなると風で土が飛んだ。だから草は土を守っていたと推論できる。','prairie grasses']
    ]},
    ['mc','"Which of the following is NOT mentioned …?" の効率的な解き方は？',['本文で確認できた選択肢を消していく','最初に目に入った選択肢を選ぶ','本文の最初の段落だけを読む','NOT を無視して普通に答える'],'消去法が基本。時間がかかるので残り時間と相談して後回しにしてもOK。']
  ]
},
/* ───────────────────────── UNIT 14 ───────────────────────── */
{ id:'u14', sec:'S', title:'語順と倒置', sub:'Never have I … の形', roi:2,
  learn:[
    {h:'否定語が文頭 → 倒置', b:`<p>Never / Rarely / Seldom / Hardly / Not only / Only ＋副詞句 が文頭に来ると、後ろが<b>疑問文の語順</b>になる。</p>
<div class="ex">Rarely <span class="hl">do sharks swim</span> in such cold water.<br>Only after the test <span class="hl">did they accept</span> the results.</div>`},
    {h:'間接疑問は普通の語順', b:`<div class="ex">Scientists do not know <span class="hl">how the pyramids were built</span>.<br><s>how were the pyramids built</s></div>
<p>文の中に入った疑問詞のカタマリは <b>疑問詞＋S＋V</b>。</p>`},
    {h:'その他の語順', b:`<ul><li>形容詞＋<b>enough</b>：warm enough（<s>enough warm</s>）</li>
<li><b>so</b> ＋形容詞＋that ／ <b>such</b> ＋(a)形容詞＋名詞＋that</li>
<li>場所の句が文頭：At the top of the hill <span class="hl">stands a lighthouse</span>.</li></ul>`}
  ],
  qs:[
    ['mc','Never / Rarely / Seldom などの否定語が文頭に来ると？',['後ろが疑問文の語順（倒置）になる','動詞が必ず過去形になる','主語が省略される','not を加える必要がある'],'Rarely do sharks swim … のように助動詞が主語の前に出るよ。'],
    ['fb','Rarely ___ in such cold water.',['do sharks swim','sharks swim','sharks do swim','swim sharks do'],'否定語 Rarely が文頭 → 倒置（do ＋ S ＋ V）。'],
    ['fb','Scientists still do not know exactly ___.',['how the pyramids were built','how were the pyramids built','how did they build the pyramids','the pyramids how were built'],'間接疑問は 疑問詞 ＋ S ＋ V の語順。'],
    ['er','The water was not {enough warm} for the {children} to {swim} {in}.',0,'warm enough','enough は形容詞の後ろ。'],
    ['fb','Only after the experiment was repeated ___ the results.',['did the researchers accept','the researchers accepted','accepted the researchers','the researchers did accept'],'Only ＋ 副詞句（節）が文頭 → 主節が倒置。'],
    ['fb','Not only ___ fast, but it is also very efficient.',['is the new train','the new train is','does the new train','the new train does'],'Not only が文頭 → 倒置。be動詞の文なので is ＋ S。'],
    ['er','It was {so} {a} {beautiful} day {that} we went to the beach.',0,'such','a ＋形容詞＋名詞 の前は such。such a beautiful day that …。'],
    ['fb','At the top of the hill ___.',['stands an old lighthouse','an old lighthouse standing','does an old lighthouse stand','standing an old lighthouse'],'場所の句が文頭 → 動詞 ＋ 主語 の倒置（do は使わない）。'],
    ['er','The guide explained {why} {was} {the castle} {abandoned}.',1,'why the castle was abandoned','間接疑問は 疑問詞＋S＋V。was は主語 the castle の後ろへ。'],
    ['fb','Seldom ___ such a large crowd at the stadium.',['has there been','there has been','there been has','been there has'],'Seldom が文頭 → 倒置。there has been → has there been。'],
    ['fb','The bridge is ___ that it can be seen from miles away.',['so tall','such tall','so tall a','such a tall'],'形容詞だけなら so ＋ 形容詞 ＋ that。']
  ]
},
/* ───────────────────────── UNIT 15 ───────────────────────── */
{ id:'u15', sec:'L', title:'否定・提案・推論', sub:'言葉の裏にある意味をつかむ', roi:2,
  learn:[
    {h:'二重否定・強い同意', b:`<ul><li>It's <b>not unusual</b>. ＝ よくあること</li>
<li>I <b>couldn't agree more</b>. ＝ 大賛成</li>
<li><b>Hardly</b> anyone came. ＝ ほとんど来なかった</li>
<li>So do I. / Me too. ／ <b>Neither</b> do I. / Me neither.（否定への同意）</li></ul>`},
    {h:'提案の表現', b:`<div class="ex">Why don't you …? ／ How about …? ／ You might want to … ／ If I were you, I'd …</div>
<p>質問が What does the man <b>suggest</b>? なら、この部分が答え。</p>`},
    {h:'仮定法・意外の表現', b:`<ul><li>If I <b>had known</b> … → 実際は<b>知らなかった</b></li>
<li>I <b>wish</b> I had … → 実際は<b>持っていない</b></li>
<li>Oh, you're …? I <b>thought</b> you … → 予想と<b>ちがった</b></li></ul>
<div class="tip">What had the woman <b>assumed</b>? は難問の定番。「思っていたこと」＝ 事実とは逆の内容を選ぶよ。</div>`}
  ],
  qs:[
    ['mc','"If I had known about the sale, I would have bought two." から分かる事実は？',['セールのことを知らなかった','セールで2つ買った','セールに行った','セールの店員だ'],'仮定法過去完了は「実際は～しなかった」ことを表す。'],
    ['ls',[['M',"I don't think I'll ever understand statistics."],['W',"Neither will I."]],'What does the woman mean?',['She also finds statistics hard.','She understands statistics well.','She will help him with statistics.','She has never studied statistics.'],'Neither will I. ＝ 私も（理解できそうに）ない。否定文への同意。'],
    ['ls',[['W',"The cafeteria food is great today."],['M',"I couldn't agree more."]],'What does the man mean?',['He completely agrees.','He disagrees.',"He hasn't eaten yet.",'He wants more food.'],"couldn't agree more ＝ これ以上ないほど賛成。"],
    ['ls',[['M',"If I had known about the sale, I would have bought two."],['W',"It ended yesterday."]],'What can be inferred about the man?',["He didn't know about the sale.",'He bought two items.','He went to the sale.','He works at the store.'],'仮定法過去完了 → 実際は知らなかった。'],
    ['ls',[['W',"Oh, you take the train? I thought you drove to school."],['M',"I sold my car last month."]],'What had the woman assumed?',['The man drove to school.','The man took the train.',"The man didn't go to school.",'The man lived on campus.'],'I thought you drove … ＝ 車で通学していると思っていた。'],
    ['ls',[['W',"Did we really have a quiz in biology today?"],['M',"It's not unusual for that professor to give surprise quizzes."]],'What does the man mean?',['The professor often gives surprise quizzes.','The professor never gives quizzes.','The quiz was unusual.','He was surprised by the quiz.'],'not unusual ＝ よくあること。二重否定に注意。'],
    ['ls',[['W',"I can't decide which course to take."],['M',"If I were you, I'd talk to students who took them last year."]],'What does the man suggest?',['Asking students who took the courses','Taking both courses','Waiting until next year','Choosing the easier course'],'If I were you, I\'d … は提案の表現。'],
    ['ls',[['M',"It's starting to rain. I wish I had brought my umbrella."],['W',"We can share mine."]],'What does the man mean?',["He doesn't have his umbrella.",'He has his umbrella.','He bought a new umbrella.',"He doesn't need an umbrella."],'I wish I had brought … ＝ 持ってくればよかった（実際は持っていない）。'],
    ['ls',[['W',"Didn't you go to the career fair?"],['M',"I was planning to, but my car broke down."]],'What does the man imply?',["He didn't attend the career fair.",'He enjoyed the career fair.','He drove to the fair.','He sold his car.'],'行くつもりだったが車が故障 → 行けなかった。'],
    ['ls',[['W',"How was the club meeting last night?"],['M',"Hardly anyone came."]],'What does the man mean?',['Very few people attended.','The meeting was hard.','Everyone came.','The meeting was canceled.'],'hardly anyone ＝ ほとんど誰も…ない。'],
    ['ls',[['W',"I'm going to the gym. Want to come?"],['M',"Thanks, but I'll pass."]],'What does the man mean?',["He won't go to the gym.",'He will pass by the gym.','He passed the exam.','He will go later.'],"I'll pass. ＝ やめておく（断り）。"],
    ['ls',[['M',"Wasn't the lecture supposed to start at ten?"],['W',"It was moved to eleven."]],'What had the man assumed?',['The lecture would begin at ten.','The lecture was canceled.','The lecture would begin at eleven.','There was no lecture today.'],"Wasn't … supposed to …? ＝ …のはずじゃなかった？ → 10時開始だと思っていた。"],
    ['ls',[['W',"I've never seen the campus so crowded."],['M',"Neither have I."]],'What does the man mean?',['He has never seen it this crowded either.','He often sees crowds on campus.','He has never been to campus.','He likes crowds.'],'Neither have I. ＝ 私も見たことがない。']
  ]
},
/* ───────────────────────── UNIT 16 ───────────────────────── */
{ id:'u16', sec:'S', title:'ペア表現と余分な語', sub:'like / alike・重複のワナ', roi:2,
  learn:[
    {h:'決まったペア', b:`<ul><li><b>between</b> A <b>and</b> B ／ <b>from</b> A <b>to</b> B</li>
<li><b>whether</b> A <b>or</b> B ／ <b>either</b> A <b>or</b> B ／ <b>neither</b> A <b>nor</b> B</li>
<li><b>so</b> … <b>that</b> ／ <b>such</b> … <b>that</b> ／ <b>as</b> … <b>as</b> ／ the same … <b>as</b></li></ul>
<p>相方がちがう（between A <s>or</s> B）ミスがよく狙われるよ。</p>`},
    {h:'like / alike / unlike', b:`<ul><li><b>Like</b> ＋名詞, …「～と同じように」</li>
<li><b>Unlike</b> ＋名詞, …「～とちがって」</li>
<li>A and B look <b>alike</b>.「似ている」（名詞の前には置かない）</li></ul>
<div class="tip">文頭の <b>Alike</b> は誤りのサインになりやすい！</div>`},
    {h:'余分な語・意味の重複', b:`<ul><li>主語の重複：My advisor <s>she</s> suggested …</li>
<li>関係詞節の中の重複：the book which I borrowed <s>it</s></li>
<li>意味の重複：repeat <s>again</s> ／ return <s>back</s> ／ the reason is <s>because</s> → that</li>
<li>まぎらわしい動詞：rise（上がる）/ raise（上げる）、lie（横になる）/ lay（置く）、make / do</li></ul>`}
  ],
  qs:[
    ['mc','文頭に Alike other reptiles, … とあったら？',['Like / Unlike の誤りを疑う','正しい表現なので次へ','Alike を Alikely にする','カンマを削除する'],'alike は名詞の前に置けない。文頭なら Like（～と同様に）か Unlike（～とちがって）。'],
    ['er','The ferry runs {between} Seattle {or} {Victoria} {twice} a day.',1,'and','between A and B のペア。'],
    ['er','{Alike} other reptiles, snakes {are} {cold-blooded} {animals}.',0,'Like','「ほかの爬虫類と同じように」→ Like ＋ 名詞。'],
    ['er','The book {which} I borrowed {it} from the library {is} {overdue}.',1,'（it を削除）','which が目的語の役割をしているので it は重複。'],
    ['fb','___ most birds, penguins cannot fly.',['Unlike','Alike','Dislike','Unless'],'「ほとんどの鳥とちがって」→ Unlike ＋ 名詞。'],
    ['er','She had to {repeat} the {experiment} {again} because {of} an error.',2,'（again を削除）','repeat に「もう一度」の意味が含まれるので again は重複。'],
    ['er','Prices {raise} {when} demand {exceeds} {supply}.',0,'rise','自動詞「上がる」は rise。raise は「～を上げる」（目的語が必要）。'],
    ['fb','The two species look ___, but their songs are very different.',['alike','like','likely','alikely'],'look alike ＝ 似て見える（叙述用法）。'],
    ['er','My {advisor} {she} {suggested} that I {take} a writing course.',1,'（she を削除）','主語 My advisor と she が重複。suggest that S ＋ 原形 は正しい形。'],
    ['fb','You can choose either the morning session ___ the evening session.',['or','nor','and','but'],'either A or B。'],
    ['er','Please {lay} {down} for a few minutes if you {feel} {dizzy}.',0,'lie','「横になる」は lie（自動詞）。lay は「～を置く」。'],
    ['er','The reason he {was} late {is} {because} the bus {broke down}.',2,'that','The reason is that … が正しい形。because は意味が重複。'],
    ['fb','The researchers ___ an important discovery last year.',['made','did','took','got'],'make a discovery（発見する）は決まった組み合わせ。']
  ]
},
/* ───────────────────────── UNIT 17 ───────────────────────── */
{ id:'u17', sec:'R', title:'推論と長文の時間戦略', sub:'書かれていないことを読む', roi:1,
  learn:[
    {h:'推論（Inference）問題', b:`<div class="ex">It can be inferred from the passage that … ／ The author implies …</div>
<p>本文に<b>直接は書かれていないけれど、確実に言えること</b>を選ぶ。</p>
<ul><li>本文の内容を<b>少しだけ</b>言いかえたものが正解</li>
<li>本文から<b>飛躍しすぎた</b>選択肢、<b>極端な語</b>（always, never, all）を含む選択肢は要注意</li></ul>`},
    {h:'「なぜ筆者は～に触れたのか」', b:`<div class="ex">Why does the author mention X?</div>
<p>X の前後を読んで、その<b>役割</b>を考える：例を示す／対比する／定義する／理由を説明する。</p>`},
    {h:'Readingの時間戦略', b:`<ul><li>1パッセージ<b>約11分</b>。時計で区切りを決める</li>
<li>語彙・参照など<b>速攻問題は確実に</b></li>
<li>悩む問題は推測でマークして<b>先へ</b>（減点なし）</li>
<li>最後のパッセージを<b>読み残さない</b>ことが最優先</li>
<li>背景知識ではなく、<b>本文だけ</b>を根拠に（中立な立場で読む）</li></ul>`}
  ],
  qs:[
    ['mc','Readingの時間配分として最も適切なのは？',['1パッセージ約11分を目安に、悩む問題は推測でマークして進む','最初のパッセージを完璧に解いてから次へ','難しい問題から先に解く','語彙問題は最後にまとめて解く'],'5パッセージを読み切ることが最優先。速攻問題を確実に取り、悩む問題は先送り。'],
    ['mc','推論問題の正解になりやすい選択肢は？',['本文の内容から確実に言えることを、言いかえたもの','本文にまったく関係のない一般常識','always や never を含む極端な内容','本文の文をそのまま写したもの（設問とズレている）'],'推論でも根拠は本文。少しだけ踏み込んだ「確実に言えること」が正解。'],
    {t:'rd', title:'Sea Otters', p:`Sea otters, which live along the coasts of the northern Pacific Ocean, are among the few mammals that use tools. Floating on their backs, they often place a rock on their chests and strike shellfish against it to break the shells open. Unlike whales and seals, sea otters have no thick layer of fat to keep them warm. Instead, they rely on extremely dense fur, which traps a layer of air next to the skin.

This remarkable fur nearly led to the animal's disappearance. During the eighteenth and nineteenth centuries, hunters killed sea otters in enormous numbers, and by the early 1900s only small, scattered groups remained.

The decline of the otters had unexpected consequences for the ocean floor. Sea otters feed heavily on sea urchins, spiny animals that graze on kelp, a large seaweed. With few otters left to eat them, urchin populations exploded, and in many areas the urchins destroyed entire kelp forests. Because kelp forests shelter many kinds of fish and other sea life, their loss affected the whole coastal ecosystem. Since international protection began in 1911, otter numbers have partially recovered, and where otters have returned, kelp forests have often grown back. For this reason, ecologists describe the sea otter as a keystone species, an animal whose influence on its environment is far greater than its numbers would suggest.`, qs:[
      ['What is the main topic of the passage?',['The sea otter and its role in the coastal ecosystem','How kelp is harvested for food','The hunting methods of the 1800s','Why whales have thick layers of fat'],'道具の使用・毛皮・乱獲・生態系への影響 → ラッコと生態系での役割が全体のテーマ。',''],
      ['According to the passage, sea otters break open shells by',['hitting them against a rock','biting them with their teeth','dropping them from a height','soaking them in water'],'strike shellfish against it (= a rock) の言いかえ。','strike'],
      ['Why does the author mention whales and seals?',['To contrast how they stay warm with how sea otters stay warm','To show which animals sea otters hunt','To list animals that use tools','To explain why hunters killed sea otters'],'Unlike whales and seals …（脂肪で保温）↔ ラッコは毛皮で保温、という対比。','whales and seals'],
      ['The word "scattered" is closest in meaning to',['spread out','hidden','growing','joined'],'small, scattered groups ＝ 小さく散らばった群れ。','scattered'],
      ['The word "exploded" is closest in meaning to',['increased rapidly','blew up','moved away','became sick'],'ウニの数が「爆発的に増えた」という比喩。文字通りの blew up はワナ。','exploded'],
      ['The word "their" in "their loss" refers to',['kelp forests','sea urchins','fish','sea otters'],'直前の Because kelp forests shelter … を受けている。','their loss'],
      ['It can be inferred from the passage that sea urchins',['were kept in check by sea otters before the otters declined','are protected by international law','feed mainly on shellfish','help kelp forests grow'],'ラッコが減るとウニが爆発的に増えた → それまではラッコがウニの数をおさえていた。','sea urchins'],
      ['According to the passage, a keystone species is one that',['has a large effect on its environment compared with its numbers','is the largest animal in its ecosystem','has recovered from near extinction','uses tools to find food'],'最後の文の定義を言いかえたもの。','keystone species']
    ]}
  ]
},
/* ───────────────────────── UNIT 18 ───────────────────────── */
{ id:'u18', sec:'L', title:'Part B / C　長い会話と講義', sub:'話題と強調ポイントをつかむ', roi:1,
  learn:[
    {h:'Part B と Part C', b:`<ul><li><b>Part B</b>：長めの会話（学生同士・学生と職員）が2本、各4問前後</li>
<li><b>Part C</b>：講義やトークが3本、各4問前後</li></ul>
<p>1本の音声に複数の設問。<b>最初の設問は「何についての話か（主題）」</b>が定番だよ。</p>`},
    {h:'聞き方のコツ', b:`<ol><li><b>最初の数文</b>で話題をつかむ（Today I'd like to talk about …）</li>
<li>話し手が<b>繰り返す・強調する</b>語は出題されやすい</li>
<li>講義の型：<b>定義 → 例 → 重要ポイント</b>を意識</li>
<li>音声の前に、その本の設問の<b>選択肢を先読み</b></li></ol>
<p class="small">メモが許されるかどうかは実施団体のルールに従おう。</p>`},
    {h:'途中で聞き逃しても大丈夫', b:`<div class="tip">1文わからなくても、話は続く。<b>あきらめずに次のキーワードを待とう</b>。「長い・難しい」と思った瞬間に集中が切れるのが一番の失点原因！</div>`}
  ],
  qs:[
    ['mc','Part C（講義）の最初の設問によく出るのは？',['講義の主題（何についての話か）','教授の名前','講義の日付','教室の場所'],'冒頭の Today I\'d like to talk about … を聞き逃さないようにしよう。'],
    {t:'lt', title:'Lecture: Monarch Butterflies', d:[
      ['N',"Listen to part of a lecture in a biology class."],
      ['P',"Today I'd like to talk about one of the most remarkable journeys in the insect world: the migration of the monarch butterfly. Every fall, millions of monarchs leave the northern United States and southern Canada and fly as far as three thousand miles to the mountains of central Mexico. There, they spend the winter clustered together on fir trees."],
      ['P',"What's surprising is that no single butterfly makes the round trip. Most monarchs live only a few weeks. But the generation that flies south in the fall is different. These butterflies can live up to eight months. In the spring, they begin flying north, lay eggs, and die. It takes their children and grandchildren, three or four generations in all, to complete the return journey."],
      ['P',"So how do they find their way to a place they have never seen? Researchers have found that monarchs use the position of the sun as a compass, and they may also sense the Earth's magnetic field."],
      ['P',"Finally, monarchs depend on a plant called milkweed. It's the only food their caterpillars eat. Unfortunately, milkweed has been disappearing from farmland, and that's one reason scientists are worried about the monarch's future."]
    ], qs:[
      ['What is the lecture mainly about?',['The migration of the monarch butterfly','How to grow milkweed','The climate of central Mexico','Why most insects live only a few weeks'],"冒頭の Today I'd like to talk about … the migration of the monarch butterfly が主題。"],
      ['According to the professor, what is unusual about the butterflies that fly south in the fall?',['They live much longer than other monarchs.','They never lay eggs.','They fly only at night.','They feed on fir trees.'],'ふつうは数週間だが、南へ渡る世代は最長8か月生きる。'],
      ['How many generations does it take to complete the journey north?',['Three or four','One','Two','About ten'],'three or four generations in all と述べている。'],
      ['According to the professor, what helps monarchs find their way?',['The position of the sun','The smell of milkweed','Following older butterflies','Ocean currents'],'use the position of the sun as a compass。磁場を感じている可能性にも触れている。'],
      ['Why does the professor mention milkweed?',["To explain why scientists are worried about the monarch's future",'To describe where monarchs spend the winter','To compare it with fir trees','To show how monarchs navigate'],'幼虫の唯一の食べ物であるトウワタが減っている → 将来が心配、という流れ。']
    ]},
    {t:'lt', title:'Conversation: A Research Paper', d:[
      ['N',"Listen to a conversation between two students."],
      ['W',"Hi, Tom. You look worried. What's going on?"],
      ['M',"I just found out my research paper for sociology is due next Monday, not next month. I completely misread the syllabus."],
      ['W',"Oh no. How much have you done?"],
      ['M',"I've chosen my topic, but that's about it. I'm writing about how social media affects voting among young people."],
      ['W',"That's a great topic. Have you checked the library's online database? When I wrote my paper last semester, I found most of my sources there in one afternoon."],
      ['M',"I didn't know the library had one."],
      ['W',"It does, and the reference librarians are really helpful. They can show you how to search it. The help desk is open until nine tonight."],
      ['M',"Then I'll go right after dinner. Thanks, Lisa. You just saved my weekend."]
    ], qs:[
      ["What is the man's problem?",['He has less time to finish his paper than he thought.','He chose the wrong topic.','He lost his syllabus.','He failed a sociology exam.'],'締め切りが来月ではなく来週だった → 思っていたより時間がない。'],
      ["What is the topic of the man's paper?",['How social media affects young voters','The history of the library','How to search a database','Weekend jobs for students'],"how social media affects voting among young people の言いかえ。"],
      ['What does the woman suggest?',["Using the library's online database",'Changing his topic','Asking the professor for more time','Reading her old paper'],"Have you checked the library's online database? は提案。"],
      ['What will the man probably do tonight?',['Go to the library help desk','Write the whole paper','Call his professor','Go out for dinner with Lisa'],"The help desk is open until nine tonight. → I'll go right after dinner."]
    ]}
  ]
},
/* ───────────────────────── UNIT 19 ───────────────────────── */
{ id:'u19', sec:'G', title:'総仕上げ・本番戦略', sub:'ミニ模試で全部をつなげる', roi:3, final:true,
  learn:[
    {h:'本番の流れ', b:`<ol><li>準備・説明（約20分）</li><li>Listening（約35分）</li><li>文法（25分）</li><li>Reading（55分）</li></ol>
<p><b>途中休憩なし</b>。指示されたセクション以外のページを開くと違反になることがあるので注意。</p>`},
    {h:'時間配分のまとめ', b:`<table class="tbl"><tr><th>セクション</th><th>目安</th></tr>
<tr><td>文法 Structure</td><td>1問30秒前後、全体で約8分</td></tr>
<tr><td>文法 Written Expression</td><td>1問40秒前後、残りで見直し</td></tr>
<tr><td>Reading</td><td>1パッセージ約11分</td></tr>
<tr><td>Listening</td><td>1問約12秒で即マーク→次の選択肢を先読み</td></tr></table>`},
    {h:'マークと気持ちの切りかえ', b:`<ul><li>マークは<b>1問ずつその場で</b>（最後にまとめて塗ると時間切れの危険）</li>
<li>問題番号と解答欄の番号がずれていないか、ときどき確認</li>
<li>難問は<b>30秒で見切って推測マーク</b>。後半にやさしい問題があることも</li>
<li>リスニングの出来を引きずらない。<b>セクションごとに気持ちをリセット</b></li></ul>
<div class="tip">ここまで来たらあと一歩！ミニ模試で総まとめしよう。</div>`}
  ],
  qs:[
    ['mc','文法セクションで1問に悩んで30秒以上たったら？',['推測でマークして次へ進む（減点なし）','わかるまで考え続ける','空欄のまま次へ進む','前の問題に戻って見直す'],'時間が限られているので見切りが大切。減点はないので必ずマーク。'],
    ['mc','マークシートの塗り方で最も安全なのは？',['1問ごとにその場でマークする','セクションの最後にまとめて塗る','わかる問題だけ塗る','試験終了後に塗る'],'まとめて塗ると時間切れや番号ずれの危険。1問ずつ塗ろう。'],
    ['mc','リスニングの出来が悪かったと感じたら？',['気持ちを切りかえて文法セクションに集中する','文法の時間にリスニングの問題を見直す','残りのセクションをあきらめる','試験官に再試験を頼む'],'終わったセクションには戻れない。次のセクションで取り返そう。'],
    ['mc','目標スコアが500点のとき、各セクションの合計（L＋S＋R）の目安は？',['150','100','200','500'],'500 × 3 ÷ 10 ＝ 150。たとえば L48・S52・R50 など。']
  ]
}
];

/* ───────── ガイド（読みもの）───────── */
window.GUIDE = [
{ id:'g1', title:'TOEFL ITPってどんな試験？', sub:'目的・形式・レベル', html:`
<p>TOEFL ITP（Institutional Testing Program）は、TOEFLを開発する <b>ETS</b> が提供する<b>団体向けのテスト</b>です。大学・高校・企業などが会場を用意し、所属する人がまとめて受験します。</p>
<h3>主な使われ方</h3>
<ul><li>大学の英語クラスのレベル分け</li><li>交換留学・学内プログラムの選考</li><li>英語力の伸びの測定</li></ul>
<p>個人で申し込む試験ではないので、受験したい人は所属先に確認しましょう。スコアは<b>その団体の中で</b>使われるのが基本で、留学先に直接出す試験（TOEFL iBT）とは役割がちがいます。</p>
<h3>Level 1 と Level 2</h3>
<p>一般に「TOEFL ITP」と言えば中〜上級向けの <b>Level 1</b>（310〜677点）。Level 2 はやさしめの版です。このアプリは Level 1 を対象にしています。</p>
<h3>形式</h3>
<table class="tbl"><tr><th>セクション</th><th>問題数</th><th>時間</th><th>スコア</th></tr>
<tr><td>Listening Comprehension</td><td>50</td><td>約35分</td><td>31〜68</td></tr>
<tr><td>Structure &amp; Written Expression</td><td>40</td><td>25分</td><td>31〜68</td></tr>
<tr><td>Reading Comprehension</td><td>50</td><td>55分</td><td>31〜67</td></tr></table>
<p>紙のマークシート版とデジタル版があり、問題数・時間・スコアの尺度は同じです。ETSによると、スコアの有効期限は<b>2年</b>です。</p>
<h3>出題の考え方</h3>
<p>「英語で行われる大学の授業についていけるか」を測るため、話題は自然科学・社会・歴史・芸術などのアカデミックな内容と、キャンパスでの日常会話。専門知識は不要で、<b>答えの根拠は必ず問題の中</b>にあります。</p>`},
{ id:'g2', title:'スコアのしくみと計算', sub:'1問の重さを知る', html:`
<h3>計算式</h3>
<p>各セクションの正答数を、問題ごとに用意された換算表で 31〜68点（Readingは31〜67点）に変換し、</p>
<div class="ex">合計 ＝（Listening ＋ Structure ＋ Reading）× 10 ÷ 3</div>
<p>で合計スコアを出します（小数点以下は四捨五入）。</p>
<h3>目標スコアの分け方の例</h3>
<table class="tbl"><tr><th>目標</th><th>3つの合計</th><th>配分の例（L / S / R）</th></tr>
<tr><td>450</td><td>135</td><td>43 / 47 / 45</td></tr>
<tr><td>500</td><td>150</td><td>48 / 52 / 50</td></tr>
<tr><td>550</td><td>165</td><td>53 / 57 / 55</td></tr>
<tr><td>600</td><td>180</td><td>58 / 62 / 60</td></tr></table>
<h3>1問の重さ</h3>
<p>文法は40問、ListeningとReadingは50問で、スコアの幅はほぼ同じ。つまり<b>文法の1問は、他のセクションの1問より重い</b>のです。目安として、文法で1問多く正解すると合計スコアが約3点、ListeningやReadingでは約2.4点上がります。</p>
<p class="small">※換算表は試験ごとに少しずつちがいます。このアプリの「予想スコア」は正答率から計算した目安です。</p>`},
{ id:'g3', title:'得点効率で考える攻略順', sub:'このアプリの道順のヒミツ', html:`
<p>限られた時間でスコアを上げるには、「<b>1時間の勉強で何点上がるか</b>」を考えるのが近道です。</p>
<h3>① 文法の頻出パターン（最優先）</h3>
<ul><li>1問の価値が最大（合計スコア約3点分）</li><li>出題パターンが決まっていて、型を覚えるとすぐ点になる</li><li>学校で習った文法の総復習でOK</li></ul>
<h3>② Readingの語彙問題</h3>
<ul><li>知っていれば数秒で正解できる</li><li>同義語のペアで覚えると効率的</li><li>語彙力はリスニングと長文にも効く</li></ul>
<h3>③ Listening Part A</h3>
<ul><li>30問と数が多い</li><li>「2人目の発言」「言いかえ」「イディオム」のコツで伸びやすい</li></ul>
<h3>④ 長文読解・Part B/C</h3>
<ul><li>速読力・聴解力が必要で、伸びるまで時間がかかる</li><li>毎日少しずつ積み上げる</li></ul>
<p>このアプリのステージは、この順番を基本にしながら、あきないように文法・語彙・リスニングを交互に配置しています。</p>`},
{ id:'g4', title:'文法セクションの解き方', sub:'25分40問を解き切る', html:`
<h3>Structure（空所補充・15問）</h3>
<ol><li>文中の<b>動詞（述語）</b>を探す</li><li>接続詞・関係詞の数から<b>節の数</b>を確認</li><li>足りない部品（主語・動詞・接続詞など）を選ぶ</li><li>選択肢を入れて文全体を確認</li></ol>
<h3>Written Expression（誤り指摘・25問）</h3>
<p>下線部だけを、次の順でチェックすると速く正確に解けます。</p>
<ol><li><b>主語と動詞の一致</b>（単数・複数）</li><li><b>品詞</b>（形容詞・副詞・名詞の取りちがえ）</li><li><b>並列</b>（and / or の前後の形）</li><li><b>名詞の数・冠詞</b></li><li><b>比較・ペア表現</b>（than, as, between A and B）</li><li><b>動詞の形</b>（時制・受動態・-ing / to不定詞）</li><li><b>余分な語・重複</b></li></ol>
<h3>時間のコツ</h3>
<ul><li>1問あたり約37秒。30秒悩んだら推測でマークして次へ</li><li>修飾語を（　）でくくって骨組みを見る</li><li>確実に正しい下線部から消していく消去法も有効</li></ul>`},
{ id:'g5', title:'リーディングの解き方', sub:'設問タイプ別の攻め方', html:`
<h3>主な設問タイプ</h3>
<table class="tbl"><tr><th>タイプ</th><th>攻め方</th></tr>
<tr><td>語彙（closest in meaning）</td><td>知っていれば即答。選択肢を代入して確認</td></tr>
<tr><td>参照（refers to）</td><td>直前の文から、単数・複数の合う名詞を探す</td></tr>
<tr><td>詳細（According to）</td><td>キーワードで本文をスキャン→言いかえを選ぶ</td></tr>
<tr><td>主題（mainly about）</td><td>各段落の最初の文をつなげる。細かすぎ・広すぎは×</td></tr>
<tr><td>NOT / EXCEPT</td><td>本文にあるものを消去。時間がかかるので後回しも可</td></tr>
<tr><td>推論（infer / imply）</td><td>本文から確実に言えること。飛躍・極端は×</td></tr>
<tr><td>筆者の意図（Why mention）</td><td>前後を読んで役割（例・対比・定義）を考える</td></tr></table>
<h3>時間配分</h3>
<p>55分で5つ前後のパッセージ → <b>1つ約11分</b>。最後まで読み切ることが最優先です。</p>
<h3>心がまえ</h3>
<p>文系・理系どちらの話題も出ます。背景知識や自分の考えではなく、<b>本文に書いてあること</b>だけを根拠に、中立な気持ちで読みましょう。</p>`},
{ id:'g6', title:'リスニングの解き方', sub:'Part A / B / C のコツ', html:`
<h3>Part A（短い会話・30問）</h3>
<ul><li><b>2人目の発言</b>に答えがある</li><li>正解は<b>言いかえ</b>。同じ単語・似た音の単語はワナ</li><li><b>イディオム</b>は文字通りの意味の選択肢がワナ</li><li>否定・仮定法・提案・意外（I thought …）の表現に注意</li><li>選択肢を<b>先読み</b>し、迷ったら即マークして次へ</li></ul>
<h3>Part B（長い会話）・Part C（講義・トーク）</h3>
<ul><li>最初の数文で<b>話題</b>をつかむ（最初の設問は主題が多い）</li><li>話し手が<b>繰り返す・強調する</b>情報は出題されやすい</li><li>講義は「定義→例→重要ポイント」の流れを意識</li><li>聞き逃しても集中を切らさない</li></ul>
<h3>ふだんのトレーニング</h3>
<ul><li><b>ディクテーション</b>：Part Aの会話を書き取る。聞こえない部分が弱点</li><li><b>オーバーラッピング・シャドーイング</b>：スクリプトを見ながら音声に重ねて読む</li><li>英語を日本語に訳しながら聞くクセをなくす</li></ul>`},
{ id:'g7', title:'本番当日の注意', sub:'持ち物とマークのコツ', html:`
<h3>持ち物（一般的な例）</h3>
<ul><li>HBの鉛筆（数本）と消しゴム</li><li>時計（スマートウォッチなど通信機器は不可のことが多い）</li><li>受験票・身分証など、実施団体から指示されたもの</li></ul>
<p class="small">持ち込めるものやメモの可否は、実施団体の指示に必ず従ってください。</p>
<h3>マークシートのコツ</h3>
<ul><li>枠からはみ出さず、しっかり塗りつぶす。消すときはきれいに</li><li><b>1問ずつその場で</b>マーク。まとめ塗りは時間切れの危険</li><li>ときどき、問題番号と解答欄がずれていないか確認</li></ul>
<h3>試験中のルール</h3>
<ul><li>途中休憩はない</li><li>指示されたセクション以外を開いたり解いたりしない</li><li>時間は止まらない。体調管理と時間配分を大切に</li></ul>`},
{ id:'g8', title:'目標スコア別の学習プラン', sub:'450・500・550・600', html:`
<h3>〜450点をめざす</h3>
<ul><li>中学・高校の文法を総復習（このアプリの文法ステージ）</li><li>基本の語彙を毎日少しずつ</li><li>まずは試験の形式に慣れる</li></ul>
<h3>450 → 500点</h3>
<ul><li>文法の頻出パターン（主語と動詞・一致・並列・品詞）を確実に</li><li>Readingの語彙・参照問題を取りこぼさない</li><li>Part A のイディオムと言いかえに慣れる</li></ul>
<h3>500 → 550点</h3>
<ul><li>文法は全パターンを9割正解できるように</li><li>アカデミック語彙を増やす</li><li>長文を時間内に読み切る練習</li><li>Part B/C の講義に慣れる</li></ul>
<h3>550 → 600点以上</h3>
<ul><li>推論・NOT問題の精度を上げる</li><li>難しい講義も主題と細部を聞き取る</li><li>公式問題集で本番形式の模試をくり返し、ミスを分析</li></ul>
<h3>手持ちの参考書の使い方</h3>
<ul><li><b>公式問題＆学習ガイド</b>：本物の問題で本番形式の練習・実力測定に</li><li><b>完全攻略 TOEFL ITP テスト</b>：模試と攻略法で弱点の確認に</li><li><b>TOEFL ITP テスト文法 完全攻略</b>：文法の解法キーワードと大量演習に</li></ul>`},
{ id:'g9', title:'毎日続ける勉強のコツ', sub:'少しずつ・毎日・くり返し', html:`
<ul><li><b>毎日少しでも</b>：1日15分でも、続けることが一番の力に。連続記録（ストリーク）を守ろう</li>
<li><b>まちがいは宝物</b>：まちがえた問題は「復習」にたまる。数日あけて解き直すと記憶に残りやすい</li>
<li><b>単語は同義語のペアで</b>：abundant ＝ plentiful のように覚えると語彙問題に直結</li>
<li><b>出会った単語はその日に覚える</b>：知らない単語はメモして、その日のうちに見直す</li>
<li><b>音読</b>：読んだ英文・聞いた会話を声に出すと、読む速さも聞く力も上がる</li>
<li><b>時間を計って解く</b>：本番と同じ時間感覚を身につける</li></ul>
<h3>参考にした資料</h3>
<ul class="small"><li>ETS「TOEFL ITP Assessment Series」公式サイト（形式・スコア）</li><li>『TOEFL ITP テスト 公式問題＆学習ガイド』</li><li>『完全攻略！TOEFL ITP テスト』</li><li>『TOEFL ITP テスト文法 完全攻略』</li></ul>
<p class="small">このアプリの問題・解説はすべてオリジナルです。効果音：<a href="https://soundeffect-lab.info/" target="_blank" rel="noopener">効果音ラボ</a></p>`}
];

/* 正答数 → セクションスコアの目安（公表されている換算表の傾向をもとにした近似） */
window.SCALE = {
  S:{n:40,pts:[[0,31],[8,31],[10,33],[12,36],[14,39],[16,42],[19,45],[22,48],[25,51],[28,53],[31,56],[34,60],[37,64],[40,68]]},
  L:{n:50,pts:[[0,31],[8,31],[10,33],[13,37],[16,41],[19,44],[22,46],[25,48],[28,50],[31,52],[34,54],[37,56],[40,58],[43,61],[46,64],[48,66],[50,68]]},
  R:{n:50,pts:[[0,31],[8,31],[10,33],[13,37],[16,41],[19,44],[22,46],[25,48],[28,50],[31,52],[34,54],[37,56],[40,58],[43,60],[46,63],[48,65],[50,67]]}
};

/* ───────── 文法強化パック：既存ユニットへの追加問題＋新ユニット3つ ───────── */
(function () {
  const U = window.UNITS, byId = id => U.find(u => u.id === id);
  const ADD = {
    u1: [
      ['fb','Most of the world\'s fresh water ___ frozen in glaciers and ice caps.',['is','being','to be','which is'],'主語 Most of the world\'s fresh water に対する動詞が必要。water は不可算なので is。'],
      ['fb','___ by the Romans, the city of London was originally called Londinium.',['Founded','It was founded','Founding','Was founded'],'主節があるので分詞構文。ロンドンは「建設された」側 → 過去分詞 Founded。'],
      ['fb','The Mississippi River, ___ flows south to the Gulf of Mexico, is one of the longest rivers in North America.',['which','it','that it','and'],'主節の動詞は is。挿入部分には関係代名詞 which ＋ 動詞 flows。'],
      ['fb','___ that the Earth revolves around the Sun was proposed by Copernicus.',['The idea','That the idea','Because the idea','It was the idea'],'主語が必要。The idea that …（〜という考え）が主語、was proposed が動詞。'],
      ['fb','In the deep ocean ___ creatures that produce their own light.',['live','living','to live','lives'],'場所の句が文頭の倒置。主語は creatures（複数）なので live。'],
      ['er','The ancient Egyptians who {building} the pyramids {used} {simple} {tools}.',0,'built','関係詞節 who ___ the pyramids の中に動詞が必要。building → built。'],
      ['er','Thomas Edison, {one of} the most famous {inventors}, {he} held more than 1,000 {patents}.',2,'（he を削除）','主語 Thomas Edison があるので he は重複。'],
      ['er','The roots of a tree {absorbing} water {and} nutrients {from} the {soil}.',0,'absorb','主語 The roots に対する述語動詞がない。absorbing → absorb。']
    ],
    u2: [
      ['er','The quality of the photographs {in} the exhibit {are} {remarkably} {high}.',1,'is','主語は quality（単数）。of 以下は修飾語。'],
      ['er','Mathematics {have} {long} been {considered} {a} universal language.',0,'has','mathematics は -s で終わるが単数扱い。'],
      ['fb','Either the students or the teacher ___ responsible for cleaning the lab.',['is','are','be','being'],'either A or B は B（the teacher・単数）に合わせる。'],
      ['er','There {is} {several} reasons {why} {bees} are disappearing.',0,'are','There ＋ be ＋ 主語。主語は several reasons（複数）。'],
      ['fb','Most of the information on these websites ___ outdated.',['is','are','were','have'],'most of ＋ 名詞 は名詞に合わせる。information は不可算 → is。'],
      ['er','The data collected by the satellite show that the ice {are} {melting} {faster} than {expected}.',0,'is','that節の主語は the ice（不可算・単数）なので is。'],
      ['fb','Each of the paintings in the museum ___ a label describing its history.',['has','have','having','are'],'each of ～ は単数扱い → has。'],
      ['er','A herd of elephants {were} {seen} {near} the {river}.',0,'was','主語は A herd（群れ・単数）。of elephants は修飾語。']
    ],
    u4: [
      ['er','The volunteers cleaned the beach, {planted} trees, and {they painted} the {old} {fence}.',1,'painted','cleaned, planted と過去形の動詞が並ぶ。they は不要。'],
      ['fb','The course teaches students how to read critically, write clearly, and ___.',['speak confidently','speaking confidently','confident speech','to speaking confidently'],'read …, write … と動詞の原形＋副詞が並ぶ。'],
      ['er','The museum is open {not only} on weekdays {but also} {in} {weekends}.',2,'on','not only on weekdays but also on weekends と形をそろえる。'],
      ['er','The professor asked us {to read} the article, {summarize} it, and {writing} a {short} response.',2,'write','to read, summarize, write と動詞の原形でそろえる。'],
      ['fb','The new library is larger, brighter, and ___ the old one.',['more comfortable than','comfortable than','more comfort than','most comfortable than'],'larger, brighter と比較級が並ぶ。comfortable の比較級は more comfortable。'],
      ['er','The trip was {both} {expensive} {or} {tiring}.',2,'and','both A and B のペア。'],
      ['fb','Recycling saves energy, reduces waste, and ___.',['protects natural resources','protecting natural resources','protection of natural resources','it protects natural resources'],'saves, reduces と現在形の動詞が並ぶ。'],
      ['mc','not only A but also B で、A と B の関係として正しいのは？',['同じ品詞・同じ形にそろえる','A は名詞、B は動詞にする','B だけ過去形にする','A と B は必ず1語'],'ペア接続詞でつなぐ2つは、並列と同じく形をそろえるのがルール。']
    ],
    u5: [
      ['er','The invention of the steam engine {great} {changed} {transportation} {forever}.',0,'greatly','動詞 changed を修飾するのは副詞 greatly。'],
      ['er','Her {explanation} of the theory was {clear}, {concise}, and {logic}.',3,'logical','clear, concise と形容詞が並ぶ → logical。'],
      ['fb','Scientists were surprised by the ___ of the results.',['accuracy','accurate','accurately','accurateness'],'the ___ of … の位置は名詞。'],
      ['er','Sea turtles {return} {regular} to the beaches {where} they {hatched}.',1,'regularly','動詞 return を修飾するので副詞。'],
      ['er','The {govern} of the colony {was} {controlled} by {Britain}.',0,'government','The ___ of … の位置は名詞。'],
      ['fb','Dolphins are known for their ___.',['intelligence','intelligent','intelligently','intelligible'],'their の後ろは名詞。'],
      ['er','The {medical} profession {requires} {years} of {intensively} training.',3,'intensive','名詞 training を修飾するので形容詞。'],
      ['er','It is {important} to {protect} {endanger} {species}.',2,'endangered','名詞 species を修飾する形容詞（過去分詞）endangered「絶滅の危機にある」。']
    ],
    u7: [
      ['fb','The Great Wall of China, ___ stretches thousands of kilometers, was built over many centuries.',['which','that','what','where'],'カンマの後ろなので that は不可。主語の働きをする which。'],
      ['fb','The town ___ the battle took place is now a popular tourist site.',['where','which','what','whose'],'the battle took place は完全な文 → 関係副詞 where。'],
      ['er','{Because of} the road {was} closed, we {took} a {different} route.',0,'Because','後ろが節（the road was closed）なので接続詞 Because。'],
      ['fb','Students ___ attend every class usually perform better on exams.',['who','which','whose','what'],'先行詞は Students（人）で、後ろに主語が欠けている → who。'],
      ['er','The scientist {whom} {discovered} penicillin {was} Alexander {Fleming}.',0,'who','後ろに主語が欠けているので主格 who。whom は目的格。'],
      ['fb','___ the experiment failed, the researchers learned a great deal.',['Even though','Because','In spite of','Due to'],'後ろは節で、内容は逆接（失敗したけれど学んだ）→ Even though。'],
      ['er','The year {which} the war ended, {my} grandfather {was} {born}.',0,'in which（when）','the war ended は完全な文。時を表す関係副詞 when／in which。'],
      ['fb','The museum will close early ___ the holiday.',['because of','because','although','while'],'後ろは名詞 the holiday → 前置詞 because of。']
    ],
    u9: [
      ['er','She gave me {some} {useful} {informations} {about} the course.',2,'information','information は不可算名詞。-s はつかない。'],
      ['er','Mount Everest is {highest} {mountain} {in} the {world}.',0,'the highest','最上級には the が必要。'],
      ['fb','There are ___ people in the room than yesterday.',['fewer','less','little','much'],'people は可算名詞の複数 → fewer。less は不可算名詞に使う。'],
      ['er','The library bought {several} new {equipments} {for} the {lab}.',1,'pieces of equipment','equipment は不可算。数えるなら pieces of equipment。'],
      ['fb','Learning a language takes ___.',['a great deal of practice','many practices','a great many practice','a number of practice'],'practice（練習）はここでは不可算 → a great deal of。'],
      ['er','He wants to become {an} {engineer} and {a} {honest} leader.',2,'an','honest は母音の音（オ）で始まるので an。'],
      ['fb','Each species has adapted to ___ environment.',['its own','their own','it own','his own'],'each species は単数 → its own。'],
      ['er','Many {kind} of {birds} {migrate} south {in} winter.',0,'kinds','many の後ろは複数形 kinds。']
    ],
    u10: [
      ['er','Gold is {more heavier} than {silver}, {and} it {is} also rarer.',0,'heavier','heavier だけで比較級。more と重ねない。'],
      ['fb','The Pacific Ocean is ___ the Atlantic Ocean.',['larger than','largest than','more larger than','large as'],'比較級 ＋ than。'],
      ['er','This method is {as} {effective} {than} the {old} one.',2,'as','as ～ as の同等比較。than は使わない。'],
      ['fb','The more carefully you read, ___ you will understand.',['the more','more','the most','most'],'The 比較級 …, the 比較級 … の形。'],
      ['er','Her score was higher than {any} {student} {in} the {class}.',0,'any other','同じグループ内で比べるときは any other ＋ 単数名詞。'],
      ['fb','This is ___ book I have ever read.',['the most interesting','more interesting','most interesting than','the more interesting'],'I have ever read と組む最上級。'],
      ['er','The {climate} of Hawaii is {much} {warmer} than {Alaska}.',3,'that of Alaska','比べるのは「気候」同士。that of Alaska。'],
      ['fb','Lake Baikal is ___ lake in the world.',['the deepest','deeper','the deeper','most deep'],'in the world と組む最上級。バイカル湖は世界一深い湖。']
    ],
    u12: [
      ['er','The bridge {was} {build} {in} {1937}.',1,'built','受動態は be ＋ 過去分詞。build – built – built。'],
      ['fb','She has lived in Tokyo ___ ten years.',['for','since','during','while'],'現在完了 ＋ for ＋ 期間。since の後ろは起点（2015 など）。'],
      ['er','He {suggested} {to go} to the {museum} {together}.',1,'going','suggest は -ing をとる動詞。'],
      ['fb','The package ___ yesterday has not arrived yet.',['sent','sending','was sent','sends'],'「昨日送られた荷物」→ 名詞を後ろから修飾する過去分詞。'],
      ['er','Scientists {have} {discover} a new {species} of {frog}.',1,'discovered','現在完了は have ＋ 過去分詞。'],
      ['fb','I look forward to ___ from you.',['hearing','hear','heard','be heard'],'look forward to の to は前置詞 → 後ろは -ing。'],
      ['er','The teacher {let} the students {to leave} {early} {yesterday}.',1,'leave','使役 let ＋ O ＋ 原形。'],
      ['fb','If it rains tomorrow, the game ___ canceled.',['will be','would be','is being','was'],'条件の if 節は現在形、主節は未来 will。']
    ],
    u14: [
      ['fb','Never before ___ such a large earthquake in this region.',['had scientists recorded','scientists had recorded','recorded scientists had','had recorded scientists'],'否定語 Never が文頭 → 助動詞 had ＋ 主語 ＋ 過去分詞。'],
      ['fb','I wonder ___.',['where she bought that bag','where did she buy that bag','where she did buy that bag','that bag where she bought'],'間接疑問は 疑問詞 ＋ S ＋ V。'],
      ['er','She is {enough} {old} {to} {drive}.',0,'old enough','enough は形容詞の後ろに置く。'],
      ['fb','Hardly ___ home when the phone rang.',['had I arrived','I had arrived','I arrived','did I arrived'],'Hardly が文頭 → 倒置。hardly … when ～「…するとすぐ～」。'],
      ['fb','So difficult ___ that few students passed.',['was the exam','the exam was','did the exam','the exam did'],'So ＋ 形容詞 が文頭 → be動詞 ＋ 主語 の倒置。'],
      ['er','Do you know {what} {time} {does} {the train leave}?',2,'what time the train leaves','間接疑問は普通の語順。does は不要。'],
      ['fb','Only by working together ___ the problem.',['can we solve','we can solve','we solve','solve we can'],'Only ＋ 副詞句 が文頭 → 倒置。'],
      ['fb','She has ___ money to buy a new car.',['enough','enough of','so','such'],'enough は名詞の前に置く。']
    ],
    u16: [
      ['er','The reason {why} he {failed} was {because} he did not {study}.',2,'that','The reason … was that … が正しい形。'],
      ['er','Please {return} the book {back} to the {library} {soon}.',1,'（back を削除）','return に「戻す」の意味が含まれるので back は重複。'],
      ['fb','The sun ___ in the east.',['rises','raises','arises','rose up'],'自動詞「昇る」は rise。'],
      ['er','She {laid} on the {sofa} {all} {afternoon}.',0,'lay','「横になる」lie の過去形は lay。laid は lay（置く）の過去形。'],
      ['fb','My brother and I look ___.',['alike','like','likely','unlike'],'look alike ＝ 似ている。'],
      ['er','The festival will be held {either} in June {nor} {in} {July}.',1,'or','either A or B のペア。'],
      ['fb','Please ___ your hand if you have a question.',['raise','rise','rose','risen'],'他動詞「～を上げる」は raise。'],
      ['er','The students {they} {finished} the project {ahead} of {schedule}.',0,'（they を削除）','主語 The students と they が重複。']
    ]
  };
  Object.entries(ADD).forEach(([id, qs]) => byId(id).qs.push(...qs));

  const NEW = [
    ['u7', { id:'u20', sec:'S', title:'分詞（-ing と -ed）', sub:'「する」か「される」かで決まる', roi:3,
      learn:[
        {h:'分詞は名詞を修飾できる', b:`<ul><li><b>-ing（現在分詞）</b>：〜している（能動）　a <span class="hl">sleeping</span> baby</li>
<li><b>-ed（過去分詞）</b>：〜された（受動）　a <span class="hl">broken</span> window</li></ul>
<p>2語以上なら名詞の<b>後ろ</b>から修飾：the man <span class="hl">standing there</span>／languages <span class="hl">spoken in India</span></p>`},
        {h:'見分けるコツ', b:`<div class="tip">修飾される名詞が <b>「する」側なら -ing</b>、<b>「される」側なら -ed</b>。</div>
<div class="ex">products <span class="hl">made</span> in Japan（製品は「作られる」）<br>students <span class="hl">studying</span> abroad（学生は「勉強する」）</div>`},
        {h:'感情の分詞', b:`<table class="tbl"><tr><th>-ing（感情を与える側）</th><th>-ed（感情を持つ人）</th></tr>
<tr><td>The movie was boring.</td><td>I was bored.</td></tr>
<tr><td>interesting / surprising</td><td>interested / surprised</td></tr></table>`},
        {h:'分詞構文', b:`<div class="ex"><span class="hl">Completed</span> in 1889, the Eiffel Tower …<br><span class="hl">Having finished</span> the homework, the students …</div>
<p>文頭の分詞の主語は<b>主節の主語</b>と同じ。主語が「される」なら過去分詞、先に終わったことなら Having ＋ 過去分詞。</p>`}
      ],
      qs:[
        ['mc','interesting と interested の使い分けは？',['物・ことが人に興味を持たせる → interesting／人が興味を持つ → interested','どちらも同じ意味','interested は物に使う','interesting は過去形'],'感情の分詞は「与える側 -ing／感じる人 -ed」。'],
        ['fb','The man ___ next to the door is my professor.',['standing','stands','stood','is standing'],'主語 The man の述語は is。「立っている男」→ 現在分詞で後ろから修飾。'],
        ['fb','Most of the products ___ in this factory are exported.',['made','making','make','are made'],'製品は「作られる」側 → 過去分詞 made。述語は are exported。'],
        ['er','The lecture was so {bored} that {many} students {fell} {asleep}.',0,'boring','講義は退屈「させる」側 → boring。'],
        ['er','I was {interesting} {in} the {history} of {ancient} Rome.',0,'interested','人が興味を持っている → interested。'],
        ['fb','___ in 1889, the Eiffel Tower was once the tallest structure in the world.',['Completed','Completing','It was completed','To complete'],'塔は「完成された」側 → 過去分詞の分詞構文。'],
        ['fb','___ the homework, the students went outside to play.',['Having finished','Finished','To finish','Have finished'],'宿題を終えたのは遊びに行くより前 → Having ＋ 過去分詞。'],
        ['er','The {stolen} painting was {finding} in a {small} {town}.',1,'found','受動態 was ＋ 過去分詞。find – found – found。'],
        ['fb','There are many languages ___ in India.',['spoken','speaking','speak','to speaking'],'言語は「話される」側 → 過去分詞で後ろから修飾。'],
        ['er','Rice is the {main} food {eating} by {millions} of {people}.',1,'eaten','食べ物は「食べられる」側 → eaten。'],
        ['fb','The news was ___ to everyone.',['surprising','surprised','surprise','surprisingly'],'ニュースは人を驚かせる側 → surprising。'],
        ['er','Fossils {discovering} in the {desert} {provide} clues {about} ancient life.',0,'discovered','化石は「発見される」側 → discovered。']
      ]
    }],
    ['u12', { id:'u21', sec:'S', title:'名詞節と同格の that', sub:'that / whether / what のカタマリ', roi:2,
      learn:[
        {h:'名詞節＝文が名詞の役割をする', b:`<ul><li><b>that S V</b>：〜ということ</li><li><b>whether / if S V</b>：〜かどうか</li><li><b>疑問詞 S V</b>：何／なぜ／どこ…か</li><li><b>what S V</b>：〜すること・もの</li></ul>
<div class="ex"><span class="hl">Whether he will come</span> is uncertain.（主語）<br>Scientists agree <span class="hl">that exercise improves health</span>.（目的語）</div>`},
        {h:'主語になる名詞節のルール', b:`<ul><li>主語の位置では <b>if は使えない</b> → Whether</li><li>名詞節が主語なら動詞は<b>単数扱い</b>：What they found <b>was</b> …</li><li>It is ＋ 形容詞 ＋ that …（形式主語）も頻出</li></ul>`},
        {h:'同格の that', b:`<div class="ex">the fact <span class="hl">that he lied</span>／the news <span class="hl">that the team had won</span></div>
<div class="tip">that の後ろが<b>完全な文</b>なら同格、<b>主語か目的語が欠けた文</b>なら関係代名詞。</div>`}
      ],
      qs:[
        ['mc','同格の that と関係代名詞の that の見分け方は？',['後ろが完全な文なら同格、主語か目的語が欠けていれば関係代名詞','前の名詞が人なら同格','カンマがあれば同格','見分けられない'],'the fact that he lied（he lied は完全な文）は同格。'],
        ['fb','___ he will come to the party is still uncertain.',['Whether','If','That','What'],'「来るかどうか」が主語。主語の位置で if は使えないので Whether。'],
        ['fb','Scientists agree ___ regular exercise improves health.',['that','what','which','whether that'],'agree の目的語になる「〜ということ」→ that節。'],
        ['fb','___ you need is a good night\'s sleep.',['What','That','Which','It'],'「あなたに必要なもの」→ 先行詞を含む What。'],
        ['fb','The fact ___ he lied surprised everyone.',['that','which','what','of'],'he lied は完全な文 → 同格の that。'],
        ['er','The question {is} {what} the plan {will work} {or not}.',1,'whether','「〜かどうか」は whether … or not。'],
        ['fb','I am not sure ___ the store is open on Sundays.',['whether','what','that','which'],'「開いているかどうか」→ whether。'],
        ['er','What the scientists {discovered} {were} {truly} {surprising}.',1,'was','What 節が主語なら単数扱い → was。'],
        ['fb','It is surprising ___ so few people know about the disease.',['that','what','which','if'],'形式主語 It ＋ is ＋ 形容詞 ＋ that節。'],
        ['er','There is {a} {strong} {evidence} {that} smoking causes cancer.',0,'（a を削除）','evidence は不可算名詞なので a はつかない。that は同格。'],
        ['fb','The researchers could not explain ___.',['why the bees disappeared','why did the bees disappear','the bees why disappeared','that why the bees disappeared'],'間接疑問は 疑問詞 ＋ S ＋ V。'],
        ['fb','The news ___ the team had won spread quickly.',['that','which','what','whose'],'the team had won は完全な文 → 同格の that。']
      ]
    }],
    ['u16', { id:'u22', sec:'S', title:'前置詞と語法', sub:'at/on/in・by/until・決まった組み合わせ', roi:2,
      learn:[
        {h:'時の前置詞', b:`<table class="tbl"><tr><td><b>at</b></td><td>時刻・一点：at 9 a.m.／at noon</td></tr>
<tr><td><b>on</b></td><td>曜日・日付：on Monday／on July 4</td></tr>
<tr><td><b>in</b></td><td>月・年・季節：in May／in 1969／in winter</td></tr></table>`},
        {h:'まぎらわしいペア', b:`<ul><li><b>by</b>（〜までに：期限）／<b>until</b>（〜までずっと：継続）</li>
<li><b>for</b> ＋ 期間の長さ（for three nights）／<b>during</b> ＋ 出来事・期間名（during the winter）</li>
<li>前置詞の後ろは<b>名詞か -ing</b></li></ul>`},
        {h:'動詞＋前置詞の決まった組み合わせ', b:`<table class="tbl">
<tr><td>depend on</td><td>consist of</td></tr><tr><td>result in（結果）</td><td>result from（原因）</td></tr>
<tr><td>contribute to</td><td>differ from</td></tr><tr><td>be interested in</td><td>focus on</td></tr></table>
<div class="tip">Written Expressionでは前置詞だけがこっそり入れかわっていることが多い！</div>`}
      ],
      qs:[
        ['mc','by と until の違いは？',['by は「〜までに（期限）」、until は「〜までずっと（継続）」','どちらも同じ意味','by は場所にしか使わない','until は期限を表す'],'Submit it by Friday.（金曜までに）／Stay until Friday.（金曜までずっと）'],
        ['fb','The meeting will begin ___ 9 a.m.',['at','on','in','by'],'時刻には at。'],
        ['fb','The first moon landing took place ___ 1969.',['in','on','at','by'],'年には in。'],
        ['er','The museum is {closed} {in} {Mondays} {and} holidays.',1,'on','曜日には on。'],
        ['fb','Please submit your report ___ Friday.',['by','until','since','for'],'提出の期限 → by。'],
        ['fb','Many animals sleep ___ the winter.',['during','for','while','since'],'the winter（期間名）→ during。while の後ろは節。'],
        ['er','Water {consists} {from} hydrogen {and} {oxygen}.',1,'of','consist of 〜「〜から成る」。'],
        ['fb','The success of the project depends ___ teamwork.',['on','in','at','with'],'depend on 〜。'],
        ['er','The flood {resulted} {from} heavy {damage} to the {town}.',1,'in','洪水が損害を「もたらした」→ result in。result from は原因側。'],
        ['fb','Smoking can contribute ___ heart disease.',['to','for','at','with'],'contribute to 〜「〜の一因となる」。'],
        ['er','British English {differs} {than} American English {in} {spelling}.',1,'from','differ from 〜。'],
        ['fb','She is interested ___ learning Chinese.',['in','on','at','for'],'be interested in 〜。前置詞の後ろなので learning。'],
        ['er','He {stayed} at the hotel {during} three {nights} {last week}.',1,'for','期間の長さ（three nights）には for。']
      ]
    }]
  ];
  NEW.forEach(([after, u]) => U.splice(U.findIndex(x => x.id === after) + 1, 0, u));
})();
