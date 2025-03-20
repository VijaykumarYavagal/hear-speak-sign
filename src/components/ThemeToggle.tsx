
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

const ThemeToggle = ({ className = '', compact = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div 
      className={`flex items-center ${className}`}
      aria-label="Toggle dark mode"
    >
      <button
        onClick={toggleTheme}
        className={`relative rounded-full transition-all duration-300 focus:outline-none ${
          compact ? 'w-10 h-5' : 'w-14 h-7'
        } ${
          theme === 'dark' 
            ? 'bg-sign-dark shadow-inner border border-white/10' 
            : 'bg-white shadow-md border border-gray-200'
        }`}
      >
        <div
          className={`absolute top-0.5 transition-transform duration-300 flex items-center justify-center rounded-full ${
            compact ? 'w-4 h-4' : 'w-6 h-6'
          } ${
            theme === 'dark'
              ? 'right-0.5 bg-sign-dark border border-white/20 transform translate-x-0'
              : 'left-0.5 bg-white border border-gray-200 transform translate-x-0'
          }`}
        >
          {theme === 'dark' ? (
            <Moon className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} text-yellow-200`} />
          ) : (
            <Sun className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} text-yellow-500`} />
          )}
        </div>
        
        {/* Small stars for dark mode */}
        {theme === 'dark' && (
          <>
            <span className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full"></span>
            <span className="absolute top-3 left-3 w-0.5 h-0.5 bg-white rounded-full"></span>
            <span className="absolute bottom-1 left-4 w-0.5 h-0.5 bg-white rounded-full"></span>
          </>
        )}
        
        {/* Small rays for light mode */}
        {theme === 'light' && (
          <>
            <span className="absolute top-2 right-2 w-1 h-0.5 bg-yellow-300 rounded-full"></span>
            <span className="absolute top-3 right-3 w-1 h-0.5 bg-yellow-300 rounded-full"></span>
            <span className="absolute bottom-2 right-2 w-1 h-0.5 bg-yellow-300 rounded-full"></span>
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
