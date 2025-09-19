import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "./typing-animation";
import Image from "next/image";

export function Hero() {
  const creativeRoles = [
    "Creative Web Developer",
    "Frontend Specialist",
    "UI/UX Enthusiast",
    "React Fanatic",
  ];

  return (
    <section
      id="hero"
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 bg-grid opacity-20"></div>
       <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      <div className="container px-4 md:px-6 relative text-center mx-auto">
        <div className="grid gap-8">
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="flex justify-center items-center animate-in fade-in zoom-in-50 duration-1000 delay-500">
              <div className="relative group">
                <div 
                  className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                  style={{ animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite` }}
                ></div>
                <Avatar className="relative h-56 w-56 md:h-64 md:w-64 border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/20">
                    <AvatarImage 
                      src="https://picsum.photos/seed/avatar/400/400"
                      alt="Freyza Kusuma"
                      className="aspect-square h-full w-full"
                      data-ai-hint="woman portrait"
                    />
                    <AvatarFallback>FK</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl xl:text-7xl font-headline text-white animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                Freyza Kusuma
              </h1>
              <div className="h-10 md:h-12 flex items-center justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                 <TypingAnimation
                    words={creativeRoles}
                    className="text-2xl text-cyan-400 font-semibold"
                 />
              </div>

              <p className="max-w-[700px] mx-auto text-gray-300 md:text-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
                I build modern, interactive, and responsive web applications.
                Let's turn your ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              <Button asChild size="lg" className="text-sm md:text-lg font-semibold py-6 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 shadow-lg bg-cyan-400 text-slate-900">
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm md:text-lg font-semibold py-6 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:text-cyan-300 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(73,214,219,0.4)] hover:shadow-[0_0_25px_rgba(73,214,219,0.6)]">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
