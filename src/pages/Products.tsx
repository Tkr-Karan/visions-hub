import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const Products = () => {
  const products = [
    {
      name: "Standard Gypsum Partition",
      description: "High-quality standard gypsum boards perfect for residential and commercial applications.",
      features: ["Fire resistant", "Sound insulation", "Easy installation", "Cost-effective"],
      thickness: "12.5mm - 15mm",
      category: "Standard"
    },
    {
      name: "Moisture Resistant Partition",
      description: "Specially treated gypsum boards designed for high-humidity environments.",
      features: ["Moisture resistant", "Mold prevention", "Durable coating", "Long-lasting"],
      thickness: "12.5mm - 18mm",
      category: "Specialized"
    },
    {
      name: "Fire Rated Partition",
      description: "Premium fire-rated gypsum systems meeting strict safety regulations.",
      features: ["Fire rated up to 4 hours", "Smoke barrier", "Safety certified", "Heavy-duty"],
      thickness: "15mm - 25mm",
      category: "Fire Safety"
    },
    {
      name: "Acoustic Partition",
      description: "Advanced sound-dampening gypsum boards for noise-sensitive environments.",
      features: ["Superior sound insulation", "Multiple layer system", "Professional grade", "Customizable"],
      thickness: "18mm - 30mm",
      category: "Acoustic"
    },
    {
      name: "Decorative Partition",
      description: "Aesthetic gypsum boards with various textures and finishes.",
      features: ["Multiple textures", "Paint-ready surface", "Design flexibility", "Premium finish"],
      thickness: "10mm - 20mm",
      category: "Decorative"
    },
    {
      name: "Impact Resistant Partition",
      description: "Heavy-duty gypsum boards designed for high-traffic commercial areas.",
      features: ["Impact resistant", "Heavy-duty core", "Commercial grade", "Reinforced edges"],
      thickness: "15mm - 20mm",
      category: "Commercial"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Standard": "bg-blue-100 text-blue-800",
      "Specialized": "bg-green-100 text-green-800",
      "Fire Safety": "bg-red-100 text-red-800",
      "Acoustic": "bg-purple-100 text-purple-800",
      "Decorative": "bg-pink-100 text-pink-800",
      "Commercial": "bg-orange-100 text-orange-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Product Range
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive collection of high-quality gypsum partition solutions, 
            engineered for various applications and environments.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(product.category)}>
                      {product.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium">
                      {product.thickness}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Learn More
                    </Button>
                    <Button size="sm" className="flex-1">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Products Include
            </h2>
            <p className="text-lg text-muted-foreground">
              Every Amayaas product comes with these standard benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">Certified materials with quality assurance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick turnaround on all orders</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">🛠</span>
              </div>
              <h3 className="font-semibold mb-2">Installation Support</h3>
              <p className="text-sm text-muted-foreground">Professional installation guidance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">📞</span>
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you select the perfect gypsum partition solution for your project.
          </p>
          <Button variant="accent" size="lg">
            Consult Our Experts
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;