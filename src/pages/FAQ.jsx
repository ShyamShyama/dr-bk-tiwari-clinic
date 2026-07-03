import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import { faqs, clinic } from "../data/content.js";

const categories = ["All", ...new Set(faqs.map((f) => f.category))];

export default function FAQ() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? faqs : faqs.filter((f) => f.category === filter);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <Layout>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about appointments, clinic timings, consultation fees, services, and emergency care at Dr. B. K. Tiwari's clinic."
        path="/faq"
        schema={faqSchema}
      />

      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions"
        description="Can't find what you're looking for? Reach out to us directly and we'll be happy to help."
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-x max-w-3xl">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  filter === c ? "bg-blue-deep text-white" : "bg-grey-light text-ink-soft hover:bg-blue-soft"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <FAQAccordion items={filtered} />

          <div className="card-surface mt-14 p-9 text-center bg-blue-soft/40 flex flex-col items-center gap-4">
            <span className="grid place-items-center w-14 h-14 rounded-full bg-blue-deep text-white">
              <Icon name="message-heart" className="w-7 h-7" />
            </span>
            <h2 className="h-display text-2xl font-semibold">Still have questions?</h2>
            <p className="text-ink-soft max-w-md">
              Our team is happy to help with anything not covered here — reach out by phone, WhatsApp, or
              the contact form.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link to="/contact" className="btn-primary">
                Contact Us
                <Icon name="arrow-right" className="w-5 h-5" />
              </Link>
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="btn-secondary">
                <Icon name="phone" className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
