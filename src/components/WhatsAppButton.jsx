import { clinic } from "../data/content.js";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello, I would like to book an appointment with Dr. B. K. Tiwari.");
  return (
    <a
      href={`https://wa.me/${clinic.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-glass hover:scale-110 transition-transform duration-300 animate-float"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A10.4 10.4 0 0 0 3.9 16.4L2.5 21.5l5.3-1.4A10.4 10.4 0 1 0 20.5 3.5Zm-8.5 17a8.6 8.6 0 0 1-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.6 8.6 0 1 1 20.1 12 8.6 8.6 0 0 1 12 20.5Zm4.7-6.4c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.5.1a7 7 0 0 1-2.1-1.3 7.8 7.8 0 0 1-1.4-1.8c-.2-.3 0-.4.1-.6l.4-.5.2-.3v-.3c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.1 1.6-.1.5-.2 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3Z" />
      </svg>
    </a>
  );
}
