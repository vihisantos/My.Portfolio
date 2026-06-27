import { Code2, Palette, Zap, Terminal } from 'lucide-react';
import { SEO } from '@/components/SEO';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { getProjects } from '@/data/projects';


// Map icon strings to components
const iconMap: Record<string, any> = {
  Code2,
  Palette,
  Zap,
  Terminal
};

export function Testimonials() {
  const { language, t } = useLanguage();
  const services = translations[language].servicesList || [];
  const allProjects = getProjects(t);
  const testimonials = allProjects.filter(p => p.clientTestimonial && p.clientPhoto && p.clientName);

  return (
    <section className="py-20 relative overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:to-slate-400">
            {t('testimonials.title')}
          </h2>
        </div>
<SEO
  description={t('testimonials.clientSectionDescription')}
/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service: any, index: number) => {
            const Icon = iconMap[service.icon] || Code2;

            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900/50 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-500 backdrop-blur-sm relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
              >
                {/* Watermark Icon - Animated */}
                <div className="absolute -top-6 -right-6 opacity-[0.03] dark:opacity-[0.02] group-hover:opacity-[0.08] dark:group-hover:opacity-[0.05] transition-all duration-700 text-primary dark:text-white transform group-hover:scale-150 group-hover:rotate-12">
                  <Icon size={200} />
                </div>

                <div className="relative z-10">
                  {/* Icon Box - Floating Effect */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-white shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <Icon size={28} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Client Testimonials */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary font-medium tracking-wider uppercase text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {t('testimonials.clientSectionTitle') || 'Depoimentos'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:to-slate-400">
              {t('testimonials.clientSectionTitle') || 'Depoimentos'}
            </h2>
          </div>
          {testimonials.length > 0 && (
            testimonials.length > 3 ? (
              <Carousel className="w-full" opts={{ loop: false, dragFree: false }}>
                <CarouselContent>
                  {testimonials.map(p => (
                    <CarouselItem key={p.id}>
                      <TestimonialCard project={p} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="touch-target" />
                <CarouselNext className="touch-target" />
              </Carousel>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {testimonials.map(p => (
                  <TestimonialCard key={p.id} project={p} />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ project }: { project: any }) {
  const { clientPhoto, clientName, clientTestimonial } = project;
  if (!clientPhoto || !clientName || !clientTestimonial) return null;

  return (
    <div className="group p-8 rounded-3xl bg-white border border-slate-200 dark:bg-slate-900/50 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-500 backdrop-blur-sm relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2">
      {/* Watermark Icon */}
      <div className="absolute -top-6 -right-6 opacity-[0.03] dark:opacity-[0.02] group-hover:opacity-[0.08] dark:group-hover:opacity-[0.05] transition-all duration-700 text-primary dark:text-white transform group-hover:scale-150 group-hover:rotate-12">
        <Zap size={200} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <img src={clientPhoto} alt={clientName} className="w-20 h-20 rounded-full mb-4 object-cover border border-primary/20" loading="lazy" decoding="async" />
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{clientName}</h4>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-400">{clientTestimonial}</p>
      </div>
      {/* JSON‑LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Review",
        author: {
          "@type": "Person",
          name: clientName,
          image: clientPhoto,
        },
        reviewBody: clientTestimonial,
        itemReviewed: {
          "@type": "Product",
          name: project.title,
        },
      }) }} />
    </div>
  );
}
