import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa6";

const methods = ["Card", "Mobile Money", "Bank Transfer"];
const MOMO_NUMBER = "055 686 2564";
const MOMO_NAME = "Allos Mega Church International";

export default function Giving() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(MOMO_NUMBER.replace(/\s/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available, ignore silently
    }
  };

  return (
    <section
      id="giving"
      data-nav-theme="dark"
      className="bg-green-800 text-cream px-6 md:px-12 py-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold-200 text-xs tracking-wide uppercase mb-3">
          Generosity
        </p>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">
          Give online, safely and simply
        </h2>
        <p className="text-cream/70 max-w-xl mx-auto mb-8">
          Your generosity helps us reach more people, support our community, and
          keep growing as a church family. Every gift, big or small, makes a
          difference.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {methods.map((m) => (
            <span
              key={m}
              className="text-sm border border-cream/30 rounded-full px-4 py-2 text-cream/90"
            >
              {m}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="bg-cream hover:bg-cream/70 transition-colors text-charcoal-dark rounded-full px-6 py-3 text-sm font-medium"
        >
          Give Online
        </button>

        {open && (
          <div className="mt-6 bg-green-500/20 border border-cream/20 rounded-2xl p-6 text-left max-w-md mx-auto">
            <p className="text-gold-200 text-xs tracking-wide uppercase mb-3">
              Mobile Money
            </p>
            <div className="flex items-center justify-between bg-cream/10 rounded-xl px-4 py-3 mb-3">
              <div>
                <p className="text-lg font-medium">{MOMO_NUMBER}</p>
                <p className="text-cream/60 text-xs">{MOMO_NAME}</p>
              </div>
              <button
                onClick={handleCopy}
                aria-label="Copy MoMo number"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center shrink-0"
              >
                {copied ? <FaCheck size={14} /> : <FaCopy size={14} />}
              </button>
            </div>
            {copied && (
              <p className="text-green-200 text-xs mb-3">Number copied!</p>
            )}
            <p className="text-cream/50 text-xs">
              Card and bank transfer details coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
