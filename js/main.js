/*
 * Prafful & Nandini wedding invitation: no build, no dependencies.
 *
 * Flow: closed Patrika → tap (music starts inside the tap) → seal breaks,
 * doors open, petals fall (Web Animations API) → card dissolves into the
 * site → scroll reveals. The open state lives only in memory, so every load
 * or reload starts closed.
 */
(function () {
  'use strict';

  var I = window.INVITE;
  var ICONS = window.INVITE_ICONS;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Reset on load / back-forward cache ---------- */
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) window.location.reload();
  });

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }
  function rand(a, b) {
    return a + Math.random() * (b - a);
  }

  var EASE = {
    inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
    out: 'cubic-bezier(0.22, 1, 0.36, 1)',
    in: 'cubic-bezier(0.55, 0, 1, 0.45)',
    backIn: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  };

  function anim(el, frames, ms, delay, easing, fill) {
    if (!el || !el.animate) return null;
    return el.animate(frames, { duration: ms, delay: delay || 0, easing: easing || 'ease', fill: fill || 'both' });
  }

  /* ---------- Ornaments ---------- */
  function mandala(cls) {
    var p = [];
    var i;
    p.push('<svg class="' + cls + '" viewBox="-200 -200 400 400" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1">');
    p.push('<circle r="196" opacity="0.5"/><circle r="188" stroke-dasharray="2 6"/>');
    for (i = 0; i < 32; i++) p.push('<path transform="rotate(' + (i * 360) / 32 + ')" d="M0 -186 C 14 -168 14 -150 0 -136 C -14 -150 -14 -168 0 -186 Z"/>');
    p.push('<circle r="134"/>');
    for (i = 0; i < 16; i++) p.push('<path transform="rotate(' + ((i * 360) / 16 + 11.25) + ')" d="M0 -132 C 22 -112 22 -92 0 -78 C -22 -92 -22 -112 0 -132 Z"/>');
    for (i = 0; i < 16; i++) p.push('<circle transform="rotate(' + (i * 360) / 16 + ')" cx="0" cy="-120" r="2.2" fill="currentColor"/>');
    p.push('<circle r="76"/><circle r="70" stroke-dasharray="1 4"/>');
    for (i = 0; i < 12; i++) p.push('<path transform="rotate(' + i * 30 + ')" d="M0 -68 C 12 -54 12 -42 0 -32 C -12 -42 -12 -54 0 -68 Z"/>');
    p.push('<circle r="30"/><circle r="8" fill="currentColor" opacity="0.6"/></g></svg>');
    return p.join('');
  }

  function divider(cls) {
    return (
      '<svg class="divider ' + (cls || '') + '" viewBox="0 0 240 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1">' +
      '<path d="M4 12 H96"/><path d="M144 12 H236"/>' +
      '<path d="M96 12 C 104 4 112 4 120 12 C 128 4 136 4 144 12"/><path d="M96 12 C 104 20 112 20 120 12 C 128 20 136 20 144 12"/></g>' +
      '<path d="M120 5 L125 12 L120 19 L115 12 Z" fill="currentColor"/><circle cx="4" cy="12" r="2" fill="currentColor"/><circle cx="236" cy="12" r="2" fill="currentColor"/></svg>'
    );
  }

  function corner(cls) {
    return (
      '<svg class="corner ' + cls + '" viewBox="0 0 80 80" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round">' +
      '<path d="M4 76 V20 Q4 4 20 4 H76"/><path d="M12 76 V26 Q12 12 26 12 H76" opacity="0.6"/>' +
      '<path d="M20 40 C 20 26 26 20 40 20"/><path d="M28 34 C 34 30 30 24 24 28 C 20 32 26 40 34 36"/></g>' +
      '<circle cx="20" cy="20" r="3" fill="currentColor"/></svg>'
    );
  }

  function fourCorners(prefix) {
    return corner(prefix + ' tl') + corner(prefix + ' tr') + corner(prefix + ' bl') + corner(prefix + ' br');
  }

  /** Small lotus used on the door arches and section headers. */
  function lotus(cls) {
    return (
      '<svg class="' + cls + '" viewBox="0 0 60 34" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round">' +
      '<path d="M30 4 C 36 12 36 22 30 30 C 24 22 24 12 30 4 Z"/>' +
      '<path d="M30 30 C 22 26 16 18 15 9 C 22 12 28 20 30 30 Z"/>' +
      '<path d="M30 30 C 38 26 44 18 45 9 C 38 12 32 20 30 30 Z"/>' +
      '<path d="M30 30 C 20 30 10 26 4 19 C 13 18 24 22 30 30 Z"/>' +
      '<path d="M30 30 C 40 30 50 26 56 19 C 47 18 36 22 30 30 Z"/></g></svg>'
    );
  }

  var ARCH =
    '<svg class="door-arch" viewBox="0 0 200 320" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4">' +
    '<path vector-effect="non-scaling-stroke" d="M14 312 V120 C 14 70 50 40 100 14 C 150 40 186 70 186 120 V312 Z"/>' +
    '<path vector-effect="non-scaling-stroke" opacity="0.55" d="M26 300 V124 C 26 82 58 56 100 32 C 142 56 174 82 174 124 V300 Z"/></g></svg>';

  function icon(name, cls) {
    return '<svg class="' + (cls || 'ev-icon') + '" viewBox="0 0 64 64" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }

  var PIN =
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 21 C 7 15 5 12 5 9 A 7 7 0 0 1 19 9 C 19 12 17 15 12 21 Z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  var CLOCK =
    '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.5 V12 L15 14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>';

  function diya(cls) {
    return (
      '<span class="diya ' + (cls || '') + '" aria-hidden="true"><span class="diya-flame"></span>' +
      '<svg viewBox="0 0 40 18"><path d="M2 4 C 6 16 34 16 38 4 Z" fill="url(#diyaGrad)" stroke="#E6CD8B" stroke-width="1"/><path d="M8 7 C 14 9 26 9 32 7" fill="none" stroke="#7a2a12" stroke-width="1"/></svg></span>'
    );
  }

  function musicIcon(on) {
    return (
      '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M9 18 V6 L19 4 V16"/><circle cx="7" cy="18" r="2.4"/><circle cx="17" cy="16" r="2.4"/>' +
      (on ? '' : '<path d="M3 3 L21 21"/>') +
      '</g></svg>'
    );
  }

  /** Marigold toran: a garland row plus hanging strands that sway. */
  function toran(count) {
    var lengths = [3, 5, 4, 6, 4, 5, 3, 6, 4, 5, 3];
    var html = '<div class="toran" aria-hidden="true"><div class="toran-row"></div><div class="toran-strands">';
    for (var i = 0; i < count; i++) {
      var n = lengths[i % lengths.length];
      html += '<span class="strand" style="--d:' + (i % 5) * 0.35 + 's">';
      for (var k = 0; k < n; k++) html += '<i class="' + (k % 3 === 2 ? 'mg red' : k % 2 ? 'mg yellow' : 'mg') + '"></i>';
      html += '<b class="leaf"></b></span>';
    }
    return html + '</div></div>';
  }

  /* ---------- Render: Patrika ---------- */
  function door(side, name, c1, c2) {
    return (
      '<span class="door door-' + side + '"><span class="door-face door-front">' + ARCH +
      corner('door-corner ' + c1) + corner('door-corner ' + c2) +
      lotus('door-lotus') +
      '<span class="door-ribbon"></span>' +
      '<span class="door-name">' + esc(name) + '</span>' +
      '<svg class="door-name-orn" viewBox="0 0 80 10" aria-hidden="true"><path d="M2 5 H32 M48 5 H78" stroke="currentColor" stroke-width="0.8"/><path d="M40 1 L44 5 L40 9 L36 5 Z" fill="currentColor"/></svg>' +
      '</span><span class="door-face door-back"></span><span class="door-shade"></span></span>'
    );
  }

  function renderPatrika() {
    var P = I.patrika;
    return (
      '<div class="hero-sparkles" aria-hidden="true"></div>' +
      '<div class="patrika-heading"><p class="patrika-title">' + esc(P.title) + '</p>' +
      '<p class="patrika-names">' + esc(P.groom) + ' <span>' + esc(P.joiner) + '</span> ' + esc(P.bride) + '</p></div>' +
      '<button type="button" class="patrika-card" aria-label="' + esc(P.ariaLabel) + '">' +
      '<span class="patrika-inside">' + mandala('patrika-inside-mandala') +
      '<span class="patrika-inside-blessing">' + esc(P.innerBlessing) + '</span>' +
      '<img class="patrika-inside-logo" src="' + I.MONOGRAM_SRC + '" alt="">' +
      '<span class="patrika-inside-line">' + esc(P.innerLine) + '</span></span>' +
      door('left', P.groom, 'tl', 'bl') +
      door('right', P.bride, 'tr', 'br') +
      '<span class="patrika-seal"><span class="patrika-seal-glow"></span><img src="' + I.MONOGRAM_SRC + '" alt=""></span>' +
      '</button>' +
      '<p class="patrika-hint"><span class="tap-dot" aria-hidden="true"></span>' + esc(P.hint) + '</p>'
    );
  }

  /* ---------- Render: site ---------- */
  function renderHero() {
    var H = I.hero;
    var C = I.countdown;
    return (
      '<section class="hero" id="top">' + toran(11) +
      '<div class="hero-mandala-wrap" aria-hidden="true">' + mandala('hero-mandala') + '</div>' +
      '<div class="hero-sparkles" aria-hidden="true"></div>' +
      '<div class="hero-content">' +
      '<p class="hero-invocation" data-hero>' + esc(H.invocation) + '</p>' +
      '<p class="hero-shloka" data-hero>' + esc(H.shloka[0]) + '<br>' + esc(H.shloka[1]) + '</p>' +
      '<img class="hero-logo" src="' + I.MONOGRAM_SRC + '" alt="प्रफुल्ल और नंदिनी का मोनोग्राम" data-hero>' +
      '<h1 class="hero-title" data-hero>' + esc(H.title) + '</h1>' +
      '<p class="hero-names" data-hero><span class="hero-name">' + esc(H.groom) + '</span><span class="hero-joiner">' + esc(H.joiner) +
      '</span><span class="hero-name">' + esc(H.bride) + '</span></p>' +
      divider('hero-divider') +
      '<div class="hero-date-row" data-hero>' + diya() +
      '<div><p class="hero-dates">' + esc(H.dates) + '</p><p class="hero-place">' + esc(H.place) + '</p></div>' + diya('flip') + '</div>' +
      '<div class="countdown" id="countdown" data-hero><p class="countdown-title">' + esc(C.title) + '</p><div class="countdown-cells">' +
      C.units.map(function (u, i) {
        return '<div class="cd-cell"><span class="cd-num" data-cd="' + i + '">00</span><span class="cd-unit">' + esc(u) + '</span></div>';
      }).join('') +
      '</div></div></div>' +
      '<a class="scroll-cue" href="#invitation" data-hero><span>' + esc(H.scrollCue) + '</span>' +
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 9 L12 15 L18 9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></a>' +
      '</section>'
    );
  }

  function person(p) {
    return (
      '<article class="person" data-reveal>' + lotus('person-lotus') +
      '<p class="person-prefix">' + esc(p.prefix) + '</p>' +
      '<h2 class="person-name">' + esc(p.name) + '</h2><ul class="person-lines">' +
      p.lines.map(function (l) {
        return '<li><span class="person-label">' + esc(l.label) + '</span>' + esc(l.value) + '</li>';
      }).join('') +
      '</ul><p class="person-place">' + PIN + esc(p.place) + '</p></article>'
    );
  }

  function renderInvitation() {
    var V = I.invitation;
    var C = I.couple;
    return (
      '<section class="section section-paper" id="invitation"><div class="paper">' + fourCorners('paper-corner') +
      '<div class="om" aria-hidden="true" data-reveal>ॐ</div>' +
      '<p class="doha" data-reveal>' + esc(V.doha[0]) + '<br>' + esc(V.doha[1]) + '</p>' +
      divider('paper-divider') +
      '<p class="salutation" data-reveal>' + esc(V.salutation) + '</p>' +
      '<p class="invite-body" data-reveal>' + esc(V.body[0]) + '<br>' + esc(V.body[1]) + '</p>' +
      '<div class="couple">' + person(C.groom) +
      '<div class="couple-joiner" data-reveal aria-hidden="true"><span class="joiner-ring"><span>' + esc(C.joiner) + '</span></span></div>' +
      person(C.bride) + '</div>' +
      '</div></section>'
    );
  }

  function eventCard(ev) {
    var titles = ev.titles.map(function (t) {
      return (
        '<div class="ev-title-block"><h3 class="ev-title">' + esc(t.name) + '</h3>' +
        (t.time ? '<p class="ev-time">' + CLOCK + esc(t.time) + '</p>' : '') + '</div>'
      );
    }).join('');
    return (
      '<li class="ev" style="--accent:' + ev.accent + '" data-reveal>' +
      '<div class="ev-window"><span class="ev-finial" aria-hidden="true"></span>' + icon(ev.icon) + '</div>' +
      titles +
      (ev.time ? '<p class="ev-time">' + CLOCK + esc(ev.time) + '</p>' : '') +
      '<p class="ev-venue">' + PIN + '<span>' + esc(ev.venue) + '</span></p>' +
      '</li>'
    );
  }

  function renderEvents() {
    return (
      '<section class="section section-events" id="events">' +
      '<header class="section-header" data-reveal>' + lotus('header-lotus') +
      '<h2 class="section-title">' + esc(I.eventsHeading) + '</h2>' + divider() + '</header>' +
      '<div class="timeline">' +
      I.days.map(function (d) {
        return (
          '<div class="day">' +
          '<div class="day-badge" data-reveal><span class="day-num">' + esc(d.num) + '</span>' +
          '<span class="day-text"><span class="day-month">' + esc(d.month) + ' 2026</span><span class="day-week">' + esc(d.week) + '</span></span></div>' +
          '<ol class="day-events">' + d.events.map(eventCard).join('') + '</ol></div>'
        );
      }).join('') +
      '</div></section>'
    );
  }

  function renderReception() {
    var R = I.reception;
    return (
      '<section class="section section-reception" id="reception">' +
      '<div class="lanterns" aria-hidden="true"><span class="lantern"></span><span class="lantern"></span></div>' +
      '<div class="paper paper-reception" data-reveal>' + fourCorners('paper-corner') +
      '<div class="ev-window reception-window" style="--accent:#5C1020"><span class="ev-finial" aria-hidden="true"></span>' + icon('thali') + '</div>' +
      '<h2 class="reception-title">' + esc(R.title[0]) + '<span>' + esc(R.title[1]) + '</span></h2>' + divider('paper-divider') +
      '<dl class="reception-rows">' +
      R.rows.map(function (r) {
        return '<div><dt>' + esc(r.label) + '</dt><dd>' + esc(r.value) + '</dd></div>';
      }).join('') +
      '</dl><p class="venue-label">' + esc(R.venueLabel) + '</p><p class="venue-name">' + esc(R.venueName) + '</p>' +
      '<p class="venue-address">' + esc(R.venueAddress) + '</p><div class="cta-row">' +
      '<a class="btn btn-gold" href="' + esc(I.MAP_URL) + '" target="_blank" rel="noopener noreferrer">' + PIN + esc(R.mapCta) + '</a>' +
      '<button type="button" class="btn btn-outline" id="add-to-calendar">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10 H20 M8 3 V7 M16 3 V7 M12 13 V17 M10 15 H14"/></g></svg>' +
      esc(R.calendarCta) + '</button></div>' +
      '<p class="reception-note">' + esc(R.note) + '</p></div></section>'
    );
  }

  function renderManuhar() {
    var B = I.balManuhar;
    var w = 0;
    function words(line) {
      return line.split(' ').map(function (word) {
        var hl = word.indexOf('जलूल') !== -1 ? ' hl' : '';
        return '<span class="w' + hl + '" style="--i:' + w++ + '">' + esc(word) + '</span>';
      }).join(' ');
    }
    // Bulbs sit on the wire: quadratic curve M0 2 Q150 40 300 2 → y(t) = 2 + 76·t·(1−t)
    var bulbs = '';
    for (var b = 0; b < 13; b++) {
      var t = (b + 0.5) / 13;
      bulbs += '<i style="--b:' + b + ';left:' + (t * 100).toFixed(2) + '%;top:' + (2 + 76 * t * (1 - t) + 1).toFixed(1) + 'px"></i>';
    }
    return (
      '<section class="section section-manuhar" id="bal-manuhar">' +
      '<div class="snow" aria-hidden="true"></div>' +
      '<div class="manuhar" id="manuhar">' +
      '<div class="string-lights" aria-hidden="true"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><path d="M0 2 Q150 40 300 2" fill="none" stroke="#7d6a45" stroke-width="1.2" vector-effect="non-scaling-stroke"/></svg><div class="bulbs">' + bulbs + '</div></div>' +
      '<p class="manuhar-badge"><span aria-hidden="true">❄</span>' + esc(B.heading) + '<span aria-hidden="true">❄</span></p>' +
      '<p class="manuhar-lines">' + words(B.lines[0]) + '<br>' + words(B.lines[1]) + '</p>' +
      '<p class="manuhar-sign" style="--i:' + w + '">— ' + esc(B.signature) +
      '<svg class="sign-swash" viewBox="0 0 160 16" aria-hidden="true"><path d="M4 10 C 40 2 80 14 120 6 C 135 3 148 6 156 9" pathLength="1"/></svg></p>' +
      '<div class="kulhad" aria-hidden="true"><svg viewBox="0 0 60 70">' +
      '<path class="steam" pathLength="1" d="M22 26 C 16 18 28 14 22 4"/><path class="steam s2" pathLength="1" d="M32 26 C 26 18 38 14 32 4"/><path class="steam s3" pathLength="1" d="M42 26 C 36 18 48 14 42 4"/>' +
      '<path d="M12 32 H52 L46 64 H18 Z" fill="#B5592A" stroke="#E6CD8B" stroke-width="1.2"/><path d="M12 32 H52" stroke="#F3D9A8" stroke-width="3"/><path d="M16 44 H48" stroke="#8C3F1C" stroke-width="1.2"/></svg></div>' +
      '</div></section>'
    );
  }

  function renderFooter() {
    var F = I.footer;
    return (
      '<footer class="site-footer"><div class="footer-garland" aria-hidden="true"></div>' +
      '<div class="closing" data-reveal>' + diya() +
      '<p class="closing-line">' + esc(I.closing.line) + '</p>' +
      '<p class="closing-sub">' + esc(I.closing.sub) + '</p>' + divider('closing-divider') +
      '<p class="closing-sign">' + esc(I.closing.sign) + '</p></div>' +
      '<img class="footer-logo" src="' + I.MONOGRAM_SRC + '" alt="" data-reveal><div class="footer-grid">' +
      '<div class="footer-block" data-reveal><p class="footer-label">' + esc(F.senderLabel) + '</p>' +
      F.senders.map(function (s) {
        return '<p class="footer-strong">' + esc(s) + '</p>';
      }).join('') +
      '<p>' + esc(F.address) + '</p><p>' + esc(F.phones) + '</p></div>' +
      '<div class="footer-block" data-reveal><p class="footer-label">' + esc(F.establishmentsLabel) + '</p>' +
      F.companies.map(function (c) {
        return '<p class="footer-strong">' + esc(c) + '</p>';
      }).join('') +
      '<p>' + esc(F.companyPhones) + '</p></div></div>' + divider('footer-divider') + '<ul class="branches">' +
      F.branches.map(function (b) {
        return '<li data-reveal><p class="branch-name">' + PIN + esc(b.name) + '</p>' +
          b.lines.map(function (l) {
            return '<p>' + esc(l) + '</p>';
          }).join('') + '</li>';
      }).join('') +
      '</ul></footer>'
    );
  }

  /* ---------- Audio (never autoplays) ---------- */
  var audio = new Audio(I.AUDIO_SRC);
  audio.loop = true;
  audio.preload = 'auto';
  var audioBlocked = false;
  var resumeOnVisible = false;
  var musicBtn = null;

  function setBlocked(v) {
    audioBlocked = v;
    updateMusicButton();
  }

  function startAudio() {
    audio.currentTime = 0;
    var p = audio.play();
    if (p && p.then) p.then(function () { setBlocked(false); }).catch(function () { setBlocked(true); });
  }

  function toggleAudio() {
    if (audio.paused) {
      audio.play().then(function () { setBlocked(false); }).catch(function () { setBlocked(true); });
    } else {
      audio.pause();
    }
  }

  audio.addEventListener('play', updateMusicButton);
  audio.addEventListener('pause', updateMusicButton);

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      resumeOnVisible = !audio.paused;
      audio.pause();
    } else if (resumeOnVisible) {
      resumeOnVisible = false;
      audio.play().catch(function () { setBlocked(true); });
    }
  });

  function updateMusicButton() {
    if (!musicBtn) return;
    var playing = !audio.paused;
    var label = playing ? I.music.pause : I.music.play;
    musicBtn.className = 'music-toggle' + (playing ? ' is-playing' : '') + (audioBlocked && !playing ? ' is-blocked' : '');
    musicBtn.setAttribute('aria-label', label);
    musicBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    musicBtn.title = label;
    musicBtn.innerHTML =
      musicIcon(playing) +
      (audioBlocked && !playing ? '<span class="music-toggle-text">' + esc(I.music.play) + '</span>' : '') +
      (playing ? '<span class="music-bars" aria-hidden="true"><i></i><i></i><i></i></span>' : '');
  }

  function showMusicButton() {
    musicBtn = document.createElement('button');
    musicBtn.type = 'button';
    musicBtn.addEventListener('click', toggleAudio);
    document.body.appendChild(musicBtn);
    updateMusicButton();
  }

  /* ---------- Calendar ---------- */
  function addToCalendar() {
    var c = I.reception.calendar;
    var R = I.reception;
    if (/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)) {
      window.location.href = I.ICS_SRC;
      return;
    }
    var params = new URLSearchParams({
      action: 'TEMPLATE',
      text: c.title,
      dates: c.startUtc + '/' + c.endUtc,
      details: R.venueName + '\n' + R.venueAddress + '\n' + I.MAP_URL,
      location: c.location,
      ctz: 'Asia/Kolkata',
    });
    window.open('https://calendar.google.com/calendar/render?' + params.toString(), '_blank', 'noopener');
  }

  /* ---------- Countdown ---------- */
  function startCountdown() {
    var box = $('#countdown');
    var target = Date.parse(I.countdown.target);
    var cells = $all('[data-cd]', box);
    function two(n) {
      return n < 10 ? '0' + n : String(n);
    }
    function tick() {
      var ms = target - Date.now();
      if (!(ms > 0)) {
        box.style.display = 'none';
        return false;
      }
      var s = Math.floor(ms / 1000);
      var vals = [Math.floor(s / 86400), Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60];
      cells.forEach(function (el, i) {
        var v = two(vals[i]);
        if (el.textContent !== v) el.textContent = v;
      });
      return true;
    }
    if (tick()) window.setInterval(tick, 1000);
  }

  /* ---------- Particles ---------- */
  function petalShower(count) {
    if (reduceMotion) return;
    var colors = ['#F2A324', '#E07B16', '#D94A6A', '#F6C744', '#C2185B', '#FFD27A'];
    var vh = window.innerHeight;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('span');
      p.className = i % 4 === 0 ? 'petal round' : 'petal';
      p.style.background = colors[i % colors.length];
      p.style.left = rand(-5, 100) + 'vw';
      var size = rand(9, 16);
      p.style.width = size + 'px';
      p.style.height = size * 0.7 + 'px';
      document.body.appendChild(p);
      var drift = rand(-120, 120);
      var spin = rand(-540, 540);
      var a = anim(
        p,
        [
          { transform: 'translate3d(0,-40px,0) rotate(0deg)', opacity: 0 },
          { opacity: 1, offset: 0.1 },
          { transform: 'translate3d(' + drift + 'px,' + (vh + 60) + 'px,0) rotate(' + spin + 'deg)', opacity: 0.9 },
        ],
        rand(3200, 6200),
        rand(0, 1400),
        'cubic-bezier(0.25, 0.4, 0.5, 1)',
        'both',
      );
      (function (el, an) {
        if (an) an.onfinish = function () { el.remove(); };
        else el.remove();
      })(p, a);
    }
  }

  function sparkles() {
    if (reduceMotion) return;
    $all('.hero-sparkles').forEach(function (host) {
      var html = '';
      for (var i = 0; i < 26; i++) {
        html += '<i style="left:' + rand(2, 98).toFixed(1) + '%;top:' + rand(8, 92).toFixed(1) + '%;--t:' + rand(2.5, 6).toFixed(2) + 's;--d:' + rand(0, 5).toFixed(2) + 's;--s:' + rand(2, 4.5).toFixed(1) + 'px"></i>';
      }
      host.innerHTML = html;
    });
  }

  function snow() {
    var host = $('.snow');
    if (!host || reduceMotion) return;
    var html = '';
    for (var i = 0; i < 46; i++) {
      html += '<i style="left:' + rand(0, 100).toFixed(1) + '%;--s:' + rand(3, 7).toFixed(1) + 'px;--t:' + rand(9, 18).toFixed(1) + 's;--d:-' + rand(0, 18).toFixed(1) + 's;--x:' + rand(-40, 40).toFixed(0) + 'px;--o:' + rand(0.35, 0.9).toFixed(2) + '"></i>';
    }
    host.innerHTML = html;
    // flakes fall the full height of the section
    var setH = function () {
      host.style.setProperty('--h', host.offsetHeight + 24 + 'px');
    };
    setH();
    window.addEventListener('resize', setH);
  }

  /* ---------- Scroll reveals ---------- */
  function setupReveals() {
    var manuhar = $('#manuhar');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      manuhar.classList.add('is-playing');
      $all('.ev', site).forEach(function (el) { el.classList.add('is-drawn'); });
      return;
    }
    var els = $all('[data-reveal]', site);
    els.forEach(function (el) {
      el.classList.add('reveal-pending');
    });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-revealed');
          if (e.target.classList.contains('ev')) e.target.classList.add('is-drawn');
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    els.forEach(function (el) {
      io.observe(el);
    });

    var io2 = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            manuhar.classList.add('is-playing');
            io2.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );
    io2.observe(manuhar);
  }

  /* ---------- Build the page ---------- */
  var site = $('#site');
  var stage = $('#patrika');

  site.innerHTML =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="diyaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9A04B"/><stop offset="1" stop-color="#9C4A1A"/></linearGradient></defs></svg>' +
    '<main>' + renderHero() + renderInvitation() + renderEvents() + renderReception() + renderManuhar() + '</main>' + renderFooter();
  stage.innerHTML = renderPatrika();
  $('#add-to-calendar').addEventListener('click', addToCalendar);

  startCountdown();
  sparkles();
  snow();

  /* ---------- The opening ---------- */
  var opening = false;

  function revealSite() {
    site.style.visibility = 'visible';
    site.setAttribute('aria-hidden', 'false');
    var a = anim(site, [{ opacity: 0, transform: 'scale(1.04)' }, { opacity: 1, transform: 'none' }], reduceMotion ? 500 : 1400, 0, EASE.out, 'both');
    var done = function () {
      site.style.opacity = '1';
      if (a) a.cancel();
    };
    if (a) a.onfinish = done;
    else done();
    if (!reduceMotion) {
      $all('[data-hero]', site).forEach(function (el, i) {
        anim(el, [{ opacity: 0, transform: 'translateY(26px)' }, { opacity: 1, transform: 'none' }], 1000, 350 + i * 110, EASE.out, 'backwards');
      });
      $all('.strand', site).forEach(function (el, i) {
        anim(el, [{ transform: 'translateY(-110%)' }, { transform: 'translateY(0)' }], 1100, 200 + i * 70, 'cubic-bezier(0.34, 1.4, 0.64, 1)', 'backwards');
      });
      window.setTimeout(function () { petalShower(26); }, 500);
    }
  }

  function finish() {
    if (stage.parentNode) stage.parentNode.removeChild(stage);
    document.documentElement.classList.remove('is-locked');
    setupReveals();
  }

  function open() {
    if (opening) return;
    opening = true;

    startAudio(); // inside the user gesture
    showMusicButton();
    stage.classList.add('is-opening');

    if (reduceMotion) {
      revealSite();
      var f = anim(stage, [{ opacity: 1 }, { opacity: 0 }], 600, 0, 'ease');
      if (f) f.onfinish = finish;
      else finish();
      return;
    }

    var card = $('.patrika-card', stage);
    var seal = $('.patrika-seal', stage);

    // Seal is pressed and breaks away; a golden flash where it was.
    anim($('.patrika-hint', stage), [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(10px)' }], 300, 0, EASE.inOut);
    anim(seal, [
      { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 0 },
      { transform: 'scale(1.12) rotate(0deg)', opacity: 1, offset: 0.3 },
      { transform: 'scale(0) rotate(120deg)', opacity: 0, offset: 1 },
    ], 720, 0, EASE.backIn);
    var flash = document.createElement('span');
    flash.className = 'seal-flash';
    card.appendChild(flash);
    anim(flash, [{ opacity: 0, transform: 'scale(0.2)' }, { opacity: 1, offset: 0.35 }, { opacity: 0, transform: 'scale(2.6)' }], 1100, 520, 'ease-out');

    // Doors swing open on their outer hinges.
    anim($('.door-left', stage), [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(-118deg)' }], 1600, 600, EASE.inOut);
    anim($('.door-right', stage), [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(118deg)' }], 1600, 600, EASE.inOut);
    $all('.door-shade', stage).forEach(function (el) {
      anim(el, [{ opacity: 0 }, { opacity: 0.45 }], 900, 600, 'ease-in');
    });
    anim($('.patrika-heading', stage), [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-24px)' }], 800, 600, EASE.in);
    window.setTimeout(function () { petalShower(34); }, 900);

    // The inside rises while the doors are still moving.
    $all('.patrika-inside > *', stage).forEach(function (el, i) {
      if (el.classList.contains('patrika-inside-mandala')) {
        anim(el, [{ opacity: 0, transform: 'rotate(0deg) scale(1)' }, { opacity: 1, transform: 'rotate(30deg) scale(1.06)' }], 1400, 1200, 'ease-in-out');
      } else {
        anim(el, [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'none' }], 800, 1200 + i * 140, EASE.out);
      }
    });

    // A breath, then the card dissolves into the site.
    var REVEAL_AT = 3050;
    window.setTimeout(revealSite, REVEAL_AT);
    anim(card, [{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(1.7)', opacity: 0 }], 1100, REVEAL_AT, EASE.in);
    var last = anim(stage, [{ opacity: 1 }, { opacity: 0 }], 1000, REVEAL_AT + 250, EASE.inOut);
    if (last) last.onfinish = finish;
    else window.setTimeout(finish, REVEAL_AT + 1250);
  }

  $('.patrika-card', stage).addEventListener('click', open);
})();
