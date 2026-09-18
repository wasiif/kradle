'use client';

import { useState } from 'react';

const themes = {
  paper: { background: '#f8f4ee', foreground: '#29271f', muted: '#706c61', accent: '#b6573f' },
  sepia: { background: '#f1e5d3', foreground: '#5b4932', muted: '#846e4e', accent: '#9a5b35' },
  charcoal: { background: '#292929', foreground: '#f3eee5', muted: '#bcb4a7', accent: '#d38662' },
  oled: { background: '#000000', foreground: '#ffffff', muted: '#a7a7a7', accent: '#ed9a72' },
} as const;

type ThemeName = keyof typeof themes;

export default function ReaderControls() {
  const [theme, setTheme] = useState<ThemeName>('paper');
  const [fontSize, setFontSize] = useState(18);
  const [spacing, setSpacing] = useState(1.7);
  const colors = themes[theme];

  return (
    <div className="sticky top-4 z-10 mb-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--reader-line)] bg-[var(--reader-panel)]/90 px-4 py-3 text-sm shadow-sm backdrop-blur">
      <div className="flex items-center gap-2" role="group" aria-label="Reading theme">
        {(Object.keys(themes) as ThemeName[]).map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={theme === name}
            onClick={() => setTheme(name)}
            className={`rounded-full px-3 py-1.5 font-semibold capitalize transition-colors ${theme === name ? 'bg-[var(--reader-accent)] text-white' : 'text-[var(--reader-muted)] hover:text-[var(--reader-foreground)]'}`}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[var(--reader-muted)]">
        <label className="flex items-center gap-2">
          <span className="sr-only">Text size</span>
          <span aria-hidden="true">A</span>
          <input type="range" min="16" max="24" value={fontSize} onChange={(event) => setFontSize(Number(event.target.value))} aria-label="Text size" />
          <span aria-hidden="true" className="text-lg">A</span>
        </label>
        <label className="hidden items-center gap-2 sm:flex">
          <span className="sr-only">Line spacing</span>
          <span aria-hidden="true">Spacing</span>
          <input type="range" min="1.4" max="2.1" step="0.1" value={spacing} onChange={(event) => setSpacing(Number(event.target.value))} aria-label="Line spacing" />
        </label>
      </div>
      <style jsx>{`
        :global(main) {
          --reader-background: ${colors.background};
          --reader-foreground: ${colors.foreground};
          --reader-muted: ${colors.muted};
          --reader-accent: ${colors.accent};
          --reader-panel: ${theme === 'paper' ? '#ffffff' : colors.background};
          --reader-line: ${theme === 'paper' ? 'rgba(63, 57, 45, 0.16)' : 'rgba(255, 255, 255, 0.16)'};
          background: var(--reader-background);
          color: var(--reader-foreground);
        }
        :global(.reader-copy) {
          font-size: ${fontSize}px;
          line-height: ${spacing};
        }
        input[type='range'] { accent-color: ${colors.accent}; width: 72px; }
      `}</style>
    </div>
  );
}