import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="absolute inset-0 -z-10 bg-[url('/assets/Vector.svg')] bg-[length:1200px] bg-center opacity-[0.03]" />
      <div className="section py-16 sm:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fadeInUp">
            <h1 className="font-heading text-4xl sm:text-6xl leading-tight text-slate-900">
              Vision to screen. Stories that <span className="text-brand-600">stick</span>.
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              A collective of filmmakers crafting commercials, brand films and artful narratives.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#gallery" className="btn btn-primary px-5 py-3">See Work</a>
              <a href="#contact" className="btn btn-ghost px-5 py-3">Contact Us</a>
            </div>
          </div>
          <div className="animate-fadeInUp">
            <div className="relative card p-0 overflow-hidden">
              <img src="/assets/Group_9.png" alt="Hero collage" className="w-full h-auto object-cover" />
              <img src="/assets/Hero_Mandala.svg" alt="" className="absolute -bottom-8 -right-8 w-48 opacity-80 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
