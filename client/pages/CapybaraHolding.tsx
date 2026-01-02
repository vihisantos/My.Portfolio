import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Rocket, Shield, Zap, Layout, ShoppingBag, BarChart3, Users } from "lucide-react";
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
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Projeto em Destaque
                            </span>
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
                                        {t('holding.cta')} <Rocket size={20} />
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                        <Zap className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Inovação</h3>
                                        <p className="text-slate-400 text-sm">Sempre na fronteira tecnológica.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                        <Users className="text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Colaboração</h3>
                                        <p className="text-slate-400 text-sm">Ecossistema interconectado.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
