import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { clinic } from "../data/content.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Doctor" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [links.length]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-lg shadow-card" : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-11 h-11 rounded-2xl bg-deep-gradient text-white shadow-card">
            <Icon name="heart-pulse" className="w-6 h-6" strokeWidth={2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-lg text-ink">Dr. B. K. Tiwari</span>
            <span className="font-utility text-[11px] tracking-[0.18em] uppercase text-ink-soft">
              Family &amp; General Clinic
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 font-body text-sm font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-colors ${
                    isActive ? "text-blue-deep bg-blue-soft" : "text-ink-soft hover:text-blue-deep hover:bg-blue-soft/60"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="btn-ghost !px-3">
            <Icon name="phone" className="w-4 h-4" />
            Call Now
          </a>
          <Link to="/appointment" className="btn-primary !py-3 !px-6 text-sm">
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden grid place-items-center w-11 h-11 rounded-full border border-grey-mist text-blue-deep"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "x" : "menu"} className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-grey-mist bg-white/95 backdrop-blur-lg">
          <ul className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl font-body font-medium ${
                      isActive ? "text-blue-deep bg-blue-soft" : "text-ink-soft"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="flex gap-3 pt-2">
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="btn-secondary flex-1 !py-2.5 text-sm">
                Call Now
              </a>
              <Link to="/appointment" onClick={() => setOpen(false)} className="btn-primary flex-1 !py-2.5 text-sm">
                Book
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
