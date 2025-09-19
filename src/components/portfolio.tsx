
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React, { useState } from "react";
import { ProjectModal } from "@/components/project-modal";

const projects = [
  {
    id: "project-1",
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for managing products, orders, and customers for an online store.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Recharts"],
  },
  {
    id: "project-2",
    title: "Travel Booking App",
    description: "A mobile-first application for searching and booking flights, hotels, and rental cars.",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    id: "project-3",
    title: "SaaS Landing Page",
    description: "A high-converting landing page for a new software-as-a-service product, with a focus on UX.",
    tags: ["Next.js", "Framer Motion", "Styled Components"],
  },
  {
    id: "project-4",
    title: "Creative Personal Blog",
    description: "A unique and creative blog platform with a custom CMS and a masonry grid layout.",
    tags: ["Gatsby", "GraphQL", "Contentful"],
  },
];

type Project = (typeof projects)[0];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-background/80 backdrop-blur-md scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Portfolio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I've worked on. Click a card to see more.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 pt-12">
          {projects.map((project, index) => {
            const projectImage = getImage(project.id);
            return (
              <div key={project.title} className="animate-in fade-in slide-in-from-bottom-12 duration-1000 group/card" style={{animationDelay: `${index * 150}ms`, perspective: '1000px'}}>
                <Card 
                  className="overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card/50 border-border/50 hover:bg-card/70 group-hover/card:border-primary/50 cursor-pointer" 
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => handleCardClick(project)}
                >
                  {projectImage && (
                     <div className="relative">
                       <Image
                         src={projectImage.imageUrls[0]}
                         alt={`${project.title} preview`}
                         width={600}
                         height={400}
                         className="w-full h-60 object-cover transition-transform duration-500 group-hover/card:scale-105"
                         data-ai-hint={projectImage.imageHints[0]}
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                     </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            projectImages={getImage(selectedProject.id)}
            isOpen={!!selectedProject}
            onClose={handleModalClose}
          />
        )}
      </div>
    </section>
  );
}
