import Image from 'next/image';

const themes = [
  ['Paper', 'Clean light reading mode', '#f8f4ec', '#29271f'],
  ['Sepia', 'Warm, book-inspired appearance', '#f1e5d3', '#5b4932'],
  ['Charcoal', 'Soft dark reading mode', '#292929', '#f3eee5'],
  ['OLED', 'True black dark mode', '#000000', '#ffffff'],
] as const;

export default function SettingsPage() {
  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="/" aria-label="Kradle home">
          <Image src="/brand/kradle-logo.svg" alt="Kradle" width={96} height={62} priority className="h-14 w-auto" />
        </a>
        <a className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--foreground)]" href="/dashboard">Back to library</a>
      </nav>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-10">
        <header className="border-b border-[var(--line)] pb-9">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">Your preferences</p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">Reading environment</h1>
          <p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">These controls will shape every reading session. Persistence will be connected when account settings are wired.</p>
        </header>

        <section className="border-b border-[var(--line)] py-9">
          <div className="flex items-end justify-between gap-5">
            <div><h2 className="font-serif text-2xl text-[var(--foreground)]">Display theme</h2><p className="mt-2 text-sm text-[var(--muted)]">Choose the light level that fits the room.</p></div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Paper selected</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map(([name, description, background, foreground]) => (
              <button key={name} type="button" className={`text-left rounded-2xl border p-4 transition-transform hover:-translate-y-0.5 ${name === 'Paper' ? 'border-[var(--accent)] ring-2 ring-[var(--accent)]/15' : 'border-[var(--line)]'}`} style={{ backgroundColor: background, color: foreground }}>
                <span className="block text-sm font-bold">{name}</span>
                <span className="mt-2 block text-xs opacity-70">{description}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-9 sm:grid-cols-2">
          <div><h2 className="font-serif text-2xl text-[var(--foreground)]">Typeface</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Literata is the default for comfortable long-form reading.</p><div className="mt-5 rounded-xl border border-[var(--accent)] bg-[#f8f4ec] px-4 py-3 text-sm font-bold">Literata <span className="float-right text-xs font-normal text-[var(--muted)]">Selected</span></div></div>
          <div><h2 className="font-serif text-2xl text-[var(--foreground)]">Text size</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Adjust the scale without changing the reading width.</p><div className="mt-5 flex items-center gap-3"><button type="button" aria-label="Decrease text size" className="h-10 w-10 rounded-full border border-[var(--line)] text-lg hover:border-[var(--accent)]">−</button><div className="h-1.5 flex-1 rounded-full bg-[#dfd8ca]"><div className="h-full w-1/2 rounded-full bg-[var(--accent)]" /></div><button type="button" aria-label="Increase text size" className="h-10 w-10 rounded-full border border-[var(--line)] text-lg hover:border-[var(--accent)]">+</button></div></div>
        </section>
      </div>
    </main>
  );
}