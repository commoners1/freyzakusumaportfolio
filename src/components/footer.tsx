import { Code, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Freyza Kusuma. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" prefetch={false}>
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" prefetch={false}>
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                 <span className="sr-only">LinkedIn</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}
