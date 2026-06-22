import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  duration?: number;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
}

/**
 * useScrollAnimation - Hook para animações GSAP com ScrollTrigger
 * 
 * @param options - Configurações da animação
 * @returns ref do elemento a ser animado
 */
export function useScrollAnimation<T extends HTMLElement>({
  trigger,
  start = 'top 80%',
  end = 'bottom 20%',
  scrub = false,
  duration = 1,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
}: UseScrollAnimationOptions = {}) {
  const elementRef = useRef<T>(null);
  const animationRef = useRef<gsap.core.Animation | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create animation
    animationRef.current = gsap.fromTo(
      element,
      from,
      {
        ...to,
        duration,
        scrollTrigger: {
          trigger: trigger || element,
          start,
          end,
          scrub,
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [trigger, start, end, scrub, duration, JSON.stringify(from), JSON.stringify(to)]);

  return elementRef;
}

/**
 * useParallax - Hook para efeito parallax
 */
export function useParallax<T extends HTMLElement>(speed: number = 0.5) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      y: (i, target) => -ScrollTrigger.maxScroll(window) * speed * (target.offsetTop / ScrollTrigger.maxScroll(window)),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return elementRef;
}

/**
 * useStaggerAnimation - Hook para animações em cascata
 */
export function useStaggerAnimation<T extends HTMLElement>(
  selector: string,
  staggerAmount: number = 0.1
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: staggerAmount,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [selector, staggerAmount]);

  return containerRef;
}