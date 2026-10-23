// Weddings feature entry. core/app.js calls these three functions.
import { buildDirectoryHTML, renderDirectory } from './shell/directory.js';
import { buildWorkspaceHTML, renderLauncher } from './shell/workspace.js';
import { buildCreateModalHTML } from './shell/create-modal.js';
import { bindActions } from './shell/actions.js';

export { openWeddingWorkspace, backToAllWeddings } from './shell/workspace.js';

export function initWeddingsView(selector = '#root-creator') {
  const container = document.querySelector(selector);
  if (!container) return;

  if (!document.getElementById('creatorWeddingsGrid')) {
    container.innerHTML = `
      <div class="min-h-screen bg-obsidian text-cream py-4 space-y-6">
        ${buildDirectoryHTML()}
        ${buildWorkspaceHTML()}
        ${buildCreateModalHTML()}
      </div>`;
    bindActions(container);
  }

  renderDirectory();
  renderLauncher();
}
