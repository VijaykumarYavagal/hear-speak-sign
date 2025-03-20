
import SignRecognition from "@/components/SignRecognition";
import AccuracyMeter from "@/components/AccuracyMeter";

const RecognitionPage = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sign Language Recognition</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Use your webcam to recognize sign language in real-time. Our AI-powered system translates signs to text with high accuracy.
        </p>
      </div>
      
      <div className="glass-card p-6 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
          </div>
        </div>
        
        <div className="relative z-10">
          <SignRecognition />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <AccuracyMeter value={87} />
            <h3 className="text-xl font-semibold mt-4 mb-2">Overall Accuracy</h3>
            <p className="text-muted-foreground">
              Based on your recent recognition sessions
            </p>
          </div>
        </div>
        
        <div className="glass-card p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-6xl font-bold text-sign-primary mb-2">124</div>
            <h3 className="text-xl font-semibold mb-2">Signs Recognized</h3>
            <p className="text-muted-foreground">
              Total number of successfully recognized signs
            </p>
          </div>
        </div>
        
        <div className="glass-card p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-6xl font-bold text-sign-primary mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p className="text-muted-foreground">
              ASL, BSL, and Auslan currently supported
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionPage;
