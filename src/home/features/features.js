import { rootUrl } from '../../../../global/core/router.js';

export const HOME_SERVICE_SLUGS = [
  'telemetry',
  'whatsapp',
  'hosts',
  'events',
  'guests',
  'web-invite',
  'rooms',
  'flights',
  'trains',
  'sangeet',
  'guestbook',
  'gallery',
  'shagun',
  'tasks',
  'vendors',
  'budget',
  'team-access',
  'calendar'
];

function loadCss(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = href;
  document.head.appendChild(l);
}

export async function initServices(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  loadCss(rootUrl('src/home/features/features.css'));
  const res = await fetch(rootUrl('src/home/features/features.html'));
  slot.innerHTML = await res.text();

  const container = document.getElementById('servicesDeepDivesContainer');
  if (!container) return;

  for (const slug of HOME_SERVICE_SLUGS) {
    loadCss(rootUrl(`src/home/features/${slug}/${slug}.css`));
    const sRes = await fetch(rootUrl(`src/home/features/${slug}/${slug}.html`));
    const wrap = document.createElement('div');
    wrap.innerHTML = await sRes.text();
    container.appendChild(wrap);
  }
}