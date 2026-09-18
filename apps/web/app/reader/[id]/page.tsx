import Image from 'next/image';
import ReaderControls from '@/components/reader/ReaderControls';

export default function ReaderPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen px-5 pb-20 pt-6 transition-colors sm:px-8">
      <header className="mx-auto flex max-w-4xl items-center justify-between">
        <a href="/dashboard" aria-label="Back to library">
          <Image src="/brand/kradle-logo.svg" alt="Kradle" width={82} height={54} priority className="h-12 w-auto" />
        </a>
        <a className="text-sm font-semibold text-[var(--reader-muted)] hover:text-[var(--reader-foreground)]" href="/dashboard">Library</a>
      </header>

      <div className="mx-auto max-w-4xl pt-12">
        <ReaderControls />
        <article className="mx-auto max-w-2xl">
          <div className="mb-12 flex items-center justify-between border-b border-[var(--reader-line)] pb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--reader-muted)]">
            <span>Session {params.id}</span>
            <span>18 min remaining</span>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--reader-accent)]">The craft of attention</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-[var(--reader-foreground)] sm:text-6xl">A little less, but better.</h1>
          <p className="mt-6 text-sm text-[var(--reader-muted)]">A short reading session about making room for ideas to arrive.</p>
          <div className="reader-copy mt-12 font-serif text-[var(--reader-foreground)]">
            <p>Reading asks for a particular kind of patience. It is not simply the act of moving your eyes across a page, but the practice of allowing an idea to take its full shape.</p>
            <p className="mt-7">The useful thing about a reading session is its modest promise. You do not need to finish everything today. You only need a quiet stretch of time, a comfortable place, and enough attention for the next paragraph.</p>
            <p className="mt-7">Kradle keeps the edges quiet so the words can do their work. When the session ends, your place is still here, waiting for the next return.</p>
          </div>
          <footer className="mt-16 border-t border-[var(--reader-line)] pt-6 text-sm text-[var(--reader-muted)]">
            <div className="flex items-center justify-between"><span>Session progress</span><span>2 of 4</span></div>
            <div className="mt-3 h-1.5 rounded-full bg-[var(--reader-line)]"><div className="h-full w-1/2 rounded-full bg-[var(--reader-accent)]" /></div>
          </footer>
        </article>
      </div>
    </main>
  );
}
