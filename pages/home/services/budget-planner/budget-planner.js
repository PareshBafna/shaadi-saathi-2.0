import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/budget-planner/budget-planner.css');
  const res = await fetch('./pages/home/services/budget-planner/budget-planner.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('budget');
}