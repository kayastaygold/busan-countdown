// Memphis 風格的小圖示（自己畫的 SVG）。用法：ICON("heart")
// class f = 主色（跟著 --ic 變）、w = 白、k = 黑色實心
(function () {
  "use strict";
  var P = {
    home: '<path class="f" d="M3 11.5 12 3.5l9 8V21H3z"/><path class="w" d="M9.5 21v-6h5v6"/>',
    cal: '<rect class="f" x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/><rect class="k" x="7" y="13" width="3.5" height="3.5" rx=".6"/>',
    pin: '<path class="f" d="M12 22s7-7.5 7-13A7 7 0 0 0 5 9c0 5.5 7 13 7 13z"/><circle class="w" cx="12" cy="9" r="2.6"/>',
    star: '<path class="f" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/>',
    dice: '<rect class="f" x="3.5" y="3.5" width="17" height="17" rx="4"/><circle class="k" cx="8.5" cy="8.5" r="1.4"/><circle class="k" cx="15.5" cy="15.5" r="1.4"/><circle class="k" cx="12" cy="12" r="1.4"/>',
    check: '<rect class="f" x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M7.5 12.5l3 3 6-7" stroke-width="2.4"/>',
    bag: '<rect class="f" x="3" y="8" width="18" height="12.5" rx="2.5"/><path d="M9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8M3 13.5h18"/>',
    sparkle: '<path class="f" d="M11 3c.7 5 3 7.3 8 8-5 .7-7.3 3-8 8-.7-5-3-7.3-8-8 5-.7 7.3-3 8-8z"/><path class="w" d="M19 2c.2 1.6.9 2.3 2.5 2.5-1.6.2-2.3.9-2.5 2.5-.2-1.6-.9-2.3-2.5-2.5 1.6-.2 2.3-.9 2.5-2.5z"/>',
    heart: '<path class="f" d="M12 20.5C5.5 15.5 3 12 3 8.7A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 9 1.7c0 3.3-2.5 6.8-9 11.8z"/>',
    plane: '<path class="f" d="M2.5 11.5 21.5 3l-5 18-4.5-7z"/><path d="M12 14l9.5-11"/>',
    ticket: '<path class="f" d="M3 7h18v3.2a1.8 1.8 0 0 0 0 3.6V17H3v-3.2a1.8 1.8 0 0 0 0-3.6z"/><path d="M9.5 7.5v9" stroke-dasharray="1.5 2.5"/>',
    clock: '<circle class="f" cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    people: '<circle class="w" cx="17" cy="9" r="2.8"/><path class="w" d="M13.5 20.5c0-4.5 1.5-6.9 3.5-6.9 3 0 4.5 2.4 4.5 6.9z"/><circle class="f" cx="9" cy="7.5" r="3.5"/><path class="f" d="M2.5 20.5c0-4.5 2.8-7 6.5-7s6.5 2.5 6.5 7z"/>',
    umbrella: '<path class="f" d="M3 12.5a9 9 0 0 1 18 0z"/><path d="M12 12.5V19a2 2 0 0 1-4 0M12 3.5V2.5"/>',
    sun: '<circle class="f" cx="12" cy="12" r="4.5"/><path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3 7 7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7"/>',
    wave: '<circle cx="17.5" cy="6" r="3" fill="#FFD534"/><path class="f" d="M2 14c2.5-4 5-4 7.5 0s5 4 7.5 0c1.5-2.4 3.3-3 5-2v9.5H2z"/>',
    bridge: '<path d="M2 14.5 7 5.5q5 10 10 0l5 9"/><path d="M7 5v15M17 5v15"/><rect class="f" x="2" y="14.5" width="20" height="3.5" rx="1"/>',
    temple: '<path class="f" d="M2 11q5-1.5 10-7.5 5 6 10 7.5-10 2-20 0z"/><rect class="w" x="6" y="12.2" width="12" height="8.3"/><path d="M10.5 20.5V16h3v4.5M3.5 20.5h17"/>',
    fish: '<path class="f" d="M2.5 12c3.5-6 10.5-6 14.5 0-4 6-11 6-14.5 0z"/><path class="f" d="M17 12l4.5-4.5v9z"/><circle class="k" cx="7" cy="11" r="1.1"/>',
    shop: '<path class="f" d="M5 8.5h14l1.5 12h-17z"/><path d="M9 11V7a3 3 0 0 1 6 0v4"/>',
    hill: '<path class="w" d="M9 19.5c2-7 9-8 13 0z"/><path class="f" d="M2 19.5c2.5-11 10-11 13 0z"/><path d="M1.5 19.5h21"/>',
    won: '<circle class="f" cx="12" cy="12" r="9.5"/><path d="M7 8l2.2 8 2.8-8 2.8 8L17 8M6 11.5h12"/>',
    thermo: '<path class="w" d="M9.5 5a2.5 2.5 0 0 1 5 0v8.5a5 5 0 1 1-5 0z"/><circle cx="12" cy="17.5" r="2.5" fill="#FF6B5A"/><path d="M12 9v6"/>',
    taxi: '<path class="f" d="M2.5 17.5V13L5 7.5h14l2.5 5.5v4.5z"/><rect class="w" x="9.5" y="4" width="5" height="3.5" rx=".8"/><path d="M5 12.5h14"/><circle class="k" cx="7" cy="17.8" r="2"/><circle class="k" cx="17" cy="17.8" r="2"/>',
    bolt: '<path class="f" d="M13.5 2 4.5 13.5h6L9 22l10-12.5h-6.5z"/>',
    q: '<circle class="f" cx="12" cy="12" r="9.5"/><path d="M9 9.5a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4" stroke-width="2.2"/><circle class="k" cx="12" cy="17.5" r="1.2"/>',
    warn: '<path class="f" d="M12 3 22 20.5H2z"/><path d="M12 9.5v5" stroke-width="2.2"/><circle class="k" cx="12" cy="17.3" r="1.1"/>',
    next: '<path d="M5 12h14M13 6l6 6-6 6" stroke-width="2.4"/>',
    prev: '<path d="M19 12H5M11 6l-6 6 6 6" stroke-width="2.4"/>',
    ig: '<rect class="f" x="3.5" y="3.5" width="17" height="17" rx="5"/><circle class="w" cx="12" cy="12" r="4"/><circle class="k" cx="17" cy="7" r="1.1"/>'
  };
  // 一般用：<svg class="ic">；放在別的 SVG 裡面用 ICON.inner(name, x, y, size)
  function ICON(name) {
    return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + (P[name] || "") + "</svg>";
  }
  ICON.inner = function (name, x, y, size) {
    return '<svg class="ic-in" x="' + x + '" y="' + y + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24">' + (P[name] || "") + "</svg>";
  };
  ICON.has = function (name) { return !!P[name]; };
  window.ICON = ICON;
})();
