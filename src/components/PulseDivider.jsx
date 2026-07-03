// Signature element of the site: a heartbeat / ECG line that recurs as a
// section divider, tying every page back to the clinical theme without
// leaning on stock stethoscope-and-gradient cliches.
export default function PulseDivider({ className = "", tone = "blue" }) {
  const stroke = tone === "white" ? "#EAF4FA" : "#1D88B8";
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="pulse-divider w-full h-10"
        viewBox="0 0 800 40"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 20 H300 L320 6 L340 34 L360 20 H420 L440 4 L460 36 L480 20 H800"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
