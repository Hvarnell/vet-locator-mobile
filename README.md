# MapAVet - phone app

A static web app: host this folder and open it on a phone. Everyone's maps are added on their own phone and stay there.

## Put it online with GitHub Pages (free)

1. Create a **public** repository on GitHub and upload every file in this folder (loose files, no sub-folders) with **Add file -> Upload files**. `.nojekyll` is a hidden file; if the upload box skips it, create it with Add file -> Create new file (empty).
2. Repository **Settings -> Pages -> Build and deployment -> Source: Deploy from a branch**, branch `main`, folder `/ (root)`, **Save**.
3. After a minute the same page shows the address, e.g. `https://<user>.github.io/<repo>/`.

## The link to send people

`.../install.html` - it explains that this is a web app, detects the phone (and the Instagram/Facebook in-app browser, which cannot install apps), offers a one-tap Install button where the browser supports it, and shows illustrated Add-to-Home-Screen steps for Safari, Chrome and Samsung Internet. On a computer it shows a QR code. Pass `site_url` to `build_pwa` so the QR code and link preview point at the right address.

## Clinics near me

One button, three choices: 24/7 ER (default), late night, or any clinic open right now (from each clinic's hours and the phone's clock). Every result has the address, tap-to-call and a Directions button that opens the phone's own maps app. It uses the built-in list (`builtin.json`, checked by hand), every map saved on the phone and `clinics-us.json` (every OpenStreetMap clinic in the US), so it works anywhere and without signal. If the phone cannot give a location, a typed town, ZIP code or address works instead (needs signal).

## Saving a map

Open the builder from inside the app, build the map and tap **Go to map** - it is saved under My maps and opens full screen. **Add a map file** on the home page is for a map built on a computer or sent by someone else. Maps stay on that phone only.

## Sponsored card

`sponsor.json` controls one sponsored card on the home page: set `enabled` to true and fill in `title`, `text` and `url` (an affiliate or sponsor link). It is fetched fresh on every online open, so editing the file on the site changes it immediately. If you run it, declare 'Contains ads' in the Play listing.

## Store listing

https://www.pwabuilder.com packages this hosted app for Google Play and the App Store; `privacy.html` is the privacy policy page the stores ask for.
