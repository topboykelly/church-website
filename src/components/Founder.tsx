import bishopPhoto from "../assets/images/bishopdag.jpg";
export default function Founder() {
  return (
    <section
      className="px-6 md:px-12 py-16 max-w-5xl mx-auto"
      data-nav-theme="light"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden h-96 bg-charcoal-dark flex items-center justify-center">
          <img
            src={bishopPhoto}
            alt="Bishop Dag Heward-Mills"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

        <div className="text-left">
          <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
            Leadership &amp; Vision
          </p>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Meet Our Founder
          </h2>
          <p className="text-charcoal mb-6">
            Bishop Dag Heward-Mills is a prominent Ghanaian healing evangelist,
            megachurch pastor, medical doctor, and prolific author based in
            Accra, Ghana. He is best known as the founder and General Overseer
            of the United Denominations Originating from the Lighthouse Group of
            Churches (UD-OLGC), formerly known as Lighthouse Chapel
            International.
          </p>

          <blockquote className="border-l-2 border-green-500 pl-4 mb-6">
            <p className="text-lg md:text-xl font-medium text-charcoal-dark italic">
              "Guided by the ministry of Bishop Dag, our doors are open to
              anyone who is searching — because we were all searching once too."
            </p>
          </blockquote>

          <p className="text-charcoal text-sm mb-6">
            When he's not at church, you'll find him coaching his kids' soccer
            team or trying (and often failing) to perfect his jollof rice
            recipe.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-green-500 hover:bg-green-800 transition-colors text-cream rounded-full px-6 py-3 text-sm font-medium">
              Read Full Bio
            </button>
            <span className="font-medium text-charcoal-dark italic">
              — Bishop Dag Heward-Mills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
