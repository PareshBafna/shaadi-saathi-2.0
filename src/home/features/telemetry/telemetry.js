import { loadCssOnce } from '../features.js';
import { rootUrl } from '../../../../global/core/router.js';

export async function initService(mountEl) {
  loadCssOnce(rootUrl('home/features/telemetry/telemetry.css'));
  const res = await fetch(rootUrl('home/features/telemetry/telemetry.html'));
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('overview');
}