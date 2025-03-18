
import { ReactNode } from 'react';

interface StepCardProps {
  number: string;
  title: string;
  children: ReactNode;
}

const StepCard = ({ number, title, children }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center relative group">
      {/* Container with subtle border */}
      <div className="absolute inset-0 rounded-xl border border-sign-primary/10 overflow-hidden">
        {/* Top running light */}
        <div className="absolute top-0 left-0 w-24 h-[2px] primary-gradient animate-border-run-right"></div>
        
        {/* Right running light */}
        <div className="absolute top-0 right-0 h-24 w-[2px] primary-gradient animate-border-run-down"></div>
        
        {/* Bottom running light */}
        <div className="absolute bottom-0 right-0 w-24 h-[2px] primary-gradient animate-border-run-left"></div>
        
        {/* Left running light */}
        <div className="absolute bottom-0 left-0 h-24 w-[2px] primary-gradient animate-border-run-up"></div>
      </div>
      
      <div className="p-6 z-10">
        <div className="w-20 h-20 rounded-full primary-gradient flex items-center justify-center mb-6 text-white text-3xl font-bold transition-transform duration-300 group-hover:scale-110">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {children}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
