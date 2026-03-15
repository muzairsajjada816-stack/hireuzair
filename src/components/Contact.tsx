import { useState, FormEvent } from "react";
import { Mail, MapPin, ExternalLink, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20">
          {/* Left */}
          <div className="reveal">
            <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-heading font-800 text-3xl lg:text-4xl tracking-tight mb-6">
              Let's build something<br />great together
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10">
              Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:muzairsajjada816@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-body text-xs text-muted-foreground">Email</div>
                  <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    muzairsajjada816@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.upwork.com/freelancers/~0192130efb59eaa00e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <ExternalLink size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-body text-xs text-muted-foreground">Upwork</div>
                  <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    M.Uzair Sajjad
                  </div>
                </div>
              </a>

              <a
                href="https://contra.com/muhammad_uzair_j8xnvdlz/work"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <ExternalLink size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-body text-xs text-muted-foreground">Contra</div>
                  <div className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    Muhammad Uzair
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-body text-xs text-muted-foreground">Location</div>
                  <div className="font-body text-sm text-foreground">Pakistan — Working Worldwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div className="bg-card border border-border/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-heading font-700 text-2xl mb-2 text-foreground">Thanks!</h3>
                <p className="font-body text-muted-foreground">
                  I'll get back to you within 24 hours 🚀
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-2xl p-7 lg:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:scale-105 hover:shadow-[0_0_30px_hsl(248_93%_70%/0.3)] transition-all duration-300 inline-flex items-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
