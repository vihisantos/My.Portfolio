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
    <div className="space-y-8 relative pl-2">
      {/* Global Line */}
      <div className="absolute left-[29px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />

      {items.map((item, index) => {
        const Icon = getIcon(item.type);
        const gradient = getColor(item.type);

        return (
          <div key={index} className="relative flex gap-8 items-start group">
            {/* Icon circle */}
            <div className="relative z-10 flex-shrink-0">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} p-[1px] shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-2xl flex items-center justify-center backdrop-blur-3xl">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white`}>
                    <Icon size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow pt-1.5 backdrop-blur-sm bg-white dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-300 dark:border-slate-700/50 shadow-md hover:shadow-lg dark:hover:bg-slate-800/50 transition-all">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
                  {item.year}
                </span>
              </div>
              <p className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                {item.type === 'book' ? 'Autor: ' : ''} {item.institution}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
