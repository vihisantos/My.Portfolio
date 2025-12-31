import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center section-padding">
        <div className="container-custom text-center max-w-2xl">
          <h1 className="text-6xl sm:text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page not found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold smooth-transition hover:shadow-lg hover:shadow-primary/30"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
