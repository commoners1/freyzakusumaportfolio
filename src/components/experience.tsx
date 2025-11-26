"use client";

import { Briefcase, ChevronDown, CheckCircle2, Calendar, Building2, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { memo, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const MAX_DESCRIPTION_LENGTH = 150;
const MAX_BULLET_POINTS = 3; // Show first 3 bullet points, then expand to show all

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string | string[]; // Can be either paragraph text or array of bullet points
  isPromotion?: boolean; // If true, this is a promotion at the same company
  previousTitle?: string; // Previous title before promotion (optional)
}

const experienceData: ExperienceItem[] = [
  {
    title: "Senior Project Web Developer",
    company: "NOTCH Digital Agency",
    date: "Nov 2025 - Present",
    isPromotion: true,
    previousTitle: "Web Developer",
    // Example with bullet points (array of strings):
    description: [
      "Build and maintain strong professional relationships with clients through regular communication, weekly on-site visits, and proactive support.",
      "Serve as the primary representative in meetings with UNICEF and external vendors, communicating technical updates, project status, and requirements clearly and professionally.",
      "Manage development timelines and coordinate deliverables to ensure smooth project execution and on-time completion.",
      "Provide expert technical insights and solutions to address website, server, and system-related challenges.",
      "Enhance internal and external company websites to improve performance, stability, security, and user experience.",
      "Identify and resolve critical technical issues by monitoring system behavior, debugging errors, and optimizing performance.",
      "Monitor and update website processes to comply with payment gateway regulations and industry standards.",
      "Conduct daily system and server monitoring to ensure optimal website performance, availability, and reliability.",
      "Host, maintain, and secure multiple websites, ensuring high availability, data integrity, and adherence to security best practices.",
      "Manage and optimize company and client databases through query refinement, indexing, and performance tuning.",
      "Lead and mentor junior developers by providing technical guidance, conducting code reviews, delegating tasks, and facilitating problem-solving discussions.",
      "Collaborate with team members to brainstorm efficient solutions and development strategies for client projects.",
      "Create accurate project timelines, estimates, and documentation to support development planning and user guidance.",
      "Document technical insights, user instructions, and project information to maintain a clear and accessible knowledge base.",
      "Manage multiple web development projects simultaneously by balancing workloads, priorities, and deadlines effectively.",
      "Deliver monthly performance and project progress reports as the representative of the Web Development Division."
    ],
  },
  {
    title: "Web Developer",
    company: "NOTCH Digital Agency",
    date: "Nov 2023 - Nov 2025",
    // Example with bullet points (array of strings):
    description: [
      "Enhancing internal and external company websites to improve performance, stability, and user experience.",
      "Identifying and resolving technical issues, monitoring for suspicious activities, and ensuring reliability of server-hosted websites.",
      "Monitoring and updating website processes to comply with changes in payment gateway regulations.",
      "Debugging and optimizing code for improved functionality, maintainability, and performance.",
      "Conducting daily system monitoring and inspections to optimize overall website and server performance.",
      "Hosting and maintaining multiple websites, ensuring high availability, data integrity, and security compliance.",
      "Managing databases, including query simplification, indexing, and performance optimization for efficiency.",
      "Delegating bugs, issues, and feature requests to junior developers and reviewing their progress to ensure quality standards.",
      "Leading and mentoring junior web developers, providing technical guidance, conducting code reviews, and assisting in problem-solving discussions.",
      "Creating and estimating development and maintenance timelines, ensuring deliverables are met according to client requirements.",
      "Brainstorming with junior developers to identify optimal solutions and strategies for client projects.",
      "Managing multiple web development projects simultaneously, balancing workloads and deadlines effectively.",
      "Delivering monthly project and performance reports on client sites as the representative of the Web Development Division.",
      "Ensuring team alignment with client expectations and organizational goals through continuous communication and process improvements."
    ],
    // Alternative: You can also use paragraph text (string):
    // description: "Bolstering internal and external company websites; Combating issues and suspicious behavior on websites, sustaining server's websites; Monitoring and updating website's flow in light of the alteration of payment gateway regulation; Debugging and optimizing code; Aiding websites and data migration; Governing databases, including query simplification and optimization.",
  },
  {
    title: "Senior IT Developer",
    company: "Computer Network Services Group",
    date: "May 2023 - Oct 2023",
    description: [
      "Orchestrated the optimization of diverse websites by leveraging cutting-edge technologies, resulting in significant improvements in performance and reliability.",
      "Resolved critical web development issues across multiple projects, optimizing load times and reducing bounce rates by over 25% through advanced caching techniques and performance tuning.",
      "Streamlined the production pipeline by implementing rigorous testing and debugging procedures, achieving a 35% reduction in production-related errors and enhanced process efficiency.",
      "Performed regular maintenance on both company and client databases and websites, boosting system efficiency and resource utilization by up to 60%."      
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Akses Prima Indonesia",
    date: "Dec 2022 - Apr 2023",
    description: [
      "Developed and deployed multiple websites using a wide range of technologies, helping users modernize and streamline their business processes.",
      "Collaborated with clients and project stakeholders through regular meetings to gather requirements, understand challenges, and deliver tailored technical solutions.",
      "Maintained company and client websites daily, reducing cybersecurity incidents and ensuring consistent uptime and reliability.",
      "Revamped website performance by executing thorough testing and debugging procedures during the development phase, resulting in faster load times and improved user experience."
    ]
  },
  {
    title: "Software Consultant",
    company: "IFCA Indonesia - PT IFCA Property365 Indonesia",
    date: "Nov 2019 - Dec 2022",
    description: [
      "Enhanced project execution speed by assisting users in setting up and configuring IFCA applications on their devices and migrating existing data seamlessly.",
      "Conducted regular training sessions to help users understand and operate the IFCA application effectively, ensuring smooth onboarding and adoption.",
      "Customized the IFCA application based on user requirements by applying a user-centric design framework, leading to a 40% increase in user satisfaction and a 25% reduction in churn rate.",
      "Proposed and implemented technical solutions to resolve user concerns, building strong client trust and encouraging long-term collaboration.",
      "Diagnosed and corrected up to 100% of data anomalies in user databases through targeted SQL queries and analysis, significantly improving data integrity and workflow efficiency.",
      "Collaborated with clients through multiple project meetings to analyze issues, define requirements, and align deliverables, achieving nearly 100% agreement and project success rates."
    ]
  },
];

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
  previousCompany?: string; // Company of previous experience to check if same
}

const ExperienceCard = memo(({ item, index, previousCompany }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Check if description is an array (bullet points) or string (paragraph)
  const isBulletPoints = Array.isArray(item.description);
  const descriptionString = typeof item.description === 'string' ? item.description : '';
  const descriptionArray = Array.isArray(item.description) ? item.description : [];
  
  // For bullet points: show first 3, then all on expand
  // For paragraph: truncate at MAX_DESCRIPTION_LENGTH
  const needsTruncation = isBulletPoints
    ? descriptionArray.length > MAX_BULLET_POINTS
    : descriptionString.length > MAX_DESCRIPTION_LENGTH;
  
  const displayedBulletPoints = isBulletPoints && !isExpanded
    ? descriptionArray.slice(0, MAX_BULLET_POINTS)
    : isBulletPoints
    ? descriptionArray
    : [];
  
  const truncatedDescription = !isBulletPoints && needsTruncation
    ? descriptionString.substring(0, MAX_DESCRIPTION_LENGTH).trim() + "..."
    : !isBulletPoints
    ? descriptionString
    : "";

  useEffect(() => {
    // Use requestIdleCallback for better performance
    const setupObserver = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { 
          threshold: 0.1, 
          rootMargin: "100px" // Increased to trigger earlier, reducing jank
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => observer.disconnect();
    };

    // Delay observer setup slightly to avoid blocking scroll
    const timeoutId = setTimeout(setupObserver, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative mb-8 md:mb-12 opacity-0 transition-opacity duration-300 ease-out card-optimized",
        isVisible && "opacity-100"
      )}
      style={{
        transitionDelay: `${index * 50}ms`, // Reduced delay
        contain: "layout style",
      }}
    >
      <div className="flex items-start gap-6 md:gap-8">
        {/* Timeline Icon */}
        <div className="flex-shrink-0 relative z-10">
          <div className="relative">
            {/* Show promotion icon if it's a promotion */}
            {item.isPromotion ? (
              <div className="relative">
                <div className="absolute -top-1 -right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-primary border-2 border-background">
                  <TrendingUp className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-200 hover:scale-110 border-2 border-primary/20">
                  <Briefcase className="h-7 w-7" />
                </div>
              </div>
            ) : (
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-200 hover:scale-110 border-2 border-primary/20">
                <Briefcase className="h-7 w-7" />
              </div>
            )}
          </div>
        </div>

        {/* Card - Always left aligned */}
        <div className="flex-1 min-w-0">
          <div className="group relative bg-card/90 border border-border/50 p-6 rounded-xl shadow-lg w-full transition-shadow duration-200 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 overflow-hidden">
            {/* Simplified gradient overlay - only on hover */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 text-primary/70" />
                <p className="text-primary font-semibold text-sm uppercase tracking-wide">{item.company}</p>
                {item.isPromotion && (
                  <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/30 text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Promoted
                  </Badge>
                )}
              </div>
              
              <div className="mb-2">
                <h3 className="text-2xl font-bold font-headline bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                {item.isPromotion && item.previousTitle && (
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                    <span className="text-xs">Previously:</span>
                    <span className="text-primary/70 italic">{item.previousTitle}</span>
                  </p>
                )}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  {item.date}
                </Badge>
              </div>
              
              <div className="text-muted-foreground space-y-3">
                {isBulletPoints ? (
                  <ul className={cn(
                    "space-y-3 transition-all duration-300",
                    !isExpanded && needsTruncation && "line-clamp-[6]"
                  )}>
                    {displayedBulletPoints.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                          </div>
                        </div>
                        <span className="text-sm leading-relaxed flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={cn(
                    "text-sm leading-relaxed transition-all duration-300",
                    !isExpanded && needsTruncation && "line-clamp-3"
                  )}>
                    {isExpanded ? descriptionString : truncatedDescription}
                  </p>
                )}
                
                {needsTruncation && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 h-auto py-1.5 px-3 text-xs font-medium text-primary hover:text-primary/80 hover:bg-primary/10 rounded-full border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    {isExpanded ? (
                      <>
                        Show Less
                        <ChevronDown className="ml-1.5 h-3.5 w-3.5 rotate-180 transition-transform" />
                      </>
                    ) : (
                      <>
                        Show More
                        <ChevronDown className="ml-1.5 h-3.5 w-3.5 transition-transform" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ExperienceCard.displayName = "ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-background scroll-mt-16 relative">
      {/* Simplified background decoration - removed for performance */}
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              My Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my professional journey and growth as a developer.
            </p>
          </div>
        </div>
        
        <div className="relative mt-12">
          {/* Enhanced timeline */}
          <div className="absolute left-7 top-0 h-full w-0.5 bg-gradient-to-b from-border/50 via-primary/30 to-border/50"></div>
          
          {experienceData.map((item, index) => {
            const previousCompany = index > 0 ? experienceData[index - 1].company : undefined;
            const isSameCompany = previousCompany === item.company;
            
            return (
              <div key={`${item.company}-${item.date}-${index}`} className={cn(
                isSameCompany && "relative"
              )}>
                {isSameCompany && !item.isPromotion && (
                  <div className="absolute left-7 top-0 h-4 w-0.5 bg-primary/50 -translate-y-4"></div>
                )}
                <ExperienceCard
                  item={item}
                  index={index}
                  previousCompany={previousCompany}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
