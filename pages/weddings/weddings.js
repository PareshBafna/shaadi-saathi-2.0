import { activeWeddingId, currentModuleId, setCurrentModuleId, weddingEvents, guests, vendors, familyTasks, sangeetLineup, guestbookEntries, roomInventory, AVAILABLE_WEDDING_DATES } from './data/weddings-store.js';
import { formatINR, getStayLocationsList, getTierLabel, getRoomOccupants, computeLiveTelemetry, buildTelemetryCardHTML, showToast } from './utils/weddings-helpers.js';
import { filterPortfolioByRole, renderCreatorWeddings } from './components/directory/directory.js';
import { renderWorkspaceAppLauncher, toggleAppGridLauncher, backToAllWeddings, openWeddingWorkspace, openImportGuestsModal, closeImportGuestsModal, openSampleExportPreviewModal, closeSampleExportPreviewModal, downloadSampleGuestCSV, exportCurrentGuestsCSV, openCreateWeddingModal, closeCreateWeddingModal, saveNewWedding } from './components/workspace-shell/workspace-shell.js';

import { renderTelemetryModule } from './modules/telemetry.js';
import { renderWhatsAppModule } from './modules/whatsapp.js';
import { renderHostsModule } from './modules/hosts.js';
import { renderEventsModule } from './modules/events.js';
import { renderGuestsModule } from './modules/guests.js';
import { renderWebInviteModule } from './modules/web-invite.js';
import { renderRoomsModule } from './modules/rooms.js';
import { renderFlightsModule } from './modules/flights.js';
import { renderTrainsModule } from './modules/trains.js';
import { renderSangeetModule } from './modules/sangeet.js';
import { renderGuestbookModule } from './modules/guestbook.js';
import { renderGalleryModule } from './modules/gallery.js';
import { renderShagunModule } from './modules/shagun.js';
import { renderTasksModule } from './modules/tasks.js';
import { renderVendorsModule } from './modules/vendors.js';

import { navigateTo, rootUrl } from '../../global/router.js';

export {
  openWeddingWorkspace,
  backToAllWeddings,
  filterPortfolioByRole,
  renderCreatorWeddings,
  renderWorkspaceAppLauncher,
  toggleAppGridLauncher,
  openImportGuestsModal,
  closeImportGuestsModal,
  openSampleExportPreviewModal,
  closeSampleExportPreviewModal,
  downloadSampleGuestCSV,
  exportCurrentGuestsCSV,
  openCreateWeddingModal,
  closeCreateWeddingModal,
  saveNewWedding
};

export function openSubPage(moduleId, skipPush = false) {
  setCurrentModuleId(moduleId);

  if (!skipPush && !document.getElementById('creator-single-workspace')?.classList.contains('hidden')) {
    navigateTo('creator', { wedding: activeWeddingId, module: moduleId });
  }
  renderWorkspaceAppLauncher();
  const viewport = document.getElementById('activeModuleViewport');
  if (!viewport) return;

  const names = {
    overview: { icon: '📊', name: 'Overview & Telemetry', badge: 'Telemetry', desc: 'Live wedding telemetry and metrics' },
    whatsapp: { icon: '💬', name: 'WhatsApp Blaster', badge: 'Messaging', desc: 'Meta-verified invite dispatch & delivery status' },
    hosts: { icon: '👑', name: 'Family Hosts', badge: 'Hosts', desc: 'Individual family host profiles & details' },
    events: { icon: '📅', name: 'Events Schedule', badge: 'Events', desc: 'Ceremonies, venues, timings & dress codes' },
    rsvp: { icon: '👥', name: 'Guest List', badge: 'Guests', desc: 'Family members, RSVP status, pax & tiers' },
    guests: { icon: '👥', name: 'Guest List', badge: 'Guests', desc: 'Family members, RSVP status, pax & tiers' },
    webinvites: { icon: '💌', name: 'Web Invite Pass', badge: 'Invitation', desc: 'Interactive 3D wax-seal royal web invitation' },
    'web-invite': { icon: '💌', name: 'Web Invite Pass', badge: 'Invitation', desc: 'Interactive 3D wax-seal royal web invitation' },
    rooms: { icon: '🏨', name: 'Stay Accommodation', badge: 'Rooms', desc: 'Hotel inventory, room cards & outstation stay' },
    flights: { icon: '✈️', name: 'Flight Manifest', badge: 'Travel', desc: 'Air arrivals, route groups & PNR tracker' },
    trains: { icon: '🚆', name: 'Train Manifest', badge: 'Travel', desc: 'Train arrivals, platforms & IRCTC PNR' },
    sangeet: { icon: '🎵', name: 'Sangeet Lineup', badge: 'Performances', desc: 'Stage performance cues, songs & props' },
    guestbook: { icon: '📖', name: 'Guestbook Wishes', badge: 'Blessings', desc: 'Digital blessings & aashirwad board' },
    gallery: { icon: '🖼️', name: 'Photo Gallery', badge: 'Media', desc: 'Cloud albums & event photography' },
    shagun: { icon: '🧧', name: 'Shagun Ledger', badge: 'Finance', desc: 'Traditional envelopes & gift registry' },
    tasks: { icon: '✅', name: 'Tasks Checklist', badge: 'Operations', desc: 'Family responsibility task assignments' },
    vendors: { icon: '🤝', name: 'Vendors & Payouts', badge: 'Contracts', desc: 'Supplier contracts & payment milestones' },
    budget: { icon: '₹', name: 'Budget Planner', badge: 'Cashflow Ledger', desc: 'Supplier contracts, advance paid & remaining balance due' }
  };

  const modInfo = names[moduleId] || { icon: '📊', name: moduleId.toUpperCase(), badge: 'Module', desc: 'Service module view' };

  const headerBanner = `
    <div class="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-surface via-card to-surface">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-3xl shrink-0">${modInfo.icon}</div>
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-gold">Service Workspace</span>
          <h3 class="font-serif text-3xl font-bold text-cream mt-0.5">${modInfo.name}</h3>
          <p class="text-sm text-muted">${modInfo.desc}</p>
        </div>
      </div>
      <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emeraldSS/15 text-emeraldSS border border-emeraldSS/30 shrink-0">● ${modInfo.badge}</span>
    </div>
  `;

  if (moduleId === 'overview') renderTelemetryModule(viewport, headerBanner);
  else if (moduleId === 'whatsapp') renderWhatsAppModule(viewport, headerBanner);
  else if (moduleId === 'hosts') renderHostsModule(viewport, headerBanner);
  else if (moduleId === 'events') renderEventsModule(viewport, headerBanner);
  else if (moduleId === 'guests' || moduleId === 'rsvp') renderGuestsModule(viewport, headerBanner);
  else if (moduleId === 'web-invite' || moduleId === 'webinvites') renderWebInviteModule(viewport, headerBanner);
  else if (moduleId === 'rooms') renderRoomsModule(viewport, headerBanner);
  else if (moduleId === 'flights') renderFlightsModule(viewport, headerBanner);
  else if (moduleId === 'trains') renderTrainsModule(viewport, headerBanner);
  else if (moduleId === 'sangeet') renderSangeetModule(viewport, headerBanner);
  else if (moduleId === 'guestbook') renderGuestbookModule(viewport, headerBanner);
  else if (moduleId === 'gallery') renderGalleryModule(viewport, headerBanner);
  else if (moduleId === 'shagun') renderShagunModule(viewport, headerBanner);
  else if (moduleId === 'tasks') renderTasksModule(viewport, headerBanner);
  else if (moduleId === 'vendors' || moduleId === 'budget') renderVendorsModule(viewport, headerBanner);
  else {
    viewport.innerHTML = headerBanner + `<div class="bento-card p-6 text-cream">Module ${moduleId} active.</div>`;
  }
}

export function switchWorkspaceModule(modId) {
  openSubPage(modId);
}

export async function initWeddingsView(selector = '#root-creator') {
  const container = document.querySelector(selector);
  if (container && !document.getElementById('creatorWeddingsGrid')) {
    const htmlText = await (await fetch(rootUrl('pages/weddings/weddings.html'))).text();
    const doc = new DOMParser().parseFromString(htmlText, 'text/html');
    const inner = doc.getElementById('weddings-view-content');
    container.innerHTML = inner ? inner.innerHTML : htmlText;
  }
  renderCreatorWeddings();
  renderWorkspaceAppLauncher();
}

Object.assign(window, {
  filterPortfolioByRole,
  renderCreatorWeddings,
  openWeddingWorkspace,
  backToAllWeddings,
  toggleAppGridLauncher,
  switchWorkspaceModule,
  openSubPage,
  openImportGuestsModal,
  closeImportGuestsModal,
  openSampleExportPreviewModal,
  closeSampleExportPreviewModal,
  downloadSampleGuestCSV,
  exportCurrentGuestsCSV,
  openCreateWeddingModal,
  closeCreateWeddingModal,
  saveNewWedding
});