export function renderGalleryModule(viewport, headerBanner) {
  viewport.innerHTML = headerBanner + `
    <div class="bento-card p-6 space-y-5">
      <h4 class="font-serif text-2xl font-bold text-cream">Wedding Photo Gallery &amp; Cloud</h4>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="bento-card h-48 bg-cover bg-center rounded-xl relative overflow-hidden" style="background-image:url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80')"></div>
        <div class="bento-card h-48 bg-cover bg-center rounded-xl relative overflow-hidden" style="background-image:url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80')"></div>
      </div>
    </div>
  `;
}