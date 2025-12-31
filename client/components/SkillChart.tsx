import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Skill {
  name: string;
  percentage: number;
}

const skillsData = {
  pt: [
    { name: 'React', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Node.js', percentage: 88 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'PostgreSQL', percentage: 85 },
    { name: 'Docker', percentage: 80 },
  ],
  en: [
    { name: 'React', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Node.js', percentage: 88 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'PostgreSQL', percentage: 85 },
    { name: 'Docker', percentage: 80 },
  ],
};

function SkillBar({ skill, percentage }: { skill: string; percentage: number }) {
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPercentage(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-foreground">{skill}</span>
        <span className="text-sm font-bold text-primary">{displayPercentage}%</span>
      </div>
      <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent smooth-transition"
          style={{
            width: `${displayPercentage}%`,
            transition: 'width 1.5s ease-out',
          }}
        />
      </div>
    </div>
  );
}

export function SkillChart() {
  const { language } = useLanguage();
  const skills = skillsData[language];

  return (
    <div className="w-full">
      {skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
      ))}
    </div>
  );
}
