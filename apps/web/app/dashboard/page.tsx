import Image from 'next/image';
import ImportPanel from '@/components/dashboard/ImportPanel';

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" aria-label="Kradle home">
          <Image src="/brand/kradle-logo.svg" alt="Kradle" width={96} height={62} priority className="h-14 w-auto" />
        </a>
        <div className="flex items-center gap-4 text-sm font-semibold text-[var(--muted)]">
          <a className="transition-colors hover:text-[var(--foreground)]" href="/settings">Settings</a>
          <a className="rounded-full border border-[var(--line)] px-4 py-2 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-deep)]" href="/">Exit</a>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <header className="flex flex-col justify-between gap-6 border-b border-[var(--line)] pb-9 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">Your reading space</p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-[var(--foreground)] sm:text-5xl">Library</h1>
            <p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">Your saved reading sessions will live here, ready when you are.</p>
          </div>
          <a className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(135,61,46,0.18)] transition-transform hover:-translate-y-0.5" href="/reader/new">
            Add a reading <span className="ml-2 text-base" aria-hidden="true">+</span>
          </a>
        </header>

        <section className="grid gap-4 py-8 sm:grid-cols-3" aria-label="Reading overview">
          <div className="border-l-2 border-[var(--accent)] px-5 py-1"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">In library</p><p className="mt-2 font-serif text-3xl text-[var(--foreground)]">0</p></div>
          <div className="border-l-2 border-[var(--line)] px-5 py-1"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">In progress</p><p className="mt-2 font-serif text-3xl text-[var(--foreground)]">0</p></div>
          <div className="border-l-2 border-[var(--line)] px-5 py-1"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Minutes read</p><p className="mt-2 font-serif text-3xl text-[var(--foreground)]">0</p></div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-[#f8f4ec]/80 p-7 shadow-[0_18px_50px_rgba(72,57,35,0.07)] sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">Start here</p>
            <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-[var(--foreground)]">Put your next good read somewhere quiet.</h2>
            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">Bring in an article, PDF, or DOCX and Kradle will prepare it for focused sessions.</p>
            <ImportPanel />
          </div>

          <aside className="rounded-[1.75rem] border border-[var(--line)] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)]">Reading environment</p>
            <h2 className="mt-4 font-serif text-2xl text-[var(--foreground)]">Choose your atmosphere.</h2>
            <div className="mt-7 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-[var(--accent)] bg-[#f8f4ec] px-4 py-3"><span className="font-bold">Paper</span><span className="text-xs text-[var(--accent)]">Default</span></div>
              <div className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-[#f1e5d3] px-4 py-3"><span className="font-bold text-[#5b4932]">Sepia</span><span className="text-xs text-[#846e4e]">Warm</span></div>
              <div className="flex items-center justify-between rounded-xl border border-[#414141] bg-[#292929] px-4 py-3 text-[#f3eee5]"><span className="font-bold">Charcoal</span><span className="text-xs text-[#bcb4a7]">Soft dark</span></div>
              <div className="flex items-center justify-between rounded-xl border border-black bg-black px-4 py-3 text-white"><span className="font-bold">OLED</span><span className="text-xs text-[#a7a7a7]">True black</span></div>
            </div>
            <a href="/settings" className="mt-6 inline-block text-sm font-bold text-[var(--accent-deep)] hover:text-[var(--foreground)]">Manage preferences <span aria-hidden="true">→</span></a>
          </aside>
        </section>
      </div>
    </main>
  );
}
