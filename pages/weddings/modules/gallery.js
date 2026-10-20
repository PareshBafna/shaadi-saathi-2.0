import { galleryPhotos } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';

export function renderGalleryModule() {
  return renderModuleHeader('gallery') + `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
      ${galleryPhotos.map(p => `
        <div class="relative h-64 rounded-2xl overflow-hidden border border-borderWarm">
          <img src="${p.img}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent flex flex-col justify-end p-5">
            <span class="text-xs font-bold text-gold uppercase">${p.event}</span>
            <h4 class="font-serif text-2xl font-bold text-cream">${p.title}</h4>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}