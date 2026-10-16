import { HOME_SERVICE_SLUGS } from '../../api/home-api.js';

function loadCssOnce(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

export async function initServices(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  loadCssOnce('./pages/home/components/services/services.css');

  const shellRes = await fetch('./pages/home/components/services/services.html');
  slot.innerHTML = await shellRes.text();

  const container = slot.querySelector('#servicesDeepDivesContainer');
  if (!container) return;

  const fragments = await Promise.all(
    HOME_SERVICE_SLUGS.map(async (slug) => {
      loadCssOnce(`./pages/home/services/${slug}/${slug}.css`);
      const res = await fetch(`./pages/home/services/${slug}/${slug}.html`);
      return res.text();
    })
  );

  container.innerHTML = fragments.join('\n');
}