import { useState, useEffect } from "react";
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
import { projects } from "@/lib/utils";
import { getProjectImages } from "@/lib/imageImports";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projectImages, setProjectImages] = useState<Record<number, string[]>>(
    {}
  );
  const [loadingImages, setLoadingImages] = useState<Record<number, boolean>>(
    {}
  );

  const categories = ["All", "Commercial", "Residential"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Load images for a specific project
  const loadProjectImages = async (projectId: number) => {
    if (projectImages[projectId] || loadingImages[projectId]) return;

    setLoadingImages((prev) => ({ ...prev, [projectId]: true }));

    try {
      const images = await getProjectImages(projectId);
      setProjectImages((prev) => ({ ...prev, [projectId]: images }));
    } catch (error) {
      console.error(`Failed to load images for project ${projectId}:`, error);
    } finally {
      setLoadingImages((prev) => ({ ...prev, [projectId]: false }));
    }
  };

  // Load images when project is selected
  useEffect(() => {
    if (selectedProject) {
      loadProjectImages(selectedProject);
    }
  }, [selectedProject]);

  // Load first image for all visible projects on component mount and category change
  useEffect(() => {
    filteredProjects.forEach((project) => {
      if (!projectImages[project.id] && !loadingImages[project.id]) {
        loadProjectImages(project.id);
      }
    });
  }, [filteredProjects, projectImages, loadingImages]);

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
                className={`transition-all duration-300 ${
                  activeCategory !== category
                    ? "hover:bg-[#f1c886] hover:text-black hover:border-[#BD9E85]"
                    : ""
                }`}
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
                  {projectImages[project.id] &&
                  projectImages[project.id].length > 0 ? (
                    <img
                      src={projectImages[project.id][0]}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : loadingImages[project.id] ? (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                        <p className="text-gray-500">Loading...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                        <p className="text-gray-500">No image available</p>
                      </div>
                    </div>
                  )}
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
                            <TabsList className="grid w-full grid-cols-1">
                              <TabsTrigger
                                value="images"
                                className="flex items-center gap-2"
                              >
                                <ImageIcon className="h-4 w-4" />
                                Project Photos
                              </TabsTrigger>
                            </TabsList>

                            <TabsContent value="images" className="space-y-4">
                              {loadingImages[project.id] ? (
                                <div className="flex items-center justify-center py-8">
                                  <div className="text-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                                    <p className="text-muted-foreground">
                                      Loading images...
                                    </p>
                                  </div>
                                </div>
                              ) : projectImages[project.id] &&
                                projectImages[project.id].length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {projectImages[project.id].map(
                                    (image, index) => (
                                      <div
                                        key={index}
                                        className="relative group"
                                      >
                                        <img
                                          src={image}
                                          alt={`${project.title} - Image ${
                                            index + 1
                                          }`}
                                          className="w-full h-48 object-cover rounded-lg"
                                        />
                                      </div>
                                    )
                                  )}
                                </div>
                              ) : (
                                <div className="text-center py-8">
                                  <p className="text-muted-foreground">
                                    No images available
                                  </p>
                                </div>
                              )}
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
