// Ceremony illustrations, 64×64, full colour (flat, bold shapes so they read clearly at small sizes).
(function () {
  var G = '#F2CF6E'; // gold
  var GD = '#C99A3A'; // gold shade
  var GX = '#9E7224'; // gold deep
  var IV = '#FFF7E6'; // ivory
  var IVD = '#EADCC0'; // ivory shade
  var RED = '#D62839';
  var REDD = '#A11D2B';
  var SAF = '#F4A23C';
  var FL1 = '#FF8A1F'; // flame outer
  var FL2 = '#FFD45C'; // flame inner
  var GR = '#3FA45E';
  var GRD = '#2A7A44';
  var BR = '#9B5A2E';
  var ROSE = '#E85D8A';
  var SKIN = '#E3A878';

  function star(cx, cy, r, c) {
    var k = r * 0.32;
    return '<path fill="' + c + '" d="M' + cx + ' ' + (cy - r) + ' L' + (cx + k) + ' ' + (cy - k) + ' L' + (cx + r) + ' ' + cy + ' L' + (cx + k) + ' ' + (cy + k) +
      ' L' + cx + ' ' + (cy + r) + ' L' + (cx - k) + ' ' + (cy + k) + ' L' + (cx - r) + ' ' + cy + ' L' + (cx - k) + ' ' + (cy - k) + ' Z"/>';
  }
  function marigold(cx, cy, r) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + SAF + '"/><circle cx="' + cx + '" cy="' + cy + '" r="' + r * 0.5 + '" fill="' + FL2 + '"/>';
  }
  function flame(cx, base, h, w) {
    return (
      '<path fill="' + FL1 + '" d="M' + cx + ' ' + base + ' C ' + (cx - w) + ' ' + (base - h * 0.3) + ' ' + (cx - w * 0.5) + ' ' + (base - h * 0.75) + ' ' + cx + ' ' + (base - h) +
      ' C ' + (cx + w * 0.5) + ' ' + (base - h * 0.75) + ' ' + (cx + w) + ' ' + (base - h * 0.3) + ' ' + cx + ' ' + base + ' Z"/>' +
      '<path fill="' + FL2 + '" d="M' + cx + ' ' + base + ' C ' + (cx - w * 0.5) + ' ' + (base - h * 0.25) + ' ' + (cx - w * 0.25) + ' ' + (base - h * 0.55) + ' ' + cx + ' ' + (base - h * 0.7) +
      ' C ' + (cx + w * 0.25) + ' ' + (base - h * 0.55) + ' ' + (cx + w * 0.5) + ' ' + (base - h * 0.25) + ' ' + cx + ' ' + base + ' Z"/>'
    );
  }

  window.INVITE_ICONS = {
    // माता पूजन — kalash with coconut, mango leaves, mauli and swastik
    kalash:
      '<path fill="' + GRD + '" d="M32 24 C 24 19 15 19 8 13 C 17 10 28 14 32 24 Z"/>' +
      '<path fill="' + GRD + '" d="M32 24 C 40 19 49 19 56 13 C 47 10 36 14 32 24 Z"/>' +
      '<path fill="' + GR + '" d="M32 24 C 26 18 23 11 23 4 C 29 8 33 15 32 24 Z"/>' +
      '<path fill="' + GR + '" d="M32 24 C 38 18 41 11 41 4 C 35 8 31 15 32 24 Z"/>' +
      '<ellipse cx="32" cy="19" rx="7.5" ry="8.5" fill="' + BR + '"/>' +
      '<path fill="#C47A43" d="M27 15 C 29 12 35 12 37 15 C 34 14 30 14 27 15 Z"/>' +
      '<ellipse cx="29" cy="20" rx="1.6" ry="3" fill="#B56B39"/>' +
      '<path fill="' + GD + '" d="M23 26 H41 L39 31 H25 Z"/>' +
      '<ellipse cx="32" cy="26" rx="10" ry="2.6" fill="' + G + '"/>' +
      '<path fill="' + G + '" d="M25 31 C 13 35 12 51 20 56 C 26 59.5 38 59.5 44 56 C 52 51 51 35 39 31 Z"/>' +
      '<path fill="' + GD + '" d="M39 31 C 51 35 52 51 44 56 C 41 58 37 59 33 59.3 C 43 53 45 41 39 31 Z"/>' +
      '<path fill="' + RED + '" d="M16.5 40 C 26 43.5 38 43.5 47.5 40 L 47.8 43.6 C 38 47 26 47 16.2 43.6 Z"/>' +
      '<g stroke="' + RED + '" stroke-width="1.8" stroke-linecap="round" fill="none"><path d="M28.5 51 H35.5 M32 47.5 V54.5 M28.5 51 V48 M35.5 51 V54 M32 47.5 H35 M32 54.5 H29"/></g>' +
      '<ellipse cx="24" cy="38" rx="2" ry="4" fill="#FFF3C9" opacity="0.6"/>',

    // सत्यनारायण कथा / माता की चौकी — aarti thali with diya, kumkum, haldi and marigolds
    diya:
      '<circle cx="32" cy="27" r="13" fill="' + FL2 + '" opacity="0.22"/>' +
      '<ellipse cx="32" cy="47" rx="27" ry="10" fill="' + GD + '"/>' +
      '<ellipse cx="32" cy="45.5" rx="27" ry="9.5" fill="' + G + '"/>' +
      '<ellipse cx="32" cy="45.5" rx="21" ry="6.6" fill="' + GD + '"/>' +
      marigold(10.5, 45, 3.6) + marigold(53.5, 45, 3.6) + marigold(17, 51, 3.2) + marigold(47, 51, 3.2) +
      '<ellipse cx="20" cy="43.5" rx="4" ry="2" fill="' + RED + '"/>' +
      '<ellipse cx="44" cy="43.5" rx="4" ry="2" fill="#F6C02E"/>' +
      '<path fill="' + GX + '" d="M22 40 C 24 48.5 40 48.5 42 40 Z"/>' +
      '<path fill="' + G + '" d="M22 40 C 24 46 40 46 42 40 Z"/>' +
      '<ellipse cx="32" cy="40" rx="10" ry="2.2" fill="' + GX + '"/>' +
      flame(32, 40, 26, 7.5),

    // मण्डपाच्छादन — mandap with banana pillars, canopy, toran and sacred fire
    mandap:
      '<circle cx="32" cy="5" r="2.6" fill="' + G + '"/>' +
      '<path fill="' + RED + '" d="M7 23 C 13 13 22 9.5 32 9.5 C 42 9.5 51 13 57 23 Z"/>' +
      '<path fill="#EF4B5C" d="M22 22 C 23 15 27 11 32 10 C 30 13 29 17 29 22 Z"/>' +
      '<path fill="' + G + '" d="M6 22 H58 V26.5 H6 Z"/>' +
      marigold(13, 29.5, 2.4) + marigold(20, 30.5, 2.4) + marigold(27, 31, 2.4) + marigold(37, 31, 2.4) + marigold(44, 30.5, 2.4) + marigold(51, 29.5, 2.4) +
      '<rect x="9.5" y="26" width="5.5" height="31" rx="1.5" fill="' + GRD + '"/>' +
      '<rect x="49" y="26" width="5.5" height="31" rx="1.5" fill="' + GRD + '"/>' +
      '<path fill="' + GR + '" d="M12 30 C 4 31 1.5 38 2.5 46 C 7 41 10.5 36 12 30 Z"/>' +
      '<path fill="' + GR + '" d="M52 30 C 60 31 62.5 38 61.5 46 C 57 41 53.5 36 52 30 Z"/>' +
      '<path fill="#B8642A" d="M25 56 H39 L37 50 H27 Z"/>' +
      flame(32, 50.5, 13, 5) +
      '<rect x="5" y="56.5" width="54" height="3.5" rx="1" fill="' + GD + '"/>',

    // मामेरा — gift thaal with folded sarees, bangles and wrapped coconut
    mamera:
      '<ellipse cx="32" cy="51" rx="28" ry="8.5" fill="' + GD + '"/>' +
      '<ellipse cx="32" cy="49.5" rx="28" ry="8" fill="' + G + '"/>' +
      '<ellipse cx="32" cy="49.5" rx="22" ry="5.5" fill="' + GD + '"/>' +
      '<rect x="16" y="31" width="32" height="15" rx="2" fill="#C2185B"/>' +
      '<rect x="16" y="41.5" width="32" height="3" fill="' + G + '"/>' +
      '<rect x="16" y="33" width="32" height="1.6" fill="' + G + '"/>' +
      '<rect x="19" y="23" width="26" height="9" rx="2" fill="' + SAF + '"/>' +
      '<rect x="19" y="29" width="26" height="1.8" fill="' + G + '"/>' +
      '<path fill="' + RED + '" d="M32 23 C 26 14 19 17 24.5 23 Z"/>' +
      '<path fill="' + RED + '" d="M32 23 C 38 14 45 17 39.5 23 Z"/>' +
      '<circle cx="32" cy="23" r="2.6" fill="' + G + '"/>' +
      '<circle cx="9" cy="42" r="5.2" fill="none" stroke="' + RED + '" stroke-width="2.2"/>' +
      '<circle cx="11.5" cy="44" r="5.2" fill="none" stroke="' + G + '" stroke-width="2.2"/>' +
      '<circle cx="54" cy="41" r="5.5" fill="' + BR + '"/>' +
      '<path fill="' + RED + '" d="M48.5 41 C 50 46 58 46 59.5 41 C 57 43 51 43 48.5 41 Z"/>',

    // कार्निवाल एवं संगीत — dholak, music notes and festive balloons
    dholak:
      '<path d="M10 4 C 13 9 9 13 12 18" stroke="' + IV + '" stroke-width="0.9" fill="none"/>' +
      '<ellipse cx="10" cy="4" rx="4.2" ry="5" fill="' + ROSE + '"/>' +
      '<path d="M18 7 C 20 11 16 15 19 19" stroke="' + IV + '" stroke-width="0.9" fill="none"/>' +
      '<ellipse cx="18" cy="7" rx="3.6" ry="4.4" fill="#4FC3C9"/>' +
      '<path fill="' + BR + '" d="M11 31 C 20 26.5 44 26.5 53 31 V 48 C 44 52.5 20 52.5 11 48 Z"/>' +
      '<path fill="#B56B39" d="M11 31 C 20 26.5 44 26.5 53 31 V 36 C 44 31.5 20 31.5 11 36 Z"/>' +
      '<rect x="14" y="29.5" width="3.5" height="20.5" fill="' + RED + '"/>' +
      '<rect x="46.5" y="29.5" width="3.5" height="20.5" fill="' + RED + '"/>' +
      '<path d="M19 30 L23 49 L27 29 L31 50 L35 29 L39 50 L43 29 L45.5 48" fill="none" stroke="' + FL2 + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<ellipse cx="11" cy="39.5" rx="4.6" ry="9" fill="' + IV + '" stroke="' + G + '" stroke-width="1.6"/>' +
      '<ellipse cx="53" cy="39.5" rx="4.6" ry="9" fill="' + IVD + '" stroke="' + G + '" stroke-width="1.6"/>' +
      '<path d="M40 8 V18.5 M40 8 L51 5.5 V16" stroke="' + G + '" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="37.6" cy="19" rx="3.2" ry="2.4" fill="' + G + '"/>' +
      '<ellipse cx="48.6" cy="16.5" rx="3.2" ry="2.4" fill="' + G + '"/>' +
      star(28, 14, 3.2, FL2),

    // वर निकासी एवं बारात — dulha on a decorated white ghodi
    ghodi:
      star(9, 10, 3.4, FL2) + star(17, 4.5, 2.2, FL2) +
      '<path fill="' + IVD + '" d="M14.5 37 C 7 37 4.5 45 6.5 53 C 9 48 11.5 45 15.5 43 Z"/>' +
      '<path fill="' + IV + '" d="M15 40 C 15 34 22 32.5 30 32.5 C 37 32.5 43 33.5 45 37 C 46.5 40 45.5 45 42 46.5 C 34 48 23 48 18 46.5 C 15.5 45.5 15 43 15 40 Z"/>' +
      '<path fill="' + IV + '" d="M37 36 C 39 28 42.5 22 47 17.5 L 52.5 21 C 49.5 26.5 47 32 45.5 40 Z"/>' +
      '<path fill="' + IV + '" d="M46.5 17 C 50 13.5 55 14.5 57.5 18 L 61.2 23.6 C 61.8 25.8 59.8 27.2 57.8 26.2 L 51.5 22.5 Z"/>' +
      '<path fill="' + IV + '" d="M48.5 16 L 48.8 11.2 L 51.8 14.6 Z"/>' +
      '<circle cx="54.2" cy="19.6" r="0.9" fill="#3A1A10"/>' +
      '<path fill="' + G + '" d="M46.5 17.5 C 43 21 40.5 26 37.5 32 L 40.5 33 C 43 27.5 45.5 22.5 49 19.5 Z"/>' +
      '<path fill="' + RED + '" d="M49.5 12.5 C 48.5 7.5 51.5 4.5 55 3 C 54 6.5 54 9.5 51.6 12.6 Z"/>' +
      '<path d="M50.6 18.5 L 58 23.5" stroke="' + RED + '" stroke-width="1.2"/>' +
      '<rect x="38.5" y="44" width="3.6" height="13.5" rx="1.2" fill="' + IV + '"/>' +
      '<path fill="' + IV + '" d="M42.5 43.5 L 46 43 C 47.5 46.5 49.5 47.6 51.8 46.8 L 52.8 49.6 C 49.4 51 45.6 50 43.6 47.2 Z"/>' +
      '<rect x="17" y="44" width="3.6" height="13.5" rx="1.2" fill="' + IV + '"/>' +
      '<rect x="22.5" y="45" width="3.6" height="12.5" rx="1.2" fill="' + IVD + '"/>' +
      '<rect x="16.8" y="56" width="4" height="2.4" fill="#3A1A10"/><rect x="22.3" y="56" width="4" height="2.4" fill="#3A1A10"/><rect x="38.3" y="56" width="4" height="2.4" fill="#3A1A10"/>' +
      '<path fill="' + RED + '" d="M20 33 H38.5 L37.5 45 C 32 47.5 26 47.5 21 45 Z"/>' +
      '<path fill="' + G + '" d="M21 43 C 26 45.5 32 45.5 37.6 43 L 37.4 45 C 32 47.5 26 47.5 21.1 45 Z"/>' +
      '<circle cx="23" cy="47.4" r="1.2" fill="' + G + '"/><circle cx="29.2" cy="48.4" r="1.2" fill="' + G + '"/><circle cx="35.4" cy="47.4" r="1.2" fill="' + G + '"/>' +
      '<path fill="' + G + '" d="M24.5 34 C 24.5 27 26.8 22 29.6 21 C 32.4 22 34.6 27 34.6 34 Z"/>' +
      '<path fill="' + GD + '" d="M30.5 33 C 33 35.5 35 38.5 35.2 41.5 L 33 42.3 C 32 39 30.6 36.5 28.8 34.6 Z"/>' +
      '<path fill="' + RED + '" d="M32.6 41.6 H36.8 L36.2 43.6 H32.4 Z"/>' +
      '<path d="M32.6 25.6 L 38 28.6" stroke="' + G + '" stroke-width="2.4" stroke-linecap="round"/>' +
      '<path d="M38 28.6 L 53.6 23.2" stroke="' + FL2 + '" stroke-width="0.9"/>' +
      '<circle cx="29.6" cy="17.2" r="3.3" fill="' + SKIN + '"/>' +
      '<path fill="' + SAF + '" d="M25.6 15.8 C 25.2 10.6 34.2 10.2 33.8 15.6 C 31 14.6 28.2 14.6 25.6 15.8 Z"/>' +
      '<path fill="' + G + '" d="M30 11.4 C 29.8 7.8 31.8 5.4 34.6 4.2 C 33.8 7 33.4 9.2 31.8 11.6 Z"/>' +
      '<circle cx="29.8" cy="12.8" r="1.1" fill="#FFFFFF"/>' +
      '<path d="M27.4 15.6 V20 M28.8 15.2 V20.6 M30.4 15.2 V20.6 M31.9 15.6 V20" stroke="' + FL2 + '" stroke-width="0.8"/>',

    // थिरकते कदम — dance night: mirror ball, light beams and sparkles
    disco:
      '<path fill="' + FL2 + '" opacity="0.55" d="M24 42 L 6 63 L 17 63 Z"/>' +
      '<path fill="' + ROSE + '" opacity="0.55" d="M40 42 L 58 63 L 47 63 Z"/>' +
      '<path fill="#7FD3D9" opacity="0.5" d="M32 47 L 28 63 L 36 63 Z"/>' +
      '<path d="M32 2 V12" stroke="' + G + '" stroke-width="1.6"/>' +
      '<circle cx="32" cy="29" r="17" fill="#C9D3DE"/>' +
      '<path fill="#A9B7C6" d="M32 12 A 17 17 0 0 1 32 46 A 9 17 0 0 0 32 12 Z"/>' +
      '<g fill="none" stroke="#8C9BAD" stroke-width="0.9"><ellipse cx="32" cy="29" rx="17" ry="6"/><ellipse cx="32" cy="29" rx="17" ry="12"/><ellipse cx="32" cy="29" rx="6" ry="17"/><ellipse cx="32" cy="29" rx="12" ry="17"/><path d="M15 29 H49 M32 12 V46"/></g>' +
      '<rect x="22" y="18" width="5" height="4" fill="#FFFFFF"/><rect x="34" y="23" width="4.5" height="4" fill="#FFFFFF" opacity="0.85"/><rect x="26" y="31" width="4" height="4" fill="#E8F4FF"/><rect x="38" y="35" width="4" height="3.5" fill="#FFFFFF" opacity="0.7"/>' +
      '<rect x="29" y="10" width="6" height="3" rx="1" fill="' + G + '"/>' +
      star(10, 14, 4, FL2) + star(54, 10, 3.4, '#FFFFFF') + star(53, 25, 2.4, FL2) + star(11, 30, 2.2, '#FFFFFF'),

    // पाणिग्रहण संस्कार — havan kund with sacred fire
    havan:
      '<circle cx="32" cy="24" r="17" fill="' + FL2 + '" opacity="0.2"/>' +
      flame(22, 40, 17, 6) + flame(42, 40, 17, 6) + flame(32, 40, 30, 9.5) +
      '<circle cx="18" cy="14" r="1.2" fill="' + FL2 + '"/><circle cx="46" cy="10" r="1.2" fill="' + FL2 + '"/><circle cx="40" cy="5" r="0.9" fill="' + FL2 + '"/>' +
      '<path fill="#C4672B" d="M8 39 H56 L52 46.5 H12 Z"/>' +
      '<path fill="#A8521F" d="M12 46.5 H52 L48 53.5 H16 Z"/>' +
      '<path fill="#8C421A" d="M16 53.5 H48 L46 59.5 H18 Z"/>' +
      '<rect x="7" y="37.5" width="50" height="2.6" rx="1" fill="' + G + '"/>' +
      '<path d="M12 46.5 H52 M16 53.5 H48" stroke="' + G + '" stroke-width="1.1"/>' +
      '<g stroke="' + G + '" stroke-width="1.5" stroke-linecap="round" fill="none"><path d="M29 49.5 H35 M32 47 V52 M29 49.5 V47.5 M35 49.5 V51.5 M32 47 H34 M32 52 H30"/></g>',

    // आशीर्वाद समारोह एवं स्वरुचि भोज — festive thali, top view
    thali:
      '<circle cx="32" cy="33" r="27" fill="' + GD + '"/>' +
      '<circle cx="32" cy="32" r="27" fill="' + G + '"/>' +
      '<circle cx="32" cy="32" r="22" fill="#E3B95A"/>' +
      '<circle cx="19" cy="22" r="6.2" fill="#D8DEE4"/><circle cx="19" cy="22" r="4.6" fill="#F4B942"/>' +
      '<circle cx="32" cy="15.5" r="6.2" fill="#D8DEE4"/><circle cx="32" cy="15.5" r="4.6" fill="#D9622B"/>' +
      '<circle cx="45" cy="22" r="6.2" fill="#D8DEE4"/><circle cx="45" cy="22" r="4.6" fill="#5FA34A"/>' +
      '<circle cx="46.5" cy="37" r="6.2" fill="#D8DEE4"/><circle cx="46.5" cy="37" r="4.6" fill="#FFF8EC"/>' +
      '<ellipse cx="22" cy="40" rx="9" ry="7.5" fill="#FBE6C2"/>' +
      '<circle cx="19" cy="38" r="0.9" fill="#C98A4A"/><circle cx="24" cy="41.5" r="0.9" fill="#C98A4A"/><circle cx="21" cy="43" r="0.8" fill="#C98A4A"/>' +
      '<ellipse cx="32" cy="31" rx="6" ry="4.5" fill="#FFFFFF"/>' +
      '<circle cx="34.5" cy="47" r="3.4" fill="' + SAF + '"/><circle cx="40.5" cy="47.8" r="3.4" fill="' + SAF + '"/><circle cx="37.5" cy="43.2" r="3.4" fill="#F6B44E"/>' +
      '<circle cx="36.6" cy="42.2" r="0.8" fill="#FFF3C9"/>' +
      star(57, 6, 3.4, FL2) + star(7, 7, 2.6, '#FFFFFF'),
  };
})();
