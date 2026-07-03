import { useState } from "react";
import Icon from "./Icon.jsx";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={`rounded-2xl border transition-colors duration-300 ${
              isOpen ? "border-blue-bright/40 bg-blue-soft/50" : "border-grey-mist bg-white"
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="font-body font-semibold text-ink">{item.question}</span>
              <Icon
                name="chevron-down"
                className={`w-5 h-5 flex-shrink-0 text-blue-deep transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-ink-soft text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
