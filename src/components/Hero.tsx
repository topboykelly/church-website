import { useState } from "react";
import logo from "../assets/logo.png";
import heroPhoto from "../assets/images/amciCongregation.jpg";
export default function Hero() {
  const [moreOpen, setMoreOpen] = useState(false);
  return (
    <section
      id="hero"
      className="relative min-h-[640px] flex flex-col text-cream"
    >
      {/* Photo placeholder - swap this div for an <img> once you have your photo */}
      <div className="absolute inset-0 bg-charcoal-dark flex items-center justify-center">
        <img
          src={heroPhoto}
          alt="Bishop Dag Heward-Mills"
          className="w-full h-full object-cover object-top"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-charcoal-dark/60" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 h-25">
        <div className="h-full py-3">
          <img
            src={logo}
            alt="Church logo"
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-gold-200 transition-colors">
            About Us
          </a>
          <a href="#services" className="hover:text-gold-200 transition-colors">
            Services
          </a>
          <a href="#hero" className="hover:text-gold-200 transition-colors">
            Plan a Visit
          </a>
          <div className="relative">
            <button
              onClick={() => setMoreOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="hover:text-gold-200 transition-colors"
            >
              More
            </button>
            {moreOpen && (
              <div className="absolute top-full mt-2 left-0 bg-charcoal-dark border border-cream/20 rounded-lg overflow-hidden shadow-lg min-w-40 text-left">
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
          className="border border-cream/40 rounded-full px-5 py-2 text-sm hover:bg-cream/10 transition-colors"
        >
          Register Now
        </a>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-6 px-6 md:px-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-4">
          Welcome to Allos Mega Church International.
        </h1>
        <p className="text-cream/80 mb-6 max-w-md">
          A place to belong, a family to grow with, and a community to call
          home. Whether you are looking for answers or a fresh start, your
          journey continues here.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#services"
            className="bg-cream hover:bg-cream/90 transition-colors text-charcoal-dark rounded-full px-6 py-3 text-sm font-medium"
          >
            Plan Your Visit
          </a>
        </div>
      </div>

      {/* Floating map widget, bottom-right - matches Image 1 */}
      <div className="hidden md:block absolute bottom-6 right-6 z-10 w-40 h-28 rounded-xl overflow-hidden border border-cream/30 shadow-lg">
        <div className="relative w-full h-full">
          <iframe
            title="Church location map"
            src="https://www.google.com/maps?q=5.682377,-0.2484076&z=16&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <a
            href="https://maps.app.goo.gl/NmbLzWzeJ1X9K1D7A"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 left-0 right-0 bg-cream/90 text-green-800 text-[10px] font-medium text-center py-1 hover:bg-cream transition-colors"
          >
            Get directions
          </a>
        </div>
      </div>
    </section>
  );
}
