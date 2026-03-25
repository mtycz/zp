import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <AnimatedRoutes>
            <Route 
              path="/" 
              data-genie-key="Home" 
              data-genie-title="飞鼠AI招聘助手 - 首页" 
              element={<PageTransition transition="slide-up"><Index /></PageTransition>} 
            />
            <Route 
              path="/login" 
              data-genie-key="Login" 
              data-genie-title="登录 - 飞鼠AI招聘" 
              element={<PageTransition transition="fade"><Login /></PageTransition>} 
            />
            <Route 
              path="*" 
              data-genie-key="NotFound" 
              data-genie-title="页面未找到" 
              element={<PageTransition transition="fade"><NotFound /></PageTransition>} 
            />
          </AnimatedRoutes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
