"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Code, 
  Server, 
  Database, 
  Settings, 
  Brain, 
  Wrench, 
  Users,
  Palette,
  Terminal,
  Cloud,
  Sparkles
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Front-end",
    icon: <Palette className="h-5 w-5" />,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "jQuery", "Bootstrap", "Tailwind CSS", "Figma"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Back-end",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "NestJS", "Express.js", "PHP", "Laravel", "CodeIgniter", "RESTful API Design", "Prisma ORM"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "Redis", "Query Optimization", "Indexing"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "DevOps / Server Management",
    icon: <Terminal className="h-5 w-5" />,
    skills: ["Docker", "Docker Compose", "CI/CD Pipelines", "WHM/cPanel", "Nginx", "Apache", "Git", "GitHub"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    name: "AI / Data Science",
    icon: <Brain className="h-5 w-5" />,
    skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Data Mining", "NLP", "YOLOv8 Object Detection"],
    color: "from-indigo-500/20 to-violet-500/20"
  },
  {
    name: "Tools & Platforms",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["JIRA", "Postman", "Apidog", "VS Code", "Slack", "Salesforce Integration", "Midtrans/Xendit/DOKU Payment Gateway", "Basecamp Project Management"],
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    name: "Soft Skills",
    icon: <Users className="h-5 w-5" />,
    skills: ["Leadership", "Problem-Solving", "Effective Communication", "Teamwork", "Adaptability", "Analytical Thinking"],
    color: "from-teal-500/20 to-cyan-500/20"
  },
];

export function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-category-index') || '0');
            setVisibleCategories((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    const categoryElements = containerRef.current?.querySelectorAll('[data-category-index]');
    categoryElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background scroll-mt-16 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              My Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              data-category-index={categoryIndex}
              className={cn(
                "opacity-0 transition-all duration-500 ease-out",
                visibleCategories.has(categoryIndex) && "opacity-100",
                categoryIndex === skillCategories.length - 1 && "lg:col-start-2"
              )}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`,
                contain: "layout style",
              }}
            >
              <Card className="h-full bg-card/90 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden">
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                  category.color
                )}></div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg font-bold font-headline">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs py-1 px-3 bg-primary/5 text-foreground border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                        style={{
                          animationDelay: `${(categoryIndex * 100) + (skillIndex * 20)}ms`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
