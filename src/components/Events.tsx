const events = [
  {
    title: "Fresh Oil Service",
    date: "Sunday",
    time: "7:30 AM",
    tags: [""],
  },
  {
    title: "Glorious Generation Service",
    date: "Saturday",
    time: "5:00 PM",
    tags: [""],
  },
  {
    title: "Holy Ghost Service",
    date: "Sunday",
    time: "9:30 AM",
    tags: [""],
  },
];

export default function Events() {
  return (
    <section
      id="events"
      data-nav-theme="light"
      className="px-6 md:px-12 py-16 max-w-5xl mx-auto text-center"
    >
      <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
        Mark Your Calendar
      </p>
      <h2 className="text-2xl md:text-3xl font-medium mb-4 max-w-2xl mx-auto">
        Upcoming events
      </h2>
      <p className="text-charcoal max-w-xl mx-auto mb-10">
        A few ways to jump in and get connected this month.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        {events.map((e) => (
          <div
            key={e.title}
            className="bg-green-50 rounded-2xl p-5 flex flex-col"
          >
            <p className="text-gold-500 font-medium text-sm mb-1">
              {e.date} · {e.time}
            </p>
            <h3 className="text-charcoal-dark font-medium text-lg mb-3">
              {e.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {e.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-cream text-charcoal-dark rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="mt-auto text-sm font-medium text-charcoal-dark underline underline-offset-4 hover:text-coral-500 transition-colors"
            >
              RSVP →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
