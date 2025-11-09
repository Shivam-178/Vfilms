import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#fff7f2]/80 backdrop-blur border-b border-slate-200">
      <div className="section h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 font-semibold">
          <img src="/assets/VFilms_Logo.png" alt="VFilms" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#about" className="hover:text-brand-700 transition">About</a>
          <a href="#gallery" className="hover:text-brand-700 transition">Work</a>
          <a href="#contact" className="hover:text-brand-700 transition">Contact</a>
        </nav>
        <a href="#contact" className="btn btn-primary px-4 py-2 text-sm">Let’s Talk</a>
      </div>
    </header>
  );
}
