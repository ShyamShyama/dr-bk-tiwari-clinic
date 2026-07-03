// Central content store for Dr. B. K. Tiwari's clinic website.
// Items marked "PLACEHOLDER" contain unconfirmed details (fees, exact
// qualifications, timings, addresses) that must be verified and replaced
// with client-approved information before launch.

export const clinic = {
  doctorName: "Dr. B. K. Tiwari",
  clinicName: "Dr. B. K. Tiwari Clinic",
  tagline: "Trusted Healthcare with Compassion",
  subheading: "Professional medical care you can trust.",
  phone: "+91 98XXXXXX10", // PLACEHOLDER — confirm clinic phone number
  whatsapp: "919800000000", // PLACEHOLDER — confirm WhatsApp number (with country code, no +)
  email: "care@drbktiwari.com", // PLACEHOLDER — confirm clinic email
  address: "PLACEHOLDER — Clinic Street Address, Locality, City, State – PIN Code",
  mapEmbedQuery: "Dr+B+K+Tiwari+Clinic", // PLACEHOLDER — replace with verified Google Maps place link
  rating: "4.9",
  reviewCount: "458+",
  timings: [
    { day: "Monday – Saturday", time: "PLACEHOLDER — e.g. 9:00 AM – 1:00 PM & 5:00 PM – 9:00 PM" },
    { day: "Sunday", time: "PLACEHOLDER — e.g. 10:00 AM – 1:00 PM (By appointment)" },
  ],
};

export const services = [
  {
    slug: "general-consultation",
    title: "General Consultation",
    icon: "stethoscope",
    short: "Thorough check-ups and diagnosis for everyday health concerns, from fevers to persistent aches.",
    description:
      "A general consultation with Dr. B. K. Tiwari begins with an unhurried conversation about your symptoms and history, followed by a careful physical examination. The goal is an accurate diagnosis and a treatment plan that fits your life, not just your chart.",
    benefits: [
      "Same-day diagnosis for common illnesses",
      "Clear explanation of your condition and treatment options",
      "Guidance on medication, rest, and follow-up care",
      "Referral to specialists when required",
    ],
  },
  {
    slug: "health-checkup",
    title: "Preventive Health Checkups",
    icon: "clipboard-check",
    short: "Comprehensive screening packages designed to catch potential issues before they become serious.",
    description:
      "Prevention is far kinder than cure. Our health checkup packages combine essential blood work, vital-sign monitoring, and a detailed consultation to build a clear picture of your current health and flag risks early.",
    benefits: [
      "Full-body vital and risk assessment",
      "Personalised diet and lifestyle recommendations",
      "Early detection of lifestyle-related conditions",
      "Detailed report reviewed with you in person",
    ],
  },
  {
    slug: "chronic-disease-management",
    title: "Chronic Disease Management",
    icon: "heart-pulse",
    short: "Ongoing, structured care for diabetes, hypertension, thyroid, and other long-term conditions.",
    description:
      "Living well with a chronic condition depends on consistent monitoring and a doctor who knows your history. We build a long-term management plan covering medication, diet, and regular review so your condition stays controlled, not just treated.",
    benefits: [
      "Personalised long-term care plan",
      "Regular monitoring of key health markers",
      "Medication review and adjustment",
      "Coordination with specialists where needed",
    ],
  },
  {
    slug: "vaccination",
    title: "Vaccination",
    icon: "syringe",
    short: "Immunisation for children, adults, and seniors, administered safely and on schedule.",
    description:
      "From routine childhood immunisation to adult booster doses and seasonal vaccines, our clinic maintains proper cold-chain storage and follows recommended schedules, with every dose recorded in your health record.",
    benefits: [
      "Vaccination scheduling and reminders",
      "Safe storage and administration",
      "Guidance for travel and seasonal vaccines",
      "Digital vaccination record",
    ],
  },
  {
    slug: "lifestyle-consultation",
    title: "Lifestyle Advice",
    icon: "leaf",
    short: "Practical, judgement-free guidance on diet, sleep, stress, and daily habits.",
    description:
      "Many health concerns trace back to daily habits. In a lifestyle consultation, we look at your routine — sleep, diet, activity, and stress — and build a small number of realistic changes that actually stick.",
    benefits: [
      "Practical, sustainable habit changes",
      "Diet guidance suited to your routine",
      "Stress and sleep management advice",
      "Progress reviewed at follow-up visits",
    ],
  },
  {
    slug: "health-counselling",
    title: "Health Counselling",
    icon: "message-heart",
    short: "A calm, private space to discuss health worries, test results, or difficult diagnoses.",
    description:
      "Understanding a diagnosis is as important as treating it. Health counselling sessions give you dedicated time to ask questions, understand test results, and make informed decisions about your care, without feeling rushed.",
    benefits: [
      "Unhurried, one-on-one discussion",
      "Plain-language explanation of results",
      "Support in making treatment decisions",
      "Family counselling sessions available",
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Modern Care",
    description: "Evidence-based treatment supported by up-to-date medical practice and equipment.",
    icon: "sparkles",
  },
  {
    title: "Patient First",
    description: "Every visit is unhurried — your concerns are heard fully before any decision is made.",
    icon: "heart-hand",
  },
  {
    title: "Affordable Consultation",
    description: "Transparent, fair pricing with no hidden charges for consultations or follow-ups.",
    icon: "wallet",
  },
  {
    title: "Experienced Doctor",
    description: "Years of clinical practice across general medicine and chronic condition management.",
    icon: "award",
  },
  {
    title: "Trusted Treatment",
    description: "Rated 4.9 out of 5 by hundreds of patients across the community.",
    icon: "shield-check",
  },
  {
    title: "Quick Appointments",
    description: "Simple online booking with minimal waiting time at the clinic.",
    icon: "clock",
  },
];

export const timeline = [
  {
    year: "PLACEHOLDER",
    title: "Medical Degree",
    description: "PLACEHOLDER — e.g. MBBS, [University Name] — to be confirmed by client.",
  },
  {
    year: "PLACEHOLDER",
    title: "Postgraduate Qualification",
    description: "PLACEHOLDER — e.g. MD (General Medicine), [Institution] — to be confirmed by client.",
  },
  {
    year: "PLACEHOLDER",
    title: "Clinical Practice Begins",
    description: "PLACEHOLDER — brief description of early practice / hospital affiliation.",
  },
  {
    year: "PLACEHOLDER",
    title: "Independent Clinic Established",
    description: "PLACEHOLDER — founding of the current clinic and its focus areas.",
  },
  {
    year: "Present",
    title: "Serving the Community",
    description: "Continuing to provide general and preventive care to hundreds of patients each year.",
  },
];

export const achievements = [
  "PLACEHOLDER — Recognition / award received",
  "PLACEHOLDER — Number of patients treated to date",
  "PLACEHOLDER — Association / medical body membership",
  "PLACEHOLDER — Community health camps conducted",
];

export const reviews = [
  {
    name: "Ramesh Gupta",
    rating: 5,
    text: "Dr. Tiwari took the time to actually listen before prescribing anything. The clinic is clean, the staff is polite, and I never feel rushed during my visits.",
  },
  {
    name: "Sunita Sharma",
    rating: 5,
    text: "I have been bringing my parents here for over a year now. The follow-up care for my father's blood pressure has been consistent and genuinely helpful.",
  },
  {
    name: "Anil Verma",
    rating: 5,
    text: "Booking an appointment was simple and the waiting time was minimal. Dr. Tiwari explained my test results clearly, which I really appreciated.",
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "Excellent experience with the vaccination schedule for my daughter. Every dose was tracked and we were reminded well in advance.",
  },
  {
    name: "Manoj Kumar",
    rating: 4,
    text: "Good, honest advice without unnecessary tests. The lifestyle consultation helped me finally sort out my sleep schedule.",
  },
  {
    name: "Kavita Joshi",
    rating: 5,
    text: "A doctor who explains things in simple language and genuinely cares about follow-through. Highly recommend the preventive health checkup.",
  },
];

export const galleryImages = [
  {
    category: "Doctor",
    alt: "Dr. B. K. Tiwari consulting with a patient",
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80",
  },
  {
    category: "Clinic",
    alt: "Modern clinic reception area",
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80",
  },
  {
    category: "Waiting Area",
    alt: "Comfortable patient waiting area",
    src: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=900&q=80",
  },
  {
    category: "Equipment",
    alt: "Modern medical diagnostic equipment",
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&q=80",
  },
  {
    category: "Consultation",
    alt: "Doctor reviewing patient reports",
    src: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=900&q=80",
  },
  {
    category: "Events",
    alt: "Community health camp in progress",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
  },
  {
    category: "Education",
    alt: "Health awareness session for patients",
    src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=900&q=80",
  },
  {
    category: "Clinic",
    alt: "Clean and organised consultation room",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80",
  },
  {
    category: "Equipment",
    alt: "Vaccination and immunisation supplies",
    src: "https://images.unsplash.com/photo-1632053002434-1eb3cc7c0aa2?w=900&q=80",
  },
];

export const faqs = [
  {
    category: "Appointments",
    question: "How do I book an appointment with Dr. Tiwari?",
    answer:
      "You can book directly through the Book Appointment page on this website, call the clinic, or message us on WhatsApp. We recommend booking online for the fastest confirmation.",
  },
  {
    category: "Appointments",
    question: "Is walk-in consultation available?",
    answer:
      "Yes, walk-ins are accepted based on availability, but patients with a prior appointment are seen first. Booking ahead helps avoid waiting time — PLACEHOLDER: confirm current walk-in policy.",
  },
  {
    category: "Clinic",
    question: "What are the clinic's working hours?",
    answer:
      "PLACEHOLDER — see the Clinic Timings section on the Contact and Book Appointment pages for current hours, to be confirmed by the client.",
  },
  {
    category: "Fees",
    question: "What is the consultation fee?",
    answer:
      "PLACEHOLDER — consultation fees will be confirmed by the client and updated here before launch. Please call the clinic for current pricing.",
  },
  {
    category: "Services",
    question: "What medical services does the clinic offer?",
    answer:
      "The clinic offers general consultation, preventive health checkups, chronic disease management, vaccination, lifestyle advice, and health counselling. Visit the Services page for full details.",
  },
  {
    category: "Location",
    question: "Where is the clinic located?",
    answer:
      "PLACEHOLDER — the exact clinic address will be added here and on the Contact page once confirmed by the client, along with a verified Google Maps link.",
  },
  {
    category: "Emergency",
    question: "Does the clinic handle medical emergencies?",
    answer:
      "This clinic is set up for outpatient consultation and ongoing care, not emergency trauma care. In case of a medical emergency, please visit your nearest emergency hospital or call local emergency services immediately.",
  },
  {
    category: "Online Consultation",
    question: "Can I consult Dr. Tiwari online?",
    answer:
      "Online consultation is a planned feature for this clinic and is not yet active. Please check back soon, or book an in-clinic appointment for now.",
  },
];

export const legalContact = {
  entityName: "Dr. B. K. Tiwari Clinic",
  effectiveDate: "PLACEHOLDER — Effective date to be confirmed",
};
