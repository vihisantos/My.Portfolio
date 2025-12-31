import { Navigation } from "@/components/Navigation";
import { Playground } from "@/components/Playground";
import { Footer } from "@/components/Footer";
import { TechStack } from "@/components/TechStack";
import { FunMetrics } from "@/components/FunMetrics";
import { Timeline } from "@/components/Timeline";
import { SkillChart } from "@/components/SkillChart";
import { ProjectFilter } from "@/components/ProjectFilter";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { DownloadCV } from "@/components/DownloadCV";
import { Certificates } from "@/components/Certificates";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Code2, Database, GitBranch, Zap } from "lucide-react";
import ecommerceImg from "@/assets/projects/ecommerce.png";
import taskManagementImg from "@/assets/projects/task-management.png";
import analyticsImg from "@/assets/projects/analytics.png";
import mobileApiImg from "@/assets/projects/mobile-api.png";
import { useState, useMemo } from "react";
import { ProjectModal } from "@/components/ProjectModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SpotifyWidget } from "@/components/SpotifyWidget";
import { SocialHub } from "@/components/SocialHub";
import { Loader } from "@/components/Loader";
import { getProjects } from "@/data/projects";
import { Link } from "react-router-dom";

const profilePhotoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fcc7241044f564726a1519da181bd3eaa%2F5c680c48aefc4fabb891e721833c1d9e?format=webp&width=800";

export default function Index() {
  const { t, language } = useLanguage();
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProjectClick = (project: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSelectedProject(project);
    }, 1500); // 1.5 second delay
  };

  const allProjects = useMemo(() => getProjects(t), [t]);

  // Get unique technologies for filter
  const allTechnologies = useMemo(() => Array.from(
    new Set(allProjects.flatMap((p) => p.technologies))
  ), [allProjects]);

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(
    () =>
      selectedTechs.length === 0
        ? allProjects
        : allProjects.filter((p) =>
          selectedTechs.every((tech) => p.technologies.includes(tech))
        ),
    [selectedTechs, allProjects]
  );

  // Home page only shows 6 projects
  const displayProjects = filteredProjects.slice(0, 6);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {t('hero.badge')}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                {t('hero.title')}{" "}
                <span className="gradient-text">{t('hero.titleGradient')}</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                {t('hero.description')}
              </p>

              <div className="pt-6 pb-2">
                <SocialHub />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold smooth-transition hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                >
                  {t('hero.viewWork')} <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-lg border border-border hover:border-primary text-primary hover:bg-primary/5 font-semibold smooth-transition flex items-center justify-center gap-2"
                >
                  {t('hero.getInTouch')}
                </a>
              </div>

              <FunMetrics />
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-border">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-3 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full"
                      style={{
                        width: `${100 - i * 15}%`,
                      }}
                    ></div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/20"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {t('about.badge')}
                </span>
                <h2 className="text-4xl font-bold mt-2">
                  {t('about.title')}{" "}
                  <span className="gradient-text">{t('about.titleGradient')}</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground">
                {t('about.description')}
              </p>

              <div>
                <h3 className="font-bold text-lg mb-6">{t('about.skillsTitle')}</h3>
                <SkillChart />
              </div>

              <div>
                <h3 className="font-bold text-lg mb-6">Tech Stack</h3>
                <TechStack />
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-lg mb-6">{t('about.educationTitle')}</h3>
                <Timeline />
              </div>



              <div className="pt-4 flex flex-wrap gap-4">
                <Certificates />
                <DownloadCV />
              </div>
            </div>

            <div className="space-y-8">
              {/* Profile Photo */}
              <div className="relative mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-border overflow-hidden">
                  <img
                    src={profilePhotoUrl}
                    alt="Profile"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl space-y-2">
                  <Code2 className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold">{t('about.frontend')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('about.frontendDesc')}
                  </p>
                </div>

                <div className="glass-card p-6 rounded-2xl space-y-2">
                  <Database className="w-8 h-8 text-secondary" />
                  <h3 className="font-semibold">{t('about.backend')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('about.backendDesc')}
                  </p>
                </div>

                <div className="glass-card p-6 rounded-2xl space-y-2">
                  <GitBranch className="w-8 h-8 text-accent" />
                  <h3 className="font-semibold">{t('about.databases')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('about.databasesDesc')}
                  </p>
                </div>

                <div className="glass-card p-6 rounded-2xl space-y-2">
                  <Zap className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold">{t('about.devops')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('about.devopsDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('projects.badge')}
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>

          <ProjectFilter technologies={allTechnologies} onFilterChange={setSelectedTechs} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project, index) => {
              return (
                <ScrollFadeIn key={project.id} delay={index * 100}>
                  <div
                    className="glass-card rounded-2xl p-6 group hover:shadow-lg smooth-transition hover:-translate-y-1 border border-white/50 dark:border-slate-700/50 overflow-hidden h-full flex flex-col cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="mb-6 rounded-lg overflow-hidden aspect-video relative group-hover:scale-105 smooth-transition">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 smooth-transition" />
                    </div>

                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 smooth-transition">
                      <div
                        className="text-sm font-semibold text-primary flex items-center gap-1"
                      >
                        {t('projects.viewProject')} <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white dark:bg-slate-900 border border-border hover:border-primary text-primary font-semibold smooth-transition hover:shadow-lg"
            >
              {t('projects.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Capybara Holding Section */}
      <section id="capybara" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-12 border border-secondary/30 dark:border-secondary/20 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text">🐹</div>
                  <p className="mt-4 text-lg font-semibold">Capybara Holding</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {t('capybara.badge')}
                </span>
                <h2 className="text-4xl font-bold mt-2">
                  {t('capybara.title')} <span className="gradient-text">{t('capybara.titleGradient')}</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground">
                {t('capybara.description')}
              </p>

              <div className="space-y-4">
                {[t('capybara.item1'), t('capybara.item2'), t('capybara.item3'), t('capybara.item4')].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-primary text-white font-semibold smooth-transition hover:shadow-lg hover:shadow-secondary/30"
              >
                {t('capybara.learnMore')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('playground.badge')}
            </span>
            <h2 className="text-3xl font-bold mt-2">
              {t('playground.title')}
            </h2>
          </div>
          <Playground />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('testimonials.badge')}
            </span>
            <h2 className="text-4xl font-bold mt-2">
              {t('testimonials.title')}
            </h2>
          </div>

          <ScrollFadeIn>
            <Testimonials />
          </ScrollFadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                {t('contact.title')}{" "}
                <span className="gradient-text">{t('contact.titleGradient')}</span>
              </h2>

              <p className="text-lg text-muted-foreground">
                {t('contact.description')}
              </p>
            </div>

            <ScrollFadeIn>
              <ContactForm />
            </ScrollFadeIn>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                {t('contact.available')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <SpotifyWidget />
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      {isLoading && <Loader />}
    </div>
  );
}
