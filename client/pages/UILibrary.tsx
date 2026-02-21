import { useState, lazy, Suspense } from "react";
import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { TruckLoader } from "@/components/ui-library/TruckLoader";
import TruckLoaderCode from "@/components/ui-library/TruckLoader.tsx?raw";
// import { NewtonsCradleLoader } from "@/components/ui-library/NewtonsCradleLoader";
// import NewtonsCradleLoaderCode from "@/components/ui-library/NewtonsCradleLoader.tsx?raw";
import { HandLoader } from "@/components/ui-library/HandLoader";
import HandLoaderCode from "@/components/ui-library/HandLoader.tsx?raw";
// import { ECGLoader } from "@/components/ui-library/ECGLoader";
// import ECGLoaderCode from "@/components/ui-library/ECGLoader.tsx?raw";
import { SleepingLoader } from "@/components/ui-library/SleepingLoader";
import SleepingLoaderCode from "@/components/ui-library/SleepingLoader.tsx?raw";
import { TowerLoader } from "@/components/ui-library/TowerLoader";
import TowerLoaderCode from "@/components/ui-library/TowerLoader.tsx?raw";
import { JumpingBoxLoader } from "@/components/ui-library/JumpingBoxLoader";
import { WordSpinnerLoader } from "@/components/ui-library/WordSpinnerLoader";
// Regular imports removing lazied ones to avoid duplicates
import { ShareButton, ShareButtonContent } from "@/components/ui-library/ShareButton";
import { PaymentButton, PaymentButtonContent } from "@/components/ui-library/PaymentButton";

import { GeometricSpinnerLoader } from "@/components/ui-library/GeometricSpinnerLoader";
import { DotPulseLoader, DotPulseLoaderContent } from "@/components/ui-library/DotPulseLoader";
import DotPulseLoaderCode from "@/components/ui-library/DotPulseLoader.tsx?raw";
import { CoffeeLoader, CoffeeLoaderContent } from "@/components/ui-library/CoffeeLoader";
import { HidingSeakingLoader } from "@/components/ui-library/HidingSeakingLoader";
import { RollingRockLoader } from "@/components/ui-library/RollingRockLoader";
import { ClassicSpinnerLoader } from "@/components/ui-library/ClassicSpinnerLoader";
import { CarLoader } from "@/components/ui-library/CarLoader";
import { FlowingSpinnerLoader, FlowingSpinnerLoaderContent } from "@/components/ui-library/FlowingSpinnerLoader";
import { CircularPulseLoader, CircularPulseLoaderContent } from "@/components/ui-library/CircularPulseLoader";
import { CrystalLoader, CrystalLoaderContent } from "@/components/ui-library/CrystalLoader";
import { GyroLoader, GyroLoaderContent } from "@/components/ui-library/GyroLoader";
import { LikeButton, LikeButtonContent } from "@/components/ui-library/LikeButton";
import { BanterLoader, BanterLoaderContent } from "@/components/ui-library/BanterLoader";
// Removed MatrixLoader import
import { HamsterLoader } from "@/components/ui-library/HamsterLoader";
import { ShineButton, ShineButtonContent } from "@/components/ui-library/ShineButton";
import { Tooltip } from "@/components/ui-library/Tooltip";
import { GlassIcons } from "@/components/ui-library/GlassIcons";
import { SocialGrid, SocialGridContent } from "@/components/ui-library/SocialGrid";
import SocialGridCode from "@/components/ui-library/SocialGrid.tsx?raw";
import { GhostLoader, GhostLoaderContent } from "@/components/ui-library/GhostLoader";
// Removed HolographicLoader import
import { HolographicLoaderContent } from "@/components/ui-library/HolographicLoader";
import { BubbleLoader, BubbleLoaderContent } from "@/components/ui-library/BubbleLoader";
import { BouncingBallLoader, BouncingBallLoaderContent } from "@/components/ui-library/BouncingBallLoader";
import { MusicEqualizerLoader, MusicEqualizerLoaderContent } from "@/components/ui-library/MusicEqualizerLoader";
import { OlympicRingsLoader, OlympicRingsLoaderContent } from "@/components/ui-library/OlympicRingsLoader";
import { CloudSyncLoader, CloudSyncLoaderContent } from "@/components/ui-library/CloudSyncLoader";
// import { SpeederLoader } from "@/components/ui-library/SpeederLoader";
import { MinecraftSwitch, MinecraftSwitchContent } from "@/components/ui-library/MinecraftSwitch";
// import { PillRadio } from "@/components/ui-library/PillRadio";
import { GooeySwitch, GooeySwitchContent } from "@/components/ui-library/GooeySwitch";
import GooeySwitchCode from "@/components/ui-library/GooeySwitch.tsx?raw";
import { MapLocationTooltip } from "@/components/ui-library/MapLocationTooltip";
import { ColaLoader, ColaLoaderContent } from "@/components/ui-library/ColaLoader";
import { ThreeDInput, ThreeDInputContent } from "@/components/ui-library/ThreeDInput";
import ThreeDInputCode from "@/components/ui-library/ThreeDInput.tsx?raw";
import { PushLoader, PushLoaderContent } from "@/components/ui-library/PushLoader";
import { GeometricShapesLoader, GeometricShapesLoaderContent } from "@/components/ui-library/GeometricShapesLoader";
import { GradientSpinLoader, GradientSpinLoaderContent } from "@/components/ui-library/GradientSpinLoader";
import { JumpingCirclesLoader, JumpingCirclesLoaderContent } from "@/components/ui-library/JumpingCirclesLoader";
import { Error404Card } from "@/components/ui-library/Error404Card";
import { NatureButton, NatureButtonContent } from "@/components/ui-library/NatureButton";
import { CircularSpinnerLoader } from "@/components/ui-library/CircularSpinnerLoader";
import { ModernWordLoader, ModernWordLoaderContent } from "@/components/ui-library/ModernWordLoader";
// import { PlayNowButton } from "@/components/ui-library/PlayNowButton";
import { GradientRingLoader } from "@/components/ui-library/GradientRingLoader";
import { SocialPlatformGrid, SocialPlatformGridContent } from "@/components/ui-library/SocialPlatformGrid";
import { InputDemo, InputDemoContent } from "@/components/ui-library/InputDemo";
import { GlitchText } from "@/components/ui-library/GlitchText";
// Removed duplicate MagneticButton import

// import { VoltageButton } from "@/components/ui-library/VoltageButton";
import { PayButton, PayButtonContent } from "@/components/ui-library/PayButton";
// Removed GalaxyButton import
import { NeonGradientCard, NeonGradientCardContent } from "@/components/ui-library/NeonGradientCard";
import { ExplosiveGrowthCard, ExplosiveGrowthCardContent } from "@/components/ui-library/ExplosiveGrowthCard";
// Removed duplicate SoftInput import
import { LogoutButton, LogoutButtonContent } from "@/components/ui-library/LogoutButton";
// import { LiquidLoader } from "@/components/ui-library/LiquidLoader";
import { GlassCard } from "@/components/ui-library/GlassCard";
import { SketchButton, SketchButtonContent } from "@/components/ui-library/SketchButton";
// import { CloudSaveButton } from "@/components/ui-library/CloudSaveButton";
import { ScrollDownButton, ScrollDownButtonContent } from "@/components/ui-library/ScrollDownButton";
import { CodePenButton, CodePenButtonContent } from "@/components/ui-library/CodePenButton";
// import { SparkleSwitch } from "@/components/ui-library/SparkleSwitch";

import { WhatsAppButton, WhatsAppButtonContent } from "@/components/ui-library/WhatsAppButton";
import { StarButton, StarButtonContent } from "@/components/ui-library/StarButton";


import { RGBButton, RGBButtonContent } from "@/components/ui-library/RGBButton";
import { RecipeCard } from "@/components/ui-library/RecipeCard";
import { NumberCard } from "@/components/ui-library/NumberCard";
// import { UIVerseCard } from "@/components/ui-library/UIVerseCard";
import { PegtopLoader, PegtopLoaderContent } from "@/components/ui-library/PegtopLoader";
import { AIMatrixLoader, AIMatrixLoaderContent } from "@/components/ui-library/AIMatrixLoader";
import { SoapBubbleLoader, SoapBubbleLoaderContent } from "@/components/ui-library/SoapBubbleLoader";
import { HoneycombLoader } from "@/components/ui-library/HoneycombLoader";
// import { TerminalCard } from "@/components/ui-library/TerminalCard";
import { CodeEditorCard } from "@/components/ui-library/CodeEditorCard";
import { EthereumCard } from "@/components/ui-library/EthereumCard";
import { GradientPricingCard } from "@/components/ui-library/GradientPricingCard";
import { PremiumDesignCard, PremiumDesignCardContent } from "@/components/ui-library/PremiumDesignCard";
import { MagneticButtonContent } from "@/components/ui-library/MagneticButton";
import { ThemeRadio, ThemeRadioContent } from "@/components/ui-library/ThemeRadio";
// import { MatrixCube } from "@/components/ui-library/MatrixCube";
// import { GradientSelect } from "@/components/ui-library/GradientSelect";
// Removed MagicBento import
import { ConfettiButton, ConfettiButtonContent } from "@/components/ui-library/ConfettiButton";
import { RainbowButton } from "@/components/ui-library/RainbowButton";
// Removed SpotlightCard import
// Removed TiltCard import
import { LiquidMorphLoader, LiquidMorphLoaderContent } from "@/components/ui-library/LiquidMorphLoader";
import { AtomicLoader, AtomicLoaderContent } from "@/components/ui-library/AtomicLoader";
import { CleanCircleLoader, CleanCircleLoaderContent } from "@/components/ui-library/CleanCircleLoader";
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
const MatrixLoaderContent = lazy(() => import("@/components/ui-library/MatrixLoader").then(module => ({ default: module.MatrixLoaderContent })));
const HolographicLoader = lazy(() => import("@/components/ui-library/HolographicLoader").then(module => ({ default: module.HolographicLoader })));
const ThreeBodyLoader = lazy(() => import("@/components/ui-library/ThreeBodyLoader").then(module => ({ default: module.ThreeBodyLoader })));
const ThreeBodyLoaderContent = lazy(() => import("@/components/ui-library/ThreeBodyLoader").then(module => ({ default: module.ThreeBodyLoaderContent })));
const GalaxyButton = lazy(() => import("@/components/ui-library/GalaxyButton").then(module => ({ default: module.GalaxyButton })));
const GalaxyButtonContent = lazy(() => import("@/components/ui-library/GalaxyButton").then(module => ({ default: module.GalaxyButtonContent })));

import { BlueprintShowcase } from "@/components/ui-library/BlueprintShowcase";
import AnatomyButton from "@/components/ui-library/AnatomyButton";
import AnatomyButtonCode from "@/components/ui-library/AnatomyButton.tsx?raw";

import SpotlightCardCode from "@/components/ui-library/SpotlightCard.tsx?raw";
import MagicBentoCode from "@/components/ui-library/MagicBento.tsx?raw";
import TiltCardCode from "@/components/ui-library/TiltCard.tsx?raw";
import Error404CardCode from "@/components/ui-library/Error404Card.tsx?raw";
import TerminalCardCode from "@/components/ui-library/TerminalCard.tsx?raw";
import CodeEditorCardCode from "@/components/ui-library/CodeEditorCard.tsx?raw";
// Removed duplicate SocialGridCode import
// import UIVerseCardCode from "@/components/ui-library/UIVerseCard.tsx?raw";
import LiquidMorphLoaderCode from "@/components/ui-library/LiquidMorphLoader.tsx?raw";
import HamsterLoaderCode from "@/components/ui-library/HamsterLoader.tsx?raw";
import MatrixLoaderCode from "@/components/ui-library/MatrixLoader.tsx?raw";
import HolographicLoaderCode from "@/components/ui-library/HolographicLoader.tsx?raw";
import ThreeBodyLoaderCode from "@/components/ui-library/ThreeBodyLoader.tsx?raw";
import GalaxyButtonCode from "@/components/ui-library/GalaxyButton.tsx?raw";
import JumpingBoxLoaderCode from "@/components/ui-library/JumpingBoxLoader.tsx?raw";
import WordSpinnerLoaderCode from "@/components/ui-library/WordSpinnerLoader.tsx?raw";
import { WalkingManLoader, WalkingManLoaderContent } from "@/components/ui-library/WalkingManLoader";
import WalkingManLoaderCode from "@/components/ui-library/WalkingManLoader.tsx?raw";
import GeometricSpinnerLoaderCode from "@/components/ui-library/GeometricSpinnerLoader.tsx?raw";
import { HamburgerMenu, HamburgerMenuContent } from "@/components/ui-library/HamburgerMenu";
import HamburgerMenuCode from "@/components/ui-library/HamburgerMenu.tsx?raw";
// import { MusicEqualizer, MusicEqualizerContent } from "@/components/ui-library/MusicEqualizer";
// import MusicEqualizerCode from "@/components/ui-library/MusicEqualizer.tsx?raw";
// Removed duplicate DotPulseLoaderCode import
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
// import SpeederLoaderCode from "@/components/ui-library/SpeederLoader.tsx?raw";
import ColaLoaderCode from "@/components/ui-library/ColaLoader.tsx?raw";
import PushLoaderCode from "@/components/ui-library/PushLoader.tsx?raw";
import GeometricShapesLoaderCode from "@/components/ui-library/GeometricShapesLoader.tsx?raw";
import GradientSpinLoaderCode from "@/components/ui-library/GradientSpinLoader.tsx?raw";
import JumpingCirclesLoaderCode from "@/components/ui-library/JumpingCirclesLoader.tsx?raw";
import CircularSpinnerLoaderCode from "@/components/ui-library/CircularSpinnerLoader.tsx?raw";
import { TriangleLoader, TriangleLoaderContent } from "@/components/ui-library/TriangleLoader";
import TriangleLoaderCode from "@/components/ui-library/TriangleLoader.tsx?raw";
import ModernWordLoaderCode from "@/components/ui-library/ModernWordLoader.tsx?raw";
import GradientRingLoaderCode from "@/components/ui-library/GradientRingLoader.tsx?raw";
// import LiquidLoaderCode from "@/components/ui-library/LiquidLoader.tsx?raw";
import PegtopLoaderCode from "@/components/ui-library/PegtopLoader.tsx?raw";
import AIMatrixLoaderCode from "@/components/ui-library/AIMatrixLoader.tsx?raw";
import SoapBubbleLoaderCode from "@/components/ui-library/SoapBubbleLoader.tsx?raw";
import HoneycombLoaderCode from "@/components/ui-library/HoneycombLoader.tsx?raw";
import AtomicLoaderCode from "@/components/ui-library/AtomicLoader.tsx?raw";
import CleanCircleLoaderCode from "@/components/ui-library/CleanCircleLoader.tsx?raw";
import { FolderCard, FolderCardContent } from "@/components/ui-library/FolderCard";
import FolderCardCode from "@/components/ui-library/FolderCard.tsx?raw";
import { CubesLoader, CubesLoaderContent } from "@/components/ui-library/CubesLoader";
import CubesLoaderCode from "@/components/ui-library/CubesLoader.tsx?raw";
// Buttons
import ShareButtonCode from "@/components/ui-library/ShareButton.tsx?raw";
import PaymentButtonCode from "@/components/ui-library/PaymentButton.tsx?raw";
import { CreditsButton, CreditsButtonContent } from "@/components/ui-library/CreditsButton";
import CreditsButtonCode from "@/components/ui-library/CreditsButton.tsx?raw";
import { OpenAIButton, OpenAIButtonContent } from "@/components/ui-library/OpenAIButton";
import OpenAIButtonCode from "@/components/ui-library/OpenAIButton.tsx?raw";
import LikeButtonCode from "@/components/ui-library/LikeButton.tsx?raw";
import ShineButtonCode from "@/components/ui-library/ShineButton.tsx?raw";
import NatureButtonCode from "@/components/ui-library/NatureButton.tsx?raw";
import PlayNowButtonCode from "@/components/ui-library/PlayNowButton.tsx?raw";
import { RealismButton, RealismButtonContent } from "@/components/ui-library/RealismButton";
import RealismButtonCode from "@/components/ui-library/RealismButton.tsx?raw";
import MagneticButtonCode from "@/components/ui-library/MagneticButton.tsx?raw";
import VoltageButtonCode from "@/components/ui-library/VoltageButton.tsx?raw";
import { UnlockProButton, UnlockProButtonContent } from "@/components/ui-library/UnlockProButton";
import UnlockProButtonCode from "@/components/ui-library/UnlockProButton.tsx?raw";
import PayButtonCode from "@/components/ui-library/PayButton.tsx?raw";
import SketchButtonCode from "@/components/ui-library/SketchButton.tsx?raw";
// import CloudSaveButtonCode from "@/components/ui-library/CloudSaveButton.tsx?raw";
import ScrollDownButtonCode from "@/components/ui-library/ScrollDownButton.tsx?raw";
import CodePenButtonCode from "@/components/ui-library/CodePenButton.tsx?raw";
import WhatsAppButtonCode from "@/components/ui-library/WhatsAppButton.tsx?raw";
import StarButtonCode from "@/components/ui-library/StarButton.tsx?raw";

import RGBButtonCode from "@/components/ui-library/RGBButton.tsx?raw";
import ConfettiButtonCode from "@/components/ui-library/ConfettiButton.tsx?raw";
import RainbowButtonCode from "@/components/ui-library/RainbowButton.tsx?raw";
import LogoutButtonCode from "@/components/ui-library/LogoutButton.tsx?raw";
import SocialPlatformGridCode from "@/components/ui-library/SocialPlatformGrid.tsx?raw";
// Inputs

import MinecraftSwitchCode from "@/components/ui-library/MinecraftSwitch.tsx?raw";
// import PillRadioCode from "@/components/ui-library/PillRadio.tsx?raw";
// Removed duplicate GooeySwitchCode import
// Removed duplicate ThreeDInputCode import

import { DayNightSwitch, DayNightSwitchContent } from "@/components/ui-library/DayNightSwitch";
import DayNightSwitchCode from "@/components/ui-library/DayNightSwitch.tsx?raw";
import SparkleSwitchCode from "@/components/ui-library/SparkleSwitch.tsx?raw";
import ThemeRadioCode from "@/components/ui-library/ThemeRadio.tsx?raw";
import { StarRating, StarRatingContent } from "@/components/ui-library/StarRating";
import StarRatingCode from "@/components/ui-library/StarRating.tsx?raw";
// import GradientSelectCode from "@/components/ui-library/GradientSelect.tsx?raw";
import InputDemoCode from "@/components/ui-library/InputDemo.tsx?raw";
// Other Cards / Text
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

import { MagicBentoContent } from "@/components/ui-library/MagicBentoContent";
import { TiltCardContent } from "@/components/ui-library/TiltCardContent";
import { CodeEditorCardContent } from "@/components/ui-library/CodeEditorCardContent";
import { GlassCardContent } from "@/components/ui-library/GlassCardContent";
import { RecipeCardContent } from "@/components/ui-library/RecipeCardContent";
import { NumberCardContent } from "@/components/ui-library/NumberCardContent";
import { EthereumCardContent } from "@/components/ui-library/EthereumCardContent";

import { GradientPricingCardContent } from "@/components/ui-library/GradientPricingCardContent";
import { TooltipContent } from "@/components/ui-library/TooltipContent";
import { GlassIconsContent } from "@/components/ui-library/GlassIconsContent";
import { MapLocationTooltipContent } from "@/components/ui-library/MapLocationTooltipContent";
import { GlitchTextContent } from "@/components/ui-library/GlitchTextContent";


const categories = ["All", "Buttons", "Loaders", "Inputs", "Cards", "Text", "Tooltips"];

import { CarLoaderContent } from "@/components/ui-library/CarLoader";
import { HamsterLoaderContent } from "@/components/ui-library/HamsterLoader";
import { GeometricSpinnerLoaderContent } from "@/components/ui-library/GeometricSpinnerLoader";
import { GradientRingLoaderContent } from "@/components/ui-library/GradientRingLoader";
import { HandLoaderContent } from "@/components/ui-library/HandLoader";
import { CircularSpinnerLoaderContent } from "@/components/ui-library/CircularSpinnerLoader";
import { HoneycombLoaderContent } from "@/components/ui-library/HoneycombLoader";
import { HidingSeakingLoaderContent } from "@/components/ui-library/HidingSeakingLoader";
import { TruckLoaderContent } from "@/components/ui-library/TruckLoader";
import { SleepingLoaderContent } from "@/components/ui-library/SleepingLoader";
import { TowerLoaderContent } from "@/components/ui-library/TowerLoader";
import { JumpingBoxLoaderContent } from "@/components/ui-library/JumpingBoxLoader";
import { WordSpinnerLoaderContent } from "@/components/ui-library/WordSpinnerLoader";
import { RollingRockLoaderContent } from "@/components/ui-library/RollingRockLoader";
import { ClassicSpinnerLoaderContent } from "@/components/ui-library/ClassicSpinnerLoader";

const _components = [
    // --- DESTAQUE / LAYOUT ESPECIAL ---
    { id: "spotlight_card", category: "Cards", size: "large", featured: true, code: SpotlightCardCode, component: <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.3)"><PremiumDesignCard /></SpotlightCard> },
    { id: "magic_bento", category: "Cards", size: "large", code: MagicBentoCode, component: <MagicBento /> },
    { id: "tilt_card", category: "Cards", size: "medium", code: TiltCardCode, component: <TiltCard><h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">3D Interactive Tilt</h3></TiltCard> },
    { id: "error_404_card", category: "Cards", size: "medium", code: Error404CardCode, component: <Error404Card /> },
    // { id: "terminal_card", category: "Cards", size: "medium", code: TerminalCardCode, component: <TerminalCard /> },
    { id: "code_editor_card", category: "Cards", size: "medium", code: CodeEditorCardCode, component: <CodeEditorCard /> },
    { id: "social_grid", category: "Buttons", size: "medium", code: SocialGridCode, component: <SocialGrid /> },
    // { id: "uiverse_card", category: "Cards", size: "medium", code: UIVerseCardCode, component: <UIVerseCard /> },
    { id: "liquid_morph", category: "Loaders", size: "medium", code: LiquidMorphLoaderCode, component: <LiquidMorphLoader /> },
    { id: "hamster_loader", category: "Loaders", size: "medium", code: HamsterLoaderCode, component: <HamsterLoader /> },

    // --- CARREGADORES (LOADERS) ---
    { id: "truck_loader", title: "Truck Loader", category: "Loaders", size: "medium", code: TruckLoaderCode, component: <TruckLoader /> },
    // { id: "newtons_cradle", title: "Newton's Cradle", category: "Loaders", size: "medium", code: NewtonsCradleLoaderCode, component: <NewtonsCradleLoader /> },
    { id: "hand_loader", title: "Hand Loader", category: "Loaders", size: "small", code: HandLoaderCode, component: <HandLoader /> },
    // { id: "ecg_loader", title: "ECG Loader", category: "Loaders", size: "medium", code: ECGLoaderCode, component: <ECGLoader /> },
    { id: "sleeping_loader", title: "Sleeping Loader", category: "Loaders", size: "medium", code: SleepingLoaderCode, component: <SleepingLoader /> },
    { id: "tower_loader", title: "Tower Loader", category: "Loaders", size: "small", code: TowerLoaderCode, component: <TowerLoader /> },
    { id: "jumping_box", category: "Loaders", code: JumpingBoxLoaderCode, component: <JumpingBoxLoader /> },
    { id: "word_spinner", category: "Loaders", code: WordSpinnerLoaderCode, component: <WordSpinnerLoader /> },
    { id: "walking_man", category: "Loaders", size: "large", code: WalkingManLoaderCode, component: <WalkingManLoader /> },
    { id: "geometric_spinner", category: "Loaders", code: GeometricSpinnerLoaderCode, component: <GeometricSpinnerLoader /> },
    { id: "dot_pulse", category: "Loaders", code: DotPulseLoader, component: <DotPulseLoader /> },
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
    // { id: "speeder_loader", category: "Loaders", code: SpeederLoaderCode, component: <SpeederLoader /> },
    { id: "cola_loader", category: "Loaders", code: ColaLoaderCode, component: <ColaLoader /> },
    { id: "push_loader", category: "Loaders", code: PushLoaderCode, component: <PushLoader /> },
    { id: "geometric_shapes", category: "Loaders", size: "medium", code: GeometricShapesLoaderCode, component: <GeometricShapesLoader /> },
    { id: "gradient_spin", category: "Loaders", code: GradientSpinLoaderCode, component: <GradientSpinLoader /> },
    { id: "jumping_circles", category: "Loaders", code: JumpingCirclesLoaderCode, component: <JumpingCirclesLoader /> },
    { id: "circular_spinner", category: "Loaders", code: CircularSpinnerLoaderCode, component: <CircularSpinnerLoader /> },
    { id: "triangle_loader", category: "Loaders", code: TriangleLoaderCode, component: <TriangleLoader /> },
    { id: "modern_word", category: "Loaders", code: ModernWordLoaderCode, component: <ModernWordLoader /> },
    { id: "gradient_ring", category: "Loaders", code: GradientRingLoaderCode, component: <GradientRingLoader /> },
    // { id: "liquid_loader", category: "Loaders", code: LiquidLoaderCode, component: <LiquidLoader /> },
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
    // { id: "play_now", category: "Buttons", code: PlayNowButtonCode, component: <PlayNowButton /> },
    { id: "realism_button", category: "Buttons", code: RealismButtonCode, component: <RealismButton /> },
    { id: "magnetic_button", category: "Buttons", code: MagneticButtonCode, component: <MagneticButtonContent /> },
    // { id: "voltage_button", category: "Buttons", code: VoltageButtonCode, component: <VoltageButton /> },
    { id: "unlock_pro", category: "Buttons", code: UnlockProButtonCode, component: <UnlockProButton /> },
    { id: "pay_button", category: "Buttons", code: PayButtonCode, component: <PayButton /> },
    { id: "galaxy_button", category: "Buttons", code: GalaxyButtonCode, component: <GalaxyButton /> },
    { id: "sketch_button", category: "Buttons", code: SketchButtonCode, component: <SketchButton /> },
    // { id: "cloud_save", category: "Buttons", code: CloudSaveButtonCode, component: <CloudSaveButton /> },
    { id: "scroll_down", category: "Buttons", code: ScrollDownButtonCode, component: <ScrollDownButton /> },
    { id: "codepen_button", category: "Buttons", code: CodePenButtonCode, component: <CodePenButton /> },
    { id: "whatsapp_button", category: "Buttons", code: WhatsAppButtonCode, component: <WhatsAppButton /> },
    { id: "star_button", category: "Buttons", code: StarButtonCode, component: <StarButton /> },
    { id: "rgb_button", category: "Buttons", code: RGBButtonCode, component: <RGBButton /> },
    { id: "confetti_button", category: "Buttons", code: ConfettiButtonCode, component: <ConfettiButton /> },
    // { id: "rainbow_button", category: "Buttons", size: "medium", code: RainbowButtonCode, component: <RainbowButton /> },
    { id: "logout_button", category: "Buttons", code: LogoutButtonCode, component: <LogoutButton /> },
    { id: "social_platform_grid", category: "Buttons", size: "medium", code: SocialPlatformGridCode, component: <SocialPlatformGrid /> },

    // --- INPUTS ---
    { id: "day_night_switch", category: "Inputs", code: DayNightSwitchCode, component: <DayNightSwitch /> },
    { id: "minecraft_switch", category: "Inputs", code: MinecraftSwitchCode, component: <MinecraftSwitch /> },
    // { id: "pill_radio", category: "Inputs", size: "medium", code: PillRadioCode, component: <PillRadio /> },
    { id: "gooey_switch", category: "Inputs", code: GooeySwitchCode, component: <GooeySwitch /> },
    { id: "three_d_input", category: "Inputs", code: ThreeDInputCode, component: <ThreeDInput /> },
    // { id: "sparkle_switch", category: "Inputs", code: SparkleSwitchCode, component: <SparkleSwitch /> },
    { id: "theme_radio", category: "Inputs", code: ThemeRadioCode, component: <ThemeRadio /> },
    // { id: "gradient_select", category: "Inputs", code: GradientSelectCode, component: <GradientSelect /> },
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
    // { id: "matrix_cube", category: "Cards", code: MatrixCubeCode, component: <MatrixCube /> },

    // --- TEXTO & TOOLTIPS ---
    { id: "tooltip_basic", category: "Tooltips", code: TooltipBasicCode, component: <Tooltip text="Magic Lab Tooltip" /> },
    { id: "glass_icons", category: "Text", size: "medium", code: GlassIconsCode, component: <GlassIcons /> },
    { id: "map_tooltip", category: "Tooltips", code: MapLocationTooltipCode, component: <MapLocationTooltip /> },
    { id: "glitch_text", category: "Text", size: "medium", code: GlitchTextCode, component: <GlitchText text="Vitor's Lab" /> },
    { id: "star_rating", category: "Text", code: StarRatingCode, component: <StarRating /> },
];


const components: any[] = [
    { id: "anatomy_button", category: "Buttons", size: "large", featured: true, code: AnatomyButtonCode, component: <AnatomyButton /> },
    { id: "spotlight_card", category: "Cards", size: "large", code: SpotlightCardCode, component: <PremiumDesignCardContent /> },
    { id: "magnetic_button", category: "Buttons", code: MagneticButtonCode, component: <MagneticButtonContent /> },
    { id: "dot_pulse_loader", category: "Loaders", code: DotPulseLoaderCode, component: <DotPulseLoaderContent /> },
    { id: "shine_button", category: "Buttons", code: ShineButtonCode, component: <ShineButtonContent /> },
    { id: "gooey_switch", category: "Toggles", code: GooeySwitchCode, component: <GooeySwitchContent /> },
    { id: "threed_input", category: "Inputs", code: ThreeDInputCode, component: <ThreeDInputContent /> },

    { id: "social_grid", category: "Cards", code: SocialGridCode, component: <SocialGridContent /> },
    { id: "walking_man_loader", category: "Loaders", size: "large", code: WalkingManLoaderCode, component: <WalkingManLoaderContent /> },
    { id: "day_night_switch", category: "Inputs", code: DayNightSwitchCode, component: <DayNightSwitchContent /> },
    { id: "star_rating", category: "Text", code: StarRatingCode, component: <StarRatingContent /> },
    { id: "cubes_loader", category: "Loaders", size: "large", code: CubesLoaderCode, component: <CubesLoaderContent /> },
    { id: "share_button", category: "Buttons", code: ShareButtonCode, component: <ShareButtonContent /> },
    { id: "like_button", category: "Buttons", code: LikeButtonCode, component: <LikeButtonContent /> },
    { id: "theme_radio", category: "Inputs", code: ThemeRadioCode, component: <ThemeRadioContent /> },
    { id: "codepen_button", category: "Buttons", code: CodePenButtonCode, component: <CodePenButtonContent /> },
    { id: "star_button", category: "Buttons", code: StarButtonCode, component: <StarButtonContent /> },
    { id: "hamburger_menu", category: "Buttons", code: HamburgerMenuCode, component: <HamburgerMenuContent /> },
    { id: "holographic_loader", category: "Loaders", size: "large", code: HolographicLoaderCode, component: <HolographicLoaderContent /> },
    { id: "bubble_loader", category: "Loaders", code: BubbleLoaderCode, component: <BubbleLoaderContent /> },
    { id: "bouncing_ball", category: "Loaders", code: BouncingBallLoaderCode, component: <BouncingBallLoaderContent /> },

    // --- NEW BLOCK A (rows 9-10): large + 4 small ---
    { id: "matrix_loader", category: "Loaders", size: "large", code: MatrixLoaderCode, component: <MatrixLoaderContent /> },
    { id: "music_equalizer", category: "Loaders", code: MusicEqualizerLoaderCode, component: <MusicEqualizerLoaderContent /> },
    { id: "cola_loader", category: "Loaders", code: ColaLoaderCode, component: <ColaLoaderContent /> },
    { id: "olympic_rings", category: "Loaders", code: OlympicRingsLoaderCode, component: <OlympicRingsLoaderContent /> },
    { id: "cloud_sync", category: "Loaders", code: CloudSyncLoaderCode, component: <CloudSyncLoaderContent /> },

    // --- NEW BLOCK B (rows 11-12): 4 small (left 2×2) + large (right 2×2) ---
    { id: "push_loader", category: "Loaders", code: PushLoaderCode, component: <PushLoaderContent /> },
    { id: "gradient_spin", category: "Loaders", code: GradientSpinLoaderCode, component: <GradientSpinLoaderContent /> },
    { id: "geometric_shapes", category: "Loaders", size: "large", code: GeometricShapesLoaderCode, component: <GeometricShapesLoaderContent /> },
    { id: "jumping_circles", category: "Loaders", code: JumpingCirclesLoaderCode, component: <JumpingCirclesLoaderContent /> },
    { id: "modern_word", category: "Loaders", code: ModernWordLoaderCode, component: <ModernWordLoaderContent /> },

    // --- NEW BLOCK C (rows 13-14): large + 4 small ---
    { id: "three_body_loader", category: "Loaders", size: "large", component: <Suspense fallback={null}><ThreeBodyLoaderContent /></Suspense> },
    { id: "crystal_loader", category: "Loaders", component: <CrystalLoaderContent /> },
    { id: "coffee_loader", category: "Loaders", component: <CoffeeLoaderContent /> },
    { id: "banter_loader", category: "Loaders", component: <BanterLoaderContent /> },
    { id: "flowing_spinner", category: "Loaders", component: <FlowingSpinnerLoaderContent /> },

    // --- NEW BLOCK D (rows 15-16): 4 small (left 2×2) + large (right 2×2) ---
    { id: "circular_pulse", category: "Loaders", component: <CircularPulseLoaderContent /> },
    { id: "gyro_loader", category: "Loaders", component: <GyroLoaderContent /> },
    { id: "atomic_loader", category: "Loaders", size: "large", component: <AtomicLoaderContent /> },
    { id: "ghost_loader", category: "Loaders", component: <GhostLoaderContent /> },
    { id: "confetti_button", category: "Buttons", component: <ConfettiButtonContent /> },

    // --- NEW BLOCK E (rows 17-18): large + 4 small ---
    { id: "galaxy_button", category: "Buttons", size: "large", component: <Suspense fallback={null}><GalaxyButtonContent /></Suspense> },
    { id: "rgb_button", category: "Buttons", component: <RGBButtonContent /> },
    { id: "nature_button", category: "Buttons", component: <NatureButtonContent /> },
    { id: "pegtop_loader", category: "Loaders", component: <PegtopLoaderContent /> },
    { id: "payment_button", category: "Buttons", component: <PaymentButtonContent /> },

    // --- NEW BLOCK F (rows 19-20): 4 small (left 2x2) + large (right 2x2) ---
    { id: "hamster_loader", category: "Loaders", code: HamsterLoaderCode, component: <HamsterLoaderContent /> },
    { id: "geometric_spinner", category: "Loaders", code: GeometricSpinnerLoaderCode, component: <GeometricSpinnerLoaderContent /> },
    { id: "car_loader", category: "Loaders", size: "large", code: CarLoaderCode, component: <CarLoaderContent /> },
    { id: "hand_loader", category: "Loaders", code: HandLoaderCode, component: <HandLoaderContent /> },
    { id: "circular_spinner", category: "Loaders", code: CircularSpinnerLoaderCode, component: <CircularSpinnerLoaderContent /> },

    // --- NEW BLOCK G (rows 21-22): large + 4 small ---
    { id: "truck_loader", category: "Loaders", size: "large", code: TruckLoaderCode, component: <TruckLoaderContent /> },
    { id: "sleeping_loader", category: "Loaders", code: SleepingLoaderCode, component: <SleepingLoaderContent /> },
    { id: "tower_loader", category: "Loaders", code: TowerLoaderCode, component: <TowerLoaderContent /> },
    { id: "jumping_box", category: "Loaders", code: JumpingBoxLoaderCode, component: <JumpingBoxLoaderContent /> },
    { id: "word_spinner", category: "Loaders", code: WordSpinnerLoaderCode, component: <WordSpinnerLoaderContent /> },

    // --- NEW BLOCK H (rows 23-24): 4 small (left 2x2) + large (right 2x2) ---
    { id: "gradient_ring", category: "Loaders", code: GradientRingLoaderCode, component: <GradientRingLoaderContent /> },
    { id: "honeycomb_loader", category: "Loaders", code: HoneycombLoaderCode, component: <HoneycombLoaderContent /> },
    { id: "hiding_seaking", category: "Loaders", size: "large", code: HidingSeakingLoaderCode, component: <Suspense fallback={null}><HidingSeakingLoaderContent /></Suspense> },
    { id: "rolling_rock", category: "Loaders", code: RollingRockLoaderCode, component: <RollingRockLoaderContent /> },
    { id: "classic_spinner", category: "Loaders", code: ClassicSpinnerLoaderCode, component: <ClassicSpinnerLoaderContent /> },

    // --- NEW BLOCK I (rows 25-26): 4 small (left 2x2) + large (right 2x2) ---
    { id: "triangle_loader", category: "Loaders", code: TriangleLoaderCode, component: <TriangleLoaderContent /> },
    { id: "ai_matrix_loader", category: "Loaders", code: AIMatrixLoaderCode, component: <AIMatrixLoaderContent /> },
    { id: "liquid_morph_loader", category: "Loaders", size: "large", code: LiquidMorphLoaderCode, component: <LiquidMorphLoaderContent /> },
    { id: "soap_bubble_loader", category: "Loaders", code: SoapBubbleLoaderCode, component: <SoapBubbleLoaderContent /> },
    { id: "clean_circle_loader", category: "Loaders", code: CleanCircleLoaderCode, component: <CleanCircleLoaderContent /> },

    // --- NEW BLOCK J (rows 27-28): large + 4 small ---
    { id: "folder_card", category: "Cards", size: "large", code: FolderCardCode, component: <FolderCardContent /> },
    { id: "credits_button", category: "Buttons", code: CreditsButtonCode, component: <CreditsButtonContent /> },
    { id: "openai_button", category: "Buttons", code: OpenAIButtonCode, component: <OpenAIButtonContent /> },
    { id: "realism_button", category: "Buttons", code: RealismButtonCode, component: <RealismButtonContent /> },
    { id: "unlock_pro_button", category: "Buttons", code: UnlockProButtonCode, component: <UnlockProButtonContent /> },

    // --- NEW BLOCK K (rows 29-30): 4 small (left 2x2) + large (right 2x2) ---
    { id: "pay_button", category: "Buttons", code: PayButtonCode, component: <PayButtonContent /> },
    { id: "sketch_button", category: "Buttons", code: SketchButtonCode, component: <SketchButtonContent /> },
    { id: "social_platform_grid", category: "Buttons", size: "large", code: SocialPlatformGridCode, component: <SocialPlatformGridContent /> },
    { id: "whatsapp_button", category: "Buttons", code: WhatsAppButtonCode, component: <WhatsAppButtonContent /> },
    { id: "logout_button", category: "Buttons", code: LogoutButtonCode, component: <LogoutButtonContent /> },

    // --- NEW BLOCK L (rows 31-32): large + 4 small ---
    { id: "explosive_growth", category: "Cards", size: "large", code: ExplosiveGrowthCardCode, component: <ExplosiveGrowthCardContent /> },
    { id: "minecraft_switch", category: "Inputs", code: MinecraftSwitchCode, component: <MinecraftSwitchContent /> },
    { id: "input_demo", category: "Inputs", code: InputDemoCode, component: <InputDemoContent /> },
    { id: "neon_gradient_card", category: "Cards", code: NeonGradientCardCode, component: <NeonGradientCardContent /> },
    { id: "scroll_down", category: "Buttons", code: ScrollDownButtonCode, component: <ScrollDownButtonContent /> },

    // --- NEW BLOCK M (rows 33-34): 2 small + large + 2 small ---
    { id: "gradient_pricing", category: "Cards", code: GradientPricingCardCode, component: <GradientPricingCardContent /> },
    { id: "tooltip_basic", category: "Tooltips", code: TooltipBasicCode, component: <TooltipContent text="Magic Lab Tooltip" /> },
    { id: "glass_icons", category: "Text", size: "large", code: GlassIconsCode, component: <GlassIconsContent /> },
    { id: "map_tooltip", category: "Tooltips", code: MapLocationTooltipCode, component: <MapLocationTooltipContent /> },
    { id: "tilt_card", category: "Cards", code: TiltCardCode, component: <TiltCardContent children={<h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">3D Interactive Tilt</h3>} /> },

    // --- NEW BLOCK N (rows 35-36): large + large (fills entire 4x2 area) ---
    { id: "magic_bento", category: "Cards", size: "large", code: MagicBentoCode, component: <MagicBentoContent /> },
    { id: "code_editor_card", category: "Cards", size: "large", code: CodeEditorCardCode, component: <CodeEditorCardContent /> },

    // --- NEW BLOCK O (rows 37-38): 2 small + large + 2 small ---
    { id: "glass_card", category: "Cards", code: GlassCardCode, component: <GlassCardContent /> },
    { id: "recipe_card", category: "Cards", code: RecipeCardCode, component: <RecipeCardContent /> },
    { id: "glitch_text", category: "Text", size: "large", code: GlitchTextCode, component: <GlitchTextContent text="Vitor's Lab" /> },
    { id: "number_card", category: "Cards", code: NumberCardCode, component: <NumberCardContent /> },
    { id: "ethereum_card", category: "Cards", code: EthereumCardCode, component: <EthereumCardContent /> },
];

export default function UILibrary() {
    const [activeCategory, setActiveCategory] = useState("All");
    const { t } = useLanguage();
    console.log(_components); // Keep imports used

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
                        className="mb-16 w-full h-[500px]"
                    >
                        <BlueprintShowcase
                            title={featuredComponent.title || featuredComponent.id.replace(/_/g, " ")}
                            code={featuredComponent.code || "// Code not available"}
                            className="w-full h-full"
                        >
                            <div className="scale-150">
                                {featuredComponent.component}
                            </div>
                        </BlueprintShowcase>
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
            grid-auto-flow: dense;
            gap: 1.5rem;
          }
          @media (min-width: 1024px) {
            .bento-grid {
              grid-template-columns: repeat(4, 1fr);
            }
            .grid-item-medium { grid-column: span 2; }
            .grid-item-large { grid-column: span 2; grid-row: span 2; }
          }
          
          /* Classe para pausar animações de forma inteligente (controlado pelo React) */
          .is-paused *, .is-paused *::before, .is-paused *::after {
             animation-play-state: paused !important;
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
                <Suspense fallback={<div className="flex items-center justify-center p-20 text-muted-foreground">Initializing components...</div>}>
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
                                        "bg-black/40 backdrop-blur-sm"
                                    )}
                                >
                                    <SpotlightCard
                                        className="p-0 border-0 bg-transparent shadow-none"
                                        spotlightColor="rgba(255, 255, 255, 0.1)"
                                    >
                                        <div className="relative z-10 size-full flex items-center justify-center p-0">
                                            <ComponentShowcase
                                                title={item.title || item.id.replace(/_/g, " ")}
                                                code={item.code || "// Code not available yet"}
                                                className="size-full border-0 bg-transparent shadow-none"
                                                scale={1}
                                                renderScale={1}
                                            >
                                                <div className="lab-component-wrapper">
                                                    {item.component}
                                                </div>
                                            </ComponentShowcase>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </Suspense>

                {otherComponents.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-muted-foreground">{t('uiLibrary.noComponents')}</p>
                    </div>
                )}
            </main>
        </div>
    );
}
