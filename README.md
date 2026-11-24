# प्रफुल्ल संग नंदिनी: invitation website (no-install version)

Plain HTML, CSS and JavaScript. No npm, no build step, no dependencies.

## Open it

Double-click `index.html`, or drag it into Chrome or Safari. Tap the card to open it.

## Put it online

Upload the whole `website-static` folder, keeping its structure, to any static host (Netlify drag-and-drop, GitHub Pages, Cloudflare Pages, or any web server). The entry page is `index.html`.

## Files

| Path | What it holds |
| --- | --- |
| `js/content.js` | Every visible word, dates, map link, calendar times. Edit text here only. |
| `js/icons.js` | Ceremony icons (kalash, diya, mandap, mamera thaal, dholak, safa, ghungroo, havan kund, cloche) |
| `js/main.js` | Renders the page; Patrika opening, petal shower, toran, countdown, snow, music, reload reset, scroll reveals |
| `css/styles.css` | Royal Heritage colours, fonts and layout |
| `assets/audio/saibo.mp3` | Background music (loops; starts only after the tap) |
| `assets/images/pn-monogram-gold.svg` | Gold PN monogram |
| `assets/reception.ics` | Calendar file for iPhone; update it if the reception time changes |

## Notes

- Fonts load from Google Fonts. If a network blocks Google Fonts, the browser's own Devanagari font is used, so text still shows.
- Reloading always returns to the closed card; nothing is stored in the browser.
- Visitors with "reduce motion" turned on get a simple fade.
