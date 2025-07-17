import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Frontend-only simulation
    toast({
      title: "Login Successful!",
      description: "Welcome back to Cornova!"
    });

    // Reset form
    setFormData({
      email: "",
      password: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-section">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-domus font-bold mb-4 text-accent">
            Welcome Back to <span className="text-gradient">Cornova</span>
          </h1>
          <p className="text-muted-foreground">
            Sign in to access your sustainable products
          </p>
        </div>

        <Card className="border-primary/20 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-2xl font-domus text-accent text-center">
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="pl-10 border-primary/20 focus:border-primary"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-accent mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="pl-10 pr-10 border-primary/20 focus:border-primary"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-accent"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <Link to="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:underline font-medium">
                  Create one here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;