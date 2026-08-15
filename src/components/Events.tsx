import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchEvents, type EventItem } from "../lib/eventsApi";

function formatDateTime(iso: string) {
  const d = new Date(iso);
  const date = d.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });
  const time = d.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${date} · ${time}`;
}

export default function Events() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents()
      .then((all) => setEvents(all.slice(0, 3))) // preview shows up to 3
      .finally(() => setLoading(false));
  }, []);

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

      {loading && (
        <p className="text-charcoal/60 text-sm mb-8">Loading events&hellip;</p>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
          {events.map((e) => (
            <div
              key={e.id}
              className="bg-gold-50 rounded-2xl p-5 flex flex-col"
            >
              <p className="text-gold-500 font-medium text-sm mb-1">
                {formatDateTime(e.startDate)}
              </p>
              <h3 className="text-charcoal-dark font-medium text-lg mb-3">
                {e.title}
              </h3>
              <p className="text-charcoal text-sm mb-4">{e.description}</p>
              {e.location && (
                <p className="text-charcoal/60 text-xs mt-auto">{e.location}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <Link
        to="/events"
        className="inline-block border border-charcoal-dark/20 hover:bg-charcoal-dark/5 transition-colors rounded-full px-6 py-3 text-sm font-medium"
      >
        View All Events
      </Link>
    </section>
  );
}
