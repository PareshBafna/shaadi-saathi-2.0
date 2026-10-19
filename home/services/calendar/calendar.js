import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('./home/services/calendar/calendar.css');
  const res = await fetch('./home/services/calendar/calendar.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('calendar');
}