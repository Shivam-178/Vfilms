import React, { useState } from "react";

const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  const digits = (phone || "").replace(/\D/g, "");
  return digits.length >= 7;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = "Name is required";
    if (!values.email.trim()) er.email = "Email is required";
    else if (!validateEmail(values.email)) er.email = "Enter a valid email";
    if (!values.phone.trim()) er.phone = "Phone is required";
    else if (!validatePhone(values.phone)) er.phone = "Enter a valid phone number";
    if (!values.message.trim()) er.message = "Message is required";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const reset = () => {
    setValues({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setStatus({ loading: false, success: false, error: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: "" });
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Request failed");
      }

      await res.json();
      setStatus({ loading: false, success: true, error: "" });
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || "Something went wrong" });
    }
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div>
        <label className="label" htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="John Doe" value={values.name} onChange={onChange} />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="input" placeholder="john@example.com" value={values.email} onChange={onChange} />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div>
          <label className="label" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" className="input" placeholder="+91 90000 00000" value={values.phone} onChange={onChange} />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="label" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" className="input" placeholder="Tell us a bit about your project..." value={values.message} onChange={onChange} />
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" className="btn btn-primary px-5 py-3 disabled:opacity-60" disabled={status.loading} aria-live="polite">
          {status.loading ? "Submitting..." : "Submit"}
        </button>
        <button type="button" className="btn btn-ghost px-5 py-3" onClick={reset} disabled={status.loading}>
          Reset
        </button>
      </div>

      {status.success && (<p className="mt-2 text-green-700 font-medium" role="status">Form Submitted</p>)}
      {status.error && (<p className="mt-2 text-red-700" role="alert">{status.error}</p>)}
    </form>
  );
}
