import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, PenTool, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern technologies like Next.js and React."
  },
  {
    icon: <PenTool className="h-12 w-12 text-primary" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that provide an excellent user experience."
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-primary" />,
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to attract more organic traffic and grow your audience."
  }
]

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background/80 backdrop-blur-md">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I offer a range of services to help you create a stunning and effective online presence.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-12">
          {services.map((service, index) => (
            <div key={service.title} className="animate-in fade-in slide-in-from-bottom-12 duration-1000 group" style={{animationDelay: `${index * 150}ms`, perspective: '1000px'}}>
            <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card/50 border-border/50 hover:bg-card/70 group-hover:border-primary/50" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="items-center text-center gap-4 p-8">
                {service.icon}
                <div className="grid gap-2">
                  <CardTitle className="text-2xl font-bold font-headline">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                   {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}