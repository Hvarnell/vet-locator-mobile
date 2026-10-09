# Vet locator - phone app

A static web app: host this folder and open it on a phone. Everyone's maps are added on their own phone and stay there.

## Put it online with GitHub Pages (free)

1. Create a **public** repository on GitHub and upload every file in this folder (loose files, no sub-folders) with **Add file -> Upload files**. `.nojekyll` is a hidden file; if the upload box skips it, create it with Add file -> Create new file (empty).
2. Repository **Settings -> Pages -> Build and deployment -> Source: Deploy from a branch**, branch `main`, folder `/ (root)`, **Save**.
3. After a minute the same page shows the address, e.g. `https://<user>.github.io/<repo>/`. Open it on the phone and add it to the home screen.

## Adding a map on a phone

Build it in the live builder, tap **Save the map**, then on the app's home page tap **Add a saved map file** and pick the file. It is stored on that phone only and works without signal.

## Store listing

https://www.pwabuilder.com packages this hosted app for Google Play and the App Store; `privacy.html` is the privacy policy page the stores ask for.
