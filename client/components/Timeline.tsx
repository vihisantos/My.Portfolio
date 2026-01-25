import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, GraduationCap, Briefcase, Award, Star } from 'lucide-react';

type TimelineType = 'education' | 'work' | 'certification' | 'book';

interface TimelineItem {
  type: TimelineType;
  title: string;
  institution: string;
  year: string;
  description: string;
}

export const timelineData: Record<string, TimelineItem[]> = {
  pt: [
    {
      type: 'education',
      title: 'Gestão de T.I - Graduação',
      institution: 'Universidade Anhembi Morumbi',
      year: '2025 - Presente',
      description: 'Foco em gestão ágil, liderança técnica e infraestrutura cloud.',
    },
    {
      type: 'work',
      title: 'Desenvolvedor Full Stack Júnior',
      institution: 'Freelancer',
      year: '2024 - Presente',
      description: 'Desenvolvimento de aplicações web completas para clientes locais.',
    },
    {
      type: 'education',
      title: 'Análise e Desenvolvimento de Sistemas - Graduação',
      institution: 'Universidade Anhembi Morumbi',
      year: '2024 - Presente',
      description: 'Estudando análise de sistemas, desenvolvimento de software e boas práticas de engenharia.',
    },
    {
      type: 'book',
      title: 'Clean Code',
      institution: 'Robert C. Martin',
      year: '2023',
      description: 'Estudo aprofundado sobre boas práticas de codificação e refatoração.',
    },
    {
      type: 'certification',
      title: 'AWS Certified Cloud Practitioner',
      institution: 'Amazon Web Services',
      year: '2023',
      description: 'Fundamentos de computação em nuvem e serviços AWS.',
    },
  ],
  en: [
    {
      type: 'education',
      title: 'IT Management - Undergraduate',
      institution: 'Anhembi Morumbi University',
      year: '2025 - Present',
      description: 'Focus on agile management, technical leadership and cloud infrastructure.',
    },
    {
      type: 'work',
      title: 'Junior Full Stack Developer',
      institution: 'Freelance',
      year: '2024 - Present',
      description: 'Developing full-stack web applications for local and international clients.',
    },
    {
      type: 'education',
      title: 'Analysis and Development of Systems - Undergraduate',
      institution: 'Anhembi Morumbi University',
      year: '2024 - Present',
      description: 'Studying systems analysis, software development and engineering best practices.',
    },
    {
      type: 'book',
      title: 'Clean Code',
      institution: 'Robert C. Martin',
      year: '2023',
      description: 'Deep dive into coding best practices and refactoring techniques.',
    },
    {
      type: 'certification',
      title: 'AWS Certified Cloud Practitioner',
      institution: 'Amazon Web Services',
      year: '2023',
      description: 'Fundamentals of cloud computing and AWS services.',
    },
  ],
};

const getIcon = (type: TimelineType) => {
  switch (type) {
    case 'education':
      return GraduationCap;
    case 'work':
      return Briefcase;
    case 'certification':
      return Award;
    case 'book':
      return BookOpen;
    default:
      return Star;
  }
};

const getColor = (type: TimelineType) => {
  switch (type) {
    case 'education':
      return 'from-blue-500 to-cyan-500';
    case 'work':
      return 'from-purple-500 to-pink-500';
    case 'certification':
      return 'from-amber-500 to-orange-500';
    case 'book':
      return 'from-green-500 to-emerald-500';
    default:
      return 'from-gray-500 to-slate-500';
  }
};

export function Timeline() {
  const { language } = useLanguage();
  const items = timelineData[language];

  return (
    <div className="space-y-10 relative pl-2">
      {/* Global Line - Animated Gradient */}
      <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-accent opacity-20" />
      </div>

      {items.map((item, index) => {
        const Icon = getIcon(item.type);
        const gradient = getColor(item.type);

        return (
          <div key={index} className="relative flex gap-8 items-start group">
            {/* Icon container with Glow */}
            <div className="relative z-10 flex-shrink-0 pt-1">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} p-[1px] shadow-lg shadow-black/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-2xl flex items-center justify-center backdrop-blur-3xl">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-inner`}>
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Card - Glassmorphism */}
            <div className="flex-grow backdrop-blur-md bg-white/80 dark:bg-slate-900/40 p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-primary/5 group-hover:translate-x-2 group-hover:bg-white dark:group-hover:bg-slate-800/60 transition-all duration-500 relative overflow-hidden">
              {/* Subtle background glow for specific type */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-[0.03] blur-3xl group-hover:opacity-[0.08] transition-opacity duration-700`} />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3 relative z-10">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 uppercase tracking-widest whitespace-nowrap">
                  {item.year}
                </span>
              </div>

              <p className="text-sm font-bold text-primary/80 dark:text-primary/70 mb-3 flex items-center gap-2 relative z-10">
                <span className="w-1 h-3 bg-primary rounded-full" />
                {item.type === 'book' ? 'Autor: ' : ''} {item.institution}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10 font-medium">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
