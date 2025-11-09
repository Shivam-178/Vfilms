import React from "react";

export default function Highlights() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="paper-note p-8">
            <p className="text-slate-800 leading-8">
              Some craft films. Some build brands. Some curate art. We bring it all together –
              a collective of storytellers driven by one belief: every project deserves to be more
              than just a message; it should become a masterpiece.
              <br/><br/>
              From first spark to final frame, from raw ideas to timeless visuals – we shape stories
              that stay with you.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="card p-6 text-center">
              <div className="text-4xl font-heading text-brand-600">85+</div>
              <p className="mt-1 text-slate-600">Projects</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-heading text-brand-600">50+</div>
              <p className="mt-1 text-slate-600">Clients</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-heading text-brand-600">10+</div>
              <p className="mt-1 text-slate-600">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
