// Every button/input in weddings uses data-action (click) or data-change (edit).
// Shell actions live here. Module actions live in their module file.
import { openWeddingWorkspace, backToAllWeddings, openModule, toggleLauncher, refreshModule } from './workspace.js';
import { getModuleActions } from './module-actions.js';
import { openCreateModal, closeCreateModal, saveNewWedding } from './create-modal.js';

const WORKING = {
  openWedding: id => openWeddingWorkspace(id),
  backToAllWeddings: () => backToAllWeddings(),
  openModule: id => openModule(id),
  toggleLauncher,
  openCreateModal,
  closeCreateModal,
  saveNewWedding
};

// Module actions (modules/<name>.js export `actions`): handler(...args, value).
// After a handler runs, the open module redraws. Return false to skip the redraw.
export function runAction(name, args = [], value) {
  if (WORKING[name]) return WORKING[name](...args, value);

  const handler = getModuleActions()[name];
  if (!handler) return console.warn(`Unknown action: ${name}`);
  if (handler(...args, value) !== false) setTimeout(refreshModule, 0);
}

const argsOf = el => (el.dataset.args ? el.dataset.args.split('|') : []);

export function bindActions(container) {
  if (container.dataset.bound) return;
  container.dataset.bound = '1';

  container.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (el) runAction(el.dataset.action, argsOf(el));
  });
  container.addEventListener('change', e => {
    const el = e.target.closest('[data-change]');
    if (el) runAction(el.dataset.change, argsOf(el), el.value);
  });
  container.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCreateModal();
  });
}
