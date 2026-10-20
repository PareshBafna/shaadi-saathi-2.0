import { ss } from './data/weddings-store.js';
import { findFeatureItem, normalizeModuleId } from './data/services.js';
import { filterPortfolioByRole, renderCreatorWeddings } from './components/directory/directory.js';
import { renderWorkspaceAppLauncher, toggleAppGridLauncher, backToAllWeddings as shellBack, openWeddingWorkspace as shellOpen } from './components/workspace-shell/workspace-shell.js';
import { renderModuleHeader } from './components/module-header/module-header.js';
import * as handlers from './handlers.js';

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

const MODULE_RENDERERS = {
  overview: renderTelemetryModule,
  whatsapp: renderWhatsAppModule,
  hosts: renderHostsModule,
  events: renderEventsModule,
  rsvp: renderGuestsModule,
  webinvites: renderWebInviteModule,
  rooms: renderRoomsModule,
  flights: renderFlightsModule,
  trains: renderTrainsModule,
  sangeet: renderSangeetModule,
  guestbook: renderGuestbookModule,
  gallery: renderGalleryModule,
  shagun: renderShagunModule,
  tasks: renderTasksModule,
  vendors: renderVendorsModule,
  budget: renderBudgetModule,
  users: renderTeamAccessModule,
  calendar: renderCalendarModule
};

export function backToAllWeddings() {
  shellBack();
}

export function openWeddingWorkspace(weddingId, targetModule) {
  shellOpen(weddingId, targetModule);
}

export function openSubPage(moduleId, skipPush = false) {
  const id = normalizeModuleId(moduleId);
  const inWorkspace = !document.getElementById('creator-single-workspace')?.classList.contains('hidden');
  if (!skipPush && inWorkspace) navigateTo('creator', { wedding: ss.activeWeddingId, module: id });

  ss.currentModuleId = id;
  renderWorkspaceAppLauncher();
  const viewport = document.getElementById('activeModuleViewport');
  if (!viewport) return;

  const render = MODULE_RENDERERS[id] || renderTelemetryModule;
  render(viewport, renderModuleHeader(findFeatureItem(id)));
}

export function switchWorkspaceModule(modId) {
  openSubPage(modId);
}

export function initWeddingsView() {
  renderCreatorWeddings();
  renderWorkspaceAppLauncher();
}

Object.assign(window, {
  ...handlers,
  filterPortfolioByRole,
  renderCreatorWeddings,
  renderWorkspaceAppLauncher,
  openWeddingWorkspace,
  backToAllWeddings,
  toggleAppGridLauncher,
  switchWorkspaceModule,
  openSubPage
});
