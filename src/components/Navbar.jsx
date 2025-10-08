import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-neutral-900 tracking-tight">
            <span className="inline-block h-6 w-6 rounded bg-neutral-900" aria-hidden />
            <span>TileWave</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#features" className="hover:text-neutral-950 transition">Features</a>
            <a href="#about" className="hover:text-neutral-950 transition">About</a>
            <a href="#contact" className="hover:text-neutral-950 transition">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a href="#get-started" className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition">
              Get Started
            </a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-300 px-3 py-2 text-sm">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
