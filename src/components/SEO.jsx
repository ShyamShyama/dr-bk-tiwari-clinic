import { Helmet } from "react-helmet-async";

const SITE_NAME = "Dr. B. K. Tiwari Clinic";
const SITE_URL = "https://www.drbktiwari.com"; // PLACEHOLDER — confirm final domain
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&q=80";

export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  schema,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Trusted General Physician`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}

export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: SITE_NAME,
  image: DEFAULT_IMAGE,
  telephone: "+91-98XXXXXX10",
  address: {
    "@type": "PostalAddress",
    streetAddress: "PLACEHOLDER — Street Address",
    addressLocality: "PLACEHOLDER — City",
    addressRegion: "PLACEHOLDER — State",
    postalCode: "PLACEHOLDER",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "458",
  },
  priceRange: "PLACEHOLDER",
  url: SITE_URL,
};
