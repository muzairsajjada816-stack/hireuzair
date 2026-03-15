import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    emoji: "🛒",
    title: "ShopEase",
    subtitle: "E-Commerce Platform",
    desc: "A full-featured online store with product management, cart system, Stripe payments, and an admin dashboard for order tracking.",
    tech: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    emoji: "📊",
    title: "Analytics Dashboard",
    subtitle: "SaaS Application",
    desc: "Real-time data visualization platform with customizable widgets, user roles, and automated PDF report generation.",
    tech: ["React", "Node.js", "Chart.js"],
  },
  {
    emoji: "🤖",
    title: "AI Resume Builder",
    subtitle: "AI-Powered Tool",
    desc: "Smart resume generator that uses AI to craft tailored resumes, with real-time preview and multi-format export.",
    tech: ["OpenAI", "Next.js", "Tailwind"],
  },
  {
    emoji: "🏥",
    title: "MedBook",
    subtitle: "Doctor Appointment App",
    desc: "Healthcare scheduling platform with doctor profiles, appointment booking, SMS reminders, and video consultation support.",
    tech: ["React", "Firebase", "Twilio"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="font-heading font-800 text-3xl lg:text-5xl tracking-tight">
              Projects I'm<br />proud of
            </h2>
          </div>
          <p className="font-body text-muted-foreground max-w-md lg:text-right">
            Each project is a unique piece of development, designed and built from the ground up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${i + 1} group bg-card border border-border/50 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_hsl(248_93%_70%/0.15)] transition-all duration-500`}
            >
              <div className="text-3xl mb-4">{p.emoji}</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-body font-medium rounded-full bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-heading font-700 text-xl mb-1 text-foreground">{p.title}</h3>
              <p className="font-body text-sm text-primary/70 mb-3">{p.subtitle}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  GitHub <Github size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
