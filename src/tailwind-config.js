// Tailwind CDN config. Loaded right after the CDN script in index.html.
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0507', surface: '#140A0D', card: '#1D0F14', cardHover: '#28151C',
        borderWarm: '#3D2029', gold: '#F5C451', goldBright: '#FFE082', emeraldSS: '#22C55E',
        crimsonSS: '#EF4444', amberSS: '#F59E0B', skySS: '#38BDF8', waGreen: '#25D366',
        cream: '#FFFDF9', ink: '#F5ECEE', muted: '#C8B0B6'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  }
};
