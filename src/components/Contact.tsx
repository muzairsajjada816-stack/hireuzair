import { Mail, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal">
          <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-heading font-800 text-4xl lg:text-6xl tracking-tight mb-6">
            Let's build something<br />great together
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:muzairsajjada816@gmail.com"
              className="flex items-center gap-4 group card-glow bg-card border border-border/50 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <div className="font-body text-xs text-muted-foreground mb-1">Email</div>
                <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                  muzairsajjada816@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~0192130efb59eaa00e"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group card-glow bg-card border border-border/50 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <ExternalLink size={20} className="text-primary" />
              </div>
              <div>
                <div className="font-body text-xs text-muted-foreground mb-1">Upwork</div>
                <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                  M.Uzair Sajjad
                </div>
              </div>
            </a>

            <a
              href="https://contra.com/muhammad_uzair_j8xnvdlz/work"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group card-glow bg-card border border-border/50 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <ExternalLink size={20} className="text-primary" />
              </div>
              <div>
                <div className="font-body text-xs text-muted-foreground mb-1">Contra</div>
                <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                  Muhammad Uzair
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 card-glow bg-card border border-border/50 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <div className="font-body text-xs text-muted-foreground mb-1">Location</div>
                <div className="font-body text-sm text-foreground">Pakistan — Working Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
