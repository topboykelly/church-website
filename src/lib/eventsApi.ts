export interface EventItem {
  id: string;
  title: string;
  description: string;
  startDate: string; // ISO 8601
  location?: string;
}

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

function normalizeEvent(raw: Record<string, unknown>): EventItem | null {
  const id = String(raw.id ?? raw._id ?? "");
  const title = String(raw.title ?? raw.name ?? "");
  const description = String(raw.description ?? raw.summary ?? "");
  const startDate = String(
    raw.startDate ?? raw.start_date ?? raw.startsAt ?? raw.date ?? "",
  );
  const location =
    raw.location != null ? String(raw.location) : undefined;

  if (!id || !title || !startDate) return null;

  return { id, title, description, startDate, location };
}

function normalizeEvents(data: unknown): EventItem[] {
  const list = Array.isArray(data)
    ? data
    : data &&
        typeof data === "object" &&
        Array.isArray((data as { events?: unknown[] }).events)
      ? (data as { events: unknown[] }).events
      : [];

  return list
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .map(normalizeEvent)
    .filter((event): event is EventItem => event !== null);
}

export async function fetchEvents(): Promise<EventItem[]> {
  const apiBase = import.meta.env.VITE_EVENTS_API_URL?.replace(/\/$/, "");

  if (!apiBase) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return MOCK_EVENTS;
  }

  const res = await fetch(`${apiBase}/events/public`);
  if (!res.ok) throw new Error("Failed to load events");
  return normalizeEvents(await res.json());
}
