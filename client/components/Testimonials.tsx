import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ana Silva',
    role: 'Product Manager',
    company: 'TechCorp',
    text: 'Trabalhar com esse desenvolvedor foi uma experiência incrível. Entregou um projeto completo no prazo e superou nossas expectativas. Altamente recomendado!',
    avatar: '👩‍💼',
  },
  {
    name: 'Carlos Santos',
    role: 'CEO',
    company: 'StartupXYZ',
    text: 'A qualidade do código e a atenção aos detalhes são excepcionais. Transformou completamente nossa plataforma. 10/10!',
    avatar: '👨‍💼',
  },
  {
    name: 'Maria Oliveira',
    role: 'Design Lead',
    company: 'Digital Agency',
    text: 'Perfeito para trabalhar em equipe e muito proativo. Propôs melhorias que nunca pensaríamos. Profissional demais!',
    avatar: '👩‍🎨',
  },
  {
    name: 'João Costa',
    role: 'CTO',
    company: 'E-Commerce Plus',
    text: 'Implementou um sistema de pagamento complexo com perfeição. Documentação excelente e suporte pós-deploy impecável.',
    avatar: '👨‍💻',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const next = () => {
    setDirection('right');
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection('left');
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-card rounded-2xl p-8 sm:p-10 relative">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-accent text-accent"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-lg sm:text-xl text-foreground font-medium mb-8 italic">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 mb-8">
          <div className="text-5xl">{testimonial.avatar}</div>
          <div>
            <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary smooth-transition flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 'right' : 'left');
                  setCurrent(i);
                }}
                className={`h-2 rounded-full smooth-transition ${
                  i === current
                    ? 'bg-gradient-to-r from-primary to-secondary w-6'
                    : 'bg-slate-300 dark:bg-slate-600 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary smooth-transition flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
