(function () {
  "use strict";
  var T = window.TRIP;
  var app = document.getElementById("app");
  var WEEK = ["日", "一", "二", "三", "四", "五", "六"];
  var AREA_ORDER = ["haeundae", "gwangan", "gijang", "nampo", "seomyeon", "gyeongju"];

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
  function dots(ids, big) {
    return '<span class="dots' + (big ? " big" : "") + '">' + whoList(ids).map(function (id) {
      var p = person(id);
      return '<span class="dot" style="--c:var(--p-' + id + ')" title="' + esc(p.name) + '">' + esc(p.name) + "</span>";
    }).join("") + "</span>";
  }
  function daysUntil(target) {
    return Math.ceil((kst(target) - Date.now()) / 86400000);
  }
  function naver(q) { return "https://map.naver.com/p/search/" + encodeURIComponent(q); }
  function igTag(t) { return "https://www.instagram.com/explore/tags/" + encodeURIComponent(t) + "/"; }
  function spotLinks(id, withIntro) {
    var s = T.spots[id]; if (!s) return "";
    var h = '<div class="links">';
    if (withIntro) h += '<a class="btn" href="#spots/' + id + '">介紹</a>';
    if (s.page) h += '<a class="btn" href="#' + s.page + '">醫美頁</a>';
    h += '<a class="btn ig" href="' + igTag(s.tag) + '" target="_blank" rel="noopener">IG #' + esc(s.tag) + "</a>";
    h += '<a class="btn nv" href="' + naver(s.ko) + '" target="_blank" rel="noopener">Naver 地圖</a>';
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
  function usedOn(id) {
    return T.days.filter(function (d) { return d.items.some(function (it) { return it.spot === id; }); })
      .map(function (d) { return '<a href="#days/' + d.date + '">' + md(d.date) + "</a>"; });
  }
  function staysFor(date) {
    return T.stays.filter(function (s) { return s.nights.indexOf(date) >= 0; });
  }

  // ---------- 總覽 ----------
  function overview() {
    var dStart = daysUntil(T.start), dNye = daysUntil(T.nye);
    var h = '<section class="hero">' +
      '<div class="count"><b>' + (dStart > 0 ? dStart : "出發了") + "</b><span>" + (dStart > 0 ? "天後出發" : "") + "</span></div>" +
      '<div class="count"><b>' + (dNye > 0 ? dNye : "🎉") + "</b><span>" + (dNye > 0 ? "天後跨年" : "新年快樂") + "</span></div>" +
      "</section>";

    var next = nextTodos(2);
    if (next.length) {
      h += '<section class="card"><h2>下一件要做的事</h2>' + next.map(todoRow).join("") +
        '<a class="more" href="#todo">看全部待辦 →</a></section>';
    }

    h += '<section class="card"><h2>誰哪天在</h2>' + presence() + "</section>";

    h += '<section class="card"><h2>航班時間</h2><table class="tbl"><tr><th></th><th>抵達</th><th>起飛</th></tr>' +
      T.people.map(function (p) {
        if (p.tentative) return "<tr><td>" + dots([p.id]) + '</td><td colspan="2" class="muted">' + esc(p.note) + "</td></tr>";
        return "<tr><td>" + dots([p.id]) + "</td><td>" + md(p.arrive.slice(0, 10)) + " " + hm(p.arrive) +
          "</td><td>" + md(p.depart.slice(0, 10)) + " " + hm(p.depart) + "</td></tr>";
      }).join("") + '</table><p class="muted small">都是韓國時間（比台灣快 1 小時）。</p></section>';

    h += '<section class="card"><h2>住哪一區</h2><ul class="stays">' + T.stays.map(function (s) {
      var last = s.nights[s.nights.length - 1];
      var out = new Date(kst(last + "T12:00") .getTime() + 86400000).toISOString().slice(0, 10);
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
      h += '<div class="pres-row"><span class="pres-name" style="color:var(--p-' + p.id + ')">' + esc(p.name) + "</span>" +
        '<div class="pres-track"><div class="pres-bar' + (p.tentative ? " tent" : "") + '" style="--c:var(--p-' + p.id + ");left:" + l + "%;width:" + w + '%">' +
        (p.tentative ? "<span>未定</span>" : "<span>" + hm(p.arrive) + "</span><span>" + hm(p.depart) + "</span>") + "</div></div></div>";
    });
    h += "</div></div>";
    return h + '<p class="legend"><span class="sw ov"></span>' + esc(ol.label) + '　<span class="sw tent"></span>班機未定</p>';
  }

  // ---------- 每日行程 ----------
  function daysView(sel) {
    var today = new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 10);
    if (!sel) sel = T.days.some(function (d) { return d.date === today; }) ? today : T.days[0].date;
    var d = T.days.find(function (x) { return x.date === sel; }) || T.days[0];
    var h = '<nav class="pills">' + T.days.map(function (x) {
      return '<a href="#days/' + x.date + '" class="' + (x.date === d.date ? "on" : "") + '">' + md(x.date) + "<small>" + wd(x.date) + "</small></a>";
    }).join("") + "</nav>";

    h += '<section class="dayhead"><div class="dh-top"><h2>' + md(d.date) + "（" + wd(d.date) + "）</h2>" +
      '<span class="energy" title="' + esc(d.energy.split("").filter(function (c) { return T.energy[c]; }).map(function (c) { return T.energy[c]; }).join("～")) + '">' + d.energy + "</span></div>" +
      "<p>" + esc(d.summary) + "</p>" + dots(d.who, true);
    var st = staysFor(d.date);
    h += '<div class="stay">🏠 今晚住：' + (st.length ? st.map(function (s) {
      return esc(s.area) + (s.who === "all" ? "" : "（" + whoList(s.who).map(function (i) { return person(i).name; }).join("、") + "）") +
        (s.status !== "已訂" ? ' <span class="tag warn">' + esc(s.status) + "</span>" : "");
    }).join("；") : "回家 ✈️") + "</div></section>";

    if (d.choose) h += '<p class="muted center">以下三選一</p>';
    h += '<ol class="tl">' + d.items.map(function (it) {
      var s = it.spot && T.spots[it.spot];
      var cls = ["tl-item"]; if (it.optional) cls.push("opt"); if (it.tbd) cls.push("tbd"); if (it.flight) cls.push("fl");
      var body = '<div class="tl-title">' + (it.flight ? "✈️ " : "") + esc(it.title) +
        (it.ticket ? ' <span class="tag">🎫 Pass/要訂</span>' : "") +
        (it.optional ? ' <span class="tag">可跳過</span>' : "") + (it.tbd ? ' <span class="tag warn">未定</span>' : "") + "</div>";
      if (it.who) body += dots(it.who);
      if (it.note) body += '<p class="note">' + esc(it.note) + "</p>";
      if (s) body += '<details><summary>' + esc(s.name) + "</summary><p>" + esc(s.intro) + "</p>" + igCards(s) + spotLinks(it.spot, true) + "</details>";
      return '<li class="' + cls.join(" ") + '"><span class="tl-time">' + esc(it.time) + '</span><div class="tl-body">' + body + "</div></li>";
    }).join("") + "</ol>";
    if (d.notes) h += '<div class="card warnbox">' + d.notes.map(function (n) { return "⚠️ " + esc(n); }).join("<br>") + "</div>";
    setTimeout(function () {
      var on = document.querySelector(".pills .on"); if (on) on.scrollIntoView({ inline: "center", block: "nearest" });
    });
    return h;
  }

  // ---------- 地圖 ----------
  function mapView() {
    var lodge = { haeundae: "全員 12/30–1/3", gwangan: "林高 12/29", seomyeon: "林高 1/3–1/5" };
    var svg = '<svg viewBox="0 0 400 330" class="map" role="img" aria-label="釜山分區示意圖">' +
      '<rect width="400" height="330" fill="var(--sea)"/>' +
      '<path fill="var(--land)" stroke="var(--line)" stroke-width="2" d="M0,0 L400,0 L400,10 L380,30 L365,80 L352,130 L346,165 L342,186 L315,193 L292,191 L278,212 L258,234 L236,230 L222,244 L200,252 L180,258 L160,270 L136,266 L116,286 L96,280 L76,302 L50,310 L0,320 Z"/>' +
      '<ellipse cx="192" cy="298" rx="28" ry="15" fill="var(--land)" stroke="var(--line)" stroke-width="2"/>' +
      '<text x="192" y="303" class="m-sub" text-anchor="middle">影島</text>' +
      '<path d="M98,0 C90,60 104,110 90,170 C82,220 88,260 86,292" fill="none" stroke="var(--sea)" stroke-width="8"/>' +
      '<text x="104" y="24" class="m-sub">洛東江</text>' +
      '<path d="M170,140 C205,170 230,200 255,205 C285,205 305,180 330,170" fill="none" stroke="#3aa17e" stroke-width="3" stroke-dasharray="6 5"/>' +
            '<path d="M50,150 C90,146 130,142 170,140" fill="none" stroke="#8e5bd8" stroke-width="2" stroke-dasharray="3 4"/>' +
      '<text x="88" y="168" class="m-sub" fill="#8e5bd8" text-anchor="middle">輕軌＋地鐵</text>' +
      '<text x="196" y="200" class="m-sub" fill="#3aa17e">2 號線</text>' +
      '<a href="#spots/gyeongju"><text x="392" y="20" class="m-sub" text-anchor="end">↑ 慶州 約 1 小時</text></a>' +
      '<text x="372" y="270" class="m-sea" text-anchor="middle">海</text>';
    T.areas.forEach(function (a) {
      if (a.offmap) return;
      var href = a.id === "airport" ? "#map" : "#spots/area-" + a.id;
      svg += '<a href="' + href + '"><circle cx="' + a.x + '" cy="' + a.y + '" r="9" class="m-pt"/>' +
        '<text x="' + a.x + '" y="' + (a.y - 15) + '" class="m-lb" text-anchor="middle">' + esc(a.mapName || a.name) + "</text>" +
        (lodge[a.id] ? '<text x="' + a.x + '" y="' + (a.y + (a.id === "haeundae" ? -38 : 25)) + '" class="m-lodge" text-anchor="middle">🏠 ' + lodge[a.id] + "</text>" : "") + "</a>";
    });
    svg += "</svg>";

    var h = '<section class="card"><h2>釜山分區示意圖</h2>' + svg +
      '<p class="muted small">這是手畫的示意圖，位置和比例都是大概的。導航請點景點裡的 Naver 地圖。點區域可以看那一區的景點。</p></section>';

    h += '<section class="card"><h2>各區有什麼</h2>' + AREA_ORDER.map(function (aid) {
      var list = Object.keys(T.spots).filter(function (k) { return T.spots[k].area === aid; });
      return '<div class="arearow"><b><a href="#spots/area-' + aid + '">' + esc(areaName(aid)) + "</a></b><span>" +
        list.map(function (k) { return '<a href="#spots/' + k + '">' + esc(T.spots[k].name) + "</a>"; }).join("、") + "</span></div>";
    }).join("") + "</section>";

    h += '<section class="card"><h2>從海雲台住處出發大概多久</h2><table class="tbl">' +
      T.travel.map(function (r) { return "<tr><td>" + esc(r.to) + "</td><td>" + esc(r.time) + "</td></tr>"; }).join("") +
      '</table><p class="muted small">估計值，不含等車和塞車。6 人分 2 台計程車在市區，車資跟地鐵差不多。</p></section>';
    return h;
  }

  // ---------- 景點 ----------
  function spotsView(target) {
    var h = '<nav class="pills small">' + AREA_ORDER.map(function (a) {
      return '<a href="#spots/area-' + a + '">' + esc(areaName(a)) + "</a>";
    }).join("") + "</nav>";
    AREA_ORDER.forEach(function (aid) {
      h += '<h2 class="areah" id="area-' + aid + '">' + esc(areaName(aid)) + "</h2>";
      Object.keys(T.spots).forEach(function (k) {
        var s = T.spots[k]; if (s.area !== aid) return;
        var used = usedOn(k);
        h += '<article class="card spot" id="spot-' + k + '"><h3>' + esc(s.name) + ' <small>' + esc(s.ko) + "</small></h3>" +
          "<p>" + esc(s.intro) + "</p>" + igCards(s) +
          (used.length ? '<p class="muted small">排在：' + used.join("、") + "</p>" : "") + spotLinks(k, false) + "</article>";
      });
    });
    if (target) setTimeout(function () {
      var el = document.getElementById(target.indexOf("area-") === 0 ? target : "spot-" + target);
      if (el) { el.scrollIntoView({ block: "start" }); window.scrollBy(0, -110); el.classList.add("flash"); }
    }, 30);
    return h;
  }

  // ---------- 備選 ----------
  function altsView() {
    return '<p class="muted">下雨、太累或時間多出來的時候用。</p>' + T.alternatives.map(function (a) {
      var s = T.spots[a.spot];
      return '<article class="card alt"><h3>' + esc(s.name) + "</h3>" +
        '<div class="chips"><span>⏱ ' + esc(a.length) + "</span><span>👥 " + esc(a.people) + "</span>" +
        "<span>" + (a.rain ? "☔ 下雨 OK" : "🌤 晴天較好") + "</span></div>" +
        '<p><b>適合：</b>' + esc(a.best) + '</p><p class="muted">' + esc(s.intro) + "</p>" + spotLinks(a.spot, true) + "</article>";
    }).join("");
  }

  // ---------- 待辦 ----------
  function todoRow(t) {
    var dl = "";
    if (t.deadline) {
      var n = daysUntil(t.deadline + "T00:00");
      dl = '<span class="tag ' + (n <= 7 && !t.done ? "warn" : "") + '">' + md(t.deadline) + (t.done ? "" : n > 0 ? " · 還有 " + n + " 天" : n === 0 ? " · 今天" : " · 已過") + "</span>";
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
    return '<section class="card"><h2>要大家決定的</h2>' + T.decide.map(todoRow).join("") + "</section>" +
      '<section class="card"><h2>要訂、要確認的</h2>' + book.map(todoRow).join("") + "</section>" +
      '<p class="muted small center">打勾狀態由 Kaya 這邊更新。</p>';
  }

  // ---------- 醫美 ----------
  function beautyView() {
    var b = T.beauty;
    return '<section class="card"><h2>醫美</h2><p class="tag warn">' + esc(b.status) + "</p>" +
      "<ul>" + b.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" +
      '<p><a href="#days/2027-01-02">看 1/2 行程 →</a></p></section>';
  }

  // ---------- 路由 ----------
  var views = { overview: overview, days: daysView, map: mapView, spots: spotsView, alts: altsView, todo: todoView, beauty: beautyView };
  function route() {
    var parts = (location.hash.slice(1) || "overview").split("/");
    var tab = views[parts[0]] ? parts[0] : "overview";
    app.innerHTML = views[tab](parts[1]);
    document.querySelectorAll("#tabs a").forEach(function (a) { a.classList.toggle("on", a.dataset.tab === tab); });
    var on = document.querySelector("#tabs .on"); if (on) on.scrollIntoView({ inline: "center", block: "nearest" });
    if (!(tab === "spots" && parts[1])) window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  document.getElementById("foot").textContent = "最後更新 " + T.updated + "・時間皆為韓國時間";
  route();
})();
