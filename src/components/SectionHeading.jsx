export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignment} gap-4 max-w-2xl ${align === "left" ? "" : "mx-auto"}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h-display text-3xl sm:text-4xl font-semibold leading-tight">{title}</h2>
      {description && <p className="text-ink-soft text-base sm:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
