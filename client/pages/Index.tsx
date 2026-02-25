import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { SectionDivider } from "@/components/SectionDivider";
import { Playground } from "@/components/Playground";
import { Footer } from "@/components/Footer";
import { TechStack } from "@/components/TechStack";
// import { technologies } from "@/components/TechStack";
import { FunMetrics } from "@/components/FunMetrics";
import { Timeline } from "@/components/Timeline";
// import { SkillChart } from "@/components/SkillChart";
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
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SpotifyWidget } from "@/components/SpotifyWidget";
import { SocialHub } from "@/components/SocialHub";
// import { Loader } from "@/components/Loader";
import { getProjects } from "@/data/projects";
import { Link, useNavigate, useLocation } from "react-router-dom";

const profilePhotoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fcc7241044f564726a1519da181bd3eaa%2F5c680c48aefc4fabb891e721833c1d9e?format=webp&width=800";

export default function Index() {
  const { t, language } = useLanguage();
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to hash on mount or hash change
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [location.hash]);

  const handleProjectClick = (project: any) => {
    navigate(`/project/${project.id}`);
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
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden">
      <SEO
        title={t('seo.home.title')}
        description={t('seo.home.description')}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding pb-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 relative">
        <div className="container-custom relative z-10">
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
                  className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold smooth-transition hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 overflow-hidden hover-lift"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t('hero.viewWork')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-shine" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-lg border border-primary/20 bg-primary/5 dark:bg-white/5 backdrop-blur-sm hover:border-primary text-primary hover:bg-primary/10 font-semibold smooth-transition flex items-center justify-center gap-2 hover-lift"
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

        {/* Wave Divider to blend into About Section */}
        <SectionDivider position="bottom" fill="text-white dark:text-slate-950" type="wave" height="h-24" className="scale-y-[-1]" />
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          {/* Bio Section - Full Width */}
          <div className="mb-12 space-y-8 max-w-4xl">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* 
              <div>
                <h3 className="font-bold text-lg mb-6">{t('about.skillsTitle')}</h3>
                <SkillChart />
              </div>
              */}

              <div>
                <h3 className="font-bold text-lg mb-6">Minhas Competências</h3>

                {/* Skills Cards - Moved from Right Column */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass-card p-6 rounded-2xl space-y-2 hover:border-primary/50 transition-colors group">
                    <Code2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold">{t('about.frontend')}</h3>
                    <p className="text-sm text-muted-foreground min-h-[40px]">
                      {t('about.frontendDesc')}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl space-y-2 hover:border-secondary/50 transition-colors group">
                    <Database className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold">{t('about.backend')}</h3>
                    <p className="text-sm text-muted-foreground min-h-[40px]">
                      {t('about.backendDesc')}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl space-y-2 hover:border-accent/50 transition-colors group">
                    <GitBranch className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold">{t('about.databases')}</h3>
                    <p className="text-sm text-muted-foreground min-h-[40px]">
                      {t('about.databasesDesc')}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl space-y-2 hover:border-primary/50 transition-colors group">
                    <Zap className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold">{t('about.devops')}</h3>
                    <p className="text-sm text-muted-foreground min-h-[40px]">
                      {t('about.devopsDesc')}
                    </p>
                  </div>
                </div>

                {/* Tech Stack - Categorized Icons */}
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900 pb-32 relative">
        <div className="container-custom relative z-10">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t('projects.badge')}
            </span>
            <h2 className="text-4xl font-bold mt-2">
              {t('projects.title')}{" "}
              <span className="gradient-text">{t('projects.titleGradient')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              {t('projects.description')}
            </p>
          </div>

          <ProjectFilter technologies={allTechnologies} onFilterChange={setSelectedTechs} />
          <div className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project, index) => {
              // Calculate delay for stagger effect
              const delay = index * 100;

              return (
                <ScrollFadeIn key={project.id} delay={delay}>
                  <div
                    onClick={() => handleProjectClick(project)}
                    className="group bg-white dark:bg-slate-950/50 rounded-2xl overflow-hidden border border-border hover:border-primary/50 smooth-transition cursor-pointer hover:shadow-xl hover:-translate-y-2 h-full flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 smooth-transition z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
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
                          className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary smooth-transition"
                        >
                          <Zap size={18} />
                        </a>
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.slice(0, 3).map((tech: string) => (
                          <span
                            key={tech}
                            className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-md font-medium"
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
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white dark:bg-slate-950 border border-border hover:border-primary text-primary font-semibold smooth-transition hover:shadow-lg"
            >
              {t('projects.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Curve Divider to blend into Capybara Section */}
        <SectionDivider position="bottom" fill="text-white dark:text-slate-950" type="curve" height="h-24" className="scale-y-[-1]" />
      </section>

      {/* Capybara Holding Section */}
      <section id="capybara" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-12 border border-secondary/30 dark:border-secondary/20 flex items-center justify-center min-h-96">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-md bg-white/5 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border border-primary/20 p-6 shadow-2xl relative overflow-hidden group"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-3xl -z-10 group-hover:bg-secondary/20 transition-colors duration-500"></div>

                  {/* Header Mockup */}
                  <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/50 hover:bg-red-400 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400/50 hover:bg-amber-400 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400/50 hover:bg-emerald-400 transition-colors cursor-pointer"></div>
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      HOLDING COMMAND CENTER
                    </div>
                  </div>

                  {/* Live Terminal Log */}
                  <div className="mb-6 h-12 bg-black/5 dark:bg-black/20 rounded-lg p-3 border border-border/50 font-mono text-[10px] sm:text-xs text-muted-foreground flex items-center overflow-hidden">
                    <span className="text-secondary mr-2">{">"}</span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      [LIVE] Analyzing ecosystem metrics...
                    </motion.div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-slate-800/80 p-3 rounded-xl border border-border/50 group-hover:border-primary/30 transition-all cursor-default"
                    >
                      <p className="text-[10px] text-muted-foreground uppercase">{t('capybara.activeProjects') || 'Projetos Ativos'}</p>
                      <div className="flex items-baseline gap-1">
                        <motion.p
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                          className="text-2xl font-bold gradient-text"
                        >
                          08
                        </motion.p>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-slate-800/80 p-3 rounded-xl border border-border/50 group-hover:border-secondary/30 transition-all cursor-default"
                    >
                      <p className="text-[10px] text-muted-foreground uppercase">{t('capybara.incubating') || 'Em Incubação'}</p>
                      <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                        className="text-2xl font-bold text-slate-400"
                      >
                        02
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* Status Bar */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Ecosystem Health</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                        className="text-emerald-500 font-medium"
                      >
                        99.9%
                      </motion.span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "99.9%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 skew-x-[-20deg] animate-[shimmer_2s_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Badge */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center gap-3 bg-primary/5 p-2 rounded-lg border border-primary/10 cursor-pointer hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shadow-inner">V3</div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-primary leading-tight">VITRINE 360</p>
                      <p className="text-[9px] text-muted-foreground leading-tight">Live Operation</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                      <span className="text-[8px] font-bold text-emerald-500">LIVE</span>
                    </div>
                  </motion.div>
                </motion.div>
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

              <Link
                to="/capybara-holding"
                className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-primary text-white font-semibold smooth-transition hover:shadow-lg hover:shadow-secondary/30"
              >
                {t('capybara.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section className="section-padding overflow-hidden pb-32 relative">
        <div className="container-custom relative z-10">
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

        {/* Wave Divider to blend into Testimonials Section */}
        <SectionDivider position="bottom" fill="text-slate-50 dark:text-slate-900" type="wave" height="h-24" className="scale-y-[-1]" />
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 dark:bg-slate-900">
        <ScrollFadeIn>
          <Testimonials />
        </ScrollFadeIn>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding pt-32 pb-40 bg-gradient-to-br from-primary/5 to-secondary/5 relative">
        {/* Wave Divider blending from Testimonials */}
        <SectionDivider position="top" fill="text-slate-50 dark:text-slate-900" type="wave" height="h-24" className="scale-y-[-1]" />

        <div className="container-custom relative z-10">
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

        {/* Wave Divider to blend into Footer */}
        <SectionDivider
          position="bottom"
          fill="text-[#f8fafc] dark:text-[#090F20]"
          type="wave"
          height="h-24"
          className="scale-y-[-1]"
        />
      </section>

      <Footer />
      <FloatingWhatsApp />
      <SpotifyWidget />
    </div>
  );
}
