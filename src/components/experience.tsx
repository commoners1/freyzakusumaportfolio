import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    date: "Jan 2021 - Present",
    description:
      "Led the development of a new client-facing dashboard using Next.js, resulting in a 30% increase in user engagement. Mentored junior developers and implemented a new component library.",
  },
  {
    title: "Web Developer",
    company: "Creative Agency LLC",
    date: "Jun 2018 - Dec 2020",
    description:
      "Developed and maintained client websites using React and WordPress. Collaborated with designers to create responsive and interactive user experiences. Improved website performance by 40% through code optimization.",
  },
  {
    title: "Junior Web Developer",
    company: "Web Starters Co.",
    date: "Jul 2017 - May 2018",
    description:
      "Assisted in the development of e-commerce websites. Gained experience with HTML, CSS, JavaScript, and jQuery. Contributed to building reusable code and libraries for future use.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              My Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my professional journey and growth as a developer.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 -ml-[2px] h-full w-1 bg-border/50"></div>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="flex items-center">
                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg absolute left-1/2 -translate-x-1/2">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div
                  className={`w-full ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  } flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} items-center text-center md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="bg-card/50 border-border/50 p-6 rounded-lg shadow-md max-w-md w-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                    <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                    <p className="text-primary font-semibold text-base mb-1">{item.company}</p>
                    <Badge variant="secondary" className="mb-3">{item.date}</Badge>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
