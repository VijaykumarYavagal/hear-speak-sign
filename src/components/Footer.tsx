
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-16 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
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
            <p className="mt-4 text-muted-foreground max-w-xs">
              Breaking communication barriers between deaf and hearing individuals through innovative sign language solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                <span className="sr-only">YouTube</span>
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                  Real-time Interpretation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                  Video Chat
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                  Community Connection
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Sign Street</p>
              <p>San Francisco, CA 94103</p>
              <p className="mt-3">contact@signconnect.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} SignConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-sign-primary transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
