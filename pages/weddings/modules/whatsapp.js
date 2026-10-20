import { guests, messageCreditsRemaining, updateCreditsRemaining } from '../data/weddings-store.js';
import { renderModuleHeader } from '../components/module-header/module-header.js';
import { getTierLabel, showToast } from '../utils/weddings-helpers.js';

export function renderWhatsAppModule(onRefresh) {
  const sentCount = guests.filter(g => g.waInviteSent).length;
  const readCount = guests.filter(g => g.waStatus && g.waStatus.includes('Read')).length;
  const pendingWaCount = guests.filter(g => !g.waInviteSent).length;

  const html = renderModuleHeader('whatsapp') + `
    <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
      <div class="bento-card p-4"><span class="text-xs text-muted block">Total Credits Used</span><strong class="text-2xl text-gold">1,160</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Credits Remaining</span><strong class="text-2xl text-emeraldSS">${messageCreditsRemaining.toLocaleString()}</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Invites Dispatched</span><strong class="text-2xl text-cream">${sentCount} / ${guests.length}</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Read by Guests (✓✓)</span><strong class="text-2xl text-waGreen">${readCount} Families</strong></div>
      <div class="bento-card p-4"><span class="text-xs text-muted block">Pending Dispatch</span><strong class="text-2xl text-amberSS">${pendingWaCount} Family</strong></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="bento-card p-6 space-y-3">
        <span class="px-3 py-1 rounded-lg text-xs font-bold bg-waGreen/20 text-waGreen">Official Verified Sender</span>
        <h4 class="font-serif text-2xl font-bold text-cream">+91 98290-SHAADI ✓</h4>
        <p class="text-sm text-muted">Dispatches event-filtered invitations, RSVP reminders, and room keys. Extra messages @ ₹1/message.</p>
        <button id="btn-blast-whatsapp" class="btn-gold w-full py-3 rounded-xl text-xs font-bold">🚀 Blast Invites to All (${guests.length} Credits)</button>
      </div>
      <div class="lg:col-span-2 bento-card p-6 space-y-3 border-gold/40">
        <div class="flex justify-between items-center">
          <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-gold/20 text-gold">Active Meta-Approved Template Preview</span>
          <span class="text-xs font-mono text-muted">Variables: {{Guest}}, {{Host}}, {{TierEvents}}</span>
        </div>
        <p class="text-sm text-cream bg-obsidian p-4 rounded-xl border border-borderWarm">
          “॥ श्री गणेशाय नमः ॥ Pranam <strong>{{1}} Ji</strong> 🙏 With warm regards from <strong>{{2}}</strong>, you are cordially invited to Aarav &amp; Ananya's wedding celebrations ({{3}}). Tap below to open your 3D Wax-Seal Pass &amp; confirm RSVP.”
        </p>
      </div>
    </div>

    <div class="bento-card p-6 space-y-4">
      <h4 class="font-serif text-2xl font-bold text-cream">WhatsApp Invites Sent &amp; Delivery Log</h4>
      <div class="ss-table-wrap">
        <table class="ss-table">
          <thead>
            <tr>
              <th>Guest Family</th>
              <th>Side &amp; Pax</th>
              <th>Assigned Template Variant</th>
              <th>Invite Sent?</th>
              <th>Delivery / Read Status</th>
              <th>Last Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${guests.map(g => `
              <tr>
                <td class="font-bold text-cream">\${g.name}</td>
                <td class="text-xs text-muted">${g.side} •${g.pax} Pax</td>
                <td><span class="px-2.5 py-1 rounded text-xs bg-obsidian border border-borderWarm text-gold">\${g.waTemplate || getTierLabel(g.inviteTier)}</span></td>
                <td>
                  <span class="px-2.5 py-1 rounded-full text-xs font-bold \${g.waInviteSent ? 'bg-emeraldSS/15 text-emeraldSS' : 'bg-amberSS/15 text-amberSS'}">
                    \${g.waInviteSent ? '✓ Sent' : '⏳ Not Sent'}
                  </span>
                </td>
                <td class="font-bold text-xs ${g.waStatus?.includes('Read') ? 'text-waGreen' : 'text-gold'}">${g.waStatus || 'Queued'}</td>
                <td class="font-mono text-xs text-muted">\${g.waSentAt || '—'}</td>
                <td>
                  <button data-guestid="\${g.id}" class="btn-send-single-wa px-3.5 py-1.5 rounded-xl bg-waGreen/20 border border-waGreen/40 text-waGreen text-xs font-bold hover:bg-waGreen/30">
                    \${g.waInviteSent ? '↻ Resend (1 Cr)' : '💬 Send Now (1 Cr)'}
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById('btn-blast-whatsapp')?.addEventListener('click', () => {
      guests.forEach(g => {
        g.waInviteSent = true;
        if (!g.waStatus || g.waStatus === 'Queued') g.waStatus = 'Delivered ✓✓';
        g.waSentAt = 'Just now';
      });
      updateCreditsRemaining(-guests.length);
      showToast(`Dispatched WhatsApp Invites to All Guests (-${guests.length} credits)`);
      onRefresh();
    });

    document.querySelectorAll('.btn-send-single-wa').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = guests.find(x => x.id === btn.dataset.guestid);
        if (!g) return;
        g.waInviteSent = true;
        g.waStatus = 'Delivered ✓✓';
        g.waSentAt = 'Just now';
        updateCreditsRemaining(-1);
        showToast(`Sent WhatsApp invite to ${g.name} (-1 credit)`);
        onRefresh();
      });
    });
  }, 0);

  return html;
}