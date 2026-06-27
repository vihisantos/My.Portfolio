import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { PageLoadingWrapper } from "@/components/PageLoadingWrapper";
import { Loader } from "@/components/Loader";
import { CommandBar } from "@/components/CommandBar";
import { Suspense, lazy, useEffect } from "react";
import { trackPageView, trackThemeChange } from "./lib/analytics";
import { reportWebVitals } from "./lib/webVitals";

// Carregamento lento de páginas para desempenho
const Index = lazy(() => import("./pages/Index"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const UILibrary = lazy(() => import("./pages/UILibrary"));
const CapybaraHolding = lazy(() => import("./pages/CapybaraHolding"));
const Sponsorship = lazy(() => import("./pages/Sponsorship"));
const Documentation = lazy(() => import("./pages/Documentation"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServerError = lazy(() => import("./pages/ServerError"));

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const queryClient = new QueryClient();

function RootApp() {
  useEffect(() => {
    // Inicializar tema do localStorage
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      trackThemeChange("dark");
    } else {
      document.documentElement.classList.remove("dark");
      trackThemeChange("light");
    }

    reportWebVitals();
  }, []);

  useEffect(() => {
    let originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (document.title !== "eii, volta aqui... 💤") {
          originalTitle = document.title;
        }
        document.title = "eii, volta aqui... 💤";
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <LanguageProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <AnalyticsTracker />
              <ErrorBoundary>
                <ScrollProgress />
                <BackToTop />
                <Toaster />
                <Sonner />
                <CommandBar />
                <PageLoadingWrapper>
                  <Suspense fallback={<Loader />}>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/projects" element={<ProjectsPage />} />
                      <Route path="/project/:id" element={<ProjectDetails />} />
                      <Route path="/ui-library" element={<UILibrary />} />
                      <Route path="/capybara-holding" element={<CapybaraHolding />} />
                      <Route path="/sponsorship" element={<Sponsorship />} />
                      <Route path="/docs" element={<Documentation />} />
                      <Route path="/500" element={<ServerError />} />
                      {/* ADICIONAR TODAS AS ROTAS PERSONALIZADAS ACIMA DA ROTA "CATCH-ALL" "*" */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </PageLoadingWrapper>
              </ErrorBoundary>
            </BrowserRouter>
          </LanguageProvider>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<RootApp />);
