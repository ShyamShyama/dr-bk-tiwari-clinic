import Icon from "./Icon.jsx";

export default function ReviewCard({ review }) {
  return (
    <div className="card-surface p-7 flex flex-col h-full">
      <Icon name="quote" className="w-8 h-8 text-blue-soft mb-4" strokeWidth={0} />
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name="star"
            className={`w-4 h-4 ${i < review.rating ? "text-amber-400" : "text-grey-mist"}`}
            strokeWidth={0}
          />
        ))}
      </div>
      <p className="text-ink-soft text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-full bg-blue-deep text-white font-display font-semibold text-sm">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="font-semibold text-sm text-ink">{review.name}</p>
          <p className="text-xs text-ink-soft">Verified Patient</p>
        </div>
      </div>
    </div>
  );
}
