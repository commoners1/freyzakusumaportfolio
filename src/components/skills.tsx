import { Badge } from "@/components/ui/badge";

const skillsList = [
  "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
  "Tailwind CSS", "Node.js", "Express", "Firebase", "MongoDB", 
  "Git", "Figma", "UI/UX Design", "SEO"
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background/80 backdrop-blur-md scroll-mt-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into my technical toolkit. I'm always learning and expanding my skills.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-8 max-w-4xl">
            {skillsList.map((skill, index) => (
              <div key={skill} className="animate-in fade-in zoom-in-50 duration-500 group" style={{animationDelay: `${index * 50}ms`, perspective: '1000px'}}>
                <Badge variant="secondary" className="text-lg py-2 px-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card/50 border-border/50 hover:bg-card/70 group-hover:border-primary/50 text-foreground" style={{ transformStyle: 'preserve-3d' }}>
                  {skill}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
