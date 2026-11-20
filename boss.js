/* ボス戦・ミニ模試専用の問題（レッスンと同じポイントを、別の例文・会話・長文で問う）
   形式は data.js と同じ。vocab はレッスンと同じ単語を、別の例文と別の選択肢で出題する。 */
window.BOSS = {
u0: { qs: [
  ['mc','Listening セクションの問題数と時間の目安は？',['50問・約35分','40問・25分','50問・55分','30問・20分'],'Listeningは50問・約35分。音声のペースで進むので、1問約12秒で答えるのがコツ。'],
  ['mc','L 45・S 48・R 47 のとき、合計スコアは？',['467点','420点','140点','480点'],'(45＋48＋47)×10÷3 ＝ 466.6… → 四捨五入で467点。'],
  ['mc','試験終了が近いのに、まだ10問残っている。どうする？',['推測でもいいので全部マークする','空欄のまま提出する','1問だけ丁寧に解く','見直しに時間を使う'],'誤答の減点はないので、空欄は0点確定。必ず全部マークしよう。'],
  ['mc','Structure（空所補充）1問にかけられる時間の目安は？',['約37秒','約2分','約10秒','約1分半'],'文法は40問を25分 → 1問あたり約37秒。'],
  ['mc','Reading の問題数と制限時間は？',['50問・55分','40問・25分','50問・35分','30問・45分'],'Readingは50問・55分。1パッセージ約11分が目安。'],
  ['mc','Written Expression（誤り指摘）は何問？',['25問','15問','30問','50問'],'文法40問のうち、Structureが15問、Written Expressionが25問。'],
  ['mc','文法セクションのスコアの範囲は？',['31〜68点','0〜30点','310〜677点','200〜800点'],'各セクションは31〜68点（Readingは67点まで）。'],
  ['mc','Listening Part C（講義・トーク）は何問？',['12問','30問','8問','50問'],'Part Cは講義・トークが3本で計12問前後。'],
  ['mc','TOEFL ITP が測ろうとしている力は？',['英語で大学の授業についていける力','旅行で使う英会話の力','ビジネスメールを書く力','発音のきれいさ'],'アカデミックな内容とキャンパスの会話が中心なのはそのため。'],
  ['mc','合計550点をとるには、3セクションの合計がいくつ必要？',['165','155','550','183'],'550×3÷10 ＝ 165。たとえば L53・S57・R55 など。']
]},
u1: { qs: [
  ['fb','The Sahara Desert ___ much of northern Africa.',['covers','covering','to cover','which covers'],'主語 The Sahara Desert に対する述語動詞がない。-ing・to不定詞・関係詞節は述語になれない。'],
  ['fb','___ is one of the most widely spoken languages in the world.',['Spanish','Because Spanish','That Spanish','Spanish which'],'動詞 is に対する主語が必要。接続詞や関係詞をつけると主語にならない。'],
  ['fb','The bridge across the river ___ in only two years.',['was built','building','to build','having built'],'橋は「建てられた」もの → 受動態の述語 was built。'],
  ['fb','Venus, ___, is covered by thick clouds.',['the second planet from the Sun','is the second planet from the Sun','it is the second planet from the Sun','which the second planet from the Sun'],'カンマで挟まれた部分は同格。主節の動詞は is covered があるので名詞句だけ。'],
  ['fb','___ by heavy rain, the river overflowed its banks.',['Swollen','It was swollen','Was swollen','Swelling it'],'主節があるので分詞構文。川は「増水させられた」→ 過去分詞 Swollen。'],
  ['fb','There ___ several reasons why bees are important to farmers.',['are','is','being','has'],'There ＋ be ＋ 主語。主語 several reasons は複数なので are。'],
  ['fb','It was only after the storm passed ___ the rescue team could enter the area.',['that','when','which','what'],'It was only after ～ that …「～して初めて…」の強調構文。'],
  ['er','The cheetah {running} at speeds {of} up to 100 kilometers {per} {hour}.',0,'runs','文に述語動詞がない。-ing形は単独で動詞になれないので runs。'],
  ['er','{Founded} in 1636, Harvard University {it} {is} the oldest university {in} the United States.',1,'（it を削除）','主語 Harvard University と it が重複している。'],
  ['er','The discovery of penicillin {in} 1928 {saving} millions of {lives} {in} the decades that followed.',1,'saved','主語 The discovery に対する述語がない。saving → saved。']
]},
u2: { qs: [
  ['er','The collection of old maps {are} {displayed} {on} the {second} floor.',0,'is','主語は collection（単数）。of old maps は修飾語。'],
  ['er','Each of the participants {were} {given} a {small} {gift}.',0,'was','Each of ～ は単数扱い。'],
  ['fb','The number of cars on the road ___ grown every year.',['has','have','are','were'],'the number of ～「～の数」は単数扱い。'],
  ['fb','A number of volunteers ___ helping with the cleanup.',['are','is','was','has'],'a number of ～「多くの～」は複数扱い。'],
  ['er','Physics {are} often {considered} {the} most difficult {science}.',0,'is','physics（物理学）は -s で終わるが単数扱い。'],
  ['er','The mayor, together with two council members, {plan} {to} {visit} the {school}.',0,'plans','together with ～ は主語に含まれない。主語は The mayor（単数）。'],
  ['fb','One of the students in my class ___ from Brazil.',['is','are','were','being'],'one of the ＋複数名詞 は単数扱い。'],
  ['er','Either the manager or the assistants {is} {responsible} {for} {locking} the doors.',0,'are','either A or B は B（the assistants・複数）に合わせる。'],
  ['fb','On the top shelf ___ several old dictionaries.',['are','is','it is','being'],'場所の句が文頭の倒置。主語は several old dictionaries（複数）。'],
  ['er','The phenomena {was} {first} {described} {by} a Greek scientist.',0,'were','phenomena は phenomenon の複数形。']
]},
u3: {
  vocab: [
    ['abundant','Rainfall is abundant in the tropical forest.','plentiful','limited','seasonal','gentle','豊富な'],
    ['vital','Sleep is vital for a healthy mind.','essential','useless','pleasant','rare','不可欠な'],
    ['rapid','The patient made a rapid recovery.','quick','gradual','partial','costly','急速な'],
    ['obtain','Visitors must obtain permission before entering.','get','refuse','forget','offer','手に入れる'],
    ['approximately','The lecture was attended by approximately 300 people.','roughly','exactly','at most','only','およそ'],
    ['diminish','Interest in the topic did not diminish over the years.','decrease','grow','continue','change','減る'],
    ['enormous','An enormous wave hit the coast.','huge','small','sudden','cold','巨大な'],
    ['reside','Many artists reside in this quiet town.','live','paint','vacation','shop','住む'],
    ['significant','Water played a significant role in the city\'s history.','important','minor','secret','recent','重要な・著しい'],
    ['primary','The primary cause of the fire was a faulty wire.','main','minor','possible','final','主な'],
    ['demonstrates','The study demonstrates the value of exercise.','shows','denies','hides','reduces','示す'],
    ['sufficient','We have sufficient food for the trip.','enough','too little','fresh','expensive','十分な'],
    ['prominent','He was a prominent member of the community.','well-known','new','quiet','former','著名な'],
    ['emerge','Butterflies emerge from their cocoons in spring.','appear','hide','fly','rest','現れる'],
    ['remarkable','The bridge is a remarkable piece of engineering.','extraordinary','common','simple','unfinished','驚くべき'],
    ['gradually','The snow gradually melted.','slowly','quickly','suddenly','partly','徐々に'],
    ['retains','The museum retains its original design.','keeps','changes','loses','copies','保持する'],
    ['consequently','He missed the bus; consequently, he was late.','as a result','in addition','nevertheless','for instance','その結果'],
    ['ancient','Writers in ancient Greece studied the stars.','very old','modern','famous','foreign','古代の'],
    ['frequently','Students frequently visit the writing center.','often','rarely','briefly','never','頻繁に']
  ],
  qs: [
    ['mc','語彙問題で、選択肢に知らない単語が混ざっていたら？',['知っている選択肢を本文に入れて消去し、残りを選ぶ','知らない単語を必ず選ぶ','その問題は空欄にする','一番長い単語を選ぶ'],'消去法が有効。知っている語で文意が通らなければ、残った語が答えになる。']
  ]
},
u4: { qs: [
  ['er','The new library is spacious, {bright}, and {comfort} {for} {students}.',1,'comfortable','spacious, bright と形容詞が並ぶので comfort → comfortable。'],
  ['er','Volunteers {cleaned} the beach, {planted} trees, and {painting} the {fence}.',2,'painted','cleaned, planted と過去形が並ぶので painted。'],
  ['fb','The festival was both colorful ___.',['and exciting','but exciting','and it excited','exciting'],'both A and B。A＝colorful（形容詞）にそろえる。'],
  ['fb','You can pay either in cash ___.',['or by credit card','nor by credit card','and by credit card','or you pay by card'],'either A or B。in cash（副詞句）にそろえて or by credit card。'],
  ['er','The course teaches {students} how to read, write, and {speaking} {clearly} {in} English.',1,'speak','read, write と動詞の原形が並ぶので speak。'],
  ['fb','Neither the teacher ___ the students knew the answer.',['nor','or','and','but'],'neither A nor B のペア。'],
  ['fb','Writing an essay is often harder than ___ one.',['reading','to read','read','you read'],'than の前後をそろえる。Writing と reading。'],
  ['er','The museum is known not only for {its} paintings {but} {also} {it has} sculptures.',3,'for its','not only for its paintings but also for its sculptures と形をそろえる。'],
  ['fb','The city is famous for its parks, its museums, and ___.',['its restaurants','it has restaurants','having restaurants','restaurants are good'],'its parks, its museums と名詞句が並ぶ。'],
  ['er','Doctors {recommend} eating well, sleeping enough, and {to exercise} {regularly} {for} good health.',1,'exercising','eating, sleeping と -ing が並ぶので exercising。']
]},
u5: { qs: [
  ['er','The {museum} has an {impressively} {collection} of {ancient} coins.',1,'impressive','名詞 collection を修飾するのは形容詞。（an impressive collection）'],
  ['er','Dolphins {are} highly {intelligence} {marine} {animals}.',1,'intelligent','名詞 animals を修飾する形容詞が必要。intelligence は名詞。'],
  ['er','The {decide} to close the factory {surprised} many {local} {workers}.',0,'decision','The ___ to … の位置は名詞。decide（動詞）→ decision。'],
  ['er','The temperature dropped {sudden} {after} {the} {sun} set.',0,'suddenly','動詞 dropped を修飾するので副詞。'],
  ['er','She wrote a {ten-pages} {report} {on} {climate} change.',0,'ten-page','数＋名詞のハイフン形容詞では名詞を単数にする。'],
  ['fb','The children listened ___ to the story.',['quietly','quiet','quietness','quieter'],'動詞 listened を修飾するので副詞。'],
  ['fb','The ___ of the new road reduced traffic in the city center.',['completion','complete','completely','completed'],'The ___ of … の位置は名詞。'],
  ['er','Many {beauty} {birds} live {in} the {rainforest}.',0,'beautiful','名詞 birds を修飾するので形容詞。'],
  ['er','Lightning can be {extreme} {dangerous} {during} {a} storm.',0,'extremely','形容詞 dangerous を修飾するのは副詞。'],
  ['mc','品詞の誤りを見抜くとき、最初に確認することは？',['その語が何を修飾・説明しているか','その語の文字数','文が過去形かどうか','その語が文の何番目か'],'名詞を修飾→形容詞、動詞・形容詞を修飾→副詞。修飾先で品詞が決まる。']
]},
u6: { qs: [
  ['ls',[['W',"I left my notes at home. Do you have yours?"],['M',"Sure, you can copy mine after class."]],'What does the man mean?',['She can use his notes.','He forgot his notes too.','Class is canceled.','She should go home now.'],'you can copy mine ＝ 自分のノートを使っていいよ。'],
  ['ls',[['M',"Are you coming to the soccer game on Saturday?"],['W',"I'd love to, but I promised to help my sister move."]],'What does the woman mean?',["She can't go to the game.",'She will play soccer.','Her sister is coming to the game.','She is moving to a new apartment.'],"I'd love to, but … は行けないことを表す。"],
  ['ls',[['W',"How was the new restaurant?"],['M',"The food was fine, but the wait was way too long."]],'What does the man imply?',['The service was slow.','The food was terrible.','He wants to wait longer.','The restaurant was closed.'],'待ち時間が長すぎた ＝ 提供が遅かった、の言いかえ。'],
  ['ls',[['M',"I'm so tired. I stayed up all night writing my paper."],['W',"Why don't you take a nap before your next class?"]],'What does the woman suggest?',['Getting some sleep','Writing another paper','Staying up again','Skipping class'],'take a nap ＝ 少し眠る。Why don\'t you …? は提案。'],
  ['ls',[['W',"This chemistry problem is really confusing."],['M',"Tell me about it. I've been stuck on it for an hour."]],'What does the man mean?',['He also finds it difficult.','He wants her to explain it.','He solved it quickly.','He has not seen the problem.'],'Tell me about it. は「本当にそう（同感）」という決まり文句。'],
  ['ls',[['M',"Is the computer lab open late tonight?"],['W',"Until midnight, as usual."]],'What does the woman mean?',['The lab closes at midnight.','The lab is closed tonight.','The lab opens at midnight.','She usually works late.'],'Until midnight ＝ 夜12時まで開いている。'],
  ['ls',[['W',"I'm thinking about changing my major to economics."],['M',"Have you looked at the course requirements?"]],'What does the man imply?',['She should check the requirements first.','Economics is easy.','He is an economics major.','She has already changed her major.'],'「必修科目を見た？」＝ まず確認すべき、という含み。'],
  ['ls',[['M',"Did you buy the textbook for history?"],['W',"It cost more than I expected, so I'm borrowing one from the library."]],'What does the woman imply?',["She didn't buy the textbook.",'She bought two textbooks.','The library is closed.','The textbook was cheap.'],'高かったので図書館で借りる → 買っていない。'],
  ['ls',[['W',"Do you mind if I turn on the light?"],['M',"Not at all. It's getting dark."]],'What does the man mean?',['She can turn on the light.','He wants it to stay dark.','He minds a lot.','He is leaving now.'],'Do you mind …? に Not at all. は「どうぞ」。'],
  ['ls',[['M',"The train is crowded again."],['W',"It always is during rush hour."]],'What does the woman mean?',['The train is usually crowded at this time.','She likes crowded trains.','The train is late.','Rush hour is over.'],'ラッシュアワーはいつも混んでいる。']
]},
u7: { qs: [
  ['fb','___ the test was difficult, most students passed.',['Although','Despite','Because of','However'],'後ろが節で、意味は逆接 → Although。'],
  ['fb','The flight was delayed ___ heavy snow.',['because of','because','although','while'],'後ろが名詞 heavy snow なので前置詞 because of。'],
  ['er','{In spite of} the road {was} {icy}, we {drove} to the mountains.',0,'Although','後ろが節（the road was icy）なので接続詞 Although。'],
  ['fb','The author, ___ novels have been translated into 30 languages, lives in Tokyo.',['whose','who','which','her'],'「その作家の小説」と所有の関係 → whose ＋ 名詞。'],
  ['er','This is the {town} {which} my grandfather {grew} {up}.',1,'where','my grandfather grew up は完全な文 → 関係副詞 where（in which）。'],
  ['fb','___ the students wanted most was more time to practice.',['What','That','Which','It'],'「学生がいちばん望んだこと」＝ What。'],
  ['fb','The park has a pond ___ children can feed the ducks.',['where','which','what','whose'],'children can feed the ducks は完全な文 → where。'],
  ['er','{During} the teacher {was} {speaking}, the students {took} notes.',0,'While','後ろが節なので接続詞 While。'],
  ['fb','The machine, ___ was built in 1920, still works.',['which','that','what','it'],'カンマの後ろに that は使えない → which。'],
  ['er','This is the topic {about that} we {talked} {in} {class}.',0,'about which','前置詞の後ろに that は置けない。']
]},
u8: {
  vocab: [
    ['address','The new law will address the housing shortage.','deal with','create','ignore','report','取り組む（多義語）'],
    ['bear','These columns bear the weight of the roof.','support','remove','show','decorate','支える（多義語）'],
    ['yield','This farm can yield three harvests a year.','produce','buy','waste','store','生み出す'],
    ['assume','Don\'t assume that the test will be easy.','suppose','hope','decide','prove','思い込む'],
    ['decline','The bird population began to decline in the 1990s.','decrease','increase','recover','move','減少する'],
    ['subsequent','The subsequent chapters explain the theory in detail.','later','first','shorter','missing','その後の'],
    ['notion','She rejected the notion that art must be serious.','idea','rule','book','image','考え'],
    ['feasible','Is it feasible to finish the project by Friday?','possible','necessary','legal','pleasant','実現可能な'],
    ['acquire','It takes years to acquire a new language fully.','gain','forget','avoid','teach','獲得する'],
    ['dense','The fog was so dense that we could not see the road.','thick','light','cold','strange','密集した・濃い'],
    ['fragile','Old books often have fragile pages.','easily broken','thick','heavy','colorful','壊れやすい'],
    ['conceal','He tried to conceal his surprise.','hide','express','explain','share','隠す'],
    ['inhabit','Many unusual fish inhabit the deep ocean.','live in','avoid','visit','clean','生息する'],
    ['durable','Hiking boots must be durable.','long-lasting','stylish','light','waterproof','耐久性のある'],
    ['merely','It was merely a suggestion, not an order.','only','certainly','already','also','単に'],
    ['trait','Patience is an important trait for teachers.','characteristic','job','reward','salary','特徴'],
    ['commence','Construction will commence next spring.','begin','finish','stop','continue','始まる'],
    ['predominantly','The audience was predominantly students.','mainly','never','partly','rarely','主に'],
    ['vast','Russia covers a vast area.','very large','very cold','very flat','very old','広大な'],
    ['crucial','Timing is crucial in sports.','very important','unimportant','difficult','surprising','極めて重要な']
  ],
  qs: [
    {t:'rd', title:'Masters of Disguise', p:`The octopus is one of the ocean's most skilled masters of disguise. Its skin contains thousands of special cells called chromatophores, each filled with a colored pigment. By tightening or relaxing the muscles around these cells, an octopus can change its color in less than a second. It can also raise small bumps on its skin, which allows it to copy the rough texture of rocks or coral.

Camouflage helps the octopus in two ways. It hides the animal from predators such as sharks and eels, and it allows the octopus to approach its own prey without being noticed. Surprisingly, scientists believe that most octopuses cannot see color at all. How they match their surroundings so precisely remains an open question.`, qs:[
      ['The word "Its" in "Its skin contains" refers to',['the octopus','the ocean','disguise','a cell'],'直前の文の主語 The octopus を受けている。','Its skin'],
      ['The word "each" in "each filled with a colored pigment" refers to',['a chromatophore','a muscle','an octopus','a second'],'直前の chromatophores（色素を含む細胞）の1つ1つを指す。','each filled'],
      ['According to the passage, how does an octopus copy the texture of rocks?',['By raising small bumps on its skin','By changing its pigment','By hiding under coral','By moving very slowly'],'raise small bumps on its skin の言いかえ。','small bumps'],
      ['The word "approach" is closest in meaning to',['come near','leave','attack','follow'],'獲物に気づかれずに「近づく」。','approach'],
      ['The word "precisely" is closest in meaning to',['exactly','slowly','rarely','loudly'],'周囲に「正確に」合わせる。','precisely'],
      ['According to the passage, what is still unknown?',['How octopuses match their surroundings without seeing color','Why octopuses hide from sharks','How many chromatophores an octopus has','What octopuses eat'],'remains an open question ＝ まだわかっていない。','open question']
    ]},
    ['mc','参照問題で、選択肢が2つまで絞れたら？',['それぞれを代名詞の位置に入れて、意味が通る方を選ぶ','先に出てきた名詞を必ず選ぶ','長い方を選ぶ','複数形の方を選ぶ'],'代入して文意を確かめるのが一番確実。']
  ]
},
u9: { qs: [
  ['er','The library offers a lot of useful {informations} {about} {local} {history}.',0,'information','information は不可算名詞なので -s はつかない。'],
  ['er','It took {an} {hour} to reach {an} {university} campus.',2,'a','university は「ユ」の音（子音）で始まるので a。an hour は正しい。'],
  ['er','There are {too} {much} {cars} {on} this street.',1,'many','cars は数えられる名詞 → many。'],
  ['fb','The lab needs ___ of new furniture.',['a large amount','a large number','many','several'],'furniture は不可算 → an amount of。'],
  ['er','Each of the {countries} {has} {their} {own} flag.',2,'its','each は単数扱い → its。'],
  ['er','The Nile is {one of} the {longest} {river} {in} the world.',2,'rivers','one of the ＋ 複数名詞。'],
  ['fb','Frogs can live on land and in water because ___ amphibians.',['they are','it is','their','they is'],'Frogs（複数）を受けて they are。'],
  ['er','{Several} {type} of {birds} {visit} the lake in winter.',1,'types','several の後ろは複数名詞。'],
  ['fb','The movie lasted about ___.',['two hours','two hour','two-hours','the two hour'],'名詞として使うときは複数形 two hours。'],
  ['fb','My advisor gave me ___ about choosing classes.',['some advice','an advice','advices','many advices'],'advice は不可算名詞。']
]},
u10: { qs: [
  ['er','This box is {more} {heavier} than {any} other {box}.',0,'（more を削除）','heavier だけで比較級。more との重複はNG。'],
  ['er','Mount Everest is {the} {most highest} mountain {on} {Earth}.',1,'highest','最上級は highest だけ。'],
  ['fb','The more you read, ___ your vocabulary becomes.',['the larger','larger','the largest','more large'],'The 比較級 …, the 比較級 … の形。'],
  ['er','The {climate} of Hokkaido {is} {cooler} than {Okinawa}.',3,'that of Okinawa','比べるのは「気候」同士。that of Okinawa とする。'],
  ['fb','Silver is not ___ gold.',['as expensive as','as expensive than','more expensive as','expensive as'],'同等比較 as ～ as。'],
  ['er','The second test was {very} {more} {difficult} {than} the first.',0,'much','比較級の強調は much / far / even。'],
  ['fb','Of all the students in the class, Ken runs ___.',['the fastest','the faster','fastest than','more fast'],'Of all ～ は最上級のサイン。'],
  ['er','Her answer was {similar} {with} {mine} in {many} ways.',1,'to','similar to ～「～に似ている」。'],
  ['fb','This bridge is about three times ___ the old one.',['longer than','as long','the longest','long than'],'倍数 ＋ 比較級 ＋ than。'],
  ['er','The new phone is {lighter} and {more} {cheaper} {than} the old model.',1,'（more を削除）','cheaper だけで比較級。']
]},
u11: { qs: [
  ['ls',[['W',"Is the meeting still on for tomorrow?"],['M',"No, they put it off until next week."]],'What does the man mean?',['The meeting was postponed.','The meeting was canceled for good.','The meeting is tomorrow.','He will turn off the lights.'],'put off ＝ 延期する（call off＝中止 と区別）。'],
  ['ls',[['M',"How was the history test?"],['W',"Piece of cake. I finished early."]],'What does the woman mean?',['The test was easy.','She ate cake after the test.','She failed the test.','The test was long.'],'piece of cake ＝ とても簡単。'],
  ['ls',[['W',"Are you okay? You're not eating."],['M',"I'm feeling a bit under the weather."]],'What does the man mean?',['He feels sick.','The weather is bad.','He is too hot.','He already ate.'],'under the weather ＝ 体調が悪い。'],
  ['ls',[['M',"Could you look into why my grade is missing?"],['W',"Sure, I'll check the records this afternoon."]],'What will the woman probably do?',['Investigate the problem','Look at the man','Change his grade','Miss her afternoon class'],'look into ＝ 調べる。'],
  ['ls',[['W',"We've run out of milk."],['M',"I'll drop by the store on my way home."]],'What will the man probably do?',['Stop at the store','Drop the milk','Run home','Call the store'],'drop by ＝ 立ち寄る。'],
  ['ls',[['M',"This box is too heavy for me."],['W',"Let me give you a hand."]],'What does the woman offer to do?',['Help him carry the box','Give him a new box','Shake his hand','Open the box'],'give ～ a hand ＝ 手伝う。'],
  ['ls',[['W',"I have a lot of reading to catch up on."],['M',"Me too. Let's hit the books at the library tonight."]],'What does the man suggest?',['Studying hard together','Throwing books away','Buying new books','Going to bed early'],'hit the books ＝ 猛勉強する。'],
  ['ls',[['M',"Should I sign the contract now?"],['W',"Why not sleep on it?"]],'What does the woman suggest?',['He should think it over before deciding.','He should go to sleep now.','He should sign immediately.','He should refuse the contract.'],'sleep on it ＝ 一晩考える。'],
  ['ls',[['W',"Sorry I'm late. The bus broke down."],['M',"No wonder you look so tired."]],'What does the man mean?',["He understands why she looks tired.",'He wonders where she was.','He is angry with her.',"He didn't notice she was late."],'No wonder … ＝ どうりで…。'],
  ['ls',[['M',"Do you want to go to the movies or stay home?"],['W',"Either is fine. It's up to you."]],'What does the woman mean?',['The man can decide.','She will call him later.','She wants to stay home.','She wants to see a movie.'],"It's up to you. ＝ 任せる。"]
]},
u12: { qs: [
  ['er','The Statue of Liberty {was} {give} to the United States {by} {France}.',1,'given','受動態は be ＋ 過去分詞。'],
  ['er','Since last year, she {studied} {Spanish} {every} {day}.',0,'has studied','Since ～（～以来ずっと）は現在完了。'],
  ['fb','Most people enjoy ___ to music.',['listening','to listen','listen','listened'],'enjoy ＋ -ing。'],
  ['er','They decided {building} a new {school} {near} the {station}.',0,'to build','decide ＋ to不定詞。'],
  ['er','Birds {can} {flies} {long} {distances}.',1,'fly','助動詞の後ろは原形。'],
  ['fb','The teacher let the students ___ early.',['leave','to leave','leaving','left'],'使役 let ＋ O ＋ 原形。'],
  ['er','By noon, the temperature {had} {rose} {to} 35 {degrees}.',1,'risen','rise – rose – risen。had の後ろは過去分詞。'],
  ['fb','The letter ___ in 1850 and found last year.',['was written','wrote','has written','was writing'],'手紙は「書かれた」→ 受動態。1850 は過去の一時点。'],
  ['er','He is good {at} {draw} {pictures} {of} animals.',1,'drawing','前置詞 at の後ろは動名詞。'],
  ['fb','When we arrived at the station, the train ___.',['had already left','has already left','already leaves','is leaving already'],'到着した時点より前に出発していた → 過去完了。']
]},
u13: {
  vocab: [
    ['altered','The architect altered the design after the meeting.','changed','approved','printed','explained','変える'],
    ['apparent','For no apparent reason, the machine stopped.','clear','secret','good','strange','明らかな'],
    ['contributed to','Poor diet contributed to his illness.','led to','cured','followed','described','寄与する'],
    ['distinct','Each region has a distinct style of cooking.','different','similar','famous','simple','異なる・はっきりした'],
    ['eventually','After many tries, she eventually passed the exam.','finally','never','quickly','already','ついに'],
    ['exhibited','The plant exhibited signs of disease.','showed','hid','cured','avoided','示す'],
    ['hazardous','Smoking is hazardous to your health.','dangerous','useful','related','new','危険な'],
    ['illustrate','These examples illustrate the main idea.','explain','hide','oppose','repeat','説明する'],
    ['intense','The team faced intense pressure before the final.','extreme','little','usual','pleasant','強烈な'],
    ['numerous','The city has numerous parks.','many','few','large','old','多数の'],
    ['precise','Please tell me the precise time of arrival.','exact','rough','late','early','正確な'],
    ['revealed','The report revealed problems in the system.','made known','solved','created','ignored','明らかにする'],
    ['sole','Rice was the sole crop on the farm.','only','largest','new','failed','唯一の'],
    ['thrive','Tomatoes thrive in warm weather.','grow well','rot','freeze','shrink','よく育つ・繁栄する'],
    ['widespread','The use of smartphones is now widespread.','common','rare','expensive','limited','広まった'],
    ['rigid','The company has a rigid schedule.','strict','flexible','busy','new','厳格な・硬い']
  ],
  qs: [
    {t:'rd', title:'The Printing Press', p:`Before the fifteenth century, books in Europe were copied by hand, a slow and expensive process that could take months for a single volume. Around 1440, Johannes Gutenberg, a metalworker in the German city of Mainz, developed a printing press that used movable metal type. Each letter was cast as a separate piece of metal, so the pieces could be arranged into words, printed, and then reused for a new page.

The effects of the invention were enormous. Printing shops soon appeared in cities across Europe, and by 1500 millions of books had been produced. Because books became cheaper, more people could afford them, and reading was no longer limited to scholars and the wealthy.

The press also changed how information spread. Scientists could share their findings quickly and accurately, and identical copies meant that readers in different countries could study exactly the same text. Some historians argue that without the printing press, the scientific progress of the following centuries would have been much slower.`, qs:[
      ['What is the passage mainly about?',['The printing press and its effects','The life of scholars in Mainz','How books were copied by hand','The history of German cities'],'発明の説明 → 本の普及 → 情報の広がり。全体をまとめているのはこれ。',''],
      ['According to the passage, why could the metal type be reused?',['Each letter was a separate piece that could be rearranged','The metal never wore out','Each book was printed only once','Scholars copied the letters by hand'],'Each letter was cast as a separate piece … reused の言いかえ。','separate piece'],
      ['Which of the following is NOT mentioned as a result of the printing press?',['Writers were paid more money','Books became cheaper','Scientists shared findings faster','Readers in different countries studied the same text'],'作家の収入については書かれていない。','cheaper'],
      ['The word "afford" is closest in meaning to',['have enough money for','write','borrow','understand'],'本が安くなったので「買える」ようになった。','afford'],
      ['The word "them" in "more people could afford them" refers to',['books','scholars','shops','cities'],'前半の Because books became cheaper の books。','afford them'],
      ['It can be inferred from the passage that before the printing press',['few people other than the wealthy could own books','most people read many books','printing shops were common','scientists shared findings quickly'],'reading was no longer limited to scholars and the wealthy → それ以前は限られていた。','no longer limited']
    ]},
    ['mc','設問に EXCEPT が入っていたら？',['本文で確認できる選択肢を消して、残ったものを選ぶ','EXCEPT を無視して答える','最初の選択肢を選ぶ','本文の最後だけ読む'],'NOT / EXCEPT 問題は消去法。設問の最後まで読むこと。']
  ]
},
u14: { qs: [
  ['fb','Never ___ such a beautiful sunset.',['have I seen','I have seen','I saw','seen I have'],'否定語 Never が文頭 → 倒置。'],
  ['fb','Nobody knows exactly ___.',['where the treasure was hidden','where was the treasure hidden','where did they hide the treasure','the treasure where was hidden'],'間接疑問は 疑問詞 ＋ S ＋ V。'],
  ['er','The room was not {enough big} for {all} the {guests} {to} sit.',0,'big enough','enough は形容詞の後ろ。'],
  ['fb','Only when the rain stopped ___ outside.',['did the children go','the children went','went the children','the children did go'],'Only ＋ 節が文頭 → 主節が倒置。'],
  ['fb','Not only ___ cheap, but it is also delicious.',['is this meal','this meal is','does this meal','this meal does'],'Not only が文頭 → 倒置。be動詞の文なので is ＋ S。'],
  ['er','It was {so} {an} {interesting} book {that} I read it twice.',0,'such','a / an ＋ 形容詞 ＋ 名詞 の前は such。'],
  ['fb','In the middle of the lake ___.',['lies a small island','a small island lying','does a small island lie','lying a small island'],'場所の句が文頭 → 動詞 ＋ 主語。'],
  ['er','Can you tell me {what} {time} {does} the store {open}?',2,'what time the store opens','間接疑問は普通の語順。does は不要。'],
  ['fb','Hardly ___ when it started to rain.',['had we left','we had left','left we had','we left had'],'Hardly が文頭 → 倒置（had ＋ S ＋ 過去分詞）。'],
  ['fb','The music was ___ that everyone started dancing.',['so lively','such lively','so lively a','such a lively'],'形容詞だけなら so ＋ 形容詞 ＋ that。']
]},
u15: { qs: [
  ['ls',[['M',"I'll never get used to waking up early."],['W',"Neither will I."]],'What does the woman mean?',['She also has trouble waking up early.','She enjoys mornings.','She will wake him up.','She never sleeps.'],'Neither will I. ＝ 私も慣れそうにない。'],
  ['ls',[['W',"This park is so beautiful in autumn."],['M',"I couldn't agree more."]],'What does the man mean?',['He strongly agrees.','He disagrees.','He has never been there.','He prefers spring.'],"couldn't agree more ＝ 大賛成。"],
  ['ls',[['M',"If I had studied harder, I would have passed."],['W',"There's always next time."]],'What can be inferred about the man?',["He didn't pass.",'He passed easily.','He studied very hard.','He will not take the test again.'],'仮定法過去完了 → 実際は合格しなかった。'],
  ['ls',[['W',"You're still here? I thought you had gone home."],['M',"I had to finish this report."]],'What had the woman assumed?',['The man had already left.','The man was writing a report.','The man lived nearby.','The man was sick.'],'I thought you had gone home ＝ 帰ったと思っていた。'],
  ['ls',[['M',"Was the library crowded?"],['W',"It's not unusual for it to be packed before exams."]],'What does the woman mean?',['The library is often crowded before exams.','The library is rarely busy.','The library was closed.','Exams are unusual.'],'not unusual ＝ よくあること。'],
  ['ls',[['W',"My laptop keeps freezing."],['M',"If I were you, I'd take it to the tech support desk."]],'What does the man suggest?',['Getting help from tech support','Buying a new laptop','Turning off the heater','Ignoring the problem'],"If I were you, I'd … は提案。"],
  ['ls',[['M',"I wish I had taken the earlier train."],['W',"Yes, this one is really slow."]],'What does the man mean?',["He didn't take the earlier train.",'He took the earlier train.','He likes slow trains.','He will take the train tomorrow.'],'I wish I had … ＝ 実際はそうしなかった。'],
  ['ls',[['W',"Didn't you sign up for the trip?"],['M',"I meant to, but the deadline passed."]],'What does the man imply?',["He didn't sign up for the trip.",'He is going on the trip.','The trip was canceled.','He missed the bus.'],'するつもりだったが締め切りが過ぎた → 申し込んでいない。'],
  ['ls',[['M',"How many people came to the lecture?"],['W',"Hardly anyone."]],'What does the woman mean?',['Very few people came.','Everyone came.','The lecture was hard.','She did not go.'],'hardly anyone ＝ ほとんど誰も…ない。'],
  ['ls',[['W',"Want to grab some coffee?"],['M',"Thanks, but I'll pass this time."]],'What does the man mean?',["He doesn't want coffee now.",'He will pass her the coffee.','He passed a test.','He will buy coffee for her.'],"I'll pass. ＝ 遠慮しておく。"]
]},
u16: { qs: [
  ['er','Classes are held {between} Monday {or} {Friday} {each} week.',1,'and','between A and B のペア。'],
  ['er','{Alike} her brother, she {is} {very} {good} at math.',0,'Like','「兄と同じように」→ Like ＋ 名詞。'],
  ['er','The song {that} I heard {it} on the radio {was} {beautiful}.',1,'（it を削除）','that が目的語の役割をしているので it は重複。'],
  ['fb','___ his classmates, Tom prefers to study alone.',['Unlike','Alike','Dislike','Unless'],'「クラスメートとちがって」→ Unlike ＋ 名詞。'],
  ['er','Please {return} the book {back} to the library {by} {Friday}.',1,'（back を削除）','return に「戻す」の意味が含まれるので back は重複。'],
  ['er','The sun {raises} {in} the {east} every {morning}.',0,'rises','自動詞「昇る」は rise。raise は「～を上げる」。'],
  ['fb','The two paintings look ___, but one is a copy.',['alike','like','likely','alikely'],'look alike ＝ 似て見える。'],
  ['er','My {roommate} {he} {plays} the {guitar} every night.',1,'（he を削除）','主語 My roommate と he が重複。'],
  ['er','The reason I called {is} {because} I {need} your {help}.',1,'that','The reason is that … が正しい形。'],
  ['fb','Please ___ your homework before dinner.',['do','make','take','have'],'do one\'s homework は決まった組み合わせ。']
]},
u17: { qs: [
  ['mc','Readingで最後のパッセージに5分しか残っていない。最善の行動は？',['語彙・参照など速く解ける設問から答え、残りも推測でマークする','1問目からじっくり解く','その文章は捨てて見直しをする','本文をすべて読み終えてから解く'],'速攻問題で確実に点をとり、残りは推測でもマーク。空欄は作らない。'],
  ['mc','「Why does the author mention X?」に答えるとき、まず読むのは？',['Xの前後の文','文章のタイトル','最後の段落だけ','最初の単語'],'X が例・対比・理由のどれとして使われているかは前後で決まる。'],
  {t:'rd', title:'Coral Bleaching', p:`Coral reefs appear to be made of rock, but they are built by living animals. Each coral is a colony of tiny creatures called polyps, and inside the polyps live microscopic algae. The relationship benefits both partners. The algae receive shelter, and in return they use sunlight to produce food, which supplies most of the coral's energy. The algae also give corals their bright colors.

This partnership is sensitive to temperature. When ocean water becomes unusually warm for several weeks, the stressed corals expel the algae from their tissues. Without the colorful algae, the white skeleton beneath becomes visible, an event known as coral bleaching. A bleached coral is not dead, however. If the water cools soon enough, the algae can return and the coral can recover. If high temperatures continue, the coral may starve.

In recent decades, bleaching events have become more frequent, and scientists are studying corals that survive warm water in the hope of protecting reefs in the future.`, qs:[
    ['What is the main topic of the passage?',['How the partnership between corals and algae can break down','How rocks form under the sea','Why the ocean is getting deeper','The colors of tropical fish'],'サンゴと藻の共生 → 高水温で崩れる（白化）→ 研究。全体のテーマはこれ。',''],
    ['According to the passage, what do the algae give the coral?',['Food made using sunlight','Shelter from predators','A hard skeleton','Cool water'],'they use sunlight to produce food の言いかえ。','produce food'],
    ['The word "they" in "in return they use sunlight" refers to',['the algae','the polyps','the reefs','the colors'],'直前の The algae receive shelter の The algae。','they use sunlight'],
    ['The word "expel" is closest in meaning to',['push out','take in','paint','protect'],'藻を組織から「追い出す」。','expel'],
    ['Why does the author mention "the white skeleton"?',['To explain why bleached coral looks white','To show that the coral is already dead','To describe how algae build reefs','To compare corals with rocks'],'色のある藻がいなくなり、白い骨格が見える → 白化の説明。','white skeleton'],
    ['It can be inferred from the passage that a bleached coral',['may survive if the water cools in time','has lost its skeleton','can no longer be saved','produces more algae than before'],'If the water cools soon enough … can recover から推論できる。','not dead'],
    ['According to the passage, why are scientists studying corals that survive warm water?',['To help protect reefs in the future','To make the ocean cooler','To grow algae in laboratories','To discover new kinds of fish'],'in the hope of protecting reefs in the future の言いかえ。','in the hope']
  ]}
]},
u18: { qs: [
  ['mc','Part B/C で途中の1文を聞き逃した。どうする？',['気にせず、次のキーワードに集中する','聞き逃した部分を思い出そうとし続ける','その会話の設問をすべて空欄にする','次の設問の選択肢を読むのをやめる'],'話は続く。立ち止まると次の情報まで落としてしまう。'],
  {t:'lt', title:'Lecture: Sleep and Memory', d:[
    ['N',"Listen to part of a lecture in a psychology class."],
    ['P',"Today let's look at a question many students ask: does sleep really help us learn? The short answer is yes. Researchers have found that sleep is not just a time of rest for the brain. It's an active period when the brain processes what we learned during the day."],
    ['P',"In one common type of experiment, two groups of people study the same list of words. One group sleeps for the night, and the other group stays awake. When both groups are tested twelve hours later, the group that slept usually remembers more words."],
    ['P',"Why does this happen? During deep sleep, the brain seems to replay new information and move it into more stable, long-term storage. Other stages of sleep appear to help with skills, such as playing a musical instrument."],
    ['P',"So the practical lesson is simple. Staying up all night before an exam may actually hurt your performance. A good night's sleep is part of studying."]
  ], qs:[
    ['What is the lecture mainly about?',['How sleep helps memory and learning','How to play a musical instrument','Why students stay up late','How dreams are formed'],"冒頭の does sleep really help us learn? が主題。"],
    ['In the experiment, which group usually remembered more words?',['The group that slept','The group that stayed awake','Both groups equally','Neither group'],'the group that slept usually remembers more words。'],
    ['According to the professor, what happens during deep sleep?',['New information is moved into long-term storage','The brain stops working','Skills are forgotten','Dreams become clearer'],'replay new information and move it into … long-term storage。'],
    ['What does the professor imply about studying all night before an exam?',['It may lower test performance','It is the best way to prepare','It helps with skills','It has no effect'],'Staying up all night … may actually hurt your performance。']
  ]},
  {t:'lt', title:'Conversation: Changing Rooms', d:[
    ['N',"Listen to a conversation between a student and an employee at the campus housing office."],
    ['W',"Hi. I'd like to ask about changing my dorm room."],
    ['M',"Sure. Is there a problem with your current room?"],
    ['W',"It's right next to the elevator, so it's noisy all night. I can't sleep, and my grades are starting to suffer."],
    ['M',"I see. Room changes usually happen at the end of the semester, but we make exceptions for serious problems. You'll need to fill out this request form and explain the situation."],
    ['W',"How long does it take?"],
    ['M',"About a week. There are a few empty rooms in the north building, so your chances are good."],
    ['W',"That's great. I'll fill it out right now."]
  ], qs:[
    ['Why does the woman go to the housing office?',['To ask about moving to a different room','To report a broken elevator','To apply for a job','To pay her rent'],"I'd like to ask about changing my dorm room。"],
    ['What is the problem with her current room?',['It is too noisy','It is too small','It is too expensive','It is too far from her classes'],"next to the elevator, so it's noisy all night。"],
    ['What does the man say about room changes?',['Exceptions can be made for serious problems','They are never allowed','They happen every week','They cost extra money'],'we make exceptions for serious problems。'],
    ['What will the woman probably do next?',['Fill out a request form','Visit the north building','Talk to her roommate','Move out immediately'],"I'll fill it out right now。"]
  ]}
]}
};
