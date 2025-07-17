import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen animate-fade-in">{/* Page container with smooth entry */}
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-scale-in">
            <h1 className="text-5xl md:text-8xl font-domus font-bold mb-8 animate-float">
              <span className="text-shimmer animate-shimmer">Cornova</span>
              <br />
              <span className="text-accent animate-bounce-gentle" style={{animationDelay: '0.2s'}}>From Waste to Worth</span>
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.3s'}}>
              An impact-driven agritech brand focused on sustainability and innovation, 
              transforming corn byproducts into valuable resources for a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{animationDelay: '0.6s'}}>
              <Link to="/impact">
                <Button variant="hero" size="lg" className="hover:shadow-glow hover-lift btn-press btn-ripple transition-all duration-500 hover:scale-125 group">
                  Learn More About Our Impact
                  <ArrowRight className="ml-3 h-6 w-6 transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:border-primary transition-all duration-500 hover:scale-125 btn-press hover-glow group">
                  Explore Our Products
                  <ArrowRight className="ml-3 h-6 w-6 transition-all duration-500 group-hover:translate-x-2 opacity-0 group-hover:opacity-100" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="animate-slide-up max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-domus font-bold mb-8 text-accent animate-bounce-gentle">
              Transforming Agricultural Waste into Essential Resources
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Cornova transforms corn byproducts such as husks, cobs, and silk into nutritious flour, 
              herbal tea, biochar, and carbon filters, bridging environmental responsibility with social impact. 
              Our core product is corn-based flour made from agricultural waste, which is rich in fiber and 
              antioxidants, affordable, and can be used to make traditional-style bread.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="hover-lift animate-scale-in border-primary/30 animate-breathe hover-glow group bg-gradient-to-br from-card via-card to-primary/5">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-glow">
                  <Leaf className="h-10 w-10 text-primary icon-dance animate-bounce-gentle" />
                </div>
                <h3 className="text-2xl font-domus font-semibold mb-4 text-accent group-hover:text-primary transition-colors duration-300">
                  Sustainable Innovation
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Converting agricultural waste into valuable products, reducing environmental impact 
                  while creating economic opportunities for communities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-scale-in border-primary/20 card-breathe hover-glow group" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Heart className="h-8 w-8 text-primary icon-dance" />
                </div>
                <h3 className="text-xl font-domus font-semibold mb-3 text-accent">
                  Social Impact
                </h3>
                <p className="text-muted-foreground">
                  Addressing food security and health challenges in underserved communities 
                  through affordable, nutritious alternatives.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-scale-in border-primary/20 card-breathe hover-glow group" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Globe className="h-8 w-8 text-primary icon-dance" />
                </div>
                <h3 className="text-xl font-domus font-semibold mb-3 text-accent">
                  Global Goals
                </h3>
                <p className="text-muted-foreground">
                  Contributing to multiple UN Sustainable Development Goals through 
                  innovative solutions for poverty, hunger, and climate action.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-section py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-domus font-bold mb-6 text-accent">
              Join Us in Creating Sustainable Change
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Together, we can transform agricultural waste into opportunities for healthier communities 
              and a more sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <Link to="/about">
                <Button variant="accent" size="lg" className="transition-all duration-300 hover:scale-110 btn-press">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:border-primary transition-all duration-300 hover:scale-110 btn-press">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;