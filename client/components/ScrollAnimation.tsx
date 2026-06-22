import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotation?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotation?: number;
  };
  threshold?: number;
  once?: boolean;
}

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  once = false,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element,
      {
        opacity: from.opacity ?? 0,
        y: from.y ?? 50,
        x: from.x ?? 0,
        scale: from.scale ?? 1,
        rotation: from.rotation ?? 0,
      },
      {
        opacity: to.opacity ?? 1,
        y: to.y ?? 0,
        x: to.x ?? 0,
        scale: to.scale ?? 1,
        rotation: to.rotation ?? 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: once ? 'play none none none' : 'play none none reverse',
          scrub: false,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [delay, duration, once, from, to]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}