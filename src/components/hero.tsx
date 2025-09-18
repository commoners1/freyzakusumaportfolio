import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-accent animate-in fade-in duration-1000"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                Freyza Kusuma
              </h1>
              <p className="text-xl text-primary font-semibold animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                Creative Web Developer
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
                I build modern, interactive, and responsive web applications.
                Let's turn your ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              <Button asChild size="lg">
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center animate-in fade-in zoom-in-50 duration-1000 delay-500">
             <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-primary/20 shadow-lg">
                <AvatarImage src="https://picsum.photos/seed/avatar/400/400" data-ai-hint="woman portrait" />
                <AvatarFallback>FK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
