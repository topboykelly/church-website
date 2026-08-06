import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

export default function Sermons() {
  return (
    <section
      id="sermons"
      className="px-6 md:px-12 py-16 max-w-5xl mx-auto text-center"
    >
      <p className="text-coral-500 text-xs tracking-wide uppercase mb-3">
        Latest Message
      </p>
      <h2 className="text-2xl md:text-3xl font-medium mb-4 max-w-2xl mx-auto">
        Catch up on this week's sermon
      </h2>
      <p className="text-charcoal max-w-xl mx-auto mb-10">
        Missed a Sunday, or just want to revisit the message? Watch the latest
        sermon below, or browse the full library.
      </p>

      <a
        href="https://youtube.com/@allosmci?si=I_ScEH10MBncUlP2"
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-2xl overflow-hidden aspect-video max-w-3xl mx-auto bg-charcoal-dark flex items-center justify-center mb-8 group cursor-pointer block"
      >
        <span className="absolute top-4 left-4 text-charcoal text-xs">
          [ embed latest sermon video here once you have the video ID ]
        </span>
        <div className="w-16 h-16 rounded-full bg-cream/90 group-hover:bg-cream transition-colors flex items-center justify-center">
          <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-charcoal-dark ml-1" />
        </div>
      </a>

      <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-charcoal-dark hover:text-coral-500 transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-800">
            <FaSpotify size={16} />
          </span>
          Spotify
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-charcoal-dark hover:text-coral-500 transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-plum-50 flex items-center justify-center text-plum-500">
            <FaApple size={16} />
          </span>
          Apple Podcasts
        </a>
        <a
          href="https://youtube.com/@allosmci?si=I_ScEH10MBncUlP2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-charcoal-dark hover:text-coral-500 transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-coral-50 flex items-center justify-center text-coral-800">
            <FaYoutube size={16} />
          </span>
          YouTube
        </a>
      </div>

      <a
        href="https://youtube.com/@allosmci?si=I_ScEH10MBncUlP2"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-charcoal-dark/20 hover:bg-charcoal-dark/5 transition-colors rounded-full px-6 py-3 text-sm font-medium"
      >
        Browse Sermon Library
      </a>
    </section>
  );
}
