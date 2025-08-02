import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, PaintBucket, Users, Phone, Calculator, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Partition Installation",
      description: "Professional installation of gypsum partitions with precision and expertise.",
      features: ["Expert installation team", "Quality assurance", "Minimal disruption", "Clean finishing"],
      duration: "2-5 days"
    },
    {
      icon: <PaintBucket className="h-8 w-8 text-primary" />,
      title: "Custom Design Solutions",
      description: "Tailored partition designs to meet your specific space and aesthetic requirements.",
      features: ["3D visualization", "Custom measurements", "Design consultation", "Material selection"],
      duration: "1-2 weeks"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Project Management",
      description: "Complete project oversight from planning to completion with dedicated support.",
      features: ["Dedicated project manager", "Timeline management", "Quality control", "Regular updates"],
      duration: "Full project"
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Consultation Services",
      description: "Expert advice and recommendations for your partition project needs.",
      features: ["Site assessment", "Product recommendations", "Cost estimation", "Technical guidance"],
      duration: "1-2 hours"
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Cost Estimation",
      description: "Detailed and accurate cost estimates for your partition installation project.",
      features: ["Itemized quotations", "Transparent pricing", "Multiple options", "Budget planning"],
      duration: "24-48 hours"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and repair services for your installed partition systems.",
      features: ["Regular maintenance", "Emergency repairs", "Warranty support", "Upgrade services"],
      duration: "Ongoing"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your requirements, assess the space, and understand your vision."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed plans and 3D visualizations of your partition solution."
    },
    {
      step: "03",
      title: "Material Selection",
      description: "Choose from our range of premium gypsum products that best suit your needs."
    },
    {
      step: "04",
      title: "Professional Installation",
      description: "Our certified installers execute the project with precision and efficiency."
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Final inspection and quality check to ensure everything meets our high standards."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Partition Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From consultation to installation and ongoing support, we provide end-to-end 
            partition solutions for your commercial and residential projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expert Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services designed to deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Service Includes:</h4>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-muted-foreground mb-6">
                      <span className="font-medium">Duration: </span>
                      {service.duration}
                    </div>
                  </div>
                  <Button className="w-full">
                    Request Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach ensuring quality and efficiency in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold flex items-center justify-center w-full h-full">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Certified Professionals</h3>
                    <p className="text-muted-foreground">Our team consists of certified installers with extensive training.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold flex items-center justify-center w-full h-full">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality Guarantee</h3>
                    <p className="text-muted-foreground">All our work comes with comprehensive quality assurance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold flex items-center justify-center w-full h-full">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Timely Delivery</h3>
                    <p className="text-muted-foreground">We respect deadlines and deliver projects on schedule.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold flex items-center justify-center w-full h-full">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Competitive Pricing</h3>
                    <p className="text-muted-foreground">Fair and transparent pricing with no hidden costs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-foreground">Ready to Get Started?</CardTitle>
                  <CardDescription className="text-base">
                    Contact us today for a free consultation and quote
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Get Free Quote
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    No obligation • Free estimates • Expert advice
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;