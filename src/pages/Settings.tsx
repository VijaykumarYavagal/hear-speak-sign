
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { 
  Volume2, 
  Mic, 
  Sliders, 
  Languages, 
  Bell, 
  Shield, 
  Keyboard, 
  Eye, 
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const SettingsPage = () => {
  const [voiceType, setVoiceType] = useState('female');
  const [speakingRate, setSpeakingRate] = useState([1.0]);
  const [volume, setVolume] = useState([0.8]);
  const [notifications, setNotifications] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been successfully updated.",
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="voice" className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-8">
          <TabsTrigger value="voice">
            <Volume2 className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Voice</span>
          </TabsTrigger>
          <TabsTrigger value="recognition">
            <Mic className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Recognition</span>
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Eye className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="account">
            <User className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </TabsTrigger>
          <TabsTrigger value="preferences">
            <Sliders className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Preferences</span>
          </TabsTrigger>
          <TabsTrigger value="language">
            <Languages className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Language</span>
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Shield className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Privacy</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="voice">
          <Card>
            <CardHeader>
              <CardTitle>Voice Settings</CardTitle>
              <CardDescription>
                Customize the voice output for the sign language translator.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Voice Type</label>
                <Select 
                  value={voiceType} 
                  onValueChange={setVoiceType}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select voice type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female Voice</SelectItem>
                    <SelectItem value="male">Male Voice</SelectItem>
                    <SelectItem value="neutral">Neutral Voice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Speaking Rate</label>
                  <span className="text-sm text-muted-foreground">{speakingRate[0].toFixed(2)}x</span>
                </div>
                <Slider 
                  value={speakingRate} 
                  onValueChange={setSpeakingRate} 
                  min={0.5} 
                  max={2} 
                  step={0.1} 
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Slower</span>
                  <span>Normal</span>
                  <span>Faster</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Volume</label>
                  <span className="text-sm text-muted-foreground">{Math.round(volume[0] * 100)}%</span>
                </div>
                <Slider 
                  value={volume} 
                  onValueChange={setVolume} 
                  min={0} 
                  max={1} 
                  step={0.01} 
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Test Voice</p>
                  <p className="text-sm text-muted-foreground">Play a sample of the selected voice</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => toast({
                    title: "Voice sample",
                    description: "This is a sample of the selected voice.",
                  })}
                >
                  <Volume2 className="mr-2 h-4 w-4" />
                  Play Sample
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recognition">
          <Card>
            <CardHeader>
              <CardTitle>Recognition Settings</CardTitle>
              <CardDescription>
                Adjust settings for sign language recognition accuracy and behavior.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Real-time Recognition</p>
                  <p className="text-sm text-muted-foreground">Recognize signs as they are performed</p>
                </div>
                <Switch checked={true} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Recognition Sensitivity</label>
                  <span className="text-sm text-muted-foreground">Medium</span>
                </div>
                <Slider 
                  defaultValue={[0.6]} 
                  min={0} 
                  max={1} 
                  step={0.1} 
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Auto-Correction</p>
                  <p className="text-sm text-muted-foreground">Correct misrecognized signs based on context</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Background Filtering</p>
                  <p className="text-sm text-muted-foreground">Filter out background movements</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize the visual appearance of the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">High Contrast Mode</p>
                  <p className="text-sm text-muted-foreground">Increase visual contrast for accessibility</p>
                </div>
                <Switch checked={highContrast} onCheckedChange={setHighContrast} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Text Size</p>
                  <p className="text-sm text-muted-foreground">Adjust the size of text throughout the app</p>
                </div>
                <Select defaultValue="medium">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Text size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Motion Effects</p>
                  <p className="text-sm text-muted-foreground">Enable animations and transitions</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>
                Customize general application behavior.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Auto-Save Progress</p>
                  <p className="text-sm text-muted-foreground">Automatically save learning progress</p>
                </div>
                <Switch checked={autoSave} onCheckedChange={setAutoSave} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Keyboard Shortcuts</p>
                  <p className="text-sm text-muted-foreground">Enable keyboard shortcuts for navigation</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Startup Page</p>
                  <p className="text-sm text-muted-foreground">Choose which page to show on startup</p>
                </div>
                <Select defaultValue="dashboard">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Page" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dashboard">Dashboard</SelectItem>
                    <SelectItem value="recognition">Recognition</SelectItem>
                    <SelectItem value="learn">Learn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage your notification preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Enable Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive notifications about your progress</p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Practice Reminders</p>
                  <p className="text-sm text-muted-foreground">Get reminders for daily practice</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Community Updates</p>
                  <p className="text-sm text-muted-foreground">Receive updates from the community</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="language">
          <Card>
            <CardHeader>
              <CardTitle>Language Settings</CardTitle>
              <CardDescription>
                Configure language preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Interface Language</p>
                  <p className="text-sm text-muted-foreground">Language used in the application interface</p>
                </div>
                <Select defaultValue="english">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="mandarin">Mandarin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Primary Sign Language</p>
                  <p className="text-sm text-muted-foreground">Default sign language for recognition</p>
                </div>
                <Select defaultValue="asl">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asl">ASL</SelectItem>
                    <SelectItem value="bsl">BSL</SelectItem>
                    <SelectItem value="auslan">Auslan</SelectItem>
                    <SelectItem value="lsf">LSF</SelectItem>
                    <SelectItem value="dgs">DGS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account details and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">username@example.com</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Change Password</p>
                  <p className="text-sm text-muted-foreground">Update your password</p>
                </div>
                <Button variant="outline" size="sm">Change</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Delete Account</p>
                  <p className="text-sm text-muted-foreground">Permanently delete your account</p>
                </div>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Control your privacy and data settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Data Collection</p>
                  <p className="text-sm text-muted-foreground">Allow collection of usage data to improve app</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Video Storage</p>
                  <p className="text-sm text-muted-foreground">Store recognition videos for training purposes</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Community Profile</p>
                  <p className="text-sm text-muted-foreground">Make your profile visible to community members</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end mt-8 space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSaveSettings}>Save Settings</Button>
      </div>
    </div>
  );
};

export default SettingsPage;
