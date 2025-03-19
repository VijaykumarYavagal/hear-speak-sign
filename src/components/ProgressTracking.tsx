
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Activity, 
  BarChart3, 
  BookOpenCheck, 
  History, 
  Languages, 
  Award, 
  Clock
} from 'lucide-react';

const ProgressTracking = () => {
  const [selectedTab, setSelectedTab] = useState('overall');
  
  return (
    <div className="p-6">
      <div className="glass-card p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Overall Progress</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Daily View</span>
            <Switch id="progress-view-toggle" />
            <span className="text-sm text-muted-foreground">Weekly View</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-4 relative overflow-hidden group">
            <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-80 h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-3">
                <Activity className="w-5 h-5 text-sign-primary" />
                <h3 className="font-semibold">Recognition Accuracy</h3>
              </div>
              <div className="flex items-end justify-between mb-2">
                <span className="text-3xl font-bold">87%</span>
                <span className="text-sm text-green-500">+5% this week</span>
              </div>
              <Progress value={87} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">Based on last 100 recognition attempts</p>
            </div>
          </div>
          
          <div className="glass-card p-4 relative overflow-hidden group">
            <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-80 h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-3">
                <BookOpenCheck className="w-5 h-5 text-sign-primary" />
                <h3 className="font-semibold">Learning Completion</h3>
              </div>
              <div className="flex items-end justify-between mb-2">
                <span className="text-3xl font-bold">62%</span>
                <span className="text-sm text-green-500">+12% this week</span>
              </div>
              <Progress value={62} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">45 of 72 signs learned</p>
            </div>
          </div>
          
          <div className="glass-card p-4 relative overflow-hidden group">
            <div className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 left-0 w-80 h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f25f30] to-transparent animate-border-reverse"></div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-5 h-5 text-sign-primary" />
                <h3 className="font-semibold">Practice Time</h3>
              </div>
              <div className="flex items-end justify-between mb-2">
                <span className="text-3xl font-bold">24h</span>
                <span className="text-sm text-green-500">3.5h this week</span>
              </div>
              <Progress value={75} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">24 hours of total practice time</p>
            </div>
          </div>
        </div>
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid grid-cols-4 w-full mb-6">
          <TabsTrigger value="overall" className="flex items-center space-x-2">
            <BarChart3 className="w-4 h-4 mr-2" />
            <span>Overall</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center space-x-2">
            <History className="w-4 h-4 mr-2" />
            <span>History</span>
          </TabsTrigger>
          <TabsTrigger value="languages" className="flex items-center space-x-2">
            <Languages className="w-4 h-4 mr-2" />
            <span>Languages</span>
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center space-x-2">
            <Award className="w-4 h-4 mr-2" />
            <span>Achievements</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overall" className="glass-card p-6">
          <h3 className="text-xl font-bold mb-4">Weekly Progress Overview</h3>
          <div className="h-64 flex items-center justify-center border border-white/10 rounded-lg bg-black/20">
            <p className="text-muted-foreground">Weekly progress chart would be displayed here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="glass-card p-6">
          <h3 className="text-xl font-bold mb-4">Recognition History</h3>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                <div>
                  <p className="font-medium">Practice Session #{index + 1}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(Date.now() - index * 86400000).toLocaleDateString()} • 25 min
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{90 - index * 3}% accuracy</p>
                  <p className="text-sm text-muted-foreground">
                    {20 - index} signs recognized
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="languages" className="glass-card p-6">
          <h3 className="text-xl font-bold mb-4">Language Progress</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">American Sign Language (ASL)</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">British Sign Language (BSL)</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Australian Sign Language (Auslan)</span>
                <span>30%</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="achievements" className="glass-card p-6">
          <h3 className="text-xl font-bold mb-4">Your Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "First Steps", description: "Complete your first recognition session", completed: true },
              { title: "Quick Learner", description: "Learn 10 signs in a single day", completed: true },
              { title: "Consistent Practice", description: "Practice for 7 consecutive days", completed: false },
              { title: "Multilingual", description: "Learn signs in 3 different languages", completed: false },
              { title: "Perfect Score", description: "Achieve 100% accuracy in a session", completed: false },
              { title: "Expert Communicator", description: "Master 100 signs", completed: false },
            ].map((achievement, index) => (
              <div 
                key={index} 
                className={`p-4 border rounded-lg ${
                  achievement.completed 
                    ? 'border-sign-primary bg-sign-primary/10' 
                    : 'border-white/10 bg-black/20 opacity-70'
                }`}
              >
                <h4 className="font-semibold mb-1">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                <div className="flex items-center">
                  {achievement.completed ? (
                    <span className="text-xs text-sign-primary">Completed</span>
                  ) : (
                    <span className="text-xs text-muted-foreground">In progress</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressTracking;
