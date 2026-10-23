import { galleryPhotos } from '../shared/store.js';
import { showToast } from '../../../components/toast.js';

const photoHtml = url => `<div class="bento-card h-48 bg-cover bg-center rounded-xl relative overflow-hidden" style="background-image:url('${url}')" role="img" aria-label="Wedding photo"></div>`;

export function render(viewport) {
  viewport.innerHTML = `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Media Cloud</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Wedding Moments &amp; Photo Gallery</h4>
          <p class="text-sm text-muted">High-resolution event photography, Clickbox albums, and highlight video links.</p>
        </div>
        <button type="button" data-action="openUploadPhotoModal" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Upload Event Photos</button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">${galleryPhotos.map(photoHtml).join('')}</div>
    </div>
  `;
}

// Photos stay in this browser tab only (no storage yet).
export const actions = {
  openUploadPhotoModal() {
    const picker = document.createElement('input');
    picker.type = 'file';
    picker.accept = 'image/*';
    picker.multiple = true;
    picker.addEventListener('change', () => {
      const files = [...picker.files].filter(f => f.type.startsWith('image/'));
      if (!files.length) return;
      files.forEach(f => galleryPhotos.unshift(URL.createObjectURL(f)));
      showToast(`Added ${files.length} photo${files.length > 1 ? 's' : ''}`);
      import('../shell/workspace.js').then(m => m.refreshModule());
    });
    picker.click();
    return false;
  }
};
