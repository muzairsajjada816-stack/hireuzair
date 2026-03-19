import { ExternalLink } from "lucide-react";

const skills = [
  "React", "Next.js", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "TypeScript", "Tailwind",
  "Figma", "REST APIs", "GraphQL", "Docker",
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 lg:gap-20 items-start">
          {/* Left — Avatar area */}
          <div className="reveal">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(248_93%_70%/0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading font-800 text-8xl text-primary/20">MU</span>
                </div>
              </div>
              {/* Name overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border/50 rounded-xl p-4 shadow-xl">
                <div className="font-heading font-700 text-lg text-foreground">Muhammad Uzair</div>
                <div className="font-body text-sm text-muted-foreground">AI Agent Developer & Automation Engineer</div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <span className="reveal font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="reveal reveal-delay-1 font-heading font-800 text-3xl lg:text-4xl tracking-tight mb-6">
              Crafting digital experiences<br />that make an impact
            </h2>
            <p className="reveal reveal-delay-2 font-body text-muted-foreground text-lg leading-relaxed mb-4">
              I'm Muhammad Uzair — an AI agent developer and automation engineer based in Pakistan, 
              building high-quality AI-powered applications and automation solutions for clients worldwide. I specialize in turning 
              ideas into polished, performant products using modern technologies.
            </p>
            <p className="reveal reveal-delay-3 font-body text-muted-foreground leading-relaxed mb-8">
              From concept to deployment, I handle the entire stack — frontend interfaces that feel 
              alive, robust backends that scale, and designs that users actually enjoy. I care deeply 
              about clean code, great UX, and delivering real results.
            </p>

            {/* Profile buttons */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 mb-10">
              <a
                href="https://www.upwork.com/freelancers/~0192130efb59eaa00e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-body font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 group"
              >
                View Upwork Profile
                <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://contra.com/muhammad_uzair_j8xnvdlz/work"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-body font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 group"
              >
                View Contra Profile
                <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Skills grid */}
            <div className="reveal reveal-delay-4">
              <h3 className="font-heading font-600 text-sm tracking-widest uppercase text-primary mb-4">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                    <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
