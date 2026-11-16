// 每個景點的小插圖（自己畫的 Memphis 風 SVG，畫布 120×80）。用法：ART("gamcheon")
// 預設所有形狀都有黑框；不要框的寫 stroke="none"
(function () {
  "use strict";
  var K = "#16130f", PK = "#ff8fc7", HOT = "#ff4fa3", PU = "#9b6bff", LI = "#dccfff", Y = "#ffd534",
    B = "#5b8dff", SK = "#a9d8ff", T = "#2ed3c6", C = "#ff7a59", W = "#fff", G = "#6fd08c", N = "#3d348b";

  function bg(c) { return '<rect x="-2" y="-2" width="124" height="84" fill="' + c + '" stroke="none"/>'; }
  function sea(y, c) { return '<path d="M-4 ' + y + 'q8-6 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0V84H-4z" fill="' + (c || B) + '"/>'; }
  function sun(x, y, r, c) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 9) + '" fill="' + (c || Y) + '"/>'; }
  function spark(x, y, s, c) {
    return '<path transform="translate(' + x + " " + y + ") scale(" + (s || 1) + ')" d="M0-7c.6 4 2.4 6 7 7-4.6 1-6.4 3-7 7-.6-4-2.4-6-7-7 4.6-1 6.4-3 7-7z" fill="' + (c || W) + '" stroke-width="1.6"/>';
  }
  function cloud(x, y) {
    return '<path transform="translate(' + x + " " + y + ')" d="M0 8a6 6 0 0 1 6-8 8 8 0 0 1 14 2 5 5 0 0 1 2 10H2a4 4 0 0 1-2-4z" fill="' + W + '"/>';
  }
  function dots(list, c, r) {
    return list.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (r || 1.6) + '" fill="' + (c || W) + '" stroke="none"/>'; }).join("");
  }
  function bag(x, y, w, h, c) {
    return '<path d="M' + (x + w * 0.28) + " " + y + "v-4a" + w * 0.22 + " " + w * 0.22 + " 0 0 1 " + w * 0.44 + ' 0v4" fill="none"/>' +
      '<path d="M' + x + " " + y + "h" + w + "l" + w * 0.08 + " " + h + "h-" + w * 1.16 + 'z" fill="' + c + '"/>';
  }

  var A = {
    // ---- 海雲台 ----
    "haeundae-beach": bg(N) + sea(50, B) + '<path d="M-4 66q64-12 128 0v18H-4z" fill="' + Y + '"/>' +
      '<path d="M2 12q29 16 58 0t58 0" fill="none"/>' +
      [[10, 17, Y], [24, 22, PK], [38, 22, T], [52, 16, W], [68, 16, Y], [82, 22, PK], [96, 22, T], [110, 17, W]].map(function (p) {
        return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="' + p[2] + '"/>';
      }).join("") + spark(30, 40, 0.8, Y) + spark(92, 38, 0.6, W),

    "haeundae-market": bg(Y) + '<rect x="18" y="36" width="84" height="38" fill="' + W + '"/>' +
      '<path d="M12 36l8-18h80l8 18z" fill="' + W + '"/>' +
      '<path d="M20 18h16l-4 18H12zM52 18h16l2 18H50zM84 18h16l8 18H88z" fill="' + HOT + '"/>' +
      '<path d="M12 36a8 6 0 0 0 19 0 8 6 0 0 0 19 0 8 6 0 0 0 20 0 8 6 0 0 0 19 0 8 6 0 0 0 19 0" fill="none"/>' +
      [34, 60, 86].map(function (x, i) {
        return '<path d="M' + x + " 72V46" + '"/><circle cx="' + x + '" cy="50" r="4.5" fill="' + [C, PK, C][i] + '"/><circle cx="' + x + '" cy="59" r="4.5" fill="' + [PK, C, PK][i] + '"/>';
      }).join(""),

    "blueline": bg(SK) + sun(22, 11, 7) + cloud(70, 2) + sea(64, B) +
      '<rect x="18" y="46" width="5" height="24" fill="' + W + '"/><rect x="62" y="46" width="5" height="24" fill="' + W + '"/><rect x="104" y="46" width="5" height="24" fill="' + W + '"/>' +
      '<rect x="-4" y="42" width="128" height="6" fill="' + W + '"/>' +
      '<rect x="10" y="22" width="30" height="20" rx="6" fill="' + HOT + '"/><rect x="15" y="27" width="20" height="8" rx="2" fill="' + W + '"/>' +
      '<rect x="48" y="22" width="30" height="20" rx="6" fill="' + Y + '"/><rect x="53" y="27" width="20" height="8" rx="2" fill="' + W + '"/>' +
      '<rect x="86" y="22" width="30" height="20" rx="6" fill="' + T + '"/><rect x="91" y="27" width="20" height="8" rx="2" fill="' + W + '"/>',

    "xthesky": bg(SK) + sun(98, 16, 9) + cloud(6, 22) + cloud(88, 40) +
      '<rect x="34" y="26" width="16" height="58" fill="' + W + '"/><rect x="70" y="32" width="16" height="52" fill="' + W + '"/>' +
      '<path d="M50 84V14l10-8 10 8v70z" fill="' + PU + '"/>' +
      '<path d="M54 22h12M54 32h12M54 42h12M54 52h12M54 62h12M54 72h12M38 36h8M38 46h8M38 56h8M38 66h8M74 42h8M74 52h8M74 62h8M74 72h8" stroke-width="1.6"/>',

    "dongbaek": bg(SK) + sun(22, 18, 8) + '<rect x="92" y="24" width="8" height="26" fill="' + W + '"/><path d="M90 24l6-8 6 8z" fill="' + C + '"/>' +
      '<path d="M8 66q52-52 104 0z" fill="' + G + '"/>' + sea(62, B) +
      [[40, 50], [60, 40], [78, 52]].map(function (p) {
        return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6.5" fill="' + HOT + '"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.2" fill="' + Y + '" stroke-width="1.4"/>';
      }).join(""),

    // 青沙浦：紅白燈塔＋伸到海上的展望台
    "cheongsapo": bg(SK) + sun(98, 14, 7) + cloud(20, 8) + sea(44, B) +
      '<path d="M-4 40q20-8 34 0v44H-4z" fill="' + G + '"/>' +
      '<path d="M26 50q30-10 52 8" fill="none" stroke="' + K + '" stroke-width="9" stroke-linecap="round"/><path d="M26 50q30-10 52 8" fill="none" stroke="' + Y + '" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M40 46v14M56 45v16M70 51v12" stroke-width="2"/>' +
      '<path d="M88 46l2-22h8l2 22z" fill="' + C + '"/><rect x="88" y="18" width="12" height="6" fill="' + W + '"/><path d="M87 18l7-6 7 6z" fill="' + K + '"/>' +
      '<path d="M104 52l2-18h6l2 18z" fill="' + W + '"/><rect x="104" y="29" width="10" height="5" fill="' + Y + '"/>' +
      spark(16, 62, 0.6, W),

    "spaland":bg(PK) + '<path d="M42 34q-7-7 0-14t0-14M60 34q-7-7 0-14t0-14M78 34q-7-7 0-14t0-14" fill="none" stroke="' + W + '" stroke-width="5"/>' +
      '<path d="M42 34q-7-7 0-14t0-14M60 34q-7-7 0-14t0-14M78 34q-7-7 0-14t0-14" fill="none" stroke-width="1.6"/>' +
      '<path d="M20 48h80l-7 28H27z" fill="' + Y + '"/><ellipse cx="60" cy="48" rx="40" ry="9" fill="' + SK + '"/>' +
      '<path d="M34 49q4-3 8 0t8 0M66 49q4-3 8 0t8 0" fill="none" stroke-width="1.6"/><path d="M24 62h72" stroke-width="1.6"/>',

    "shinsegae-centum": bg(LI) + '<rect x="18" y="24" width="72" height="52" fill="' + W + '"/><rect x="30" y="12" width="48" height="12" fill="' + HOT + '"/>' +
      '<rect x="25" y="31" width="14" height="12" fill="' + SK + '"/><rect x="47" y="31" width="14" height="12" fill="' + SK + '"/><rect x="69" y="31" width="14" height="12" fill="' + SK + '"/>' +
      '<rect x="25" y="50" width="14" height="12" fill="' + SK + '"/><rect x="69" y="50" width="14" height="12" fill="' + SK + '"/><rect x="46" y="52" width="16" height="24" fill="' + Y + '"/>' +
      bag(88, 50, 20, 24, PU) + spark(104, 22, 0.7, Y),

    "yacht": bg(N) +
      [[26, 20, Y], [96, 16, PK]].map(function (p) {
        var s = ""; for (var i = 0; i < 8; i++) { var a = i * Math.PI / 4; s += "M" + (p[0] + Math.cos(a) * 5).toFixed(1) + " " + (p[1] + Math.sin(a) * 5).toFixed(1) + "L" + (p[0] + Math.cos(a) * 12).toFixed(1) + " " + (p[1] + Math.sin(a) * 12).toFixed(1); }
        return '<path d="' + s + '" stroke="' + p[2] + '" stroke-width="3"/>';
      }).join("") + dots([[50, 10], [70, 26], [12, 40], [108, 40]], W) +
      '<path d="M62 60V20"/><path d="M64 24l24 32H64z" fill="' + Y + '"/><path d="M59 30L42 56h17z" fill="' + PK + '"/>' +
      '<path d="M30 58h64l-10 14H40z" fill="' + W + '"/>' + sea(70, B),

    // ---- 廣安里 ----
    "gwangan": bg(N) + sun(100, 14, 8) + dots([[14, 12], [50, 8], [72, 20], [28, 26]], W) +
      '<path d="M-4 46Q20 44 36 18q24 34 48 0 16 26 40 28" fill="none"/><path d="M48 32v16M60 36v12M72 32v16M22 38v10M98 38v10" stroke-width="1.5"/>' +
      '<rect x="33" y="14" width="6" height="52" fill="' + W + '"/><rect x="81" y="14" width="6" height="52" fill="' + W + '"/>' +
      '<rect x="-4" y="48" width="128" height="6" fill="' + HOT + '"/>' + sea(66, B),

    "millak": bg(T) + '<ellipse cx="56" cy="46" rx="44" ry="26" fill="' + W + '"/><ellipse cx="56" cy="46" rx="34" ry="19" fill="none" stroke-width="1.5"/>' +
      '<path d="M26 46q16-17 38 0-22 17-38 0z" fill="' + C + '"/><path d="M64 46l13-9v18z" fill="' + C + '"/><circle cx="35" cy="44" r="1.6" fill="' + K + '" stroke="none"/>' +
      '<path d="M44 40q3 6 0 12M52 39q3 7 0 14" fill="none" stroke-width="1.5"/>' +
      '<path d="M68 62a9 9 0 0 1 18 0z" fill="' + Y + '"/><path d="M92 8l14 60M100 6l12 60" stroke-width="3"/>',

    "countdown": bg(N) + dots([[10, 10], [26, 20], [44, 8], [64, 14], [84, 8], [100, 20], [112, 10], [16, 34], [104, 36], [8, 50], [112, 52]], W, 1.8) +
      '<text x="60" y="50" font-family="Anton, sans-serif" font-size="36" letter-spacing="2" text-anchor="middle" fill="' + Y + '" stroke-width="2">2027</text>' +
      '<rect x="28" y="58" width="5" height="16" fill="' + W + '"/><rect x="87" y="58" width="5" height="16" fill="' + W + '"/>' +
      '<path d="M-4 70Q16 70 30 58q30 22 60 0 14 12 34 12" fill="none"/><rect x="-4" y="70" width="128" height="5" fill="' + HOT + '"/>',

    // ---- 機張 ----
    "yonggungsa": bg(SK) + sun(20, 16, 8, C) + cloud(84, 10) +
      '<path d="M22 84l10-30 16-8h30l16 12 8 26z" fill="' + LI + '"/>' +
      '<rect x="46" y="32" width="30" height="16" fill="' + W + '"/><path d="M52 32v16M61 32v16M70 32v16" stroke="' + C + '" stroke-width="3"/>' +
      '<path d="M36 32q10-2 25-16 15 14 25 16-25 6-50 0z" fill="' + C + '"/>' + sea(68, B),

    "lotte-outlet": bg(Y) + '<g transform="rotate(-12 56 42)"><path d="M22 20h44l26 22-26 22H22z" fill="' + W + '"/><circle cx="33" cy="42" r="4" fill="' + Y + '"/>' +
      '<text x="58" y="53" font-family="Anton, sans-serif" font-size="28" text-anchor="middle" fill="' + HOT + '" stroke-width="1.5">%</text></g>' +
      bag(88, 46, 20, 26, PU) + spark(100, 18, 0.7, W),

    "jukseong": bg(SK) + sun(98, 16, 8) + '<path d="M-4 84V66q30-10 62-6t66 6v18z" fill="' + G + '"/>' +
      '<rect x="55" y="16" width="12" height="16" fill="' + W + '"/><path d="M52 16l9-12 9 12z" fill="' + C + '"/>' +
      '<rect x="42" y="38" width="38" height="28" fill="' + W + '"/><path d="M38 40l23-16 23 16z" fill="' + C + '"/>' +
      '<path d="M56 66V54a5 5 0 0 1 10 0v12z" fill="' + B + '"/><circle cx="61" cy="34" r="2.5" fill="' + Y + '" stroke-width="1.5"/>' + sea(74, B),

    // 樂天世界：童話城堡＋雲霄飛車
    "lotte-world": bg(LI) + sun(104, 14, 7, Y) +
      '<path d="M-4 52q14-30 30-6t30-14 30 10 40-14" fill="none" stroke="' + C + '" stroke-width="5"/>' +
      '<path d="M8 76V44M26 76V46M46 76V38M66 76V40M86 76V44" stroke-width="1.6"/>' +
      '<rect x="52" y="44" width="40" height="32" fill="' + W + '"/><rect x="47" y="34" width="12" height="42" fill="' + PK + '"/><rect x="85" y="34" width="12" height="42" fill="' + PK + '"/>' +
      '<path d="M45 34l8-16 8 16zM83 34l8-16 8 16z" fill="' + PU + '"/><rect x="64" y="30" width="16" height="14" fill="' + W + '"/><path d="M61 30l11-16 11 16z" fill="' + HOT + '"/>' +
      '<path d="M66 76V64a6 6 0 0 1 12 0v12z" fill="' + B + '"/><path d="M53 18v-8l6 3-6 3" fill="' + Y + '" stroke-width="1.5"/>' +
      '<rect x="-4" y="76" width="128" height="8" fill="' + G + '"/>' + spark(22, 18, 0.7, W),

    // Luge：彎彎的下坡車道＋小車
    "luge": bg(SK) + sun(20, 14, 8) + sea(26, B) + '<path d="M-4 30h128v54H-4z" fill="' + G + '"/>' +
      '<path d="M108 30q-60 6-30 20T20 78" fill="none" stroke="' + K + '" stroke-width="13" stroke-linecap="round"/>' +
      '<path d="M108 30q-60 6-30 20T20 78" fill="none" stroke="' + Y + '" stroke-width="8" stroke-linecap="round"/>' +
      '<g transform="rotate(-14 58 58)"><rect x="46" y="52" width="24" height="9" rx="4" fill="' + HOT + '"/><circle cx="52" cy="62" r="3" fill="' + K + '"/><circle cx="64" cy="62" r="3" fill="' + K + '"/>' +
      '<circle cx="57" cy="45" r="5" fill="' + W + '"/><path d="M52 44a5 5 0 0 1 10 0z" fill="' + PU + '"/></g>' +
      '<path d="M112 10v20M96 6l24 8" stroke-width="1.5"/>' + spark(98, 60, 0.7, W),

    // ---- 南浦／影島 ----
    "songdo": bg(SK) + sun(18, 16, 8) + cloud(84, 40) + '<path d="M-4 10l128 22"/>' +
      '<path d="M56 20v10M100 28v6"/><rect x="38" y="30" width="36" height="28" rx="7" fill="' + HOT + '"/><rect x="43" y="35" width="26" height="11" rx="2" fill="' + W + '"/><path d="M56 35v11" stroke-width="1.5"/>' +
      '<rect x="91" y="34" width="18" height="14" rx="4" fill="' + Y + '"/><rect x="94" y="37" width="12" height="5" rx="1" fill="' + W + '" stroke-width="1.5"/>' + sea(66, B),

    "huinnyeoul": bg(SK) + sun(102, 14, 7) + '<path d="M-4 84V44l34-4 30 6 30-8 34 6v40z" fill="' + LI + '"/>' +
      [[6, 24, 22, 18, B], [32, 30, 20, 14, PK], [56, 22, 24, 18, Y], [84, 26, 22, 16, T]].map(function (h) {
        return '<rect x="' + h[0] + '" y="' + h[1] + '" width="' + h[2] + '" height="' + h[3] + '" fill="' + W + '"/><rect x="' + h[0] + '" y="' + h[1] + '" width="' + h[2] + '" height="5" fill="' + h[4] + '"/>' +
          '<rect x="' + (h[0] + h[2] / 2 - 3) + '" y="' + (h[1] + 8) + '" width="6" height="5" fill="' + SK + '" stroke-width="1.5"/>';
      }).join("") + '<path d="M20 48l8 5-8 5 8 5" fill="none" stroke-width="1.8"/>' + sea(68, B),

    "arte": bg(N) + '<path d="M6 74V58q10-32 42-28-12 8-6 20 12-22 38-14-10 6-6 16 12-10 34-4v26z" fill="' + B + '"/>' +
      '<path d="M48 30q8 0 10 8M80 36q7 1 8 8" fill="none" stroke="' + W + '" stroke-width="3"/>' + dots([[30, 46], [22, 58], [60, 58], [94, 60], [74, 66], [40, 66]], W, 2) +
      spark(88, 18, 0.9, Y) + spark(22, 20, 0.6, PK) + '<rect x="6" y="6" width="108" height="68" fill="none" stroke="' + W + '" stroke-width="2.5"/>',

    "taejongdae": bg(SK) + sun(98, 16, 8) + '<path d="M36 22l40-10M36 26l40 2" stroke="' + Y + '" stroke-width="3"/>' +
      '<path d="M-4 84V50l30-6 26 8 18 32z" fill="' + G + '"/>' +
      '<path d="M18 46l3-22h10l3 22z" fill="' + W + '"/><path d="M19.5 36h13" stroke="' + C + '" stroke-width="5"/><path d="M18 46l3-22h10l3 22z" fill="none"/>' +
      '<rect x="20" y="16" width="12" height="8" fill="' + Y + '"/><path d="M18 16l8-7 8 7z" fill="' + C + '"/>' + sea(66, B),

    "gamcheon": bg(SK) + sun(104, 12, 7) +
      [[28, 14, 20, 16, W], [48, 12, 22, 18, PK], [70, 16, 20, 14, B],
       [12, 30, 24, 18, T], [36, 30, 24, 18, C], [60, 30, 20, 18, PU], [80, 30, 26, 18, W],
       [0, 48, 26, 22, PK], [26, 48, 22, 22, B], [48, 48, 26, 22, W], [74, 48, 22, 22, T], [96, 48, 26, 22, HOT]].map(function (h) {
        return '<rect x="' + h[0] + '" y="' + h[1] + '" width="' + h[2] + '" height="' + h[3] + '" fill="' + h[4] + '"/>' +
          '<rect x="' + (h[0] + h[2] / 2 - 3) + '" y="' + (h[1] + 5) + '" width="6" height="6" fill="' + (h[4] === W ? SK : W) + '" stroke-width="1.5"/>';
      }).join("") + '<rect x="-4" y="70" width="128" height="14" fill="' + Y + '"/>',

    "jagalchi": bg(LI) + '<path d="M-4 84V60h128v24z" fill="' + SK + '"/><path d="M4 66l6 6M22 64l6 6M44 68l6 6M70 64l6 6M96 68l6 6" stroke="' + W + '" stroke-width="2"/>' +
      '<path d="M10 28q20-20 46 0-26 20-46 0z" fill="' + B + '"/><path d="M56 28l14-10v20z" fill="' + B + '"/><circle cx="21" cy="26" r="1.8" fill="' + K + '" stroke="none"/><path d="M32 22q4 6 0 12" fill="none" stroke-width="1.5"/>' +
      '<path d="M40 54q16-14 36 0-20 14-36 0z" fill="' + PK + '"/><path d="M76 54l11-8v16z" fill="' + PK + '"/><circle cx="49" cy="52" r="1.6" fill="' + K + '" stroke="none"/>' +
      '<path d="M88 30l-8-8M110 30l8-8M88 38l-9 2M110 38l9 2M90 44l-6 6M108 44l6 6" /><ellipse cx="99" cy="36" rx="12" ry="9" fill="' + C + '"/>' +
      '<circle cx="95" cy="33" r="1.5" fill="' + K + '" stroke="none"/><circle cx="103" cy="33" r="1.5" fill="' + K + '" stroke="none"/>',

    // ---- 西面 ----
    "seomyeon": bg(PU) + '<rect x="8" y="10" width="46" height="16" rx="8" fill="' + Y + '"/><path d="M16 18h30" stroke-dasharray="1 5" stroke-width="3"/>' +
      bag(18, 42, 30, 32, PK) + bag(56, 34, 34, 40, W) + bag(92, 50, 20, 24, T) + '<path d="M62 50h22M62 58h14" stroke="' + HOT + '" stroke-width="3"/>' + spark(98, 22, 0.9, Y),

    "jeonpo": bg(LI) + '<path d="M50 24q-6-6 0-12M62 24q-6-6 0-12" fill="none"/>' +
      '<path d="M34 36h42l-4 38H38z" fill="' + W + '"/><path d="M35.5 48h39l-1.5 14H37z" fill="' + PK + '"/><rect x="30" y="29" width="50" height="8" rx="3" fill="' + C + '"/>' +
      '<circle cx="55" cy="55" r="4" fill="' + W + '" stroke-width="1.5"/>' +
      '<path d="M98 56V40" /><ellipse cx="91" cy="40" rx="8" ry="5" transform="rotate(-30 91 40)" fill="' + G + '"/><ellipse cx="105" cy="36" rx="8" ry="5" transform="rotate(30 105 36)" fill="' + G + '"/>' +
      '<path d="M88 56h20l-3 18H91z" fill="' + T + '"/>',

    "beauty": bg(PK) + '<rect x="52" y="52" width="10" height="26" rx="4" fill="' + Y + '"/><circle cx="57" cy="34" r="24" fill="' + W + '"/><circle cx="57" cy="34" r="17" fill="' + SK + '"/>' +
      '<path d="M47 30q6-9 14-6" fill="none" stroke="' + W + '" stroke-width="3"/>' + spark(96, 20, 1.1, Y) + spark(18, 22, 0.8, W) + spark(98, 58, 0.7, W) + spark(20, 60, 0.6, Y),

    // ---- 慶州 ----
    "gyeongju": bg(SK) + sun(20, 16, 8, C) + cloud(54, 8) + '<path d="M-6 70q30-56 60 0z" fill="' + G + '"/><path d="M38 70q26-40 52 0z" fill="' + G + '"/>' +
      '<path d="M88 70q0-22 5-34h12q5 12 5 34z" fill="' + W + '"/><rect x="91" y="30" width="16" height="6" fill="' + W + '"/><rect x="96" y="46" width="6" height="6" fill="' + K + '" stroke="none"/>' +
      '<path d="M90 58h20M89 64h22" stroke-width="1.3"/><rect x="-4" y="70" width="128" height="14" fill="' + Y + '"/>'
  };

  function ART(id) {
    return '<svg class="art" viewBox="0 0 120 80" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + (A[id] || bg(LI)) + "</svg>";
  }
  window.ART = ART;
})();
