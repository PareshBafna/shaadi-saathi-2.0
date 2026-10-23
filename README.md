# Shaadi Saathi (plain HTML, CSS, JS)

Step 1: home page. Weddings comes in step 2.

```
index.html
manifest.webmanifest
assets/icons/
src/
  main.js
  tailwind-config.js
  core/        router.js, app.js
  components/  header, footer, navigation, toast
  styles/      base, shell, home, home-sections, rail
  home/
    home.js            builds the page
    hero, comparison, suites, deep-dives, pricing, addons, faq, scrollbar
    services/          18 services in 4 suite files + index.js
```

Add a service: add one object in `src/home/services/<suite>.js`.
Add a FAQ: add one object in `src/home/faq.js`.
Run locally: `npx serve .` (ES modules need http, not file://).
