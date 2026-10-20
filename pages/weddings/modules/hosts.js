export function renderHostsModule(viewport, headerBanner) {
  const hosts = [
    { name: 'Jawarilal Bafna', relation: 'Father / Head Host', phone: '+91 98400 11223', location: 'Chennai / Udaipur' },
    { name: 'Darshana Bafna', relation: 'Bride / Host', phone: '+91 98400 44556', location: 'Chennai' }
  ];
  viewport.innerHTML = headerBanner + `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      ${hosts.map(h => `
        <div class="bento-card p-6 space-y-3">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold">${h.relation}</span>
          <h4 class="font-serif text-2xl font-bold text-cream">${h.name}</h4>
          <div class="text-xs text-muted">Phone: <strong class="text-cream">${h.phone}</strong></div>
          <div class="text-xs text-muted">Base: <strong class="text-gold">${h.location}</strong></div>
        </div>
      `).join('')}
    </div>
  `;
}