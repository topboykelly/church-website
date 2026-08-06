export default function ServiceTimes() {
  return (
    <section
      id="services"
      className="bg-green-800 text-cream px-6 md:px-12 py-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-gold-200 text-xs tracking-wide uppercase mb-2">
            Service Times
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-1">
            Sunday 7:30 AM &amp; 9:30 AM
          </h2>
          <p className="text-cream/70 text-sm">
            Can't make it in person? Join online at 7:30 AM &amp; 9:30 AM.
          </p>
        </div>

        <div className="h-px md:h-12 md:w-px w-full bg-cream/20" />

        <div>
          <p className="text-gold-200 text-xs tracking-wide uppercase mb-2">
            Location
          </p>
          <p className="text-lg mb-1">Allos Mega Church International, Accra</p>

          <a
            href="https://maps.app.goo.gl/NmbLzWzeJ1X9K1D7A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-green-200 hover:text-gold-200 transition-colors"
          >
            Get directions →
          </a>
        </div>

        <button className="border border-cream/40 hover:bg-cream/10 transition-colors rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap">
          Watch Live Online
        </button>
      </div>
    </section>
  );
}
