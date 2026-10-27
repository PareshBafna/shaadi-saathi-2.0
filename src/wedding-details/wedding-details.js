import { activeWeddingId, setCurrentModuleId } from '../weddings/data/weddings-store.js';
import { buildModuleHeaderHTML } from '../weddings/components/module-header/module-header.js';
import { navigateTo } from '../../global/core/router.js';
import { loadCss } from '../../global/core/state.js';

export const COMPONENT_LOADERS = {
  overview: () => import('./components/telemetry/telemetry.js').then(m => m.renderTelemetryModule),
  telemetry: () => import('./components/telemetry/telemetry.js').then(m => m.renderTelemetryModule),
  whatsapp: () => import('./components/whatsapp/whatsapp.js').then(m => m.renderWhatsAppModule),
  hosts: () => import('./components/hosts/hosts.js').then(m => m.renderHostsModule),
  events: () => import('./components/events/events.js').then(m => m.renderEventsModule),
  guests: () => import('./components/guests/guests.js').then(m => m.renderGuestsModule),
  rsvp: () => import('./components/guests/guests.js').then(m => m.renderGuestsModule),
  'web-invite': () => import('./components/web-invite/web-invite.js').then(m => m.renderWebInviteModule),
  webinvites: () => import('./components/web-invite/web-invite.js').then(m => m.renderWebInviteModule),
  rooms: () => import('./components/rooms/rooms.js').then(m => m.renderRoomsModule),
  flights: () => import('./components/flights/flights.js').then(m => m.renderFlightsModule),
  trains: () => import('./components/trains/trains.js').then(m => m.renderTrainsModule),
  sangeet: () => import('./components/sangeet/sangeet.js').then(m => m.renderSangeetModule),
  guestbook: () => import('./components/guestbook/guestbook.js').then(m => m.renderGuestbookModule),
  gallery: () => import('./components/gallery/gallery.js').then(m => m.renderGalleryModule),
  shagun: () => import('./components/shagun/shagun.js').then(m => m.renderShagunModule),
  tasks: () => import('./components/tasks/tasks.js').then(m => m.renderTasksModule),
  vendors: () => import('./components/vendors/vendors.js').then(m => m.renderVendorsModule),
  budget: () => import('./components/budget/budget.js').then(m => m.renderBudgetModule || m.default),
  calendar: () => import('./components/calendar/calendar.js').then(m => m.renderCalendarModule || m.default),
  'team-access': () => import('./components/team-access/team-access.js').then(m => m.renderTeamAccessModule || m.default)
};

export async function initWeddingDetails(rootSelector) {
  const rootEl = document.querySelector(rootSelector);
  if (!rootEl) return;
}

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
    navigateTo('creator', { wedding: activeWeddingId, component: 'hub' });
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export async function openSubPage(componentId, skipPush = false) {
  if (!componentId || componentId === 'hub') {
    backToLauncherHub(skipPush);
    return;
  }
  
  loadCss('src/wedding-details/wedding-details.css');
  setCurrentModuleId(componentId);

  const launcherSection = document.getElementById('wsAppLauncherSection');
  const viewport = document.getElementById('activeModuleViewport');
  const topHubBtn = document.getElementById('wsBackToHubTopBtn');
  if (!viewport) return;

  if (launcherSection) launcherSection.classList.add('hidden');
  if (topHubBtn) topHubBtn.classList.remove('hidden');
  viewport.classList.remove('hidden');

  if (!skipPush && !document.getElementById('creator-single-workspace')?.classList.contains('hidden')) {
    navigateTo('creator', { wedding: activeWeddingId, component: componentId });
  }

  const backBarHTML = `
    <div class="flex items-center justify-between">
      <button onclick="backToLauncherHub()" class="px-4 py-2 rounded-xl bg-card border border-gold/40 text-gold hover:bg-gold hover:text-obsidian text-xs font-bold flex items-center gap-2 transition cursor-pointer">
        <span>←</span> Back to All Components (18 Apps)
      </button>
    </div>
  `;
  const headerBanner = backBarHTML + buildModuleHeaderHTML(componentId);

  try {
    const loader = COMPONENT_LOADERS[componentId];
    if (loader) {
      const renderFn = await loader();
      if (typeof renderFn === 'function') {
        await renderFn(viewport, headerBanner);
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
    }
    viewport.innerHTML = headerBanner + `<div class="bento-card p-6 text-cream">Component <strong>${componentId}</strong> active.</div>`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  } catch (err) {
    viewport.innerHTML = headerBanner + `<div class="bento-card p-6 text-cream">Component <strong>${componentId}</strong> ready.</div>`;
  }
}