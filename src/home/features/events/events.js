import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('./home/features/events/events.css');
  const res = await fetch('./home/features/events/events.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('events');
}