
import { useState, useEffect } from 'react';

interface AccuracyMeterProps {
  value: number;
  size?: number;
  thickness?: number;
  animated?: boolean;
}

const AccuracyMeter = ({ 
  value, 
  size = 120, 
  thickness = 10,
  animated = true 
}: AccuracyMeterProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    if (animated) {
      // Animate the value change
      const duration = 1000; // 1 second
      const startTime = Date.now();
      const startValue = currentValue;
      
      const animateValue = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutCubic(progress);
        
        setCurrentValue(startValue + (value - startValue) * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };
      
      requestAnimationFrame(animateValue);
    } else {
      setCurrentValue(value);
    }
  }, [value, animated]);
  
  // Easing function for smoother animation
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };
  
  // Calculate the stroke dash array and offset
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * (1 - currentValue / 100);
  
  // Determine color based on accuracy value
  const getColor = (value: number) => {
    if (value >= 90) return '#22c55e'; // Green
    if (value >= 70) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };
  
  const color = getColor(currentValue);
  
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Background circle */}
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
        className="absolute"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={thickness}
        />
      </svg>
      
      {/* Progress circle */}
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
        className="absolute -rotate-90"
      >
        <defs>
          <linearGradient id="accuracyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#accuracyGradient)"
          strokeWidth={thickness}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      
      {/* Value text */}
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">{Math.round(currentValue)}%</span>
        <span className="text-xs text-muted-foreground">Accuracy</span>
      </div>
    </div>
  );
};

export default AccuracyMeter;
