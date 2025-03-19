
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="feature-card group relative">
      {/* Container with subtle border */}
      <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
        {/* Bottom running light */}
        <div className="absolute bottom-0 left-0 w-36 h-[2px] bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-run-right"></div>
      </div>
      
      <div className="p-6 z-10 relative">
        <div className="w-12 h-12 rounded-full flex items-center justify-center primary-gradient mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
