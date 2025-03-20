
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Nature-inspired background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/50 to-blue-700/30 backdrop-blur-sm"></div>
        
        {/* Mountains */}
        <div className="absolute bottom-0 w-full h-2/3 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 320" className="w-full opacity-30">
              <path fill="#0C4A8B" d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,213.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 320" className="w-full opacity-20">
              <path fill="#063673" d="M0,128L60,149.3C120,171,240,213,360,234.7C480,256,600,256,720,245.3C840,235,960,213,1080,218.7C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Trees */}
        <div className="absolute bottom-10 left-10 w-16 h-48 opacity-30">
          <div className="absolute bottom-0 w-full h-12 bg-blue-900 rounded-sm"></div>
          <div className="absolute bottom-12 w-full aspect-square bg-blue-800 rounded-full transform -translate-x-1/4"></div>
          <div className="absolute bottom-20 w-full aspect-square bg-blue-800 rounded-full"></div>
          <div className="absolute bottom-28 w-full aspect-square bg-blue-800 rounded-full transform translate-x-1/4"></div>
        </div>
        
        <div className="absolute bottom-20 right-20 w-12 h-36 opacity-30">
          <div className="absolute bottom-0 w-full h-8 bg-blue-900 rounded-sm"></div>
          <div className="absolute bottom-8 w-full aspect-square bg-blue-800 rounded-full transform -translate-x-1/4"></div>
          <div className="absolute bottom-16 w-full aspect-square bg-blue-800 rounded-full"></div>
        </div>
        
        {/* Stars */}
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          ></div>
        ))}
        
        {/* Deer silhouette */}
        <div className="absolute bottom-16 left-1/4 w-24 h-24 opacity-30">
          <svg viewBox="0 0 512 512" className="w-full h-full">
            <path fill="#0A3A6D" d="M400,208c-8,0-13.4,1.7-17.3,3.5c-2,0.9-3.5,1.8-4.5,2.5h-4.4c-0.3-0.8-0.7-1.7-1.1-2.4 c-3.5-6.9-9.4-11.6-16.6-13.2c-18.2-4.1-34.3,7.1-39.8,11.5c-0.7,0.6-1.3,1.1-1.8,1.5c-6.3-5.1-12.4-5-16-3.7 c-6.5,2.3-10.7,9.6-10.7,18.8c0,13.9,12.5,27.1,13.5,28.2l2.7,2.9l-3,2.5c-1.5,1.3-37.9,32.3-52,65.8c-3.4,8.1-0.3,16.5,0.3,17.9 c0.5,1.3,2.1,4.9,5.4,4.9c0.9,0,2-0.2,3.3-0.9c3.2-1.7,6.2-4,9-6.2c11.5-9.3,18.3-14.9,29.9-6.7c5.4,3.8,9.3,5.6,12,5.6 c2.1,0,3.2-0.9,3.7-1.6c1.1-1.6,1.8-5.2-0.9-10.9c-1.6-3.3-3.2-6.6-4.7-9.8c-5.5-11.7-10.2-21.8-12.1-31.4l19.7-19.5 c0.9,0.5,1.8,1,2.7,1.4c0.4,0.2,36.9,17.6,42.1,30.8c3.8,9.5,2.8,24.2-3.1,45.3l-3.3,11.9l-12-2.9c-0.9-0.2-21.1-5.5-38-17.8 c-3.1-2.3-5.9-5.6-8.6-8.8c-9.3-11.2-19.9-23.8-54-20.4l-5.1,0.5l-0.5-5.1c-0.2-2.2-3.8-53.1,9.5-76.8c1.5-2.7,3.2-4.9,5.1-6.6 c3.8,0.9,12.9,3.3,20.8,7.8c1.9,1.1,3.5,2.3,4.9,3.5c0,0.2-0.1,0.4-0.1,0.7c-1.5,9.9,5.8,19.9,18.5,25.3c13.1,5.5,27.8,4,37-3.9 c6.2-5.4,8.6-13,6.1-20.6c-1.2-3.8-3.7-7.1-7.2-9.7c2.9-2.5,9.8-7.3,20.2-7.3c8.6,0,14.8,4.1,19.9,13.1c3.8,6.7,4.4,12.4,4.4,12.5 l0.2,2.2H368c0.1,0,11.1,0.5,19.8,5.4c9.4,5.3,14.2,13.3,14.2,23.9c0,21.4-28.4,28.9-28.7,29l-9.6,2.6l2.1-9.7 c0.1-0.3,2.2-10.1,0-15.9c-0.3-0.8-0.8-1.5-1.3-1.9c1-1.7,4.3-6.5,10.8-11.2c10.7-7.7,20.8-8.2,30.1-1.5c11.1,8,11.7,20.3,11.7,20.6 l0.2,2.2h2.2c0.1,0,11.6,0,18.2,5.3c6.2,4.9,9.2,13.2,9.2,24.8c0,30.4-42.6,48.3-43.6,48.7L393,300.3l-0.3-10.7 c-0.2-7.3-1.4-12.7-3.7-16.2c4.1-2.3,15.5-9.6,22.7-23.2c8.4-15.7,6.9-32.5-4.2-47l-1.1-1.4l1.7-0.4c0.1,0,7.3-1.9,15-1.9 c19.9,0,35.8,8.5,47.2,25.2c15.5,22.8,8.1,48.6,8,48.8L476.5,279l-5.6,2.2c-19.7,7.8-107.8,39.5-183.5,11.1l-4.6-1.7l2.5-4.2 c8.7-15.1,20.9-29.2,35.1-40.8c-4.7,0.9-9,2.3-13,3.6c-5,1.6-9.3,3-12.9,3c-0.4,0-0.8,0-1.2-0.1c-2.2-0.2-4.9-1-9.3-5.9 c-3.2-3.6-7.2-6-11.8-6.9c3.9-14,12.4-25.7,20.6-35.2l1.2,1.1c0.1,0.1,9.2,8.5,21.4,8.5c1.9,0,3.8-0.2,5.7-0.7 c15.5-3.9,29.1-4.6,39.3-2.1c-1.3,3.3-2.1,7-2.1,11.1c0,19.7,20.1,36.5,45.1,37.5c-1.7-0.2-3.2-0.4-4.5-0.8 c-12.3-3.6-16.6-22.8-9.6-43.2c6.4-18.7,21-31.7,32.8-29.3c5.1,1,9.1,4.6,11.3,10.2c4.4,11-0.8,27.3-12.1,37.8 c-10.1,9.4-23.4,12.3-34.8,7.6c-9.1-3.8-15-11.3-16-19.7c1.9-1.5,3.2-2.2,3.3-2.2l1.7-1.1l1.7,1c0.1,0,7.1,3.9,17.3,0.5 c2.3-0.8,4.2-2.1,5.5-3.9c0.4-0.2,0.7-0.5,0.9-0.8c1.8-2.5,0.7-6-2.7-8.5c-4.6-3.4-12.6-3.6-20.6-0.5c-7.9,3-14.2,8.5-16.5,13.9 c-1.9-6.1-0.2-10.5,0.2-11.5c0.3-0.5,0.9-1.5,2.2-1.9c3.5-1.3,10,1.6,13.2,6c0.2,0.3,0.5,0.7,0.7,1c-3.7-9.5-12.5-11.7-18.7-11.7 c-11.2,0-19.3,7.9-19.5,8.1l-3.7,4.1l-3-4.6c-0.1-0.1-6.9-10,3.9-18.5c8.3-6.6,15.3-4.1,17.4-3.1l2.3,0l-1.9,1.4l-0.9,0.6 c5.8-5.5,20.5-17.2,38.2-13.2c7.2,1.6,13,7,16.1,15.3c3.1,8.3,2.2,17.8-2.7,27.1c-5.5,10.6-15.5,19.3-25.5,22.4 c-1.6,0.5-3.1,0.8-4.6,1.1c6.1-0.9,11.5-3.6,15.8-7.4c8.7-7.8,12.9-20.4,9.5-28.9c-1.3-3.3-3.7-5.5-6.8-6.2 c-8.3-1.7-19.9,9.1-25,24.2c-5.2,15.4-3.1,30.1,4.6,32.6c7.3,2.4,21.8-12.3,21.8-29.9c0-5.1-1.5-9.5-4.5-13.1 c0.2-0.2,0.4-0.3,0.5-0.5c4.6-3.8,19.2-13.5,35.3-9.9c5.3,1.2,9.8,4.7,12.5,10c2.7,5.2,3.2,11.7,1.5,18.5c-1.8,7.1-6.3,13.7-11.9,18.8 c0.1-1.1,0.2-2.3,0.2-3.5c0-6.3-2.3-12-6.5-16.1c-5-4.9-12.2-7.7-19.8-7.7c-1.9,0-3.7,0.2-5.5,0.5c-0.8-1-1.8-2-2.9-2.8 c-4.7-3.5-11.1-4.1-17.6-1.8c-6.1,2.2-11.3,6.7-14.3,12.4c3.6-6.8,13.9-16.2,25.1-16.7c2.1-0.1,5.5-0.2,9.2,2.9 c2.4,2,5.1,3.5,7.8,4.4c-0.1,0-0.3-0.1-0.4-0.1L400,208z M203.7,240.3c3.6,0,6.4,2.9,6.4,6.4c0,3.6-2.9,6.4-6.4,6.4 c-3.6,0-6.4-2.9-6.4-6.4C197.3,243.2,200.2,240.3,203.7,240.3z" />
          </svg>
        </div>
      </div>
      
      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Login tab */}
          <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-t-xl border-b border-white/20">
            <h2 className="text-center font-bold text-xl text-white">Login</h2>
          </div>
          
          <div className="px-8 py-10">
            <form className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-white/60" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Username"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-white/60" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full pl-10 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-white/60" />
                  ) : (
                    <Eye className="h-5 w-5 text-white/60" />
                  )}
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" className="border-white/30 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                  <label htmlFor="remember" className="ml-2 text-sm text-white">
                    Remember me
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="text-white hover:text-blue-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <Button className="w-full bg-white hover:bg-blue-50 text-blue-900 font-medium shadow-md hover:shadow-lg transition-all py-6 rounded-lg">
                Login
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-white">
                  Don't have an account?{" "}
                  <Link to="/register" className="font-medium text-white hover:text-blue-300">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
