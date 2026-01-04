
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
            <section className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="container-custom relative z-10">
                    <ScrollFadeIn>
                        <Link to="/capybara-holding" className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline">
                            <ArrowLeft size={18} /> {t('projectsPage.backHome')}
                        </Link>

                        <div className="max-w-4xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-6">
                                {sponsorship.hero.badge}
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
                                {sponsorship.hero.title} <span className="gradient-text">{sponsorship.hero.subtitle}</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                {sponsorship.hero.description}
                            </p>
                        </div>
                    </ScrollFadeIn>
                </div>
            </section>

            {/* Why Sponsor Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollFadeIn delay={100}>
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition duration-300 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                                    <Stars size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{sponsorship.why.innovation.title}</h3>
                                <p className="text-muted-foreground">{sponsorship.why.innovation.desc}</p>
                            </div>
                        </ScrollFadeIn>
                        <ScrollFadeIn delay={200}>
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition duration-300 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                                    <HandHeart size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{sponsorship.why.education.title}</h3>
                                <p className="text-muted-foreground">{sponsorship.why.education.desc}</p>
                            </div>
                        </ScrollFadeIn>
                        <ScrollFadeIn delay={300}>
                            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition duration-300 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{sponsorship.why.impact.title}</h3>
                                <p className="text-muted-foreground">{sponsorship.why.impact.desc}</p>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* Sponsorship Tiers */}
            <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Escolha seu Impacto</h2>
                        <p className="text-slate-400">Opções flexíveis para apoiar do jeito que fizer sentido para você.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Community Tier */}
                        <ScrollFadeIn delay={100}>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                <h3 className="text-xl font-bold mb-2 text-slate-300">{sponsorship.tiers.community.title}</h3>
                                <div className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400">
                                    {sponsorship.tiers.community.price}
                                </div>
                                <p className="text-slate-400 mb-8 min-h-[60px]">{sponsorship.tiers.community.description}</p>
                                <ul className="space-y-4 mb-8">
                                    {sponsorship.tiers.community.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300">
                                            <Check size={18} className="text-emerald-400" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact-sponsor" className="block w-full py-4 rounded-xl border border-white/20 text-center font-bold hover:bg-white/10 transition">
                                    Apoiar Agora
                                </a>
                            </div>
                        </ScrollFadeIn>

                        {/* Visionary Tier (Highlighted) */}
                        <ScrollFadeIn delay={200}>
                            <div className="p-8 rounded-3xl bg-gradient-to-b from-primary/20 to-secondary/10 border border-primary/30 relative transform lg:-translate-y-4 shadow-2xl">
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                                    MOST POPULAR
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Crown className="text-yellow-400" size={24} />
                                    <h3 className="text-xl font-bold text-white">{sponsorship.tiers.visionary.title}</h3>
                                </div>
                                <div className="text-4xl font-bold mb-4 text-white">
                                    {sponsorship.tiers.visionary.price}
                                </div>
                                <p className="text-slate-300 mb-8 min-h-[60px]">{sponsorship.tiers.visionary.description}</p>
                                <ul className="space-y-4 mb-8">
                                    {sponsorship.tiers.visionary.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white">
                                            <ShieldCheck size={18} className="text-primary" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact-sponsor" className="block w-full py-4 rounded-xl bg-primary text-white text-center font-bold hover:shadow-lg hover:shadow-primary/40 transition">
                                    Tornar-se Visionário
                                </a>
                            </div>
                        </ScrollFadeIn>

                        {/* Project Tier */}
                        <ScrollFadeIn delay={300}>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                                <h3 className="text-xl font-bold mb-2 text-slate-300">{sponsorship.tiers.guardian.title}</h3>
                                <div className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                                    {sponsorship.tiers.guardian.price}
                                </div>
                                <p className="text-slate-400 mb-8 min-h-[60px]">{sponsorship.tiers.guardian.description}</p>
                                <ul className="space-y-4 mb-8">
                                    {sponsorship.tiers.guardian.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300">
                                            <Check size={18} className="text-blue-400" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact-sponsor" className="block w-full py-4 rounded-xl border border-white/20 text-center font-bold hover:bg-white/10 transition">
                                    Escolher Projeto
                                </a>
                            </div>
                        </ScrollFadeIn>
                    </div>
                </div>
            </section>

            {/* Wall of Fame Section */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="container-custom text-center">
                    <ScrollFadeIn>
                        <h2 className="text-4xl font-bold mb-4">{sponsorship.wallOfFame.title}</h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            {sponsorship.wallOfFame.subtitle}
                        </p>
                    </ScrollFadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {/* Placeholder for "Be the First" */}
                        <ScrollFadeIn delay={100}>
                            <a href="#contact-sponsor" className="group aspect-square rounded-2xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center bg-primary/5 hover:bg-primary/10 transition cursor-pointer relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition duration-300">
                                    <Crown size={20} />
                                </div>
                                <span className="font-bold text-primary text-sm">{sponsorship.wallOfFame.beTheFirst}</span>
                                <span className="text-xs text-muted-foreground mt-1">{sponsorship.wallOfFame.joinUs}</span>
                            </a>
                        </ScrollFadeIn>

                        {sponsors.map((sponsor, i) => (
                            <ScrollFadeIn key={sponsor.id} delay={100 + (i * 50)}>
                                {sponsor.tier === 'visionary' && (
                                    <div className="aspect-square rounded-2xl bg-white dark:bg-slate-900 border border-indigo-500/30 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/10">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition"></div>
                                        <div className="absolute top-2 right-2 text-indigo-500/50 group-hover:text-amber-400 transform group-hover:rotate-12 transition duration-300">
                                            <Crown size={14} fill="currentColor" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mb-3 shadow-md relative z-10">
                                            {sponsor.initials}
                                        </div>
                                        <span className="font-bold text-slate-900 dark:text-white text-sm relative z-10">{sponsor.name}</span>
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-indigo-500 mt-1 relative z-10">Visionário</span>
                                    </div>
                                )}

                                {sponsor.tier === 'guardian' && (
                                    <div className="aspect-square rounded-2xl bg-white dark:bg-slate-900 border border-blue-500/30 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition duration-300">
                                        <div className="absolute top-2 right-2 text-blue-500 opacity-50">
                                            <ShieldCheck size={14} />
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg mb-3">
                                            {sponsor.initials}
                                        </div>
                                        <span className="font-bold text-slate-900 dark:text-white text-sm">{sponsor.name}</span>
                                        <span className="text-[10px] text-slate-500 mt-1">Apoia: <span className="text-blue-500 font-medium">{sponsor.projectName}</span></span>
                                    </div>
                                )}

                                {sponsor.tier === 'community' && (
                                    <div className="aspect-square rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition duration-300 shadow-lg shadow-emerald-500/10">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 group-hover:opacity-100 transition"></div>
                                        <div className="absolute top-2 right-2 text-emerald-500 transform group-hover:scale-125 transition duration-300">
                                            <Heart size={14} fill="currentColor" className="text-emerald-500" />
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg mb-3 shadow-sm relative z-10">
                                            {sponsor.initials}
                                        </div>
                                        <span className="font-bold text-slate-900 dark:text-white text-sm relative z-10">{sponsor.name}</span>
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 mt-1 relative z-10">Comunidade</span>
                                    </div>
                                )}
                            </ScrollFadeIn>
                        ))}

                        {/* Empty Slots Logic */}
                        {Array.from({ length: Math.max(0, 11 - sponsors.length) }).map((_, i) => (
                            <ScrollFadeIn key={`empty-${i}`} delay={300 + (i * 50)}>
                                <div className="aspect-square rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center opacity-40">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                                </div>
                            </ScrollFadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-sponsor" className="section-padding">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto glass-card p-8 lg:p-12 rounded-3xl border-primary/10">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-4">{sponsorship.form.title}</h2>
                            <p className="text-muted-foreground">Preencha o formulário e entraremos em contato para formalizar nossa parceria.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">{sponsorship.form.name}</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">{sponsorship.form.email}</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">{sponsorship.form.interest}</label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition"
                                >
                                    <option value="visionary">Visionário (Holding Patron)</option>
                                    <option value="guardian">Guardião de Projeto</option>
                                    <option value="community">Apoiador da Comunidade</option>
                                    <option value="other">Outro / Customizado</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">{sponsorship.form.message}</label>
                                <textarea
                                    required
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {loading ? translations[language].contactForm.loading : (
                                    <>
                                        {sponsorship.form.submit} <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
