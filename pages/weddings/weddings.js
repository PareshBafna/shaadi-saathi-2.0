import { activeWeddingId, computeLiveTelemetry } from './data/weddings-store.js';
import { formatINR, getStayLocationsList, getRoomOccupants, showToast } from './utils/weddings-helpers.js';
import { filterPortfolioByRole, renderCreatorWeddings } from './components/directory/directory.js';
import { renderWorkspaceAppLauncher, toggleAppGridLauncher, backToAllWeddings as wsBackToAllWeddings, openWeddingWorkspace as wsOpenWeddingWorkspace, openImportGuestsModal, closeImportGuestsModal, openSampleExportPreviewModal, closeSampleExportPreviewModal, downloadSampleGuestCSV, exportCurrentGuestsCSV, openCreateWeddingModal, closeCreateWeddingModal, saveNewWedding } from './components/workspace-shell/workspace-shell.js';
import { renderModuleHeader } from './components/module-header/module-header.js';

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
import { renderBudgetModule } from './modules/budget.js';
import { renderTeamAccessModule } from './modules/team-access.js';
import { renderCalendarModule } from './modules/calendar.js';

import { navigateTo } from '../../global/router.js';

export function backToAllWeddings() {
  wsBackToAllWeddings();
}

export function openWeddingWorkspace(weddingId) {
  wsOpenWeddingWorkspace(weddingId);
}

export function openSubPage(moduleId, skipPush = false) {
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
    guests: { icon: '👥', name: 'Guest List', badge: 'Guests', desc: 'Family members, RSVP status, pax & tiers' },
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
    budget: { icon: '💰', name: 'Budget Allocator', badge: 'Finance', desc: 'Master budget tracking & variances' },
    'team-access': { icon: '🔐', name: 'Team Access', badge: 'Collaborators', desc: 'Permissions and roles management' },
    calendar: { icon: '🗓️', name: 'Event Calendar', badge: 'Itinerary', desc: 'Master schedule and timeline slots' }
  };

  const modInfo = names[moduleId] || { icon: '📊', name: moduleId.toUpperCase(), badge: 'Module', desc: 'Service module view' };
  const headerBanner = renderModuleHeader(modInfo);

  if (moduleId === 'overview') renderTelemetryModule(viewport, headerBanner);
  else if (moduleId === 'whatsapp') renderWhatsAppModule(viewport, headerBanner);
  else if (moduleId === 'hosts') renderHostsModule(viewport, headerBanner);
  else if (moduleId === 'events') renderEventsModule(viewport, headerBanner);
  else if (moduleId === 'guests') renderGuestsModule(viewport, headerBanner);
  else if (moduleId === 'web-invite') renderWebInviteModule(viewport, headerBanner);
  else if (moduleId === 'rooms') renderRoomsModule(viewport, headerBanner);
  else if (moduleId === 'flights') renderFlightsModule(viewport, headerBanner);
  else if (moduleId === 'trains') renderTrainsModule(viewport, headerBanner);
  else if (moduleId === 'sangeet') renderSangeetModule(viewport, headerBanner);
  else if (moduleId === 'guestbook') renderGuestbookModule(viewport, headerBanner);
  else if (moduleId === 'gallery') renderGalleryModule(viewport, headerBanner);
  else if (moduleId === 'shagun') renderShagunModule(viewport, headerBanner);
  else if (moduleId === 'tasks') renderTasksModule(viewport, headerBanner);
  else if (moduleId === 'vendors') renderVendorsModule(viewport, headerBanner);
  else if (moduleId === 'budget') renderBudgetModule(viewport, headerBanner);
  else if (moduleId === 'team-access') renderTeamAccessModule(viewport, headerBanner);
  else if (moduleId === 'calendar') renderCalendarModule(viewport, headerBanner);
  else {
    viewport.innerHTML = headerBanner + `<div class="bento-card p-6 text-cream">Module ${moduleId} active.</div>`;
  }
}

export function switchWorkspaceModule(modId) {
  openSubPage(modId);
}

export function initWeddingsView(selector = '#root-creator') {
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