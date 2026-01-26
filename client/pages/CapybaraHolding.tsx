import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Rocket, Shield, Zap, Layout, ShoppingBag, BarChart3, Users, Clapperboard, Palette, Share2, Code2, GraduationCap, Laptop, Youtube, Download, Stars } from "lucide-react";
import { Link } from "react-router-dom";
import { translations } from "@/lib/i18n";

export default function CapybaraHolding() {
    const { t, language } = useLanguage();
    const holdingTranslations = translations[language].holding;

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden relative border-b border-slate-200/10 dark:border-white/5">
                {/* Hero Ambient Glows */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-700" />

                    {/* Bottom Transition Gradient */}
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
                </div>

                <div className="container-custom relative z-10">
                    <ScrollFadeIn>
                        <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> {t('projectsPage.backHome')}
                        </Link>

                        <div className="max-w-3xl">
                            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                                {t('holding.title')} <span className="gradient-text animate-gradient-slow">{t('holding.subtitle')}</span>
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
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <ScrollFadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2">{t('holding.vitrine360.title')}</h2>
                            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                                {t('holding.vitrine360.tagline')}
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn>
                            <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border-white/20 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

                                <p className="text-lg mb-8 text-muted-foreground relative z-10 leading-relaxed">
                                    {t('holding.vitrine360.description')}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                    {holdingTranslations.vitrine360.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 group-hover:translate-x-1 transition-transform duration-300">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                                <ShoppingBag size={16} />
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 relative z-10">
                                    <Link
                                        to="/#contact"
                                        className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 smooth-transition overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t('projects.viewProject')} <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={20} />
                                        </span>
                                        <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-shine" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollFadeIn>

                        <ScrollFadeIn delay={200}>
                            <div className="relative group perspective-1000">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2">
                                    <div className="p-4 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-white/10 flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="ml-4 h-6 px-3 w-64 rounded-full bg-slate-200 dark:bg-slate-700 text-[10px] flex items-center text-muted-foreground overflow-hidden whitespace-nowrap">vitrine360.com.br/dashboard</div>
                                    </div>
                                    <div className="aspect-[16/10] bg-slate-50 dark:bg-slate-950 p-6 flex flex-col gap-4">
                                        <div className="grid grid-cols-3 gap-4">
                                            {[
                                                { label: language === 'pt' ? 'Vendas' : 'Sales', value: 'R$ 12k', color: 'primary' },
                                                { label: language === 'pt' ? 'Cliques' : 'Clicks', value: '8.4k', color: 'secondary' },
                                                { label: language === 'pt' ? 'Meta' : 'Goal', value: '92%', color: 'accent' }
                                            ].map((stat, i) => (
                                                <div key={i} className="h-24 rounded-2xl bg-white dark:bg-slate-800 border border-border flex flex-col p-4 justify-between group/stat hover:border-primary/50 transition-colors">
                                                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                                    <div className={`text-xl font-black text-${stat.color}`}>{stat.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex-1 rounded-2xl bg-white dark:bg-slate-800 border border-border p-6 flex items-center justify-center relative overflow-hidden group/chart">
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                                            <BarChart3 size={48} className="text-primary opacity-20 group-hover/chart:scale-110 transition-transform duration-500" />
                                            <div className="absolute bottom-6 left-6 right-6 h-32 flex items-end gap-2">
                                                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-sm"
                                                        style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* ColorFlicks Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
                </div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <ScrollFadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2">{t('holding.colorflicks.title')}</h2>
                            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                                {t('holding.colorflicks.tagline')}
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollFadeIn>
                            <div className="relative group order-2 lg:order-1 perspective-1000">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/20 to-purple-600/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] max-h-[550px] mx-auto w-full max-w-md transition-transform duration-500 group-hover:-rotate-y-2 group-hover:scale-[1.02]">
                                    {/* Abstract Movie Poster Mockup */}
                                    <div className="w-full h-full relative overflow-hidden flex flex-col group/poster">
                                        <div className="h-full w-full relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
                                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover/poster:scale-110 opacity-60"></div>

                                            <Clapperboard className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20" size={80} />

                                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="h-1 w-12 bg-secondary rounded-full" />
                                                    <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">AI Palette Extraction</span>
                                                </div>
                                                <h3 className="text-2xl font-black text-white mb-4 drop-shadow-lg">Cinematic Mood</h3>

                                                <div className="flex gap-2">
                                                    {[
                                                        { hex: '#E11D48', label: 'Rose' },
                                                        { hex: '#F59E0B', label: 'Amber' },
                                                        { hex: '#7C3AED', label: 'Violet' },
                                                        { hex: '#0F172A', label: 'Slate' }
                                                    ].map((color, i) => (
                                                        <div key={i} className="group/color relative">
                                                            <div
                                                                className="w-12 h-12 rounded-xl border border-white/20 shadow-lg transform group-hover/color:-translate-y-2 transition-transform duration-300"
                                                                style={{ backgroundColor: color.hex }}
                                                            />
                                                            <div className="absolute top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover/color:opacity-100 transition-opacity text-[8px] font-mono text-white/60">
                                                                {color.hex}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>

                        <ScrollFadeIn delay={200}>
                            <div
                                className="glass-card p-8 md:p-10 rounded-[2.5rem] border-secondary/20 bg-slate-50/50 dark:bg-slate-900/40 order-1 lg:order-2 backdrop-blur-xl relative overflow-hidden group">
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500" />

                                <p className="text-lg mb-8 text-muted-foreground leading-relaxed relative z-10">
                                    {t('holding.colorflicks.description')}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                    {holdingTranslations.colorflicks.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:translate-x-1 transition-transform duration-300">
                                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shadow-inner">
                                                <Palette size={16} />
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 relative z-10">
                                    <a
                                        href="https://vihisantos.github.io/ColorFlicks/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-bold hover:shadow-lg hover:shadow-secondary/30 smooth-transition overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t('projects.viewProject')} <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={20} />
                                        </span>
                                        <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-shine" />
                                    </a>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* Mizin Section */}
            <section className="section-padding relative overflow-hidden bg-white dark:bg-slate-950">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-red-500/5 rounded-full blur-[120px]" />
                </div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <ScrollFadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2">{t('holding.mizin.title')}</h2>
                            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                                {t('holding.mizin.tagline')}
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollFadeIn delay={200}>
                            <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border-red-500/20 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-500" />

                                <p className="text-lg mb-8 text-muted-foreground leading-relaxed relative z-10">
                                    {t('holding.mizin.description')}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                    {holdingTranslations.mizin.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 group-hover:translate-x-1 transition-transform duration-300">
                                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shadow-inner">
                                                <Download size={16} />
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 relative z-10">
                                    <a
                                        href="https://drive.google.com/file/d/1dGPSta5n3k7fQQsaPdVg72K0ztsUT-9C/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white font-bold hover:shadow-lg hover:shadow-red-600/30 smooth-transition overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t('projects.viewProject')} <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={20} />
                                        </span>
                                        <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-shine" />
                                    </a>
                                </div>
                            </div>
                        </ScrollFadeIn>

                        <ScrollFadeIn>
                            <div className="relative group perspective-1000">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 to-rose-600/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative bg-slate-900 dark:bg-slate-950 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] flex flex-col transition-transform duration-500 group-hover:rotate-y-2">
                                    {/* Mizin YouTube App Mockup */}
                                    <div className="h-12 bg-slate-900/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6">
                                        <div className="flex items-center gap-2 text-white font-bold text-sm">
                                            <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center">
                                                <Youtube size={14} />
                                            </div>
                                            Mizin
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                            <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-8 flex flex-col justify-center gap-8">
                                        <div className="space-y-4">
                                            <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider mb-2">
                                                {language === 'pt' ? 'Inserir Link do YouTube' : 'Paste YouTube Link'}
                                            </div>
                                            <div className="relative">
                                                <div className="h-14 w-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex items-center px-6 text-white/30 text-sm overflow-hidden text-ellipsis">
                                                    https://www.youtube.com/watch?v=...
                                                </div>
                                                <div className="absolute right-2 top-2 bottom-2 aspect-square rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg animate-pulse">
                                                    <ArrowLeft className="rotate-[270deg]" size={20} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {[
                                                { label: "4K", active: true },
                                                { label: "1080p", active: false },
                                                { label: "MP3", active: false }
                                            ].map((btn, i) => (
                                                <div key={i} className={`h-12 rounded-xl border border-white/10 flex items-center justify-center text-xs font-bold transition-all ${btn.active ? 'bg-white/10 text-white border-white/20' : 'bg-transparent text-white/30'}`}>
                                                    {btn.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* CapyFlow Academy Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute bottom-0 -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                </div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <ScrollFadeIn>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2">{t('holding.capyflow.title')}</h2>
                            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                                {t('holding.capyflow.tagline')}
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollFadeIn>
                            <div className="glass-card p-8 md:p-10 rounded-[2.5rem] border-primary/20 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

                                <p className="text-lg mb-8 text-muted-foreground leading-relaxed relative z-10">
                                    {t('holding.capyflow.description')}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                    {holdingTranslations.capyflow.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 group-hover:translate-x-1 transition-transform duration-300">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                                <GraduationCap size={16} />
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 relative z-10">
                                    <Link
                                        to="/projects"
                                        className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 smooth-transition overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t('projects.viewProject')} <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={20} />
                                        </span>
                                        <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-shine" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollFadeIn>

                        <ScrollFadeIn delay={200}>
                            <div className="relative group perspective-1000">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2">
                                    {/* Abstract Code Editor Mockup */}
                                    <div className="w-full h-full bg-slate-950 rounded-xl relative overflow-hidden flex flex-col border border-slate-800 aspect-[4/5] max-h-[550px]">
                                        <div className="h-10 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center px-4 gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                            </div>
                                            <div className="ml-4 h-5 px-3 rounded-md bg-slate-800/50 text-[10px] flex items-center text-slate-400 font-mono">App.tsx</div>
                                        </div>
                                        <div className="flex-1 p-6 font-mono text-sm relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-10 bg-slate-900/50 border-r border-slate-800 flex flex-col items-center py-6 text-slate-600 text-xs">
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => <div key={n} className="h-6">{n}</div>)}
                                            </div>
                                            <div className="ml-8 space-y-4">
                                                <div className="flex gap-2">
                                                    <span className="text-purple-400">import</span>
                                                    <span className="text-cyan-400">{"{ useState }"}</span>
                                                    <span className="text-purple-400">from</span>
                                                    <span className="text-yellow-200">"react"</span>
                                                </div>
                                                <div className="h-2 w-2/3 bg-slate-800 rounded-full animate-pulse" />
                                                <div className="flex gap-2">
                                                    <span className="text-purple-400">function</span>
                                                    <span className="text-blue-400">CapyFlow</span>
                                                    <span className="text-slate-300">() {"{"}</span>
                                                </div>
                                                <div className="ml-6 space-y-3">
                                                    <div className="h-2 w-1/2 bg-slate-800 rounded-full animate-pulse delay-75" />
                                                    <div className="h-2 w-1/3 bg-slate-800 rounded-full animate-pulse delay-150" />
                                                    <div className="flex gap-2">
                                                        <span className="text-purple-400">return</span>
                                                        <span className="text-slate-300">{"("}</span>
                                                    </div>
                                                    <div className="ml-6 h-12 w-3/4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary/50">
                                                        <Code2 size={24} className="animate-pulse" />
                                                    </div>
                                                </div>
                                                <div className="text-slate-300">{"}"}</div>
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
            <section className="section-padding overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[120px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="bg-slate-900 dark:bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative shadow-2xl group/eco">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] group-hover/eco:bg-primary/30 transition-colors duration-700"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] group-hover/eco:bg-secondary/30 transition-colors duration-700"></div>

                        <div className="relative z-10 max-w-5xl mx-auto text-center">
                            <ScrollFadeIn>
                                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight mx-auto">{t('holding.ecosystem.title')}</h2>
                                <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                                    {t('holding.ecosystem.description')}
                                </p>
                            </ScrollFadeIn>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
                                {[
                                    { icon: <ShoppingBag size={24} />, title: "Comércio", desc: "Infraestrutura SaaS robusta para vendas de alto impacto.", color: "primary" },
                                    { icon: <Palette size={24} />, title: "Criatividade", desc: "Inteligência visual, design de produto e identidade.", color: "secondary" },
                                    { icon: <GraduationCap size={24} />, title: "Educação", desc: "Formação acelerada de novos talentos para o mercado tech.", color: "blue-400" }
                                ].map((item, idx) => (
                                    <ScrollFadeIn key={idx} delay={idx * 150} className="h-full">
                                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:translate-y-[-8px] transition-all duration-500 group h-full flex flex-col">
                                            <div className={`w-14 h-14 rounded-2xl bg-${item.color}/10 flex items-center justify-center mb-6 text-${item.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed flex-1">{item.desc}</p>
                                        </div>
                                    </ScrollFadeIn>
                                ))}
                            </div>

                            <ScrollFadeIn delay={503}>
                                <div className="flex flex-col sm:flex-row gap-6 mt-16 items-center justify-center">
                                    <Link
                                        to="/sponsorship"
                                        className="group relative inline-flex items-center justify-center gap-2 px-12 py-6 rounded-2xl bg-white text-slate-950 font-bold hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-3">
                                            {language === 'pt' ? 'Seja um Parceiro Estratégico' : 'Become a Strategic Partner'} <Stars className="text-primary animate-pulse" size={20} />
                                        </span>
                                        <div className="absolute inset-0 w-1/2 h-full bg-slate-900/5 skew-x-[-25deg] -translate-x-full group-hover:animate-shine" />
                                    </Link>
                                </div>
                            </ScrollFadeIn>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
