
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HelpPage = () => {
  const faqs = [
    {
      question: "What is SignConnect?",
      answer: "SignConnect is an AI-powered platform designed to recognize and translate sign language in real-time. Our technology helps bridge communication gaps and provides accessibility for the deaf and hard of hearing community."
    },
    {
      question: "Which sign languages are supported?",
      answer: "Currently, SignConnect supports American Sign Language (ASL), British Sign Language (BSL), and Australian Sign Language (Auslan). We're continuously working to add more languages to our platform."
    },
    {
      question: "How accurate is the sign recognition?",
      answer: "Our current recognition accuracy averages around 87%, although this can vary depending on factors like lighting, camera quality, and the complexity of the signs being performed. We're constantly improving our AI models for better accuracy."
    },
    {
      question: "What equipment do I need to use SignConnect?",
      answer: "You'll need a device with a camera (laptop, tablet, or smartphone) and a stable internet connection. For the best experience, we recommend using a device with a good quality front-facing camera and positioning yourself in a well-lit environment."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data privacy very seriously. Video streams are processed in real-time and are not stored on our servers. Any user data we collect is anonymized and used only to improve our recognition algorithms."
    },
    {
      question: "How can I track my progress?",
      answer: "Registered users can access detailed progress reports in their dashboard. These reports show improvement over time, commonly used signs, and suggested practice areas."
    },
    {
      question: "Is SignConnect free to use?",
      answer: "We offer a free basic tier with limited features. Premium features, including advanced progress tracking, personalized learning paths, and higher usage limits, are available with our subscription plans."
    },
    {
      question: "How do I get support?",
      answer: "If you need help or have questions, you can contact our support team via the Contact page or email support@signconnect.com. We typically respond within 24 hours."
    }
  ];

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions and learn how to get the most out of SignConnect.
          </p>
        </div>
        
        <div className="glass-card p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-3 hover:bg-white/5 text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Getting Started Guide</h3>
              <p className="text-muted-foreground mb-6">
                New to SignConnect? Our comprehensive guide will help you set up your account and start using the platform effectively.
              </p>
              <Button className="primary-gradient text-white">View Guide</Button>
            </div>
          </div>
          
          <div className="glass-card p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
              <p className="text-muted-foreground mb-6">
                Need personal assistance? Reach out to our support team and we'll help resolve your issues.
              </p>
              <Link to="/contact">
                <Button className="primary-gradient text-white">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-8 relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Setup & Configuration</p>
                  <Button variant="outline" size="sm">Watch Now</Button>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Using Recognition Features</p>
                  <Button variant="outline" size="sm">Watch Now</Button>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Progress Tracking Tutorial</p>
                  <Button variant="outline" size="sm">Watch Now</Button>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Advanced Features</p>
                  <Button variant="outline" size="sm">Watch Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
