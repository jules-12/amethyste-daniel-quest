// App.tsx - Version corrigée
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom"; // <-- Supprimez BrowserRouter
import Index from "./pages/Index";
import Chapitres from "./pages/Chapitres";
import Presentation from "./pages/Presentation"; // Note: Majuscule si fichier renommé
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* SUPPRIMEZ BrowserRouter - il est déjà dans main.tsx */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chapitres" element={<Chapitres />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/quiz/:chapitre" element={<Quiz />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;