
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import RecognitionPage from "./pages/Recognition";
import ProgressPage from "./pages/Progress";
import LanguagesPage from "./pages/Languages";
import ReportsPage from "./pages/Reports";
import LoginPage from "./pages/Login";
import HelpPage from "./pages/Help";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarEnabled, setSidebarEnabled] = useState(true);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex">
              {sidebarEnabled && <Sidebar />}
              <div className={`flex-1 ${sidebarEnabled ? 'ml-64' : ''}`}>
                <Navbar />
                <main className={`min-h-screen ${sidebarEnabled ? 'pt-16' : 'pt-24'}`}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/recognition" element={<RecognitionPage />} />
                    <Route path="/progress" element={<ProgressPage />} />
                    <Route path="/languages" element={<LanguagesPage />} />
                    <Route path="/reports" element={<ReportsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
