# Shaadi Saathi (plain HTML, CSS, JS)

```
index.html
manifest.webmanifest
assets/icons/
src/
  main.js
  tailwind-config.js
  core/         router.js, app.js
  components/   header, footer, navigation, toast
  styles/       base, shell, home, home-sections, weddings, rail
  home/         landing page (see home.js)
    services/   18 services in 4 suite files
  features/
    weddings/
      weddings.js         entry used by core/app.js
      shell/              directory, workspace, create-modal, module-header, actions
      shared/             store, helpers, telemetry-card, travel-manifest, ui
      modules/            registry.js + one file per module (18)
```

Add a weddings module: one file in `modules/` exporting `render(root)` + one line in `modules/registry.js`.
Buttons use `data-action` (click) and `data-change` (edit).
Shell actions: `shell/actions.js`. Module actions: `export const actions` in the module file.
After an action runs, the open module redraws. Return `false` from a handler to skip the redraw.
Data is in memory (`shared/store.js`). Resets on refresh and is shared by all weddings.
Run locally: `npx serve .` (ES modules need http, not file://).
