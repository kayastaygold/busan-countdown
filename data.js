// ============================================================
// 釜山跨年 2026→2027 網站資料
// 要改內容只改這個檔案。時間都是韓國時間（KST，比台灣快 1 小時）。
// who 用代號：lin 林、gao 高、luo 羅、wu 吳、s S、hong 洪
// ============================================================
window.TRIP = {
  title: "釜山跨年 2026→2027",
  updated: "2026-11-11",

  // 愛心按鈕用的 Firebase 設定（空白 = 不顯示愛心）
  firebase: { projectId: "busan-countdown", apiKey: "AIzaSyBLx2xd9LAudbNWqBOyjXE1-ZHiXt4-MOw" },

  people: [
    { id: "lin",  name: "林", arrive: "2026-12-29T18:50", depart: "2027-01-05T19:50" },
    { id: "gao",  name: "高", arrive: "2026-12-29T18:50", depart: "2027-01-05T19:50" },
    { id: "hong", name: "洪", arrive: "2026-12-30T06:10", depart: "2027-01-03T20:50" },
    { id: "luo",  name: "羅", arrive: "2026-12-30T20:45", depart: "2027-01-02T14:50" },
    { id: "wu",   name: "吳", arrive: "2026-12-30T12:00", depart: "2027-01-03T12:00", tentative: true, note: "約 12/30–1/3，班機未定" },
    { id: "s",    name: "S",  arrive: "2026-12-30T12:00", depart: "2027-01-03T12:00", tentative: true, note: "約 12/30–1/3，班機未定" }
  ],

  // 全員都在的時段（畫在人員時間條上）
  overlap: { from: "2026-12-30T22:00", to: "2027-01-02T11:30", label: "全員都在：12/30 晚上～1/2 上午" },

  // 住宿只寫大概區域
  stays: [
    { nights: ["2026-12-29"], who: ["lin", "gao"], area: "廣安里", status: "已訂" },
    { nights: ["2026-12-30", "2026-12-31", "2027-01-01", "2027-01-02"], who: "all", area: "海雲台（海雲台站附近）", status: "已訂" },
    { nights: ["2027-01-03", "2027-01-04"], who: ["lin", "gao"], area: "西面", status: "還沒訂" }
  ],

  energy: { "🟢": "輕鬆", "🟡": "普通", "🔴": "很累" },

  days: [
    {
      date: "2026-12-29", energy: "🟢", who: ["lin", "gao"],
      summary: "林、高抵達，住廣安里",
      items: [
        { time: "18:50", title: "林、高抵達金海機場", flight: true },
        { time: "晚上", title: "民樂水產市場吃晚餐", spot: "millak" },
        { time: "晚上", title: "看廣安大橋夜景", spot: "gwangan" }
      ]
    },
    {
      date: "2026-12-30", energy: "🟢", who: ["lin", "gao", "hong", "luo", "wu", "s"],
      summary: "洪一早到，晚上其他人陸續到，搬到海雲台",
      items: [
        { time: "06:10", title: "洪抵達，搭輕軌和地鐵到廣安里（約 1 小時）", who: ["hong"], flight: true },
        { time: "08:00", title: "洪先把行李放在林、高的廣安里住處", who: ["lin", "gao", "hong"], note: "要不要讓洪在房間補眠，先跟房東確認" },
        { time: "上午", title: "三人在廣安里吃早午餐、簡單逛逛", spot: "gwangan", who: ["lin", "gao", "hong"] },
        { time: "中午", title: "移動到海雲台 check-in", who: ["lin", "gao", "hong"], note: "不能提早 check-in 就先寄放行李，洪可以去 Spa Land 補眠" },
        { time: "", title: "剪頭髮（待定）", who: ["lin", "gao"], tbd: true },
        { time: "下午", title: "逛海雲台市場和小店", spot: "haeundae-market", who: ["lin", "gao", "hong"] },
        { time: "下午", title: "吳、S 抵達（班機未定）", who: ["wu", "s"], flight: true, tbd: true },
        { time: "晚上", title: "海雲台光之祭", spot: "haeundae-beach", who: ["lin", "gao", "hong", "wu", "s"] },
        { time: "20:45", title: "羅抵達，約 22:00 到住處", who: ["luo"], flight: true }
      ]
    },
    {
      date: "2026-12-31", energy: "🟡", who: "all",
      summary: "跨年夜：龍宮寺、天空膠囊，晚上廣安里無人機秀",
      items: [
        { time: "上午", title: "海東龍宮寺", spot: "yonggungsa" },
        { time: "", title: "順路 Lotte Premium Outlet 東釜山店（時間不夠就跳過）", spot: "lotte-outlet", optional: true },
        { time: "中午", title: "從松亭搭天空膠囊和海岸列車回海雲台", spot: "blueline", ticket: true },
        { time: "16:00", title: "回住處休息" },
        { time: "20:00", title: "廣安里跨年活動（去年時間）", spot: "countdown", note: "22:40 演唱會、23:56 無人機起飛、24:00 倒數、約 00:10 結束。21:00 起 Wi-Fi 暫停，先下載離線地圖" },
        { time: "00:10", title: "搭地鐵或計程車回海雲台", note: "建議走到民樂站搭車，避開廣安站人潮" }
      ]
    },
    {
      date: "2027-01-01", energy: "🟡🔴", who: "all",
      summary: "元旦：影島一日，晚上遊艇",
      items: [
        { time: "11:00", title: "前一晚很晚睡，11 點後再出門" },
        { time: "中午", title: "松島海上纜車", spot: "songdo", ticket: true },
        { time: "下午", title: "白淺灘文化村，趁有陽光拍照（日落約 17:20）", spot: "huinnyeoul" },
        { time: "傍晚", title: "Arte Museum（最晚 19:00 入場）", spot: "arte", ticket: true },
        { time: "20:30+", title: "水營灣夜間煙火遊艇", spot: "yacht", ticket: true, note: "從影島過去約 45 分。累的話可改到 1/2 週六晚上（有無人機秀場次，但羅搭不到）" }
      ]
    },
    {
      date: "2027-01-02", energy: "🟢", who: "all",
      summary: "羅上午出發；其他人西面醫美、下午逛百貨",
      items: [
        { time: "上午", title: "羅出發去機場（14:50 起飛）", who: ["luo"], flight: true },
        { time: "上午", title: "西面醫美（週六只開半天，要提早預約）", spot: "beauty", who: ["lin", "gao", "hong", "wu", "s"], tbd: true },
        { time: "下午", title: "新世界 Centum City 或樂天百貨逛街", spot: "shinsegae-centum", who: ["lin", "gao", "hong", "wu", "s"] },
        { time: "晚上", title: "（選擇性）廣安里週六無人機秀", spot: "gwangan", optional: true, note: "冬天有沒有表演要再確認" }
      ],
      notes: ["醫美後 2～3 天不要去汗蒸幕或桑拿"]
    },
    {
      date: "2027-01-03", energy: "🟡", who: ["lin", "gao", "hong", "wu", "s"],
      summary: "南浦一帶；洪、吳、S 回國，林、高搬到西面",
      items: [
        { time: "上午", title: "甘川洞文化村", spot: "gamcheon" },
        { time: "中午", title: "札嘎其市場、國際市場（週日部分店家休息）", spot: "jagalchi" },
        { time: "下午", title: "洪、吳、S 出發去機場", who: ["hong", "wu", "s"], flight: true, note: "洪 20:50 起飛；吳、S 班機未定" },
        { time: "傍晚", title: "林、高搬到西面", who: ["lin", "gao"] }
      ]
    },
    {
      date: "2027-01-04", energy: "🟡", who: ["lin", "gao"],
      summary: "林、高自由日，三選一",
      choose: true,
      items: [
        { time: "選項 A", title: "慶州包車一日遊", spot: "gyeongju" },
        { time: "選項 B", title: "影島：Arte Museum 和太宗台", spot: "taejongdae" },
        { time: "選項 C", title: "機張：竹城聖堂、Orangdae 海岸、Lotte Outlet", spot: "jukseong" }
      ]
    },
    {
      date: "2027-01-05", energy: "🟢", who: ["lin", "gao"],
      summary: "西面逛街，晚上回國",
      items: [
        { time: "白天", title: "西面地下街、樂天百貨西面店", spot: "seomyeon" },
        { time: "16:30", title: "出發去機場（19:50 起飛）", flight: true }
      ]
    }
  ],

  // 地圖上的區域（座標是示意圖用，不是真的經緯度）
  areas: [
    { id: "airport",  name: "金海機場",   x: 50,  y: 150 },
    { id: "seomyeon", name: "西面",       x: 170, y: 140 },
    { id: "nampo",    name: "南浦／影島", mapName: "南浦",       x: 150, y: 250 },
    { id: "gwangan",  name: "廣安里",     x: 255, y: 205 },
    { id: "haeundae", name: "海雲台",     x: 330, y: 170 },
    { id: "gijang",   name: "機張",       x: 345, y: 62 },
    { id: "gyeongju", name: "慶州",       x: 400, y: 0, offmap: true }
  ],

  // 從海雲台住處出發（前一位 AI 的估計，不含等車）
  travel: [
    { to: "海雲台海灘",             time: "走路 10 分" },
    { to: "海雲台傳統市場",         time: "走路 5 分" },
    { to: "天空膠囊尾浦站",         time: "走路 15 分" },
    { to: "冬柏島",                 time: "走路 20–25 分" },
    { to: "Centum City（新世界、Spa Land）", time: "地鐵 2 站約 5 分" },
    { to: "廣安里",                 time: "地鐵或計程車約 15 分" },
    { to: "海東龍宮寺",             time: "計程車 20 分／公車 40 分" },
    { to: "機張、Lotte Outlet",     time: "計程車 25–30 分" },
    { to: "西面",                   time: "地鐵 2 號線約 30 分" },
    { to: "南浦洞、札嘎其",         time: "地鐵約 50 分／計程車 35–40 分" },
    { to: "甘川洞",                 time: "約 60–70 分" },
    { to: "影島、太宗台",           time: "60 分以上" },
    { to: "金海機場",               time: "計程車 40–60 分／機場巴士 60–80 分" },
    { to: "跨年夜從廣安里回來",     time: "走路＋地鐵 45–70 分" }
  ],

  // 景點介紹。ig 可以放特定貼文：[{ url: "...", cover: "圖片網址", title: "..." }]
  // 沒放的話會顯示該景點的 IG hashtag 熱門貼文連結
  spots: {
    "haeundae-beach": { area: "haeundae", name: "海雲台海灘・光之祭", ko: "해운대해수욕장", tag: "해운대빛축제",
      intro: "釜山最有名的海灘，住處走路 10 分鐘。冬天晚上有「海雲台光之祭」燈飾（去年 11/29–1/18，今年日期還沒公布）。元旦早上也可以直接在這裡看日出（約 07:31）。" },
    "haeundae-market": { area: "haeundae", name: "海雲台傳統市場", ko: "해운대시장", tag: "해운대시장",
      intro: "海雲台站旁的小市場，離住處走路約 5 分鐘。魚糕、辣炒年糕、炸物和小吃店很多，適合隨意吃。" },
    "blueline": { area: "haeundae", name: "天空膠囊・海岸列車", ko: "해운대블루라인파크", tag: "해운대블루라인파크",
      intro: "沿著海岸線走的觀光列車。天空膠囊是高架上的小車廂（每台最多 4 人），海岸列車是一般車廂。12/31 的天空膠囊 12/1（二）在官網開賣，6 人要訂 2 台。海岸列車可以用 Busan Pass。" },
    "xthesky": { area: "haeundae", name: "Busan X the Sky 展望台", ko: "부산엑스더스카이", tag: "부산엑스더스카이",
      intro: "海雲台 LCT 大樓的高樓展望台，就在海灘邊。室內，下雨也可以去。Busan Pass 可用。" },
    "dongbaek": { area: "haeundae", name: "冬柏島・迎月路", ko: "동백섬", tag: "동백섬",
      intro: "海雲台海灘西端的小島，有環島步道和 APEC 世峰樓，可以看廣安大橋。住處走路 20–25 分鐘。" },
    "spaland": { area: "haeundae", name: "Spa Land 汗蒸幕", ko: "스파랜드 센텀시티", tag: "스파랜드",
      intro: "在新世界 Centum City 百貨裡的大型汗蒸幕，離海雲台地鐵 2 站。適合補眠或下雨天。醫美後 2～3 天不要去。Busan Pass 可用。" },
    "shinsegae-centum": { area: "haeundae", name: "新世界・樂天百貨 Centum City", ko: "신세계 센텀시티", tag: "신세계센텀시티",
      intro: "世界最大的百貨公司之一，對面是樂天百貨 Centum City 店，都在 Centum City 站。室內逛一整個下午沒問題。百貨每月有一天公休，元旦營業時間要再確認。" },
    "yacht": { area: "haeundae", name: "水營灣夜間煙火遊艇", ko: "수영만요트경기장", tag: "부산요트투어",
      intro: "從水營灣遊艇碼頭出發，晚上開到廣安大橋附近看夜景，部分場次有小煙火。Kaya 習慣在 Klook 訂；如果要用 Busan Pass，要選名單上的業者（Diamond Bay、The Yacht、Y Holic、Yacht Holic）。" },

    "gwangan": { area: "gwangan", name: "廣安里海灘・廣安大橋", ko: "광안리해수욕장", tag: "광안리",
      intro: "正對廣安大橋的海灘，晚上大橋點燈很漂亮，海邊有很多咖啡廳和酒吧。往年週六晚上有無人機秀，冬天有沒有要再確認。" },
    "millak": { area: "gwangan", name: "民樂水產市場", ko: "민락회타운", tag: "민락회센터",
      intro: "廣安里海灘東邊的生魚片市場，一樓挑海鮮，樓上餐廳幫你處理，邊吃邊看大橋。" },
    "countdown": { area: "gwangan", name: "廣安里跨年無人機秀", ko: "광안리 카운트다운", tag: "광안리카운트다운",
      intro: "釜山最大的跨年活動，免費。去年 2,500 架無人機排成大時鐘倒數，配合大橋燈光秀，現場約 7 萬人。今年的公告大概 12 月中旬才會出來，時間以公告為準。沒有煙火，天候不好可能取消。" },

    "yonggungsa": { area: "gijang", name: "海東龍宮寺", ko: "해동용궁사", tag: "해동용궁사",
      intro: "蓋在海邊岩石上的寺廟，是釜山最有名的景點之一。元旦當天會非常擠，所以排在 12/31 上午。從住處搭計程車約 20 分鐘。" },
    "lotte-outlet": { area: "gijang", name: "Lotte Premium Outlet 東釜山店", ko: "롯데프리미엄아울렛 동부산점", tag: "롯데아울렛동부산",
      intro: "在機張 Osiria，離海東龍宮寺車程約 10 分鐘，可以順路去。" },
    "jukseong": { area: "gijang", name: "竹城聖堂・Orangdae 海岸", ko: "죽성성당", tag: "죽성성당",
      intro: "機張海邊的小教堂（原本是韓劇場景）和岩石海岸，適合拍照。比較偏遠，適合包車或計程車。" },

    "songdo": { area: "nampo", name: "松島海上纜車", ko: "송도해상케이블카", tag: "송도해상케이블카",
      intro: "橫跨松島海水浴場海面的纜車。Busan Pass 可用（透明車廂不含）。" },
    "huinnyeoul": { area: "nampo", name: "白淺灘文化村", ko: "흰여울문화마을", tag: "흰여울문화마을",
      intro: "影島海邊懸崖上的白色小村莊，有海岸步道，常被叫「釜山的聖托里尼」。下午有陽光時最好拍，日落約 17:20。" },
    "arte": { area: "nampo", name: "Arte Museum 釜山", ko: "아르떼뮤지엄 부산", tag: "아르떼뮤지엄부산",
      intro: "影島的沉浸式光影美術館，全室內。從白淺灘過去約 10 分鐘。元旦營業時間要再確認。Busan Pass 可用。" },
    "taejongdae": { area: "nampo", name: "太宗台", ko: "태종대", tag: "태종대",
      intro: "影島最南端的海岸公園，有懸崖、燈塔和觀光小火車。" },
    "gamcheon": { area: "nampo", name: "甘川洞文化村", ko: "감천문화마을", tag: "감천문화마을",
      intro: "山坡上彩色房子層層疊疊的藝術村，有小王子雕像等拍照點。從海雲台過去約 1 小時。" },
    "jagalchi": { area: "nampo", name: "札嘎其市場・國際市場", ko: "자갈치시장", tag: "자갈치시장",
      intro: "札嘎其是釜山最大的海鮮市場，旁邊的國際市場、BIFF 廣場有很多小吃。週日部分店家休息，札嘎其每月第 1、3 個週二公休。" },

    "seomyeon": { area: "seomyeon", name: "西面地下街・樂天百貨釜山本店", ko: "서면 지하상가", tag: "서면",
      intro: "釜山市中心，地下街很長，樂天百貨釜山本店也在這裡（用 Busan Pass 有餐飲折扣）。醫美診所也集中在西面。" },
    "jeonpo": { area: "seomyeon", name: "田浦咖啡街・釜山市民公園", ko: "전포카페거리", tag: "전포카페거리",
      intro: "西面旁邊的咖啡廳街，小店很多；附近的釜山市民公園可以散步。" },
    "beauty": { area: "seomyeon", name: "西面醫美", ko: "서면 피부과", tag: "서면피부과", page: "beauty",
      intro: "西面是釜山醫美診所最多的地方。詳細內容看「醫美」分頁。" },

    "gyeongju": { area: "gyeongju", name: "慶州包車一日遊", ko: "경주", tag: "경주여행",
      intro: "新羅古都，佛國寺、大陵苑、皇理團路、東宮與月池。離釜山約 1 小時車程，建議包 7～9 人座車（KKday、Klook 搜「釜山包車」）。" }
  },

  alternatives: [
    { spot: "spaland",          length: "半天",  people: "任何人數", rain: true,  best: "12/30（洪補眠）、累的時候" },
    { spot: "shinsegae-centum", length: "半天",  people: "任何人數", rain: true,  best: "下雨天、1/2 下午" },
    { spot: "xthesky",          length: "1–2 小時", people: "任何人數", rain: true, best: "就在海雲台，隨時可塞" },
    { spot: "jeonpo",           length: "半天",  people: "2–6 人",  rain: false, best: "1/3 晚上、1/5（林、高住西面）" },
    { spot: "taejongdae",       length: "半天",  people: "2–6 人",  rain: false, best: "1/4" },
    { spot: "dongbaek",         length: "1–2 小時", people: "任何人數", rain: false, best: "12/30 下午、元旦早上" },
    { spot: "lotte-outlet",     length: "半天",  people: "任何人數", rain: true,  best: "12/31 順路或 1/4" },
    { spot: "gyeongju",         length: "一天",  people: "2–6 人（包車）", rain: false, best: "1/4（林、高）" },
    { spot: "jukseong",         length: "一天",  people: "2–6 人（包車）", rain: false, best: "1/4（林、高）" }
  ],

  // 待決定：done=true 表示已經決定，result 寫結論
  decide: [
    { title: "要不要去慶州、哪天去", note: "目前放 1/4 給林、高，或當備選", done: false },
    { title: "誰要做醫美、做什麼", note: "1/2 上午最多 5 人（林、高、洪、吳、S）；羅只能排 12/31 上午在海雲台做", done: false },
    { title: "元旦遊艇要在 1/1 還是改 1/2", note: "1/1 很滿；1/2 週六有無人機秀場次但羅搭不到", done: false },
    { title: "1/4 林、高要去哪", note: "慶州／影島／機張三選一", done: false },
    { title: "天空膠囊怎麼分組", note: "每台最多 4 人，6 人分 4+2 或 3+3", done: false },
    { title: "Busan Pass 買哪種", note: "建議 Big 5（₩65,000），下單前以 Klook 價格為準", done: false },
    { title: "12/30 剪頭髮要不要排", note: "", done: false }
  ],

  // 要訂、要確認的事。deadline 用 YYYY-MM-DD，沒有就留空
  book: [
    { title: "天空膠囊 12/31（2 台）", deadline: "2026-12-01", note: "官網 12/1（二）開賣，開賣時間還沒確認", done: false },
    { title: "醫美診所預約（1/2 週六上午）", deadline: "", note: "週六只開半天，越早約越好", done: false },
    { title: "夜間煙火遊艇（6 人，20:30 以後）", deadline: "", note: "先確認元旦有沒有開船", done: false },
    { title: "Busan Pass", deadline: "", note: "Klook 手機版", done: false },
    { title: "西面住宿 1/3–1/4（林、高）", deadline: "", note: "不急", done: false },
    { title: "吳、S 的班機", deadline: "", note: "訂好跟 Kaya 說時間", done: false },
    { title: "傳訊息給海雲台房東確認入住時間", deadline: "2026-12-20", note: "房東要求 12 月出發前確認", done: false },
    { title: "查今年廣安里跨年公告", deadline: "2026-12-15", note: "往年約 12/15 公布", done: false },
    { title: "跨年看秀餐廳／酒吧訂位", deadline: "", note: "等 12 月中公告後再看", done: false },
    { title: "確認 Spa Land、Arte Museum 元旦營業時間", deadline: "", note: "", done: false },
    { title: "慶州包車（如果要去）", deadline: "", note: "旺季建議 11 月訂", done: false }
  ],

  // 行前注意事項
  prep: [
    {
      icon: "🌡", title: "天氣",
      lead: "釜山年底比台北冷很多，而且海邊風大。跨年夜要在廣安里海邊站好幾個小時，保暖最重要。",
      rows: [
        ["氣溫", "12 月平均 3～9°C，1 月平均 1～7°C，晚上可能接近 0°C"],
        ["風", "1 月是一年風最大的月份，海邊體感會更冷"],
        ["下雨", "12 月是最乾的月份，下雨機率低"],
        ["日落", "約 17:20，下午 5 點多天就黑了"]
      ],
      items: [
        "建議帶：羽絨外套、圍巾、手套、毛帽、發熱衣，跨年夜加暖暖包",
        "天氣預報大概出發前 10 天才準，到時候再看下面的連結"
      ],
      links: [
        { label: "Naver 釜山天氣", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EC%82%B0+%EB%82%A0%EC%94%A8" },
        { label: "韓國氣象廳", url: "https://www.weather.go.kr/w/index.do" }
      ],
      source: [{ label: "Weather Spark 釜山全年天氣", url: "https://weatherspark.com/y/142699/Average-Weather-in-Busan-South-Korea-Year-Round" }]
    },
    {
      icon: "💱", title: "換錢",
      lead: "機場先換一點點（約 NT$1,000）夠搭車就好，其他到市區換，西面和南浦洞匯率通常比較好，但海雲台也差不多，不用特地跑。",
      rows: [
        ["金海機場", "Money Box（輕軌機場站 1 樓剪票口旁）06:00–21:00，比機場銀行好。林、高 18:50 落地來得及"],
        ["海雲台", "Money Box（海雲台海灘前，Sea Cloud Hotel 1 樓）09:00–19:00，離住處最近"],
        ["西面", "娜英換錢所（老字號，匯率不錯）09:00–19:00；Money Box 西面站 7 號出口附近"],
        ["南浦洞", "光復路上有好幾家：Money Box、MONEYPLANET（有 24 小時換錢機）、釜山換錢所、友利換錢"]
      ],
      items: [
        "一定要帶護照正本，照片和影本不行",
        "帶台幣 1,000 元大鈔匯率最好，小鈔匯率比較差",
        "地鐵卡加值只能用現金",
        "換完當場在櫃台鏡頭前點清楚",
        "營業時間是 2026 年的資料，出發前再確認"
      ],
      source: [{ label: "Creatrip 釜山換錢整理（2026/5 查證）", url: "https://creatrip.com/blog/9469" }]
    },
    {
      icon: "🚕", title: "叫車 App（出國前裝好）",
      lead: "在台灣就先裝好、註冊、綁好信用卡。註冊的驗證簡訊會傳到台灣門號，到韓國換網卡後可能收不到。",
      rows: [
        ["Uber", "用原本的帳號和信用卡就能叫，叫到的是一般計程車，最簡單"],
        ["K.Ride", "Kakao 給外國人用的版本，可以用台灣門號和海外信用卡，有中文；車種比較貴，另有服務費"],
        ["Kakao T", "韓國人最常用的，但外國門號和信用卡常常註冊或付款失敗，不建議當主力"]
      ],
      items: [
        "建議 Uber 和 K.Ride 都裝，一個叫不到換另一個",
        "6 個人要叫 2 台車，或叫大型計程車",
        "跨年夜廣安里附近很難叫車，建議走到民樂站搭地鐵",
        "順便裝：Naver Map（韓國導航比 Google 準）、Papago（翻譯）"
      ],
      source: [{ label: "韓國叫車 App 比較（2026）", url: "https://thebitjoy.com/blogs/blog/korea-taxi-apps-for-foreigners" }]
    }
  ],

  beauty: {
    status: "內容之後再補",
    notes: [
      "診所最集中在西面（西面站、田浦一帶），從海雲台搭地鐵 2 號線約 30 分。",
      "1/2 是週六，多數診所只開到 14–16 點；1/1 國定假日多半休息。",
      "隔天要搭飛機的人，建議選恢復期短的項目（保養型雷射、水光、肉毒）。",
      "醫美後 2～3 天不要去汗蒸幕或桑拿，當晚少喝酒。",
      "以上是韓國診所的一般慣例，還沒有逐家查證。"
    ]
  }
};
