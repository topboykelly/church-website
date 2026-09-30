import heroPhoto from "../assets/images/hero1.jpg";
import { siteConfig } from "../lib/siteConfig";

export default function Hero() {
  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative min-h-screen flex flex-col text-cream"
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

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-6 px-6 md:px-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-4">
          Welcome to Allos Mega Church International.
        </h1>
        <p className="text-cream/80 mb-6 max-w-md">We invite you to join us.</p>
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
            href={siteConfig.links.maps}
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
