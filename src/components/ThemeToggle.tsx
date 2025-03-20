
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

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
        className={`relative rounded-lg transition-all duration-300 focus:outline-none ${
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
            <div className="flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <div className="text-yellow-200 relative">
                  <svg viewBox="0 0 24 24" fill="none" className={`${compact ? 'w-3 h-3' : 'w-4 h-4'}`}>
                    <path 
                      d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" 
                      fill="currentColor" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute top-0 left-1/4 w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <div className="text-yellow-500 relative">
                  <svg viewBox="0 0 24 24" fill="none" className={`${compact ? 'w-3 h-3' : 'w-4 h-4'}`}>
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <path 
                      d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Background elements for visual appeal */}
        {theme === 'dark' ? (
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
            <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="absolute top-3 left-4 w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-white rounded-full"></div>
          </div>
        ) : (
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
            <div className="absolute top-1 right-2 w-1 h-0.5 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-3 right-4 w-1 h-0.5 bg-yellow-300 rounded-full"></div>
            <div className="absolute bottom-1 right-3 w-1 h-0.5 bg-yellow-300 rounded-full"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
