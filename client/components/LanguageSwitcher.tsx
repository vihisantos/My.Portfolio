import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1.5 rounded text-sm font-medium smooth-transition ${
          language === 'pt'
            ? 'bg-gradient-to-r from-primary to-secondary text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        title="Português"
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded text-sm font-medium smooth-transition ${
          language === 'en'
            ? 'bg-gradient-to-r from-primary to-secondary text-white'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
