import { Code2, Palette, Zap, Terminal } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

// Map icon strings to components
const iconMap: Record<string, any> = {
  Code2,
  Palette,
  Zap,
  Terminal
};

export function Testimonials() {
  const { language, t } = useLanguage();
  const services = translations[language].servicesList || [];

  return (
    <section className="py-20 relative overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:to-slate-400">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service: any, index: number) => {
            const Icon = iconMap[service.icon] || Code2;

            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-slate-200 dark:bg-white/5 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden shadow-lg dark:shadow-none"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity text-primary dark:text-white">
                  <Icon size={120} />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
