import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { HolographicCard } from "@/components/HolographicCard";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";

/**
 * Mobile‑only carousel that displays projects horizontally.
 * It re‑uses the same markup as the grid cards, but each slide
 * occupies the full width of the viewport for a swipe‑friendly UI.
 */
export function ProjectCarousel({
  projects,
  onProjectClick,
}: {
  projects: any[];
  onProjectClick: (project: any) => void;
}) {
  const navigate = useNavigate();

  // Fallback click handler – the parent passes a proper function.
  const handleClick = (project: any) => {
    if (onProjectClick) {
      onProjectClick(project);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <Carousel className="w-full" opts={{ loop: false, dragFree: false }}>
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id} className="w-full">
            <HolographicCard>
              <div
                onClick={() => handleClick(project)}
                className="group bg-white dark:bg-slate-950/50 rounded-2xl overflow-hidden border border-border hover:border-primary/50 smooth-transition cursor-pointer hover:shadow-xl h-full flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 smooth-transition z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    {project.badgeType === "sale" ? (
                      <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-400 shadow-lg shadow-emerald-500/20 uppercase tracking-wider">
                        {project.badge}
                      </span>
                    ) : project.badgeType === "new" ? (
                      <span className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-blue-400 shadow-lg shadow-blue-500/20 uppercase tracking-wider">
                        {project.badge}
                      </span>
                    ) : (
                      <span className="bg-background/80 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1 rounded-full border border-border">
                        {project.badge || project.technologies[0]}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary smooth-transition line-clamp-1">
                      {project.title}
                    </h3>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary smooth-transition relative z-20"
                    >
                      <Zap size={18} />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1 relative z-20">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto relative z-20">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                      <span
                        key={tech}
                        className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </HolographicCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Navigation arrows – we reuse the same UI as the generic carousel */}
      <CarouselPrevious className="touch-target" />
      <CarouselNext className="touch-target" />
    </Carousel>
  );
}
