import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import { clinic, legalContact } from "../data/content.js";

const sections = [
  {
    icon: "file",
    title: "Website Terms of Use",
    body: `By accessing and using this website, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of, or restrict, anyone else's use of the site. The content on this website is provided for general informational purposes about the clinic and its services.`,
  },
  {
    icon: "shield-lock",
    title: "Medical Disclaimer",
    body: `The content on this website, including text about services and health topics, is provided for general informational purposes only and does not constitute medical advice. It is not a substitute for professional diagnosis, treatment, or consultation with Dr. B. K. Tiwari or another qualified healthcare provider. Always seek the advice of a physician for any medical concern, and never disregard professional medical advice because of something read on this website.`,
  },
  {
    icon: "calendar",
    title: "Appointment Terms",
    body: `Appointments booked through this website or via WhatsApp/phone are subject to confirmation by clinic staff. Submitting an appointment request does not guarantee a confirmed slot until you receive confirmation from the clinic. Please arrive on time; patients arriving significantly late may need to be rescheduled.`,
  },
  {
    icon: "clock",
    title: "Cancellation Policy",
    body: `PLACEHOLDER — the clinic's cancellation and rescheduling policy (e.g. minimum notice period, any applicable charges) will be confirmed by the client and updated here before launch.`,
  },
  {
    icon: "award",
    title: "Intellectual Property",
    body: `All content on this website, including text, images, logos, and design, is the property of ${clinic.clinicName} unless otherwise credited, and may not be reproduced or used without prior written permission.`,
  },
  {
    icon: "shield-check",
    title: "Limitation of Liability",
    body: `${clinic.clinicName} and its staff will not be held liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on its content. This website is provided "as is" without warranties of any kind, express or implied.`,
  },
];

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms & Disclaimer"
        description="Website terms of use and medical disclaimer for Dr. B. K. Tiwari's clinic, including appointment and cancellation terms."
        path="/terms"
      />

      <PageHero
        eyebrow="Legal"
        title="Terms & Disclaimer"
        description={`Effective date: ${legalContact.effectiveDate}. Please read these terms carefully before using this website or booking an appointment.`}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-x max-w-3xl space-y-10">
          <div className="rounded-2xl bg-blue-soft/40 p-6 text-sm text-ink-soft border border-blue-bright/20">
            This is a template terms and disclaimer page for a medical clinic website. It should be reviewed
            by a qualified legal professional and updated with the clinic's confirmed policies before
            publication.
          </div>

          {sections.map((s) => (
            <div key={s.title} className="flex gap-5">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-blue-deep text-white flex-shrink-0">
                <Icon name={s.icon} className="w-6 h-6" strokeWidth={1.7} />
              </span>
              <div>
                <h2 className="h-display text-xl font-semibold">{s.title}</h2>
                <p className="text-ink-soft text-sm leading-relaxed mt-2.5">{s.body}</p>
              </div>
            </div>
          ))}

          <div className="card-surface p-7">
            <h2 className="h-display text-xl font-semibold mb-3">Contact Details</h2>
            <p className="text-ink-soft text-sm leading-relaxed">
              For any questions regarding these terms, please contact {clinic.clinicName} at{" "}
              <a href={`mailto:${clinic.email}`} className="text-blue-deep font-semibold">
                {clinic.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="text-blue-deep font-semibold">
                {clinic.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
