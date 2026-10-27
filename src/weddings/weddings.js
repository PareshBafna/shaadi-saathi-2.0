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
import { openSubPage, backToLauncherHub } from '../wedding-details/wedding-details.js';

export {
  openWeddingWorkspace,
  backToAllWeddings,
  filterPortfolioByRole,
  renderCreatorWeddings,
  renderWorkspaceAppLauncher,
  toggleAppGridLauncher,
  openSubPage,
  backToLauncherHub,
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

export function switchWorkspaceComponent(compId) {
  openSubPage(compId);
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
  switchWorkspaceComponent: openSubPage,
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