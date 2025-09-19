
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogPortal, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, X } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);


  useEffect(() => {
    if (projectImages && projectImages.imageUrls.length > 0) {
      setSelectedImage(projectImages.imageUrls[0]);
    } else {
      setSelectedImage(null);
    }
     // Reset fullscreen when modal opens/closes or project changes
    setFullscreenImage(null);
  }, [projectImages, isOpen, project]);

  if (!project) return null;

  const getHintForUrl = (url: string) => {
    if (!projectImages) return undefined;
    const index = projectImages.imageUrls.findIndex(imgUrl => imgUrl === url);
    return projectImages.imageHints[index];
  }

  const handleImageClick = (url: string) => {
    setFullscreenImage(url);
  }

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  }

  return (
      <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}>
        <DialogContent 
          hideCloseButton
          className="max-w-6xl w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] flex flex-col p-0 rounded-lg"
        >
          <DialogClose className="absolute right-2 top-2 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="grid grid-cols-1 md:grid-cols-2/3 gap-8 overflow-y-auto p-4 pt-8 md:p-8">
            <div className="flex flex-col items-center justify-start gap-4">
              {selectedImage ? (
                  <div className="flex flex-col gap-4 w-full">
                      <div className="relative w-full aspect-video rounded-lg shadow-lg overflow-hidden cursor-zoom-in" onClick={() => handleImageClick(selectedImage)}>
                          <Image
                              src={selectedImage}
                              alt={`${project.title} - main view`}
                              fill
                              className="object-cover"
                              data-ai-hint={getHintForUrl(selectedImage)}
                          />
                      </div>
                      {projectImages && projectImages.imageUrls.length > 1 && (
                          <div className="flex gap-2 justify-center">
                              {projectImages.imageUrls.map((url, i) => (
                                  <button key={i} onClick={() => setSelectedImage(url)} className={cn("relative w-16 h-12 sm:w-24 sm:h-16 rounded-md overflow-hidden transition-all duration-200 ring-offset-background ring-offset-2 focus:outline-none focus:ring-2 focus:ring-ring", {
                                      "ring-2 ring-primary": selectedImage === url,
                                      "hover:opacity-80": selectedImage !== url
                                  })}>
                                      <Image
                                          src={url}
                                          alt={`${project.title} - thumbnail ${i + 1}`}
                                          fill
                                          className="object-cover"
                                          data-ai-hint={projectImages.imageHints[i]}
                                      />
                                  </button>
                              ))}
                          </div>
                      )}
                  </div>
              ) : (
                  <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <p>No images available</p>
                  </div>
              )}
            </div>
            <div className="flex flex-col space-y-6 justify-center text-center md:text-left">
              <DialogHeader className="text-center md:text-left">
                <DialogTitle className="text-3xl font-bold font-headline">{project.title}</DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground pt-2">
                  {project.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="transition-all duration-300 bg-primary/10 text-primary hover:bg-primary/20 shadow-[0_0_10px_-2px_hsl(var(--primary))] hover:shadow-[0_0_15px_-3px_hsl(var(--primary))]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                 <Button asChild className="transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-primary/40 shadow-primary/30">
                  <Link href="#">Live Demo <ArrowUpRight /></Link>
                </Button>
                <Button asChild variant="outline" className="transition-transform duration-300 hover:scale-105 hover:bg-primary/10 hover:text-primary border-primary/50 text-primary shadow-[0_0_15px_-2px_hsl(var(--primary))] hover:shadow-[0_0_25px_-5px_hsl(var(--primary))]">
                  <Link href="#">View Code</Link>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>

        {fullscreenImage && (
          <DialogPortal>
            <div 
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
              onClick={handleCloseFullscreen}
            >
                <button
                    className="absolute top-4 right-4 text-white z-50 rounded-full bg-black/50 p-2 hover:bg-black/75 transition-colors"
                    onClick={handleCloseFullscreen}
                >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close fullscreen view</span>
                </button>
                <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
                  <Image
                    src={fullscreenImage}
                    alt="Fullscreen project view"
                    fill
                    className="object-contain"
                    data-ai-hint={getHintForUrl(fullscreenImage)}
                  />
                </div>
            </div>
          </DialogPortal>
        )}
      </Dialog>
  );
}
