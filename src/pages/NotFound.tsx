
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sign-muted to-background px-4">
      <div className="text-center animate-fade-in glass-card p-10 max-w-lg">
        <h1 className="text-6xl font-bold text-sign-primary mb-6">404</h1>
        <p className="text-2xl text-foreground mb-8">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="hero-cta primary-gradient text-white hover:opacity-90 hover:scale-105">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
