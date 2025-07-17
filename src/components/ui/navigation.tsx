import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "Products",
    href: "/products"
  }, {
    name: "Team",
    href: "/team"
  }, {
    name: "Impact & SDGs",
    href: "/impact"
  }, {
    name: "Problem",
    href: "/problem"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Contact",
    href: "/contact"
  }, {
    name: "Login",
    href: "/login"
  }, {
    name: "Register", 
    href: "/register"
  }];
  const isActive = (href: string) => location.pathname === href;
  return <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group transition-all duration-500 hover:scale-105 animate-fade-in">
            <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-glow group-hover:scale-110 animate-pulse-warm overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <img alt="Cornova Logo" className="w-14 h-14 object-contain transition-all duration-300 group-hover:rotate-12" src="/lovable-uploads/2628c753-399f-458a-ab6d-5764806f3001.png" />
            </div>
            <span className="font-domus font-bold text-xl bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110">
              Cornova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-up">
            {navigation.map((item, index) => <Link key={item.name} to={item.href} 
                className={`text-sm font-medium transition-all duration-500 ease-out hover:text-primary hover:scale-110 hover:-translate-y-1 relative overflow-hidden group animate-fade-in
                  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-primary before:to-accent before:transition-all before:duration-500 hover:before:w-full
                  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-primary/5 after:to-accent/5 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100
                  ${isActive(item.href) ? "text-primary scale-110 before:w-full" : "text-foreground"}`}
                style={{animationDelay: `${index * 0.1}s`}}>
                {item.name}
              </Link>)}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden hover:scale-125 transition-all duration-500 icon-dance hover-glow btn-press animate-bounce-gentle" 
                  onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5 transition-transform duration-300 rotate-90" /> : <Menu className="h-5 w-5 transition-transform duration-300" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border animate-slide-up shadow-warm">
            <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
              {navigation.map((item, index) => <Link key={item.name} to={item.href} 
                  className={`block px-4 py-3 text-base font-medium transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-lg animate-fade-in hover-glow group
                    ${isActive(item.href) ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10 scale-105" : "text-foreground hover:text-primary"}`} 
                  style={{animationDelay: `${index * 0.1}s`}} 
                  onClick={() => setIsOpen(false)}>
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;