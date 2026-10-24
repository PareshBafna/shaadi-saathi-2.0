import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('./home/features/budget-planner/budget-planner.css');
  const res = await fetch('./home/features/budget-planner/budget-planner.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('budget');
}