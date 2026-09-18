import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="/" className="flex items-center gap-3" aria-label="Kradle home">
          <Image src="/brand/kradle-logo.svg" alt="Kradle" width={96} height={62} priority className="h-14 w-auto" />
        </a>
        <div className="flex items-center gap-5 text-sm font-semibold text-[var(--muted)]">
          <a className="hidden transition-colors hover:text-[var(--foreground)] sm:inline" href="/dashboard">
            Library
          </a>
          <a className="rounded-full border border-[var(--line)] px-4 py-2 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-deep)]" href="/login">
            Sign in
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">A quieter way to read</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Make room for the words.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            Bring articles and documents into one calm reading space, shaped around your attention instead of your notifications.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(135,61,46,0.2)] transition-transform hover:-translate-y-0.5" href="/dashboard">
              Open your library <span aria-hidden="true">→</span>
            </a>
            <a className="px-2 py-3 text-sm font-bold text-[var(--accent-deep)] transition-colors hover:text-[var(--foreground)]" href="/reader/sample">
              Preview the reader <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-5 text-sm text-[var(--muted)]">
            <span className="h-px w-12 bg-[var(--accent)]" />
            <span>Long-form, without the noise.</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[var(--accent)]/20" />
          <div className="relative rounded-[2rem] border border-[var(--line)] bg-[#f8f4ec] p-5 shadow-[0_24px_70px_rgba(72,57,35,0.14)] sm:p-7">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              <span>Now reading</span>
              <span className="text-[var(--accent)]">18 min left</span>
            </div>
            <article className="px-2 py-8 sm:px-5 sm:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">The craft of attention</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">A little less, but better.</h2>
              <p className="mt-6 font-serif text-lg leading-9 text-[#555044]">
                Reading asks for a particular kind of patience. Kradle keeps the edges quiet so an idea can take its full shape.
              </p>
              <p className="mt-5 font-serif text-lg leading-9 text-[#555044]">
                Save your place, return when you are ready, and let the next page meet you exactly where you left it.
              </p>
            </article>
            <div className="flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm font-semibold text-[var(--muted)]">
              <span>Session 02 of 04</span>
              <span className="h-1.5 w-24 overflow-hidden rounded-full bg-[#dfd8ca]"><span className="block h-full w-2/3 rounded-full bg-[var(--accent)]" /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[#e6dfd2]/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm sm:grid-cols-3 lg:px-10">
          <div><p className="font-bold text-[var(--foreground)]">01 / Focused canvas</p><p className="mt-2 leading-6 text-[var(--muted)]">Comfortable widths and fewer things competing for your eyes.</p></div>
          <div><p className="font-bold text-[var(--foreground)]">02 / Natural sessions</p><p className="mt-2 leading-6 text-[var(--muted)]">Break long reads into clear, achievable returns.</p></div>
          <div><p className="font-bold text-[var(--foreground)]">03 / Your rhythm</p><p className="mt-2 leading-6 text-[var(--muted)]">Paper, sepia, charcoal, and OLED when the room changes.</p></div>
        </div>
      </section>
    </main>
  );
}
