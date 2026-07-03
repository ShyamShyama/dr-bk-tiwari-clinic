import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { clinic } from "../data/content.js";

const quickLinks = [
  { to: "/about", label: "About Doctor" },
  { to: "/services", label: "Services" },
  { to: "/appointment", label: "Book Appointment" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Patient Reviews" },
  { to: "/faq", label: "FAQ" },
];

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Disclaimer" },
  { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-deeper text-white">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white/10 text-white">
              <Icon name="heart-pulse" className="w-6 h-6" strokeWidth={2} />
            </span>
            <span className="font-display font-semibold text-lg">Dr. B. K. Tiwari</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Compassionate, modern general medical care for the whole family — consultation, prevention,
            and long-term wellbeing under one roof.
          </p>
        </div>

        <div>
          <h3 className="font-utility text-xs tracking-[0.2em] uppercase text-white/50 font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-utility text-xs tracking-[0.2em] uppercase text-white/50 font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <Icon name="map-pin" className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{clinic.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="w-4 h-4 flex-shrink-0" />
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" className="w-4 h-4 flex-shrink-0" />
              <a href={`mailto:${clinic.email}`} className="hover:text-white">
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-utility text-xs tracking-[0.2em] uppercase text-white/50 font-semibold mb-4">
            Clinic Hours
          </h3>
          <ul className="space-y-2.5 text-sm text-white/75">
            {clinic.timings.map((t) => (
              <li key={t.day}>
                <span className="block text-white/90">{t.day}</span>
                <span className="text-white/60">{t.time}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-white/90 hover:text-white"
          >
            Get Directions <Icon name="arrow-right" className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Google Map preview */}
      <div className="container-x pb-12">
        <div className="rounded-xl2 overflow-hidden border border-white/10 h-56">
          <iframe
            title="Clinic Location Map"
            className="w-full h-full grayscale contrast-125 opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${clinic.mapEmbedQuery}&output=embed`}
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {clinic.clinicName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
