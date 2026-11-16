// 行李清單：每個人勾自己的，存在 Firebase Firestore 的 packing/{人}。
// 別人的只顯示進度（勾了幾項），不顯示勾了哪些。
// 連不上 Firebase（例如規則還沒設好）時，先存在這支手機，連上後會自動補傳。
(function () {
  "use strict";
  var T = window.TRIP, cfg = T.firebase || {}, L = window.LIKES;
  var enabled = !!(cfg.projectId && cfg.apiKey && T.packing);
  var base = enabled ? "https://firestore.googleapis.com/v1/projects/" + cfg.projectId + "/databases/(default)/documents/packing" : "";
  var BASE_IDS = [];
  (T.packing || []).forEach(function (g) { g.items.forEach(function (it) { BASE_IDS.push(it[0]); }); });
  var data = {};            // 人 -> { done: [id], extra: ["x123:文字"] }
  var loaded = false, shared = true, listeners = [], timer = null;

  function me() { return L && L.me ? L.me() : null; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function localKey(who) { return "busan-pack-" + who; }
  function readLocal(who) { try { return JSON.parse(localStorage.getItem(localKey(who)) || "null"); } catch (e) { return null; } }
  function writeLocal(who, d) { try { localStorage.setItem(localKey(who), JSON.stringify(d)); } catch (e) {} }
  function rec(who) { return data[who] = data[who] || { done: [], extra: [] }; }
  function arr(f) { return ((f && f.arrayValue && f.arrayValue.values) || []).map(function (v) { return v.stringValue; }).filter(Boolean); }

  function load() {
    if (!enabled) return Promise.resolve();
    return fetch(base + "?pageSize=50&key=" + cfg.apiKey).then(function (r) {
      if (!r.ok) throw r.status;
      return r.json();
    }).then(function (j) {
      var all = {};
      (j.documents || []).forEach(function (d) {
        var who = d.name.split("/").pop(), f = d.fields || {};
        all[who] = { done: arr(f.done), extra: arr(f.extra), at: f.at && f.at.timestampValue };
      });
      // 自己的：手機上比較新的話用手機上的，並補傳
      var w = me(), loc = w && readLocal(w);
      if (w && loc && (!all[w] || (loc.at || "") > (all[w].at || ""))) { all[w] = loc; if (loc.dirty) save(w); }
      data = all; shared = true;
    }).catch(function () {
      shared = false;
      var w = me(), loc = w && readLocal(w);
      if (w && loc) data[w] = loc;
    }).then(function () { loaded = true; notify(); });
  }
  function notify() { listeners.forEach(function (f) { f(); }); }

  function save(who) {
    var d = rec(who);
    d.at = new Date().toISOString(); d.dirty = true;
    writeLocal(who, d);
    clearTimeout(timer);
    timer = setTimeout(function () {
      function list(a) { return { arrayValue: { values: a.map(function (x) { return { stringValue: x }; }) } }; }
      fetch(base + "/" + who + "?key=" + cfg.apiKey, {
        method: "PATCH", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: { done: list(d.done), extra: list(d.extra), at: { timestampValue: d.at } } })
      }).then(function (r) {
        if (!r.ok) throw r.status;
        d.dirty = false; writeLocal(who, d);
        if (!shared) { shared = true; notify(); }
      }).catch(function () { if (shared) { shared = false; notify(); } });
    }, 500);
  }

  function ids(d) { return BASE_IDS.concat(d.extra.map(function (x) { return x.split(":")[0]; })); }
  function progress(who) {
    var d = data[who] || { done: [], extra: [] }, all = ids(d);
    var n = d.done.filter(function (id) { return all.indexOf(id) >= 0; }).length;
    return { n: n, total: all.length };
  }

  function row(id, text, on, del) {
    return '<label class="pk' + (on ? " on" : "") + '"><input type="checkbox" data-pk="' + esc(id) + '"' + (on ? " checked" : "") + ">" +
      '<span class="pk-box"></span><span class="pk-t">' + esc(text) + "</span>" +
      (del ? '<button class="pk-del" data-pkdel="' + esc(id) + '" aria-label="刪掉這項">✕</button>' : "") + "</label>";
  }

  function html() {
    if (!enabled) return "";
    var w = me();
    var h = '<div class="pk-team">' + T.people.map(function (p) {
      var pr = progress(p.id), pct = pr.total ? Math.round(pr.n / pr.total * 100) : 0;
      return '<div class="pk-pp' + (p.id === w ? " me" : "") + '"><span class="dot" style="--c:var(--p-' + p.id + ')">' + esc(p.name) + "</span>" +
        '<span class="pk-bar"><i style="width:' + pct + "%;--c:var(--p-" + p.id + ')"></i></span><b>' + (loaded ? pr.n + "/" + pr.total : "") + "</b></div>";
    }).join("") + "</div>";
    if (!w) return h + '<button class="btn pk-who" data-pkwho>先選你是誰，再開始打勾</button>';
    var d = rec(w);
    h += '<p class="pk-mine">' + "我的清單</p>";
    T.packing.forEach(function (g) {
      h += '<h3 class="pk-g">' + esc(g.group) + "</h3>" + g.items.map(function (it) { return row(it[0], it[1], d.done.indexOf(it[0]) >= 0); }).join("");
    });
    h += '<h3 class="pk-g">自己加的</h3>' + d.extra.map(function (x) {
      var i = x.indexOf(":"), id = x.slice(0, i);
      return row(id, x.slice(i + 1), d.done.indexOf(id) >= 0, true);
    }).join("") +
      '<form class="pk-add" data-pkadd><input name="t" maxlength="30" placeholder="還要帶什麼？" autocomplete="off"><button class="btn">加入</button></form>';
    if (!shared) h += '<p class="muted small">還沒連上共用資料，先存在這支手機。</p>';
    return h;
  }
  function paint() { var el = document.getElementById("packbox"); if (el) el.innerHTML = html(); }

  document.addEventListener("change", function (e) {
    var id = e.target.dataset && e.target.dataset.pk; if (!id) return;
    var w = me(); if (!w) return;
    var d = rec(w), i = d.done.indexOf(id);
    if (e.target.checked && i < 0) d.done.push(id);
    if (!e.target.checked && i >= 0) d.done.splice(i, 1);
    e.target.parentNode.classList.toggle("on", e.target.checked);
    try { if (e.target.checked && navigator.vibrate) navigator.vibrate(10); } catch (er) {}
    save(w); paintTeam();
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-pkwho]")) { e.preventDefault(); if (L && L.pick) L.pick(); return; }
    var del = e.target.closest("[data-pkdel]"); if (!del) return;
    e.preventDefault();
    var w = me(), d = rec(w), id = del.dataset.pkdel;
    d.extra = d.extra.filter(function (x) { return x.split(":")[0] !== id; });
    d.done = d.done.filter(function (x) { return x !== id; });
    save(w); paint();
  });
  document.addEventListener("submit", function (e) {
    if (!e.target.matches("[data-pkadd]")) return;
    e.preventDefault();
    var w = me(), t = e.target.t.value.replace(/[:\n]/g, " ").trim().slice(0, 30); if (!w || !t) return;
    var d = rec(w); if (d.extra.length >= 30) return;
    d.extra.push("x" + Date.now().toString(36) + ":" + t);
    save(w); paint();
    var inp = document.querySelector(".pk-add input"); if (inp) inp.focus();
  });
  // 只更新上面的進度條，不重畫清單（避免打勾時畫面跳動）
  function paintTeam() {
    var el = document.querySelector("#packbox .pk-team"); if (!el) return;
    var tmp = document.createElement("div"); tmp.innerHTML = html(); el.replaceWith(tmp.querySelector(".pk-team"));
  }

  listeners.push(paint);
  if (L && L.onChange) L.onChange(function () { var el = document.getElementById("packbox"); if (el && !el.contains(document.activeElement)) paint(); });
  window.PACK = { enabled: enabled, paint: paint, load: load };
  if (enabled) load();
})();
