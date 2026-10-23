import { renderTravelManifest, createTravelActions } from '../shared/travel-manifest.js';

const config = {
  mode: 'Train',
  include: g => g.status !== 'Declined' && g.travel && g.travel.mode === 'Train',
  defaults: { from: 'Origin TBD', to: 'Udaipur City (UDZ)', number: 'Train Pending', date: '12 Dec 2026' },
  rowDefault: { fromCity: 'Delhi', toCity: 'Udaipur', number: '', pnr: '', date: '12 Dec 2026', arrivalTime: '' },
  paxColor: 'text-gold',
  numberColor: 'text-gold',
  columns: [
    { title: '1. Route-Wise (From → To)',       titleColor: 'text-gold',      icon: '🚆', nameColor: 'text-cream',     badge: 'bg-gold/20 text-gold' },
    { title: '2. Train-Wise Grouping',          titleColor: 'text-emeraldSS', icon: '🛤️', nameColor: 'text-gold',      badge: 'bg-emeraldSS/20 text-emeraldSS' },
    { title: '3. Date &amp; Platform Time Wise', titleColor: 'text-skySS',     icon: '📅', nameColor: 'text-skySS',     badge: 'bg-skySS/20 text-skySS' }
  ],
  pending: null,
  table: {
    title: '4. Guest Train Manifest (Edit From, To, Train No., Date &amp; PNR)',
    headers: ['Guest Family', 'Pax', 'From Station', 'To Station', 'Train No. &amp; Name', 'Date', 'Arrival Time', 'IRCTC PNR']
  }
};

export const render = viewport => renderTravelManifest(viewport, config);
export const actions = createTravelActions(config);
