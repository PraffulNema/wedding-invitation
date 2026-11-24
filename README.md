# प्रफुल्ल संग नंदिनी: wedding invitation website (production)

A static site: plain HTML, CSS and JavaScript, with no install or build step. Total size is about 3.6 MB.

## Put it online (about 5 minutes)

**Netlify (easiest).** Open https://app.netlify.com/drop, then drag the `website-photos` folder (or `website-photos-upload.zip`) onto the page. You get a link like `https://something.netlify.app`. Make a free account to keep the site and rename the link. You can also connect your own domain there.

**Other options:** any static host works, such as Cloudflare Pages, GitHub Pages, Vercel or your own web server. Upload the folder contents so that `index.html` sits at the top level.

## After it's online

1. **Fix the WhatsApp preview image.** WhatsApp needs the full web address of the preview image.
   - In `index.html`, change `content="assets/og-image.jpg"` to the full link, for example `content="https://your-site.netlify.app/assets/og-image.jpg"`.
   - Upload the site again.
2. **Test on real phones.** Open the link from WhatsApp on one iPhone and one Android phone, then check that:
   - tapping the card plays the music and opens the doors;
   - reloading the page shows the closed card again;
   - the map button opens Meera Mohan Retreat;
   - "कैलेंडर में जोड़ें" adds the reception to the phone's calendar.
3. **Share the link.** If WhatsApp shows an old or missing preview, add `?v=2` to the end of the link the first time you share it.

## Photos

The photos in `assets/photos/` are web-sized copies, with camera and location data removed. The full-size originals are in `Wedding Invitation/photos-originals/` and are never uploaded.

| File | Where it appears |
| --- | --- |
| `01.jpg` | Inside the Patrika, revealed when the doors open |
| `02.jpg` | Full-screen background behind the names on the first screen |
| `03.jpg` | Featured photo at the top of the "प्यार के रंग" album |
| `04.jpg` … `09.jpg` | Album collage; tap any photo to see it full screen |
| `10.jpg` | Round photo above the closing line |

To swap photos, rename the files. To use a new photo, ask Claude to resize it first, or resize it yourself to about 1600 px on the long side at JPEG quality 80.

Photos 01, 02 and 10 are cropped to fit their frames. Their `pos` value in `js/content.js` decides which part of the photo stays in view. Album photos are never cropped.

## Editing text

All text is in `js/content.js`.

After any change, raise the version number in `index.html` from `?v=1` to `?v=2` so guests' phones load the new files instead of old saved copies.

## Files

| Path | What it holds |
| --- | --- |
| `index.html` | Page shell, share-preview tags, noindex |
| `js/content.js` | Every word, date, link and photo setting |
| `js/icons.js` | Ceremony illustrations |
| `js/main.js` | Patrika opening, music, gallery, lightbox, countdown and animations |
| `css/styles.css` | Royal Heritage design |
| `assets/` | Music, photos, monogram, icons, share image, calendar file |

## Privacy

The page asks search engines not to list it, but anyone with the link can open it and see the photos and phone numbers. Share the link only with guests.
