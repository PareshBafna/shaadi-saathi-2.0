import { computeLiveTelemetry } from '../shared/helpers.js';
import { buildTelemetryCardHTML } from '../shared/telemetry-card.js';

export function render(viewport) {
  const t = computeLiveTelemetry();
  viewport.innerHTML = `<div class="bento-card p-6">${buildTelemetryCardHTML(t)}</div>`;
}