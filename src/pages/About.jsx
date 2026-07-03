import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import CTASection from "../components/CTASection.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { timeline, achievements } from "../data/content.js";

const expertise = [
  "General Medicine & Internal Medicine",
  "Preventive Health & Screening",
  "Diabetes & Hypertension Management",
  "Vaccination & Immunisation",
  "Lifestyle & Wellness Counselling",
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Dr. B. K. Tiwari"
        description="Learn about Dr. B. K. Tiwari's medical background, mission, areas of expertise, and the philosophy of patient-first care behind the clinic."
        path="/about"
      />

      <PageHero
        eyebrow="About the Doctor"
        title="A career built on listening first, treating second"
        description="Dr. B. K. Tiwari has spent years building a general medicine practice rooted in patience, clarity, and consistent long-term care."
        image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80"
      />

      {/* Biography */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="h-display text-3xl font-semibold">Biography</h2>
            <p className="text-ink-soft leading-relaxed">
              Dr. B. K. Tiwari's approach to medicine is simple: every patient deserves to be heard fully
              before any decision is made. Over years of clinical practice, this philosophy has shaped a
              clinic where consultations are unhurried, explanations are given in plain language, and
              follow-up care is treated as seriously as the first visit.
            </p>
            <p className="text-ink-soft leading-relaxed">
              The practice focuses on general and preventive medicine — the everyday illnesses, the routine
              checkups, and the long-term conditions that need a doctor who remembers your history, not just
              your file number. This continuity of care is what patients consistently point to when they
              describe why they keep coming back.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="card-surface p-6">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-blue-soft text-blue-deep mb-3">
                  <Icon name="sparkles" className="w-5 h-5" />
                </span>
                <h3 className="font-display font-semibold text-lg">Mission</h3>
                <p className="text-ink-soft text-sm mt-2 leading-relaxed">
                  To provide accessible, honest, and personal medical care that treats the whole patient —
                  not just the symptom in front of them.
                </p>
              </div>
              <div className="card-surface p-6">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-blue-soft text-blue-deep mb-3">
                  <Icon name="award" className="w-5 h-5" />
                </span>
                <h3 className="font-display font-semibold text-lg">Vision</h3>
                <p className="text-ink-soft text-sm mt-2 leading-relaxed">
                  To be the community's most trusted general practice — known for consistency, clarity,
                  and genuine patient relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar: expertise + credentials */}
          <aside className="space-y-6">
            <div className="card-surface p-7">
              <h3 className="font-display font-semibold text-lg mb-4">Areas of Expertise</h3>
              <ul className="space-y-3">
                {expertise.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Icon name="check" className="w-4 h-4 text-blue-deep mt-0.5 flex-shrink-0" strokeWidth={2.4} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-surface p-7 bg-blue-soft/40">
              <h3 className="font-display font-semibold text-lg mb-4">Education &amp; Qualifications</h3>
              <p className="text-xs uppercase tracking-wider text-blue-deep font-semibold mb-2">Placeholder — pending confirmation</p>
              <ul className="space-y-2 text-sm text-ink-soft">
                <li>MBBS — [University Name]</li>
                <li>MD (General Medicine) — [Institution]</li>
                <li>Medical Council Registration No. — [XXXXXX]</li>
              </ul>
              <p className="text-xs text-ink-soft mt-4 italic">
                Exact qualifications and registration details will be updated once confirmed by the client.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24 bg-grey-light">
        <div className="container-x">
          <SectionHeading eyebrow="Professional Journey" title="A timeline of practice and growth" />
          <div className="mt-14 max-w-2xl mx-auto">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-blue-deep text-white font-display text-xs font-semibold flex-shrink-0">
                    {i + 1}
                  </span>
                  {i < timeline.length - 1 && <span className="w-px flex-1 bg-grey-mist my-1" />}
                </div>
                <div className="pb-10">
                  <span className="text-xs font-utility tracking-widest uppercase text-blue-bright font-semibold">
                    {t.year}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-1">{t.title}</h3>
                  <p className="text-ink-soft text-sm mt-1.5 leading-relaxed">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Recognition" title="Achievements & milestones" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {achievements.map((a, i) => (
              <div key={i} className="card-surface p-6 text-center">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-blue-soft text-blue-deep mx-auto mb-4">
                  <Icon name="award" className="w-6 h-6" />
                </span>
                <p className="text-sm text-ink-soft leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Meet Dr. Tiwari in person"
        description="Book a consultation and experience patient-first care for yourself."
      />
    </Layout>
  );
}
