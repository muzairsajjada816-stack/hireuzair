import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    country: "USA",
    flag: "🇺🇸",
    initials: "JM",
    quote: "Uzair delivered beyond expectations. His attention to detail and communication throughout the project was outstanding. I'll definitely be hiring him again for future work.",
  },
  {
    name: "Sarah Rahman",
    country: "UK",
    flag: "🇬🇧",
    initials: "SR",
    quote: "Working with Uzair was a fantastic experience. He understood our requirements quickly and built a beautiful, functional application that our users love.",
  },
  {
    name: "Ahmed Al-Kurdi",
    country: "UAE",
    flag: "🇦🇪",
    initials: "AK",
    quote: "Exceptional developer with a great eye for design. Uzair took our rough concept and turned it into a polished product. Highly recommended for any web project.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Client Reviews
          </span>
          <h2 className="font-heading font-800 text-3xl lg:text-5xl tracking-tight">
            Words from people<br />I've worked with
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} card-glow bg-card border border-border/50 rounded-2xl p-7 transition-all duration-500 ${
                i === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="font-heading font-700 text-xs text-primary">{t.initials}</span>
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="font-body text-xs text-muted-foreground">
                    {t.flag} {t.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
