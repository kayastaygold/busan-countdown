// 愛心按鈕：每個人可以對景點按愛心，資料存在 Firebase Firestore。
// data.js 的 firebase 設定沒填的話，這個功能不會出現。
(function () {
  "use strict";
  var T = window.TRIP, cfg = T.firebase || {};
  var enabled = !!(cfg.projectId && cfg.apiKey);
  var base = enabled ? "https://firestore.googleapis.com/v1/projects/" + cfg.projectId +
    "/databases/(default)/documents/likes" : "";
  var likes = {};   // spotId -> [personId]
  var loaded = false, listeners = [];
  var ME_KEY = "busan-me";

  function me() { try { return localStorage.getItem(ME_KEY); } catch (e) { return null; } }
  function setMe(id) { try { localStorage.setItem(ME_KEY, id); } catch (e) {} }

  function load() {
    if (!enabled) return Promise.resolve();
    var all = {}, url = base + "?pageSize=300&key=" + cfg.apiKey;
    function page(token) {
      return fetch(url + (token ? "&pageToken=" + token : "")).then(function (r) { return r.json(); }).then(function (j) {
        (j.documents || []).forEach(function (d) {
          var id = d.name.split("/").pop(), p = id.split("__");
          if (p.length === 2) (all[p[0]] = all[p[0]] || []).push(p[1]);
        });
        if (j.nextPageToken) return page(j.nextPageToken);
      });
    }
    return page().then(function () { likes = all; loaded = true; notify(); }).catch(function () {});
  }
  function notify() { listeners.forEach(function (f) { f(); }); }

  function toggle(spot) {
    var who = me(); if (!who) return pick(function () { toggle(spot); });
    var list = likes[spot] = likes[spot] || [];
    var on = list.indexOf(who) >= 0;
    var docUrl = base + "/" + spot + "__" + who + "?key=" + cfg.apiKey;
    if (on) list.splice(list.indexOf(who), 1); else list.push(who);
    popSpot = on ? null : spot;
    try { if (navigator.vibrate) navigator.vibrate(on ? 8 : [12, 40, 18]); } catch (e) {}   // 手機震一下（iPhone 不支援）
    notify();
    popSpot = null;
    fetch(docUrl, on ? { method: "DELETE" } : {
      method: "PATCH", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields: { spot: { stringValue: spot }, who: { stringValue: who }, at: { timestampValue: new Date().toISOString() } } })
    }).then(function (r) { if (!r.ok) throw 0; }).catch(function () { alert("沒有存到，請稍後再試"); load(); });
  }

  function pick(then) {
    var box = document.createElement("div");
    box.className = "picker";
    box.innerHTML = '<div class="picker-card"><h2>你是誰？</h2><p class="muted small">選一次就會記住，之後按愛心都算你的。</p><div class="picker-row">' +
      T.people.map(function (p) {
        return '<button data-id="' + p.id + '" style="--c:var(--p-' + p.id + ')">' + p.name + "</button>";
      }).join("") + '</div><button class="picker-x">取消</button></div>';
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b && e.target !== box) return;
      document.body.removeChild(box);
      if (b && b.dataset.id) { setMe(b.dataset.id); notify(); if (then) then(); }
    });
    document.body.appendChild(box);
  }

  function name(id) { var p = T.people.find(function (x) { return x.id === id; }); return p ? p.name : id; }

  // 給 app.js 用的 HTML
  function button(spot) {
    if (!enabled) return "";
    return '<span class="like" data-like="' + spot + '"></span>';
  }
  var popSpot = null;   // 剛按下愛心的景點：播一次彈跳＋彩色碎片
  var BURST = ["var(--hot)", "var(--yellow)", "var(--blue)", "var(--purple)", "var(--teal)", "var(--pink)"];
  function paint(root) {
    (root || document).querySelectorAll("[data-like]").forEach(function (el) {
      var spot = el.dataset.like, list = likes[spot] || [], mine = list.indexOf(me()) >= 0, pop = mine && popSpot === spot;
      el.innerHTML = '<button class="like-btn' + (mine ? " on" : "") + (pop ? " pop" : "") + '" aria-pressed="' + mine + '" aria-label="想去">' +
        window.ICON("heart") + "<span>" + (loaded ? list.length : "") + "</span>" +
        (pop ? '<span class="burst">' + BURST.map(function (c, i) { return '<i style="--a:' + (i * 60 + 15) + "deg;--c:" + c + '"></i>'; }).join("") + "</span>" : "") +
        "</button>" +
        '<span class="like-who">' + list.map(function (id) {
          return '<span class="dot" style="--c:var(--p-' + id + ')">' + name(id) + "</span>";
        }).join("") + "</span>";
    });
    var w = document.getElementById("whoami");
    if (w) w.hidden = false;
    if (w) w.textContent = me() ? "我是 " + name(me()) : "我是誰？";
  }
  function ranking() {
    return Object.keys(likes).map(function (k) { return { spot: k, n: likes[k].length, who: likes[k] }; })
      .filter(function (x) { return x.n > 0 && T.spots[x.spot]; })
      .sort(function (a, b) { return b.n - a.n; });
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".like-btn"); if (b) { e.preventDefault(); toggle(b.parentNode.dataset.like); }
    if (e.target.id === "whoami") { e.preventDefault(); pick(); }
  });
  listeners.push(function () { paint(); });

  window.LIKES = { enabled: enabled, button: button, paint: paint, ranking: ranking, load: load,
    onChange: function (f) { listeners.push(f); }, isLoaded: function () { return loaded; } };
  if (enabled) { load(); setInterval(load, 60000); }
})();
