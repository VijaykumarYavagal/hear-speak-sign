
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Lock, User } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { theme } = useTheme();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Nature background with layered silhouettes */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-indigo-900/90 to-blue-900/80' : 'bg-gradient-to-b from-blue-100/90 to-white/80'}`}></div>
        
        {/* Mountain silhouettes */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`w-full ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}>
            <path fill={theme === 'dark' ? '#1e3a8a' : '#a3c5fd'} d="M0,160L80,144C160,128,320,96,480,90.7C640,85,800,107,960,128C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Trees silhouettes */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`w-full ${theme === 'dark' ? 'opacity-30' : 'opacity-15'}`}>
            <path fill={theme === 'dark' ? '#0f172a' : '#c3d5f8'} d="M0,256L48,261.3C96,267,192,277,288,282.7C384,288,480,288,576,266.7C672,245,768,203,864,186.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        {/* Deer silhouettes and smaller details */}
        <div className="absolute bottom-32 right-32 transform scale-75 opacity-30">
          <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path fill={theme === 'dark' ? '#1e3a8a' : '#7ea2e0'} d="M70,50 C70,40 75,30 85,25 C82,35 82,45 85,55 C75,50 70,40 70,50 Z M30,50 C30,40 25,30 15,25 C18,35 18,45 15,55 C25,50 30,40 30,50 Z M40,30 C40,20 50,10 50,10 C50,10 60,20 60,30 C60,40 50,80 50,80 C50,80 40,40 40,30 Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Login card */}
      <div className="relative z-10 w-full max-w-md">
        <Card className={`backdrop-blur-xl ${theme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-white/60 border-slate-200/40'} shadow-xl rounded-xl overflow-hidden`}>
          <div className="relative pt-6">
            {/* Fixed tab at the top - repositioned and made more visible */}
            <div 
              className={`absolute -top-5 left-1/2 transform -translate-x-1/2 px-8 py-2 rounded-t-xl 
                ${theme === 'dark' ? 'bg-black/80 text-white' : 'bg-white/90 text-black'} 
                font-bold text-lg shadow-md border-t border-l border-r 
                ${theme === 'dark' ? 'border-white/10' : 'border-slate-200/60'} z-10`}
            >
              Login
            </div>
            
            <CardHeader className="pt-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <User size={40} className="text-primary" />
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Username</Label>
                  <div className="relative">
                    <Input 
                      id="username"
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      className={`pl-10 pr-4 py-3 ${theme === 'dark' ? 'bg-black/30 border-white/20 text-white' : 'bg-white/50 border-slate-200/60 text-gray-900'} backdrop-blur-md`}
                    />
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Password</Label>
                  <div className="relative">
                    <Input 
                      id="password"
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className={`pl-10 pr-4 py-3 ${theme === 'dark' ? 'bg-black/30 border-white/20 text-white' : 'bg-white/50 border-slate-200/60 text-gray-900'} backdrop-blur-md`}
                    />
                    <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`} />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember-me"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked === true)}
                      className={theme === 'dark' ? 'border-white/30' : 'border-gray-400'}
                    />
                    <Label htmlFor="remember-me" className={`text-sm ${theme === 'dark' ? 'text-white/90' : 'text-gray-700'}`}>Remember me</Label>
                  </div>
                  <a href="#" className={`text-sm ${theme === 'dark' ? 'text-primary hover:text-primary/80' : 'text-primary hover:text-primary/80'}`}>
                    Forgot password?
                  </a>
                </div>
                
                {/* Login button without the thick animated border */}
                <Button 
                  type="submit" 
                  className={`w-full py-6 ${theme === 'dark' ? 'bg-white text-black hover:bg-white/90' : 'bg-sign-primary text-white hover:bg-sign-primary/90'} rounded-md shadow-md transition-all`}
                >
                  Login
                </Button>
                
                <div className="text-center mt-4">
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-700'}`}>
                    Don't have an account?{' '}
                    <a href="#" className={`font-medium ${theme === 'dark' ? 'text-white hover:text-primary' : 'text-black hover:text-primary'}`}>
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </div>
        </Card>
        
        {/* Slick, thin running edge light at the bottom (subtle animated border) */}
        <div className={`w-full h-0.5 mt-1 rounded-full overflow-hidden relative ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-200/50'}`}>
          <div className={`absolute h-full w-1/3 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500' : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'} animate-border-run-right`}></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
