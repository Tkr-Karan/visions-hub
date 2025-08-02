import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Heart } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality standards in materials and installation."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Teamwork",
      description: "Our collaborative approach brings together skilled professionals to deliver exceptional results."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge partition solutions that meet evolving needs."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, driving our commitment to exceptional service."
    }
  ];

  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      experience: "20+ years",
      description: "Visionary leader with extensive experience in construction and partition systems."
    },
    {
      name: "Sarah Johnson",
      position: "Head of Operations",
      experience: "15+ years",
      description: "Operations expert ensuring smooth project execution and quality delivery."
    },
    {
      name: "Mike Wilson",
      position: "Lead Installation Manager",
      experience: "18+ years",
      description: "Technical specialist overseeing all installation projects and quality control."
    },
    {
      name: "Emma Davis",
      position: "Design Consultant",
      experience: "12+ years",
      description: "Creative designer helping clients achieve their vision with innovative solutions."
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Started as a small family business" },
    { year: "2012", event: "100+ Projects", description: "Reached our first major milestone" },
    { year: "2016", event: "Regional Expansion", description: "Expanded services across the region" },
    { year: "2020", event: "Quality Certification", description: "Achieved ISO quality certification" },
    { year: "2024", event: "500+ Projects", description: "Celebrating over 500 successful projects" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Amayaas
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                With over 15 years of experience in the partition industry, Amayaas has been 
                transforming spaces with innovative gypsum partition solutions. We combine traditional 
                craftsmanship with modern technology to deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </div>
            <div className="lg:pl-12">
              <Card className="p-8 bg-card shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-foreground">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    "To provide innovative, high-quality gypsum partition solutions that enhance 
                    spaces while delivering exceptional value and service to our clients. We are 
                    committed to sustainable practices and continuous improvement in everything we do."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients, partners, and team members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional partition solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium">Experience: </span>
                    {member.experience}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our company's growth and development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their partition projects. 
            Let's discuss how we can help transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;