import { Wheat, Droplets, Zap, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const products = [
    {
      icon: <Wheat className="h-8 w-8" />,
      title: "Corn-Based Flour",
      description: "Our core product is corn-based flour made from agricultural waste (specifically corn husks and cobs). This flour is rich in fiber and antioxidants, affordable, and can be used to make traditional-style bread."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Herbal Health Tea",
      description: "Corn Silk Herbal Tea made from corn silk helps regulate blood sugar, supports kidney and heart function, and is rich in antioxidants. It addresses health issues caused by malnutrition and poor water quality in rural areas."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Biochar",
      description: "Produced from corn waste through pyrolysis (an eco-friendly process), biochar improves soil fertility, texture, and water retention, supporting sustainable agriculture."
    },
    {
      icon: <Filter className="h-8 w-8" />,
      title: "Carbon Water Filters",
      description: "Using biochar as a key material, we've designed low-cost, portable filters that attach to household faucets. These filters help purify water by absorbing chlorine and other impurities."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-domus font-bold mb-6 text-accent">
            About <span className="text-gradient">Cornova</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cornova is an impact driven agritech brand focused on sustainability and innovation. 
            Born from the need to tackle food security and reduce waste in underserved communities, 
            we bridge environmental responsibility with social impact.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-section rounded-2xl p-8 md:p-12 mb-16 animate-slide-up">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-domus font-bold mb-6 text-accent">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              To create a cost-effective, nutritious, and gluten-free alternative to wheat flour using corn waste 
              (husks and cobs), while simultaneously addressing broader health, nutrition, and service-access issues 
              in underserved rural communities.
            </p>
          </div>
        </div>

        {/* Project Objective */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-8 text-center text-accent">
            What We Do
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cornova transforms corn byproducts such as husks, cobs, and silk into nutritious flour, herbal tea, 
              biochar, and carbon filters. We serve local villagers, market consumers, and eco-conscious investors alike, 
              creating a sustainable ecosystem that benefits both communities and the environment.
            </p>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <h3 className="text-xl font-domus font-semibold mb-4 text-accent">
                Our Core Impact Areas:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Food security through affordable, nutritious alternatives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Environmental sustainability by reducing agricultural waste
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Health improvement through better nutrition and clean water access
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Economic empowerment of rural communities
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Products Overview */}
        <div className="animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-12 text-center text-accent">
            Our Product Lines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover-lift border-primary/20" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {product.icon}
                    </div>
                    <CardTitle className="text-xl font-domus text-accent">
                      {product.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tracks */}
        <div className="mt-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-12 text-center text-accent">
            Our Innovation Tracks
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-domus text-accent">
                  Track 1: Herbal Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Corn Silk Herbal Tea that helps regulate blood sugar, supports kidney and heart function, 
                  and is rich in antioxidants. This track specifically addresses health issues caused by 
                  malnutrition and poor water quality in rural areas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-domus text-accent">
                  Track 2: Agricultural & Water Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Comprehensive solutions including biochar for soil improvement and carbon water filters 
                  for clean water access:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Biochar:</strong> Improves soil fertility and water retention</li>
                  <li>• <strong>Water Filters:</strong> Low-cost, portable filters for clean drinking water</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;