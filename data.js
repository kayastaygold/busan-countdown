// ============================================================
// 釜山跨年 2026→2027 網站資料
// 要改內容只改這個檔案。時間都是韓國時間（KST，比台灣快 1 小時）。
// who 用代號：lin 林、gao 高、luo 羅、wu 吳、s S、hong 洪
// ============================================================
window.TRIP = {
  title: "釜山跨年 2026→2027",
  updated: "2026-11-22",

  // 愛心按鈕用的 Firebase 設定（空白 = 不顯示愛心）
  firebase: { projectId: "busan-countdown", apiKey: "AIzaSyBLx2xd9LAudbNWqBOyjXE1-ZHiXt4-MOw" },

  people: [
    { id: "lin",  name: "林", arrive: "2026-12-29T18:50", depart: "2027-01-05T19:50" },
    { id: "gao",  name: "高", arrive: "2026-12-29T18:50", depart: "2027-01-05T19:50" },
    { id: "hong", name: "洪", arrive: "2026-12-30T06:10", depart: "2027-01-03T20:50" },
    { id: "luo",  name: "羅", arrive: "2026-12-30T20:45", depart: "2027-01-02T14:50" },
    { id: "wu",   name: "吳", arrive: "2026-12-30T10:50", depart: "2027-01-03T10:00" },
    { id: "s",    name: "S",  arrive: "2026-12-30T10:50", depart: "2027-01-03T10:00" }
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
        { time: "晚上", title: "民樂水產市場晚餐", spot: "millak" },
        { time: "晚上", title: "廣安大橋夜景", spot: "gwangan" }
      ]
    },
    {
      date: "2026-12-30", energy: "🟢", who: ["lin", "gao", "hong", "luo", "wu", "s"],
      summary: "大家陸續抵達，搬到海雲台",
      items: [
        { time: "06:10", title: "洪抵達", who: ["hong"], flight: true },
        { time: "早上", title: "洪：累就去 Spa Land 休息，或到廣安里吃早餐", spot: "spaland", who: ["hong"], note: "林、高住處沒辦法補眠。Spa Land 約 9:00 開" },
        { time: "上午", title: "廣安里早午餐，再一起去海雲台", spot: "gwangan", who: ["lin", "gao", "hong"] },
        { time: "10:50", title: "吳、S 抵達，計程車到海雲台", who: ["wu", "s"], flight: true },
        { time: "中午", title: "海雲台 check-in、會合", who: ["lin", "gao", "hong", "wu", "s"], note: "不能提早入住就先寄行李" },
        { time: "", title: "剪頭髮（待定）", who: ["lin"], tbd: true },
        { time: "下午", title: "逛海雲台市場", spot: "haeundae-market", who: ["lin", "gao", "hong", "wu", "s"] },
        { time: "", title: "Lotte Outlet（想去再去）", spot: "lotte-outlet", optional: true, note: "計程車約 25–30 分" },
        { time: "晚上", title: "海雲台光之祭", spot: "haeundae-beach", who: ["lin", "gao", "hong", "wu", "s"] },
        { time: "20:45", title: "羅抵達，約 22:00 到住處", who: ["luo"], flight: true }
      ]
    },
    {
      date: "2026-12-31", energy: "🟡", who: "all",
      summary: "跨年夜：龍宮寺、天空膠囊、無人機秀",
      items: [
        { time: "早上", title: "醫美（想做的人）", spot: "beauty", optional: true, note: "想當天有效果的人和羅排這天，1/1 很多診所休息。趕不上龍宮寺就到松亭會合" },
        { time: "上午", title: "海東龍宮寺", spot: "yonggungsa" },
        { time: "中午", title: "松亭搭天空膠囊回海雲台", spot: "blueline", ticket: true },
        { time: "16:00", title: "回住處休息" },
        { time: "晚上", title: "跨年夜餐廳／酒吧", tbd: true, note: "12 月中公告後再看能不能訂位" },
        { time: "20:00", title: "廣安里跨年活動", spot: "countdown", note: "去年：22:40 演唱會、23:56 無人機、24:00 倒數。21:00 起 Wi-Fi 暫停，先下載離線地圖" },
        { time: "00:10", title: "回海雲台", note: "走到民樂站搭車，避開廣安站人潮" }
      ]
    },
    {
      date: "2027-01-01", energy: "🟡", who: "all",
      summary: "元旦：松島纜車、白淺灘、Arte Museum",
      items: [
        { time: "11:00", title: "睡飽再出門" },
        { time: "中午", title: "松島海上纜車", spot: "songdo", ticket: true },
        { time: "下午", title: "白淺灘文化村", spot: "huinnyeoul", note: "日落約 17:20，趁有陽光拍照" },
        { time: "傍晚", title: "Arte Museum", spot: "arte", ticket: true, note: "最晚 19:00 入場，建議 18:00 前到" },
        { time: "晚上", title: "回海雲台吃晚餐" }
      ]
    },
    {
      date: "2027-01-02", energy: "🟢", who: "all",
      summary: "羅回程；西面醫美、逛街，晚上遊艇",
      items: [
        { time: "上午", title: "羅去機場（14:50 起飛）", who: ["luo"], flight: true },
        { time: "上午", title: "西面醫美", spot: "beauty", who: ["lin", "gao", "hong", "wu", "s"], tbd: true, note: "週六只開半天，要提早預約" },
        { time: "中午", title: "西面、田浦逛街", spot: "jeonpo", who: ["lin", "gao", "hong", "wu", "s"] },
        { time: "下午", title: "百貨逛街（新世界或樂天）", spot: "shinsegae-centum", who: ["lin", "gao", "hong", "wu", "s"] },
        { time: "20:30+", title: "夜間煙火遊艇", spot: "yacht", ticket: true, who: ["lin", "gao", "hong", "wu", "s"], note: "吳、S 隔天 07:00 出發，不要訂太晚" }
      ],
      notes: ["醫美後 2～3 天不要去汗蒸幕或桑拿"]
    },
    {
      date: "2027-01-03", energy: "🟡", who: ["lin", "gao", "hong", "wu", "s"],
      summary: "吳、S 一早回程；林、高、洪逛南浦，洪晚上回國",
      items: [
        { time: "07:00", title: "吳、S 去機場（10:00 起飛）", who: ["wu", "s"], flight: true, note: "前一晚先約好計程車" },
        { time: "上午", title: "甘川洞文化村", spot: "gamcheon", who: ["lin", "gao", "hong"] },
        { time: "中午", title: "札嘎其市場、國際市場", spot: "jagalchi", who: ["lin", "gao", "hong"], note: "週日部分店家休息" },
        { time: "下午", title: "洪去機場（20:50 起飛）", who: ["hong"], flight: true },
        { time: "傍晚", title: "林、高搬到西面", who: ["lin", "gao"] }
      ]
    },
    {
      date: "2027-01-04", energy: "🟡", who: ["lin", "gao"], tentative: true,
      summary: "林、高自由日，三選一",
      choose: true,
      items: [
        { time: "選項 A", title: "慶州包車一日遊", spot: "gyeongju" },
        { time: "選項 B", title: "影島：Arte Museum、太宗台", spot: "taejongdae" },
        { time: "選項 C", title: "機張：竹城聖堂、Lotte Outlet", spot: "jukseong" }
      ]
    },
    {
      date: "2027-01-05", energy: "🟢", who: ["lin", "gao"], tentative: true,
      summary: "西面逛街，晚上回國",
      items: [
        { time: "白天", title: "西面地下街、樂天百貨", spot: "seomyeon" },
        { time: "16:30", title: "去機場（19:50 起飛）", flight: true }
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
    { id: "gijang",   name: "機張",       x: 345, y: 88 },
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

  // 景點介紹：short 是一句話（小卡也會用），desc 是點開後的一小段介紹，facts 是 2～4 個重點。小圖在 art.js，用同一個代號。
  // photo 是點開後顯示的真實照片（放在 photos/，960×640）；沒有 photo 的景點顯示手繪圖。
  // 維基共享資源的照片要保留 by（作者）、lic（授權）、url；自己提供的照片只寫 by（來源）。
  // hours 是營業時間（網路查的，出發前再確認），len 是大概要花多久，rain 是下雨能不能去，best 是適合排哪天（備選才寫）。
  // links 是額外按鈕：[{ label, url }]
  // tag 是韓文 IG 標籤，tagZh 是中文 IG 標籤（中文貼文太少的景點就不放）。
  // ig 可以放特定貼文：[{ url: "...", cover: "圖片網址", title: "..." }]
  spots: {
    "haeundae-beach": { area: "haeundae", name: "海雲台海灘・光之祭", ko: "해운대해수욕장", tag: "해운대빛축제", tagZh: "海雲台",
      hours: "全天開放；光之祭燈飾去年 18:00–23:00", len: "1 小時", rain: false,
      photo: {"src": "photos/haeundae-beach.jpg", "by": "Haeundae District Municipality", "lic": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Haeundae_Beach_NightView.jpg"},
      short: "住處走路 10 分的海灘",
      desc: "釜山最有名的海灘，沙灘很長，後面就是整排高樓和飯店。冬天不能玩水，但傍晚散步、看海很舒服。晚上海灘和市場那條路會點亮光之祭的燈飾。",
      facts: ["冬天晚上有光之祭燈飾，今年日期還沒公布", "元旦可以看日出，約 07:31"] },
    "haeundae-market": { area: "haeundae", name: "海雲台傳統市場", ko: "해운대시장", tag: "해운대시장", tagZh: "海雲台市場",
      hours: "各店不同，大約中午到晚上", len: "1 小時", rain: false,
      photo: {"src": "photos/haeundae-market.jpg", "by": "Junho Jung", "lic": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Korea-Busan-Haeundae_Market-Bokkeumbap-Fried_rice-01.jpg"},
      short: "住處旁的小吃市場",
      desc: "海雲台站走到海灘路上的一條小巷市場，短短的但很熱鬧。可以邊走邊吃魚糕、辣炒年糕、炸物和餃子，適合當下午點心或簡單吃一餐。",
      facts: ["走路約 5 分", "魚糕、辣炒年糕、炸物"] },
    "blueline": { area: "haeundae", name: "天空膠囊・海岸列車", ko: "해운대블루라인파크", tag: "해운대블루라인파크", tagZh: "天空膠囊列車",
      hours: "冬季天空膠囊 08:30–18:00、海岸列車 09:00–19:00", len: "1–2 小時", rain: false,
      photo: {"src": "photos/blueline.jpg", "by": "網路圖片"},
      short: "沿著海岸走的觀光小火車",
      desc: "用舊鐵道改成的海岸觀光路線。天空膠囊走尾浦到青沙浦這一段，在高架上慢慢開，一台一組人，約 30 分。海岸列車是面海座位的車廂，從尾浦一路開到松亭。",
      facts: ["天空膠囊每台最多 4 人，6 人訂 2 台", "12/31 的票 12/1 官網開賣", "海岸列車可用 Busan Pass"] },
    "cheongsapo": { area: "haeundae", name: "青沙浦步道・踏石展望台", ko: "청사포 다릿돌전망대", tag: "청사포", tagZh: "青沙浦",
      hours: "步道 24 小時；踏石展望台 09:00–18:00", len: "1–2 小時", rain: false, best: "12/31 坐完天空膠囊順路走",
      short: "沿著海岸走的步道和海上展望台",
      desc: "沿著舊鐵道修的海岸步道，從尾浦一路走到松亭，一邊是海，一邊是海岸列車。中間的青沙浦是個小漁村，有紅白兩座燈塔和烤貝餐廳。踏石展望台從岸邊伸到海面上，可以透過玻璃地板往下看海。",
      facts: ["尾浦到松亭全長 4.8 公里，走完約 80 分", "踏石展望台免費", "天空膠囊的終點就是青沙浦，可以接著走"] },
    "xthesky": { area: "haeundae", name: "Busan X the Sky 展望台", ko: "부산엑스더스카이", tag: "부산엑스더스카이",
      hours: "10:00–21:00，最晚 20:30 入場", len: "1–2 小時", rain: true, best: "就在海雲台，隨時可塞",
      photo: {"src": "photos/xthesky.jpg", "by": "網路圖片"},
      short: "海灘邊的高樓展望台",
      desc: "在海雲台 LCT 大樓的最高幾層，是韓國最高的展望台之一。可以從高處看整片海雲台海灘、廣安大橋和市區，傍晚到晚上的景色最好。",
      facts: ["室內，下雨也能去", "Busan Pass 可用"] },
    "dongbaek": { area: "haeundae", name: "冬柏島・迎月路", ko: "동백섬", tag: "동백섬", tagZh: "冬柏島",
      hours: "步道全天開放", len: "1 小時", rain: false, best: "12/30 下午、元旦早上",
      photo: {"src": "photos/dongbaek.jpg", "by": "一起去巴黎 avec Liz"},
      short: "海灘西端的環島步道",
      desc: "海雲台海灘西邊突出去的小島，現在已經跟陸地相連。沿著木棧道繞一圈約 20 到 30 分，途中有燈塔和 APEC 世峰樓，可以遠看廣安大橋和海雲台的高樓。",
      facts: ["可以看廣安大橋", "住處走路 20–25 分"] },
    "spaland": { area: "haeundae", name: "Spa Land 汗蒸幕", ko: "스파랜드 센텀시티", tag: "스파랜드", tagZh: "釜山汗蒸幕",
      hours: "約 09:00–22:00，網路資料不一", len: "半天", rain: true, best: "12/30（洪可以直接來休息）、累的時候",
      photo: {"src": "photos/spaland.jpg", "by": "I'm Alice（IG @im_aliceyu）"},
      short: "百貨裡的大型汗蒸幕",
      desc: "新世界 Centum City 百貨裡的溫泉汗蒸幕，有很多種主題汗蒸房、溫泉池和休息區。環境新又乾淨，很適合第一次去汗蒸幕的人，可以待上半天。",
      facts: ["離海雲台地鐵 2 站", "補眠、下雨天都適合", "醫美後 2～3 天不要去", "Busan Pass 可用"],
      links: [{ label: "Threads 分享文", url: "https://www.threads.com/share/Klp9i0cYF", icon: "star" }] },
    "shinsegae-centum": { area: "haeundae", name: "新世界・樂天百貨 Centum City", ko: "신세계 센텀시티", tag: "신세계센텀시티",
      hours: "約 10:30–20:00，每月休一天", len: "半天", rain: true, best: "下雨天、1/2 下午",
      photo: {"src": "photos/shinsegae-centum.jpg", "by": "Modamoda", "lic": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Shinsegye_Dept_store_Centum_city.JPG"},
      short: "超大百貨，可以逛一下午",
      desc: "新世界 Centum City 曾被金氏世界紀錄認定為世界最大的百貨公司，裡面有免稅店、Spa Land、溜冰場和美食街。對面的樂天百貨可以一起逛。",
      facts: ["新世界對面就是樂天百貨", "Centum City 站", "元旦營業時間要再確認"] },
    "yacht": { area: "haeundae", name: "水營灣夜間煙火遊艇", ko: "수영만요트경기장", tag: "부산요트투어", tagZh: "釜山遊艇",
      hours: "看業者場次，夜間場傍晚以後", len: "1 小時", rain: false,
      photo: {"src": "photos/yacht.jpg", "by": "Damee"},
      short: "搭遊艇看廣安大橋夜景",
      desc: "從海雲台的水營灣遊艇碼頭出發，開到廣安大橋前面再繞回來，一趟約 1 小時。晚上的場次可以從海上看大橋點燈和市區夜景，有些業者會在船上放小煙火。",
      facts: ["部分場次有小煙火", "可以在 Klook 訂", "Busan Pass 限 Diamond Bay、The Yacht、Y Holic、Yacht Holic"] },

    "gwangan": { area: "gwangan", name: "廣安里海灘・廣安大橋", ko: "광안리해수욕장", tag: "광안리", tagZh: "廣安里",
      hours: "全天開放", len: "1–2 小時", rain: false,
      photo: {"src": "photos/gwangan.jpg", "by": "lumoplank", "lic": "公有領域（CC0）", "url": "https://commons.wikimedia.org/wiki/File:Gwangan_Bridge_and_Gwangalli_Beach_-_Gwangalli2721.jpg"},
      short: "正對廣安大橋的海灘",
      desc: "彎月形的海灘，正前方就是廣安大橋。白天可以在海邊咖啡廳坐著看海，晚上大橋點燈後最漂亮，海岸路整排都是餐廳和酒吧。",
      facts: ["晚上大橋會點燈", "海邊很多咖啡廳和酒吧", "週六無人機秀，冬天有沒有要再確認"] },
    "millak": { area: "gwangan", name: "民樂水產市場", ko: "민락회타운", tag: "민락회센터",
      hours: "約 09:00–02:00，各店不同", len: "1–2 小時", rain: true,
      photo: {"src": "photos/millak.jpg", "by": "網路圖片"},
      short: "邊吃生魚片邊看大橋",
      desc: "廣安里海灘東側的生魚片市場大樓。在一樓攤位挑好活魚和海鮮，付處理費後到樓上的餐廳坐著吃，窗邊座位可以看到廣安大橋。",
      facts: ["一樓挑海鮮，樓上代客料理", "在廣安里海灘東邊"] },
    "countdown": { area: "gwangan", name: "廣安里跨年無人機秀", ko: "광안리 카운트다운", tag: "광안리카운트다운", tagZh: "釜山跨年",
      hours: "12/31 晚上，午夜倒數", len: "一晚", rain: false,
      photo: {"src": "photos/countdown.jpg", "by": "網路圖片"},
      short: "釜山最大的跨年活動，免費",
      desc: "每年 12/31 晚上在廣安里海灘舉行。無人機在大橋前排出倒數時鐘和新年圖案，搭配大橋的燈光秀。人非常多，要提早到，結束後散場也要花不少時間。",
      facts: ["去年 2,500 架無人機排成時鐘倒數", "現場約 7 萬人", "今年公告約 12 月中出來", "沒有煙火，天氣差可能取消"] },

    "yonggungsa": { area: "gijang", name: "海東龍宮寺", ko: "해동용궁사", tag: "해동용궁사", tagZh: "海東龍宮寺",
      hours: "04:30–20:30，全年開放", len: "1–2 小時", rain: false,
      photo: {"src": "photos/yonggungsa.jpg", "by": "Anna L Martin", "lic": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Haedong_Yonggungsa_Temple,_Busan,_South_Korea.jpg"},
      short: "蓋在海邊岩石上的寺廟",
      desc: "韓國少見的海邊寺廟，建在機張海岸的岩石上。從入口走下 108 階，過橋就能看到大殿和打上來的海浪，是釜山最有代表性的景色之一。",
      facts: ["從住處搭計程車約 20 分", "元旦會很擠，所以排 12/31"] },
    "lotte-outlet": { area: "gijang", name: "Lotte Premium Outlet 東釜山店", ko: "롯데프리미엄아울렛 동부산점", tag: "롯데아울렛동부산",
      hours: "10:00–21:00，農曆新年和中秋休", len: "半天", rain: true, best: "12/30 下午或 1/4",
      short: "機張的大型 Outlet",
      desc: "在機張 Osiria 觀光園區的大型 Outlet，外觀像地中海小鎮，品牌多，也有美食街。旁邊就是樂天世界釜山和 IKEA。",
      facts: ["離龍宮寺車程約 10 分", "從海雲台搭計程車 25–30 分"] },
    "jukseong": { area: "gijang", name: "竹城聖堂・Orangdae 海岸", ko: "죽성성당", tag: "죽성성당", tagZh: "竹城聖堂",
      hours: "外面全天可看", len: "1 小時", rain: false, best: "1/4（林、高），要包車",
      photo: {"src": "photos/jukseong.jpg", "by": "網路圖片"},
      short: "海邊小教堂和岩石海岸",
      desc: "機張竹城里海邊的小教堂，其實是為了拍韓劇搭的佈景，後來變成拍照景點。紅屋頂配上岩岸和海，天氣好時很上相。附近的 Orangdae 是可以看海的岩石海岸。",
      facts: ["韓劇場景，適合拍照", "比較偏遠，要包車或搭計程車"] },

    "lotte-world": { area: "gijang", name: "樂天世界 Adventure 釜山", ko: "롯데월드 어드벤처 부산", tag: "롯데월드부산", tagZh: "釜山樂天世界",
      hours: "每天 10:00–21:00", len: "一天", rain: false, best: "1/4（林、高），可以和 Outlet 排同一天",
      photo: {"src": "photos/lotte-world.jpg", "by": "Gruturgi", "lic": "公有領域", "url": "https://commons.wikimedia.org/wiki/File:Giant_Digger,_Lotte_World_Adventure_Busan,_c._June_2022,.jpg"},
      short: "童話城堡主題的戶外樂園",
      desc: "2022 年在機張 Osiria 開幕的主題樂園，以童話王國為主題，有城堡、雲霄飛車和大擺錘。大部分設施在戶外，冬天要穿暖一點。就在 Lotte Outlet 旁邊，可以排同一天。",
      facts: ["成人一日券約 ₩47,000，網路買常有折扣", "東海線 Osiria 站", "戶外設施多，下雨或強風會暫停"] },
    "luge": { area: "gijang", name: "Skyline Luge 釜山", ko: "스카이라인 루지 부산", tag: "스카이라인루지부산", tagZh: "釜山斜坡滑車",
      hours: "平日 10:00–19:00，週末假日 10:00–20:00；關門前 30 分停售", len: "1–2 小時", rain: false, best: "和龍宮寺、Outlet 排同一天",
      photo: {"src": "photos/luge.jpg", "by": "YILING TSN"},
      short: "自己開的下坡滑車",
      desc: "紐西蘭 Skyline 在機張開的斜坡滑車場。坐上沒有動力的小車，自己控制方向和煞車沿著彎道滑下山，再搭纜椅上去。邊滑邊看得到海，一群人一起玩很好笑。",
      facts: ["票按趟數買，多買幾趟比較划算", "6 歲且 110 公分以上可以自己開", "在 Osiria，離龍宮寺很近", "Busan Pass 可用，免費玩，趟數以現場為準"] },

    "songdo": { area: "nampo", name: "松島海上纜車", ko: "송도해상케이블카", tag: "송도해상케이블카", tagZh: "松島海上纜車",
      hours: "冬季 09:00–20:00，關門前 30 分停售，天氣差停駛", len: "1–2 小時", rain: false,
      photo: {"src": "photos/songdo.jpg", "by": "Klook"},
      short: "橫跨海面的纜車",
      desc: "從松林公園搭到岩南公園，全長約 1.6 公里，纜車直接從海面上方通過。可以看到松島海灘、影島和南港大橋，另一端有展望台和吊橋。",
      facts: ["Busan Pass 可用，透明車廂不含"] },
    "huinnyeoul": { area: "nampo", name: "白淺灘文化村", ko: "흰여울문화마을", tag: "흰여울문화마을", tagZh: "白淺灘文化村",
      hours: "村子全天開放，店家各自營業", len: "1–2 小時", rain: false,
      photo: {"src": "photos/huinnyeoul.jpg", "by": "Appleysj", "lic": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:%ED%9D%B0%EC%97%AC%EC%9A%B8%EB%A7%88%EC%9D%84.jpg"},
      short: "海邊懸崖上的白色小村",
      desc: "影島西岸懸崖上的小村子，白色的房子沿著海岸一排排蓋。村子下方是絕影海岸步道，中間有彩色隧道和階梯，到處是可以看海的小咖啡廳。",
      facts: ["人稱「釜山的聖托里尼」", "下午有陽光最好拍", "日落約 17:20"] },
    "arte": { area: "nampo", name: "Arte Museum 釜山", ko: "아르떼뮤지엄 부산", tag: "아르떼뮤지엄부산",
      hours: "10:00–20:00，最晚 19:00 入場，全年無休", len: "1.5 小時", rain: true,
      photo: {"src": "photos/arte.jpg", "by": "YILING TSN"},
      short: "沉浸式光影美術館",
      desc: "韓國很紅的沉浸式媒體藝術展，釜山館在影島。整個空間用投影、聲音和香氣做出海浪、瀑布、花園等場景，很適合拍照和拍影片。",
      facts: ["10:00–20:00，最晚 19:00 入場", "全年無休，不用預約", "逛完約 90 分，18:00 後人比較少", "Busan Pass 可用"] },
    "taejongdae": { area: "nampo", name: "太宗台", ko: "태종대", tag: "태종대", tagZh: "太宗台",
      hours: "公園 05:00–24:00；接駁車週三到週日 09:30–17:30", len: "半天", rain: false, best: "1/4",
      photo: {"src": "photos/taejongdae.jpg", "by": "Christophe95", "lic": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Taejongdae_in_2018.jpg"},
      short: "影島最南端的海岸公園",
      desc: "影島最南端的海岸公園，有茂密的樹林和陡峭的海崖。園區很大，平常可以搭 Danubi 小火車繞一圈，中途在展望台和燈塔下車看海。",
      facts: ["懸崖、燈塔、海岸步道", "Danubi 小火車檢修停駛中，改搭免費接駁車", "出發前再確認是否恢復"] },
    "gamcheon": { area: "nampo", name: "甘川洞文化村", ko: "감천문화마을", tag: "감천문화마을", tagZh: "甘川洞文化村",
      hours: "冬季 09:00–17:00，全年無休", len: "2 小時", rain: false,
      photo: {"src": "photos/gamcheon.jpg", "by": "S h y numis", "lic": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Gamcheon_Culture_Village_March_30_2024_7.jpg"},
      short: "山坡上的彩色房子藝術村",
      desc: "山坡上一層一層的彩色小房子，原本是韓戰時期的難民聚落，後來變成藝術村。巷子裡有壁畫、小店和咖啡廳，最有名的拍照點是小王子和狐狸的雕像，常常要排隊。",
      facts: ["小王子雕像等拍照點", "從海雲台過去約 1 小時"] },
    "jagalchi": { area: "nampo", name: "札嘎其市場・國際市場", ko: "자갈치시장", tag: "자갈치시장", tagZh: "札嘎其市場",
      hours: "約 05:00–22:00，每月第 1、3 個週二休", len: "2 小時", rain: true,
      photo: {"src": "photos/jagalchi.jpg", "by": "Mobius6", "lic": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Jagalchi_Market_20200523_019.jpg"},
      short: "釜山最大的海鮮市場",
      desc: "韓國最大的海鮮市場，一樓賣活海鮮，樓上可以代客料理。走路就能到 BIFF 廣場吃糖餅，還有國際市場和富平罐頭市場，可以排在一起逛。",
      facts: ["旁邊國際市場、BIFF 廣場小吃多", "週日部分店家休息", "每月第 1、3 個週二公休"] },

    "seomyeon": { area: "seomyeon", name: "西面地下街・樂天百貨釜山本店", ko: "서면 지하상가", tag: "서면", tagZh: "釜山西面",
      hours: "地下街約 10:00–22:00；百貨約 10:30–20:00", len: "半天", rain: true,
      photo: {"src": "photos/seomyeon.jpg", "by": "Carey Ciuro", "lic": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Seomyeon,_Busan.jpg"},
      short: "釜山市中心，地下街很長",
      desc: "釜山的市中心，地鐵 1、2 號線在這裡交會。地下街賣衣服、飾品和美妝，價格親民。地面上有樂天百貨和一整區的餐廳、酒吧。",
      facts: ["樂天百貨釜山本店也在這裡", "Busan Pass 有餐飲折扣", "醫美診所集中在這區"] },
    "jeonpo": { area: "seomyeon", name: "田浦咖啡街・釜山市民公園", ko: "전포카페거리", tag: "전포카페거리", tagZh: "田浦咖啡街",
      hours: "各店不同，多半中午到晚上", len: "半天", rain: false, best: "1/2 中午（已排）、1/5",
      photo: {"src": "photos/jeonpo.jpg", "by": "網路圖片"},
      short: "西面旁的咖啡廳街",
      desc: "西面站旁邊的巷子，原本是五金工具街，現在開滿個性咖啡廳、甜點店和選物店。適合慢慢逛、喝咖啡，附近還有釜山市民公園。",
      facts: ["小店多，好逛", "市民公園可以散步"] },
    "beauty": { area: "seomyeon", name: "西面醫美", ko: "서면 피부과", tag: "서면피부과", tagZh: "釜山醫美", page: "beauty",
      hours: "診所多半平日 10:00–19:00，週六只到下午", len: "看療程", rain: true,
      short: "釜山醫美診所最多的一區",
      desc: "西面站到田浦站一帶有很多皮膚科和醫美診所，不少有中文或英文諮詢。想做什麼、大概多少錢，可以到「醫美」分頁用選單看。",
      facts: ["細節看「醫美」分頁"] },

    "gyeongju": { area: "gyeongju", name: "慶州包車一日遊", ko: "경주", tag: "경주여행", tagZh: "慶州",
      hours: "佛國寺 09:00–18:00（17:00 前入場）；東宮與月池 09:00–22:00", len: "一天", rain: false, best: "1/4（林、高）",
      photo: {"src": "photos/gyeongju.jpg", "by": "網路圖片"},
      short: "新羅古都，車程約 1 小時",
      desc: "新羅王朝的千年古都，整座城市像一座露天博物館。常見的一日路線是佛國寺、大陵苑古墳、皇理團路逛街吃東西，晚上看東宮與月池的夜景。",
      facts: ["佛國寺、大陵苑、皇理團路、東宮與月池", "包車整台約 NT$10,000–15,000，建議 7～9 人座", "跟一日團每人約 NT$1,500–2,000"],
      links: [{ label: "Klook 慶州一日遊", url: "https://s.klook.com/c/gXB7k_Gow8" }] }
  },


  // 待決定：done=true 表示已經決定，result 寫結論
  decide: [
    { title: "要不要去慶州、哪天去", note: "目前放 1/4 給林、高，或當備選", done: false },
    { title: "誰要做醫美、做什麼", note: "1/2 上午最多 5 人；想當天有效果的人和羅排 12/31 早上", done: false },
    { title: "元旦遊艇要在 1/1 還是改 1/2", note: "", result: "改到 1/2（六）晚上，羅搭不到", done: true },
    { title: "1/4 林、高要去哪", note: "慶州／影島／機張三選一", done: false },
    { title: "天空膠囊怎麼分組", note: "每台最多 4 人，6 人分 4+2 或 3+3", done: false },
    { title: "Busan Pass 買哪種", note: "建議 Big 5（₩65,000），下單前以 Klook 價格為準", done: false },
    { title: "12/30 剪頭髮要不要排", note: "只有林", done: false }
  ],

  // 要訂、要確認的事。deadline 用 YYYY-MM-DD，沒有就留空
  book: [
    { title: "天空膠囊 12/31（2 台）", deadline: "2026-12-01", note: "官網 12/1（二）開賣，幾點還沒確認", done: false },
    { title: "醫美診所預約", deadline: "", note: "1/2 上午或 12/31 早上，越早約越好", done: false },
    { title: "煙火遊艇 1/2 晚上（5 人）", deadline: "", note: "訂 20:30 以後的場次", done: false },
    { title: "Busan Pass", deadline: "", note: "Klook 手機版", done: false },
    { title: "西面住宿 1/3–1/4（林、高）", deadline: "", note: "不急", done: false },
    { title: "吳、S 的班機", deadline: "", note: "", result: "12/30 10:50 抵達、1/3 10:00 起飛", done: true },
    { title: "跟海雲台房東確認入住時間", deadline: "2026-12-20", note: "房東要求出發前確認", done: false },
    { title: "查今年廣安里跨年公告", deadline: "2026-12-15", note: "往年約 12/15 公布", done: false },
    { title: "跨年看秀餐廳／酒吧訂位", deadline: "", note: "等 12 月中公告後再看", done: false },
    { title: "確認 Arte Museum 元旦營業時間", deadline: "", note: "", result: "官網寫全年無休，10:00–20:00，最晚 19:00 入場，不用預約", done: true },
    { title: "確認 Spa Land 年底營業時間", deadline: "", note: "", done: false },
    { title: "慶州包車（如果要去）", deadline: "", note: "旺季建議 11 月訂", done: false }
  ],

  // 行前注意事項（icon 是 icons.js 裡的圖示名稱）
  // 行李清單：每個人自己打勾，存在 Firebase（packing/{人}）。id 不要改，改了大家勾過的會不見。
  packing: [
    { group: "證件・錢", items: [
      ["passport", "護照（效期 6 個月以上）"],
      ["ticket", "電子機票、訂房資料（存手機）"],
      ["keta", "K-ETA：免申請到 2026/12/31，我們入境在這之前，不用辦"],
      ["won", "韓元現金"],
      ["card", "海外回饋高的信用卡"],
      ["tmoney", "T-money 或 WOWPASS 卡"],
      ["insurance", "旅平險、不便險"]
    ] },
    { group: "手機・電子", items: [
      ["sim", "eSIM 或網卡"],
      ["apps", "叫車 App 註冊好（Uber、K.Ride）"],
      ["naver", "Naver Map、Papago"],
      ["plug", "轉接頭（韓國 220V 圓頭）"],
      ["charger", "充電器、充電線"],
      ["power", "行動電源（隨身帶，不能托運）"]
    ] },
    { group: "保暖", items: [
      ["down", "羽絨外套"],
      ["thermal", "發熱衣、發熱褲"],
      ["scarf", "圍巾、手套、毛帽"],
      ["heat", "暖暖包（跨年夜要站很久）"],
      ["shoes", "好走的鞋"]
    ] },
    { group: "日用", items: [
      ["meds", "常用藥、感冒藥、腸胃藥"],
      ["lotion", "乳液、護唇膏（很乾）"],
      ["toilet", "盥洗用品"],
      ["bag", "折疊購物袋"]
    ] }
  ],

  prep: [
    {
      icon: "thermo", title: "天氣",
      lead: "比台北冷很多，海邊風大。跨年夜要在海邊站好幾個小時，保暖最重要。",
      rows: [
        ["氣溫", "12 月 3～9°C，1 月 1～7°C，晚上接近 0°C"],
        ["風", "1 月風最大，海邊體感更冷"],
        ["下雨", "12 月最乾，機率低"],
        ["日落", "約 17:20"]
      ],
      items: [
        "帶：羽絨外套、圍巾、手套、毛帽、發熱衣、暖暖包",
        "預報出發前 10 天才準，到時看下面連結"
      ],
      links: [
        { label: "Naver 釜山天氣", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EC%82%B0+%EB%82%A0%EC%94%A8" },
        { label: "韓國氣象廳", url: "https://www.weather.go.kr/w/index.do" }
      ],
      source: [{ label: "Weather Spark", url: "https://weatherspark.com/y/142699/Average-Weather-in-Busan-South-Korea-Year-Round" }]
    },
    {
      icon: "won", title: "換錢",
      lead: "機場先換約 NT$1,000 夠搭車就好，其他到市區換。海雲台匯率也不差，不用特地跑。",
      rows: [
        ["金海機場", "Money Box（輕軌機場站 1 樓）06:00–21:00"],
        ["海雲台", "Money Box（海灘前 Sea Cloud Hotel 1 樓）09:00–19:00"],
        ["西面", "娜英換錢所 09:00–19:00；Money Box（西面站 7 號出口）"],
        ["南浦洞", "光復路上好幾家，MONEYPLANET 有 24 小時換錢機"]
      ],
      items: [
        "要帶護照正本",
        "帶 1,000 元大鈔匯率最好",
        "地鐵卡加值只收現金",
        "換完當場點清楚",
        "營業時間出發前再確認"
      ],
      source: [{ label: "Creatrip（2026/5）", url: "https://creatrip.com/blog/9469" }]
    },
    {
      icon: "taxi", title: "叫車 App（出國前裝好）",
      lead: "在台灣先裝好、註冊、綁信用卡。到韓國換網卡後可能收不到驗證簡訊。",
      rows: [
        ["Uber", "原本的帳號就能用，最簡單"],
        ["K.Ride", "Kakao 的外國人版，有中文，稍貴"],
        ["Kakao T", "外國門號和信用卡常失敗，不建議"]
      ],
      items: [
        "Uber 和 K.Ride 都裝，互相備用",
        "6 人要叫 2 台，或叫大型計程車",
        "跨年夜很難叫車，走到民樂站搭地鐵",
        "順便裝 Naver Map、Papago"
      ],
      source: [{ label: "韓國叫車 App 比較（2026）", url: "https://thebitjoy.com/blogs/blog/korea-taxi-apps-for-foreigners" }]
    }
  ],

  // 醫美：一步一題的選單和「直接看全部」比較表都用這份資料。
  // goal：lift 輪廓拉提、skin 膚質改善。rec：none 不用恢復期、days 會紅腫幾天。
  // last：weeks 幾週、months 幾個月、half 半年以上。now：true = 做完當天就看得出來（適合 12/31）。
  // kr 是韓國價（萬韓元），tw 是台灣價（新台幣）。都是網路行情的概略區間，還沒逐家查證。
  // 醫美診所：整理自林在 Threads 上爬的筆記，加上 Creatrip、韓國診所資料站（modoodoc）。評價都是網路說法，僅供參考。
  // verdict：ok 可參考、mix 評價兩極、no 網路負評多。area：haeundae 海雲台・Centum、seomyeon 西面、nampo 南浦、other 其他、unknown 待確認。
  // price：1 便宜、2 中等、3 偏貴（網路印象，不是報價）。sat：週六營業時間（1/2 是週六）。
  clinics: {
    areas: [["haeundae", "海雲台・Centum"], ["seomyeon", "西面"], ["nampo", "南浦"], ["other", "其他區"], ["unknown", "位置待確認"]],
    items: [
      { id: "grays", name: "格雷斯皮膚科 Gray's", ko: "그레이스피부과", area: "haeundae", where: "中洞站 6 號出口，離住處 1 站", verdict: "ok", price: 2,
        tags: ["皮膚專科醫師", "中文協調員"], pros: ["皮膚專科醫師（紅標）一對一", "在韓國在地人推薦名單裡，看得到海景的高級診所", "術後可以用 Line 追蹤"], cons: ["討論文不算多"],
        hours: "一三四 10–19、二五 10–20", sat: "10–15" },
      { id: "midam", name: "Midam 美談", ko: "미담의원", area: "haeundae", where: "Centum 센텀코아大樓 2 樓", verdict: "ok", price: 2,
        tags: [], pros: ["好評文多，幾篇 Threads 都把它列進最後名單"], cons: ["有人說訊息回很慢", "可能要自己卸妝"] },
      { id: "centumbb", name: "Centum BB", ko: "센텀비비의원", area: "haeundae", where: "Centum，位置好找", verdict: "ok", price: 2,
        tags: ["院長親自", "免面診費", "每天限量"], pros: ["2015 年開業，院長是整形外科專科醫師，一對一面診", "Google 評分約 4.8", "有網友說它是韓國在地人推薦第一名，能量會分層打"], cons: ["原本筆記：價格 OK，沒看到負評"] },
      { id: "elblanc", name: "ELBLANC", ko: "엘블랑의원", area: "seomyeon", where: "西面站 7 號出口", verdict: "ok", price: 3,
        tags: ["院長親自", "中文翻譯", "會幫卸妝", "全預約制"], pros: ["一天只收 5～8 人，從諮詢到卸妝都是院長", "好評很多，Threads 上很紅"], cons: ["大家覺得偏貴", "週三也休息"],
        hours: "平日 10:30–19:30", sat: "10:30–16:30" },
      { id: "kimyangje", name: "美麗世界金陽濟皮膚科", ko: "고운세상김양제장봉석피부과", area: "seomyeon", where: "西面站 2 號出口", verdict: "ok", price: 2,
        tags: ["皮膚專科醫師", "中文翻譯"], pros: ["40 年老牌、皮膚專科（紅標），整體妥當", "有台灣籍職員"], cons: ["沒有玻尿酸類", "可能要等很久，有點流水線感"],
        hours: "平日 09:30–19:00（午休 13–14:30）", sat: "09:30–15:30", priceNote: "Creatrip 方案：美版電波 600 發＋V-Ro＋美白雷射，不到 NT$70,000" },
      { id: "nell", name: "Nell Clinic", ko: "넬의원", area: "seomyeon", where: "西面（서면로 60）", verdict: "ok", price: 3,
        tags: ["一人院長"], pros: ["首爾朋友推薦", "院長一人看診，回答專業、有尊榮感"], cons: ["價格很貴"] },
      { id: "fillstox", name: "FILLSTOX", ko: "필스톡스의원", area: "seomyeon", where: "西面（중앙대로 698）", verdict: "ok", price: 1,
        tags: [], pros: ["價格很划算"], cons: ["討論度不高"] },
      { id: "design", name: "DESIGN 整形外科", ko: "디자인성형외과", area: "seomyeon", where: "西面站 9 號出口", verdict: "ok", price: 2,
        tags: ["中文翻譯"], pros: ["以玻尿酸、注射出名，也做眼袋等手術"], cons: ["不在你的清單裡，是我另外找到的，評價還沒看到台灣人心得"],
        hours: "平日 10–19", sat: "10–17" },
      { id: "shes", name: "SHE'S 整形外科", ko: "쉬즈성형외과의원", area: "nampo", where: "南浦站 3 號出口，一整棟", verdict: "ok", price: 2,
        tags: ["院長親自", "中文翻譯"], pros: ["很多人推，院長親自操作", "線上諮詢回得快"], cons: ["晚上沒開", "有人說沒有想做的項目"],
        hours: "平日 09:30–19:30", sat: "09:30–17:30" },
      { id: "first", name: "The First 皮膚科", ko: "더퍼스트피부과의원", area: "seomyeon", where: "本部在西面（網友貼文）；大淵店在慶星大・釜慶大站 6 號出口", verdict: "ok", price: 2,
        tags: ["皮膚專科醫師", "院長親自", "中文翻譯"], pros: ["本部院長是皮膚科教授，一對一面診，環境很好", "打音波、電波前會在臉上畫線設計", "Google 評分約 4.8；會幫卸妝，說預算不會硬推"], cons: ["評價好壞參半", "據說本部比大淵店便宜"],
        hours: "大淵店平日 10–19（午休 14–15）", sat: "09–14（大淵店）", priceNote: "大淵店 Creatrip 方案：十蓓電波 600 發 ₩115 萬、麗珠蘭 2cc＋水光 2cc ₩53 萬、鳳凰電波 900 發 ₩345 萬" },
      { id: "mimisome", name: "MIMISOME", area: "other", where: "德川站（北區），離海雲台很遠", verdict: "ok", price: 2,
        tags: [], pros: ["有好評"], cons: ["討論度不高", "交通不方便"] },
      { id: "centrumel", name: "CentrumEL", ko: "", area: "unknown", where: "位置待確認", verdict: "ok", price: 3,
        tags: [], pros: ["沒看到壞評價", "專攻問題肌"], cons: ["價格偏高"] },
      { id: "rezero", name: "Rezero", ko: "리제로의원", area: "unknown", where: "位置待確認", verdict: "ok", price: null,
        tags: [], pros: ["有幾篇說院長細心的好文"], cons: ["資料少"] },
      { id: "theface", name: "The Face", ko: "더페이스의원", area: "seomyeon", where: "西面站 7 號出口走 3 分，一整棟", verdict: "ok", price: 1,
        tags: ["院長親自", "台韓同價", "中文翻譯"], pros: ["不是流水線，院長一對一面診", "台韓同價，說比首爾便宜兩三成", "Google 評分約 4.8，儀器針劑當面拆封"], cons: ["原本筆記：找不到評價（現在多了幾篇）"],
        priceNote: "店家自己在 Threads 留言的價格：韓國音波 100 發約 NT$924、麗珠蘭 2cc 約 NT$3,780、水光 1cc 約 NT$693、黃金微針全臉約 NT$4,200、皮秒淨膚套組約 NT$2,772" },
      { id: "leeds", name: "麗茲 Leeds", ko: "", area: "unknown", where: "位置待確認", verdict: "ok", price: null,
        tags: [], pros: [], cons: ["沒什麼評價"] },
      { id: "aruda", name: "Aruda 皮膚科", ko: "아루다의원", area: "unknown", where: "位置待確認", verdict: "ok", price: null,
        tags: ["一對一", "醫美地陪推薦"], pros: ["一對一看診", "醫美地陪會推"], cons: [] },
      { id: "tnt", name: "TnT", ko: "", area: "unknown", where: "位置待確認", verdict: "ok", price: null,
        tags: ["醫美地陪推薦"], pros: ["打針感覺很專業", "醫美地陪會推"], cons: [] },

      { id: "jryn", name: "JRYN 珍妍", ko: "제이린의원", area: "seomyeon", where: "西面站 2 號出口（南浦也有分店）", verdict: "mix", price: 1,
        tags: ["中文翻譯", "規模最大"], pros: ["釜山規模最大，主打音波、電波，CP 值高", "價目透明，每月有優惠，Google 評分約 4.8", "網友說是「穩妥安全牌」"], cons: ["原本筆記：負評很多", "有人覺得是流水線"],
        hours: "平日 10:30–20:00", sat: "10:30–18:00", priceNote: "店家自己在 Threads 留言的價格：音波 300 發約 NT$23,318、麗珠蘭黑金 1cc 約 NT$2,355、皮秒 Picoway 1 次約 NT$4,711" },
      { id: "ppeum", name: "麗芬聚 Ppeum", area: "seomyeon", verdict: "no", why: "負評多" },
      { id: "renovo", name: "Renovo 麗諾", area: "seomyeon", where: "西面站 7 號出口", verdict: "mix", price: 1,
        tags: ["中文翻譯", "整形專科醫師"], pros: ["一整層，醫美加整形", "整形專科醫師看診，中文翻譯全程陪同，面診不亂推銷", "Google 評分約 4.9"], cons: ["原本筆記：負評文多", "有網友說參數比較溫和，效果偏「體驗」"] },
      { id: "banobagi", name: "佰諾佰琪 Banobagi", area: "seomyeon", verdict: "no", why: "好壞參半" },
      { id: "ollim", name: "The Ollim 奧琳提拉", area: "seomyeon", verdict: "no", why: "負評多、要等很久，官方帳號回很慢" },
      { id: "wannabe", name: "Wannabe", area: "unknown", where: "位置待確認", verdict: "mix", price: 1,
        tags: ["整形專科醫師", "可選睡眠麻醉"], pros: ["在韓國在地人推薦名單裡", "怕痛的人可以選睡眠麻醉"], cons: ["原本筆記：負評多、等很久", "有網友說參數比較溫和"] },
      { id: "vands", name: "VANDS 本思", area: "seomyeon", where: "西面", verdict: "mix", price: 1,
        tags: ["平價連鎖"], pros: ["觀光客常去，價格親民", "在地人推薦名單說它「非流水線、CP 值天花板」"], cons: ["原本筆記：負評多", "有網友說參數比較溫和，適合怕痛、預算少"] },
      { id: "celita", name: "Celita", area: "unknown", verdict: "no", why: "負評太多" },
      { id: "evers", name: "Dr. Evers", area: "unknown", verdict: "no", why: "有幾篇負評說體驗不好、會推銷" },
      { id: "lizon", name: "Lizon", area: "unknown", verdict: "no", why: "有人說是流水線，跟宣傳不同" },
      { id: "dday", name: "dday", area: "nampo", verdict: "no", why: "等很久，負評很多" },
      { id: "genius", name: "Genius", area: "unknown", verdict: "no", why: "有人懷疑對不懂韓文的客人不友善" },
      { id: "daybeau", name: "DayBeau 西面店", area: "seomyeon", verdict: "no", why: "負評文語氣都很激動" },
      { id: "lisse", name: "Lissé 麗潔", area: "seomyeon", verdict: "no", why: "負評多" },
      { id: "newline", name: "New Line", area: "unknown", verdict: "no", why: "負評文語氣都很激動" },
      { id: "floria", name: "Floria", area: "seomyeon", verdict: "no", why: "很趕，沒看到什麼好評" },
      { id: "tune", name: "Tune 圖恩", area: "unknown", verdict: "no", why: "有客人和店家起糾紛的貼文" },
      { id: "tones", name: "Tone's", area: "unknown", verdict: "no", why: "負評文多" }
    ],
    source: [
      { label: "Creatrip 釜山醫美 12 間", url: "https://creatrip.com/zh-TW/blog/14949" },
      { label: "Bella 釜山醫美 6 間", url: "https://www.bella.tw/articles/travel&foodies/60930/busan-aesthetic-clinics-chinese-service-guide-2026" },
      { label: "modoodoc", url: "https://www.modoodoc.com/" }
    ]
  },

  beauty: {
    status: "這一頁還是草稿，內容確認中",
    won: 220,   // ₩10,000 大約換多少新台幣（概算）
    notes: [
      "診所集中在西面，從海雲台搭地鐵約 30 分",
      "1/2 週六多半只開到 14–16 點，1/1 多半休息",
      "想當天有效果的人和羅，排 12/31 早上",
      "做完 2～3 天不要去汗蒸幕，當晚少喝酒",
      "韓國便宜的活動價常是「第一次體驗價」，要先問清楚發數、劑量和品牌"
    ],
    items: [
      { id: "ulthera", goal: ["lift"], rec: "none", last: "half", now: false,
        name: "美國音波 Ulthera", what: "打到筋膜層，拉提下顎線和臉頰",
        tw: "極線音波、2 代美國音波（Ulthera Prime）", kr: "울쎄라", krRead: "Ulthera",
        dose: "300–600 發", recText: "幾乎沒有，可能痠痛或微腫幾天", lastText: "約 1 年，1–3 個月慢慢變緊",
        twPrice: [50000, 120000], krPrice: [100, 250],
        doseLabel: "發數", doses: [["300 發", "集中下顎線、雙下巴"], ["400–600 發", "全臉，中下臉一起拉"], ["800 發以上", "全臉＋頸部"]],
        tip: "最痛的一種，問有沒有麻藥；確認是原廠 Ulthera 或 Ulthera Prime（2 代），探頭當面拆。韓國 300 發約 NT$3 萬內。" },
      { id: "sofwave", goal: ["lift", "skin"], rec: "none", last: "half", now: false, src: "creatrip",
        name: "索夫波 Sofwave", what: "超音波打在真皮層，緊緻加上細紋、毛孔，痛感比美國音波低",
        tw: "索夫波", kr: "소프웨이브", krRead: "Sofwave",
        dose: "全臉約 300 發", recText: "沒有，可能微紅", lastText: "半年到 1 年，1–3 個月慢慢變緊",
        twPrice: [35000, 150000], krPrice: [70, 270],
        doseLabel: "發數", doses: [["100 發", "局部：法令紋、下顎線"], ["200 發", "中下臉"], ["300 發", "全臉"]],
        tip: "韓國 100 發約 NT$1.5–2 萬，台灣約 NT$3.5–5 萬；常和美國音波混打，一個拉深層、一個顧表層。" },
      { id: "shurink", goal: ["lift"], rec: "none", last: "months", now: false,
        name: "韓版音波 Shurink", what: "平價版音波，效果較輕、要定期做",
        tw: "海芙音波、韓版音波", kr: "슈링크 유니버스", krRead: "Shurink Universe",
        dose: "300–600 發", recText: "沒有", lastText: "3–4 個月",
        twPrice: [8000, 30000], krPrice: [10, 45],
        doseLabel: "發數", doses: [["300 發", "局部：下顎線、雙下巴"], ["600 發", "全臉，最常見"], ["900 發以上", "全臉加強或加頸部"]],
        tip: "一發便宜，所以常被灌很多發。比發數更重要的是問深度（4.5mm、3mm）怎麼分配；3～4 個月補一次。" },
      { id: "thermage", goal: ["lift"], rec: "none", last: "half", now: false,
        name: "電波拉提 Thermage FLX", what: "加熱真皮層，緊緻、改善鬆弛和細紋",
        tw: "鳳凰電波", kr: "써마지 FLX", krRead: "Thermage FLX",
        dose: "600–900 發", recText: "沒有，可能微紅 1 天", lastText: "1 年以上，3–6 個月最明顯",
        twPrice: [90000, 180000], krPrice: [180, 350],
        doseLabel: "發數", doses: [["300 發", "眼周（眼皮專用探頭）"], ["600 發", "全臉，最常見"], ["900 發", "全臉＋下顎線加強或頸部"]],
        tip: "確認是 FLX 原廠探頭，當面拆封、看發數歸零；痛感中等。" },
      { id: "oligio", goal: ["lift"], rec: "none", last: "half", now: false,
        name: "韓系電波 Oligio／Volnewmer", what: "韓國品牌的電波，俗稱小鳳凰，價格低很多",
        tw: "玩美電波等韓系電波", kr: "올리지오／볼뉴머", krRead: "Oligio／Volnewmer",
        dose: "300–600 發", recText: "沒有", lastText: "約半年",
        twPrice: [40000, 90000], krPrice: [30, 90],
        doseLabel: "發數", doses: [["300 發", "局部或眼周"], ["600 發", "全臉"], ["900 發", "全臉加強"]],
        tip: "韓國品牌，比鳳凰電波便宜很多，可以多打幾發；Volnewmer 比 Oligio 新、據說比較不痛。" },
      { id: "botox", goal: ["lift"], rec: "none", last: "months", now: false,
        name: "肉毒瘦小臉（咬肌）", what: "放鬆咬肌，臉型變小",
        tw: "肉毒桿菌、瘦臉針", kr: "사각턱 보톡스", krRead: "下顎肉毒",
        dose: "約 50–60 單位", recText: "沒有", lastText: "4–6 個月，2–4 週後才明顯",
        twPrice: [5000, 15000], krPrice: [3, 25],
        doseLabel: "單位", doses: [["咬肌", "兩邊共約 50 單位，肌肉大的到 100"], ["額頭、眉間", "約 10–20 單位"], ["魚尾紋", "每邊約 5–10 單位"]],
        tip: "肉毒是算「單位」不是 cc；韓國品牌便宜，美國 Botox 貴 2～3 倍，打之前看藥盒。" },
      { id: "filler", goal: ["lift"], rec: "none", last: "half", now: true,
        name: "玻尿酸填充", what: "補下巴、蘋果肌、法令紋，當下就有形狀",
        tw: "玻尿酸", kr: "필러", krRead: "Filler",
        dose: "每 1cc", recText: "大多沒有，可能小瘀青或微腫", lastText: "半年到 1 年半",
        twPrice: [12000, 25000], krPrice: [10, 40],
        doseLabel: "CC 數", doses: [["下巴", "1–2cc"], ["蘋果肌", "每邊 1–2cc"], ["法令紋", "每邊 0.5–1cc"], ["額頭", "2–4cc"], ["嘴唇", "0.5–1cc"]],
        tip: "以 cc 計價，喬雅登等進口品牌（韓國 1cc 約 ₩27–35 萬）比韓國品牌貴一倍以上；當面看針劑盒和序號。" },
      { id: "thread", goal: ["lift"], rec: "days", last: "half", now: true,
        name: "埋線拉提", what: "用線把臉往上拉，效果最直接",
        tw: "埋線拉提、線雕", kr: "실리프팅", krRead: "Thread lifting",
        dose: "依線的數量", recText: "腫脹、瘀青 3–7 天，表情會卡卡的", lastText: "半年到 1 年",
        twPrice: [30000, 100000], krPrice: [30, 150],
        doseLabel: "線數", doses: [["4–6 條", "局部：下顎線"], ["8–12 條", "全臉"]],
        tip: "線的種類（PDO、可吸收的倒鉤線）和條數決定價格，恢復期最長，最好排在最後一天。" },

      { id: "inmode", goal: ["lift"], rec: "none", last: "months", now: true, src: "threads",
        name: "InMode 鑽石超塑形", what: "電波加熱，局部緊緻、修雙下巴",
        tw: "鑽石超塑形、InMode", kr: "인모드", krRead: "InMode FX／Forma",
        dose: "依部位", recText: "沒有，可能微紅", lastText: "2–3 個月，要做幾次",
        twPrice: [10000, 30000], krPrice: [10, 30],
        doseLabel: "探頭", doses: [["FX", "打脂肪，消雙下巴、臉頰肉"], ["Forma", "加熱緊緻、改善細紋"], ["FX＋Forma", "最常見的組合"]],
        tip: "通常按部位或次數算，想消脂又想緊緻，要問清楚兩種探頭都有做。" },
      { id: "onda", goal: ["lift"], rec: "none", last: "months", now: false, src: "threads",
        name: "ONDA 超微波", what: "微波消脂，下顎線、小腹、大腿都能做",
        tw: "ONDA 超微波", kr: "온다리프팅", krRead: "ONDA lifting",
        dose: "臉約 2–5 萬焦耳", recText: "沒有，可能微腫 1–2 天", lastText: "2–3 個月",
        twPrice: [15000, 40000], krPrice: [15, 50],
        doseLabel: "能量", doses: [["20 kJ", "下顎線、雙下巴局部"], ["40 kJ", "全臉"], ["60 kJ", "全臉加強，韓國活動價約 ₩40 萬起"], ["100 kJ 以上", "身體：小腹、大腿、手臂"]],
        tip: "用能量（kJ）計價，問清楚是臉部還是身體的探頭；臉部常和音波一起做。" },
      { id: "titanium", goal: ["lift"], rec: "none", last: "months", now: true, src: "threads",
        name: "鈦提升 Titanium", what: "三波長雷射，下顎線更立體，當天就有亮感",
        tw: "鈦提升", kr: "티타늄 리프팅", krRead: "Titanium lifting",
        dose: "依發數", recText: "沒有", lastText: "2–3 個月",
        twPrice: [20000, 50000], krPrice: [25, 60],
        doseLabel: "份量", doses: [["全臉 1 次", "最常見"], ["＋頸部", "另外加價"]],
        tip: "當天就有亮感、緊實感，適合排在拍照前；效果比音波短，約 2～3 個月。" },

      { id: "toning", goal: ["skin"], rec: "none", last: "weeks", now: true,
        name: "淨膚雷射／皮秒淨膚", what: "提亮膚色、淡斑，要定期做",
        tw: "淨膚雷射、皮秒雷射", kr: "레이저토닝／피코토닝", krRead: "Laser toning／Pico toning",
        dose: "1 次", recText: "沒有，可能微紅幾小時", lastText: "幾週，做多次才持久",
        twPrice: [1500, 10000], krPrice: [1, 15] },
      { id: "aqua", goal: ["skin"], rec: "none", last: "weeks", now: true,
        name: "水飛梭／LDM 水滴提升", what: "清粉刺、補水，做完當天臉就透亮",
        tw: "水飛梭、LDM 水滴提升", kr: "아쿠아필／LDM 물방울리프팅", krRead: "Aqua peel／LDM",
        dose: "1 次", recText: "沒有", lastText: "1–2 週",
        twPrice: [2500, 6000], krPrice: [3, 15] },
      { id: "juvelook", goal: ["skin"], rec: "days", last: "months", now: false, src: "threads",
        name: "喬雅露水光 Juvelook skin", what: "刺激膠原，淡化暗沉、收細毛孔",
        tw: "喬雅露", kr: "쥬베룩 스킨", krRead: "Juvelook skin",
        dose: "1–2cc", recText: "針孔小凸點 2–3 天", lastText: "3–6 個月，約 1 個月後慢慢變好",
        twPrice: [15000, 30000], krPrice: [20, 50],
        doseLabel: "CC 數", doses: [["1cc", "局部：毛孔、痘疤"], ["2cc", "全臉"]],
        tip: "效果約 1 個月後慢慢出來，不適合想當天看到效果的人。" },
      { id: "skinbotox", goal: ["skin", "lift"], rec: "days", last: "months", now: false,
        name: "皮膚肉毒", what: "打在很淺的皮膚層，縮毛孔、撫平細紋",
        tw: "肉毒水光、微滴肉毒", kr: "스킨보톡스", krRead: "Skin botox",
        dose: "全臉 1 次", recText: "針孔小凸點 1–2 天", lastText: "3–4 個月",
        twPrice: [8000, 20000], krPrice: [8, 25],
        doseLabel: "份量", doses: [["全臉 1 次", "最常見"], ["＋頸部", "另外加價"]],
        tip: "問清楚用韓國品牌還是進口肉毒、總共幾單位。" },
      { id: "booster", goal: ["skin"], rec: "days", last: "months", now: false,
        name: "水光針（玻尿酸）", what: "把玻尿酸打進皮膚，補水、有光澤",
        tw: "水光針", kr: "물광주사", krRead: "水光注射",
        dose: "全臉 1 次", recText: "針孔紅點 1–3 天", lastText: "1–2 個月",
        twPrice: [8000, 20000], krPrice: [8, 25],
        doseLabel: "CC 數", doses: [["1cc", "局部或體驗"], ["2–3cc", "全臉，最常見"]],
        tip: "價格差很多，要問是哪一種玻尿酸、幾 cc；做完 1～3 天有針孔紅點。" },
      { id: "rejuran", goal: ["skin"], rec: "days", last: "months", now: false,
        name: "麗珠蘭 Rejuran", what: "修復型，改善膚質、細紋、痘疤，建議做 3 次",
        tw: "麗珠蘭、鮭魚針（台灣多是導入版）", kr: "리쥬란 힐러", krRead: "Rejuran Healer",
        dose: "2cc", recText: "小凸點或微腫 1–3 天", lastText: "3–6 個月",
        twPrice: [15000, 30000], krPrice: [20, 45],
        doseLabel: "CC 數", doses: [["2cc", "全臉，最常見"], ["4cc", "全臉加強或加頸部"], ["眼下 1cc", "Rejuran i，專打黑眼圈、細紋"]],
        tip: "很痛，記得敷麻藥；建議 3～4 週一次，做 3 次效果最好。" },
      { id: "potenza", goal: ["skin"], rec: "days", last: "months", now: false,
        name: "微針電波 Potenza", what: "毛孔、痘疤、泛紅，建議做 3 次",
        tw: "黃金微針、Potenza、微針電波、矽谷電波", kr: "포텐자／실펌X", krRead: "Potenza／Sylfirm X",
        dose: "全臉 1 次", recText: "紅腫 1–3 天", lastText: "幾個月",
        twPrice: [10000, 25000], krPrice: [15, 40] },
      { id: "picofrax", goal: ["skin"], rec: "days", last: "months", now: false,
        name: "蜂巢皮秒", what: "毛孔、痘疤、膚質粗糙",
        tw: "蜂巢皮秒、皮秒飛梭", kr: "피코프락셀", krRead: "Pico fractional",
        dose: "1 次，建議 3 次", recText: "泛紅、小結痂 2–5 天", lastText: "幾個月",
        twPrice: [8000, 20000], krPrice: [10, 30] }
    ],
    source: [
      { label: "Creatrip 鳳凰電波整理", url: "https://creatrip.com/blog/14909" },
      { label: "Threads 依維持時間分的療程", url: "https://www.threads.com/share/DoDSN_Z8K" },
      { label: "Creatrip 麗珠蘭整理", url: "https://creatrip.com/blog/14283" },
      { label: "Creatrip 索夫波整理", url: "https://creatrip.com/zh-TW/blog/14912" },
      { label: "Creatrip 美國音波整理", url: "https://creatrip.com/blog/14916" },
      { label: "Korea Experience 拉提價格（2026）", url: "https://korea-experience.pages.dev/blog/non-invasive-skin-tightening-ultherapy-vs-shurink-vs-thermage-prices-2026" }
    ]
  }
};
