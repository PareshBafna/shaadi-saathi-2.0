import { activeWeddingId, setCurrentModuleId } from './data/weddings-store.js';
import { buildDirectoryViewHTML, filterPortfolioByRole, renderCreatorWeddings } from './components/directory/directory.js';
import {
  buildWorkspaceShellHTML,
  renderWorkspaceAppLauncher,
  toggleAppGridLauncher,
  backToAllWeddings,
  openWeddingWorkspace,
  openImportGuestsModal,
  closeImportGuestsModal,
  openSampleExportPreviewModal,
  closeSampleExportPreviewModal,
  downloadSampleGuestCSV,
  exportCurrentGuestsCSV,
  openCreateWeddingModal,
  closeCreateWeddingModal,
  saveNewWedding
} from './components/workspace-shell/workspace-shell.js';
import { buildModuleHeaderHTML } from './components/module-header/module-header.js';
import { navigateTo } from '../../global/core/router.js';

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

const MODULE_LOADERS = {
  overview: () => import('./modules/telemetry/telemetry.js').then(m => m.renderTelemetryModule),
  whatsapp: () => import('./modules/whatsapp/whatsapp.js').then(m => m.renderWhatsAppModule),
  hosts: () => import('./modules/hosts/hosts.js').then(m => m.renderHostsModule),
  events: () => import('./modules/events/events.js').then(m => m.renderEventsModule),
  guests: () => import('./modules/guests/guests.js').then(m => m.renderGuestsModule),
  rsvp: () => import('./modules/guests/guests.js').then(m => m.renderGuestsModule),
  'web-invite': () => import('./modules/web-invite/web-invite.js').then(m => m.renderWebInviteModule),
  webinvites: () => import('./modules/web-invite/web-invite.js').then(m => m.renderWebInviteModule),
  rooms: () => import('./modules/rooms/rooms.js').then(m => m.renderRoomsModule),
  flights: () => import('./modules/flights/flights.js').then(m => m.renderFlightsModule),
  trains: () => import('./modules/trains/trains.js').then(m => m.renderTrainsModule),
  sangeet: () => import('./modules/sangeet/sangeet.js').then(m => m.renderSangeetModule),
  guestbook: () => import('./modules/guestbook/guestbook.js').then(m => m.renderGuestbookModule),
  gallery: () => import('./modules/gallery/gallery.js').then(m => m.renderGalleryModule),
  shagun: () => import('./modules/shagun/shagun.js').then(m => m.renderShagunModule),
  tasks: () => import('./modules/tasks/tasks.js').then(m => m.renderTasksModule),
  vendors: () => import('./modules/vendors/vendors.js').then(m => m.renderVendorsModule),
  budget: () => import('./modules/budget/budget.js').then(m => m.renderBudgetModule || m.default),
  calendar: () => import('./modules/calendar/calendar.js').then(m => m.renderCalendarModule || m.default),
  'team-access': () => import('./modules/team-access/team-access.js').then(m => m.renderTeamAccessModule || m.default)
};

export async function openSubPage(moduleId, skipPush = false) {
  setCurrentModuleId(moduleId);

  if (!skipPush && !document.getElementById('creator-single-workspace')?.classList.contains('hidden')) {
    navigateTo('creator', { wedding: activeWeddingId, module: moduleId });
  }

  renderWorkspaceAppLauncher();
  const viewport = document.getElementById('activeModuleViewport');
  if (!viewport) return;

  const headerBanner = buildModuleHeaderHTML(moduleId);

  try {
    const loader = MODULE_LOADERS[moduleId];
    if (loader) {
      const renderFn = await loader();
      if (typeof renderFn === 'function') {
        renderFn(viewport, headerBanner);
        return;
      }
    }
    viewport.innerHTML = headerBanner + `<div class="bento-card p-6 text-cream">Module <strong>${moduleId}</strong> active.</div>`;
  } catch (err) {
    console.warn(`Module ${moduleId} fallback:`, err);
    viewport.innerHTML = headerBanner + `<div class="bento-card p-6 text-cream">Module <strong>${moduleId}</strong> ready.</div>`;
  }
}

export function switchWorkspaceModule(modId) {
  openSubPage(modId);
}

export async function initWeddingsView(selector = '#root-creator') {
  const container = document.querySelector(selector);
  if (!container) return;

  if (!document.getElementById('creatorWeddingsGrid')) {
    container.innerHTML = `
      <div class="min-h-screen bg-obsidian text-cream py-4 space-y-6">
        ${buildDirectoryViewHTML()}
        ${buildWorkspaceShellHTML()}
      </div>
    `;
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