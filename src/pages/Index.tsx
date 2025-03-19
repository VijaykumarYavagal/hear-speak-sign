
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Video, MessageSquare, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import StepCard from '@/components/StepCard';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('animate-fade-up');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <section 
        ref={heroRef}
        className="min-h-screen relative flex items-center justify-center pt-20 pb-20 px-4"
      >
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-sign-dark to-background"></div>
        
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full primary-gradient opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-sign-accent opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="stagger-animate">
              <span className="inline-block py-1 px-3 mb-6 rounded-full text-sm font-medium bg-sign-primary/10 text-sign-primary">
                Breaking Communication Barriers
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                Connect Through <span className="text-sign-primary">Sign Language</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                A revolutionary platform that bridges the gap between deaf and hearing individuals, making communication effortless and inclusive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="hero-cta primary-gradient text-white hover:opacity-90 hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" className="hero-cta hover:bg-muted/50">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://sigmawire.net/i/03/aOFgVh.png" 
                  alt="Two people communicating through sign language" 
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-sign-primary"></div>
              <div className="absolute -z-10 -bottom-12 -right-12 w-full h-full rounded-2xl border-2 border-sign-primary/50"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={featuresRef} 
        className="py-24 px-4"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="section-heading">
              Key Features
            </h2>
            <p className="section-subheading">
              Discover the powerful tools we've built to revolutionize communication between deaf and hearing individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.1s' }}>
              <FeatureCard 
                title="Real-time Interpretation"
                description="Advanced technology that translates sign language to text and speech in real-time, enabling smooth communication."
                icon={Video}
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.2s' }}>
              <FeatureCard 
                title="Video Chat"
                description="High-quality, low-latency video calls optimized for sign language visibility and clear communication."
                icon={MessageSquare}
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.3s' }}>
              <FeatureCard 
                title="Learning Resources"
                description="Comprehensive library of sign language tutorials, practice exercises, and educational materials."
                icon={BookOpen}
              />
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.4s' }}>
              <FeatureCard 
                title="Community Connection"
                description="Connect with a vibrant community of deaf, hard of hearing, and hearing individuals who share similar interests."
                icon={Users}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={howItWorksRef}
        className="py-24 px-4 bg-sign-dark"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="section-heading text-white">
              How It Works
            </h2>
            <p className="section-subheading text-sign-muted-foreground">
              Three simple steps to start breaking down communication barriers and connecting through sign language.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.1s' }}>
              <StepCard number="01" title="Create Your Account">
                Sign up in seconds and customize your profile with your language preferences and communication needs.
              </StepCard>
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.2s' }}>
              <StepCard number="02" title="Select Your Service">
                Choose from real-time interpretation, video calls, learning resources, or community connections based on your needs.
              </StepCard>
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ transitionDelay: '0.3s' }}>
              <StepCard number="03" title="Connect & Communicate">
                Start breaking barriers immediately with our intuitive platform designed for seamless interaction between all users.
              </StepCard>
            </div>
          </div>
          
          <div className="text-center mt-16 animate-on-scroll opacity-0">
            <Link to="/services">
              <Button className="hero-cta primary-gradient text-white hover:opacity-90 hover:scale-105">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative bg-sign-dark">
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-sign-dark via-sign-dark to-background"></div>
        
        <div className="container mx-auto">
          <div className="cta-card p-10 md:p-16 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-36 h-[2px] bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-run-right"></div>
              <div className="absolute bottom-0 right-0 w-36 h-[2px] bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-run-left"></div>
            </div>
            
            <div className="absolute inset-0 rounded-xl border border-sign-primary/20 overflow-hidden">
              <div className="absolute top-0 left-[-100%] w-[200%] h-[2px] primary-gradient animate-slide-right"></div>
              <div className="absolute bottom-0 right-[-100%] w-[200%] h-[2px] primary-gradient animate-slide-left"></div>
              <div className="absolute right-0 top-[-100%] h-[200%] w-[2px] primary-gradient animate-slide-down"></div>
              <div className="absolute left-0 bottom-[-100%] h-[200%] w-[2px] primary-gradient animate-slide-up"></div>
            </div>
            
            <div className="absolute -inset-0.5 bg-sign-primary/10 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="text-center animate-on-scroll opacity-0 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Join Thousands Breaking Communication Barriers
              </h2>
              <p className="text-xl text-sign-muted-foreground mb-12 max-w-3xl mx-auto">
                Start your journey today and be part of our growing community dedicated to making communication accessible for everyone.
              </p>
              <Button className="hero-cta primary-gradient text-white hover:opacity-90 hover:scale-105">
                Get Started For Free
              </Button>
              <p className="mt-6 text-sm text-sign-muted-foreground">
                No credit card required. Start with our free tier and upgrade anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
