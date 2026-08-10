const pillars = [
  {
    title: "Parking",
    desc: 'Free parking right in front of the building. Look for the "Visitor" signs — those spots are for you.',
  },
  {
    title: "Dress Code",
    desc: "Come as you are. Jeans, suits, whatever feels like you — nobody's watching what you wear.",
  },
  {
    title: "Kids & Youth",
    desc: "Safe, secure check-in with age-tailored programs for every stage, from nursery through high school.",
  },
  {
    title: "Service Length",
    desc: "Services run about 75 minutes — worship, a message, and time to connect afterward.",
  },
];

export default function WhatToExpect() {
  return (
    <section
      className="px-6 md:px-12 py-16 max-w-5xl mx-auto text-center"
      data-nav-theme="light"
    >
      <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
        First time here?
      </p>
      <h2 className="text-2xl md:text-3xl font-medium mb-4 max-w-2xl mx-auto">
        Here's what to expect
      </h2>
      <p className="text-charcoal max-w-xl mx-auto mb-10">
        We know visiting somewhere new can feel like a lot. Here's everything
        you need to know before you walk in.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="bg-green-50 rounded-2xl p-5 flex flex-col"
          >
            <h3 className="text-green-800 font-medium text-lg mb-2">
              {p.title}
            </h3>
            <p className="text-green-800/80 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
