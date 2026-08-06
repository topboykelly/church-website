const ministries = [
  { name: "AMCI Saved", color: "coral" },
  { name: "Glorious Generation", color: "gold" },
  { name: "Young Adults", color: "plum" },
  { name: "Men's & Women's Groups", color: "green" },
  { name: "Outreach", color: "coral" },
];

const colorMap: Record<string, string> = {
  coral: "bg-coral-500 text-cream",
  gold: "bg-gold-500 text-charcoal-dark",
  plum: "bg-plum-500 text-cream",
  green: "bg-green-500 text-cream",
};

export default function Ministries() {
  return (
    <section
      id="ministries"
      className="px-6 md:px-12 py-16 max-w-5xl mx-auto text-center"
    >
      <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
        Get Connected
      </p>
      <h2 className="text-2xl md:text-3xl font-medium mb-4 max-w-2xl mx-auto">
        Ministries &amp; small groups
      </h2>
      <p className="text-charcoal max-w-xl mx-auto mb-10">
        Wherever you are in life, there's a place for you to grow, serve, and
        connect with others.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {ministries.map((m) => (
          <div
            key={m.name}
            className={`rounded-2xl p-6 h-36 flex items-end text-left font-medium text-lg ${colorMap[m.color]}`}
          >
            {m.name}
          </div>
        ))}
      </div>

      <a
        href="#"
        className="inline-block bg-charcoal-dark hover:bg-charcoal transition-colors text-cream rounded-full px-6 py-3 text-sm font-medium"
      >
        Find a Small Group
      </a>
    </section>
  );
}
