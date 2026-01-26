import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { TruckLoader } from "@/components/ui-library/TruckLoader";
import { NewtonsCradleLoader } from "@/components/ui-library/NewtonsCradleLoader";
import { HandLoader } from "@/components/ui-library/HandLoader";
import { ECGLoader } from "@/components/ui-library/ECGLoader";
import { SleepingLoader } from "@/components/ui-library/SleepingLoader";
import { TowerLoader } from "@/components/ui-library/TowerLoader";
import { JumpingBoxLoader } from "@/components/ui-library/JumpingBoxLoader";
import { WordSpinnerLoader } from "@/components/ui-library/WordSpinnerLoader";
import { ShareButton } from "@/components/ui-library/ShareButton";
import { PaymentButton } from "@/components/ui-library/PaymentButton";
import { CreditsButton } from "@/components/ui-library/CreditsButton";
import { OpenAIButton } from "@/components/ui-library/OpenAIButton";
import { WalkingManLoader } from "@/components/ui-library/WalkingManLoader";
import { GeometricSpinnerLoader } from "@/components/ui-library/GeometricSpinnerLoader";
import { DotPulseLoader } from "@/components/ui-library/DotPulseLoader";
import { ThreeBodyLoader } from "@/components/ui-library/ThreeBodyLoader";
import { CoffeeLoader } from "@/components/ui-library/CoffeeLoader";
import { HidingSeakingLoader } from "@/components/ui-library/HidingSeakingLoader";
import { RollingRockLoader } from "@/components/ui-library/RollingRockLoader";
import { ClassicSpinnerLoader } from "@/components/ui-library/ClassicSpinnerLoader";
import { CarLoader } from "@/components/ui-library/CarLoader";
import { FlowingSpinnerLoader } from "@/components/ui-library/FlowingSpinnerLoader";
import { CircularPulseLoader } from "@/components/ui-library/CircularPulseLoader";
import { CrystalLoader } from "@/components/ui-library/CrystalLoader";
import { GyroLoader } from "@/components/ui-library/GyroLoader";
import { LikeButton } from "@/components/ui-library/LikeButton";
import { BanterLoader } from "@/components/ui-library/BanterLoader";
import { MatrixLoader } from "@/components/ui-library/MatrixLoader";
import { HamsterLoader } from "@/components/ui-library/HamsterLoader";
import { ShineButton } from "@/components/ui-library/ShineButton";
import { Tooltip } from "@/components/ui-library/Tooltip";
import { GlassIcons } from "@/components/ui-library/GlassIcons";
import { SocialGrid } from "@/components/ui-library/SocialGrid";
import { GhostLoader } from "@/components/ui-library/GhostLoader";
import { HolographicLoader } from "@/components/ui-library/HolographicLoader";
import { BubbleLoader } from "@/components/ui-library/BubbleLoader";
import { BouncingBallLoader } from "@/components/ui-library/BouncingBallLoader";
import { MusicEqualizerLoader } from "@/components/ui-library/MusicEqualizerLoader";
import { OlympicRingsLoader } from "@/components/ui-library/OlympicRingsLoader";
import { CloudSyncLoader } from "@/components/ui-library/CloudSyncLoader";
import { SpeederLoader } from "@/components/ui-library/SpeederLoader";
import { MinecraftSwitch } from "@/components/ui-library/MinecraftSwitch";
import { PillRadio } from "@/components/ui-library/PillRadio";
import { GooeySwitch } from "@/components/ui-library/GooeySwitch";
import { MapLocationTooltip } from "@/components/ui-library/MapLocationTooltip";
import { FolderCard } from "@/components/ui-library/FolderCard";
import { ColaLoader } from "@/components/ui-library/ColaLoader";
import { ThreeDInput } from "@/components/ui-library/ThreeDInput";
import { PushLoader } from "@/components/ui-library/PushLoader";
import { GeometricShapesLoader } from "@/components/ui-library/GeometricShapesLoader";
import { GradientSpinLoader } from "@/components/ui-library/GradientSpinLoader";
import { JumpingCirclesLoader } from "@/components/ui-library/JumpingCirclesLoader";
import { Error404Card } from "@/components/ui-library/Error404Card";
import { NatureButton } from "@/components/ui-library/NatureButton";
import { CircularSpinnerLoader } from "@/components/ui-library/CircularSpinnerLoader";
import { TriangleLoader } from "@/components/ui-library/TriangleLoader";
import { ModernWordLoader } from "@/components/ui-library/ModernWordLoader";
import { PlayNowButton } from "@/components/ui-library/PlayNowButton";
import { GradientRingLoader } from "@/components/ui-library/GradientRingLoader";
import { SocialPlatformGrid } from "@/components/ui-library/SocialPlatformGrid";
import { InputDemo } from "@/components/ui-library/InputDemo";
import { RealismButton } from "@/components/ui-library/RealismButton";
import { GlitchText } from "@/components/ui-library/GlitchText";
import { MagneticButton } from "@/components/ui-library/MagneticButton";
import { VoltageButton } from "@/components/ui-library/VoltageButton";
import { UnlockProButton } from "@/components/ui-library/UnlockProButton";
import { PayButton } from "@/components/ui-library/PayButton";
import { GalaxyButton } from "@/components/ui-library/GalaxyButton";
import { NeonGradientCard } from "@/components/ui-library/NeonGradientCard";
import { ExplosiveGrowthCard } from "@/components/ui-library/ExplosiveGrowthCard";
import { SoftInput } from "@/components/ui-library/SoftInput";
import { LogoutButton } from "@/components/ui-library/LogoutButton";
import { LiquidLoader } from "@/components/ui-library/LiquidLoader";
import { GlassCard } from "@/components/ui-library/GlassCard";
import { SketchButton } from "@/components/ui-library/SketchButton";
import { CloudSaveButton } from "@/components/ui-library/CloudSaveButton";
import { ScrollDownButton } from "@/components/ui-library/ScrollDownButton";
import { CodePenButton } from "@/components/ui-library/CodePenButton";
import { SparkleSwitch } from "@/components/ui-library/SparkleSwitch";
import { DayNightSwitch } from "@/components/ui-library/DayNightSwitch";
import { WhatsAppButton } from "@/components/ui-library/WhatsAppButton";
import { StarButton } from "@/components/ui-library/StarButton";
import { StarRating } from "@/components/ui-library/StarRating";
import { RGBButton } from "@/components/ui-library/RGBButton";
import { RecipeCard } from "@/components/ui-library/RecipeCard";
import { NumberCard } from "@/components/ui-library/NumberCard";
import { UIVerseCard } from "@/components/ui-library/UIVerseCard";
import { PegtopLoader } from "@/components/ui-library/PegtopLoader";
import { AIMatrixLoader } from "@/components/ui-library/AIMatrixLoader";
import { SoapBubbleLoader } from "@/components/ui-library/SoapBubbleLoader";
import { HoneycombLoader } from "@/components/ui-library/HoneycombLoader";
import { TerminalCard } from "@/components/ui-library/TerminalCard";
import { CodeEditorCard } from "@/components/ui-library/CodeEditorCard";
import { EthereumCard } from "@/components/ui-library/EthereumCard";
import { GradientPricingCard } from "@/components/ui-library/GradientPricingCard";
import { PremiumDesignCard } from "@/components/ui-library/PremiumDesignCard";
import { ThemeRadio } from "@/components/ui-library/ThemeRadio";
import { MatrixCube } from "@/components/ui-library/MatrixCube";
import { GradientSelect } from "@/components/ui-library/GradientSelect";
import { MagicBento } from "@/components/ui-library/MagicBento";
import { ConfettiButton } from "@/components/ui-library/ConfettiButton";
import { RainbowButton } from "@/components/ui-library/RainbowButton";
import { SpotlightCard } from "@/components/ui-library/SpotlightCard";
import { TiltCard } from "@/components/ui-library/TiltCard";
import { LiquidMorphLoader } from "@/components/ui-library/LiquidMorphLoader";
import { AtomicLoader } from "@/components/ui-library/AtomicLoader";
import { CleanCircleLoader } from "@/components/ui-library/CleanCircleLoader";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Sparkles, Beaker, Layout, Filter } from "lucide-react";

const categories = ["All", "Buttons", "Loaders", "Inputs", "Cards", "Text", "Tooltips"];

const components = [
    // --- FEATURED / SPECIAL LAYOUT ---
    { id: "spotlight_card", category: "Cards", size: "large", featured: true, component: <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.3)"><PremiumDesignCard /></SpotlightCard> },
    { id: "magic_bento", category: "Cards", size: "large", component: <MagicBento /> },
    { id: "tilt_card", category: "Cards", size: "medium", component: <TiltCard><h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">3D Interactive Tilt</h3></TiltCard> },
    { id: "error_404_card", category: "Cards", size: "medium", component: <Error404Card /> },
    { id: "terminal_card", category: "Cards", size: "medium", component: <TerminalCard /> },
    { id: "code_editor_card", category: "Cards", size: "medium", component: <CodeEditorCard /> },
    { id: "social_grid", category: "Buttons", size: "medium", component: <SocialGrid /> },
    { id: "uiverse_card", category: "Cards", size: "medium", component: <UIVerseCard /> },
    { id: "liquid_morph", category: "Loaders", size: "medium", component: <LiquidMorphLoader /> },
    { id: "hamster_loader", category: "Loaders", size: "medium", component: <HamsterLoader /> },

    // --- LOADERS ---
    { id: "truck_loader", category: "Loaders", component: <TruckLoader /> },
    { id: "newtons_cradle", category: "Loaders", component: <NewtonsCradleLoader /> },
    { id: "hand_loader", category: "Loaders", component: <HandLoader /> },
    { id: "ecg_loader", category: "Loaders", component: <ECGLoader /> },
    { id: "sleeping_loader", category: "Loaders", component: <SleepingLoader /> },
    { id: "tower_loader", category: "Loaders", component: <TowerLoader /> },
    { id: "jumping_box", category: "Loaders", component: <JumpingBoxLoader /> },
    { id: "word_spinner", category: "Loaders", component: <WordSpinnerLoader /> },
    { id: "walking_man", category: "Loaders", size: "large", component: <WalkingManLoader /> },
    { id: "geometric_spinner", category: "Loaders", component: <GeometricSpinnerLoader /> },
    { id: "dot_pulse", category: "Loaders", component: <DotPulseLoader /> },
    { id: "three_body", category: "Loaders", component: <ThreeBodyLoader /> },
    { id: "coffee_loader", category: "Loaders", component: <CoffeeLoader /> },
    { id: "hiding_seaking", category: "Loaders", component: <HidingSeakingLoader /> },
    { id: "rolling_rock", category: "Loaders", component: <RollingRockLoader /> },
    { id: "classic_spinner", category: "Loaders", component: <ClassicSpinnerLoader /> },
    { id: "car_loader", category: "Loaders", component: <CarLoader /> },
    { id: "flowing_spinner", category: "Loaders", component: <FlowingSpinnerLoader /> },
    { id: "circular_pulse", category: "Loaders", component: <CircularPulseLoader /> },
    { id: "crystal_loader", category: "Loaders", component: <CrystalLoader /> },
    { id: "gyro_loader", category: "Loaders", component: <GyroLoader /> },
    { id: "banter_loader", category: "Loaders", component: <BanterLoader /> },
    { id: "matrix_loader", category: "Loaders", component: <MatrixLoader /> },
    { id: "ghost_loader", category: "Loaders", component: <GhostLoader /> },
    { id: "holographic_loader", category: "Loaders", component: <HolographicLoader /> },
    { id: "bubble_loader", category: "Loaders", component: <BubbleLoader /> },
    { id: "bouncing_ball", category: "Loaders", component: <BouncingBallLoader /> },
    { id: "music_equalizer", category: "Loaders", component: <MusicEqualizerLoader /> },
    { id: "olympic_rings", category: "Loaders", component: <OlympicRingsLoader /> },
    { id: "cloud_sync", category: "Loaders", component: <CloudSyncLoader /> },
    { id: "speeder_loader", category: "Loaders", component: <SpeederLoader /> },
    { id: "cola_loader", category: "Loaders", component: <ColaLoader /> },
    { id: "push_loader", category: "Loaders", component: <PushLoader /> },
    { id: "geometric_shapes", category: "Loaders", size: "medium", component: <GeometricShapesLoader /> },
    { id: "gradient_spin", category: "Loaders", component: <GradientSpinLoader /> },
    { id: "jumping_circles", category: "Loaders", component: <JumpingCirclesLoader /> },
    { id: "circular_spinner", category: "Loaders", component: <CircularSpinnerLoader /> },
    { id: "triangle_loader", category: "Loaders", component: <TriangleLoader /> },
    { id: "modern_word", category: "Loaders", component: <ModernWordLoader /> },
    { id: "gradient_ring", category: "Loaders", component: <GradientRingLoader /> },
    { id: "liquid_loader", category: "Loaders", component: <LiquidLoader /> },
    { id: "pegtop_loader", category: "Loaders", component: <PegtopLoader /> },
    { id: "ai_matrix", category: "Loaders", component: <AIMatrixLoader /> },
    { id: "soap_bubble", category: "Loaders", component: <SoapBubbleLoader /> },
    { id: "honeycomb_loader", category: "Loaders", component: <HoneycombLoader /> },
    { id: "atomic_loader", category: "Loaders", component: <AtomicLoader /> },
    { id: "clean_circle", category: "Loaders", component: <CleanCircleLoader /> },

    // --- BUTTONS ---
    { id: "share_button", category: "Buttons", component: <ShareButton /> },
    { id: "payment_button", category: "Buttons", component: <PaymentButton /> },
    { id: "credits_button", category: "Buttons", component: <CreditsButton /> },
    { id: "openai_button", category: "Buttons", component: <OpenAIButton /> },
    { id: "like_button", category: "Buttons", component: <LikeButton /> },
    { id: "shine_button", category: "Buttons", component: <ShineButton /> },
    { id: "nature_button", category: "Buttons", component: <NatureButton /> },
    { id: "play_now", category: "Buttons", component: <PlayNowButton /> },
    { id: "realism_button", category: "Buttons", component: <RealismButton /> },
    { id: "magnetic_button", category: "Buttons", component: <MagneticButton /> },
    { id: "voltage_button", category: "Buttons", component: <VoltageButton /> },
    { id: "unlock_pro", category: "Buttons", component: <UnlockProButton /> },
    { id: "pay_button", category: "Buttons", component: <PayButton /> },
    { id: "galaxy_button", category: "Buttons", component: <GalaxyButton /> },
    { id: "sketch_button", category: "Buttons", component: <SketchButton /> },
    { id: "cloud_save", category: "Buttons", component: <CloudSaveButton /> },
    { id: "scroll_down", category: "Buttons", component: <ScrollDownButton /> },
    { id: "codepen_button", category: "Buttons", component: <CodePenButton /> },
    { id: "whatsapp_button", category: "Buttons", component: <WhatsAppButton /> },
    { id: "star_button", category: "Buttons", component: <StarButton /> },
    { id: "rgb_button", category: "Buttons", component: <RGBButton /> },
    { id: "confetti_button", category: "Buttons", component: <ConfettiButton /> },
    { id: "rainbow_button", category: "Buttons", size: "medium", component: <RainbowButton /> },
    { id: "logout_button", category: "Buttons", component: <LogoutButton /> },
    { id: "social_platform_grid", category: "Buttons", size: "medium", component: <SocialPlatformGrid /> },

    // --- INPUTS ---
    { id: "day_night_switch", category: "Inputs", component: <DayNightSwitch /> },
    { id: "minecraft_switch", category: "Inputs", component: <MinecraftSwitch /> },
    { id: "pill_radio", category: "Inputs", size: "medium", component: <PillRadio /> },
    { id: "gooey_switch", category: "Inputs", component: <GooeySwitch /> },
    { id: "three_d_input", category: "Inputs", component: <ThreeDInput /> },
    { id: "soft_input", category: "Inputs", component: <SoftInput /> },
    { id: "sparkle_switch", category: "Inputs", component: <SparkleSwitch /> },
    { id: "theme_radio", category: "Inputs", component: <ThemeRadio /> },
    { id: "gradient_select", category: "Inputs", component: <GradientSelect /> },
    { id: "input_demo", category: "Inputs", component: <InputDemo /> },

    // --- CARDS ---
    { id: "folder_card", category: "Cards", component: <FolderCard /> },
    { id: "neon_gradient_card", category: "Cards", component: <NeonGradientCard /> },
    { id: "explosive_growth", category: "Cards", component: <ExplosiveGrowthCard /> },
    { id: "glass_card", category: "Cards", component: <GlassCard /> },
    { id: "recipe_card", category: "Cards", component: <RecipeCard /> },
    { id: "number_card", category: "Cards", component: <NumberCard /> },
    { id: "ethereum_card", category: "Cards", component: <EthereumCard /> },
    { id: "gradient_pricing", category: "Cards", component: <GradientPricingCard /> },
    { id: "matrix_cube", category: "Cards", component: <MatrixCube /> },

    // --- TEXT & TOOLTIPS ---
    { id: "tooltip_basic", category: "Tooltips", component: <Tooltip text="Magic Lab Tooltip" /> },
    { id: "glass_icons", category: "Text", size: "medium", component: <GlassIcons /> },
    { id: "map_tooltip", category: "Tooltips", component: <MapLocationTooltip /> },
    { id: "glitch_text", category: "Text", size: "medium", component: <GlitchText text="Vitor's Lab" /> },
    { id: "star_rating", category: "Text", component: <StarRating /> },
];

export default function UILibrary() {
    const [activeCategory, setActiveCategory] = useState("All");
    const { t } = useLanguage();

    const featuredComponent = components.find(c => c.featured);
    const otherComponents = components.filter(c => !c.featured && (activeCategory === "All" || c.category === activeCategory));

    return (
        <div className="min-h-screen bg-background font-sans relative overflow-hidden">
            {/* Laboratory Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <Navigation />

            <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        <Beaker className="size-3" />
                        Vitor's Lab
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-black tracking-tighter lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                    >
                        UI <span className="text-primary tracking-widest">LIBRARY</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        {t('uiLibrary.description')}
                    </motion.p>
                </div>

                {/* Featured Showcase */}
                {activeCategory === "All" && featuredComponent && (
                    <motion.section
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-2 mb-6 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
                            <Star className="size-4 text-yellow-500 fill-yellow-500" />
                            Featured Experiment
                        </div>
                        <div className="w-full h-[400px] lg:h-[500px]">
                            {featuredComponent.component}
                        </div>
                    </motion.section>
                )}

                {/* Categories & Stats */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 p-1.5 bg-muted/30 backdrop-blur-md rounded-2xl border border-white/5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2",
                                    activeCategory === cat
                                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-105"
                                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                )}
                            >
                                {cat === 'All' ? <Layout className="size-4" /> : <Filter className="size-4" />}
                                {t(`categories.${cat}`)}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/60">
                        <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                            SYSTEM_ACTIVE
                        </div>
                        <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 uppercase">
                            {components.length} Components Active
                        </div>
                    </div>
                </div>

                {/* Grid Styles */}
                <style>{`
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            grid-auto-rows: 320px;
            gap: 1.5rem;
          }
          @media (min-width: 1024px) {
            .bento-grid {
              grid-template-columns: repeat(4, 1fr);
            }
            .grid-item-medium { grid-column: span 2; }
            .grid-item-large { grid-column: span 2; grid-row: span 2; }
          }
          
          .ui-lib-item *, .ui-lib-item *::before, .ui-lib-item *::after {
            animation-play-state: paused !important;
          }
          .ui-lib-item:hover *, .ui-lib-item:hover *::before, .ui-lib-item:hover *::after {
            animation-play-state: running !important;
          }

          /* Responsive element containment */
          .lab-component-wrapper {
             width: 100%;
             height: 100%;
             position: relative;
             display: flex;
             align-items: center;
             justify-content: center;
             overflow: hidden;
          }

          .ui-lib-item .lab-component-wrapper > * {
             width: 100%;
             height: 100%;
          }
          
          /* Re-enable animations on hover */
           .ui-lib-item:hover .lab-component-wrapper > * * {
             animation-play-state: running !important;
           }

          /* Subtle idle animation */
          .ui-lib-item .idle-pulse {
             animation: soft-pulse 4s ease-in-out infinite;
          }
          @keyframes soft-pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.6; }
          }
        `}</style>

                {/* Bento Grid */}
                <motion.div
                    layout
                    className="bento-grid"
                >
                    <AnimatePresence mode="popLayout">
                        {otherComponents.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                    layout: { type: "spring", stiffness: 200, damping: 25 }
                                }}
                                className={cn(
                                    "ui-lib-item group relative overflow-hidden rounded-3xl border border-white/5 hover:border-primary/50 transition-colors duration-500",
                                    item.size === 'medium' ? 'grid-item-medium' : item.size === 'large' ? 'grid-item-large' : '',
                                    "bg-[#201E1D]" // Requested background color
                                )}
                            >
                                {/* Backdrop effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Component wrapper with scaling logic */}
                                <div className="relative z-10 size-full flex items-center justify-center p-0">
                                    <div className="lab-component-wrapper">
                                        {item.component}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {otherComponents.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-muted-foreground">{t('uiLibrary.noComponents')}</p>
                    </div>
                )}
            </main>
        </div>
    );
}
