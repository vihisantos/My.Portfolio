import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const numValue = parseInt(value);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(numValue / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [numValue]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useLanguage();

  const stats: Stat[] = [
    { value: '6', label: t('hero.stats.projects'), suffix: '+' },
    { value: '2', label: t('hero.stats.experience'), suffix: '+' },
    { value: '100', label: t('hero.stats.satisfaction'), suffix: '%' },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm"
        >
          <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
