
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-sign-dark/90 backdrop-blur-lg shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 text-sign-primary"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm2-9.9c-.06-.39-.22-.75-.45-1.05.31-.35.53-.79.54-1.3 0-1.06-.87-1.75-1.65-1.75-.62 0-1.2.49-1.2 1.08 0 .56.4 1.01.93 1.08.51.07.97.42.99.93 0 1.32-1.3 1.35-1.34.91-.03-.31.17-.57.31-.57.16 0 .29.27.31.54l1.14-.83c-.6-.68-1.01-1.23-1.01-1.62 0-.56.45-1.01 1.01-1.01s1.01.45 1.01 1.01c0 .39-.23.84-.57 1.32.35.3.57.71.57 1.17 0 .73-.41 1.34-.97 1.67.33.4.42.93.42 1.42 0 1.77-1.58 2.98-3.09 2.98-.94 0-1.66-.56-1.66-1.45 0-.34.11-.64.3-.88l.52.49c-.1.16-.15.34-.15.52 0 .5.38.88.88.88 1.29 0 2.28-.82 2.28-2.01 0-.32-.06-.65-.22-.96l-.84.84z" />
            </svg>
            <span className="font-display font-bold text-xl">SignConnect</span>
          </Link>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-sign-primary transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-sign-primary transition-colors duration-200">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-sign-primary transition-colors duration-200">
              Services
            </Link>
            <Link to="/contact" className="text-foreground hover:text-sign-primary transition-colors duration-200">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <Button className="hero-cta primary-gradient text-white hover:opacity-90 hover:scale-105">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 py-6 px-4 animate-scale-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-sign-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-sign-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-sign-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-sign-primary transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="hero-cta primary-gradient text-white w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
