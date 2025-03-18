
import { ReactNode } from 'react';

interface StepCardProps {
  number: string;
  title: string;
  children: ReactNode;
}

const StepCard = ({ number, title, children }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full primary-gradient flex items-center justify-center mb-6 text-white text-3xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        {children}
      </p>
    </div>
  );
};

export default StepCard;
