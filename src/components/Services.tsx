import { Bot, Network, Workflow, Brain, Globe, Gauge } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Agent Development", desc: "Custom AI agents built with CrewAI and LangChain that reason, plan, and execute complex tasks autonomously." },
  { icon: Network, title: "Multi-Agent Systems", desc: "Orchestrated teams of specialized AI agents that collaborate to solve problems no single agent can handle." },
  { icon: Workflow, title: "Workflow Automation", desc: "End-to-end automation using n8n, Make, and Zapier — eliminating repetitive tasks and saving hours daily." },
  { icon: Brain, title: "LLM Integration", desc: "Seamless integration of OpenAI, Gemini, and open-source LLMs into your existing products and workflows." },
  { icon: Globe, title: "Web Scraping & Data Extraction", desc: "Intelligent scrapers and data pipelines that collect, clean, and structure information at scale." },
  { icon: Gauge, title: "Performance & SEO", desc: "Core Web Vitals optimization, technical SEO, and blazing-fast load times." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal max-w-2xl mb-16">
          <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="font-heading font-800 text-3xl lg:text-5xl tracking-tight">
            Services that drive<br />
            <span className="text-muted-foreground">real results</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i < 6 ? i + 1 : 5} group relative bg-card border border-border/50 rounded-2xl p-7 hover:-translate-y-1 transition-all duration-500 overflow-hidden`}
            >
              {/* Top gradient line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-700 text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
