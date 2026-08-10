import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Nav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // true = section behind nav is dark, so use light text

  useEffect(() => {
    const PROBE_Y = 50; // sample point roughly mid-way through the nav bar height

    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-nav-theme]");
      let theme = "dark";
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= PROBE_Y && rect.bottom >= PROBE_Y) {
          theme = section.getAttribute("data-nav-theme") || "dark";
          break;
        }
      }
      setIsDark(theme === "dark");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const textColor = isDark ? "text-cream" : "text-charcoal-dark";
  const borderColor = isDark ? "border-cream/40" : "border-charcoal-dark/30";
  const hoverBg = isDark ? "hover:bg-cream/10" : "hover:bg-charcoal-dark/5";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-25 bg-slate-1000/40 backdrop-blur-md transition-colors duration-300 font-medium ${textColor}`}
    >
      <div className="h-full py-3">
        <img
          src={logo}
          alt="Church logo"
          className={`h-full w-auto object-contain transition-all duration-300 ${
            isDark ? "" : "invert"
          }`}
        />
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#about" className="hover:text-coral-500 transition-colors">
          About Us
        </a>
        <a href="#services" className="hover:text-coral-500 transition-colors">
          Services
        </a>
        <a href="#hero" className="hover:text-coral-500 transition-colors">
          Plan a Visit
        </a>
        <div className="relative">
          <button
            onClick={() => setMoreOpen((v) => !v)}
            onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
            className="hover:text-coral-500 transition-colors"
          >
            More
          </button>
          {moreOpen && (
            <div className="absolute top-full mt-2 left-0 bg-charcoal-dark text-cream border border-cream/20 rounded-lg overflow-hidden shadow-lg min-w-40 text-left">
              <a
                href="#ministries"
                className="block px-4 py-2 hover:bg-cream/10 transition-colors"
              >
                Ministries
              </a>
              <a
                href="#events"
                className="block px-4 py-2 hover:bg-cream/10 transition-colors"
              >
                Events
              </a>
              <a
                href="#giving"
                className="block px-4 py-2 hover:bg-cream/10 transition-colors"
              >
                Give Online
              </a>
            </div>
          )}
        </div>
      </div>
      <a
        href="https://reg.allosmegachurch.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={`border ${borderColor} rounded-full px-5 py-2 text-sm ${hoverBg} transition-colors`}
      >
        Register Now
      </a>
    </nav>
  );
}
