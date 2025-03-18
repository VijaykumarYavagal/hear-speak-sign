
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About SignConnect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission is to create a more inclusive world through sign language communication.
          </p>
        </div>
        
        <div className="pb-16">
          <p className="text-lg mb-4">
            This is a placeholder About page. The actual content will be created in a future update.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
