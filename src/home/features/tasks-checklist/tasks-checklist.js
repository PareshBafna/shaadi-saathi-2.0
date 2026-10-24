import { loadCssOnce } from '../features.js';

export async function initFeature(mountEl) {
  loadCssOnce('./src/home/features/tasks-checklist/tasks-checklist.css');
  const res = await fetch('./src/home/features/tasks-checklist/tasks-checklist.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('tasks');
}