import { computeLiveTelemetry } from '../data/weddings-store.js';
import { formatINR } from '../utils/weddings-helpers.js';

export function renderTelemetryModule(viewport, headerBanner) {
  const t = computeLiveTelemetry();
  viewport.innerHTML = headerBanner + `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Families</span><strong class="text-2xl text-cream">${t.totalFamilies} Families</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Attending Pax</span><strong class="text-2xl text-emeraldSS">${t.attendingPax} Pax</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Total Outflow</span><strong class="text-2xl text-gold">${formatINR(t.totalCost)}</strong></div>
      <div class="bento-card p-5"><span class="text-xs text-muted block">Paid Out</span><strong class="text-2xl text-skySS">${formatINR(t.totalPaid)}</strong></div>
    </div>
    <div class="bento-card p-6 space-y-4">
      <h4 class="font-serif text-2xl font-bold text-cream">Live Wedding Pulse &amp; Telemetry</h4>
      <p class="text-sm text-muted">Real-time aggregate data across all guest RSVPs, hotel rooms, transport, and vendor contracts.</p>
    </div>
  `;
}