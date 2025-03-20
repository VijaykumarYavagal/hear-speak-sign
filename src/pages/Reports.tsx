
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, BarChart2, Download, Share2 } from 'lucide-react';
import AccuracyMeter from '@/components/AccuracyMeter';

const ReportsPage = () => {
  const [selectedTab, setSelectedTab] = useState('daily');
  
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeklyData = [65, 82, 78, 90, 85, 72, 68];
  
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recognition Reports</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          View detailed reports and analytics on your sign language recognition accuracy and progress.
        </p>
      </div>
      
      <div className="glass-card p-6 mb-8 relative overflow-hidden">
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
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-2xl font-bold">Recognition Accuracy</h2>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Download className="w-4 h-4 mr-1" />
                <span>Export</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Share2 className="w-4 h-4 mr-1" />
                <span>Share</span>
              </Button>
            </div>
          </div>
          
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="daily" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Daily</span>
              </TabsTrigger>
              <TabsTrigger value="weekly" className="flex items-center space-x-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>Weekly</span>
              </TabsTrigger>
              <TabsTrigger value="monthly" className="flex items-center space-x-2">
                <BarChart2 className="w-4 h-4 mr-2" />
                <span>Monthly</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily" className="space-y-8">
              <div className="flex justify-center">
                <AccuracyMeter value={85} size={180} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-black/20 border border-white/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Total Signs</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
                <div className="bg-black/20 border border-white/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Successful</p>
                  <p className="text-2xl font-bold text-green-500">132</p>
                </div>
                <div className="bg-black/20 border border-white/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Errors</p>
                  <p className="text-2xl font-bold text-red-500">24</p>
                </div>
                <div className="bg-black/20 border border-white/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Practice Time</p>
                  <p className="text-2xl font-bold">1.5 hrs</p>
                </div>
              </div>
              
              <div className="bg-black/20 border border-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Recognition Sessions</h3>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="border border-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Morning Session {index + 1}</h4>
                          <p className="text-sm text-muted-foreground">
                            {new Date().toLocaleTimeString()} • {index * 15 + 25} mins
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-green-500">{90 - index * 5}%</p>
                          <p className="text-sm text-muted-foreground">
                            {53 - index * 8} signs
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="weekly">
              <div className="bg-black/20 border border-white/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-6">Weekly Accuracy Trend</h3>
                <div className="flex items-end justify-between h-60">
                  {weeklyData.map((value, index) => (
                    <div key={index} className="flex flex-col items-center w-full">
                      <div 
                        className="w-full max-w-[30px] bg-sign-primary/80 rounded-t-sm"
                        style={{ height: `${value * 0.6}%` }}
                      ></div>
                      <div className="text-xs mt-2">{daysOfWeek[index]}</div>
                      <div className="text-xs text-muted-foreground">{value}%</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-black/20 border border-white/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Weekly Average</p>
                  <p className="text-2xl font-bold">
                    {Math.round(weeklyData.reduce((a, b) => a + b, 0) / weeklyData.length)}%
                  </p>
                </div>
                <div className="bg-black/20 border border-white/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Best Day</p>
                  <p className="text-2xl font-bold">
                    {daysOfWeek[weeklyData.indexOf(Math.max(...weeklyData))]} ({Math.max(...weeklyData)}%)
                  </p>
                </div>
                <div className="bg-black/20 border border-white/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Weekly Sessions</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="monthly">
              <div className="text-center p-12 border border-white/10 rounded-lg">
                <h3 className="text-lg text-muted-foreground">
                  Monthly reports will be available after 30 days of usage
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Continue practicing to unlock detailed monthly analytics
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="glass-card p-6 relative overflow-hidden">
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
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-6">Areas for Improvement</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Hand Position Consistency</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Finger Spelling Accuracy</span>
                <span>72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Complex Signs Recognition</span>
                <span>58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Speed and Fluidity</span>
                <span>81%</span>
              </div>
              <Progress value={81} className="h-2" />
            </div>
          </div>
          
          <div className="mt-8">
            <Button className="primary-gradient text-white hover:opacity-90">
              View Personalized Training Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
