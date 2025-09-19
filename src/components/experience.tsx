import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experienceData = [
    {
    title: "Web Developer",
    company: "NOTCH",
    date: "Nov 2023 - Present",
    description: "Bolstering internal and external company websites; Combating issues and suspicious behavior on websites, sustaining server's websites; Monitoring and updating website's flow in light of the alteration of payment gateway regulation; Debugging and optimizing code; Aiding websites and data migration; Governing databases, including query simplification and optimization.",
  },
  {
    title: "Senior IT Developer",
    company: "Computer Network Services Group",
    date: "May 2023 - Oct 2023",
    description:
      "Orchestrated the optimization of diverse websites, leveraging cutting-edge technologies to revolutionize website performance; Resolved critical web development issues across multiple projects, optimizing load times and reducing bounce rates through implementation of advanced caching techniques and performance optimizations; Streamlined the production pipeline by incorporating rigorous testing and debugging procedures, achieved enhanced process efficiency and a 35% decrease in production-related errors; Performed frequent maintenance on several users' and company's databases and websites, optimizing their processes and usage up to 60%.",
  },
  {
    title: "Full Stack Developer",
    company: "Akses Prima Indonesia",
    date: "Dec 2022 - Apr 2023",
    description:
      "Generated websites leveraging extensive technologies, aiding users to modernize business processes considerably; Contributed in plenty of meetings with users, attaining all information regarding a project and its challenges; Enforced daily care on users and the company's website, reducing cases of trouble caused by any cyber-attack; Revamped sites to encounter high performance by executing testing and debugging steps in development mode.",
  },
  {
    title: "Software Consultant",
    company: "IFCA Indonesia - PT IFCA Property365 Indonesia",
    date: "Nov 2019 - Dec 2022",
    description:
      "Enhanced the speed of project execution by enabling users to set up the IFCA application on their devices, as well as migrating their existing data into it if any; Led users to understand how to access and operate the IFCA application for the first time by conducting training sessions routinely as scheduled; Tailored the IFCA application to align with users' preferences by implementing a user-centric design framework; Proposed various solutions and alternatives to users to answer all concerns regarding the IFCA application, achieving their trust to consult further.",
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
          <div className="absolute left-6 top-0 h-full w-0.5 -translate-x-1/2 bg-border/50 md:left-1/2"></div>
          {experienceData.map((item, index) => (
             <div
              key={index}
              className="relative mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="flex">
                  <div className="absolute left-6 top-0 -translate-x-1/2 md:left-1/2 z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                      <Briefcase className="h-6 w-6" />
                    </div>
                  </div>
                 <div
                  className={`ml-16 md:ml-0 w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  } flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}
                >
                  <div className={`bg-card/50 border-border/50 p-6 rounded-lg shadow-md max-w-md w-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 md:-mt-1 ${index % 2 !== 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                    <p className="text-primary font-semibold text-base mb-1">{item.company}</p>
                    <Badge variant="secondary" className="mb-3">{item.date}</Badge>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                {/* Empty div for spacing on desktop */}
                 <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
