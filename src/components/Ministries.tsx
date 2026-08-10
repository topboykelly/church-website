const ministries = [
  { name: "AMCI Saved", color: "green" },
  { name: "Glorious Generation", color: "green" },
  { name: "Young Adults", color: "green" },
  { name: "Men's & Women's Groups", color: "green" },
  { name: "Outreach", color: "green" },
];

const colorMap: Record<string, string> = {
  green: "bg-green-800 text-cream",
};

export default function Ministries() {
  return (
    <section
      id="ministries"
      data-nav-theme="light"
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
