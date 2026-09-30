import { Link } from "react-router-dom";

export default function StatementOfFaithPage() {
  return (
    <section
      data-nav-theme="light"
      className="pt-40 pb-20 px-6 md:px-12 max-w-3xl mx-auto min-h-screen"
    >
      <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
        What We Believe
      </p>
      <h1 className="text-3xl md:text-4xl font-medium mb-6">Statement of Faith</h1>
      <div className="space-y-4 text-charcoal leading-relaxed">
        <p>
          We believe in one God, eternally existing in three persons: Father,
          Son, and Holy Spirit. We believe the Bible is the inspired and
          authoritative Word of God.
        </p>
        <p>
          We believe in the deity of Jesus Christ, His virgin birth, sinless
          life, atoning death, bodily resurrection, and His return.
        </p>
        <p>
          We believe salvation is by grace through faith in Jesus Christ alone,
          and that the Holy Spirit empowers believers to live godly lives and
          serve the church and the world.
        </p>
        <p>
          We believe the church is the body of Christ, called to worship,
          discipleship, fellowship, and mission until He returns.
        </p>
      </div>
      <Link
        to="/"
        className="inline-block mt-10 border border-charcoal-dark/20 hover:bg-charcoal-dark/5 transition-colors rounded-full px-6 py-3 text-sm font-medium"
      >
        Back to Home
      </Link>
    </section>
  );
}
