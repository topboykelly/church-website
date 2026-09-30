import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPodcast,
} from "react-icons/fa6";
import { siteConfig } from "../lib/siteConfig";

export default function Footer() {
  const { contact, links, churchName } = siteConfig;

  return (
    <footer
      id="footer"
      data-nav-theme="dark"
      className="bg-charcoal-dark text-cream px-6 md:px-12 py-12"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <img
            src={logo}
            alt="Church logo"
            width={32}
            height={32}
            className="mb-4 object-contain"
            style={{ height: "62px", width: "60px" }}
          />

          <p className="text-cream/70 text-sm mb-4">
            A place to belong, believe, and become who you were made to be.
          </p>
          <div className="flex gap-3">
            <a
              href="https://web.facebook.com/p/Allos-Mega-Church-International-61566497533856/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/allosmegachurchintl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@allos.mega.church"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-8 h-8 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center"
            >
              <FaTiktok size={16} />
            </a>
            <a
              href={links.podbean}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Podbean"
              className="w-8 h-8 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center"
            >
              <FaPodcast size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-gold-200 text-xs tracking-wide uppercase mb-4">
            Contact &amp; Legal
          </h3>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-cream transition-colors"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.phoneHref}
                className="hover:text-cream transition-colors"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <Link
                to="/statement-of-faith"
                className="hover:text-cream transition-colors"
              >
                Statement of Faith
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-cream transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-cream/10 mt-10 pt-6 text-center text-cream/40 text-xs">
        © {new Date().getFullYear()} {churchName}. All rights reserved.
      </div>
    </footer>
  );
}
