import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight } from "lucide-react";

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

export function Portfolio() {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Portfolio</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I've worked on.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 pt-12">
          {projects.map((project, index) => {
            const projectImage = getImage(project.id);
            return (
              <div key={project.title} className="animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{animationDelay: `${index * 150}ms`}}>
                <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-60 object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild>
                      <Link href="#">Live Demo <ArrowUpRight /></Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="#">View Code</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
