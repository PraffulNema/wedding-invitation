// Ceremony icons, 64×64. Stroke = currentColor (ivory on the jewel window).
// class "f"  = gold fill, class "fl" = flame fill, class "s" = soft fill.
window.INVITE_ICONS = {
  // माता पूजन: kalash with coconut, mango leaves and swastik
  kalash:
    '<path class="f" d="M32 7 C 37 7 39 12 38 17 C 37 21 27 21 26 17 C 25 12 27 7 32 7 Z"/>' +
    '<path class="s" d="M26 20 C 21 19 15 16 12 11 C 18 11 23 14 26 20 Z"/>' +
    '<path class="s" d="M38 20 C 43 19 49 16 52 11 C 46 11 41 14 38 20 Z"/>' +
    '<path class="s" d="M29 20 C 25 17 23 12 23 8 C 27 11 29 15 29 20 Z"/>' +
    '<path class="s" d="M35 20 C 39 17 41 12 41 8 C 37 11 35 15 35 20 Z"/>' +
    '<path d="M22 21 H42 L40 26 H24 Z"/>' +
    '<path d="M24 26 C 13 31 12 46 20 52 C 25 56 39 56 44 52 C 52 46 51 31 40 26 Z"/>' +
    '<path d="M17 36 C 26 39 38 39 47 36"/>' +
    '<path d="M18 46 C 26 49 38 49 46 46"/>' +
    '<path d="M29 41.5 H35 M32 38.5 V44.5 M29 41.5 V39 M35 41.5 V44 M32 38.5 H34.5 M32 44.5 H29.5"/>' +
    '<path d="M24 56 H40"/>',

  // सत्यनारायण कथा / माता की चौकी: aarti diya with tall flame and rays
  diya:
    '<path class="fl" d="M32 33 C 25 27 28 18 32 9 C 36 18 39 27 32 33 Z"/>' +
    '<path class="f" d="M32 31 C 29.5 28 30.5 24 32 20 C 33.5 24 34.5 28 32 31 Z"/>' +
    '<path d="M32 5 V2 M21 11 L19 9 M43 11 L45 9 M16 21 H13 M48 21 H51"/>' +
    '<path d="M10 36 C 14 47 50 47 54 36 Z"/>' +
    '<path d="M54 36 L60 33"/>' +
    '<path d="M18 40 C 26 42 38 42 46 40"/>' +
    '<path d="M27 45 L25 53 H39 L37 45"/>' +
    '<path d="M21 56 H43"/>',

  // मण्डपाच्छादन: mandap canopy with kalash finial and toran
  mandap:
    '<path class="f" d="M32 4 L34 9 H30 Z"/>' +
    '<path d="M32 9 V12"/>' +
    '<path d="M8 25 C 14 15 22 12 32 12 C 42 12 50 15 56 25 Z"/>' +
    '<path d="M6 25 H58 V29 H6 Z"/>' +
    '<path d="M12 29 V56 M17 29 V56 M47 29 V56 M52 29 V56"/>' +
    '<path d="M17 30 C 20 36 23 36 26 30 C 29 36 35 36 38 30 C 41 36 44 36 47 30"/>' +
    '<circle class="f" cx="21.5" cy="36" r="1.6"/><circle class="f" cx="32" cy="36" r="1.6"/><circle class="f" cx="42.5" cy="36" r="1.6"/>' +
    '<path class="s" d="M27 56 C 27 49 37 49 37 56 Z"/>' +
    '<path d="M6 56 H58"/>',

  // मामेरा: thaal with wrapped gift and chunri
  mamera:
    '<ellipse cx="32" cy="50" rx="25" ry="6"/>' +
    '<ellipse cx="32" cy="49" rx="19" ry="3.5"/>' +
    '<rect x="19" y="26" width="26" height="20" rx="2"/>' +
    '<path class="s" d="M17 20 H47 V26 H17 Z"/>' +
    '<path d="M32 20 V46"/>' +
    '<path d="M32 20 C 26 11 18 14 23 20"/>' +
    '<path d="M32 20 C 38 11 46 14 41 20"/>' +
    '<circle class="f" cx="32" cy="20" r="2.2"/>' +
    '<path d="M19 34 C 24 31 28 38 32 34 C 36 31 40 38 45 34"/>' +
    '<circle class="f" cx="12" cy="49" r="1.6"/><circle class="f" cx="52" cy="49" r="1.6"/>',

  // कार्निवाल एवं संगीत: dholak with music notes
  dholak:
    '<ellipse cx="14" cy="38" rx="5" ry="12"/>' +
    '<ellipse class="s" cx="50" cy="38" rx="5" ry="12"/>' +
    '<path d="M14 26 C 24 22 40 22 50 26 M14 50 C 24 54 40 54 50 50"/>' +
    '<path d="M18 26 L22 51 L26 24 L30 52 L34 24 L38 52 L42 24 L46 51"/>' +
    '<path d="M44 6 V16 M44 6 L52 4 V13"/>' +
    '<ellipse class="f" cx="42" cy="16.5" rx="2.6" ry="2"/>' +
    '<ellipse class="f" cx="50" cy="13.5" rx="2.6" ry="2"/>' +
    '<path d="M20 9 V17"/><ellipse class="f" cx="18" cy="17.5" rx="2.6" ry="2"/>',

  // वर निकासी एवं बारात: dulha on a prancing ghodi, with kalgi, sehra and jhool
  ghodi:
    '<path d="M16 37 C 10 36 6.5 41 8 48.5 C 9.5 45 11.5 42.5 15.2 41.5"/>' +
    '<path d="M16 36 C 19 31.5 38 31 43 33.5 C 46.5 35.5 46.5 43 42.5 45.5 C 36 47 24 47 19 45.5 C 14.5 44 13.5 39 16 36 Z"/>' +
    '<path d="M41 33.5 C 41.5 27 44 21.5 48.5 18.5 C 51.5 16.5 54.5 17 56.5 19.5 L 60 24.2 C 60.6 25.8 59.2 27 57.4 26.2 L 53.6 24.6 C 51 27.5 48.5 31 45.6 35.5"/>' +
    '<path d="M50 17.2 L 49.6 13 L 52.4 16.2"/>' +
    '<path class="fl" d="M50.6 13 C 49.6 8.5 52 5.5 55.6 4 C 54.6 7.5 54.6 10.5 52.2 13 Z"/>' +
    '<path d="M53 18.6 L 57.6 22.4"/>' +
    '<circle class="f" cx="44.6" cy="27.4" r="1.2"/>' +
    '<circle class="f" cx="46.4" cy="23.8" r="1.2"/>' +
    '<circle class="f" cx="43.4" cy="31" r="1.2"/>' +
    '<path d="M43 45 C 45.5 47.5 48.5 47.5 50 45 L 52.2 48.6"/>' +
    '<path d="M39 46.2 L 40.2 52 L 38.6 58"/>' +
    '<path d="M20 45.6 C 18.6 49 18.6 52.5 20.4 58"/>' +
    '<path d="M24.6 46.2 L 26.6 52 L 25.6 58"/>' +
    '<path d="M18.6 58 H 22.2 M23.8 58 H 27.4 M36.8 58 H 40.4"/>' +
    '<path class="s" d="M24 33 H 38 L 37 43 C 33 45 29 45 25 43 Z"/>' +
    '<path d="M25.5 37.5 H 36.6"/>' +
    '<circle class="f" cx="26.6" cy="45.4" r="1.1"/>' +
    '<circle class="f" cx="31" cy="46.4" r="1.1"/>' +
    '<circle class="f" cx="35.4" cy="45.4" r="1.1"/>' +
    '<path class="fl" d="M31.6 9 C 31.6 6 33.6 4 36 3 C 35.2 5.5 34.8 7.5 33 9.2 Z"/>' +
    '<path class="f" d="M27.2 13.8 C 27 9.6 35.6 9.2 35.6 13.6 C 33 12.8 29.8 12.8 27.2 13.8 Z"/>' +
    '<circle cx="31.4" cy="16.4" r="3"/>' +
    '<path d="M29.4 14.6 V 19 M31.4 14.4 V 19.6 M33.4 14.6 V 19"/>' +
    '<path d="M27.6 33 C 27.4 27.5 28.8 23 31.4 21.4 C 34 23 35.4 27.5 35.2 33"/>' +
    '<path d="M33.4 32.6 C 35 35 35.8 37.6 35.6 40.2 L 33.6 41.6"/>' +
    '<path d="M34.6 25.4 L 40.6 28.6 L 53.4 24.2"/>' +
    '<path class="fl" d="M12 10 L13.2 13.4 L16.6 14.6 L13.2 15.8 L12 19.2 L10.8 15.8 L7.4 14.6 L10.8 13.4 Z"/>' +
    '<path class="fl" d="M21 4 L21.7 6 L23.7 6.7 L21.7 7.4 L21 9.4 L20.3 7.4 L18.3 6.7 L20.3 6 Z"/>',

  // थिरकते कदम: ghungroo anklet with sparkles
  ghungroo:
    '<path d="M6 22 C 18 36 46 36 58 22"/>' +
    '<path d="M10 28 V32 M19 33 V37 M32 35 V39 M45 33 V37 M54 28 V32"/>' +
    '<circle class="f" cx="10" cy="35.5" r="4"/><circle class="f" cx="19" cy="40.5" r="4"/><circle class="f" cx="32" cy="42.5" r="4"/><circle class="f" cx="45" cy="40.5" r="4"/><circle class="f" cx="54" cy="35.5" r="4"/>' +
    '<path d="M8 37 H12 M17 42 H21 M30 44 H34 M43 42 H47 M52 37 H56"/>' +
    '<path class="fl" d="M50 5 L51.6 9.4 L56 11 L51.6 12.6 L50 17 L48.4 12.6 L44 11 L48.4 9.4 Z"/>' +
    '<path class="fl" d="M14 6 L15 8.8 L17.8 9.8 L15 10.8 L14 13.6 L13 10.8 L10.2 9.8 L13 8.8 Z"/>' +
    '<path d="M30 8 V16 M30 8 L36 6.5 V14"/><ellipse class="f" cx="28.4" cy="16.4" rx="2.2" ry="1.7"/><ellipse class="f" cx="34.4" cy="14.4" rx="2.2" ry="1.7"/>',

  // पाणिग्रहण संस्कार: havan kund with sacred fire
  havan:
    '<path class="fl" d="M32 38 C 23 32 26 20 32 8 C 38 20 41 32 32 38 Z"/>' +
    '<path class="fl" d="M22 39 C 17 35 19 28 22 22 C 25 28 27 35 22 39 Z"/>' +
    '<path class="fl" d="M42 39 C 37 35 39 28 42 22 C 45 28 47 35 42 39 Z"/>' +
    '<path class="f" d="M32 36 C 29 33 30 27 32 22 C 34 27 35 33 32 36 Z"/>' +
    '<path d="M10 40 H54 L50 47 H14 Z"/>' +
    '<path d="M14 47 H50 L46 54 H18 Z"/>' +
    '<path d="M18 54 H46 L44 59 H20 Z"/>' +
    '<path d="M22 43.5 H42 M24 50.5 H40"/>',

  // आशीर्वाद समारोह एवं स्वरुचि भोज: dome cloche with sparkles and a garland
  cloche:
    '<circle class="f" cx="32" cy="14" r="3"/>' +
    '<path d="M12 42 C 12 28 21 18 32 18 C 43 18 52 28 52 42 Z"/>' +
    '<path d="M19 30 C 21 26 24 23 28 22"/>' +
    '<path d="M6 42 H58"/>' +
    '<path d="M10 47 H54"/>' +
    '<path d="M16 47 C 22 54 42 54 48 47"/>' +
    '<path class="fl" d="M55 12 L56.4 16 L60.4 17.4 L56.4 18.8 L55 22.8 L53.6 18.8 L49.6 17.4 L53.6 16 Z"/>' +
    '<path class="fl" d="M9 18 L10 20.8 L12.8 21.8 L10 22.8 L9 25.6 L8 22.8 L5.2 21.8 L8 20.8 Z"/>',
};
