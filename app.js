(function () {
  "use strict";
  var T = window.TRIP, I = window.ICON;
  var app = document.getElementById("app");
  var WEEK = ["日", "一", "二", "三", "四", "五", "六"];
  var AREA_ORDER = ["haeundae", "gwangan", "gijang", "nampo", "seomyeon", "gyeongju"];
  var AREA_ICON = { haeundae: "wave", gwangan: "bridge", gijang: "temple", nampo: "fish", seomyeon: "shop", gyeongju: "hill", airport: "plane" };
  var TAB_ICON = { overview: "home", days: "cal", map: "pin", spots: "star", alts: "dice", todo: "check", prep: "bag", beauty: "sparkle" };
  var DAY_TONES = ["pink", "yellow", "blue", "purple", "teal", "coral", "pink", "yellow"];
  var INK = "#16130f";

  // ---------- 小工具 ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function kst(s) { return new Date(/[+Z]/.test(s.slice(10)) ? s : s + ":00+09:00"); }
  function md(dateStr) { var p = dateStr.split("-"); return +p[1] + "/" + +p[2]; }
  function wd(dateStr) { return WEEK[new Date(dateStr + "T12:00:00+09:00").getUTCDay()]; }
  function hm(s) { return s.slice(11, 16); }
  function person(id) { return T.people.find(function (p) { return p.id === id; }); }
  function whoList(w) { return w === "all" || !w ? T.people.map(function (p) { return p.id; }) : w; }
  function areaName(id) { var a = T.areas.find(function (x) { return x.id === id; }); return a ? a.name : id; }
  function dot(id) {
    var p = person(id);
    return '<span class="dot" style="--c:var(--p-' + id + ')" title="' + esc(p.name) + '">' + esc(p.name) + "</span>";
  }
  function dots(ids, big) {
    return '<span class="dots' + (big ? " big" : "") + '">' + whoList(ids).map(dot).join("") + "</span>";
  }
  function daysUntil(target) { return Math.ceil((kst(target) - Date.now()) / 86400000); }
  function buzz(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }
  // 卡片上的貼紙標題
  function H(icon, text, tone) {
    return '<h2 class="st" style="--tone:var(--' + tone + ')">' + I(icon) + "<span>" + esc(text) + "</span></h2>";
  }
  function naver(q) { return "https://map.naver.com/p/search/" + encodeURIComponent(q); }
  function igTag(t) { return "https://www.instagram.com/explore/tags/" + encodeURIComponent(t) + "/"; }
  function spotLinks(id, withIntro) {
    var s = T.spots[id]; if (!s) return "";
    var h = '<div class="links">';
    if (withIntro) h += '<a class="btn" href="#spots/' + id + '">' + I("star") + "介紹</a>";
    if (s.page) h += '<a class="btn" href="#' + s.page + '">' + I("sparkle") + "醫美頁</a>";
    h += '<a class="btn ig" href="' + igTag(s.tag) + '" target="_blank" rel="noopener">' + I("ig") + "IG #" + esc(s.tag) + "</a>";
    h += '<a class="btn nv" href="' + naver(s.ko) + '" target="_blank" rel="noopener">' + I("pin") + "Naver 地圖</a>";
    return h + "</div>";
  }
  function igCards(s) {
    if (!s.ig || !s.ig.length) return "";
    return '<div class="igrow">' + s.ig.map(function (p) {
      return '<a class="igcard" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
        (p.cover ? '<img loading="lazy" src="' + esc(p.cover) + '" alt="">' : '<span class="igph">IG</span>') +
        "<span>" + esc(p.title || "IG 貼文") + "</span></a>";
    }).join("") + "</div>";
  }
  function likeBtn(id) { return window.LIKES ? LIKES.button(id) : ""; }
  function usedOn(id) {
    return T.days.filter(function (d) { return d.items.some(function (it) { return it.spot === id; }); })
      .map(function (d) { return '<a href="#days/' + d.date + '">' + md(d.date) + "</a>"; });
  }
  function staysFor(date) {
    return T.stays.filter(function (s) { return s.nights.indexOf(date) >= 0; });
  }

  // ---------- 首頁主視覺（Memphis 風） ----------
  function hero() {
    var S = 'stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round"';
    return '<svg class="hero" viewBox="0 0 360 196" role="img" aria-label="釜山跨年 2026→2027">' +
      '<defs><pattern id="hg" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0H0V18" fill="none" stroke="' + INK + '" stroke-opacity=".15"/></pattern>' +
      '<pattern id="hc" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M2 4l4-2M9 11l4 1M11 3l1 4M3 12l3-1" stroke="' + INK + '" stroke-width="1.6" stroke-linecap="round"/></pattern></defs>' +
      '<rect width="360" height="196" rx="13" fill="#fff"/><rect width="360" height="196" rx="13" fill="url(#hg)"/>' +
      // 右上：三角形＋鋸齒
      '<g class="float"><path d="M270 22l78 26-52 58z" fill="' + INK + '" transform="translate(4 4)"/><path d="M270 22l78 26-52 58z" fill="#ff8fc7" ' + S + "/></g>" +
      '<path d="M288 16l10-9 10 9 10-9 10 9" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"/>' +
      '<path d="M288 16l10-9 10 9 10-9 10 9" fill="none" stroke="#2ed3c6" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' +
      // 左下：黃色圓
      '<circle cx="46" cy="150" r="40" fill="#ffd534" ' + S + "/>" +
      // BUSAN
      '<text x="16" y="99" font-size="92" letter-spacing="4" fill="' + INK + '" transform="scale(1 1.2)">BUSAN</text>' +
      // 右下：甜甜圈、波浪
      '<g class="float b"><circle cx="322" cy="150" r="22" fill="' + INK + '" transform="translate(4 4)"/><circle cx="322" cy="150" r="22" fill="#5b8dff" ' + S + '/><circle cx="322" cy="150" r="8" fill="#fff" ' + S + "/></g>" +
      '<path d="M276 185q8-14 16 0t16 0 16 0" fill="none" stroke="' + INK + '" stroke-width="10" stroke-linecap="round"/>' +
      '<path d="M276 185q8-14 16 0t16 0 16 0" fill="none" stroke="#9b6bff" stroke-width="5.5" stroke-linecap="round"/>' +
      // 彩帶條
      '<g class="float c"><g transform="rotate(-7 300 112)"><rect x="262" y="104" width="84" height="18" rx="3" fill="#dccfff" ' + S + '/><rect x="262" y="104" width="84" height="18" rx="3" fill="url(#hc)"/></g></g>' +
      // 貼紙
      '<g transform="rotate(-3 80 158)"><rect x="18" y="140" width="120" height="38" rx="8" fill="' + INK + '" transform="translate(3 3)"/><rect x="18" y="140" width="120" height="38" rx="8" fill="#ff4fa3" ' + S + "/>" +
      '<text class="zh" x="78" y="167" font-size="23" text-anchor="middle" fill="' + INK + '">釜山跨年</text></g>' +
      '<g transform="rotate(3 208 158)"><rect x="146" y="143" width="124" height="31" rx="15.5" fill="#ffd534" ' + S + "/>" +
      '<text x="208" y="165.5" font-size="18" letter-spacing="1" text-anchor="middle" fill="' + INK + '">2026 → 2027</text></g>' +
      "</svg>";
  }

  // ---------- 總覽 ----------
  function overview() {
    var h = hero();
    h += '<section class="card has-st">' + H("people", "誰哪天在", "pink") + presence() +
      '<p class="muted small">橫條上的時間是班機抵達和起飛時間（韓國時間，比台灣快 1 小時）。</p></section>';

    if (window.LIKES && LIKES.enabled) h += '<section class="card has-st">' + H("heart", "大家最想去", "yellow") +
      '<div id="rank"></div><a class="more" href="#spots">去景點頁按愛心 →</a></section>';

    var next = nextTodos(2);
    if (next.length) {
      h += '<section class="card has-st">' + H("bolt", "下一件要做的事", "sky") + next.map(todoRow).join("") +
        '<a class="more" href="#todo">看全部待辦 →</a></section>';
    }

    h += '<section class="card has-st">' + H("home", "住哪一區", "lilac") + '<ul class="stays">' + T.stays.map(function (s) {
      var last = s.nights[s.nights.length - 1];
      var out = new Date(kst(last + "T12:00").getTime() + 86400000).toISOString().slice(0, 10);
      return "<li><b>" + md(s.nights[0]) + "–" + md(out) + "</b> " + esc(s.area) + " " + dots(s.who) +
        (s.status !== "已訂" ? ' <span class="tag warn">' + esc(s.status) + "</span>" : "") + "</li>";
    }).join("") + "</ul></section>";
    return h;
  }

  function presence() {
    var t0 = kst("2026-12-29T00:00"), t1 = kst("2027-01-06T00:00"), span = t1 - t0;
    function pct(s) { return Math.max(0, Math.min(100, (kst(s) - t0) / span * 100)); }
    var days = [];
    for (var i = 0; i < 8; i++) days.push(new Date(t0.getTime() + i * 86400000 + 9 * 3600000).toISOString().slice(0, 10));
    var ol = T.overlap;
    var h = '<div class="pres"><div class="pres-head"><span></span><div class="pres-days">' +
      days.map(function (d) { return '<a href="#days/' + d + '">' + md(d) + "<small>" + wd(d) + "</small></a>"; }).join("") +
      "</div></div>";
    h += '<div class="pres-body"><div class="pres-ovwrap"><div class="pres-overlap" style="left:' + pct(ol.from) + "%;width:" + (pct(ol.to) - pct(ol.from)) + '%"></div></div>';
    T.people.forEach(function (p) {
      var l = pct(p.arrive), w = pct(p.depart) - l;
      h += '<div class="pres-row">' + dot(p.id) +
        '<div class="pres-track"><div class="pres-bar' + (p.tentative ? " tent" : "") + '" style="--c:var(--p-' + p.id + ");left:" + l + "%;width:" + w + '%">' +
        (p.tentative ? "<span>未定</span>" : "<span>" + hm(p.arrive) + "</span><span>" + hm(p.depart) + "</span>") + "</div></div></div>";
    });
    h += "</div></div>";
    return h + '<p class="legend"><span class="sw ov"></span>' + esc(ol.label) +
      (T.people.some(function (p) { return p.tentative; }) ? '　<span class="sw tent"></span>班機未定' : "") + "</p>";
  }

  // ---------- 每日行程 ----------
  function dayIndex(date) {
    for (var i = 0; i < T.days.length; i++) if (T.days[i].date === date) return i;
    return -1;
  }
  function defaultDay() {
    var today = new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 10);
    return dayIndex(today) >= 0 ? today : T.days[0].date;
  }
  function energyTag(e) {
    var col = { "🟢": "var(--teal)", "🟡": "var(--yellow)", "🔴": "var(--coral)" };
    var cs = Array.from(e).filter(function (c) { return T.energy[c]; });
    return '<span class="energy">' + cs.map(function (c) { return '<i style="--c:' + col[c] + '"></i>'; }).join("") +
      cs.map(function (c) { return T.energy[c]; }).join("～") + "</span>";
  }
  function daysView(sel) {
    var idx = dayIndex(sel || defaultDay()); if (idx < 0) idx = 0;
    var d = T.days[idx];
    var h = '<nav class="pills">' + T.days.map(function (x) {
      return '<a href="#days/' + x.date + '" class="' + (x.date === d.date ? "on" : "") + '">' + md(x.date) + "<small>" + wd(x.date) + "</small></a>";
    }).join("") + "</nav>";

    h += '<section class="dayhead" style="--tone:var(--' + DAY_TONES[idx % DAY_TONES.length] + ')"><div class="dh-top"><h2>' + md(d.date) +
      " <small>週" + wd(d.date) + "</small></h2>" + energyTag(d.energy) + "</div>" +
      "<p>" + esc(d.summary) + "</p>" + dots(d.who, true);
    var st = staysFor(d.date);
    h += '<div class="stay">' + (st.length ? I("home") + "今晚住：" + st.map(function (s) {
      return esc(s.area) + (s.who === "all" ? "" : "（" + whoList(s.who).map(function (i) { return person(i).name; }).join("、") + "）") +
        (s.status !== "已訂" ? ' <span class="tag warn">' + esc(s.status) + "</span>" : "");
    }).join("；") : I("plane") + "回家") + "</div></section>";

    if (d.choose) h += '<p class="muted center">以下三選一</p>';
    h += '<ol class="tl">' + d.items.map(function (it) {
      var s = it.spot && T.spots[it.spot];
      var cls = ["tl-item"]; if (it.optional) cls.push("opt"); if (it.tbd) cls.push("tbd"); if (it.flight) cls.push("fl");
      var body = '<div class="tl-title">' + (it.flight ? I("plane") + " " : "") + esc(it.title) +
        (it.ticket ? ' <span class="tag">' + I("ticket") + "Pass／要訂</span>" : "") +
        (it.optional ? ' <span class="tag">可跳過</span>' : "") + (it.tbd ? ' <span class="tag warn">未定</span>' : "") + "</div>";
      if (it.who) body += dots(it.who);
      if (it.note) body += '<p class="note">' + esc(it.note) + "</p>";
      if (s) body += "<details><summary>" + esc(s.name) + "</summary><p>" + esc(s.intro) + "</p>" + igCards(s) + likeBtn(it.spot) + spotLinks(it.spot, true) + "</details>";
      return '<li class="' + cls.join(" ") + '"><span class="tl-time">' + esc(it.time) + '</span><div class="tl-body">' + body + "</div></li>";
    }).join("") + "</ol>";
    if (d.notes) h += '<div class="card warnbox">' + d.notes.map(function (n) { return I("warn") + " " + esc(n); }).join("<br>") + "</div>";

    var prev = T.days[idx - 1], next = T.days[idx + 1];
    h += '<nav class="daynav">' +
      (prev ? '<a href="#days/' + prev.date + '">' + I("prev") + md(prev.date) + "</a>" : "<span></span>") +
      (next ? '<a href="#days/' + next.date + '">' + md(next.date) + I("next") + "</a>" : "<span></span>") + "</nav>" +
      '<p class="hint">左右滑也可以換日期</p>';
    return h;
  }

  // ---------- 地圖（Memphis 風示意圖） ----------
  function textW(s, cjk, asc) {
    var w = 0; for (var i = 0; i < s.length; i++) w += s.charCodeAt(i) > 255 ? cjk : asc; return w;
  }
  // 地圖上的文字貼紙
  function sticker(cx, cy, text, o) {
    o = o || {};
    var fs = o.small ? 11 : 14, pad = o.small ? 7 : 8, ic = o.icon ? 15 : 0;
    var w = textW(text, fs, fs * 0.58) + pad * 2 + ic, hgt = o.small ? 19 : 23, x = cx - w / 2, y = cy - hgt / 2, rx = o.small ? 9.5 : 7;
    return '<g transform="rotate(' + (o.rot || 0) + " " + cx + " " + cy + ')">' +
      (o.small ? "" : '<rect x="' + (x + 2.5) + '" y="' + (y + 2.5) + '" width="' + w + '" height="' + hgt + '" rx="' + rx + '" fill="' + INK + '"/>') +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hgt + '" rx="' + rx + '" style="fill:' + (o.fill || "#fff") + '" stroke="' + INK + '" stroke-width="' + (o.small ? 1.5 : 2) + '"/>' +
      (ic ? '<g style="--ic:#fff">' + I.inner(o.icon, x + 4, y + 3, 13) + "</g>" : "") +
      '<text class="' + (o.small ? "m-sm" : "m-lb") + '" x="' + (cx + ic / 2) + '" y="' + (cy + fs * 0.36) + '" text-anchor="middle">' + esc(text) + "</text></g>";
  }
  function mapSvg() {
    var lodge = { haeundae: ["全員 12/30–1/3", -4, -56], gwangan: ["林高 12/29", 0, 32], seomyeon: ["林高 1/3–1/5", -14, 34] };
    var coast = "M-5,-5 L405,-5 L405,10 L380,30 L365,80 L352,130 L346,165 L342,186 L315,193 L292,191 L278,212 L258,234 L236,230 L222,244 L200,252 L180,258 L160,270 L136,266 L116,286 L96,280 L76,302 L50,310 L-5,320 Z";
    var S = 'stroke="' + INK + '" stroke-linejoin="round" stroke-linecap="round"';
    var svg = '<svg viewBox="0 0 400 350" class="map" role="img" aria-label="釜山分區示意圖">' +
      '<defs><pattern id="mw" width="34" height="16" patternUnits="userSpaceOnUse"><path d="M2 9q4-6 8 0t8 0" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/></pattern>' +
      '<pattern id="mg" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="' + INK + '" stroke-opacity=".1"/></pattern>' +
      '<pattern id="mc" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M2 4l4-2M9 11l4 1M11 3l1 4M3 12l3-1" stroke="' + INK + '" stroke-width="1.5" stroke-linecap="round"/></pattern></defs>' +
      // 海
      '<rect width="400" height="350" style="fill:var(--sea)"/><rect width="400" height="350" fill="url(#mw)"/>' +
      // 陸地（硬陰影＋格線）
      '<path d="' + coast + '" fill="' + INK + '" transform="translate(5 6)"/>' +
      '<path d="' + coast + '" style="fill:var(--land)" ' + S + ' stroke-width="3"/><path d="' + coast + '" fill="url(#mg)"/>' +
      // 洛東江
      '<path d="M98,-5 C90,60 104,110 90,170 C82,220 88,260 87,290" fill="none" style="stroke:var(--sea)" stroke-width="9"/>' +
      '<text class="m-sm" x="106" y="22" opacity=".6">洛東江</text>' +
      // 陸地裝飾
      '<circle cx="232" cy="58" r="21" fill="#dccfff" ' + S + ' stroke-width="2"/><circle cx="232" cy="58" r="21" fill="url(#mc)"/>' +
      '<path d="M150 62l22-34 20 34z" fill="#ffd534" ' + S + ' stroke-width="2"/>' +
      '<path d="M22 66q7-12 14 0t14 0" fill="none" stroke="#ff4fa3" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M28 222l10-9 10 9 10-9" fill="none" stroke="#2ed3c6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
      // 影島
      '<ellipse cx="195" cy="303" rx="30" ry="16" fill="' + INK + '"/><ellipse cx="192" cy="300" rx="30" ry="16" fill="#dccfff" ' + S + ' stroke-width="2.5"/>' +
      '<text class="m-sm" x="192" y="304" text-anchor="middle">影島</text>' +
      // 海上裝飾
      '<circle cx="353" cy="301" r="24" fill="' + INK + '"/><circle cx="350" cy="298" r="24" fill="#ffd534" ' + S + ' stroke-width="2.5"/>' +
      '<path d="M252 312l11-11 11 11 11-11 11 11" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" transform="translate(2.5 2.5)"/>' +
      '<path d="M252 312l11-11 11 11 11-11 11 11" fill="none" stroke="#ff8fc7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M306 262l16-4-6 16z" fill="#ff7a59" ' + S + ' stroke-width="2"/>' +
      '<circle cx="382" cy="236" r="8" fill="#9b6bff" ' + S + ' stroke-width="2"/><circle cx="382" cy="236" r="2.5" fill="#fff" ' + S + ' stroke-width="1.5"/>' +
      '<path d="M30 336l10-6 10 6" fill="none" ' + S + ' stroke-width="2.5"/>' +
      // 交通線
      '<path d="M50,150 C90,146 130,142 170,140" fill="none" ' + S + ' stroke-width="7"/>' +
      '<path d="M50,150 C90,146 130,142 170,140" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="5 6"/>' +
      '<path d="M170,140 C205,170 230,200 255,205 C285,205 305,180 330,170" fill="none" ' + S + ' stroke-width="8"/>' +
      '<path d="M170,140 C205,170 230,200 255,205 C285,205 305,180 330,170" fill="none" stroke="#2ed3c6" stroke-width="4"/>' +
      sticker(121, 130, "輕軌＋地鐵", { small: true }) + sticker(207, 211, "2 號線", { small: true, fill: "var(--teal)" });

    var labels = "";
    T.areas.forEach(function (a) {
      if (a.offmap) return;
      var href = a.id === "airport" ? "#map" : "#spots/area-" + a.id;
      svg += '<a href="' + href + '"><g class="m-mk" style="--ic:#fff">' +
        '<circle cx="' + (a.x + 3) + '" cy="' + (a.y + 3) + '" r="16" fill="' + INK + '"/>' +
        '<circle cx="' + a.x + '" cy="' + a.y + '" r="16" style="fill:var(--a-' + a.id + ')" stroke="' + INK + '" stroke-width="2.5"/>' +
        I.inner(AREA_ICON[a.id], a.x - 10, a.y - 10, 20) + "</g></a>";
      labels += '<a href="' + href + '">' + sticker(a.x, a.y - 31, a.mapName || a.name, { rot: a.x % 20 < 10 ? -3 : 3 }) + "</a>";
      var l = lodge[a.id];
      if (l) labels += sticker(a.x + l[1], a.y + l[2], l[0], { small: true, fill: "var(--yellow)", icon: "home" });
    });
    svg += labels + '<a href="#spots/gyeongju">' + sticker(336, 15, "↑ 慶州 約 1 小時", { small: true, fill: "var(--coral)" }) + "</a></svg>";
    return svg;
  }
  function mapView() {
    var h = '<section class="card has-st">' + H("pin", "釜山分區示意圖", "pink") + mapSvg() +
      '<p class="muted small">這是手畫的示意圖，位置和比例都是大概的。導航請點景點裡的 Naver 地圖。點區域可以看那一區的景點。</p></section>';

    h += '<section class="card has-st">' + H("star", "各區有什麼", "yellow") + AREA_ORDER.map(function (aid) {
      var list = Object.keys(T.spots).filter(function (k) { return T.spots[k].area === aid; });
      return '<div class="arearow"><b><a href="#spots/area-' + aid + '" style="--tone:var(--a-' + aid + ')">' + I(AREA_ICON[aid]) + esc(areaName(aid)) + "</a></b><span>" +
        list.map(function (k) { return '<a href="#spots/' + k + '">' + esc(T.spots[k].name) + "</a>"; }).join("、") + "</span></div>";
    }).join("") + "</section>";

    h += '<section class="card has-st">' + H("clock", "從海雲台住處出發大概多久", "sky") + '<table class="tbl">' +
      T.travel.map(function (r) { return "<tr><td><b>" + esc(r.to) + "</b></td><td>" + esc(r.time) + "</td></tr>"; }).join("") +
      '</table><p class="muted small">估計值，不含等車和塞車。6 人分 2 台計程車在市區，車資跟地鐵差不多。</p></section>';
    return h;
  }

  // ---------- 景點 ----------
  function areaPills(ids, attr) {
    return '<nav class="pills small">' + ids.map(function (a) {
      return "<a " + attr(a) + ' style="--tone:var(--a-' + a + ')">' + I(AREA_ICON[a]) + esc(areaName(a)) + "</a>";
    }).join("") + "</nav>";
  }
  function areaHead(aid, prefix) {
    return '<div class="areabr"><h2 class="areah" id="' + prefix + aid + '" style="--tone:var(--a-' + aid + ')">' + I(AREA_ICON[aid]) + esc(areaName(aid)) + "</h2></div>";
  }
  function spotsView(target) {
    var h = areaPills(AREA_ORDER, function (a) { return 'href="#spots/area-' + a + '"'; });
    AREA_ORDER.forEach(function (aid) {
      h += areaHead(aid, "area-");
      Object.keys(T.spots).forEach(function (k) {
        var s = T.spots[k]; if (s.area !== aid) return;
        var used = usedOn(k);
        h += '<article class="card spot" id="spot-' + k + '" style="--tone:var(--a-' + aid + ')"><h3>' + esc(s.name) + " <small>" + esc(s.ko) + "</small></h3>" +
          "<p>" + esc(s.intro) + "</p>" + igCards(s) + likeBtn(k) +
          (used.length ? '<p class="muted small">排在：' + used.join("、") + "</p>" : "") + spotLinks(k, false) + "</article>";
      });
    });
    if (target) setTimeout(function () {
      var el = document.getElementById(target.indexOf("area-") === 0 ? target : "spot-" + target);
      if (el) { el.scrollIntoView({ block: "start" }); if (el.classList.contains("spot")) el.classList.add("flash"); }
    }, 30);
    return h;
  }

  // ---------- 備選 ----------
  function altsView() {
    var groups = AREA_ORDER.filter(function (aid) {
      return T.alternatives.some(function (a) { return T.spots[a.spot].area === aid; });
    });
    var h = '<p class="muted">下雨、太累或時間多出來的時候用。</p>' +
      areaPills(groups, function (a) { return 'href="#alts" data-jump="alt-' + a + '"'; });
    groups.forEach(function (aid) {
      h += areaHead(aid, "alt-");
      T.alternatives.filter(function (a) { return T.spots[a.spot].area === aid; }).forEach(function (a) {
        var s = T.spots[a.spot];
        h += '<article class="card alt" style="--tone:var(--a-' + aid + ')"><h3>' + esc(s.name) + "</h3>" +
          '<div class="chips"><span>' + I("clock") + esc(a.length) + "</span><span>" + I("people") + esc(a.people) + "</span>" +
          "<span>" + (a.rain ? I("umbrella") + "下雨 OK" : I("sun") + "晴天較好") + "</span></div>" +
          "<p><b>適合：</b>" + esc(a.best) + '</p><p class="muted">' + esc(s.intro) + "</p>" + likeBtn(a.spot) + spotLinks(a.spot, true) + "</article>";
      });
    });
    return h;
  }

  // ---------- 待辦 ----------
  function todoRow(t) {
    var dl = "";
    if (t.deadline) {
      var n = daysUntil(t.deadline + "T00:00"), soon = n <= 7 && !t.done;
      dl = '<span class="tag ' + (soon ? "warn soon" : "") + '">' + md(t.deadline) + (t.done ? "" : n > 0 ? " · 還有 " + n + " 天" : n === 0 ? " · 今天" : " · 已過") + "</span>";
    }
    return '<div class="todo' + (t.done ? " done" : "") + '"><span class="box">' + (t.done ? "✓" : "") + "</span><div><b>" + esc(t.title) + "</b> " + dl +
      (t.result ? '<p class="note ok">' + esc(t.result) + "</p>" : "") + (t.note ? '<p class="note">' + esc(t.note) + "</p>" : "") + "</div></div>";
  }
  function nextTodos(n) {
    return T.book.filter(function (t) { return !t.done && t.deadline; })
      .sort(function (a, b) { return a.deadline < b.deadline ? -1 : 1; }).slice(0, n);
  }
  function todoView() {
    var book = T.book.slice().sort(function (a, b) {
      if (a.done !== b.done) return a.done ? 1 : -1;
      if (!a.deadline) return 1; if (!b.deadline) return -1;
      return a.deadline < b.deadline ? -1 : 1;
    });
    return '<section class="card has-st">' + H("q", "要大家決定的", "pink") + T.decide.map(todoRow).join("") + "</section>" +
      '<section class="card has-st">' + H("ticket", "要訂、要確認的", "yellow") + book.map(todoRow).join("") + "</section>" +
      '<p class="muted small center">打勾狀態由 Kaya 這邊更新。</p>';
  }

  // ---------- 行前注意事項 ----------
  function prepView() {
    var tones = ["sky", "yellow", "pink", "lilac"];
    return T.prep.map(function (sec, i) {
      return '<section class="card has-st prep">' + H(I.has(sec.icon) ? sec.icon : "bag", sec.title, tones[i % tones.length]) +
        (sec.lead ? "<p>" + esc(sec.lead) + "</p>" : "") +
        (sec.rows ? '<table class="tbl">' + sec.rows.map(function (r) {
          return "<tr><td><b>" + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td></tr>";
        }).join("") + "</table>" : "") +
        (sec.items ? "<ul>" + sec.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>" : "") +
        (sec.links ? '<div class="links">' + sec.links.map(function (l) {
          return '<a class="btn" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
        }).join("") + "</div>" : "") +
        (sec.source ? '<p class="muted small">資料來源：' + sec.source.map(function (l) {
          return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
        }).join("、") + "</p>" : "") + "</section>";
    }).join("");
  }

  // ---------- 醫美 ----------
  function beautyView() {
    var b = T.beauty;
    return '<section class="card has-st beauty">' + H("sparkle", "醫美", "lilac") + '<p><span class="tag warn">' + esc(b.status) + "</span></p>" +
      "<ul>" + b.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" +
      '<p><a href="#days/2027-01-02">看 1/2 行程 →</a></p></section>';
  }

  // ---------- 路由＋切頁動畫 ----------
  var views = { overview: overview, days: daysView, map: mapView, spots: spotsView, alts: altsView, todo: todoView, prep: prepView, beauty: beautyView };
  var prevTab = null, prevDay = -1;
  function center(box, el, smooth) {
    if (!box || !el) return;
    var left = el.getBoundingClientRect().left - box.getBoundingClientRect().left + box.scrollLeft - (box.clientWidth - el.offsetWidth) / 2;
    try { box.scrollTo({ left: left, behavior: smooth ? "smooth" : "auto" }); } catch (e) { box.scrollLeft = left; }
  }
  function route() {
    var parts = (location.hash.slice(1) || "overview").split("/");
    var tab = views[parts[0]] ? parts[0] : "overview";
    var oldPills = app.querySelector(".pills"), keep = oldPills && tab === prevTab ? oldPills.scrollLeft : null;

    // 每日行程換日期：往後往前滑入；其他：卡片依序浮上來
    var anim = "enter";
    if (tab === "days") {
      var idx = dayIndex(parts[1] || defaultDay());
      if (prevTab === "days" && prevDay >= 0 && idx !== prevDay) anim = idx > prevDay ? "slide-next" : "slide-prev";
      prevDay = idx;
    }
    app.className = "";
    app.innerHTML = views[tab](parts[1]);
    void app.offsetWidth;
    app.className = anim;

    var tabs = document.getElementById("tabs");
    tabs.querySelectorAll("a").forEach(function (a) { a.classList.toggle("on", a.dataset.tab === tab); });
    center(tabs, tabs.querySelector(".on"), prevTab !== null);
    var pills = app.querySelector(".pills");
    if (pills && keep !== null) pills.scrollLeft = keep;
    if (pills) center(pills, pills.querySelector(".on"), keep !== null);

    if (!(tab === "spots" && parts[1])) window.scrollTo(0, 0);
    if (window.LIKES) { LIKES.paint(app); paintRank(); }
    prevTab = tab;
  }
  function paintRank() {
    var el = document.getElementById("rank"); if (!el) return;
    if (!LIKES.isLoaded()) { el.innerHTML = '<p class="muted small">載入中…</p>'; return; }
    var r = LIKES.ranking().slice(0, 8);
    el.innerHTML = r.length ? '<ol class="rank">' + r.map(function (x) {
      return '<li><a href="#spots/' + x.spot + '">' + esc(T.spots[x.spot].name) + "</a> " + dots(x.who) + "</li>";
    }).join("") + "</ol>" : '<p class="muted small">還沒有人按愛心。</p>';
  }
  if (window.LIKES) LIKES.onChange(paintRank);
  window.addEventListener("hashchange", route);

  app.addEventListener("click", function (e) {
    var j = e.target.closest("[data-jump]"); if (!j) return;
    e.preventDefault();
    var el = document.getElementById(j.dataset.jump); if (el) el.scrollIntoView({ block: "start", behavior: "smooth" });
  });

  // 每日行程：左右滑換日期，滑到頭會搖一下
  function goDay(step) {
    var next = T.days[prevDay + step];
    if (next) { location.hash = "days/" + next.date; return; }
    var head = app.querySelector(".dayhead"); if (!head) return;
    head.classList.remove("shake"); void head.offsetWidth; head.classList.add("shake");
    buzz(30);
  }
  var sx = null, sy = 0;
  app.addEventListener("touchstart", function (e) {
    sx = null;
    if (prevTab !== "days" || e.touches.length !== 1 || e.target.closest(".pills, .igrow")) return;
    sx = e.touches[0].clientX; sy = e.touches[0].clientY;
  }, { passive: true });
  app.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy; sx = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 2) goDay(dx < 0 ? 1 : -1);
  }, { passive: true });

  // 分頁圖示、頁尾
  document.querySelectorAll("#tabs a").forEach(function (a) { a.innerHTML = I(TAB_ICON[a.dataset.tab]) + "<span>" + a.textContent + "</span>"; });
  document.getElementById("foot").innerHTML =
    '<svg viewBox="0 0 150 14" aria-hidden="true"><path d="M3 11l9-8 9 8 9-8 9 8 9-8 9 8 9-8 9 8 9-8 9 8 9-8 9 8 9-8 9 8 9-8 9 8" fill="none" stroke="#16130f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
    "最後更新 " + esc(T.updated) + "・時間皆為韓國時間";
  route();
})();
