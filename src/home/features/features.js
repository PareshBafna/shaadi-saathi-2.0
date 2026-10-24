import { rootUrl } from '../../../../global/core/router.js';

export const HOME_FEATURES_SLUGS = [
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

export async function initFeatures(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  slot.innerHTML = `
    <section class="hp-band" id="all-explainers">
      <div class="hp-wrap space-y-20">
        <div class="hp-head">
          <span class="hp-kicker">Feature Deep-Dives</span>
          <h2>Every feature explained &mdash; custom workflows built for Indian weddings</h2>
          <p>Each feature is purpose-built for a specific wedding bottleneck, with tailored visual boards, live matrices, and interactive controls.</p>
        </div>

        <div id="featuresDeepDivesContainer" class="space-y-20"></div>
      </div>
    </section>
  `;

  const container = document.getElementById('featuresDeepDivesContainer');
  if (!container) return;

  for (const slug of HOME_FEATURES_SLUGS) {
    const mod = await import(`./${slug}/${slug}.js`);
    const wrap = document.createElement('div');
    wrap.id = `feature-deepdive-${slug}`;
    container.appendChild(wrap);
    if (typeof mod.initFeature === 'function') {
      await mod.initFeature(wrap);
    }
  }
}