import { AlertTriangle, Users, Droplet, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Problem = () => {
  const challenges = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Bread Access Crisis",
      description: "Limited bakeries and rising wheat flour costs force millions to travel long distances for basic bread. Villages in Abis, Borg El Arab, and Khorshid are severely affected.",
      stats: "63.6 million Egyptians depend on government-subsidized goods"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Health & Nutrition Challenges",
      description: "Many suffer from gluten intolerance or celiac disease, making regular wheat-based bread unsuitable. Vulnerable groups face serious nutritional challenges.",
      stats: "Children, elderly, and low-income families most affected"
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "Water Quality Crisis",
      description: "Poor areas lack clean water access, and available filters are often expensive, creating a clear need for affordable water purification solutions.",
      stats: "Widespread contaminated drinking water issues"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Service Access Shortage",
      description: "Underserved areas suffer from critical shortages of essential services, particularly access to subsidized bread and basic necessities.",
      stats: "Multiple villages lack adequate service infrastructure"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-domus font-bold mb-6 text-accent">
            The <span className="text-gradient">Problems</span> We Solve
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Addressing Critical Needs in Underserved Communities
          </p>
        </div>

        {/* Main Problem Overview */}
        <div className="bg-gradient-section rounded-2xl p-8 md:p-12 mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-6 text-accent text-center">
            The Crisis We Face
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Many underserved areas in Alexandria and across Egypt suffer from a critical shortage of essential services, 
              one of the most urgent being access to subsidized bread. Due to the limited number of bakeries and the 
              rising cost of wheat flour, millions of citizens, even those with ration cards, are forced to travel 
              long distances just to obtain basic bread.
            </p>
            <p>
              Villages in Abis, Borg El Arab, and Khorshid are examples of areas affected by this issue. 
              The national impact is significant, with approximately 63.6 million Egyptians depending on 
              government-subsidized goods.
            </p>
            <p>
              Over the years, the price of bread has increased while its weight has decreased, and with the new 
              point-based ration system, individuals are limited in the amount of bread they can access.
            </p>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-12 text-center text-accent">
            Key Challenges We Address
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="hover-lift border-destructive/20" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive">
                      {challenge.icon}
                    </div>
                    <CardTitle className="text-xl font-domus text-accent">
                      {challenge.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {challenge.description}
                  </p>
                  <div className="bg-destructive/5 rounded-lg p-3 border border-destructive/20">
                    <p className="text-sm font-medium text-destructive">
                      Impact: {challenge.stats}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Health Impact */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-16 border border-border animate-slide-up">
          <h2 className="text-3xl font-domus font-bold mb-6 text-accent">
            Health and Nutritional Impact
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Additionally, many people suffer from health conditions such as gluten intolerance or celiac disease, 
              making regular wheat-based bread unsuitable for them. As a result, vulnerable groups, especially children, 
              the elderly, and low-income families, are facing serious nutritional challenges.
            </p>
            <p>
              Poor areas also lack clean water, and available filters are often expensive. This highlights a clear need 
              for side solutions like clean water access, which directly impacts public health and quality of life.
            </p>
          </div>
        </div>

        {/* Solutions Call to Action */}
        <div className="text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-6 text-accent">
            Our Solutions Address These Challenges
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Through innovative products and sustainable practices, Cornova directly tackles these critical issues 
            while creating positive environmental and social impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                See Our Solutions
              </Button>
            </Link>
            <Link to="/impact">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3">
                View Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;