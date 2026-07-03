import Icon from "./Icon.jsx";

export default function StatBadge({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white/15 text-white flex-shrink-0">
        <Icon name={icon} className="w-6 h-6" strokeWidth={1.7} />
      </span>
      <div>
        <p className="font-display text-xl font-semibold text-white leading-none">{value}</p>
        <p className="text-white/70 text-xs mt-1">{label}</p>
      </div>
    </div>
  );
}
