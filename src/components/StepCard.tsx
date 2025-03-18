
import { ReactNode, useEffect, useRef } from 'react';

interface StepCardProps {
  number: string;
  title: string;
  children: ReactNode;
}

const StepCard = ({ number, title, children }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center relative group">
      {/* Animated border overlay */}
      <div className="absolute inset-0 rounded-xl border border-sign-primary/20 overflow-hidden">
        <div className="absolute top-0 left-[-100%] w-[200%] h-[2px] primary-gradient animate-slide-right"></div>
        <div className="absolute bottom-0 right-[-100%] w-[200%] h-[2px] primary-gradient animate-slide-left"></div>
        <div className="absolute right-0 top-[-100%] h-[200%] w-[2px] primary-gradient animate-slide-down"></div>
        <div className="absolute left-0 bottom-[-100%] h-[200%] w-[2px] primary-gradient animate-slide-up"></div>
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
