// Lightweight, dependency-free line-icon set. Keeping icons inline (no
// external icon package) keeps the bundle small and the visual language
// consistent with the clinic's custom "pulse line" motif.
const paths = {
  stethoscope:
    "M6 3v6a4 4 0 0 0 8 0V3 M10 13v2a6 6 0 0 0 12 0v-3 M22 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4 M6 9a2 2 0 1 1-4 0",
  "clipboard-check": "M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z M6 6h12v15H6V6Z M9.5 14l2 2 4-4.5",
  "heart-pulse":
    "M12 21s-7.5-4.6-10-9.1C.6 8.1 2.5 4 6.5 4c2 0 3.4 1 5.5 3 2.1-2 3.5-3 5.5-3 4 0 5.9 4.1 4.5 7.9C19.5 16.4 12 21 12 21Z M3 12h4l2-4 3 7 2-5h5",
  syringe: "m18 2 4 4 M8 8l8 8 M14.5 3.5l6 6M6 12l-3.5 3.5L4 18l2.5 1.5L10 16 M2 22l4-4",
  leaf: "M5 21c8 0 15-7 15-16 0 0-11-1-15 6-3 5 0 10 0 10Z M5 21c0-4 2-8 6-11",
  "message-heart":
    "M21 12a8 8 0 1 1-3.6-6.7 M11 10.5c1.4-1.6 3.7-1.6 4.5.3.8-1.9 3.1-1.9 4.5-.3 1.1 1.3.6 2.9-1 4.1L15.5 17l-3.5-2.4c-1.6-1.2-2.1-2.8-1-4.1Z",
  sparkles: "M12 3v4M12 17v4M4 12H2M6.3 6.3 4.9 4.9M22 12h-2M17.7 6.3l1.4-1.4 M12 8l1.5 3.5L17 13l-3.5 1.5L12 18l-1.5-3.5L7 13l3.5-1.5L12 8Z",
  "heart-hand":
    "M8 13V7a2 2 0 1 1 4 0M8 9V6a2 2 0 1 1 4 0v3m0 0V5a2 2 0 1 1 4 0v6 M16 9V8a2 2 0 1 1 4 0v5c0 3.9-2.5 7-7 8-4.5-1-8-4-8-8v-2l2-2",
  wallet: "M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3 M3 7v11a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-4a2 2 0 1 0 0 4h5",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z M8.5 13.5 7 22l5-3 5 3-1.5-8.5",
  "shield-check": "M12 3l8 3.5v5c0 5-3.4 8.6-8 9.5-4.6-.9-8-4.5-8-9.5v-5L12 3Z M9 12l2 2 4-4.5",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3.5 2",
  star: "m12 2.5 3 6.4 7 .8-5.2 4.8L18.2 21 12 17.3 5.8 21 7.2 14.5 2 9.7l7-.8 3-6.4Z",
  "map-pin": "M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  phone: "M5 4h3l1.5 4.5L7.5 10a11 11 0 0 0 6.5 6.5l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2C10.6 21 3 13.4 3 6a2 2 0 0 1 2-2Z",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z M3.5 6.5l8.5 6 8.5-6",
  whatsapp:
    "M20.5 3.5A10.4 10.4 0 0 0 3.9 16.4L2.5 21.5l5.3-1.4A10.4 10.4 0 1 0 20.5 3.5Z M8.3 8c.3-.6.6-.6.9-.6h.7c.2 0 .5 0 .7.5.3.6.9 2 1 2.1.1.2.1.4 0 .6-.2.4-.3.5-.6.8-.2.3-.5.5-.2 1 .3.6 1.2 1.9 2.6 2.6.7.4 1 .3 1.3 0l.7-.8c.2-.3.4-.3.7-.2l1.9.9c.3.1.5.2.5.5 0 .8-.3 1.7-1 2.1-.7.5-1.5.7-2.4.5-1.9-.4-4.1-1.7-5.7-3.5C8 12.6 7 10.7 6.8 9c-.1-.6.1-1.1.5-1.5Z",
  "chevron-down": "m6 9 6 6 6-6",
  menu: "M3 6h18M3 12h18M3 18h18",
  x: "M18 6 6 18M6 6l12 12",
  "arrow-up": "M12 19V5M5 12l7-7 7 7",
  "arrow-right": "M5 12h14M13 5l7 7-7 7",
  quote: "M7 8c-2.2 0-4 1.8-4 4v5h5v-5H5.5c0-1.4 1-2.5 2.5-2.7L7 8Zm10 0c-2.2 0-4 1.8-4 4v5h5v-5h-2.5c0-1.4 1-2.5 2.5-2.7L17 8Z",
  users: "M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M23 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8",
  calendar: "M8 2v4M16 2v4M3 9h18M4 5h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  play: "m9 7 8 5-8 5V7Z",
  check: "M5 12l5 5L20 7",
  "shield-lock": "M12 3l8 3.5v5c0 5-3.4 8.6-8 9.5-4.6-.9-8-4.5-8-9.5v-5L12 3Z M12 11v2 M9.5 11V9.5a2.5 2.5 0 0 1 5 0V11 M9.5 11h5v3.5h-5V11Z",
  file: "M6 2h9l5 5v15H6V2Z M15 2v5h5",
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.8 }) {
  const d = paths[name];
  if (!d) return null;
  const filled = strokeWidth === 0;
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
