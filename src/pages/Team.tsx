import { Users, Briefcase, Cog, TrendingUp, Calculator, Heart, Factory, FlaskConical, BarChart3, Megaphone, ShoppingCart, DollarSign, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const executiveTeam = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "CEO & Founder",
      description: "Provides overall strategic direction, oversees major company decisions, and represents the company.",
      requirements: "Extensive experience in leadership, advanced degree in business administration or environmental science, and proven track record in sustainable project execution."
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Chief Operations Officer (COO)",
      description: "Manages daily operations, production efficiency, supply chain logistics, and ensures quality control for all products.",
      requirements: "Experience in operations management, supply chain, or food/biomass processing."
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Chief Technology Officer (CTO) / R&D Lead",
      description: "Leads research & development for product innovation and oversees equipment and process optimization.",
      requirements: "Degree in food science, chemical engineering, or environmental technology."
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Chief Marketing Officer (CMO)",
      description: "Handles branding, market research, customer outreach, and sales strategies.",
      requirements: "Marketing/business degree with experience in sustainable products."
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Chief Financial Officer (CFO)",
      description: "Oversees all financial operations, sets financial strategy, manages risk, and reports to the CEO and board.",
      requirements: "Degree in Finance, Accounting, or Economics."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "HR Manager",
      description: "Oversees all HR activities, ensures compliance with labor laws, develops company policies, and supports leadership in creating a strong company culture.",
      requirements: "Degree in Human Resources, Business Administration, or related field."
    }
  ];

  const departments = [
    {
      name: "Operational Team",
      icon: <Cog className="h-6 w-6" />,
      roles: [
        "Production Workers",
        "Production Manager", 
        "Quality Assurance Engineer",
        "Supply Chain & Procurement Officer"
      ]
    },
    {
      name: "Product Development Team",
      icon: <FlaskConical className="h-6 w-6" />,
      roles: [
        "R&D Specialist",
        "Data Analyst",
        "R&D Manager"
      ]
    },
    {
      name: "Marketing Team",
      icon: <TrendingUp className="h-6 w-6" />,
      roles: [
        "Marketing Manager",
        "Market Research Analyst",
        "Marketing Specialist",
        "PR Specialist"
      ]
    },
    {
      name: "Sales Team",
      icon: <ShoppingCart className="h-6 w-6" />,
      roles: [
        "Sales Manager",
        "Sales Representative",
        "Sales Analyst",
        "Business Developer"
      ]
    },
    {
      name: "Finance & Legal Team",
      icon: <DollarSign className="h-6 w-6" />,
      roles: [
        "Financial Manager",
        "Accountants",
        "Financial Analyst"
      ]
    },
    {
      name: "HR Team",
      icon: <UserCheck className="h-6 w-6" />,
      roles: [
        "Recruitment Specialist",
        "Payroll and Benefits Officer"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-domus font-bold mb-6 text-accent">
            Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A dedicated team drives Cornova's mission, combining expertise in leadership, operations, 
            technology, marketing, finance, and human resources.
          </p>
        </div>

        {/* Executive Team */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-12 text-center text-accent">
            Executive Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((role, index) => (
              <Card key={index} className="hover-lift border-primary/20" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {role.icon}
                    </div>
                    <CardTitle className="text-xl font-domus text-accent">
                      {role.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-3 border border-primary/20">
                    <p className="text-sm font-medium text-accent mb-1">Requirements:</p>
                    <p className="text-sm text-muted-foreground">
                      {role.requirements}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-12 text-center text-accent">
            Organizational Structure
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover-lift border-accent/20" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {dept.icon}
                    </div>
                    <CardTitle className="text-lg font-domus text-accent">
                      {dept.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dept.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{role}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-16 bg-gradient-section rounded-2xl p-8 md:p-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-8 text-center text-accent">
            Our Team Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-domus font-semibold mb-3 text-accent">
                Social Impact
              </h3>
              <p className="text-muted-foreground">
                Every team member is committed to creating positive change in underserved communities 
                through our innovative products and services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-domus font-semibold mb-3 text-accent">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                We foster a culture of continuous innovation, encouraging creative solutions 
                to complex environmental and social challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-domus font-semibold mb-3 text-accent">
                Collaboration
              </h3>
              <p className="text-muted-foreground">
                Our success depends on strong partnerships with universities, NGOs, 
                farmer cooperatives, and government organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;