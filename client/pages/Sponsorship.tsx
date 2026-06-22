
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";
import { ArrowLeft, Check, Crown, HandHeart, Heart, Send, ShieldCheck, Stars, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

type SponsorTier = 'visionary' | 'guardian' | 'community';

interface Sponsor {
    id: string;
    name: string;
    initials: string;
    tier: SponsorTier;
    projectName?: string;
}

//Adicionar patrocinadores aqui

const sponsors: Sponsor[] = [
    // { id: '1', name: 'Vitor Santos', initials: 'VS', tier: 'visionary' },
    // { id: '2', name: 'Techteste', initials: 'TC', tier: 'guardian', projectName: 'Vitrine360' },
    // { id: '3', name: 'Devteste', initials: 'DA', tier: 'community' },
];

export default function Sponsorship() {
    const { t, language } = useLanguage();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [hoveredTier, setHoveredTier] = useState<SponsorTier | 'none'>('none');

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: 'visionary',
        message: ''
    });

    // Type-safe access to sponsorship translations
    const sponsorship = translations[language].holding.sponsorship;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://formspree.io/f/xnjnozgn', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _subject: `Novo Patrocínio: ${formData.interest} - ${formData.name}`,
                    name: formData.name,
                    email: formData.email,
                    interest_level: formData.interest,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                toast({
                    title: translations[language].contactForm.success,
                    description: "Sua proposta de patrocínio foi enviada com sucesso!",
                });
                setFormData({ name: '', email: '', interest: 'visionary', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: translations[language].contactForm.error,
                description: "Ocorreu um erro ao enviar. Tente novamente.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden relative border-b border-slate-200/10 dark:border-white/5">
                {/* Hero Ambient Glows */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-700" />

                    {/* Bottom Transition Gradient */}
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
                </div>

                <div className="container-custom relative z-10">
                    <ScrollFadeIn>
                        <Link to="/capybara-holding" className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> {t('projectsPage.backHome')}
                        </Link>

                        <div className="max-w-4xl">
                            <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 border border-primary/20 backdrop-blur-md">
                                {sponsorship.hero.badge}
                            </span>
                            <h1 className="text-5xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                                {sponsorship.hero.title} <br />
                                <span className="gradient-text animate-gradient-slow">{sponsorship.hero.subtitle}</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                                {sponsorship.hero.description}
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* Why Sponsor Section */}
            <section className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-full overflow-hidden pointer-events-none -translate-y-1/2">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollFadeIn delay={100}>
                            <div className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 h-full group">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                                    <Stars size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{sponsorship.why.innovation.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{sponsorship.why.innovation.desc}</p>
                            </div>
                        </ScrollFadeIn>
                        <ScrollFadeIn delay={200}>
                            <div className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-green-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 h-full group">
                                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                                    <HandHeart size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{sponsorship.why.education.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{sponsorship.why.education.desc}</p>
                            </div>
                        </ScrollFadeIn>
                        <ScrollFadeIn delay={300}>
                            <div className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-purple-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 h-full group">
                                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{sponsorship.why.impact.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{sponsorship.why.impact.desc}</p>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* Sponsorship Tiers */}
            <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
                {/* Ambient Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-20">
                        <ScrollFadeIn>
                            <h2 className="text-4xl lg:text-3xl font-black mb-6 tracking-tighter uppercase opacity-30">{language === 'pt' ? 'Projeção de Impacto em Tempo Real' : 'Real-Time Impact Projection'}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {[
                                    { label: language === 'pt' ? 'Velocidade de Escala' : 'Scaling Speed', value: hoveredTier === 'visionary' ? '+150%' : hoveredTier === 'guardian' ? '+40%' : hoveredTier === 'community' ? '+10%' : '---', color: 'text-primary' },
                                    { label: language === 'pt' ? 'Alcance do Ecossistema' : 'Ecosystem Reach', value: hoveredTier === 'visionary' ? '2.5M+' : hoveredTier === 'guardian' ? '500k' : hoveredTier === 'community' ? '50k' : '---', color: 'text-secondary' },
                                    { label: language === 'pt' ? 'Nível de Branding' : 'Branding Level', value: hoveredTier === 'visionary' ? 'Global' : hoveredTier === 'guardian' ? 'Project' : hoveredTier === 'community' ? 'Support' : '---', color: 'text-amber-500' }
                                ].map((stat, i) => (
                                    <div key={i} className={`glass-card p-6 rounded-2xl border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center group/stat overflow-hidden relative transition-all duration-500 ${hoveredTier !== 'none' ? 'scale-105 shadow-2xl' : ''}`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">{stat.label}</span>
                                        <div className={`text-4xl font-black ${stat.color} tracking-tighter transition-all duration-500 ${hoveredTier !== 'none' ? 'scale-110' : ''}`}>
                                            {stat.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter">{language === 'pt' ? 'Escolha seu Impacto' : 'Choose Your Impact'}</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                                {language === 'pt' ? 'Opções flexíveis para apoiar do jeito que fizer sentido para você.' : 'Flexible options to support in a way that makes sense for you.'}
                            </p>
                        </ScrollFadeIn>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
                        {/* Community Tier */}
                        <ScrollFadeIn delay={100}>
                            <div
                                onMouseEnter={() => setHoveredTier('community')}
                                onMouseLeave={() => setHoveredTier('none')}
                                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 h-full flex flex-col group cursor-default"
                            >
                                <h3 className="text-xl font-bold mb-2 text-slate-300 group-hover:text-white transition-colors">{sponsorship.tiers.community.title}</h3>
                                <div className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                                    {sponsorship.tiers.community.price}
                                </div>
                                <p className="text-slate-400 mb-8 min-h-[60px] leading-relaxed">{sponsorship.tiers.community.description}</p>
                                <ul className="space-y-4 mb-10 flex-1">
                                    {sponsorship.tiers.community.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-300">
                                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/10 flex items-center justify-center">
                                                <Check size={12} className="text-emerald-400" />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact-sponsor" className="block w-full py-4 rounded-2xl border border-white/20 text-center font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                                    {language === 'pt' ? 'Apoiar Agora' : 'Support Now'}
                                </a>
                            </div>
                        </ScrollFadeIn>

                        {/* Visionary Tier (Highlighted) */}
                        <ScrollFadeIn delay={200}>
                            <div
                                onMouseEnter={() => setHoveredTier('visionary')}
                                onMouseLeave={() => setHoveredTier('none')}
                                className="p-10 rounded-[3rem] bg-gradient-to-b from-primary/30 to-slate-900 border border-primary/40 relative transform lg:-translate-y-6 shadow-[0_20px_60px_-15px_rgba(var(--primary-rgb),0.3)] h-full flex flex-col overflow-hidden group cursor-default"
                            >
                                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black tracking-widest px-4 py-2 rounded-bl-2xl uppercase">
                                    {language === 'pt' ? 'PROJETO RECOMENDADO' : 'TOP IMPACT'}
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <Crown className="text-yellow-400 animate-pulse" size={28} />
                                    <h3 className="text-2xl font-black text-white tracking-tight">{sponsorship.tiers.visionary.title}</h3>
                                </div>
                                <div className="text-5xl font-black mb-6 text-white tracking-tighter">
                                    {sponsorship.tiers.visionary.price}
                                </div>
                                <p className="text-slate-300 mb-8 min-h-[60px] leading-relaxed font-medium">{sponsorship.tiers.visionary.description}</p>
                                <ul className="space-y-4 mb-10 flex-1">
                                    {sponsorship.tiers.visionary.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 text-white">
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shadow-lg shadow-primary/20">
                                                <ShieldCheck size={14} className="text-white" />
                                            </div>
                                            <span className="text-base font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact-sponsor" className="block w-full py-5 rounded-2xl bg-white text-slate-950 text-center font-bold hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-all duration-300">
                                    {language === 'pt' ? 'Tornar-se Visionário' : 'Become Visionary'}
                                </a>
                            </div>
                        </ScrollFadeIn>

                        {/* Project Tier */}
                        <ScrollFadeIn delay={300}>
                            <div
                                onMouseEnter={() => setHoveredTier('guardian')}
                                onMouseLeave={() => setHoveredTier('none')}
                                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col group cursor-default"
                            >
                                <h3 className="text-xl font-bold mb-2 text-slate-300 group-hover:text-white transition-colors">{sponsorship.tiers.guardian.title}</h3>
                                <div className="text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                                    {sponsorship.tiers.guardian.price}
                                </div>
                                <p className="text-slate-400 mb-8 min-h-[60px] leading-relaxed">{sponsorship.tiers.guardian.description}</p>
                                <ul className="space-y-4 mb-10 flex-1">
                                    {sponsorship.tiers.guardian.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-300">
                                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-400/10 flex items-center justify-center">
                                                <Check size={12} className="text-blue-400" />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact-sponsor" className="block w-full py-4 rounded-2xl border border-white/20 text-center font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                                    {language === 'pt' ? 'Escolher Projeto' : 'Choose Project'}
                                </a>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* Wall of Fame Section */}
            <section className="section-padding bg-white dark:bg-slate-950 px-4">
                <div className="container-custom text-center">
                    <ScrollFadeIn>
                        <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter">{sponsorship.wallOfFame.title}</h2>
                        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-medium">
                            {sponsorship.wallOfFame.subtitle}
                        </p>
                    </ScrollFadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                        {/* Placeholder for "Be the First" */}
                        <ScrollFadeIn delay={100}>
                            <a href="#contact-sponsor" className="group aspect-square rounded-[2rem] border-2 border-dashed border-primary/20 flex flex-col items-center justify-center bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-500 cursor-pointer relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 animate-pulse opacity-50"></div>
                                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-primary/10">
                                    <Crown size={24} />
                                </div>
                                <span className="font-bold text-primary text-sm relative z-10">{sponsorship.wallOfFame.beTheFirst}</span>
                                <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest font-bold relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">{sponsorship.wallOfFame.joinUs}</span>
                            </a>
                        </ScrollFadeIn>

                        {sponsors.map((sponsor, i) => (
                            <ScrollFadeIn key={sponsor.id} delay={100 + (i * 50)}>
                                {sponsor.tier === 'visionary' && (
                                    <div className="aspect-square rounded-[2rem] bg-white dark:bg-slate-900 border border-indigo-500/20 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl shadow-indigo-500/5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute top-4 right-4 text-indigo-500 group-hover:text-amber-400 transform group-hover:rotate-12 transition-all duration-500 drop-shadow-md">
                                            <Crown size={18} fill="currentColor" />
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xl mb-3 shadow-xl relative z-10 ring-4 ring-indigo-500/10">
                                            {sponsor.initials}
                                        </div>
                                        <span className="font-bold text-slate-900 dark:text-white text-sm relative z-10">{sponsor.name}</span>
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-indigo-500 mt-2 relative z-10 drop-shadow-sm">Visionário</span>
                                    </div>
                                )}

                                {sponsor.tier === 'guardian' && (
                                    <div className="aspect-square rounded-[2rem] bg-white dark:bg-slate-900 border border-blue-500/10 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500 shadow-lg shadow-blue-500/5">
                                        <div className="absolute top-4 right-4 text-blue-500 opacity-50">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-black text-xl mb-3 ring-4 ring-blue-500/5">
                                            {sponsor.initials}
                                        </div>
                                        <span className="font-bold text-slate-900 dark:text-white text-sm">{sponsor.name}</span>
                                        <span className="text-[10px] text-slate-500 mt-2 font-medium">Apoia: <span className="text-blue-500 font-bold">{sponsor.projectName}</span></span>
                                    </div>
                                )}

                                {sponsor.tier === 'community' && (
                                    <div className="aspect-square rounded-[2rem] bg-white dark:bg-slate-900 border border-emerald-500/10 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500 shadow-xl shadow-emerald-500/5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute top-4 right-4 text-emerald-500 transform group-hover:scale-125 transition-transform duration-500">
                                            <Heart size={18} fill="currentColor" className="text-emerald-500" />
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-black text-xl mb-3 shadow-lg relative z-10 ring-4 ring-emerald-500/10">
                                            {sponsor.initials}
                                        </div>
                                        <span className="font-bold text-slate-900 dark:text-white text-sm relative z-10">{sponsor.name}</span>
                                        <span className="text-[10px] uppercase tracking-widest font-black text-emerald-600 dark:text-emerald-400 mt-2 relative z-10">Comunidade</span>
                                    </div>
                                )}
                            </ScrollFadeIn>
                        ))}

                        {/* Empty Slots Logic */}
                        {Array.from({ length: Math.max(0, 11 - sponsors.length) }).map((_, i) => (
                            <ScrollFadeIn key={`empty-${i}`} delay={300 + (i * 50)}>
                                <div className="aspect-square rounded-[2rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 flex items-center justify-center opacity-40 hover:opacity-60 transition-opacity duration-300">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
                                </div>
                            </ScrollFadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-sponsor" className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden">
                {/* Smooth Transition Blur */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 dark:from-slate-900/40 to-transparent pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto glass-card p-10 lg:p-16 rounded-[3rem] border-primary/20 bg-white dark:bg-slate-900/60 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                        {/* Form Ambient Glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />

                        <div className="text-center mb-12 relative z-10">
                            <ScrollFadeIn>
                                <h2 className="text-4xl font-black mb-6 tracking-tight text-slate-900 dark:text-white uppercase">{sponsorship.form.title}</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                                    {language === 'pt'
                                        ? 'Preencha o formulário e entraremos em contato para formalizar nossa parceria estratégica.'
                                        : 'Fill out the form and we will get in touch to formalize our strategic partnership.'}
                                </p>
                            </ScrollFadeIn>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-primary" /> {sponsorship.form.name}
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-primary/10 focus:border-primary/40 outline-none transition-all duration-300 font-medium text-slate-900 dark:text-white"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                        <HandHeart size={14} className="text-secondary" /> {sponsorship.form.email}
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-secondary/10 focus:border-secondary/40 outline-none transition-all duration-300 font-medium text-slate-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <Crown size={14} className="text-amber-500" /> {sponsorship.form.interest}
                                </label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none font-bold text-slate-900 dark:text-white appearance-none cursor-pointer"
                                >
                                    <option value="visionary">{language === 'pt' ? 'Visionário (Patrono da Holding)' : 'Visionary (Holding Patron)'}</option>
                                    <option value="guardian">{language === 'pt' ? 'Guardião de Projeto' : 'Project Guardian'}</option>
                                    <option value="community">{language === 'pt' ? 'Apoiador da Comunidade' : 'Community Supporter'}</option>
                                    <option value="other">{language === 'pt' ? 'Outro / Customizado' : 'Other / Custom'}</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                    <Heart size={14} className="text-red-500" /> {sponsorship.form.message}
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none font-medium resize-none text-slate-900 dark:text-white"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative w-full py-5 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.2em] hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-70 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    {loading ? translations[language].contactForm.loading : (
                                        <>
                                            {sponsorship.form.submit} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-shine" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
