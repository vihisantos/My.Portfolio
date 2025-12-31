import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Vitor.dev portfolio
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.nav')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/projects" className="hover:text-primary smooth-transition">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-primary smooth-transition">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#capybara" className="hover:text-primary smooth-transition">
                  {t('nav.capybara')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.skills')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('footer.frontend')}</li>
              <li>{t('footer.backend')}</li>
              <li>{t('footer.fullstack')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.connect')}</h4>
            <div className="flex gap-3">
              <a
                href="mailto:contato@vitor.dev"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 smooth-transition flex items-center justify-center text-primary"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/vihisantos/"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 smooth-transition flex items-center justify-center text-primary"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/manoel-vitor-santos-santana-627a05227/"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 smooth-transition flex items-center justify-center text-primary"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/vih_isantos.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 smooth-transition flex items-center justify-center text-primary"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg fillRule="nonzero" height="18px" width="18px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                  <g transform="scale(8,8)">
                    <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} {t('footer.rights')}</p>
            <p>{t('footer.crafted')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
