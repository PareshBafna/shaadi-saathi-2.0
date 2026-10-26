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
  telemetry: () => import('./modules/telemetry/telemetry.js').then(m => m.renderTelemetryModule),
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

export function backToLauncherHub(skipPush = false) {
  setCurrentModuleId(null);

  const launcherSection = document.getElementById('wsAppLauncherSection');
  const viewport = document.getElementById('activeModuleViewport');
  const topHubBtn = document.getElementById('wsBackToHubTopBtn');

  if (launcherSection) launcherSection.classList.remove('hidden');
  if (topHubBtn) topHubBtn.classList.add('hidden');
  if (viewport) {
    viewport.classList.add('hidden');
    viewport.innerHTML = '';
  }

  if (!skipPush && !document.getElementById('creator-single-workspace')?.classList.contains('hidden')) {
    navigateTo('creator', { wedding: activeWeddingId, module: 'hub' });
  }

  renderWorkspaceAppLauncher();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export async function openSubPage(moduleId, skipPush = false) {
  if (!moduleId || moduleId === 'hub') {
    backToLauncherHub(skipPush);
    return;
  }

  setCurrentModuleId(moduleId);

  const launcherSection = document.getElementById('wsAppLauncherSection');
  const viewport = document.getElementById('activeModuleViewport');
  const topHubBtn = document.getElementById('wsBackToHubTopBtn');
  if (!viewport) return;

  if (launcherSection) launcherSection.classList.add('hidden');
  if (topHubBtn) topHubBtn.classList.remove('hidden');
  viewport.classList.remove('hidden');

  if (!skipPush && !document.getElementById('creator-single-workspace')?.classList.contains('hidden')) {
    navigateTo('creator', { wedding: activeWeddingId, module: moduleId });
  }

  const backBarHTML = `
    <div class="flex items-center justify-between">
      <button onclick="backToLauncherHub()" class="px-4 py-2 rounded-xl bg-card border border-gold/40 text-gold hover:bg-gold hover:text-obsidian text-xs font-bold flex items-center gap-2 transition cursor-pointer">
        <span>←</span> Back to All Modules (18 Apps)
      </button>
    </div>
  `;

  const headerBanner = backBarHTML + buildModuleHeaderHTML(moduleId);

  try {
    const loader = MODULE_LOADERS[moduleId];
    if (loader) {
      const renderFn = await loader();
      if (typeof renderFn === 'function') {
        await renderFn(viewport, headerBanner);
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
    }
    viewport.innerHTML = headerBanner + `<div class="bento-card p-6 text-cream">Module <strong>${moduleId}</strong> active.</div>`;
    window.scrollTo({ top: 0, behavior: 'instant' });
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
  backToLauncherHub,
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