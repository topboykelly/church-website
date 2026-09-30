/** Central place for contact info and external URLs — update here as needed. */
export const siteConfig = {
  churchName: "Allos Mega Church International",
  contact: {
    email: "info@allosmegachurch.com",
    phone: "+233 55 686 2564",
    phoneHref: "tel:+233556862564",
  },
  links: {
    register: "https://reg.allosmegachurch.com/",
    liveStream: "https://www.youtube.com/@allosmci/live",
    youtube: "https://youtube.com/@allosmci",
    podbean:
      "https://steveoasare.podbean.com/?utm_campaign=wl_i_share_pp&utm_source=wl_i_share_pbblog&utm_medium=dlink",
    spotify: import.meta.env.VITE_SPOTIFY_URL as string | undefined,
    founderBio: "https://daghewardmills.org/",
    maps: "https://maps.app.goo.gl/NmbLzWzeJ1X9K1D7A",
  },
} as const;
