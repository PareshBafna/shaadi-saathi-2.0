import { rootUrl } from '../../../../global/core/router.js';

export const HOME_SERVICE_SLUGS = [
  'telemetry',
  'whatsapp-deck',
  'family-hosts',
  'events',
  'guests',
  'web-invite',
  'stay-accommodation',
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

export function loadCssOnce(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = href;
  document.head.appendChild(l);
}

export async function initServices(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  slot.innerHTML = `
    <section class="hp-band" id="all-services-deepdives">
      <div class="hp-wrap space-y-12">
        <div class="hp-head">
          <span class="hp-kicker">Feature Deep-Dives</span>
          <h2>Explore every modular wedding system in complete detail</h2>
          <p>Scroll down to preview every capability or jump straight into any module inside your planner workspace.</p>
        </div>
        <div id="servicesDeepDivesContainer" class="space-y-16"></div>
      </div>
    </section>
  `;

  const container = document.getElementById('servicesDeepDivesContainer');
  if (!container) return;

  for (const slug of HOME_SERVICE_SLUGS) {
    const mod = await import(`./${slug}/${slug}.js`);
    const wrap = document.createElement('div');
    wrap.id = `service-deepdive-${slug}`;
    container.appendChild(wrap);
    if (typeof mod.initService === 'function') {
      await mod.initService(wrap);
    }
  }
}