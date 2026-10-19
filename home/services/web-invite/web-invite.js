import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/services/web-invite/web-invite.css');
  const res = await fetch('.//home/services/web-invite/web-invite.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('webinvites');

  const seal = mountEl.querySelector('.srv-wax-seal, [onclick*="Wax Seal"]');
  if (seal) {
    seal.onclick = () => {
      if (typeof window.showToast === 'function') {
        window.showToast('✨ Wax Seal Unbroken! Playing Royal Shehnai...');
      }
    };
  }
}