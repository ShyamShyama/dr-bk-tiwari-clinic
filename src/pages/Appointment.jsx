import { useState } from "react";
import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import { clinic, services } from "../data/content.js";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  reason: "",
};

export default function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.date) e.date = "Please choose a preferred date.";
    if (!form.time) e.time = "Please choose a preferred time.";
    if (!form.reason.trim()) e.reason = "Please tell us the reason for your visit.";
    return e;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // NOTE: This is a front-end-only form. Connect it to a backend, form
      // service (e.g. Formspree), or the clinic's booking API before launch.
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to book an appointment.\nName: ${form.name || "[Your Name]"}\nPreferred Date: ${
      form.date || "[Date]"
    }\nPreferred Time: ${form.time || "[Time]"}\nReason: ${form.reason || "[Reason for visit]"}`
  );

  return (
    <Layout>
      <SEO
        title="Book Appointment"
        description="Book an appointment with Dr. B. K. Tiwari online. Choose your preferred date and time, or reach out directly via WhatsApp or phone."
        path="/appointment"
      />

      <PageHero
        eyebrow="Book Appointment"
        title="Schedule your visit in under a minute"
        description="Fill in the form below and our team will confirm your appointment. For urgent requests, reach us directly on WhatsApp or by phone."
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-surface p-10 text-center flex flex-col items-center gap-4 animate-fade-up">
                <span className="grid place-items-center w-16 h-16 rounded-full bg-blue-soft text-blue-deep">
                  <Icon name="check" className="w-8 h-8" strokeWidth={2.4} />
                </span>
                <h2 className="h-display text-2xl font-semibold">Appointment request received</h2>
                <p className="text-ink-soft max-w-md">
                  Thank you. Our team will call or message you shortly to confirm your appointment slot. If
                  your visit is urgent, please call the clinic directly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary mt-2">
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="card-surface p-7 sm:p-9 space-y-6">
                <h2 className="h-display text-2xl font-semibold">Appointment Details</h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Patient Name" error={errors.name} required>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="e.g. Ramesh Gupta"
                      className={inputClass(errors.name)}
                    />
                  </Field>
                  <Field label="Phone Number" error={errors.phone} required>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="e.g. 98XXXXXX10"
                      className={inputClass(errors.phone)}
                    />
                  </Field>
                </div>

                <Field label="Email Address" error={errors.email} hint="Optional">
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={inputClass(errors.email)}
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Preferred Date" error={errors.date} required>
                    <input type="date" value={form.date} onChange={update("date")} className={inputClass(errors.date)} />
                  </Field>
                  <Field label="Preferred Time" error={errors.time} required>
                    <input type="time" value={form.time} onChange={update("time")} className={inputClass(errors.time)} />
                  </Field>
                </div>

                <Field label="Reason for Visit" error={errors.reason} required>
                  <select value={form.reason} onChange={update("reason")} className={inputClass(errors.reason)}>
                    <option value="">Select a reason</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </Field>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button type="submit" className="btn-primary">
                    <Icon name="calendar" className="w-5 h-5" />
                    Submit Appointment Request
                  </button>
                  <a
                    href={`https://wa.me/${clinic.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Icon name="whatsapp" className="w-5 h-5" strokeWidth={0} />
                    Book via WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar: clinic timings */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="card-surface p-7">
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2.5">
                <Icon name="clock" className="w-5 h-5 text-blue-deep" />
                Clinic Timings
              </h3>
              <ul className="space-y-4">
                {clinic.timings.map((t) => (
                  <li key={t.day} className="flex justify-between items-start gap-4 text-sm border-b border-grey-mist pb-3 last:border-0">
                    <span className="font-semibold text-ink">{t.day}</span>
                    <span className="text-ink-soft text-right">{t.time}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink-soft italic mt-4">
                Timings shown are placeholders and will be confirmed by the clinic before launch.
              </p>
            </div>

            <div className="card-surface p-7 bg-blue-soft/40">
              <h3 className="font-display font-semibold text-lg mb-3">Need urgent help?</h3>
              <p className="text-sm text-ink-soft mb-5">
                Call the clinic directly for same-day or urgent appointment requests.
              </p>
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="btn-primary w-full">
                <Icon name="phone" className="w-5 h-5" />
                {clinic.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, children, error, required, hint }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink flex items-center gap-1.5">
        {label} {required && <span className="text-blue-bright">*</span>}
        {hint && <span className="text-xs font-normal text-ink-soft">({hint})</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="text-xs text-red-500 mt-1.5 block">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-xl border px-4 py-3 text-sm text-ink bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-bright/40 ${
    error ? "border-red-400" : "border-grey-mist focus:border-blue-bright"
  }`;
}
