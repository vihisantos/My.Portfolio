import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { Book, Layout, MessageSquare, Briefcase, User, Info, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import logoVitor from "../assets/logo.png";

export function Navigation() {
  const { t } = useLanguage();
  const location = useLocation();
  const { theme } = useTheme();

  const isLinkActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16 transition-colors duration-300">
      <div className="container-custom h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden shadow-inner border border-white/10">
                <img src={logoVitor} alt="vitor.dev logo" className="w-full h-full object-contain scale-[1.1] group-hover:scale-[1.2] transition-transform" />
              </div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vitor.dev
            </span>
          </Link>
        </div>

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
          <Link
            to="/capybara-holding"
            className="text-sm font-medium smooth-transition hover:text-primary"
          >
            {t('nav.capybara')}
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              to="/ui-library"
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="UI Library"
              aria-label="UI Library"
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
    </nav>
  );
}
