import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-[#fff7f2]">
      <div className="section py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} VFilms — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-brand-700">About</a>
          <a href="#gallery" className="hover:text-brand-700">Work</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </div>
      </div>
    </footer>
  );
}
