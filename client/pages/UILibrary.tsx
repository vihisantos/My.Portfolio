import { useState, lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { TruckLoader } from "@/components/ui-library/TruckLoader";
import TruckLoaderCode from "@/components/ui-library/TruckLoader.tsx?raw";
import { NewtonsCradleLoader } from "@/components/ui-library/NewtonsCradleLoader";
import NewtonsCradleLoaderCode from "@/components/ui-library/NewtonsCradleLoader.tsx?raw";
import { HandLoader } from "@/components/ui-library/HandLoader";
import HandLoaderCode from "@/components/ui-library/HandLoader.tsx?raw";
import { ECGLoader } from "@/components/ui-library/ECGLoader";
import ECGLoaderCode from "@/components/ui-library/ECGLoader.tsx?raw";
import { SleepingLoader } from "@/components/ui-library/SleepingLoader";
import SleepingLoaderCode from "@/components/ui-library/SleepingLoader.tsx?raw";
import { TowerLoader } from "@/components/ui-library/TowerLoader";
import TowerLoaderCode from "@/components/ui-library/TowerLoader.tsx?raw";
import { JumpingBoxLoader } from "@/components/ui-library/JumpingBoxLoader";
import { WordSpinnerLoader } from "@/components/ui-library/WordSpinnerLoader";
// Regular imports removing lazied ones to avoid duplicates
import { ShareButton } from "@/components/ui-library/ShareButton";
import { PaymentButton } from "@/components/ui-library/PaymentButton";
import { CreditsButton } from "@/components/ui-library/CreditsButton";
import { OpenAIButton } from "@/components/ui-library/OpenAIButton";
import { WalkingManLoader } from "@/components/ui-library/WalkingManLoader";
import { GeometricSpinnerLoader } from "@/components/ui-library/GeometricSpinnerLoader";
import { DotPulseLoader } from "@/components/ui-library/DotPulseLoader";
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
// Removed MatrixLoader import
import { HamsterLoader } from "@/components/ui-library/HamsterLoader";
import { ShineButton } from "@/components/ui-library/ShineButton";
import { Tooltip } from "@/components/ui-library/Tooltip";
import { GlassIcons } from "@/components/ui-library/GlassIcons";
import { SocialGrid } from "@/components/ui-library/SocialGrid";
import { GhostLoader } from "@/components/ui-library/GhostLoader";
// Removed HolographicLoader import
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
// Removed GalaxyButton import
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
// Removed MagicBento import
import { ConfettiButton } from "@/components/ui-library/ConfettiButton";
import { RainbowButton } from "@/components/ui-library/RainbowButton";
// Removed SpotlightCard import
// Removed TiltCard import
import { LiquidMorphLoader } from "@/components/ui-library/LiquidMorphLoader";
import { AtomicLoader } from "@/components/ui-library/AtomicLoader";
import { CleanCircleLoader } from "@/components/ui-library/CleanCircleLoader";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { ComponentShowcase } from "@/components/ui-library/ComponentShowcase";
import { Star, Sparkles, Beaker, Layout, Filter } from "lucide-react";
// Lazy load heavy components
const SpotlightCard = lazy(() => import("@/components/ui-library/SpotlightCard").then(module => ({ default: module.SpotlightCard })));
const MagicBento = lazy(() => import("@/components/ui-library/MagicBento").then(module => ({ default: module.MagicBento })));
const TiltCard = lazy(() => import("@/components/ui-library/TiltCard").then(module => ({ default: module.TiltCard })));
const MatrixLoader = lazy(() => import("@/components/ui-library/MatrixLoader").then(module => ({ default: module.MatrixLoader })));
const HolographicLoader = lazy(() => import("@/components/ui-library/HolographicLoader").then(module => ({ default: module.HolographicLoader })));
const ThreeBodyLoader = lazy(() => import("@/components/ui-library/ThreeBodyLoader").then(module => ({ default: module.ThreeBodyLoader })));
const GalaxyButton = lazy(() => import("@/components/ui-library/GalaxyButton").then(module => ({ default: module.GalaxyButton })));

// Code Imports
import SpotlightCardCode from "@/components/ui-library/SpotlightCard.tsx?raw";
import MagicBentoCode from "@/components/ui-library/MagicBento.tsx?raw";
import TiltCardCode from "@/components/ui-library/TiltCard.tsx?raw";
import Error404CardCode from "@/components/ui-library/Error404Card.tsx?raw";
import TerminalCardCode from "@/components/ui-library/TerminalCard.tsx?raw";
import CodeEditorCardCode from "@/components/ui-library/CodeEditorCard.tsx?raw";
import SocialGridCode from "@/components/ui-library/SocialGrid.tsx?raw";
import UIVerseCardCode from "@/components/ui-library/UIVerseCard.tsx?raw";
import LiquidMorphLoaderCode from "@/components/ui-library/LiquidMorphLoader.tsx?raw";
import HamsterLoaderCode from "@/components/ui-library/HamsterLoader.tsx?raw";
import MatrixLoaderCode from "@/components/ui-library/MatrixLoader.tsx?raw";
import HolographicLoaderCode from "@/components/ui-library/HolographicLoader.tsx?raw";
import ThreeBodyLoaderCode from "@/components/ui-library/ThreeBodyLoader.tsx?raw";
import GalaxyButtonCode from "@/components/ui-library/GalaxyButton.tsx?raw";
import JumpingBoxLoaderCode from "@/components/ui-library/JumpingBoxLoader.tsx?raw";
import WordSpinnerLoaderCode from "@/components/ui-library/WordSpinnerLoader.tsx?raw";
import WalkingManLoaderCode from "@/components/ui-library/WalkingManLoader.tsx?raw";
import GeometricSpinnerLoaderCode from "@/components/ui-library/GeometricSpinnerLoader.tsx?raw";
import DotPulseLoaderCode from "@/components/ui-library/DotPulseLoader.tsx?raw";
import CoffeeLoaderCode from "@/components/ui-library/CoffeeLoader.tsx?raw";
// Remaining Loaders
import HidingSeakingLoaderCode from "@/components/ui-library/HidingSeakingLoader.tsx?raw";
import RollingRockLoaderCode from "@/components/ui-library/RollingRockLoader.tsx?raw";
import ClassicSpinnerLoaderCode from "@/components/ui-library/ClassicSpinnerLoader.tsx?raw";
import CarLoaderCode from "@/components/ui-library/CarLoader.tsx?raw";
import FlowingSpinnerLoaderCode from "@/components/ui-library/FlowingSpinnerLoader.tsx?raw";
import CircularPulseLoaderCode from "@/components/ui-library/CircularPulseLoader.tsx?raw";
import CrystalLoaderCode from "@/components/ui-library/CrystalLoader.tsx?raw";
import GyroLoaderCode from "@/components/ui-library/GyroLoader.tsx?raw";
import BanterLoaderCode from "@/components/ui-library/BanterLoader.tsx?raw";
import GhostLoaderCode from "@/components/ui-library/GhostLoader.tsx?raw";
import BubbleLoaderCode from "@/components/ui-library/BubbleLoader.tsx?raw";
import BouncingBallLoaderCode from "@/components/ui-library/BouncingBallLoader.tsx?raw";
import MusicEqualizerLoaderCode from "@/components/ui-library/MusicEqualizerLoader.tsx?raw";
import OlympicRingsLoaderCode from "@/components/ui-library/OlympicRingsLoader.tsx?raw";
import CloudSyncLoaderCode from "@/components/ui-library/CloudSyncLoader.tsx?raw";
import SpeederLoaderCode from "@/components/ui-library/SpeederLoader.tsx?raw";
import ColaLoaderCode from "@/components/ui-library/ColaLoader.tsx?raw";
import PushLoaderCode from "@/components/ui-library/PushLoader.tsx?raw";
import GeometricShapesLoaderCode from "@/components/ui-library/GeometricShapesLoader.tsx?raw";
import GradientSpinLoaderCode from "@/components/ui-library/GradientSpinLoader.tsx?raw";
import JumpingCirclesLoaderCode from "@/components/ui-library/JumpingCirclesLoader.tsx?raw";
import CircularSpinnerLoaderCode from "@/components/ui-library/CircularSpinnerLoader.tsx?raw";
import TriangleLoaderCode from "@/components/ui-library/TriangleLoader.tsx?raw";
import ModernWordLoaderCode from "@/components/ui-library/ModernWordLoader.tsx?raw";
import GradientRingLoaderCode from "@/components/ui-library/GradientRingLoader.tsx?raw";
import LiquidLoaderCode from "@/components/ui-library/LiquidLoader.tsx?raw";
import PegtopLoaderCode from "@/components/ui-library/PegtopLoader.tsx?raw";
import AIMatrixLoaderCode from "@/components/ui-library/AIMatrixLoader.tsx?raw";
import SoapBubbleLoaderCode from "@/components/ui-library/SoapBubbleLoader.tsx?raw";
import HoneycombLoaderCode from "@/components/ui-library/HoneycombLoader.tsx?raw";
import AtomicLoaderCode from "@/components/ui-library/AtomicLoader.tsx?raw";
import CleanCircleLoaderCode from "@/components/ui-library/CleanCircleLoader.tsx?raw";
// Buttons
import ShareButtonCode from "@/components/ui-library/ShareButton.tsx?raw";
import PaymentButtonCode from "@/components/ui-library/PaymentButton.tsx?raw";
import CreditsButtonCode from "@/components/ui-library/CreditsButton.tsx?raw";
import OpenAIButtonCode from "@/components/ui-library/OpenAIButton.tsx?raw";
import LikeButtonCode from "@/components/ui-library/LikeButton.tsx?raw";
import ShineButtonCode from "@/components/ui-library/ShineButton.tsx?raw";
import NatureButtonCode from "@/components/ui-library/NatureButton.tsx?raw";
import PlayNowButtonCode from "@/components/ui-library/PlayNowButton.tsx?raw";
import RealismButtonCode from "@/components/ui-library/RealismButton.tsx?raw";
import MagneticButtonCode from "@/components/ui-library/MagneticButton.tsx?raw";
import VoltageButtonCode from "@/components/ui-library/VoltageButton.tsx?raw";
import UnlockProButtonCode from "@/components/ui-library/UnlockProButton.tsx?raw";
import PayButtonCode from "@/components/ui-library/PayButton.tsx?raw";
import SketchButtonCode from "@/components/ui-library/SketchButton.tsx?raw";
import CloudSaveButtonCode from "@/components/ui-library/CloudSaveButton.tsx?raw";
import ScrollDownButtonCode from "@/components/ui-library/ScrollDownButton.tsx?raw";
import CodePenButtonCode from "@/components/ui-library/CodePenButton.tsx?raw";
import WhatsAppButtonCode from "@/components/ui-library/WhatsAppButton.tsx?raw";
import StarButtonCode from "@/components/ui-library/StarButton.tsx?raw";
import StarRatingCode from "@/components/ui-library/StarRating.tsx?raw";
import RGBButtonCode from "@/components/ui-library/RGBButton.tsx?raw";
import ConfettiButtonCode from "@/components/ui-library/ConfettiButton.tsx?raw";
import RainbowButtonCode from "@/components/ui-library/RainbowButton.tsx?raw";
import LogoutButtonCode from "@/components/ui-library/LogoutButton.tsx?raw";
import SocialPlatformGridCode from "@/components/ui-library/SocialPlatformGrid.tsx?raw";
// Inputs
import DayNightSwitchCode from "@/components/ui-library/DayNightSwitch.tsx?raw";
import MinecraftSwitchCode from "@/components/ui-library/MinecraftSwitch.tsx?raw";
import PillRadioCode from "@/components/ui-library/PillRadio.tsx?raw";
import GooeySwitchCode from "@/components/ui-library/GooeySwitch.tsx?raw";
import ThreeDInputCode from "@/components/ui-library/ThreeDInput.tsx?raw";
import SoftInputCode from "@/components/ui-library/SoftInput.tsx?raw";
import SparkleSwitchCode from "@/components/ui-library/SparkleSwitch.tsx?raw";
import ThemeRadioCode from "@/components/ui-library/ThemeRadio.tsx?raw";
import GradientSelectCode from "@/components/ui-library/GradientSelect.tsx?raw";
import InputDemoCode from "@/components/ui-library/InputDemo.tsx?raw";
// Other Cards / Text
import FolderCardCode from "@/components/ui-library/FolderCard.tsx?raw";
import NeonGradientCardCode from "@/components/ui-library/NeonGradientCard.tsx?raw";
import ExplosiveGrowthCardCode from "@/components/ui-library/ExplosiveGrowthCard.tsx?raw";
import GlassCardCode from "@/components/ui-library/GlassCard.tsx?raw";
import RecipeCardCode from "@/components/ui-library/RecipeCard.tsx?raw";
import NumberCardCode from "@/components/ui-library/NumberCard.tsx?raw";
import EthereumCardCode from "@/components/ui-library/EthereumCard.tsx?raw";
import GradientPricingCardCode from "@/components/ui-library/GradientPricingCard.tsx?raw";
import MatrixCubeCode from "@/components/ui-library/MatrixCube.tsx?raw";
// Text & Tooltips
import TooltipBasicCode from "@/components/ui-library/Tooltip.tsx?raw";
import GlassIconsCode from "@/components/ui-library/GlassIcons.tsx?raw";
import GlitchTextCode from "@/components/ui-library/GlitchText.tsx?raw";
import MapLocationTooltipCode from "@/components/ui-library/MapLocationTooltip.tsx?raw";

const categories = ["All", "Buttons", "Loaders", "Inputs", "Cards", "Text", "Tooltips"];

const components = [
    // --- DESTAQUE / LAYOUT ESPECIAL ---
    { id: "spotlight_card", category: "Cards", size: "large", featured: true, code: SpotlightCardCode, component: <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.3)"><PremiumDesignCard /></SpotlightCard> },
    { id: "magic_bento", category: "Cards", size: "large", code: MagicBentoCode, component: <MagicBento /> },
    { id: "tilt_card", category: "Cards", size: "medium", code: TiltCardCode, component: <TiltCard><h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">3D Interactive Tilt</h3></TiltCard> },
    { id: "error_404_card", category: "Cards", size: "medium", code: Error404CardCode, component: <Error404Card /> },
    { id: "terminal_card", category: "Cards", size: "medium", code: TerminalCardCode, component: <TerminalCard /> },
    { id: "code_editor_card", category: "Cards", size: "medium", code: CodeEditorCardCode, component: <CodeEditorCard /> },
    { id: "social_grid", category: "Buttons", size: "medium", code: SocialGridCode, component: <SocialGrid /> },
    { id: "uiverse_card", category: "Cards", size: "medium", code: UIVerseCardCode, component: <UIVerseCard /> },
    { id: "liquid_morph", category: "Loaders", size: "medium", code: LiquidMorphLoaderCode, component: <LiquidMorphLoader /> },
    { id: "hamster_loader", category: "Loaders", size: "medium", code: HamsterLoaderCode, component: <HamsterLoader /> },

    // --- CARREGADORES (LOADERS) ---
    { id: "truck_loader", title: "Truck Loader", category: "Loaders", size: "medium", code: TruckLoaderCode, component: <TruckLoader /> },
    { id: "newtons_cradle", title: "Newton's Cradle", category: "Loaders", size: "medium", code: NewtonsCradleLoaderCode, component: <NewtonsCradleLoader /> },
    { id: "hand_loader", title: "Hand Loader", category: "Loaders", size: "small", code: HandLoaderCode, component: <HandLoader /> },
    { id: "ecg_loader", title: "ECG Loader", category: "Loaders", size: "medium", code: ECGLoaderCode, component: <ECGLoader /> },
    { id: "sleeping_loader", title: "Sleeping Loader", category: "Loaders", size: "medium", code: SleepingLoaderCode, component: <SleepingLoader /> },
    { id: "tower_loader", title: "Tower Loader", category: "Loaders", size: "small", code: TowerLoaderCode, component: <TowerLoader /> },
    { id: "jumping_box", category: "Loaders", code: JumpingBoxLoaderCode, component: <JumpingBoxLoader /> },
    { id: "word_spinner", category: "Loaders", code: WordSpinnerLoaderCode, component: <WordSpinnerLoader /> },
    { id: "walking_man", category: "Loaders", size: "large", code: WalkingManLoaderCode, component: <WalkingManLoader /> },
    { id: "geometric_spinner", category: "Loaders", code: GeometricSpinnerLoaderCode, component: <GeometricSpinnerLoader /> },
    { id: "dot_pulse", category: "Loaders", code: DotPulseLoaderCode, component: <DotPulseLoader /> },
    { id: "three_body", category: "Loaders", code: ThreeBodyLoaderCode, component: <ThreeBodyLoader /> },
    { id: "coffee_loader", category: "Loaders", code: CoffeeLoaderCode, component: <CoffeeLoader /> },
    { id: "hiding_seaking", category: "Loaders", code: HidingSeakingLoaderCode, component: <HidingSeakingLoader /> },
    { id: "rolling_rock", category: "Loaders", code: RollingRockLoaderCode, component: <RollingRockLoader /> },
    { id: "classic_spinner", category: "Loaders", code: ClassicSpinnerLoaderCode, component: <ClassicSpinnerLoader /> },
    { id: "car_loader", category: "Loaders", code: CarLoaderCode, component: <CarLoader /> },
    { id: "flowing_spinner", category: "Loaders", code: FlowingSpinnerLoaderCode, component: <FlowingSpinnerLoader /> },
    { id: "circular_pulse", category: "Loaders", code: CircularPulseLoaderCode, component: <CircularPulseLoader /> },
    { id: "crystal_loader", category: "Loaders", code: CrystalLoaderCode, component: <CrystalLoader /> },
    { id: "gyro_loader", category: "Loaders", code: GyroLoaderCode, component: <GyroLoader /> },
    { id: "banter_loader", category: "Loaders", code: BanterLoaderCode, component: <BanterLoader /> },
    { id: "matrix_loader", category: "Loaders", code: MatrixLoaderCode, component: <MatrixLoader /> },
    { id: "ghost_loader", category: "Loaders", code: GhostLoaderCode, component: <GhostLoader /> },
    { id: "holographic_loader", category: "Loaders", code: HolographicLoaderCode, component: <HolographicLoader /> },
    { id: "bubble_loader", category: "Loaders", code: BubbleLoaderCode, component: <BubbleLoader /> },
    { id: "bouncing_ball", category: "Loaders", code: BouncingBallLoaderCode, component: <BouncingBallLoader /> },
    { id: "music_equalizer", category: "Loaders", code: MusicEqualizerLoaderCode, component: <MusicEqualizerLoader /> },
    { id: "olympic_rings", category: "Loaders", code: OlympicRingsLoaderCode, component: <OlympicRingsLoader /> },
    { id: "cloud_sync", category: "Loaders", code: CloudSyncLoaderCode, component: <CloudSyncLoader /> },
    { id: "speeder_loader", category: "Loaders", code: SpeederLoaderCode, component: <SpeederLoader /> },
    { id: "cola_loader", category: "Loaders", code: ColaLoaderCode, component: <ColaLoader /> },
    { id: "push_loader", category: "Loaders", code: PushLoaderCode, component: <PushLoader /> },
    { id: "geometric_shapes", category: "Loaders", size: "medium", code: GeometricShapesLoaderCode, component: <GeometricShapesLoader /> },
    { id: "gradient_spin", category: "Loaders", code: GradientSpinLoaderCode, component: <GradientSpinLoader /> },
    { id: "jumping_circles", category: "Loaders", code: JumpingCirclesLoaderCode, component: <JumpingCirclesLoader /> },
    { id: "circular_spinner", category: "Loaders", code: CircularSpinnerLoaderCode, component: <CircularSpinnerLoader /> },
    { id: "triangle_loader", category: "Loaders", code: TriangleLoaderCode, component: <TriangleLoader /> },
    { id: "modern_word", category: "Loaders", code: ModernWordLoaderCode, component: <ModernWordLoader /> },
    { id: "gradient_ring", category: "Loaders", code: GradientRingLoaderCode, component: <GradientRingLoader /> },
    { id: "liquid_loader", category: "Loaders", code: LiquidLoaderCode, component: <LiquidLoader /> },
    { id: "pegtop_loader", category: "Loaders", code: PegtopLoaderCode, component: <PegtopLoader /> },
    { id: "ai_matrix", category: "Loaders", code: AIMatrixLoaderCode, component: <AIMatrixLoader /> },
    { id: "soap_bubble", category: "Loaders", code: SoapBubbleLoaderCode, component: <SoapBubbleLoader /> },
    { id: "honeycomb_loader", category: "Loaders", code: HoneycombLoaderCode, component: <HoneycombLoader /> },
    { id: "atomic_loader", category: "Loaders", code: AtomicLoaderCode, component: <AtomicLoader /> },
    { id: "clean_circle", category: "Loaders", code: CleanCircleLoaderCode, component: <CleanCircleLoader /> },

    // --- BOTÕES ---
    { id: "share_button", category: "Buttons", code: ShareButtonCode, component: <ShareButton /> },
    { id: "payment_button", category: "Buttons", code: PaymentButtonCode, component: <PaymentButton /> },
    { id: "credits_button", category: "Buttons", code: CreditsButtonCode, component: <CreditsButton /> },
    { id: "openai_button", category: "Buttons", code: OpenAIButtonCode, component: <OpenAIButton /> },
    { id: "like_button", category: "Buttons", code: LikeButtonCode, component: <LikeButton /> },
    { id: "shine_button", category: "Buttons", code: ShineButtonCode, component: <ShineButton /> },
    { id: "nature_button", category: "Buttons", code: NatureButtonCode, component: <NatureButton /> },
    { id: "play_now", category: "Buttons", code: PlayNowButtonCode, component: <PlayNowButton /> },
    { id: "realism_button", category: "Buttons", code: RealismButtonCode, component: <RealismButton /> },
    { id: "magnetic_button", category: "Buttons", code: MagneticButtonCode, component: <MagneticButton /> },
    { id: "voltage_button", category: "Buttons", code: VoltageButtonCode, component: <VoltageButton /> },
    { id: "unlock_pro", category: "Buttons", code: UnlockProButtonCode, component: <UnlockProButton /> },
    { id: "pay_button", category: "Buttons", code: PayButtonCode, component: <PayButton /> },
    { id: "galaxy_button", category: "Buttons", code: GalaxyButtonCode, component: <GalaxyButton /> },
    { id: "sketch_button", category: "Buttons", code: SketchButtonCode, component: <SketchButton /> },
    { id: "cloud_save", category: "Buttons", code: CloudSaveButtonCode, component: <CloudSaveButton /> },
    { id: "scroll_down", category: "Buttons", code: ScrollDownButtonCode, component: <ScrollDownButton /> },
    { id: "codepen_button", category: "Buttons", code: CodePenButtonCode, component: <CodePenButton /> },
    { id: "whatsapp_button", category: "Buttons", code: WhatsAppButtonCode, component: <WhatsAppButton /> },
    { id: "star_button", category: "Buttons", code: StarButtonCode, component: <StarButton /> },
    { id: "rgb_button", category: "Buttons", code: RGBButtonCode, component: <RGBButton /> },
    { id: "confetti_button", category: "Buttons", code: ConfettiButtonCode, component: <ConfettiButton /> },
    { id: "rainbow_button", category: "Buttons", size: "medium", code: RainbowButtonCode, component: <RainbowButton /> },
    { id: "logout_button", category: "Buttons", code: LogoutButtonCode, component: <LogoutButton /> },
    { id: "social_platform_grid", category: "Buttons", size: "medium", code: SocialPlatformGridCode, component: <SocialPlatformGrid /> },

    // --- INPUTS ---
    { id: "day_night_switch", category: "Inputs", code: DayNightSwitchCode, component: <DayNightSwitch /> },
    { id: "minecraft_switch", category: "Inputs", code: MinecraftSwitchCode, component: <MinecraftSwitch /> },
    { id: "pill_radio", category: "Inputs", size: "medium", code: PillRadioCode, component: <PillRadio /> },
    { id: "gooey_switch", category: "Inputs", code: GooeySwitchCode, component: <GooeySwitch /> },
    { id: "three_d_input", category: "Inputs", code: ThreeDInputCode, component: <ThreeDInput /> },
    { id: "soft_input", category: "Inputs", code: SoftInputCode, component: <SoftInput /> },
    { id: "sparkle_switch", category: "Inputs", code: SparkleSwitchCode, component: <SparkleSwitch /> },
    { id: "theme_radio", category: "Inputs", code: ThemeRadioCode, component: <ThemeRadio /> },
    { id: "gradient_select", category: "Inputs", code: GradientSelectCode, component: <GradientSelect /> },
    { id: "input_demo", category: "Inputs", code: InputDemoCode, component: <InputDemo /> },

    // --- CARTÕES (CARDS) ---
    { id: "folder_card", category: "Cards", code: FolderCardCode, component: <FolderCard /> },
    { id: "neon_gradient_card", category: "Cards", code: NeonGradientCardCode, component: <NeonGradientCard /> },
    { id: "explosive_growth", category: "Cards", code: ExplosiveGrowthCardCode, component: <ExplosiveGrowthCard /> },
    { id: "glass_card", category: "Cards", code: GlassCardCode, component: <GlassCard /> },
    { id: "recipe_card", category: "Cards", code: RecipeCardCode, component: <RecipeCard /> },
    { id: "number_card", category: "Cards", code: NumberCardCode, component: <NumberCard /> },
    { id: "ethereum_card", category: "Cards", code: EthereumCardCode, component: <EthereumCard /> },
    { id: "gradient_pricing", category: "Cards", code: GradientPricingCardCode, component: <GradientPricingCard /> },
    { id: "matrix_cube", category: "Cards", code: MatrixCubeCode, component: <MatrixCube /> },

    // --- TEXTO & TOOLTIPS ---
    { id: "tooltip_basic", category: "Tooltips", code: TooltipBasicCode, component: <Tooltip text="Magic Lab Tooltip" /> },
    { id: "glass_icons", category: "Text", size: "medium", code: GlassIconsCode, component: <GlassIcons /> },
    { id: "map_tooltip", category: "Tooltips", code: MapLocationTooltipCode, component: <MapLocationTooltip /> },
    { id: "glitch_text", category: "Text", size: "medium", code: GlitchTextCode, component: <GlitchText text="Vitor's Lab" /> },
    { id: "star_rating", category: "Text", code: StarRatingCode, component: <StarRating /> },
];

export default function UILibrary() {
    const [activeCategory, setActiveCategory] = useState("All");
    const { t } = useLanguage();

    const featuredComponent = components.find(c => c.featured);
    const otherComponents = components.filter(c => !c.featured && (activeCategory === "All" || c.category === activeCategory));

    return (
        <div className="min-h-screen bg-background font-sans relative overflow-hidden">
            <SEO
                title={t('seo.uiLibrary.title')}
                description={t('seo.uiLibrary.description')}
            />
            {/* Elementos de Fundo do Laboratório */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <Navigation />

            <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
                {/* Seção de Cabeçalho */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        <Beaker className="size-3" />
                        {t('uiLibrary.badge')}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-black tracking-tighter lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                    >
                        {t('uiLibrary.titleUI')} <span className="text-primary tracking-widest">{t('uiLibrary.titleLibrary')}</span>
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

                {/* Vitrine em Destaque */}
                {activeCategory === "All" && featuredComponent && (
                    <motion.section
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-2 mb-6 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
                            <Star className="size-4 text-yellow-500 fill-yellow-500" />
                            {t('uiLibrary.featuredExperiment')}
                        </div>
                        <div className="w-full h-[400px] lg:h-[500px]">
                            {featuredComponent.component}
                        </div>
                    </motion.section>
                )}

                {/* Categorias e Estatísticas */}
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
                            {t('uiLibrary.systemActive')}
                        </div>
                        <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 uppercase">
                            {components.length} {t('uiLibrary.componentsActive')}
                        </div>
                    </div>
                </div>

                {/* Estilos de Grade */}
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

          /* Contenção de elementos responsivos */
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
          
          /* Reativar animações ao passar o mouse */
           .ui-lib-item:hover .lab-component-wrapper > * * {
             animation-play-state: running !important;
           }

          /* Animação ociosa sutil */
          .ui-lib-item .idle-pulse {
             animation: soft-pulse 4s ease-in-out infinite;
          }
          @keyframes soft-pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.6; }
          }
        `}</style>

                {/* Grade Bento */}
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
                                    "bg-[#201E1D]" // Cor de fundo solicitada
                                )}
                            >
                                {/* Efeito de Fundo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Wrapper do componente com lógica de escala */}
                                <div className="relative z-10 size-full flex items-center justify-center p-0">
                                    <ComponentShowcase
                                        title={item.title || item.id.replace(/_/g, " ")}
                                        code={item.code || "// Code not available yet"}
                                        className="size-full border-0 bg-transparent shadow-none"
                                        scale={1} // Grid handles scaling
                                    >
                                        <div className="lab-component-wrapper">
                                            <Suspense fallback={<div className="flex items-center justify-center h-full w-full text-white/20 text-sm">Loading...</div>}>
                                                {item.component}
                                            </Suspense>
                                        </div>
                                    </ComponentShowcase>
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
