export interface EventItem {
  id: string;
  title: string;
  description: string;
  startDate: string; // ISO 8601
  location?: string;
}

// TEMPORARY mock data. Replace with real event content, or better,
// wire this up to the real API once it's deployed and has a public,
// no-auth endpoint (see fetchEvents below for the swap-in shape).
const MOCK_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "New Members Class",
    description:
      "Your next step into a deeper community and a stronger faith. Childcare provided.",
    startDate: "2026-08-17T17:00:00",
    location: "Main Auditorium",
  },
  {
    id: "2",
    title: "Community Outreach Day",
    description:
      "Join us as we serve our neighborhood together \u2014 all ages welcome.",
    startDate: "2026-08-24T09:00:00",
    location: "Church Grounds",
  },
  {
    id: "3",
    title: "Worship Night",
    description: "An evening of open worship, prayer, and ministration.",
    startDate: "2026-09-05T18:30:00",
    location: "Main Auditorium",
  },
  {
    id: "4",
    title: "Youth Conference",
    description:
      "A weekend gathering for teens and young adults \u2014 worship, workshops, and connection.",
    startDate: "2026-09-19T10:00:00",
    location: "Main Auditorium",
  },
  {
    id: "5",
    title: "Prayer & Fasting Week Kickoff",
    description:
      "Join us as we begin a dedicated week of corporate prayer and fasting together.",
    startDate: "2026-09-28T18:00:00",
    location: "Prayer Hall",
  },
];

/**
 * Fetches the list of public, upcoming events.
 *
 * TODO once the Events API is deployed with a public (no-auth) endpoint:
 *
 *   const API_BASE = import.meta.env.VITE_EVENTS_API_URL;
 *
 *   export async function fetchEvents(): Promise<EventItem[]> {
 *     const res = await fetch(`${API_BASE}/events/public`);
 *     if (!res.ok) throw new Error("Failed to load events");
 *     return res.json();
 *   }
 *
 * Everything that calls fetchEvents() (EventsPage, Events preview section)
 * already expects a Promise<EventItem[]>, so no other code needs to change.
 */
export async function fetchEvents(): Promise<EventItem[]> {
  // simulated network delay so loading states can be seen/tested
  await new Promise((resolve) => setTimeout(resolve, 400));
  return MOCK_EVENTS;
}
