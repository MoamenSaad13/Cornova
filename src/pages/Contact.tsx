import { useState } from "react";
import { Phone, Mail, MapPin, Globe, Send, Handshake, Users, Target, Facebook, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const contactInfo = [{
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+20 128 559 0002",
    description: "Call us during business hours"
  }, {
    icon: <Globe className="h-6 w-6" />,
    title: "Website",
    value: "www.cornova.online",
    description: "Visit our official website"
  }, {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "Alexandria, Egypt",
    description: "Our headquarters and operations base"
  }];
  const engagementTypes = [{
    icon: <Handshake className="h-8 w-8" />,
    title: "Partnership Opportunities",
    description: "Collaborate with us on sustainable development projects, research initiatives, or distribution partnerships."
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Community Support",
    description: "Join our mission to support underserved communities through sustainable products and services."
  }, {
    icon: <Target className="h-8 w-8" />,
    title: "Investment & Funding",
    description: "Support our growth and impact by investing in sustainable agritech solutions that create real change."
  }];
  return <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-domus font-bold mb-6 text-accent">
            Get <span className="text-gradient">Involved</span> with Cornova
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Connect with us to support our mission, explore partnerships, or learn more about our products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-domus text-accent flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accent mb-2">
                      Your Name
                    </label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className="border-primary/20 focus:border-primary" placeholder="Enter your full name" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="border-primary/20 focus:border-primary" placeholder="Enter your email address" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                      Message
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required className="border-primary/20 focus:border-primary min-h-[120px]" placeholder="Tell us about your interest in Cornova..." />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <div>
              <h2 className="text-2xl font-domus font-bold mb-6 text-accent">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => <Card key={index} className="hover-lift border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-accent">{info.title}</h3>
                          {info.title === "Website" ? (
                            <a 
                              href="https://www.cornova.online" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary font-medium hover:text-primary/80 hover:underline transition-all duration-300 cursor-pointer"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-primary font-medium">{info.value}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Social Media Placeholder */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-domus text-accent">
                  Follow Our Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay updated with our latest developments and impact stories through our social media channels.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/EnactusAlexandriaUniversity" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                  <a 
                    href="https://www.instagram.com/enactusalexu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/enactusalexu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@enactus_alex_u" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Engagement Types */}
        <div className="mt-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-12 text-center text-accent animate-scale-in" style={{animationDelay: '0.4s'}}>
            Ways to Engage with Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {engagementTypes.map((type, index) => <Card key={index} className="hover-lift hover-scale border-primary/20 text-center animate-slide-up" style={{
            animationDelay: `${0.5 + index * 0.1}s`
          }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110">
                    <div className="text-primary">
                      {type.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-domus font-semibold mb-4 text-accent">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-section rounded-2xl p-8 md:p-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-6 text-accent animate-scale-in" style={{animationDelay: '0.5s'}}>
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
            Whether you're interested in partnering with us, supporting our mission, or learning more about our products, 
            we'd love to hear from you. Together, we can create sustainable solutions that transform communities.
          </p>
          <a 
            href="mailto:enactuss.alex@gmail.com?subject=Partnership Opportunity with Cornova&body=Hello Cornova team,%0D%0A%0D%0AI am interested in partnering with your organization. Please let me know how we can collaborate.%0D%0A%0D%0ABest regards,"
            className="inline-block animate-fade-in hover-scale"
            style={{animationDelay: '0.7s'}}
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
              Partner with Us
            </Button>
          </a>
        </div>
      </div>
    </div>;
};
export default Contact;