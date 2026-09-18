'use client';

import { ChangeEvent, useState } from 'react';

type ImportKind = 'article' | 'document';

const MAX_FILE_SIZE = 25 * 1024 * 1024;
export default function ImportPanel() {
  const [kind, setKind] = useState<ImportKind>('article');
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [engineStatus, setEngineStatus] = useState<'idle' | 'checking' | 'ready' | 'offline'>('idle');
  const [processedTitle, setProcessedTitle] = useState('');

  function selectKind(nextKind: ImportKind) {
    setKind(nextKind);
    setError('');
    setProcessedTitle('');
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setError('');
    setFileName('');

    if (!file) return;
    const isSupported = file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || /\.(pdf|docx)$/i.test(file.name);
    if (!isSupported) {
      setError('Choose a PDF or DOCX file.');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setError('Files must be smaller than 25 MB.');
      return;
    }
    setFileName(file.name);
  }

  function validateUrl() {
    setError('');
    try {
      const parsed = new URL(url);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error();
      return true;
    } catch {
      setError('Enter a complete http:// or https:// article URL.');
      return false;
    }
  }

  async function checkEngine() {
    setEngineStatus('checking');
    try {
      const response = await fetch('/api/engine/health', { cache: 'no-store' });
      if (!response.ok) throw new Error();
      setEngineStatus('ready');
    } catch {
      setEngineStatus('offline');
    }
  }

  async function prepareImport() {
    setError('');
    setProcessedTitle('');
    if (kind === 'article') {
      if (!validateUrl()) return;
      try {
        const response = await fetch('/api/process/url', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ url }) });
        const result = await response.json().catch(() => null);
        if (!response.ok) throw new Error(result?.detail ?? 'The article could not be processed.');
        setProcessedTitle(result.title);
        setEngineStatus('ready');
      } catch (processingError) {
        setError(processingError instanceof Error ? processingError.message : 'The article could not be processed.');
      }
      return;
    }
    if (!fileName) setError('Choose a PDF or DOCX file first.');
  }

  return (
    <div className="mt-8 rounded-2xl border border-[var(--line)] bg-white/60 p-5 sm:p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Import type">
        <button type="button" role="tab" aria-selected={kind === 'article'} onClick={() => selectKind('article')} className={`rounded-full px-4 py-2 text-sm font-bold ${kind === 'article' ? 'bg-[var(--accent)] text-white' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`}>Article URL</button>
        <button type="button" role="tab" aria-selected={kind === 'document'} onClick={() => selectKind('document')} className={`rounded-full px-4 py-2 text-sm font-bold ${kind === 'document' ? 'bg-[var(--accent)] text-white' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`}>PDF or DOCX</button>
      </div>

      <div className="mt-5">
        {kind === 'article' ? (
          <label className="block text-sm font-bold text-[var(--foreground)]">Article URL<input value={url} onChange={(event) => setUrl(event.target.value)} type="url" placeholder="https://example.com/article" className="mt-2 block w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]" /></label>
        ) : (
          <label className="block text-sm font-bold text-[var(--foreground)]">Reading file<input onChange={handleFile} type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="mt-2 block w-full rounded-xl border border-dashed border-[var(--line)] bg-white px-4 py-3 text-sm font-normal file:mr-4 file:rounded-full file:border-0 file:bg-[var(--accent)] file:px-4 file:py-2 file:font-bold file:text-white" />{fileName && <span className="mt-2 block text-xs font-normal text-[var(--muted)]">Selected: {fileName}</span>}</label>
        )}
      </div>

      {error && <p role="alert" className="mt-3 text-sm font-semibold text-[var(--accent-deep)]">{error}</p>}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" onClick={prepareImport} className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">{kind === 'article' ? 'Process article' : 'Validate import'}</button>
        <button type="button" onClick={checkEngine} disabled={engineStatus === 'checking'} className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-bold text-[var(--foreground)] disabled:opacity-60">{engineStatus === 'checking' ? 'Checking engine...' : 'Check engine'}</button>
        {engineStatus === 'ready' && <span className="text-sm font-semibold text-green-700">Engine online</span>}
        {engineStatus === 'offline' && <span className="text-sm font-semibold text-[var(--accent-deep)]">Engine unavailable</span>}
      </div>
      {processedTitle && <p className="mt-4 text-sm font-semibold text-green-700">Processed: {processedTitle}</p>}
      <p className="mt-4 text-xs leading-5 text-[var(--muted)]">Files are not uploaded until the PDF/DOCX endpoints are implemented. Article URLs are sent through the same-origin server proxy.</p>
    </div>
  );
}