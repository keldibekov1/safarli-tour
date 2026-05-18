import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, X } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TokenPayload = {
  name?: string;
  phone?: string;
};

const getUserFromToken = (): TokenPayload | null => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return null;
  }

  try {
    const [, payload] = token.split(".");
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64)) as TokenPayload;
  } catch {
    localStorage.removeItem("accessToken");
    return null;
  }
};

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<TokenPayload | null>(() => getUserFromToken());
  const { theme, toggleTheme } = useTheme();
  const userName = user?.name || user?.phone || "Profil";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    setIsMenuOpen(false);
    navigate("/");
  };

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
            to="/hot"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
           Qaynoq turlar
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

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 outline-none transition-colors hover:bg-muted">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-accent text-sm font-bold text-accent-foreground">
                      {userInitial}
                    </AvatarFallback>
                  </Avatar>
                  <span className="max-w-32 truncate text-sm font-semibold text-foreground">
                    {userName}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <span className="block truncate">{userName}</span>
                  {user.phone && (
                    <span className="block truncate text-xs font-normal text-muted-foreground">
                      {user.phone}
                    </span>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer text-red-600 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
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
            </>
          )}
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
              {user ? (
                <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-accent text-sm font-bold text-accent-foreground">
                      {userInitial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {userName}
                    </p>
                    {user.phone && (
                      <p className="truncate text-xs text-muted-foreground">
                        {user.phone}
                      </p>
                    )}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="ml-auto gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Log out
                  </Button>
                </div>
              ) : (
                <>
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
                </>
              )}
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
