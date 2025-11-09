import React from "react";

const items = [
  { src: "/assets/Group_10.png", title: "Campaign Reel" },
  { src: "/assets/image_6.png", title: "Behind the Scenes" },
  { src: "/assets/Group_9.png", title: "Brand Film" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#fff2eb]">
      <div className="section">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 text-center">Selected Work</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">
          A glimpse into films, commercials, and stories we’ve loved making.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.title} className="bg-white rounded-2xl shadow-paper p-3 rotate-[-1.5deg]">
              <img src={it.src} alt={it.title} className="w-full h-56 object-cover rounded-xl" />
              <figcaption className="mt-3 text-center font-medium">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
