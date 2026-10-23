import { renderTravelManifest, createTravelActions } from '../shared/travel-manifest.js';

const config = {
  mode: 'Flight',
  include: g => g.status !== 'Declined' && (!g.travel || g.travel.mode === 'Flight'),
  defaults: { from: 'TBD', to: 'Udaipur (UDR)', number: 'Flight Pending', date: '12 Dec 2026' },
  rowDefault: { fromCity: 'Mumbai (BOM)', toCity: 'Udaipur (UDR)', number: '', pnr: '', date: '12 Dec 2026', arrivalTime: '' },
  paxColor: 'text-skySS',
  numberColor: 'text-skySS',
  columns: [
    { title: '1. Route-Wise (From → To)', titleColor: 'text-skySS',     icon: '✈️', nameColor: 'text-cream',     badge: 'bg-skySS/20 text-skySS' },
    { title: '2. Flight-Wise Grouping',   titleColor: 'text-gold',      icon: '🛫', nameColor: 'text-gold',      badge: 'bg-gold/20 text-gold' },
    { title: '3. Date &amp; Time Wise',   titleColor: 'text-emeraldSS', icon: '📅', nameColor: 'text-emeraldSS', badge: 'bg-emeraldSS/20 text-emeraldSS' }
  ],
  pending: { title: 'Guests With Pending Flight PNR', allDone: '✓ All air passengers have confirmed flight PNRs!' },
  table: {
    title: '4. Guest Flight Manifest (Edit From, To, Flight No., Date &amp; PNR)',
    headers: ['Guest Family', 'Pax', 'From City', 'To City', 'Flight No. &amp; Airline', 'Date', 'Landing Time', 'PNR']
  }
};

export const render = viewport => renderTravelManifest(viewport, config);
export const actions = createTravelActions(config);
