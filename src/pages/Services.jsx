import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import CTASection from "../components/CTASection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import { services, faqs } from "../data/content.js";

const serviceFaqs = faqs.filter((f) => ["Services", "Fees"].includes(f.category));

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Medical Services"
        description="Explore Dr. B. K. Tiwari's medical services — general consultation, preventive checkups, chronic disease management, vaccination, lifestyle advice and health counselling."
        path="/services"
      />

      <PageHero
        eyebrow="Our Services"
        title="Medical care built around your everyday health"
        description="Every service below is delivered with the same standard: a careful examination, an honest explanation, and a plan you can actually follow."
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x flex flex-col gap-20">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-28 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-soft rounded-xl2 -z-10" />
                <img
                  src={`https://images.unsplash.com/photo-${
                    [
                      "1576091160550-2173dba999ef",
                      "1631217868264-e5b90bb7e133",
                      "1584982751601-97dcc096659c",
                      "1632053002434-1eb3cc7c0aa2",
                      "1490645935967-10de6ba17061",
                      "1573497491208-6b1acb260507",
                    ][i]
                  }?w=800&q=80`}
                  alt={s.title}
                  loading="lazy"
                  className="rounded-xl2 shadow-card w-full h-80 object-cover"
                />
              </div>
              <div>
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-blue-deep text-white mb-5">
                  <Icon name={s.icon} className="w-7 h-7" strokeWidth={1.7} />
                </span>
                <h2 className="h-display text-2xl sm:text-3xl font-semibold">{s.title}</h2>
                <p className="text-ink-soft mt-4 leading-relaxed">{s.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="grid place-items-center w-5 h-5 rounded-full bg-blue-soft text-blue-deep mt-0.5 flex-shrink-0">
                        <Icon name="check" className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/appointment" className="btn-primary mt-8">
                  <Icon name="calendar" className="w-5 h-5" />
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-grey-light">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Common Questions" title="Services FAQ" />
          <div className="mt-12">
            <FAQAccordion items={serviceFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
