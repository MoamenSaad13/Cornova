import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Problem from "./pages/Problem";
import Impact from "./pages/Impact";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              
              {/* Impact Pages */}
              <Route path="/problem" element={<Problem />} />
              <Route path="/impact" element={<Impact />} />
              
              {/* Team & Contact */}
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Auth Pages */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
