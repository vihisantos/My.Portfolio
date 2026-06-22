
import { Navigation } from "@/components/Navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
// ProjectFilter removed; using AdvancedProjectFilter
import { AdvancedProjectFilter } from "@/components/AdvancedProjectFilter";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { SectionDivider } from "@/components/SectionDivider";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { useState, useMemo } from "react";
import { getProjects } from "@/data/projects";
import { Link, useNavigate } from "react-router-dom";
import { HolographicCard } from "@/components/HolographicCard";

interface FilterState {
    selectedTechs: string[];
    searchQuery: string;
    projectType?: string;
}

export default function ProjectsPage() {
    const { t } = useLanguage();
    const [filterState, setFilterState] = useState<FilterState>({
        selectedTechs: [],
        searchQuery: '',
        projectType: undefined,
    });
    const navigate = useNavigate();

    const handleProjectClick = (project: any) => {
        navigate(`/project/${project.id}`);
    };

    const isMobile = useIsMobile();
    const [refreshKey, setRefreshKey] = useState(0);
    const { isRefreshing, bind } = usePullToRefresh(() => setRefreshKey(k => k + 1));
    const allProjects = useMemo(() => getProjects(t), [t, refreshKey]);

    // Get unique technologies for filter
    const allTechnologies = useMemo(() => Array.from(
        new Set(allProjects.flatMap((p) => p.technologies))
    ), [allProjects]);

    // Filter projects based on search and tech
    const projects = useMemo(
        () =>
            allProjects.filter((project) => {
                // Tech filter
                const techMatch = filterState.selectedTechs.length === 0 ||
                    filterState.selectedTechs.every((tech) => project.technologies.includes(tech));
                
                // Search filter
                const searchMatch = !filterState.searchQuery ||
                    project.title.toLowerCase().includes(filterState.searchQuery.toLowerCase()) ||
                    project.description.toLowerCase().includes(filterState.searchQuery.toLowerCase()) ||
                    project.technologies.some(t => t.toLowerCase().includes(filterState.searchQuery.toLowerCase()));
                
                return techMatch && searchMatch;
            }),
        [filterState, allProjects]
    );

    return (
        <div {...bind} className="min-h-screen bg-white dark:bg-slate-950">
            <SEO
                title={t('seo.projects.title')}
                description={t('seo.projects.description')}
                keywords={['Projetos', 'Portfolio', 'React Projects', 'Web Development', 'Full Stack', 'Capybara Holding', 'Case Studies']}
                type="website"
            />
            <Navigation />
{isRefreshing && (
  <div className="flex items-center justify-center py-2">
    <svg className="animate-spin h-5 w-5 text-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
    <span className="ml-2 text-sm">Refreshing...</span>
  </div>
)}

            <section className="section-padding bg-slate-50 dark:bg-slate-900/30 pt-32 pb-40 relative">
                <div className="container-custom relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline">
                        <ArrowLeft size={18} /> {t('projectsPage.backHome')}
                    </Link>

                    <div className="mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('projectsPage.title')}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            {t('projectsPage.subtitle')}
                        </p>
                    </div>

                    <AdvancedProjectFilter technologies={allTechnologies} onFilterChange={(filters) => setFilterState(filters)} projects={allProjects} />

                    {isMobile ? (
  <ProjectCarousel projects={projects} onProjectClick={handleProjectClick} />
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {projects.map((project, index) => {
                            return (
                                <ScrollFadeIn key={project.id} delay={index * 50}>
                                    <HolographicCard>
<div
    onClick={() => handleProjectClick(project)}
    onTouchStart={() => { if (navigator.vibrate) navigator.vibrate(10); }}
    className="group bg-white dark:bg-slate-950/50 rounded-2xl overflow-hidden border border-border hover:border-primary/50 smooth-transition cursor-pointer hover:shadow-xl h-full flex flex-col touch-target"
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
                                                    {project.badgeType === 'sale' ? (
                                                        <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-400 shadow-lg shadow-emerald-500/20 uppercase tracking-wider">
                                                            {project.badge}
                                                        </span>
                                                    ) : project.badgeType === 'new' ? (
                                                        <span className="bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-blue-400 shadow-lg shadow-blue-500/20 uppercase tracking-wider">
                                                            {t('uiLibrary.newFreeApp')}
                                                        </span>
                                                    ) : project.badgeType === 'client' ? (
                                                        <span className="bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-amber-400 shadow-lg shadow-amber-500/20 uppercase tracking-wider">
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
                                                        className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary smooth-transition relative z-20 touch-target"
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

                                                <div className="mt-4 opacity-0 group-hover:opacity-100 smooth-transition relative z-20">
                                                    <div
                                                        className="text-sm font-semibold text-primary flex items-center gap-1"
                                                    >
                                                        {t('projects.viewProject')} <ArrowRight size={14} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </HolographicCard>
                                </ScrollFadeIn>
                            );
                        })}
                    </div>
)}
                </div>

                <SectionDivider
                    position="bottom"
                    fill="text-[#f8fafc] dark:text-[#090F20]"
                    type="wave"
                    height="h-24"
                    className="scale-y-[-1]"
                />
            </section>

            <Footer />
        </div>
    );
}
