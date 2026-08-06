const methods = ["Card", "Mobile Money", "Bank Transfer"];

export default function Giving() {
  return (
    <section
      id="giving"
      className="bg-green-800 text-cream px-6 md:px-12 py-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold-200 text-xs tracking-wide uppercase mb-3">
          Generosity
        </p>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">
          Give online, safely and simply
        </h2>
        <p className="text-cream/70 max-w-xl mx-auto mb-8">
          Your generosity helps us reach more people, support our community, and
          keep growing as a church family. Every gift, big or small, makes a
          difference.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {methods.map((m) => (
            <span
              key={m}
              className="text-sm border border-cream/30 rounded-full px-4 py-2 text-cream/90"
            >
              {m}
            </span>
          ))}
        </div>

        <button className="bg-cream hover:bg-cream/70 transition-colors text-charcoal-dark rounded-full px-6 py-3 text-sm font-medium">
          Give Online
        </button>
      </div>
    </section>
  );
}
