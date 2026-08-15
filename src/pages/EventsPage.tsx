import { useEffect, useState } from "react";
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

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(() =>
        setError("Couldn't load events right now. Please try again shortly."),
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      data-nav-theme="light"
      className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto min-h-screen text-center"
    >
      <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
        Mark Your Calendar
      </p>
      <h1 className="text-3xl md:text-4xl font-medium mb-4">Upcoming Events</h1>
      <p className="text-charcoal max-w-xl mx-auto mb-12">
        Everything happening at Allos Mega Church International &mdash; jump in
        wherever fits you.
      </p>

      {loading && (
        <p className="text-charcoal/60 text-sm">Loading events&hellip;</p>
      )}

      {error && <p className="text-coral-500 text-sm">{error}</p>}

      {!loading && !error && events.length === 0 && (
        <p className="text-charcoal/60 text-sm">
          No upcoming events right now &mdash; check back soon.
        </p>
      )}

      {!loading && !error && events.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {events.map((e) => (
            <div
              key={e.id}
              className="bg-gold-50 rounded-2xl p-5 flex flex-col"
            >
              <p className="text-gold-500 font-medium text-sm mb-1">
                {formatDateTime(e.startDate)}
              </p>
              <h3 className="text-charcoal-dark font-medium text-lg mb-2">
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
    </section>
  );
}
