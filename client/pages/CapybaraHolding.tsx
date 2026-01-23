import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Rocket, Shield, Zap, Layout, ShoppingBag, BarChart3, Users, Clapperboard, Palette, Share2, Code2, GraduationCap, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import { translations } from "@/lib/i18n";

export default function CapybaraHolding() {
    const { t, language } = useLanguage();
    const holdingTranslations = translations[language].holding;

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
                <div className="container-custom">
                    <ScrollFadeIn>
                        <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline">
                            <ArrowLeft size={18} /> {t('projectsPage.backHome')}
                        </Link>

                        <div className="max-w-3xl">
                            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                                {t('holding.title')} <span className="gradient-text">{t('holding.subtitle')}</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {t('holding.description')}
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn>
                            <div className="space-y-6">
                                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary">
                                    <Rocket size={32} />
                                </div>
                                <h2 className="text-4xl font-bold">{t('holding.mission.title')}</h2>
                                <p className="text-lg text-muted-foreground">
                                    {t('holding.mission.text')}
                                </p>
                            </div>
                        </ScrollFadeIn>
                        <ScrollFadeIn delay={200}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                                <div className="relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-border shadow-xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-border">
                                            <Shield className="text-primary mb-4" size={24} />
                                            <h3 className="font-bold mb-1">Segurança</h3>
                                            <p className="text-xs text-muted-foreground">Arquitetura robusta</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-border">
                                            <Zap className="text-secondary mb-4" size={24} />
                                            <h3 className="font-bold mb-1">Performance</h3>
                                            <p className="text-xs text-muted-foreground">Alta velocidade</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-border">
                                            <Layout className="text-accent mb-4" size={24} />
                                            <h3 className="font-bold mb-1">Design</h3>
                                            <p className="text-xs text-muted-foreground">UX focada no usuário</p>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-border">
                                            <Users className="text-primary mb-4" size={24} />
                                            <h3 className="font-bold mb-1">Impacto</h3>
                                            <p className="text-xs text-muted-foreground">Foco no cliente</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* Vitrine360 Spotlight */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <ScrollFadeIn>
                            <h2 className="text-4xl font-bold mt-2">{t('holding.vitrine360.title')}</h2>
                            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                                {t('holding.vitrine360.tagline')}
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn>
                            <div className="glass-card p-8 rounded-3xl border-primary/20 bg-white/50 dark:bg-slate-900/50">
                                <p className="text-lg mb-8 text-muted-foreground">
                                    {t('holding.vitrine360.description')}
                                </p>
                                <div className="space-y-4">
                                    {holdingTranslations.vitrine360.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <ShoppingBag size={14} />
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <Link
                                        to="/#contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 smooth-transition"
                                    >
                                        {t('projects.viewProject')} <ArrowLeft className="rotate-180" size={20} />
                                    </Link>
                                </div>
                            </div>
                        </ScrollFadeIn>

                        <ScrollFadeIn delay={200}>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-border shadow-2xl">
                                    <div className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-border flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        <div className="ml-4 h-6 w-64 rounded bg-slate-200 dark:bg-slate-700"></div>
                                    </div>
                                    <div className="aspect-[16/10] bg-slate-50 dark:bg-slate-950 p-6 flex flex-col gap-4">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-24 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                                            <div className="h-24 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                                            <div className="h-24 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                                        </div>
                                        <div className="h-48 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse flex items-center justify-center">
                                            <BarChart3 size={48} className="text-slate-300 dark:text-slate-700" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-32 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                                            <div className="h-32 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* ColorFlicks Section */}
            <section className="section-padding bg-white dark:bg-slate-950">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <ScrollFadeIn>
                            <h2 className="text-4xl font-bold mt-2">{t('holding.colorflicks.title')}</h2>
                            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                                {t('holding.colorflicks.tagline')}
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn>
                            <div className="relative group order-2 lg:order-1">
                                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[4/5] max-h-[500px] flex items-center justify-center p-8 mx-auto w-full max-w-md">
                                    {/* Abstract Poster Mockup */}
                                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-xl relative overflow-hidden flex flex-col">
                                        <div className="h-3/4 bg-slate-200 dark:bg-slate-700 w-full relative">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
                                            <Clapperboard className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-600 opacity-50" size={64} />
                                        </div>
                                        <div className="h-1/4 p-4 flex flex-col gap-2">
                                            <div className="h-4 w-3/4 bg-slate-300 dark:bg-slate-600 rounded animate-pulse"></div>
                                            <div className="h-3 w-1/2 bg-slate-300 dark:bg-slate-600 rounded animate-pulse"></div>
                                            <div className="flex gap-2 mt-auto">
                                                <div className="w-6 h-6 rounded-full bg-red-400"></div>
                                                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                                                <div className="w-6 h-6 rounded-full bg-green-400"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>

                        <ScrollFadeIn delay={200}>
                            <div className="glass-card p-8 rounded-3xl border-secondary/20 bg-slate-50/50 dark:bg-slate-900/50 order-1 lg:order-2">
                                <p className="text-lg mb-8 text-muted-foreground">
                                    {t('holding.colorflicks.description')}
                                </p>
                                <div className="space-y-4">
                                    {holdingTranslations.colorflicks.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                                <Palette size={14} />
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <a
                                        href="https://vihisantos.github.io/ColorFlicks/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-bold hover:shadow-lg hover:shadow-secondary/30 smooth-transition"
                                    >
                                        {t('projects.viewProject')} <ArrowLeft className="rotate-180" size={20} />
                                    </a>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* CapyFlow Academy Section */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <ScrollFadeIn>
                            <h2 className="text-4xl font-bold mt-2">{t('holding.capyflow.title')}</h2>
                            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                                {t('holding.capyflow.tagline')}
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn>
                            <div className="glass-card p-8 rounded-3xl border-primary/20 bg-white/50 dark:bg-slate-900/50">
                                <p className="text-lg mb-8 text-muted-foreground">
                                    {t('holding.capyflow.description')}
                                </p>
                                <div className="space-y-4">
                                    {holdingTranslations.capyflow.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <GraduationCap size={14} />
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <Link
                                        to="/projects"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 smooth-transition"
                                    >
                                        {t('projects.viewProject')} <ArrowLeft className="rotate-180" size={20} />
                                    </Link>
                                </div>
                            </div>
                        </ScrollFadeIn>

                        <ScrollFadeIn delay={200}>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-border shadow-2xl aspect-[4/5] max-h-[500px] flex items-center justify-center p-8 mx-auto w-full max-w-md">
                                    {/* Abstract Code Editor Mockup */}
                                    <div className="w-full h-full bg-slate-950 rounded-xl relative overflow-hidden flex flex-col border border-slate-800">
                                        <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="flex-1 p-4 relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5"></div>
                                            <Code2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700 dark:text-slate-800 opacity-50" size={64} />

                                            <div className="space-y-2">
                                                <div className="h-2 w-1/3 bg-slate-800 rounded animate-pulse"></div>
                                                <div className="h-2 w-1/2 bg-slate-800 rounded animate-pulse delay-75"></div>
                                                <div className="h-2 w-2/3 bg-slate-800 rounded animate-pulse delay-150"></div>
                                                <div className="h-2 w-1/4 bg-slate-800 rounded animate-pulse delay-200"></div>
                                            </div>

                                            <div className="space-y-2 mt-8 ml-4">
                                                <div className="h-2 w-1/2 bg-slate-800 rounded animate-pulse"></div>
                                                <div className="h-2 w-1/3 bg-slate-800 rounded animate-pulse delay-75"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* Ecosystem Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-8">{t('holding.ecosystem.title')}</h2>
                            <p className="text-xl text-slate-300 leading-relaxed mb-12">
                                {t('holding.ecosystem.description')}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
                                        <ShoppingBag />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Comércio</h3>
                                    <p className="text-slate-400 text-sm">Infraestrutura SaaS robusta para vendas.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 text-secondary">
                                        <Palette />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Criatividade</h3>
                                    <p className="text-slate-400 text-sm">Inteligência visual e design.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                                        <GraduationCap />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Educação</h3>
                                    <p className="text-slate-400 text-sm">Formação de talentos tech.</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-12">
                                <Link
                                    to="/sponsorship"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:shadow-lg hover:bg-slate-100 transition duration-300"
                                >
                                    {t('holding.sponsorship.hero.cta') || "Seja um Patrocinador"} <ArrowLeft className="rotate-180" size={20} />
                                </Link>
                                <Link
                                    to="/#contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition duration-300"
                                >
                                    {t('holding.cta')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
