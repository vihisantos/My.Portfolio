import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function Pricing() {
    const { t } = useLanguage();

    const plans = [
        {
            name: t('pricing.free.title'),
            price: "0",
            description: t('pricing.free.description'),
            features: [
                "17 produtos",
                "50 vendas/mês",
                "Suporte por email",
                "Painel básico"
            ],
            highlight: false,
            buttonText: t('pricing.free.button')
        },
        {
            name: t('pricing.pro.title'),
            price: "99",
            description: t('pricing.pro.description'),
            features: [
                "Produtos ilimitados",
                "Vendas ilimitadas",
                "Suporte prioritário",
                "Relatórios avançados",
                "Domínio personalizado"
            ],
            highlight: true,
            buttonText: t('pricing.pro.button')
        },
        {
            name: t('pricing.enterprise.title'),
            price: "Consulte",
            description: t('pricing.enterprise.description'),
            features: [
                "Tudo do Pro",
                "Suporte a times",
                "Gerente de conta dedicado",
                "API personalizada",
                "SLA garantido"
            ],
            highlight: false,
            buttonText: t('pricing.enterprise.button')
        }
    ];

    return (
        <section id="pricing" className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 -z-10" />

            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {t('pricing.badge')}
                    </span>
                    <h2 className="text-4xl font-bold mt-2 mb-4">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <ScrollFadeIn key={plan.name} delay={index * 100}>
                            <div
                                className={`
                  relative rounded-2xl p-8 border hover:shadow-xl transition-all duration-300
                  ${plan.highlight
                                        ? "bg-white dark:bg-slate-900 border-primary shadow-lg shadow-primary/10 z-10 scale-105"
                                        : "bg-white/50 dark:bg-slate-900/50 border-border"
                                    }
                `}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            Mais Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl font-bold">R$ {plan.price}</span>
                                        {plan.price !== "Consulte" && <span className="text-muted-foreground">/mês</span>}
                                    </div>
                                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm">
                                            <div className="mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 p-1 text-green-600 dark:text-green-400">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`
                    w-full py-3 px-6 rounded-lg font-semibold transition-colors
                    ${plan.highlight
                                            ? "bg-primary text-white hover:bg-primary/90"
                                            : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                                        }
                  `}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
