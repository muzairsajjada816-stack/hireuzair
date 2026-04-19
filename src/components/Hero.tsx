export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="orb-2 absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="orb-3 absolute top-[50%] right-[30%] w-[200px] h-[200px] rounded-full bg-primary/4 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="text-sm font-body text-muted-foreground">Available for work</span>
          </div>

          <h1 className="reveal reveal-delay-1 font-heading font-800 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="typing">AI Agent Developer</span>
            <br />
            <span className="text-primary">&</span> Automation Engineer
          </h1>

          <p className="reveal reveal-delay-2 font-body text-muted-foreground text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
            Based in Pakistan, building intelligent AI agents and automation systems for clients worldwide. I turn complex problems into smart automated solutions.
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => scrollTo("#projects")}
              className="btn-glow glow-pulse px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-glow px-7 py-3.5 rounded-full border border-border text-foreground font-body font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          <div className="reveal reveal-delay-4 flex gap-10 lg:gap-14">
            {[
              ["30+", "Projects"],
              ["25+", "Clients"],
              ["3+", "Years"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-heading font-700 text-2xl lg:text-3xl text-foreground">{num}</div>
                <div className="font-body text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Code card */}
        <div className="reveal reveal-delay-2 hidden lg:block">
          <div className="float relative">
            <div className="card-glow bg-card border border-border/50 rounded-2xl p-6 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <pre className="text-muted-foreground leading-relaxed">
<span className="text-primary/70">const</span> <span className="text-foreground">developer</span> = {"{"}{"\n"}
{"  "}name: <span className="text-emerald-400">"Muhammad Uzair"</span>,{"\n"}
{"  "}role: <span className="text-emerald-400">"AI Agent Dev"</span>,{"\n"}
{"  "}location: <span className="text-emerald-400">"Pakistan 🇵🇰"</span>,{"\n"}
{"  "}available: <span className="text-primary">true</span>,{"\n"}
{"  "}skills: [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"CrewAI"</span>, <span className="text-emerald-400">"LangChain"</span>],{"\n"}
{"  "}passion: <span className="text-emerald-400">"Building things"</span>{"\n"}
{"}"};
              </pre>
            </div>
            {/* Skill badges */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {["Python", "CrewAI", "LangChain", "OpenAI", "n8n", "FastAPI"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs font-body font-medium rounded-full border border-border/50 bg-secondary/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
