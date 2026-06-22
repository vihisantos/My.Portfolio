import * as React from 'react';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjects } from '@/data/projects';


/**
 * Card que exibe o depoimento do cliente do projeto "Terapia Quântica".
 * O texto vem do campo `clientTestimonial` (PT) ou `testimonial` (EN) presente
 * nos dados de projetos. Reutiliza o mesmo visual dos demais cards de
 * services no componente `Testimonials`.
 */
export function TerapiaTestimonial() {
  const { t } = useLanguage();
  // Busca todos os projetos com a linguagem correta
  const projects = React.useMemo(() => getProjects(t), [t]);
  const terapia = projects.find((p) => p.id === 18);

  if (!terapia) return null;

  return (
    <div className="group p-8 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900/50 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-500 backdrop-blur-sm relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2">
      {/* Watermark Icon - Animated */}
      <div className="absolute -top-6 -right-6 opacity-[0.03] dark:opacity-[0.02] group-hover:opacity-[0.08] dark:group-hover:opacity-[0.05] transition-all duration-700 text-primary dark:text-white transform group-hover:scale-150 group-hover:rotate-12">
        <Zap size={200} />
      </div>

      <div className="relative z-10">
        {/* Icon Box - Floating Effect */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
          <Zap size={28} strokeWidth={2.5} />
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {terapia.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors leading-relaxed">
          {terapia.clientTestimonial}
        </p>
      </div>
    </div>
  );
}
