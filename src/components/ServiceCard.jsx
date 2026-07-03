import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function ServiceCard({ service, compact = false }) {
  return (
    <div className="card-surface p-7 flex flex-col h-full">
      <span className="grid place-items-center w-14 h-14 rounded-2xl bg-blue-soft text-blue-deep mb-5">
        <Icon name={service.icon} className="w-7 h-7" strokeWidth={1.7} />
      </span>
      <h3 className="h-display text-xl font-semibold mb-2.5">{service.title}</h3>
      <p className="text-ink-soft text-sm leading-relaxed flex-1">{service.short}</p>
      {!compact && (
        <Link
          to={`/services#${service.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-deep hover:text-blue-bright"
        >
          Learn more <Icon name="arrow-right" className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
