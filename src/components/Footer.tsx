export default function Footer() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-body text-sm text-muted-foreground">
            Designed & built by Muhammad Uzair ·{" "}
            <a href="mailto:muzairsajjada816@gmail.com" className="hover:text-primary transition-colors duration-300">
              muzairsajjada816@gmail.com
            </a>{" "}
            ·{" "}
            <a href="https://builtbyuzair.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
              builtbyuzair.com
            </a>
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Available on{" "}
            <a
              href="https://www.upwork.com/freelancers/~0192130efb59eaa00e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Upwork
            </a>{" "}
            &{" "}
            <a
              href="https://contra.com/muhammad_uzair_j8xnvdlz/work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
