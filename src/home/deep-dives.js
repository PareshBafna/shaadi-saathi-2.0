// "Feature Deep-Dives" section: one row per service, built from services/*.js
import { ALL_SERVICES } from './services/index.js';

const rowHtml = (s, i) => `
  <div class="hp-split${i ? ' pt-14 border-t border-borderWarm' : ''}">
    <div>
      <span class="hp-kicker">${s.kicker}</span>
      <h2>${s.title}</h2>
      <p class="mt-3">${s.text}</p>
      ${s.extra || ''}
      <div class="mt-6"><button type="button" data-open="${s.module}" class="hp-link">${s.cta}</button></div>
    </div>
    ${s.visual}
  </div>`;

export function renderDeepDives() {
  return `
<section class="hp-band" id="all-explainers">
  <div class="hp-wrap space-y-20">
    <div class="hp-head">
      <span class="hp-kicker">Feature Deep-Dives</span>
      <h2>Every service explained — custom workflows built for Indian weddings</h2>
      <p>Each service is purpose-built for a specific wedding bottleneck, with tailored visual boards, live matrices, and interactive controls.</p>
    </div>
    <div class="space-y-20">${ALL_SERVICES.map(rowHtml).join('')}</div>
  </div>
</section>`;
}
