import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { siteConfig } from "../lib/siteConfig";

type NavLink = { label: string; href: string } | { label: string; to: string };

const navLinks: NavLink[] = [
  { label: "About Us", href: "/#about" },
  { label: "Events", to: "/events" },
  { label: "Plan a Visit", href: "/#hero" },
];

const moreLinks = [
  { label: "Service Times", href: "/#services" },
  { label: "Ministries", href: "/#ministries" },
  { label: "Give Online", href: "/#giving" },
];

export default function Nav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const PROBE_Y = 50;

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const textColor = isDark ? "text-cream" : "text-charcoal-dark";
  const borderColor = isDark ? "border-cream/40" : "border-charcoal-dark/30";
  const hoverBg = isDark ? "hover:bg-cream/10" : "hover:bg-charcoal-dark/5";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-25 bg-slate-1000/40 backdrop-blur-md transition-colors duration-300 font-medium ${textColor}`}
      >
        <Link to="/" className="h-full py-3" onClick={closeMobile}>
          <img
            src={logo}
            alt="Church logo"
            className={`h-full w-auto object-contain transition-all duration-300 ${
              isDark ? "" : "invert"
            }`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) =>
            "to" in link ? (
              <Link
                key={link.label}
                to={link.to}
                className="hover:text-slate-400 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-400 transition-colors"
              >
                {link.label}
              </a>
            ),
          )}
          <div className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="hover:text-slate-400 transition-colors"
            >
              More
            </button>
            {moreOpen && (
              <div className="absolute top-full mt-2 left-0 bg-charcoal-dark text-cream border border-cream/20 rounded-lg overflow-hidden shadow-lg min-w-40 text-left">
                {moreLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 hover:bg-cream/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.register}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-block border ${borderColor} rounded-full px-5 py-2 text-sm ${hoverBg} transition-colors`}
          >
            Register Now
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full ${hoverBg} transition-colors`}
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current my-1 transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-charcoal-dark/50 backdrop-blur-sm"
            onClick={closeMobile}
          />
          <div className="absolute top-25 left-0 right-0 bg-charcoal-dark text-cream border-b border-cream/10 shadow-xl max-h-[calc(100vh-6.25rem)] overflow-y-auto">
            <div className="px-6 py-6 flex flex-col gap-1 text-base">
              {navLinks.map((link) =>
                "to" in link ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={closeMobile}
                    className="py-3 border-b border-cream/10 hover:text-coral-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMobile}
                    className="py-3 border-b border-cream/10 hover:text-coral-500 transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
              <p className="pt-4 pb-1 text-xs uppercase tracking-wide text-cream/50">
                More
              </p>
              {moreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="py-3 border-b border-cream/10 hover:text-coral-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.links.register}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="mt-4 text-center border border-cream/40 rounded-full px-5 py-3 text-sm hover:bg-cream/10 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
