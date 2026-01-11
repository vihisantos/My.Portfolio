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
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = ["All", "Buttons", "Loaders", "Inputs", "Cards", "Text", "Tooltips"];

const components = [
    { id: "truck-loader", category: "Loaders", component: <TruckLoader /> },
    { id: "newtons-cradle", category: "Loaders", component: <NewtonsCradleLoader /> },
    { id: "hand-loader", category: "Loaders", component: <HandLoader /> },
    { id: "ecg-loader", category: "Loaders", component: <ECGLoader /> },
    { id: "sleeping-loader", category: "Loaders", component: <SleepingLoader /> },
    { id: "tower-loader", category: "Loaders", component: <TowerLoader /> },
    { id: "jumping-box-loader", category: "Loaders", component: <JumpingBoxLoader /> },
    { id: "word-spinner-loader", category: "Loaders", component: <WordSpinnerLoader /> },
    { id: "share-button", category: "Buttons", component: <ShareButton /> },
    { id: "payment-button", category: "Buttons", component: <PaymentButton /> },
    { id: "credits-button", category: "Buttons", component: <CreditsButton /> },
    { id: "openai-button", category: "Buttons", component: <OpenAIButton /> },
    { id: "walking-man-loader", category: "Loaders", component: <WalkingManLoader /> },
    { id: "geometric-spinner", category: "Loaders", component: <GeometricSpinnerLoader /> },
    { id: "dot-pulse", category: "Loaders", component: <DotPulseLoader /> },
    { id: "three-body", category: "Loaders", component: <ThreeBodyLoader /> },
    { id: "coffee-loader", category: "Loaders", component: <CoffeeLoader /> },
    { id: "hiding-seaking-loader", category: "Loaders", component: <HidingSeakingLoader /> },
    { id: "rolling-rock-loader", category: "Loaders", component: <RollingRockLoader /> },
    { id: "classic-spinner-loader", category: "Loaders", component: <ClassicSpinnerLoader /> },
    { id: "car-loader", category: "Loaders", component: <CarLoader /> },
    { id: "flowing-spinner-loader", category: "Loaders", component: <FlowingSpinnerLoader /> },
    { id: "circular-pulse-loader", category: "Loaders", component: <CircularPulseLoader /> },
    { id: "crystal-loader", category: "Loaders", component: <CrystalLoader /> },
    { id: "gyro-loader", category: "Loaders", component: <GyroLoader /> },
    { id: "day-night-switch", category: "Inputs", component: <DayNightSwitch /> },
    { id: "banter-loader", category: "Loaders", component: <BanterLoader /> },
    { id: "matrix-loader", category: "Loaders", component: <MatrixLoader /> },
    { id: "hamster-loader", category: "Loaders", component: <HamsterLoader /> },
    { id: "shine-button", category: "Buttons", component: <ShineButton /> },
    { id: "glass-icons", category: "Buttons", component: <GlassIcons /> },
    { id: "social-grid", category: "Buttons", component: <SocialGrid /> },
    { id: "tooltip", category: "Buttons", component: <Tooltip /> },
    { id: "ghost-loader", category: "Loaders", component: <GhostLoader /> },
    { id: "holographic-loader", category: "Loaders", component: <HolographicLoader /> },
    { id: "bubble-loader", category: "Loaders", component: <BubbleLoader /> },
    { id: "bouncing-ball-loader", category: "Loaders", component: <BouncingBallLoader /> },
    { id: "music-equalizer-loader", category: "Loaders", component: <MusicEqualizerLoader /> },
    { id: "olympic-rings-loader", category: "Loaders", component: <OlympicRingsLoader /> },
    { id: "cloud-sync-loader", category: "Loaders", component: <CloudSyncLoader /> },
    { id: "speeder-loader", category: "Loaders", component: <SpeederLoader /> },
    { id: "minecraft-switch", category: "Inputs", component: <MinecraftSwitch /> },
    { id: "pill-radio", category: "Inputs", component: <PillRadio /> },
    { id: "gooey-switch", category: "Inputs", component: <GooeySwitch /> },
    { id: "map-location-tooltip", category: "Tooltips", component: <MapLocationTooltip /> },
    { id: "threed-input", category: "Inputs", component: <ThreeDInput /> },
    { id: "push-loader", category: "Loaders", component: <PushLoader /> },
    { id: "geometric-shapes-loader", category: "Loaders", component: <GeometricShapesLoader /> },
    { id: "gradient-spin-loader", category: "Loaders", component: <GradientSpinLoader /> },
    { id: "jumping-circles-loader", category: "Loaders", component: <JumpingCirclesLoader /> },
    { id: "error-404-card", category: "Cards", component: <Error404Card /> },
    { id: "nature-button", category: "Buttons", component: <NatureButton /> },
    { id: "circular-spinner", category: "Loaders", component: <CircularSpinnerLoader /> },
    { id: "triangle-loader", category: "Loaders", component: <TriangleLoader /> },
    { id: "modern-word-loader", category: "Loaders", component: <ModernWordLoader /> },
    { id: "play-now-button", category: "Buttons", component: <PlayNowButton /> },
    { id: "gradient-ring-loader", category: "Loaders", component: <GradientRingLoader /> },
    { id: "folder-card", category: "Cards", component: <FolderCard /> },
    { id: "cola-loader", category: "Loaders", component: <ColaLoader /> },
    { id: "social-platform-grid", category: "Buttons", component: <SocialPlatformGrid /> },
    { id: "input-demo", category: "Inputs", component: <InputDemo /> },
    { id: "realism-button", category: "Buttons", component: <RealismButton /> },
    { id: "glitch-text", category: "Text", component: <GlitchText /> },
    { id: "magnetic-button", category: "Buttons", component: <MagneticButton /> },
    { id: "galaxy-button", category: "Buttons", component: <GalaxyButton /> },
    { id: "neon-gradient-card", category: "Cards", component: <NeonGradientCard /> },
    { id: "explosive-growth-card", category: "Cards", component: <ExplosiveGrowthCard /> },
    { id: "glass-card", category: "Cards", component: <GlassCard /> },
    { id: "recipe-card", category: "Cards", component: <RecipeCard /> },
    { id: "number-card", category: "Cards", component: <NumberCard /> },
    { id: "uiverse-card", category: "Cards", component: <UIVerseCard /> },
    { id: "terminal-card", category: "Cards", component: <TerminalCard /> },
    { id: "code-editor-card", category: "Cards", component: <CodeEditorCard /> },
    { id: "ethereum-card", category: "Cards", component: <EthereumCard /> },
    { id: "gradient-pricing-card", category: "Cards", component: <GradientPricingCard /> },
    { id: "premium-design-card", category: "Cards", component: <PremiumDesignCard /> },
    { id: "matrix-cube", category: "Animations", component: <MatrixCube /> },
    { id: "soft-input", category: "Text", component: <SoftInput /> },
    { id: "gradient-select", category: "Text", component: <GradientSelect /> },
    { id: "theme-radio", category: "Inputs", component: <ThemeRadio /> },
    { id: "logout-button", category: "Buttons", component: <LogoutButton /> },
    { id: "sketch-button", category: "Buttons", component: <SketchButton /> },
    { id: "codepen-button", category: "Buttons", component: <CodePenButton /> },
    { id: "voltage-button", category: "Buttons", component: <VoltageButton /> },
    { id: "unlock-pro-button", category: "Buttons", component: <UnlockProButton /> },
    { id: "pay-button", category: "Buttons", component: <PayButton /> },
    { id: "cloud-save-button", category: "Buttons", component: <CloudSaveButton /> },
    { id: "like-button", category: "Buttons", component: <LikeButton /> },
    { id: "sparkle-switch", category: "Buttons", component: <SparkleSwitch /> },
    { id: "day-night-switch", category: "Buttons", component: <DayNightSwitch /> },
    { id: "whatsapp-button", category: "Buttons", component: <WhatsAppButton /> },
    { id: "star-button", category: "Buttons", component: <StarButton /> },
    { id: "star-rating", category: "Buttons", component: <StarRating /> },
    { id: "rgb-button", category: "Buttons", component: <RGBButton /> },
    { id: "scroll-down-button", category: "Buttons", component: <ScrollDownButton /> },
    { id: "liquid-loader", category: "Loaders", component: <LiquidLoader /> },
    { id: "pegtop-loader", category: "Loaders", component: <PegtopLoader /> },
    { id: "ai-matrix-loader", category: "Loaders", component: <AIMatrixLoader /> },
    { id: "soap-bubble-loader", category: "Loaders", component: <SoapBubbleLoader /> },
    { id: "honeycomb-loader", category: "Loaders", component: <HoneycombLoader /> },
];

export default function UILibrary() {
    const [activeCategory, setActiveCategory] = useState("All");
    const { t } = useLanguage();

    const filteredComponents = components.filter(
        (item) => activeCategory === "All" || item.category === activeCategory
    );

    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{t('uiLibrary.title')}</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t('uiLibrary.description')}
                    </p>
                </div>

                {/* Categories Filter */}
                <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex gap-2 p-1 bg-muted/50 rounded-full">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                                    activeCategory === cat
                                        ? "bg-background text-foreground shadow-sm scale-105"
                                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                                )}
                            >
                                {t(`categories.${cat}`)}
                            </button>
                        ))}
                    </div>
                </div>

                <style>{`
                    .ui-lib-item *, 
                    .ui-lib-item *::before, 
                    .ui-lib-item *::after {
                        animation-play-state: paused !important;
                    }
                    .ui-lib-item:hover *, 
                    .ui-lib-item:hover *::before, 
                    .ui-lib-item:hover *::after {
                        animation-play-state: running !important;
                    }
                `}</style>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredComponents.length > 0 ? (
                        filteredComponents.map((item) => (
                            <div key={item.id} className="animate-in fade-in zoom-in-95 duration-300 ui-lib-item group">
                                {item.component}
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-muted-foreground">{t('uiLibrary.noComponents')}</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
