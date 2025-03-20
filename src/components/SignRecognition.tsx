import { useState, useRef, useEffect } from 'react';
import { Video, X, Settings, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const SignRecognition = () => {
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [currentSign, setCurrentSign] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [recognitionHistory, setRecognitionHistory] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { toast } = useToast();

  // Function to start the webcam
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: 640,
          height: 480,
          facingMode: 'user'
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsWebcamActive(true);
        
        // Show toast notification
        toast({
          title: "Webcam activated",
          description: "Sign language recognition is now active",
        });

        // Simulate sign detection (in a real app, this would be your ML model)
        startSignDetection();
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
      toast({
        title: "Webcam Error",
        description: "Could not access webcam. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  // Function to stop the webcam
  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      setIsWebcamActive(false);
      
      toast({
        title: "Webcam deactivated",
        description: "Sign language recognition has been stopped",
      });
    }
  };

  // Simulate sign detection (replace with actual ML model in production)
  const startSignDetection = () => {
    const signs = ['Hello', 'Thank you', 'Help', 'Yes', 'No', 'Please', 'Good'];
    const confidenceLevels = [65, 75, 85, 90, 95, 98];
    
    const detectionInterval = setInterval(() => {
      if (!isWebcamActive) {
        clearInterval(detectionInterval);
        return;
      }
      
      // Randomly select a sign and confidence level
      const randomSign = signs[Math.floor(Math.random() * signs.length)];
      const randomConfidence = confidenceLevels[Math.floor(Math.random() * confidenceLevels.length)];
      
      setCurrentSign(randomSign);
      setConfidence(randomConfidence);
      
      // Add to history
      setRecognitionHistory(prev => [randomSign, ...prev].slice(0, 5));
      
      // Play custom animation based on detected sign
      playSignAnimation(randomSign, randomConfidence);
      
    }, 3000); // Detect every 3 seconds
    
    return () => clearInterval(detectionInterval);
  };

  // Custom animations based on detected sign
  const playSignAnimation = (sign: string, confidenceLevel: number) => {
    const resultBox = document.getElementById('result-box');
    
    if (resultBox) {
      // Reset animations
      resultBox.classList.remove('animate-pulse', 'animate-bounce', 'animate-shake');
      
      // Apply new animation based on confidence and sign
      if (confidenceLevel > 90) {
        resultBox.classList.add('animate-pulse');
        
        // Special animation for "Thank you" or "Hello"
        if (sign === 'Thank you' || sign === 'Hello') {
          showConfetti();
        }
      } else if (confidenceLevel > 80) {
        // Glow effect for full words
        resultBox.classList.add('neon-glow');
      } else if (confidenceLevel < 70) {
        // Shake effect for low confidence
        resultBox.classList.add('animate-shake');
      }
      
      // Force animation restart
      void resultBox.offsetWidth;
    }
  };

  // Show confetti for special messages
  const showConfetti = () => {
    // In a real implementation, this would show actual confetti
    toast({
      title: "Special Sign Detected! 🎉",
      description: "Great job signing a greeting!",
    });
  };

  useEffect(() => {
    return () => {
      // Clean up when component unmounts
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 relative">
      {/* Border animation that goes around the entire component */}
      <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
        </div>
        <div className="absolute left-0 top-0 w-[2px] h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f25f30] to-transparent animate-border-vertical-reverse"></div>
        </div>
        <div className="absolute right-0 top-0 w-[2px] h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f25f30] to-transparent animate-border-vertical-reverse"></div>
        </div>
      </div>
      
      {/* Webcam section */}
      <div className="relative">
        <div className={`rounded-xl overflow-hidden shadow-xl transition-all duration-500 ${isWebcamActive ? 'border-2 border-sign-primary pulse-border' : 'border border-white/10'}`}>
          <video 
            ref={videoRef}
            autoPlay 
            playsInline
            muted
            className={`w-full h-[480px] object-cover transition-all duration-500 ${isWebcamActive ? 'opacity-100' : 'opacity-50'}`}
          />
          
          {!isWebcamActive && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
              <Button 
                onClick={startWebcam}
                className="primary-gradient text-white hover:opacity-90 flex items-center space-x-2"
              >
                <Video className="w-4 h-4 mr-2" />
                <span>Activate Webcam</span>
              </Button>
            </div>
          )}
          
          {isWebcamActive && (
            <Button 
              onClick={stopWebcam}
              variant="destructive"
              className="absolute top-4 right-4 rounded-full w-10 h-10 p-0 flex items-center justify-center"
              aria-label="Stop webcam"
            >
              <X className="w-5 h-5" />
            </Button>
          )}

          <canvas ref={canvasRef} className="hidden" width="640" height="480" />
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" className="flex items-center space-x-2">
            <Settings className="w-4 h-4 mr-2" />
            <span>Camera Settings</span>
          </Button>
          
          <span className={`text-sm ${isWebcamActive ? 'text-sign-primary' : 'text-muted-foreground'}`}>
            {isWebcamActive ? 'Camera Active' : 'Camera Inactive'}
          </span>
        </div>
      </div>
      
      {/* Recognition results section */}
      <div className="flex flex-col h-full">
        <div 
          id="result-box" 
          className={`glass-card p-6 h-40 flex flex-col items-center justify-center mb-6 transition-all duration-300 ${currentSign ? 'transform scale-105' : ''}`}
        >
          <h3 className="text-lg text-muted-foreground mb-2">Recognized Sign</h3>
          {currentSign ? (
            <>
              <p className="text-3xl font-bold mb-2">{currentSign}</p>
              <div className="w-full max-w-xs">
                <Progress value={confidence} className="h-2" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Confidence: {confidence}%</p>
            </>
          ) : (
            <p className="text-xl text-muted-foreground">Waiting for sign...</p>
          )}
        </div>
        
        <div className="glass-card p-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Recent Recognitions</h3>
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <Volume2 className="w-4 h-4 mr-1" />
              <span>Speak All</span>
            </Button>
          </div>
          
          <div className="space-y-3">
            {recognitionHistory.length > 0 ? (
              recognitionHistory.map((sign, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5"
                >
                  <span>{sign}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">No signs recognized yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignRecognition;
