import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * RoutePrefetch - Componente para pré-carregamento de rotas
 * 
 * Este componente observa os links visíveis na viewport e pré-carrega
 * os chunks das rotas correspondentes para melhorar a performance de navegação.
 */

interface RoutePrefetchProps {
  routes: string[];
}

export function RoutePrefetch({ routes }: RoutePrefetchProps) {
  const location = useLocation();

  useEffect(() => {
    // Intersection Observer para detectar links visíveis
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const route = entry.target.getAttribute('data-prefetch');
            if (route) {
              prefetchRoute(route);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: '50px', // Começa a pré-carregar 50px antes de aparecer
        threshold: 0,
      }
    );

    // Adiciona data-prefetch a todos os links de rota
    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#')) {
        link.setAttribute('data-prefetch', href);
        observer.observe(link);
      }
    });

    return () => observer.disconnect();
  }, [location]);

  // Função de pré-carregamento
  const prefetchRoute = async (route: string) => {
    // Verifica se já foi pré-carregado
    if (sessionStorage.getItem(`prefetch-${route}`)) {
      return;
    }

    try {
      // Mapeia rotas para imports dinâmicos
      const routeMap: Record<string, () => Promise<any>> = {
        '/': () => import('@/pages/Index'),
        '/projects': () => import('@/pages/ProjectsPage'),
        '/capybara-holding': () => import('@/pages/CapybaraHolding'),
        '/sponsorship': () => import('@/pages/Sponsorship'),
        '/docs': () => import('@/pages/Documentation'),
        '/ui-library': () => import('@/pages/UILibrary'),
      };

      const importer = routeMap[route] || routeMap['/'];
      if (importer) {
        await importer();
        sessionStorage.setItem(`prefetch-${route}`, 'true');
      }
    } catch (error) {
      // Silently fail - prefetch é opcional
      console.warn(`Failed to prefetch route ${route}:`, error);
    }
  };

  return null;
}