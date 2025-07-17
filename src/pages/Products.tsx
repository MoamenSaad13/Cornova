import { useState } from "react";
import { Wheat, Droplets, Zap, Filter, Star, Check, Leaf, Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [cartItems, setCartItems] = useState<{[key: number]: number}>({});
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      icon: <Wheat className="h-10 w-10" />,
      title: "Corn-Based Flour",
      subtitle: "Community-driven, sustainable flour from corn byproducts",
      description: "Our corn waste flour is made from corn agricultural byproducts (husks and cobs). It provides a healthy, affordable alternative for handmade bread, particularly for low-income families.",
      features: [
        "Made from corn husks and cobs",
        "High in dietary fiber",
        "Gluten-free",
        "Long shelf life",
        "Designed for handmade use",
        "Supports women economically",
        "Eco-friendly mission",
        "Local sourcing & production"
      ],
      benefits: [
        "Affordable flour that helps reduce pollution",
        "Supports family health, especially for children and elders",
        "Inclusive for all households",
        "Helps families plan and store efficiently",
        "Families can prepare bread at home easily",
        "Promotes self-reliance and entrepreneurship"
      ],
      pricing: "Premium quality at affordable price",
      price: 15,
      unit: "per 1kg bag",
      currency: "EGP",
      color: "border-yellow-500",
      bgColor: "bg-yellow-50",
      inStock: true
    },
    {
      id: 2,
      icon: <Droplets className="h-10 w-10" />,
      title: "Corn Silk Herbal Tea",
      subtitle: "100% natural, caffeine-free wellness tea",
      description: "A healthy herbal tea, 100% natural and caffeine-free, free from any harmful chemicals, good for the stomach, and helps with relaxation.",
      features: [
        "100% natural herbs",
        "Blends for specific health needs",
        "Eco-packaging",
        "Locally sourced ingredients",
        "Caffeine-free",
        "Chemical-free"
      ],
      benefits: [
        "Safe, healthy beverage choice",
        "Supports your wellness goals",
        "Helps regulate blood sugar",
        "Supports kidney and heart function",
        "Rich in antioxidants",
        "You help the planet with every cup"
      ],
      pricing: "Natural wellness at great value",
      price: 20,
      unit: "per 250g pack",
      currency: "EGP",
      color: "border-green-500",
      bgColor: "bg-green-50",
      inStock: true
    },
    {
      id: 3,
      icon: <Zap className="h-10 w-10" />,
      title: "Biochar",
      subtitle: "100% natural Egyptian corn waste soil enhancer",
      description: "Produced from 100% natural Egyptian corn waste through clean pyrolysis. Acts as a nutrient source for beneficial soil microorganisms due to its high bio-carbon content.",
      features: [
        "Improves soil fertility",
        "Enhances water retention",
        "Increases microbial activity",
        "Reduces 25%-35% of mineral fertilizer use",
        "Acts as a carbon sink",
        "Protects plant roots from diseases"
      ],
      benefits: [
        "Increases farmer profitability",
        "Reduces input costs and boosts crop yields",
        "Improves soil health long-term",
        "Contributes to environmental conservation",
        "Supports desert reclamation",
        "Empowers rural communities"
      ],
      pricing: "Sustainable farming solution",
      price: 150,
      unit: "per 5kg bag",
      currency: "EGP",
      color: "border-amber-600",
      bgColor: "bg-amber-50",
      inStock: true
    },
    {
      id: 4,
      icon: <Filter className="h-10 w-10" />,
      title: "Carbon Water Filters",
      subtitle: "Eco-friendly portable water purification",
      description: "Eco-friendly filter that cleans tap water using biochar from corn waste. Small, portable, and fits standard water taps—no plumbing needed.",
      features: [
        "Made from biochar (corn waste)",
        "Portable and fits standard faucets",
        "Removes chlorine, odors, and impurities",
        "Affordable to produce and maintain",
        "Locally manufactured",
        "No harmful chemicals"
      ],
      benefits: [
        "Reduces environmental pollution",
        "Provides clean drinking water",
        "Improves health and well-being",
        "Makes safe water accessible",
        "Creates job opportunities",
        "Contributes to sustainable lifestyle"
      ],
      pricing: "Clean water made affordable",
      price: 43,
      unit: "per filter unit",
      currency: "EGP",
      color: "border-blue-500",
      bgColor: "bg-blue-50",
      inStock: true
    }
  ];

  const addToCart = (productId: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    const product = products.find(p => p.id === productId);
    toast({
      title: "Added to Cart!",
      description: `${product?.title} has been added to your cart.`
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0)
    }));
  };

  const buyNow = (product: any) => {
    toast({
      title: "Redirecting to Checkout",
      description: `Processing purchase for ${product.title} - ${product.price} ${product.currency}`
    });
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((sum, [productId, count]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return sum + (product ? product.price * count : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-domus font-bold mb-6 text-accent">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Innovative solutions transforming corn waste into valuable products that address real community needs
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <Card key={index} className={`hover-lift ${product.color} animate-slide-up`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardHeader className={`${product.bgColor} rounded-t-lg`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <div className="text-primary">
                        {product.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-domus text-accent">
                        {product.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="md:ml-auto flex flex-col items-end gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <Star className="w-4 h-4 mr-1" />
                      {product.pricing}
                    </Badge>
                     <div className="text-right">
                       <div className="text-2xl font-bold text-primary">{product.price} {product.currency}</div>
                       <div className="text-sm text-muted-foreground">{product.unit}</div>
                     </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-domus font-semibold mb-4 text-accent flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-domus font-semibold mb-4 text-accent flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Purchase Section */}
                <div className="border-t pt-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-4">
                      {product.inStock ? (
                        <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                      ) : (
                        <Badge variant="destructive">Out of Stock</Badge>
                      )}
                      {cartItems[product.id] > 0 && (
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(product.id)}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-medium">{cartItems[product.id]}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCart(product.id)}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        variant="outline"
                        className="px-6"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                       <Button
                         onClick={() => buyNow(product)}
                         disabled={!product.inStock}
                         className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
                       >
                         Buy Now - {product.price} {product.currency}
                       </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-domus font-bold mb-6 text-accent">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join us in transforming agricultural waste into valuable resources that benefit communities and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Get In Touch
              </Button>
            </Link>
            <Link to="/impact">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3">
                Learn About Our Impact
              </Button>
            </Link>
          </div>
        </div>

        {/* Shopping Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg animate-scale-in max-w-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="font-medium">Cart ({getTotalItems()})</span>
              </div>
               <span className="font-bold">{getTotalPrice()} EGP</span>
             </div>
             <Button size="sm" className="w-full bg-white text-primary hover:bg-gray-100">
              View Cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;