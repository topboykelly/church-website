import bishopPhoto from "../assets/images/bishopPhoto.jpg";
export default function Bishop() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto bg-cream-dark/40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 text-left">
          <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
            Our Bishop
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Bishop Steve O. Asare
          </h2>
          <p className="text-charcoal mb-6">
            Bishop Steve O. Asare has shepherded for over eighteen years with a
            heart for contemplative worship, biblical teaching, and
            compassionate community care. Known for his quiet wisdom and
            pastoral presence, he leads with humility — inviting every soul into
            a deeper walk with Christ.
          </p>

          <blockquote className="border-l-2 border-green-500 pl-4 mb-6">
            <p className="text-lg md:text-xl font-medium text-charcoal-dark italic">
              "Faith isn't just what we believe — it's how we choose to live,
              together."
            </p>
          </blockquote>

          <div className="flex items-center gap-4">
            <button className="bg-green-500 hover:bg-green-800 transition-colors text-cream rounded-full px-6 py-3 text-sm font-medium">
              Connect With Bishop Steve O. Asare
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden h-96 bg-charcoal-dark flex items-center justify-center">
          <img
            src={bishopPhoto}
            alt="Bishop Dag Heward-Mills"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
