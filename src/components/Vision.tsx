const pillars = [
  {
    title: "I'm New",
    desc: "We are glad you are here! We look forward to connecting with you.",
    link: "Plan a Visit",
    offset: false,
  },
  {
    title: "Connect With A Pastor",
    desc: "Our team of Pastors are here to answer any of your questions or provide more info about our church.",
    link: "Get Connected",
    offset: true,
  },
  {
    title: "Join a Group",
    desc: "We place a high value on connecting in community with others. Find a group that's right for you.",
    link: "View Groups",
    offset: false,
  },
];

export default function Vision() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-16 max-w-5xl mx-auto text-center"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto leading-tight">
        A church that believes in Jesus, a{" "}
        <span className="text-gold-500">church that loves Good</span> and people
      </h2>
      <p className="text-charcoal max-w-xl mx-auto mb-12 text-sm">
        Overwhelmed by the gift of salvation we have found in Jesus, we have a
        heart for authentic worship, are passionate about the local church, and
        are on mission to see God's kingdom established across the earth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`relative rounded-2xl overflow-hidden h-80 bg-charcoal-dark flex items-end text-left ${
              p.offset ? "md:-mt-6" : ""
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-charcoal text-xs px-4 text-center">
                [ photo placeholder ]
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/90 via-charcoal-dark/20 to-transparent" />
            <div className="relative z-10 p-5">
              <h3 className="text-cream font-bold text-lg mb-1">{p.title}</h3>
              <p className="text-cream/70 text-sm mb-3">{p.desc}</p>
              <a
                href="#"
                className="text-cream text-sm font-medium underline underline-offset-4 hover:text-gold-200 transition-colors"
              >
                {p.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
