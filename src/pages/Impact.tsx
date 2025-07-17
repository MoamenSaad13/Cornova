import { Target, Heart, Leaf, Handshake, Users, Droplets, GraduationCap, Building, Recycle, Globe, TreePine, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Impact = () => {
  const sdgs = [
    {
      icon: <Target className="h-8 w-8" />,
      number: "SDG 1",
      title: "No Poverty",
      description: "A lack of affordable bread hits the poor the hardest. Bread is a staple food, and shortages or high prices increase food insecurity and deepen poverty.",
      color: "text-red-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "SDG 2",
      title: "Zero Hunger",
      description: "Bread shortages directly contribute to hunger and malnutrition, especially among vulnerable populations like children, the elderly, and low-income families.",
      color: "text-yellow-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "SDG 3",
      title: "Good Health and Well-being",
      description: "Our products offer nutritious alternatives and improve water quality, directly addressing health issues caused by poor public services and lack of healthcare access.",
      color: "text-green-600"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      number: "SDG 4",
      title: "Quality Education",
      description: "Poor public services often include underfunded schools and lack of access to learning materials or clean water in schools, which affects educational outcomes.",
      color: "text-red-500"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      number: "SDG 6",
      title: "Clean Water and Sanitation",
      description: "Our carbon water filters directly address the lack of reliable water supply and proper sanitation that affects public health and hygiene in rural communities.",
      color: "text-blue-500"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      number: "SDG 9",
      title: "Industry, Innovation and Infrastructure",
      description: "The project enhances sustainable Agri-infrastructure and innovation by locally reusing corn waste and using low-tech kilns, creating a decentralized, low-carbon industrial chain.",
      color: "text-orange-500"
    },
    {
      icon: <Building className="h-8 w-8" />,
      number: "SDG 11",
      title: "Sustainable Cities and Communities",
      description: "Improves quality of life in rural and underserved urban areas. Access to basic services is key to building sustainable, inclusive cities.",
      color: "text-orange-600"
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      number: "SDG 12",
      title: "Responsible Consumption and Production",
      description: "Herbal tea and products produced through sustainable practices, waste reduction, and eco-friendly packaging support environmentally conscious consumption.",
      color: "text-yellow-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "SDG 13",
      title: "Climate Action",
      description: "Sustainable agricultural practices contribute to mitigating climate change effects by reducing carbon emissions and conserving soil and water. Biochar also sequesters carbon.",
      color: "text-green-500"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      number: "SDG 15",
      title: "Life on Land",
      description: "Sustainable practices in herb cultivation and harvesting contribute to ecosystem conservation, biodiversity preservation, and prevent natural habitat loss.",
      color: "text-green-700"
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      number: "SDG 17",
      title: "Partnerships for the Goals",
      description: "Collaboration is built into the project through partnerships with universities, NGOs, farmer cooperatives, and governments to achieve sustainable development.",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-domus font-bold mb-6 text-accent">
            Our <span className="text-gradient">Impact</span> & SDGs
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cornova directly contributes to several United Nations Sustainable Development Goals, 
            fostering holistic community development and environmental stewardship.
          </p>
        </div>

        {/* Impact Overview */}
        <div className="bg-gradient-section rounded-2xl p-8 md:p-12 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-6 text-accent text-center">
            Creating Meaningful Change
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 animate-pulse-warm">
                <Users className="h-8 w-8 text-primary icon-dance" />
              </div>
              <h3 className="text-xl font-domus font-semibold mb-2 text-accent transition-all duration-300 group-hover:text-primary">Social Impact</h3>
              <p className="text-muted-foreground">Addressing food security and health challenges in underserved communities</p>
            </div>
            <div className="text-center animate-scale-in group" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 animate-pulse-warm">
                <Leaf className="h-8 w-8 text-primary icon-dance" />
              </div>
              <h3 className="text-xl font-domus font-semibold mb-2 text-accent transition-all duration-300 group-hover:text-primary">Environmental Impact</h3>
              <p className="text-muted-foreground">Reducing agricultural waste and promoting sustainable practices</p>
            </div>
            <div className="text-center animate-scale-in group" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 animate-pulse-warm">
                <Target className="h-8 w-8 text-primary icon-dance" />
              </div>
              <h3 className="text-xl font-domus font-semibold mb-2 text-accent transition-all duration-300 group-hover:text-primary">Economic Impact</h3>
              <p className="text-muted-foreground">Creating economic opportunities and empowering rural communities</p>
            </div>
          </div>
        </div>

        {/* SDGs Grid */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-12 text-center text-accent">
            UN Sustainable Development Goals We Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgs.map((sdg, index) => (
              <Card key={index} className="hover-lift border-primary/20 hover-glow group card-breathe" style={{animationDelay: `${index * 0.05}s`}}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${sdg.color.replace('text-', 'bg-').replace('-600', '-100').replace('-500', '-100').replace('-700', '-100')} border border-current transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                      <div className={`${sdg.color} icon-dance transition-all duration-300`}>
                        {sdg.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">{sdg.number}</p>
                      <CardTitle className="text-lg font-domus text-accent leading-tight transition-all duration-300 group-hover:text-primary">
                        {sdg.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sdg.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-6 text-accent">
            Join Our Mission for Sustainable Impact
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Together, we can create lasting change that benefits communities, the environment, 
            and contributes to achieving the UN Sustainable Development Goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.2s'}}>
            <Link to="/products">
              <Button variant="hero" size="lg" className="transition-all duration-300 hover:scale-110 btn-press">
                Explore Our Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:border-primary transition-all duration-300 hover:scale-110 btn-press">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;