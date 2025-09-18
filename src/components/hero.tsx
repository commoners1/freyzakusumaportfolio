import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full py-24 md:py-32 lg:py-48 xl:py-64"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl/none font-headline text-white animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                Freyza Kusuma
              </h1>
              <p className="text-2xl text-primary font-semibold animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                Creative Web Developer
              </p>
              <p className="max-w-[600px] text-gray-200 md:text-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
                I build modern, interactive, and responsive web applications.
                Let's turn your ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold py-6 px-8 rounded-full transition-transform duration-300 hover:scale-105">
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-lg font-semibold py-6 px-8 rounded-full transition-transform duration-300 hover:scale-105 border-2 border-primary/50 hover:bg-primary/20">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center animate-in fade-in zoom-in-50 duration-1000 delay-500">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Avatar className="relative h-64 w-64 md:h-80 md:w-80 border-4 border-primary/50 shadow-2xl">
                    <AvatarImage src="https://picsum.photos/seed/avatar/400/400" data-ai-hint="woman portrait" />
                    <AvatarFallback>FK</AvatarFallback>
                </Avatar>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
