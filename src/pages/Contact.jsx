import { useState } from "react";
import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import Icon from "../components/Icon.jsx";
import PulseDivider from "../components/PulseDivider.jsx";
import { clinic } from "../data/content.js";

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Please enter a valid email.";
    if (!form.message.trim()) err.message = "Please enter your message.";
    setErrors(err);
    if (Object.keys(err).length === 0) {
      // NOTE: Front-end-only form — connect to a backend or form service before launch.
      setSent(true);
      setForm(initialForm);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with Dr. B. K. Tiwari's clinic — address, phone, email, working hours, and directions."
        path="/contact"
      />

      {/* Banner */}
      <section className="relative bg-deep-gradient">
        <div className="container-x py-16 sm:py-20 text-center text-white">
          <span className="eyebrow !text-white/70">Get In Touch</span>
          <h1 className="h-display !text-white text-4xl sm:text-5xl font-semibold mt-4">We're here to help</h1>
          <p className="text-white/75 mt-4 max-w-xl mx-auto">
            Reach out for appointments, questions about services, or general enquiries — our team responds
            promptly.
          </p>
        </div>
        <PulseDivider tone="white" />
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <InfoRow icon="map-pin" title="Clinic Address" value={clinic.address} />
            <InfoRow icon="phone" title="Phone Number" value={clinic.phone} href={`tel:${clinic.phone.replace(/\s/g, "")}`} />
            <InfoRow icon="mail" title="Email" value={clinic.email} href={`mailto:${clinic.email}`} />
            <div className="card-surface p-6">
              <h3 className="font-display font-semibold text-lg mb-3 flex items-center gap-2.5">
                <Icon name="clock" className="w-5 h-5 text-blue-deep" />
                Working Hours
              </h3>
              <ul className="space-y-2 text-sm">
                {clinic.timings.map((t) => (
                  <li key={t.day} className="flex justify-between text-ink-soft">
                    <span className="text-ink font-medium">{t.day}</span>
                    <span>{t.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4">
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="btn-primary flex-1">
                <Icon name="phone" className="w-5 h-5" />
                Call
              </a>
              <a
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1"
              >
                <Icon name="whatsapp" className="w-5 h-5" strokeWidth={0} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Form + map */}
          <div className="lg:col-span-3 space-y-8">
            {sent ? (
              <div className="card-surface p-9 text-center flex flex-col items-center gap-4">
                <span className="grid place-items-center w-14 h-14 rounded-full bg-blue-soft text-blue-deep">
                  <Icon name="check" className="w-7 h-7" strokeWidth={2.4} />
                </span>
                <h2 className="h-display text-xl font-semibold">Message sent</h2>
                <p className="text-ink-soft">We've received your message and will respond shortly.</p>
                <button onClick={() => setSent(false)} className="btn-secondary mt-2">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="card-surface p-7 sm:p-9 space-y-5">
                <h2 className="h-display text-2xl font-semibold">Send us a message</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-ink">Full Name</label>
                    <input
                      value={form.name}
                      onChange={update("name")}
                      className="w-full mt-2 rounded-xl border border-grey-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-bright/40 focus:border-blue-bright"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-ink">Phone (optional)</label>
                    <input
                      value={form.phone}
                      onChange={update("phone")}
                      className="w-full mt-2 rounded-xl border border-grey-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-bright/40 focus:border-blue-bright"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">Email Address</label>
                  <input
                    value={form.email}
                    onChange={update("email")}
                    className="w-full mt-2 rounded-xl border border-grey-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-bright/40 focus:border-blue-bright"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-ink">Message</label>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={4}
                    className="w-full mt-2 rounded-xl border border-grey-mist px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-bright/40 focus:border-blue-bright"
                    placeholder="How can we help?"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                  <Icon name="arrow-right" className="w-5 h-5" />
                </button>
              </form>
            )}

            <div className="rounded-xl2 overflow-hidden shadow-card h-72">
              <iframe
                title="Clinic Location"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${clinic.mapEmbedQuery}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function InfoRow({ icon, title, value, href }) {
  const content = (
    <div className="card-surface p-6 flex items-start gap-4">
      <span className="grid place-items-center w-11 h-11 rounded-xl bg-blue-soft text-blue-deep flex-shrink-0">
        <Icon name={icon} className="w-5 h-5" />
      </span>
      <div>
        <h3 className="font-semibold text-sm text-ink">{title}</h3>
        <p className="text-ink-soft text-sm mt-1">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:-translate-y-0.5 transition-transform">
      {content}
    </a>
  ) : (
    content
  );
}
