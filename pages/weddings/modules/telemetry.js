import { computeLiveTelemetry, buildTelemetryCardHTML } from '../utils/weddings-helpers.js';

export function renderTelemetryModule(viewport, headerBanner) {
  const t = computeLiveTelemetry();
  viewport.innerHTML = headerBanner + `<div class="bento-card p-6">${buildTelemetryCardHTML(t)}</div>`;
}