export function renderGalleryModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span class="text-xs font-mono uppercase text-gold font-bold">Media Cloud</span>
          <h4 class="font-serif text-2xl font-bold text-cream">Wedding Moments &amp; Photo Gallery</h4>
          <p class="text-sm text-muted">High-resolution event photography, Clickbox albums, and highlight video links.</p>
        </div>
        <button onclick="openUploadPhotoModal()" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">+ Upload Event Photos</button>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="bento-card h-48 bg-cover bg-center rounded-xl relative overflow-hidden" style="background-image:url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80')"></div>
        <div class="bento-card h-48 bg-cover bg-center rounded-xl relative overflow-hidden" style="background-image:url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80')"></div>
        <div class="bento-card h-48 bg-cover bg-center rounded-xl relative overflow-hidden" style="background-image:url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80')"></div>
        <div class="bento-card h-48 bg-cover bg-center rounded-xl relative overflow-hidden" style="background-image:url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80')"></div>
      </div>
    </div>
  `;
}