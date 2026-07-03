import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import { clinic, legalContact } from "../data/content.js";

const sections = [
  {
    icon: "file",
    title: "Information We Collect",
    body: `When you book an appointment, contact us through this website, or visit the clinic, we may collect personal details such as your name, phone number, email address, and information relevant to your medical consultation. This information is collected directly from you and, where applicable, from the treatment provided at the clinic.`,
  },
  {
    icon: "shield-lock",
    title: "Patient Data Protection",
    body: `All patient health information is treated as confidential and is used solely for the purpose of providing medical care, appointment management, and, where legally required, reporting. Access to patient records is restricted to authorised clinical and administrative staff.`,
  },
  {
    icon: "clipboard-check",
    title: "How We Use Your Information",
    body: `Information collected through this website is used to schedule and manage appointments, respond to enquiries, send appointment reminders, and improve the quality of care and service provided by the clinic. We do not sell or rent patient information to third parties.`,
  },
  {
    icon: "sparkles",
    title: "Cookies & Website Analytics",
    body: `This website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use the site and to improve its performance. These tools collect anonymised, aggregate data and do not identify you personally unless you have submitted a form.`,
  },
  {
    icon: "users",
    title: "Third-Party Services",
    body: `This website may link to or embed third-party services such as Google Maps, WhatsApp, and appointment or analytics tools. These services operate under their own privacy policies, and we encourage you to review them separately.`,
  },
  {
    icon: "shield-check",
    title: "Data Security",
    body: `We take reasonable technical and organisational measures to protect personal and medical information from unauthorised access, loss, or misuse. However, no method of electronic storage or transmission is completely secure, and absolute security cannot be guaranteed.`,
  },
  {
    icon: "mail",
    title: "Your Rights & Contact",
    body: `You may request access to, correction of, or deletion of your personal information held by the clinic, subject to applicable medical record-retention laws. To make such a request, please contact us using the details below.`,
  },
];

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Read the privacy policy for Dr. B. K. Tiwari's clinic, covering how patient data is collected, used, and protected."
        path="/privacy-policy"
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Effective date: ${legalContact.effectiveDate}. This policy explains how ${clinic.clinicName} collects, uses, and protects your personal and medical information.`}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-x max-w-3xl space-y-10">
          <div className="rounded-2xl bg-blue-soft/40 p-6 text-sm text-ink-soft border border-blue-bright/20">
            This is a template privacy policy for a medical clinic website. It should be reviewed by a
            qualified legal professional and updated with the clinic's confirmed details before publication.
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
            <h2 className="h-display text-xl font-semibold mb-3">Contact Information</h2>
            <p className="text-ink-soft text-sm leading-relaxed">
              For questions about this privacy policy or how your information is handled, please contact{" "}
              {clinic.clinicName} at{" "}
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
