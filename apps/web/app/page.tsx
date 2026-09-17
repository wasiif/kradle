export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 text-stone-900">
      <div className="max-w-xl rounded-2xl border border-stone-200 bg-white p-10 shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Kradle</p>
        <h1 className="mt-4 text-4xl font-semibold">A calmer place to read.</h1>
        <p className="mt-4 text-lg text-stone-600">
          The reading experience is scaffolded and ready for your dashboard, reader, and engine integrations.
        </p>
      </div>
    </main>
  );
}
