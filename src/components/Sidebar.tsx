
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Video, 
  Languages, 
  Users, 
  Settings,
  BarChart2, 
  Clock,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [webcamEnabled, setWebcamEnabled] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleWebcam = () => {
    setWebcamEnabled(!webcamEnabled);
  };

  return (
    <div 
      className={`fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-sign-dark border-r border-white/10 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!isCollapsed && (
          <Link to="/" className="flex items-center space-x-2">
            <svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 text-sign-primary"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm2-9.9c-.06-.39-.22-.75-.45-1.05.31-.35.53-.79.54-1.3 0-1.06-.87-1.75-1.65-1.75-.62 0-1.2.49-1.2 1.08 0 .56.4 1.01.93 1.08.51.07.97.42.99.93 0 1.32-1.3 1.35-1.34.91-.03-.31.17-.57.31-.57.16 0 .29.27.31.54l1.14-.83c-.6-.68-1.01-1.23-1.01-1.62 0-.56.45-1.01 1.01-1.01s1.01.45 1.01 1.01c0 .39-.23.84-.57 1.32.35.3.57.71.57 1.17 0 .73-.41 1.34-.97 1.67.33.4.42.93.42 1.42 0 1.77-1.58 2.98-3.09 2.98-.94 0-1.66-.56-1.66-1.45 0-.34.11-.64.3-.88l.52.49c-.1.16-.15.34-.15.52 0 .5.38.88.88.88 1.29 0 2.28-.82 2.28-2.01 0-.32-.06-.65-.22-.96l-.84.84z" />
            </svg>
            <span className="font-display font-bold text-lg">SignConnect</span>
          </Link>
        )}
        
        {isCollapsed && (
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-sign-primary mx-auto"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm2-9.9c-.06-.39-.22-.75-.45-1.05.31-.35.53-.79.54-1.3 0-1.06-.87-1.75-1.65-1.75-.62 0-1.2.49-1.2 1.08 0 .56.4 1.01.93 1.08.51.07.97.42.99.93 0 1.32-1.3 1.35-1.34.91-.03-.31.17-.57.31-.57.16 0 .29.27.31.54l1.14-.83c-.6-.68-1.01-1.23-1.01-1.62 0-.56.45-1.01 1.01-1.01s1.01.45 1.01 1.01c0 .39-.23.84-.57 1.32.35.3.57.71.57 1.17 0 .73-.41 1.34-.97 1.67.33.4.42.93.42 1.42 0 1.77-1.58 2.98-3.09 2.98-.94 0-1.66-.56-1.66-1.45 0-.34.11-.64.3-.88l.52.49c-.1.16-.15.34-.15.52 0 .5.38.88.88.88 1.29 0 2.28-.82 2.28-2.01 0-.32-.06-.65-.22-.96l-.84.84z" />
          </svg>
        )}
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleSidebar}
          className="w-8 h-8"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      
      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          <Link
            to="/"
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <Home className="w-5 h-5" />
            {!isCollapsed && <span>Home</span>}
          </Link>
          
          <Link
            to="/recognition"
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <Video className="w-5 h-5" />
            {!isCollapsed && <span>Recognition</span>}
          </Link>
          
          <Link
            to="/languages"
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <Languages className="w-5 h-5" />
            {!isCollapsed && <span>Languages</span>}
          </Link>
          
          <Link
            to="/progress"
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <BarChart2 className="w-5 h-5" />
            {!isCollapsed && <span>Progress</span>}
          </Link>
          
          <Link
            to="/community"
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
          >
            <Users className="w-5 h-5" />
            {!isCollapsed && <span>Community</span>}
          </Link>
        </nav>
        
        {!isCollapsed && (
          <div className="mt-6 px-4">
            <h3 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Recent Activities
            </h3>
            <div className="mt-2 space-y-2">
              {[
                { icon: Clock, text: "ASL Practice - 30min ago" },
                { icon: Bookmark, text: "Saved 5 new signs" },
                { icon: Video, text: "Video Call with Tutor" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 px-2 py-1 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4" />
                  <span className="truncate">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Settings section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Video className={`w-5 h-5 ${webcamEnabled ? 'text-sign-primary' : 'text-muted-foreground'}`} />
            {!isCollapsed && <span>Webcam</span>}
          </div>
          {!isCollapsed ? (
            <Switch checked={webcamEnabled} onCheckedChange={toggleWebcam} />
          ) : (
            <div className={`w-3 h-3 rounded-full ${webcamEnabled ? 'bg-sign-primary' : 'bg-muted'}`}></div>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Settings className="w-5 h-5" />
            {!isCollapsed && <span>Theme</span>}
          </div>
          {!isCollapsed ? (
            <ThemeToggle />
          ) : (
            <ThemeToggle compact={true} />
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <Link
            to="/settings"
            className="flex items-center space-x-3 text-sm font-medium"
          >
            <Settings className="w-5 h-5" />
            {!isCollapsed && <span>Settings</span>}
          </Link>
          
          {!isCollapsed && (
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <LogOut className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
