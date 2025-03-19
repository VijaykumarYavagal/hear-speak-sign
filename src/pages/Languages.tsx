
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Languages, BookOpen, Video, Check, Award } from 'lucide-react';

const LanguagesPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('asl');
  
  const languages = [
    {
      id: 'asl',
      name: 'American Sign Language (ASL)',
      progress: 75,
      totalSigns: 250,
      learnedSigns: 187,
      country: 'United States & Canada',
      difficulty: 'Beginner-Friendly'
    },
    {
      id: 'bsl',
      name: 'British Sign Language (BSL)',
      progress: 45,
      totalSigns: 200,
      learnedSigns: 90,
      country: 'United Kingdom',
      difficulty: 'Intermediate'
    },
    {
      id: 'auslan',
      name: 'Australian Sign Language (Auslan)',
      progress: 30,
      totalSigns: 180,
      learnedSigns: 54,
      country: 'Australia',
      difficulty: 'Intermediate'
    },
    {
      id: 'lsf',
      name: 'French Sign Language (LSF)',
      progress: 10,
      totalSigns: 220,
      learnedSigns: 22,
      country: 'France',
      difficulty: 'Advanced'
    }
  ];
  
  const selectedLang = languages.find(lang => lang.id === selectedLanguage);
  
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Supported Sign Languages</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our platform supports multiple sign languages from around the world. Select a language to view your progress and start learning.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="glass-card p-6 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-80 h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Languages className="mr-2 text-sign-primary" />
                <span>Select Language</span>
              </h2>
              
              <div className="space-y-4">
                {languages.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between ${
                      selectedLanguage === lang.id
                        ? 'border-sign-primary bg-sign-primary/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div>
                      <p className="font-medium">{lang.name}</p>
                      <div className="mt-2">
                        <Progress value={lang.progress} className="h-1.5" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {lang.progress}% Complete
                      </p>
                    </div>
                    {selectedLanguage === lang.id && (
                      <Check className="text-sign-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          {selectedLang && (
            <div className="glass-card p-6 relative overflow-hidden">
              <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-[2px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-80 h-[2px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">{selectedLang.name}</h2>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="text-sm bg-black/20 border border-white/10 px-3 py-1 rounded-full">
                    {selectedLang.country}
                  </span>
                  <span className="text-sm bg-black/20 border border-white/10 px-3 py-1 rounded-full">
                    {selectedLang.difficulty}
                  </span>
                  <span className="text-sm bg-black/20 border border-white/10 px-3 py-1 rounded-full">
                    {selectedLang.totalSigns} Total Signs
                  </span>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Your Progress</span>
                    <span>
                      {selectedLang.learnedSigns} of {selectedLang.totalSigns} signs
                    </span>
                  </div>
                  <Progress value={selectedLang.progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-black/20 border border-white/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-sign-primary mb-2">
                      {selectedLang.learnedSigns}
                    </div>
                    <p className="text-sm text-muted-foreground">Signs Learned</p>
                  </div>
                  
                  <div className="bg-black/20 border border-white/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-sign-primary mb-2">
                      {selectedLang.progress}%
                    </div>
                    <p className="text-sm text-muted-foreground">Completion</p>
                  </div>
                  
                  <div className="bg-black/20 border border-white/10 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-sign-primary mb-2">
                      {selectedLang.id === 'asl' ? 'Advanced' : 'Beginner'}
                    </div>
                    <p className="text-sm text-muted-foreground">Your Level</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>Continue Learning</span>
                  </Button>
                  
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Video className="w-4 h-4 mr-2" />
                    <span>Practice Recognition</span>
                  </Button>
                  
                  <Button variant="secondary" className="flex items-center space-x-2">
                    <Award className="w-4 h-4 mr-2" />
                    <span>View Achievements</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguagesPage;
