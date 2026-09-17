export default function ReaderPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-paper p-8 text-ink">
      <article className="mx-auto max-w-3xl rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Reader</p>
        <h1 className="mt-4 text-4xl font-semibold">Reading session {params.id}</h1>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          A distraction-free reading canvas will render here with typography controls, theme switching,
          and session slicing.
        </p>
      </article>
    </main>
  );
}
