import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="inline-block h-5 w-5 rounded bg-neutral-900" aria-hidden />
            <span>© {new Date().getFullYear()} TileWave, Inc.</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-700">
            <a href="#privacy" className="hover:text-neutral-950 transition">Privacy</a>
            <a href="#terms" className="hover:text-neutral-950 transition">Terms</a>
            <a href="#contact" className="hover:text-neutral-950 transition">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
