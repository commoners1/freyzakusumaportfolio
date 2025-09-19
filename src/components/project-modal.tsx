
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

interface ProjectModalProps {
  project: Project;
  projectImages?: ImagePlaceholder;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, projectImages, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0">
        <div className="grid md:grid-cols-2">
          <div className="relative flex items-center justify-center p-8 bg-muted/50">
            {projectImages ? (
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  {projectImages.imageUrls.map((url, i) => (
                    <CarouselItem key={i}>
                      <Image
                        src={url}
                        alt={`${project.title} - view ${i + 1}`}
                        width={600}
                        height={400}
                        className="w-full aspect-video object-cover rounded-lg shadow-lg"
                        data-ai-hint={projectImages.imageHints[i]}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : (
                <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p>No images available</p>
                </div>
            )}
          </div>
          <div className="flex flex-col justify-center p-8 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold font-headline">{project.title}</DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground pt-2">
                {project.description}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild className="transition-transform duration-300 hover:scale-105">
                <Link href="#">Live Demo <ArrowUpRight /></Link>
              </Button>
              <Button asChild variant="secondary" className="transition-transform duration-300 hover:scale-105">
                <Link href="#">View Code</Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
