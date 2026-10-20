import { renderModuleHeader } from '../components/module-header/module-header.js';
import { computeLiveTelemetry, buildTelemetryCardHTML } from '../utils/weddings-helpers.js';

export function renderTelemetryModule() {
  const t = computeLiveTelemetry();
  return renderModuleHeader('overview') + `<div class="bento-card p-6">${buildTelemetryCardHTML(t)}</div>`;
}