import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import SEO, { clinicSchema } from "../components/SEO.jsx";
import Icon from "../components/Icon.jsx";
import PulseDivider from "../components/PulseDivider.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import StatBadge from "../components/StatBadge.jsx";
import CTASection from "../components/CTASection.jsx";
import { clinic, services, whyChooseUs, reviews } from "../data/content.js";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Trusted General Physician & Family Clinic"
        description="Dr. B. K. Tiwari's clinic offers compassionate, modern general medical care — consultations, preventive checkups, chronic disease management and vaccination. Book your appointment today."
        path="/"
        schema={clinicSchema}
      />

      {/* HERO */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="container-x pt-14 pb-20 sm:pt-20 sm:pb-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="animate-fade-up order-2 lg:order-1">
              <span className="eyebrow">General &amp; Family Medicine</span>
              <h1 className="h-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] mt-5">
                {clinic.tagline}
              </h1>
              <p className="text-ink-soft text-lg mt-6 max-w-lg leading-relaxed">{clinic.subheading}</p>

              <div className="flex flex-wrap gap-4 mt-9">
                <Link to="/appointment" className="btn-primary">
                  <Icon name="calendar" className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Icon name="map-pin" className="w-5 h-5" />
                  Get Directions
                </a>
              </div>

              <div className="flex items-center gap-6 mt-11">
                <div className="flex -space-x-3">
                  {["R", "S", "A", "P"].map((n) => (
                    <span
                      key={n}
                      className="w-10 h-10 rounded-full bg-blue-deep text-white grid place-items-center font-display text-sm border-2 border-white"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="w-4 h-4 text-amber-400" strokeWidth={0} />
                    ))}
                    <span className="ml-1.5 font-semibold text-sm text-ink">{clinic.rating}</span>
                  </div>
                  <p className="text-xs text-ink-soft mt-0.5">{clinic.reviewCount} Google Reviews</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 animate-fade-up">
              <div className="absolute -inset-6 bg-blue-soft rounded-[2.5rem] rotate-2" />
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&q=80"
                alt="Dr. B. K. Tiwari with a patient during consultation"
                className="relative rounded-[2.5rem] shadow-glass w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="glass-card absolute -bottom-8 -left-6 sm:-left-10 rounded-2xl shadow-glass px-6 py-4 flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-blue-deep text-white">
                  <Icon name="shield-check" className="w-6 h-6" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-display font-semibold text-ink leading-none">Trusted Treatment</p>
                  <p className="text-xs text-ink-soft mt-1">Hundreds of patients cared for</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PulseDivider />
      </section>

      {/* TRUST BAR */}
      <section className="bg-blue-deep">
        <div className="container-x py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <StatBadge icon="star" value={`${clinic.rating} / 5`} label="Average Google Rating" />
          <StatBadge icon="users" value={clinic.reviewCount} label="Google Reviews" />
          <StatBadge icon="heart-hand" value="Hundreds" label="Of Patients Trust Us" />
          <StatBadge icon="shield-check" value="Modern" label="Professional Medical Care" />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=900&q=80"
              alt="Dr. B. K. Tiwari in the clinic"
              loading="lazy"
              className="rounded-xl2 shadow-card w-full h-96 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">About the Doctor</span>
            <h2 className="h-display text-3xl sm:text-4xl font-semibold leading-tight mt-4">
              A doctor who takes the time to actually listen
            </h2>
            <p className="text-ink-soft text-base leading-relaxed mt-5">
              Dr. B. K. Tiwari believes good medicine starts with a proper conversation, not a rushed
              prescription. With a practice built on general medicine and long-term patient relationships,
              every visit focuses on clear communication, accurate diagnosis, and care that fits your life.
            </p>
            <ul className="mt-7 space-y-3">
              {["Unhurried, patient-first consultations", "Clear explanations in plain language", "Consistent long-term follow-up care"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-blue-soft text-blue-deep flex-shrink-0">
                      <Icon name="check" className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link to="/about" className="btn-primary mt-9">
              Read Full Story
              <Icon name="arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 sm:py-28 bg-grey-light">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Treat"
            title="Comprehensive care, close to home"
            description="From everyday illness to long-term condition management, our services are built around consistent, personal care."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All Services
              <Icon name="arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Patients Choose Us"
            title="Care built around trust, not turnover"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl hover:bg-blue-soft/40 transition-colors duration-300">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-blue-deep text-white flex-shrink-0">
                  <Icon name={item.icon} className="w-6 h-6" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink">{item.title}</h3>
                  <p className="text-ink-soft text-sm mt-1.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="py-20 sm:py-28 bg-grey-light">
        <div className="container-x">
          <SectionHeading eyebrow="Patient Voices" title="What our patients say" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/reviews" className="btn-secondary">
              Read All Reviews
              <Icon name="arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
