import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Play,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Sample project data - you can replace with real data
  const projects = [
    {
      id: 1,
      title: "Modern Office Partition System",
      category: "Commercial",
      location: "Mumbai, Maharashtra",
      date: "December 2024",
      team: "5 Members",
      description:
        "Complete office renovation with premium gypsum partitions, creating modern workspaces with excellent acoustics and aesthetics.",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      features: [
        "Acoustic Insulation",
        "Fire Resistant",
        "Modular Design",
        "Easy Installation",
      ],
    },
    {
      id: 2,
      title: "Residential Living Space Division",
      category: "Residential",
      location: "Delhi, NCR",
      date: "November 2024",
      team: "3 Members",
      description:
        "Elegant partition solution for a modern apartment, maximizing space utilization while maintaining privacy and style.",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      features: [
        "Space Optimization",
        "Sound Proofing",
        "Custom Design",
        "Quick Installation",
      ],
    },
    {
      id: 3,
      title: "Healthcare Facility Partitions",
      category: "Healthcare",
      location: "Bangalore, Karnataka",
      date: "October 2024",
      team: "6 Members",
      description:
        "Specialized partition system for healthcare facility ensuring hygiene, privacy, and compliance with medical standards.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      features: [
        "Hygienic Materials",
        "Easy Cleaning",
        "Privacy Control",
        "Medical Grade",
      ],
    },
    {
      id: 4,
      title: "Educational Institution Renovation",
      category: "Educational",
      location: "Pune, Maharashtra",
      date: "September 2024",
      team: "4 Members",
      description:
        "Complete classroom and office partition system for educational institution focusing on functionality and student comfort.",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
      ],
      video:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      features: [
        "Student Friendly",
        "Durable Construction",
        "Flexible Layout",
        "Cost Effective",
      ],
    },
  ];

  const categories = [
    "All",
    "Commercial",
    "Residential",
    "Healthcare",
    "Educational",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our portfolio of successful gypsum partition projects. From
            commercial spaces to residential homes, we deliver excellence in
            every installation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-soft transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="lg"
                          className="mr-2"
                          onClick={() => setSelectedProject(project.id)}
                        >
                          <Play className="h-4 w-4 mr-2" />
                          View Project
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">
                              {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge variant="default">
                                {project.category}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="flex items-center gap-1"
                              >
                                <MapPin className="h-3 w-3" />
                                {project.location}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="flex items-center gap-1"
                              >
                                <Calendar className="h-3 w-3" />
                                {project.date}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="flex items-center gap-1"
                              >
                                <Users className="h-3 w-3" />
                                {project.team}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-4">
                              {project.description}
                            </p>
                          </div>

                          <Tabs defaultValue="images" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger
                                value="images"
                                className="flex items-center gap-2"
                              >
                                <ImageIcon className="h-4 w-4" />
                                Photos
                              </TabsTrigger>
                              <TabsTrigger
                                value="video"
                                className="flex items-center gap-2"
                              >
                                <Play className="h-4 w-4" />
                                Video
                              </TabsTrigger>
                            </TabsList>

                            <TabsContent value="images" className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.images.map((image, index) => (
                                  <div key={index} className="relative group">
                                    <img
                                      src={image}
                                      alt={`${project.title} - Image ${
                                        index + 1
                                      }`}
                                      className="w-full h-48 object-cover rounded-lg"
                                    />
                                  </div>
                                ))}
                              </div>
                            </TabsContent>

                            <TabsContent value="video" className="space-y-4">
                              <div className="relative">
                                <video
                                  controls
                                  className="w-full h-64 md:h-96 rounded-lg"
                                  poster={project.images[0]}
                                >
                                  <source
                                    src={project.video}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            </TabsContent>
                          </Tabs>

                          <div>
                            <h4 className="font-semibold mb-3">
                              Key Features:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.features.map((feature, index) => (
                                <Badge key={index} variant="outline">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="default">{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us help you create the perfect partition solution for your
            space. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-primary border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
