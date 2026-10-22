import { weddingsPortfolio, activeRoleFilter, setActiveRoleFilter, currentModuleId, setCurrentModuleId } from './data/weddings-store.js';
import { formatINR, computeLiveTelemetry, buildTelemetryCardHTML } from './utils/weddings-helpers.js';
import { filterPortfolioByRole, renderCreatorWeddings } from './components/directory/directory.js';
import { renderWorkspaceAppLauncher, toggleAppGridLauncher, backToAllWeddings, openWeddingWorkspace, openCreateWeddingModal, closeCreateWeddingModal, saveNewWedding } from './components/workspace-shell/workspace-shell.js';

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

export { openWeddingWorkspace, backToAllWeddings, filterPortfolioByRole, renderCreatorWeddings, openCreateWeddingModal, closeCreateWeddingModal, saveNewWedding, toggleAppGridLauncher };

export function openSubPage(moduleId, skipPush = false) {
  setCurrentModuleId(moduleId);
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
    vendors: { icon: '🤝', name: 'Vendors & Payouts', badge: 'Contracts', desc: 'Supplier contracts & payment milestones' }
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
}

export function switchWorkspaceModule(modId) {
  openSubPage(modId);
}

export async function initWeddingsView(selector = '#root-creator') {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = `
    <div id="creator-all-weddings" class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bento-card p-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-gold">Creator Super Admin OS</span>
          <h1 class="font-serif text-3xl font-bold text-cream mt-1">Shaadi Saathi Multi-Wedding Portfolio</h1>
          <p class="text-sm text-muted">Manage all active client weddings, roles, global telemetry, and live workflows.</p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="openCreateWeddingModal()" class="btn-gold px-5 py-3 rounded-xl text-xs font-bold">+ Create New Wedding</button>
        </div>
      </div>

      <div id="roleFilterButtons" class="flex flex-wrap items-center gap-2">
        <button onclick="filterPortfolioByRole('ALL')" data-rolebtn="ALL" class="px-4 py-2 rounded-xl text-xs font-bold bg-gold text-obsidian">ALL ROLES</button>
        <button onclick="filterPortfolioByRole('CREATOR')" data-rolebtn="CREATOR" class="px-4 py-2 rounded-xl text-xs font-bold bg-card border border-borderWarm text-cream">CREATOR</button>
        <button onclick="filterPortfolioByRole('HOST')" data-rolebtn="HOST" class="px-4 py-2 rounded-xl text-xs font-bold bg-card border border-borderWarm text-cream">HOST</button>
        <button onclick="filterPortfolioByRole('USER')" data-rolebtn="USER" class="px-4 py-2 rounded-xl text-xs font-bold bg-card border border-borderWarm text-cream">USER</button>
        <button onclick="filterPortfolioByRole('GUEST')" data-rolebtn="GUEST" class="px-4 py-2 rounded-xl text-xs font-bold bg-card border border-borderWarm text-cream">GUEST</button>
      </div>

      <div id="globalRollupStrip" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"></div>
      <div id="creatorWeddingsGrid" class="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
    </div>

    <div id="creator-single-workspace" class="hidden space-y-6">
      <div class="bento-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <button onclick="backToAllWeddings()" class="px-4 py-2 rounded-xl bg-card border border-borderWarm text-xs font-bold text-cream hover:bg-gold hover:text-obsidian transition">← All Weddings</button>
          <div>
            <div class="flex items-center gap-2">
              <h2 id="wsBannerCouple" class="font-serif text-3xl font-bold text-cream">Wedding Workspace</h2>
              <span id="wsBannerRoleBadge" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold text-obsidian">CREATOR ADMIN</span>
            </div>
            <span id="wsBannerDates" class="text-xs text-gold">18–20 Nov 2026 • Udaipur</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="toggleAppGridLauncher()" class="px-4 py-2.5 rounded-xl bg-gold/20 border border-gold/40 text-gold text-xs font-bold">📂 Toggle App Launcher</button>
        </div>
      </div>

      <div id="wsAppLauncherSection" class="bento-card p-6 space-y-5">
        <div class="flex justify-between items-center">
          <h3 class="font-serif text-xl font-bold text-cream">Shaadi Saathi OS App Launcher</h3>
          <span class="text-xs text-muted">Click any app icon to switch service workspace</span>
        </div>
        <div id="wsAppIconGrid" class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3"></div>
        <div id="wsCriticalAlertsBox" class="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-borderWarm"></div>
      </div>

      <div id="activeModuleViewport" class="space-y-6"></div>
    </div>

    <div id="createWeddingModal" class="fixed inset-0 bg-obsidian/80 backdrop-blur-sm hidden items-center justify-center z-50 p-4">
      <div class="bento-card p-6 max-w-md w-full space-y-4 bg-obsidian border border-gold/40">
        <h3 class="font-serif text-2xl font-bold text-cream">Create New Wedding Instance</h3>
        <div class="space-y-3">
          <div><label class="text-xs text-muted block mb-1">Couple Names</label><input type="text" id="cwCoupleInput" placeholder="e.g. Aarav & Ananya" class="ss-input w-full" /></div>
          <div><label class="text-xs text-muted block mb-1">City / Venue</label><input type="text" id="cwCityInput" placeholder="e.g. Udaipur" class="ss-input w-full" /></div>
        </div>
        <div class="flex justify-end gap-3 pt-2">
          <button onclick="closeCreateWeddingModal()" class="px-4 py-2 rounded-xl bg-card border border-borderWarm text-xs font-bold text-cream">Cancel</button>
          <button onclick="saveNewWedding()" class="btn-gold px-5 py-2 rounded-xl text-xs font-bold">Create Workspace</button>
        </div>
      </div>
    </div>
  `;

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
  openCreateWeddingModal,
  closeCreateWeddingModal,
  saveNewWedding
});