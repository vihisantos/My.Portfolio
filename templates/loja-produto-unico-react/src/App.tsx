import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Star, Shield, Truck, Clock, Menu, X, Sun, Moon, ChevronLeft, ChevronRight, Plus, Minus, Check } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre o AeroSound.'

const PRODUCT_VIEWS = [
    { id: 'blue', color: '#3b82f6', img: '/aero-x.png', label: 'Ethereal Blue' },
    { id: 'emerald', color: '#10b981', img: '/aero-emerald.png', label: 'Neon Emerald' },
    { id: 'ruby', color: '#ef4444', img: '/aero-ruby.png', label: 'Ruby Core' },
    { id: 'purple', color: '#a855f7', img: '/aero-purple.png', label: 'Shadow Purple' },
]

const benefits = [
    { icon: Shield, title: 'Design Premium', desc: 'Corpo em cristal de safira sintético — ultra-resistente e incrivelmente leve.' },
    { icon: Headphones, title: 'ANC Adaptativo 45dB', desc: 'Silêncio absoluto com cancelamento de ruído inteligente e adaptativo.' },
    { icon: Battery, title: 'Bateria de 50h', desc: 'Uma semana inteira de uso com apenas uma carga via USB-C.' },
    { icon: Music, title: 'Áudio Hi-Res', desc: 'Drivers de berílio para fidelidade sonora que você nunca ouviu antes.' },
]

const testimonials = [
    { name: 'Dani Ribeiro', role: 'Produtora Musical', text: 'A clareza sonora é absurda. Consigo ouvir nuances que outros fones perdem. O design é uma obra de arte.' },
    { name: 'Gustavo Paiva', role: 'Tech Reviewer', text: 'O AeroSound não é apenas um fone, é um statement técnico. O cancelamento de ruído é o melhor que já testei.' },
    { name: 'Ana Luiza', role: 'Executiva', text: 'O conforto durante voos longos é incomparável. A transparência do design chama atenção em qualquer lugar.' },
]

const faqs = [
    { q: 'O material é frágil?', a: 'Não. Utilizamos composto de vidro safira reforçado com polímero, projetado para resistir a quedas e arranhões.' },
    { q: 'É compatível com todos os dispositivos?', a: 'Sim. Bluetooth 5.4 com suporte a LDAC, aptX Adaptive e conexão multiponto.' },
    { q: 'Qual o tempo de garantia?', a: 'Garantia premium de 2 anos contra qualquer defeito de fabricação.' },
    { q: 'O LED interno desliga?', a: 'Sim. Através do app exclusivo, você personaliza as cores ou desliga as luzes.' },
]

function useTheme() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    return { dark, toggle: () => setDark(d => !d) }
}

function useCountdown(seconds: number) {
    const [remaining, setRemaining] = useState(seconds)
    useEffect(() => {
        if (remaining <= 0) return
        const t = setTimeout(() => setRemaining(r => r - 1), 1000)
        return () => clearTimeout(t)
    }, [remaining])
    const h = Math.floor(remaining / 3600)
    const m = Math.floor((remaining % 3600) / 60)
    const s = remaining % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function App() {
    const { dark, toggle } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeView, setActiveView] = useState(PRODUCT_VIEWS[0])
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [quantity, setQuantity] = useState(1)
    const countdown = useCountdown(2 * 3600 + 45 * 60 + 12)

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', h)
        return () => window.removeEventListener('scroll', h)
    }, [])

    return (
        <div className="min-h-screen">
            {/* Urgency Bar */}
            <div className="bg-[var(--color-brand)] text-white text-center py-2 text-xs font-bold tracking-wider flex items-center justify-center gap-2">
                <Clock size={14} /> Oferta de Lançamento — Encerra em: <span className="font-mono">{countdown}</span>
            </div>

            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--card)]/90 backdrop-blur-xl shadow-lg border-b border-[var(--border)]' : 'bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="#" className="font-display font-bold text-xl text-[var(--text)]">
                        Aero<span className="text-[var(--color-brand)]">Sound</span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#benefits" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Diferenciais</a>
                        <a href="#reviews" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Reviews</a>
                        <a href="#faq" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">FAQ</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={toggle} className="p-2 rounded-lg hover:bg-[var(--bg-alt)] transition-colors text-[var(--text-muted)]">
                            {dark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a href="#checkout" className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-brand)] text-white rounded-lg font-bold text-sm hover:bg-[var(--color-brand-dark)] transition-all">
                            <ShoppingCart size={16} /> Comprar
                        </a>
                        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[var(--text)]">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[var(--card)] border-t border-[var(--border)]"
                        >
                            <div className="px-6 py-6 space-y-4">
                                <a href="#benefits" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)]">Diferenciais</a>
                                <a href="#reviews" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)]">Reviews</a>
                                <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)]">FAQ</a>
                                <a href="#checkout" onClick={() => setMenuOpen(false)} className="block px-6 py-3 bg-[var(--color-brand)] text-white rounded-lg font-bold text-sm text-center">Comprar</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[var(--bg-dark)]">
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 60% 50%, ${activeView.color}15 0%, transparent 50%)` }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 border rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ borderColor: activeView.color, color: activeView.color, backgroundColor: `${activeView.color}12` }}>
                                AeroSound Pro · {activeView.label}
                            </span>
                            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                                A Pureza do Som<br />
                                <span style={{ color: activeView.color }}>Redefinida.</span>
                            </h1>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
                                O fone que desaparece para deixar apenas a música. Engenharia de cristal com áudio de ultra-resolução.
                            </p>
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <a href="#checkout" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-1" style={{ background: activeView.color, color: '#fff', boxShadow: `0 8px 24px ${activeView.color}55` }}>
                                    <ShoppingCart size={18} /> Adquirir AeroSound
                                </a>
                                <div className="flex items-center gap-2 text-white/60 text-sm">
                                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                    4.9 / 5 (2.4k avaliações)
                                </div>
                            </div>

                            {/* Color Selector */}
                            <div className="flex gap-3">
                                {PRODUCT_VIEWS.map(view => (
                                    <button
                                        key={view.id}
                                        onClick={() => setActiveView(view)}
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${activeView.id === view.id ? 'scale-110 border-white' : 'border-white/20 hover:border-white/50'}`}
                                        style={{ background: view.color }}
                                        title={view.label}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center relative"
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeView.id}
                                    src={activeView.img}
                                    alt={`AeroSound ${activeView.label}`}
                                    className="w-full max-w-lg lg:max-w-3xl xl:max-w-4xl"
                                    initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ filter: `drop-shadow(0 0 100px ${activeView.color}66)` }}
                                />
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="py-24 bg-[var(--bg)]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Diferenciais</span>
                        <h2 className="font-display text-4xl font-extrabold text-[var(--text)]">
                            Por que escolher nossa <span className="text-[var(--color-brand)]">tecnologia</span>?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--color-brand)]/50 transition-all group"
                            >
                                <div className="w-12 h-12 bg-[var(--color-brand)]/10 rounded-xl flex items-center justify-center mb-4 text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white transition-all">
                                    <b.icon size={24} />
                                </div>
                                <h3 className="font-display text-lg font-bold text-[var(--text)] mb-2">{b.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section id="reviews" className="py-24 bg-[var(--bg-dark)]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Reviews</span>
                        <h2 className="font-display text-4xl font-extrabold text-white">
                            Quem já <span className="text-[var(--color-brand)]">aprova</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 p-6 rounded-2xl border border-white/10"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />)}
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[var(--color-brand)]/20 rounded-full flex items-center justify-center text-[var(--color-brand)] font-bold text-xs">
                                        {t.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <strong className="text-sm text-white">{t.name}</strong>
                                        <span className="block text-xs text-white/50">{t.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-24 bg-[var(--bg)]">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Suporte</span>
                        <h2 className="font-display text-4xl font-extrabold text-[var(--text)]">
                            Ainda tem alguma <span className="text-[var(--color-brand)]">dúvida</span>?
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold text-[var(--text)] text-sm pr-4">{faq.q}</span>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-[var(--color-brand)] text-white' : 'bg-[var(--bg-alt)] text-[var(--text-muted)]'}`}>
                                        {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-5 text-[var(--text-muted)] text-sm leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Checkout */}
            <section id="checkout" className="py-24 bg-[var(--bg-dark)]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="font-display text-4xl font-extrabold text-white mb-8">
                            O som do futuro em <span className="text-[var(--color-brand)]">suas mãos</span>
                        </h2>

                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 max-w-lg mx-auto">
                            <div className="mb-6">
                                <span className="text-white/40 line-through text-lg">De R$ 2.490,00</span>
                                <div className="text-4xl font-bold text-white mt-1">R$ 1.690,00</div>
                                <span className="text-[var(--color-brand)] text-sm">ou 12x de R$ 140,83 sem juros</span>
                            </div>

                            <div className="flex items-center justify-center gap-4 mb-6">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                    <Minus size={16} />
                                </button>
                                <span className="text-white font-bold text-lg w-8 text-center">{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                                    <Plus size={16} />
                                </button>
                            </div>

                            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-1" style={{ background: activeView.color, color: '#fff', boxShadow: `0 8px 24px ${activeView.color}55` }}>
                                <ShoppingCart size={18} /> Finalizar Compra
                            </a>

                            <div className="flex items-center justify-center gap-4 mt-6 text-white/40 text-xs">
                                <span className="flex items-center gap-1"><Shield size={12} /> Garantia 2 anos</span>
                                <span className="flex items-center gap-1"><Truck size={12} /> Frete grátis</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[var(--bg-dark)] border-t border-white/10 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="font-display text-xl font-bold text-white">Aero<span className="text-[var(--color-brand)]">Sound</span></span>
                    <p className="text-white/30 text-xs mt-4">© {new Date().getFullYear()} AeroSound. Todos os direitos reservados.</p>
                    <p className="text-white/30 text-xs mt-1">Desenvolvido por <a href="https://capybaraholding.com.br" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand)]">Capybara Holding</a></p>
                </div>
            </footer>

            {/* WhatsApp FAB */}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.025-1.379l-.36-.213-3.757.981 1.001-3.651-.234-.374A9.796 9.796 0 012.182 12c0-5.413 4.41-9.818 9.818-9.818s9.818 4.405 9.818 9.818c0 5.413-4.41 9.818-9.818 9.818z"/></svg>
            </a>
        </div>
    )
}

function Headphones({ size = 24 }: { size?: number }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
}

function Battery({ size = 24 }: { size?: number }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/></svg>
}

function Music({ size = 24 }: { size?: number }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
}
