import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { clinic } from "../data/content.js";

export default function CTASection({
  title = "Ready to take the first step toward better health?",
  description = "Book an appointment with Dr. B. K. Tiwari in under a minute — online, by phone, or on WhatsApp.",
}) {
  return (
    <section className="relative overflow-hidden bg-deep-gradient">
      <div className="container-x py-16 sm:py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="h-display text-white text-3xl sm:text-4xl font-semibold leading-tight">{title}</h2>
          <p className="text-white/75 text-base sm:text-lg">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link to="/appointment" className="btn-primary !bg-white !text-blue-deep hover:!bg-blue-soft">
              <Icon name="calendar" className="w-5 h-5" />
              Book Appointment
            </Link>
            <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="btn-secondary !border-white/40 !bg-transparent !text-white hover:!border-white">
              <Icon name="phone" className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/5" />
    </section>
  );
}
