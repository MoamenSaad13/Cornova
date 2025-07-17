import { Link } from "react-router-dom";
import { Phone, Globe, MapPin, Heart } from "lucide-react";
const Footer = () => {
  const quickLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "About Us",
    href: "/about"
  }, {
    name: "Our Products",
    href: "/products"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const impactLinks = [{
    name: "The Problem",
    href: "/problem"
  }, {
    name: "Our Impact & SDGs",
    href: "/impact"
  }, {
    name: "Our Team",
    href: "/team"
  }];
  return <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6 animate-fade-in group transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 animate-pulse-warm overflow-hidden bg-primary/10">
                <img alt="Cornova Logo" className="w-14 h-14 object-contain" src="/lovable-uploads/2628c753-399f-458a-ab6d-5764806f3001.png" />
              </div>
              <span className="font-domus font-bold text-3xl text-accent transition-all duration-300 group-hover:text-primary">Cornova</span>
            </div>
            <p className="text-accent-foreground/90 mb-8 text-base leading-relaxed animate-slide-up">
              <strong className="text-primary">From Waste to Worth</strong><br />
              An impact-driven agritech brand transforming corn byproducts into valuable resources, 
              bridging environmental responsibility with social impact for a sustainable future.
            </p>
            <div className="space-y-4 text-sm animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-base">+20 128 559 0002</span>
              </div>
              <div className="flex items-center gap-3 hover:text-primary transition-all duration-300 hover:translate-x-1">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <a href="https://www.cornova.online" target="_blank" rel="noopener noreferrer" className="text-base hover:underline">
                  www.cornova.online
                </a>
              </div>
              <div className="flex items-center gap-3 hover:text-primary transition-all duration-300 hover:translate-x-1 cursor-pointer">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-base">Alexandria, Egypt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h3 className="font-domus font-semibold mb-6 text-accent text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => <li key={link.name} className="animate-fade-in" style={{animationDelay: `${0.2 + index * 0.05}s`}}>
                  <Link to={link.href} className="text-accent-foreground/80 hover:text-primary transition-all duration-300 text-base hover:translate-x-2 inline-flex items-center group">
                    <span className="w-2 h-2 bg-primary/50 rounded-full mr-3 transition-all duration-300 group-hover:bg-primary group-hover:scale-125"></span>
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Impact Links */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h3 className="font-domus font-semibold mb-6 text-accent text-lg">Our Impact</h3>
            <ul className="space-y-4">
              {impactLinks.map((link, index) => <li key={link.name} className="animate-fade-in" style={{animationDelay: `${0.3 + index * 0.05}s`}}>
                  <Link to={link.href} className="text-accent-foreground/80 hover:text-primary transition-all duration-300 text-base hover:translate-x-2 inline-flex items-center group">
                    <span className="w-2 h-2 bg-primary/50 rounded-full mr-3 transition-all duration-300 group-hover:bg-primary group-hover:scale-125"></span>
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <p className="text-accent-foreground/70 text-base mb-4 md:mb-0 text-center md:text-left">
            © 2025 Cornova. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 text-accent-foreground/70 text-base group cursor-pointer">
            <span>Powered by Cornova for a Sustainable Future</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;