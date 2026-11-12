// Memphis 風格的小圖示（自己畫的 SVG）。用法：ICON("heart")
// class f = 主色（跟著 --ic 變）、w = 白、k = 黑色實心
(function () {
  "use strict";
  var P = {
    home: '<path class="f" d="M3 11.5 12 3.5l9 8V21H3z"/><path class="w" d="M9.5 21v-6h5v6"/>',
    cal: '<rect class="f" x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/><rect class="k" x="7" y="13" width="3.5" height="3.5" rx=".6"/>',
    pin: '<path class="f" d="M12 22s7-7.5 7-13A7 7 0 0 0 5 9c0 5.500 7 13 7 13z"/><circle class="w" cx="12" cy="9" r="2.600"/>',
    star: '<path class="f" d="M12 2.500l2.900 6 6.600.900-4.800 4.600 1.200 6.500L12 17.400 6.100 20.500l1.200-6.500L2.500 9.400l6.600-.900z"/>',
    dice: '<rect class="f" x="3.500" y="3.500" width="17" height="17" rx="4"/><circle class="k" cx="8.500" cy="8.500" r="1.400"/><circle class="k" cx="15.500" cy="15.500" r="1.400"/><circle class="k" cx="12" cy="12" r="1.400"/>',
    check: '<rect class="f" x="3.500" y="3.500" width="17" height="17" rx="4"/><path d="M7.500 12.500l3 3 6-7" stroke-width="2.400"/>',
    bag: '<rect class="f" x="3" y="8" width="18" height="12.500" rx="2.500"/><path d="M9 8V5.500A1.500 1.500 0 0 1 10.500 4h3A1.500 1.500 0 0 1 15 5.500V8M3 13.500h18"/>',
    sparkle: '<path class="f" d="M11 3c.700 5 3 7.300 8 8-5 .700-7.300 3-8 8-.700-5-3-7.300-8-8 5-.700 7.300-3 8-8z"/><path class="w" d="M19 2c.200 1.600.900 2.300 2.500 2.500-1.600.200-2.300.900-2.500 2.500-.200-1.600-.900-2.300-2.500-2.500 1.600-.200 2.300-.900 2.500-2.500z"/>',
    heart: '<path class="f" d="M12 20.500C5.500 15.500 3 12 3 8.700A4.600 4.600 0 0 1 12 7a4.600 4.600 0 0 1 9 1.700c0 3.300-2.500 6.800-9 11.800z"/>',
    plane: '<path class="f" d="M2.500 11.500 21.500 3l-5 18-4.500-7z"/><path d="M12 14l9.500-11"/>',
    ticket: '<path class="f" d="M3 7h18v3.200a1.800 1.800 0 0 0 0 3.600V17H3v-3.200a1.800 1.800 0 0 0 0-3.600z"/><path d="M9.500 7.500v9" stroke-dasharray="1.500 2.500"/>',
    clock: '<circle class="f" cx="12" cy="12" r="9"/><path d="M12 7v5l3.500 2"/>',
    people: '<circle class="w" cx="17" cy="9" r="2.800"/><path class="w" d="M13.500 20.500c0-4.500 1.500-6.900 3.500-6.900 3 0 4.500 2.400 4.500 6.900z"/><circle class="f" cx="9" cy="7.500" r="3.500"/><path class="f" d="M2.500 20.500c0-4.500 2.800-7 6.500-7s6.500 2.500 6.500 7z"/>',
    umbrella: '<path class="f" d="M3 12.500a9 9 0 0 1 18 0z"/><path d="M12 12.500V19a2 2 0 0 1-4 0M12 3.500V2.500"/>',
    sun: '<circle class="f" cx="12" cy="12" r="4.500"/><path d="M12 2.500V5M12 19v2.500M2.500 12H5M19 12h2.500M5.300 5.300 7 7M17 17l1.700 1.700M18.700 5.300 17 7M7 17l-1.700 1.700"/>',
    wave: '<circle cx="17.500" cy="6" r="3" fill="#FFD534"/><path class="f" d="M2 14c2.500-4 5-4 7.500 0s5 4 7.500 0c1.500-2.400 3.300-3 5-2v9.500H2z"/>',
    bridge: '<path d="M2 14.500 7 5.500q5 10 10 0l5 9"/><path d="M7 5v15M17 5v15"/><rect class="f" x="2" y="14.500" width="20" height="3.500" rx="1"/>',
    temple: '<path class="f" d="M2 11q5-1.500 10-7.500 5 6 10 7.500-10 2-20 0z"/><rect class="w" x="6" y="12.200" width="12" height="8.300"/><path d="M10.500 20.500V16h3v4.500M3.500 20.500h17"/>',
    fish: '<path class="f" d="M2.500 12c3.500-6 10.500-6 14.500 0-4 6-11 6-14.500 0z"/><path class="f" d="M17 12l4.500-4.500v9z"/><circle class="k" cx="7" cy="11" r="1.100"/>',
    shop: '<path class="f" d="M5 8.500h14l1.500 12h-17z"/><path d="M9 11V7a3 3 0 0 1 6 0v4"/>',
    hill: '<path class="w" d="M9 19.500c2-7 9-8 13 0z"/><path class="f" d="M2 19.500c2.500-11 10-11 13 0z"/><path d="M1.500 19.500h21"/>',
    won: '<circle class="f" cx="12" cy="12" r="9.500"/><path d="M7 8l2.200 8 2.800-8 2.800 8L17 8M6 11.500h12"/>',
    thermo: '<path class="w" d="M9.500 5a2.500 2.500 0 0 1 5 0v8.500a5 5 0 1 1-5 0z"/><circle cx="12" cy="17.500" r="2.500" fill="#FF6B5A"/><path d="M12 9v6"/>',
    taxi: '<path class="f" d="M2.500 17.500V13L5 7.500h14l2.500 5.500v4.500z"/><rect class="w" x="9.500" y="4" width="5" height="3.500" rx=".8"/><path d="M5 12.500h14"/><circle class="k" cx="7" cy="17.800" r="2"/><circle class="k" cx="17" cy="17.800" r="2"/>',
    bolt: '<path class="f" d="M13.500 2 4.500 13.500h6L9 22l10-12.500h-6.500z"/>',
    q: '<circle class="f" cx="12" cy="12" r="9.500"/><path d="M9 9.500a3 3 0 1 1 4.500 2.600c-1 .600-1.500 1.200-1.500 2.400" stroke-width="2.200"/><circle class="k" cx="12" cy="17.500" r="1.200"/>',
    warn: '<path class="f" d="M12 3 22 20.500H2z"/><path d="M12 9.500v5" stroke-width="2.200"/><circle class="k" cx="12" cy="17.300" r="1.100"/>',
    next: '<path d="M5 12h14M13 6l6 6-6 6" stroke-width="2.400"/>',
    prev: '<path d="M19 12H5M11 6l-6 6 6 6" stroke-width="2.400"/>',
    ig: '<rect class="f" x="3.500" y="3.500" width="17" height="17" rx="5"/><circle class="w" cx="12" cy="12" r="4"/><circle class="k" cx="17" cy="7" r="1.100"/>'
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
