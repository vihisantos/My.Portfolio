import { Link } from "react-router-dom";
import { Book } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur-sm opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center overflow-hidden p-1">
                  <img src="/favicon.svg" alt="vitor.dev logo" className="w-full h-full object-contain brightness-0 invert" />
                </div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Vitor.dev
              </span>
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/projects"
              className="text-sm font-medium smooth-transition hover:text-primary"
            >
              {t('nav.projects')}
            </Link>
            <a
              href="#about"
              className="text-sm font-medium smooth-transition hover:text-primary"
            >
              {t('nav.about')}
            </a>
            <a
              href="#capybara"
              className="text-sm font-medium smooth-transition hover:text-primary"
            >
              {t('nav.capybara')}
            </a>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
              <Link
                to="/ui-library"
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="UI Library"
              >
                <Book className="w-5 h-5" />
              </Link>
            </div>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg smooth-transition hover:shadow-lg hover:shadow-primary/30"
            >
              {t('nav.contact')}
            </a>
          </div>

          <div className="sm:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              to="/projects"
              className="text-sm font-medium px-2 py-1 hover:text-primary"
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/ui-library"
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="UI Library"
            >
              <Book className="w-5 h-5" />
            </Link>
            <a
              href="#contact"
              className="text-sm font-medium px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg smooth-transition"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
