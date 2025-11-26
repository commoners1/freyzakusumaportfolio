"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogPortal, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectImageDetails = {
  id: string;
  images: StaticImageData[];
}

type Project = {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  tags: string[];
  imageDetails: ProjectImageDetails;
  liveDemoUrl: string | null;
  codeUrl: string | null;
};

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<StaticImageData | null>(null);


  useEffect(() => {
    if (project.imageDetails && project.imageDetails.images.length > 0) {
      setSelectedImage(project.imageDetails.images[0]);
    } else {
      setSelectedImage(null);
    }

    setFullscreenImage(null);
  }, [project.imageDetails, isOpen, project]);

  if (!project) return null;

  const handleImageClick = (pic: StaticImageData) => {
    setFullscreenImage(pic);
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
          <DialogClose asChild>
            <button
                className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
              >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>
          <div className="grid grid-cols-1 md:grid-cols-2/3 gap-8 overflow-y-auto p-8 pt-12 md:pt-8 h-full">
            <div className="flex flex-col items-center justify-start gap-4">
              {selectedImage ? (
                  <div className="flex flex-col gap-4 w-full">
                      <div className="relative w-full aspect-video rounded-lg shadow-lg overflow-hidden cursor-zoom-in" onClick={() => handleImageClick(selectedImage)}>
                          <Image
                              src={selectedImage}
                              alt={`${project.title} - main view`}
                              fill
                              className="object-cover"
                          />
                      </div>
                      {project.imageDetails && project.imageDetails.images.length > 1 && (
                          <div className="flex gap-2 justify-center">
                              {project.imageDetails.images.map((image, i) => (
                                  <button key={i} onClick={() => setSelectedImage(image)} className={cn("relative w-16 h-12 sm:w-24 sm:h-16 rounded-md overflow-hidden transition-all duration-200 ring-offset-background ring-offset-2 focus:outline-none focus:ring-2 focus:ring-ring", {
                                      "ring-2 ring-primary": selectedImage === image,
                                      "hover:opacity-80": selectedImage !== image
                                  })}>
                                      <Image
                                          src={image}
                                          alt={`${project.title} - thumbnail ${i + 1}`}
                                          fill
                                          className="object-cover"
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
                <DialogDescription className="text-base/relaxed md:text-lg/relaxed text-muted-foreground pt-2">
                  {project.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="transition-all duration-300 bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(73,214,219,0.4)]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                {project.liveDemoUrl ? (
                  <Button asChild className="transition-transform duration-300 hover:scale-105">
                    <Link href={project.liveDemoUrl}>Live Demo <ArrowUpRight /></Link>
                  </Button>
                ) : null}
                {project.codeUrl ? (
                  <Button asChild variant="outline" className="transition-transform duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:text-cyan-300 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(73,214,219,0.4)] hover:shadow-[0_0_25px_rgba(73,214,219,0.6)]">
                    <Link href={project.codeUrl}>View Code</Link>
                  </Button>
                ) : null}
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
                    className="absolute top-4 right-4 text-white z-50 rounded-full bg-black/50 p-2 hover:bg-black/75 transition-colors focus:outline-none"
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
                  />
                </div>
            </div>
          </DialogPortal>
        )}
      </Dialog>
  );
}
