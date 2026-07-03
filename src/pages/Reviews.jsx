import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import CTASection from "../components/CTASection.jsx";
import { clinic, reviews } from "../data/content.js";

export default function Reviews() {
  return (
    <Layout>
      <SEO
        title="Patient Reviews"
        description={`Read what patients say about Dr. B. K. Tiwari's clinic — rated ${clinic.rating} out of 5 from ${clinic.reviewCount} Google reviews.`}
        path="/reviews"
      />

      <PageHero
        eyebrow="Patient Reviews"
        title="Trusted by the patients we serve"
        description="Real feedback from people who have visited the clinic — for consultations, checkups, and ongoing care."
      />

      {/* Rating summary */}
      <section className="py-14 bg-white border-b border-grey-mist">
        <div className="container-x flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div>
            <p className="font-display text-5xl font-semibold text-blue-deep">{clinic.rating}</p>
            <div className="flex gap-1 justify-center sm:justify-start mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="w-5 h-5 text-amber-400" strokeWidth={0} />
              ))}
            </div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-grey-mist" />
          <div>
            <p className="font-semibold text-ink">{clinic.reviewCount} Google Reviews</p>
            <p className="text-sm text-ink-soft mt-1">Consistently rated for care and communication</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-grey-mist" />
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Icon name="star" className="w-5 h-5" strokeWidth={0} />
            Leave a Google Review
          </a>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 sm:py-24 bg-grey-light">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </section>

      {/* Video testimonial placeholder */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x max-w-3xl mx-auto text-center">
          <span className="eyebrow">Hear It From Our Patients</span>
          <h2 className="h-display text-3xl font-semibold mt-4">Video Testimonial</h2>
          <p className="text-ink-soft mt-3">Patient video testimonials will be added here after recording.</p>
          <div className="relative mt-10 rounded-xl2 overflow-hidden shadow-card aspect-video bg-blue-deep/90 flex items-center justify-center">
            <span className="grid place-items-center w-20 h-20 rounded-full bg-white/15 text-white backdrop-blur">
              <Icon name="play" className="w-9 h-9" strokeWidth={0} />
            </span>
            <span className="absolute bottom-5 left-5 text-white/80 text-xs font-utility tracking-wider uppercase">
              Placeholder — video coming soon
            </span>
          </div>
        </div>
      </section>

      <CTASection
        title="Had a great experience at the clinic?"
        description="We'd love to hear from you — your feedback helps other patients feel confident about their care."
      />
    </Layout>
  );
}
