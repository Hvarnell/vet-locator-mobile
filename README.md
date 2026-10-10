# VetAlong - phone app

A static web app: host this folder and open it on a phone. Everyone's maps are added on their own phone and stay there.

## Put it online with GitHub Pages (free)

1. Create a **public** repository on GitHub and upload every file in this folder (loose files, no sub-folders) with **Add file -> Upload files**. `.nojekyll` is a hidden file; if the upload box skips it, create it with Add file -> Create new file (empty).
2. Repository **Settings -> Pages -> Build and deployment -> Source: Deploy from a branch**, branch `main`, folder `/ (root)`, **Save**.
3. After a minute the same page shows the address, e.g. `https://<user>.github.io/<repo>/`.

## The link to send people

`.../install.html` - it explains that this is a web app, detects the phone (and the Instagram/Facebook in-app browser, which cannot install apps), offers a one-tap Install button where the browser supports it, and shows illustrated Add-to-Home-Screen steps for Safari, Chrome and Samsung Internet. On a computer it shows a QR code. Pass `site_url` to `build_pwa` so the QR code and link preview point at the right address.

## Adding a map on a phone

Build it in the live builder, tap **Save the map**, then on the app's home page tap **Add a saved map file** and pick the file. It is stored on that phone only and works without signal.

## Sponsored card

`sponsor.json` controls one sponsored card on the home page: set `enabled` to true and fill in `title`, `text` and `url` (an affiliate or sponsor link). It is fetched fresh on every online open, so editing the file on the site changes it immediately. If you run it, declare 'Contains ads' in the Play listing.

## Store listing

https://www.pwabuilder.com packages this hosted app for Google Play and the App Store; `privacy.html` is the privacy policy page the stores ask for.
