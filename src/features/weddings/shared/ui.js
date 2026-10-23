// Tiny UI helpers shared by modules.

// Escape text before putting it into HTML.
export const esc = value => String(value ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// Row of small number cards. items: [label, value, colorClass]
export const statGrid = (items, cls = 'grid grid-cols-1 sm:grid-cols-3 gap-4') => `
  <div class="${cls}">
    ${items.map(([label, value, color]) => `
    <div class="bento-card p-5"><span class="text-xs text-muted block">${label}</span><strong class="text-2xl ${color}">${value}</strong></div>`).join('')}
  </div>`;

// Card with title, one action button and a table. headers: string | { label, style }
export const tableCard = ({ kicker, title, desc = '', action, actionLabel, headers, rows }) => `
  <div class="bento-card p-6 space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <span class="text-xs font-mono uppercase text-gold font-bold">${kicker}</span>
        <h4 class="font-serif text-2xl font-bold text-cream">${title}</h4>
        ${desc ? `<p class="text-sm text-muted">${desc}</p>` : ''}
      </div>
      <button type="button" data-action="${action}" class="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold">${actionLabel}</button>
    </div>
    <div class="ss-table-wrap">
      <table class="ss-table">
        <thead><tr>${headers.map(h => typeof h === 'string' ? `<th>${h}</th>` : `<th style="${h.style}">${h.label}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>`;

// Input that reports edits through a data-change action.
export const editInput = ({ action, args, value, cls = '', type = 'text', extra = '' }) =>
  `<input type="${type}" value="${esc(value)}" data-change="${action}" data-args="${esc(args.join('|'))}" class="ss-input ${cls}" ${extra} />`;

// Unique id for new rows.
export const uid = prefix => `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`;

// "23 Oct 2026"
export const todayLabel = () =>
  new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

// Simple text question. Returns trimmed text, or null if cancelled/empty.
export function ask(question, fallback = '') {
  const answer = window.prompt(question, fallback);
  const text = answer === null ? null : answer.trim();
  return text ? text : null;
}
