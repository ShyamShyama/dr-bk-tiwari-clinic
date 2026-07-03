import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-12 h-12 rounded-full bg-blue-deep text-white shadow-glass hover:bg-blue-bright transition-colors duration-300"
    >
      <Icon name="arrow-up" className="w-5 h-5" strokeWidth={2.2} />
    </button>
  );
}
