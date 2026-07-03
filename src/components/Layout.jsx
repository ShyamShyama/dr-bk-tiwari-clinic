import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import BackToTop from "./BackToTop.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip link for keyboard/screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-blue-deep focus:px-4 focus:py-2 focus:rounded-full focus:shadow-glass"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
