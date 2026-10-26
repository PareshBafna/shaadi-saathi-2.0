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
    <section class="hp-band" id="all-features-deepdives">
      <div class="hp-wrap space-y-12">
        <div class="hp-head">
          <span class="hp-kicker">Feature Deep-Dives</span>
          <h2>Explore every modular wedding system in complete detail</h2>
          <p>Scroll down to preview every capability or jump straight into any module inside your planner workspace.</p>
        </div>
        <div id="featuresDeepDivesContainer" class="space-y-16"></div>
      </div>
    </section>
  `;

  const container = document.getElementById('featuresDeepDivesContainer');
  if (!container) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        const wrap = entry.target;
        obs.unobserve(wrap);
        const slug = wrap.dataset.slug;
        if (slug) {
          const mod = await import(`./${slug}/${slug}.js`);
          if (typeof mod.initFeature === 'function') {
            await mod.initFeature(wrap);
          }
        }
      }
    });
  }, { rootMargin: '300px 0px' });

  for (const slug of HOME_FEATURES_SLUGS) {
    const wrap = document.createElement('div');
    wrap.id = `feature-${slug}`; // FIXED: changed from feature-deepdive-${slug} to feature-${slug} to match scrollbar node targets
    wrap.dataset.slug = slug;
    wrap.style.minHeight = '300px';
    container.appendChild(wrap);
    observer.observe(wrap);
  }
}