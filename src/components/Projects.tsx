import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    emoji: "📖",
    title: "Simple Story Agent",
    subtitle: "Creative AI Agent",
    desc: "An AI agent that generates interactive, branching stories using LLM reasoning — users guide the narrative while the agent crafts rich, coherent plotlines.",
    tech: ["CrewAI", "LangChain", "OpenAI"],
    github: "https://github.com/muzairsajjada816-stack/simple-ai_agent",
  },
  {
    emoji: "🎮",
    title: "Game Designer AI",
    subtitle: "Multi-Agent System",
    desc: "A multi-agent system where specialized agents collaborate to design game mechanics, write lore, and generate balanced rule sets from a single prompt.",
    tech: ["CrewAI", "Python", "Gemini API"],
    github: "https://github.com/muzairsajjada816-stack/game-designer-agent",
  },
  {
    emoji: "📚",
    title: "Homework Helper AI",
    subtitle: "Educational AI Assistant",
    desc: "An intelligent tutoring agent that breaks down complex problems, provides step-by-step explanations, and adapts its teaching style to the student.",
    tech: ["LangChain", "Streamlit", "OpenAI"],
  },
  {
    emoji: "💼",
    title: "Sales Agent",
    subtitle: "Autonomous Sales AI",
    desc: "An AI-powered sales agent that qualifies leads, crafts personalized outreach, and handles follow-ups — automating the entire top-of-funnel pipeline.",
    tech: ["CrewAI", "FastAPI", "n8n"],
  },
  {
    emoji: "🕷️",
    title: "Web Scrape Agent",
    subtitle: "Data Extraction AI",
    desc: "An intelligent scraping agent that navigates complex websites, extracts structured data, and handles pagination and anti-bot measures autonomously.",
    tech: ["Python", "LangChain", "FastAPI"],
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
                {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  GitHub <Github size={14} />
                </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
