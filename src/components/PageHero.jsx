import PulseDivider from "./PulseDivider.jsx";

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="container-x pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className={`grid ${image ? "lg:grid-cols-2" : ""} gap-10 items-center`}>
          <div className="animate-fade-up max-w-xl">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="h-display text-4xl sm:text-5xl font-semibold leading-tight mt-4">{title}</h1>
            {description && <p className="text-ink-soft text-lg mt-5 leading-relaxed">{description}</p>}
          </div>
          {image && (
            <div className="relative animate-fade-up">
              <div className="absolute -inset-4 bg-blue-soft rounded-xl2 -rotate-2" />
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="relative rounded-xl2 shadow-glass w-full h-72 sm:h-96 object-cover"
              />
            </div>
          )}
        </div>
      </div>
      <PulseDivider />
    </section>
  );
}
