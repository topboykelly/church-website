import imNewPhoto from "../assets/images/imNew.jpg";
import connectPastorPhoto from "../assets/images/connectPastor.jpg";
import joinGroupPhoto from "../assets/images/joinGroupPhoto.jpg";
const pillars = [
  {
    title: "I'm New",
    desc: "Your journey starts here. Discover what to expect, meet friendly faces, and find your place in our community.",
    link: "Plan a Visit",
    offset: false,
    image: imNewPhoto,
  },
  {
    title: "Connect With A Pastor",
    desc: "Need prayer, guidance, or simply want to know more about our vision? Reach out to our pastoral team today.",
    link: "Get Connected",
    offset: true,
    image: connectPastorPhoto,
  },
  {
    title: "Join a Group",
    desc: "Church is more than a Sunday service—it’s about connection. Find a small group where you can belong, share, and grow.",
    link: "View Groups",
    offset: false,
    image: joinGroupPhoto,
  },
];

export default function Vision() {
  return (
    <section
      id="about"
      data-nav-theme="light"
      className="px-6 md:px-12 py-16 max-w-5xl mx-auto text-center"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto leading-tight">
        A church that believes in Jesus, a{" "}
        <span className="text-gold-500">church that loves God</span> and people
      </h2>
      <p className="text-charcoal max-w-xl mx-auto mb-12 text-sm">
        Transformed by the grace of Jesus, we are a family dedicated to
        authentic worship, vibrant fellowship, and making a lasting impact. Our
        mission is simple: to share God's love and see His Kingdom built in
        hearts across the earth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`relative rounded-2xl overflow-hidden h-80 bg-charcoal-dark flex items-end text-left ${
              p.offset ? "md:-mt-6" : ""
            }`}
          >
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
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
