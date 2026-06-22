import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// No exported Project type – using any for project prop

type Props = {
  isOpen: boolean;
  project: any;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  total: number;
  current: number;
};

/**
 * Modal fullscreen que exibe um único projeto como slide.
 * Utiliza framer‑motion para o efeito de fade/slide e implementa
 * swipe (touch) manualmente.
 */
export default function PresentationCarousel({
  isOpen,
  project,
  onClose,
  onNext,
  onPrev,
  total,
  current,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // toque – swipe simples
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? onPrev() : onNext();
      }
    };
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchend', onTouchEnd);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [onNext, onPrev]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* cabeçalho */}
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={20} />
          </button>
        </div>
        {/* corpo */}
        <div className="relative flex-1 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* legendas sobre a imagem */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-4">
            <p className="line-clamp-3">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* controles */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button>
        {/* contador */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm">
          {current + 1} / {total}
        </div>
      </motion.div>
    </div>
  );
}
