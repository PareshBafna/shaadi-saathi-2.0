export const HOME_SERVICE_SLUGS = [
  'telemetry',
  'whatsapp-deck',
  'family-hosts',
  'events',
  'guest',
  'web-invite',
  'stay-accomodation',
  'flight-arrangements',
  'train-arrangements',
  'sangeeth-lineup',
  'guestbook',
  'gallery',
  'shagun-gifts',
  'tasks-checklist',
  'event-vendors',
  'budget-planner',
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

  loadCss('./home/services/services.css');
  const res = await fetch('./home/services/services.html');
  slot.innerHTML = await res.text();

  const container = document.getElementById('servicesDeepDivesContainer');
  if (!container) return;

  for (const slug of HOME_SERVICE_SLUGS) {
    loadCss(`./home/services/${slug}/${slug}.css`);
    const sRes = await fetch(`./home/services/${slug}/${slug}.html`);
    const wrap = document.createElement('div');
    wrap.innerHTML = await sRes.text();
    container.appendChild(wrap);
  }
}