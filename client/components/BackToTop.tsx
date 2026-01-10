import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      // Show when scrolled > 75%
      setIsVisible(scrolled > 75);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-800/80 dark:bg-slate-700/80 text-white backdrop-blur-sm border border-slate-600/50 shadow-lg hover:bg-primary transition-all duration-300 hover:scale-110 z-30 flex items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      title="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
