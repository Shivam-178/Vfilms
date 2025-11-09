import React from "react";
import ContactForm from "./ContactForm.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#fff7f2]">
      <div className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="card p-8 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
              Let’s create something bold
            </h2>
            <p className="mt-2 text-slate-600">
              Tell us a bit about your vision — we’ll get back within 1–2 business days.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6 animate-fadeInUp">
            <div className="card p-8">
              <h3 className="text-xl font-heading font-semibold">Contact</h3>
              <p className="mt-2 text-slate-600 flex items-center gap-2">
                <img src="/assets/mail.svg" alt="" className="h-5 w-5" />
                hello@vfilms.example
              </p>
              <p className="mt-1 text-slate-600">+91 90000 00000</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-heading font-semibold">Follow</h3>
              <p className="mt-2 text-slate-600">Instagram · Vimeo · Behance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
