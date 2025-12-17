import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">Safarli</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Bosh sahifa
          </Link>
          <Link
            to="/tours"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Turlar
          </Link>
          <Link
            to="/agencies"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Firmalar
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Biz haqimizda
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <Link to="/login">
            <Button variant="default" size="sm">
              Kirish
            </Button>
          </Link>

          <Link to="/register">
            <Button variant="accent" size="sm">
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Bosh sahifa
            </Link>
            <Link
              to="/tours"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Turlar
            </Link>
            <Link
              to="/agencies"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Firmalar
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Biz haqimizda
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Link to="/login">
                <Button size="sm" className="justify-start">
                  Kirish
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="accent" size="sm">
                  Ro'yxatdan o'tish
                </Button>
              </Link>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" /> Light mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" /> Dark mode
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
