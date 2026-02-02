import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { Book, Layout, MessageSquare, Briefcase, User, Info, DollarSign, Menu, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import logoVitor from "../assets/logo.png";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navigation() {
  const { t } = useLanguage();
  const location = useLocation();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isLinkActive = (path: string) => location.pathname === path;

  /* 
     Function to handle smooth scrolling 
     If we are on the home page, scroll to the element.
     If we are elsewhere, the Link/a tag will navigate us there.
  */
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Only handle hash links
    if (!path.includes('#')) return;

    const [pathname, hash] = path.split('#');
    const targetId = hash;

    // If we are on the home page and the link targets home
    if (location.pathname === '/' && (pathname === '/' || pathname === '')) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMenu(); // Close mobile menu if open
      }
    }
  };

  const closeMenu = () => setIsOpen(false);

  // Configuration of menu items
  const menuItems = [
    { label: t('nav.projects') || "Projects", path: "/projects", type: "link" },
    { label: t('nav.about') || "About", path: "/#about", type: "anchor" },
    { label: t('nav.capybara') || "Capybara Holding", path: "/capybara-holding", type: "link" },
    { label: t('nav.contact') || "Contact", path: "/#contact", type: "anchor" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16 transition-colors duration-300">
      <div className="container-custom h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden shadow-inner border border-white/10">
                <img src={logoVitor} alt="vitor.dev logo" className="w-full h-full object-cover scale-[1.1] group-hover:scale-[1.2] transition-transform" />
              </div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vitor.dev
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-1 md:gap-4">
          {menuItems.map((item) => (
            item.type === 'link' ? (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium smooth-transition px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800",
                  isLinkActive(item.path) ? "text-primary bg-primary/5 dark:bg-primary/10" : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className="text-sm font-medium smooth-transition px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            )
          ))}

          <div className="h-6 w-px bg-border mx-2" />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              to="/ui-library"
              className={cn(
                "p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
                isLinkActive("/ui-library") ? "text-primary bg-primary/10" : "text-muted-foreground"
              )}
              title="UI Library"
              aria-label="UI Library"
            >
              <Book className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="sm:hidden flex items-center gap-2">
          {/* Always visible on mobile */}
          <ThemeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2">
                  <img src={logoVitor} alt="Logo" className="w-8 h-8 rounded-lg" />
                  Vitor.dev
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 mt-8 flex-1">
                {menuItems.map((item) => (
                  item.type === 'link' ? (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center py-3 px-4 rounded-xl text-base font-medium transition-colors",
                        isLinkActive(item.path)
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800/50 text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleScroll(e, item.path)}
                      className="flex items-center py-3 px-4 rounded-xl text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800/50 text-muted-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  )
                ))}

                <div className="h-px bg-border my-2" />

                <Link
                  to="/ui-library"
                  onClick={closeMenu}
                  className={cn(
                    "flex items-center gap-3 py-3 px-4 rounded-xl text-base font-medium transition-colors",
                    isLinkActive("/ui-library")
                      ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800/50 text-muted-foreground"
                  )}
                >
                  <Book className="w-5 h-5" />
                  UI Library
                </Link>
              </div>

              <div className="mt-auto pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium">Language</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
