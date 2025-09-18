import { ContactForm } from "@/components/contact-form";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background/80 backdrop-blur-md">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-16 lg:text-left">
        <div className="space-y-6 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:mx-0">
              Have a project in mind or just want to say hello? I'd love to hear
              from you.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Mail className="h-7 w-7 text-primary" />
              <p className="text-lg">freyza.kusuma@email.com</p>
            </div>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Phone className="h-7 w-7 text-primary" />
              <p className="text-lg">+1 (234) 567-890</p>
            </div>
             <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
                <Link href="#" prefetch={false}>
                    <Github className="h-9 w-9 text-foreground hover:text-primary transition-all duration-300 hover:scale-110" />
                </Link>
                <Link href="#" prefetch={false}>
                    <Linkedin className="h-9 w-9 text-foreground hover:text-primary transition-all duration-300 hover:scale-110" />
                </Link>
             </div>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-12 duration-1000 group" style={{perspective: '1000px'}}>
            <ContactForm />
        </div>
      </div>
    </section>
  );
}
