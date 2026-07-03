import { useEffect, useState } from "react";
import Layout from "../components/Layout.jsx";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import Icon from "../components/Icon.jsx";
import CTASection from "../components/CTASection.jsx";
import { galleryImages } from "../data/content.js";

const categories = ["All", ...new Set(galleryImages.map((g) => g.category))];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  useEffect(() => {
    const onKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % filtered.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, filtered.length]);

  return (
    <Layout>
      <SEO
        title="Gallery"
        description="A look inside Dr. B. K. Tiwari's clinic — the doctor at work, the facility, equipment, and community health events."
        path="/gallery"
      />

      <PageHero
        eyebrow="Gallery"
        title="A look inside the clinic"
        description="From the consultation room to community health camps — a glimpse of the environment where you'll be cared for."
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-x">
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

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setActiveIndex(i)}
                className="block w-full break-inside-avoid rounded-xl2 overflow-hidden shadow-card group relative focus-visible:outline-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-blue-deep/0 group-hover:bg-blue-deep/30 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm font-semibold">{img.category}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute top-6 right-6 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <Icon name="x" className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <Icon name="arrow-right" className="w-5 h-5 rotate-180" />
          </button>
          <img
            src={filtered[activeIndex].src}
            alt={filtered[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-glass object-contain"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i + 1) % filtered.length);
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <Icon name="arrow-right" className="w-5 h-5" />
          </button>
        </div>
      )}

      <CTASection />
    </Layout>
  );
}
