import { useState, useEffect } from 'react';
// No explicit Project type exported – using any

/**
 * Hook que controla a apresentação fullscreen de um conjunto de projetos.
 * Persiste o índice atual em sessionStorage ("presentationIndex").
 */
export function usePresentation(projects: any[]) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // ao abrir tenta restaurar o índice salvo
  const open = (startIdx = 0) => {
  console.log('openPresentation called');
    const saved = sessionStorage.getItem('presentationIndex');
    const i = saved ? Number(saved) : startIdx;
    setIndex(i);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const go = (newIdx: number) => {
    const i = (newIdx + projects.length) % projects.length;
    setIndex(i);
    sessionStorage.setItem('presentationIndex', i.toString());
  };

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // listeners de teclado enquanto aberto
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prev();
          break;
        case 'Escape':
          e.preventDefault();
          close();
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, index, projects.length]);

  return { isOpen, index, open, close, next, prev, project: projects[index] };
}
