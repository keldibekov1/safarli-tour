import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent">
                <MapPin className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Safarli</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-4">
              O'zbekistonning eng ishonchli tur platformasi. Sayohatingizni biz
              bilan rejalashtiring.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Havolalar</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tours"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Barcha turlar
                </Link>
              </li>
              <li>
                <Link
                  to="/agencies"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Tur firmalari
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Firmalar uchun</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/register"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Ro'yxatdan o'tish
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Narxlar
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Ko'p so'raladigan savollar
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Foydalanish shartlari
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Aloqa</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+998 90 039 30 99</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@safarli.uz</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Toshkent, O'zbekiston</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 Safarli. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm"
            >
              Maxfiylik siyosati
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/50 hover:text-primary-foreground text-sm"
            >
              Foydalanish shartlari
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
