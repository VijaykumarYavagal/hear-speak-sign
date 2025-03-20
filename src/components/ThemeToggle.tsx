
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
        className={`relative rounded-full transition-all duration-300 focus:outline-none ${
          compact ? 'w-10 h-5' : 'w-16 h-8'
        } ${
          theme === 'dark' 
            ? 'bg-gray-800 shadow-inner border border-white/10' 
            : 'bg-blue-50 shadow-md border border-gray-200'
        }`}
      >
        <div
          className={`absolute top-1 transition-transform duration-300 rounded-full ${
            compact ? 'w-3 h-3' : 'w-6 h-6'
          } ${
            theme === 'dark'
              ? 'right-1 bg-indigo-900 transform translate-x-0'
              : 'left-1 bg-yellow-100 transform translate-x-0'
          }`}
        >
          {theme === 'dark' ? (
            <div className="flex items-center justify-center h-full w-full">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-4 h-4 text-blue-100"
              >
                <path 
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute w-1 h-1 bg-blue-200 rounded-full top-0.5 right-1" />
                <div className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full top-1 left-1" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-4 h-4 text-yellow-500"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Background elements for visual appeal */}
        {theme === 'dark' ? (
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-gray-900"></div>
            <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="absolute top-3 left-4 w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="absolute bottom-1 left-3 w-0.5 h-0.5 bg-white rounded-full"></div>
          </div>
        ) : (
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50"></div>
            <div className="absolute top-1 right-2 w-1 h-1 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-3 right-4 w-1 h-1 bg-yellow-300 rounded-full"></div>
            <div className="absolute bottom-2 right-3 w-1 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
