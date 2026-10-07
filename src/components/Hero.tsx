import { Download, ArrowDown, ExternalLink, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import InteractiveDotGrid from "./InteractiveDotGrid";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const cvPdf =
    i18n.language && i18n.language.startsWith("pt")
      ? "/Arthur_Henrique_Lopes_Feitosa_Curriculo.pdf"
      : "/Arthur_Henrique_Lopes_Feitosa_Resume_Java_Developer.pdf";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socials = [
    { name: "GITHUB", url: "https://github.com/arthurhenriquelopes" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/arthur-henrique-lopes/" },
    { name: "EMAIL", url: "mailto:arthurhenriquelopesf@gmail.com" },
  ];

  return (
    <section
      id="hero"
      className="relative h-[100dvh] max-h-[100dvh] min-h-[560px] flex flex-col justify-between items-center bg-gruvbox-bg overflow-hidden pt-16 pb-3 px-4 select-none"
    >
      {/* Interactive Dots Background with Mouse Spotlight & Bottom Fade Mask */}
      <InteractiveDotGrid
        dotSize={1.8}
        gap={28}
        glowRadius={150}
        color="rgba(168, 153, 132, 0.16)"
        activeColor="#fe8019"
      />

      {/* Main Content Area - perfectly centered vertically */}
      <div className="container mx-auto max-w-4xl z-10 flex flex-col items-center text-center my-auto px-2">
        {/* Status Pill / CLI Badge */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 sm:mb-4 border border-gruvbox-bg3/80 bg-gruvbox-bg1/70 backdrop-blur-sm text-[10px] sm:text-xs font-mono text-gruvbox-fg4 select-none">
          <span className="w-2 h-2 rounded-full bg-gruvbox-green animate-pulse" />
          <span className="text-gruvbox-green font-bold">STATUS:</span>
          <span>JR FULL-STACK DEV @ INSI</span>
        </div>

        {/* Big Pixel Headline */}
        <h1 className="font-pixel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gruvbox-fg mb-2 sm:mb-3 md:mb-4 select-none uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Arthur <span className="text-gruvbox-orange">Henrique</span>
        </h1>

        {/* Tagline / Subtitle */}
        <div className="font-mono text-[11px] sm:text-xs md:text-sm text-gruvbox-fg4 max-w-xl mb-3 sm:mb-4 md:mb-6 space-y-1 leading-relaxed uppercase tracking-wider">
          <p>
            {t("hero.tagline_line1", "FULL-STACK ENGINEER. FOUNDER OF")}{" "}
            <a
              href="https://distrowiki.site"
              target="_blank"
              rel="noreferrer"
              className="text-gruvbox-aqua font-bold hover:underline underline-offset-4 decoration-gruvbox-aqua/60 transition-all inline-flex items-center gap-1"
            >
              DISTROWIKI
              <ExternalLink className="w-3 h-3 inline" />
            </a>
            .
          </p>
          <p className="text-gruvbox-gray">
            {t(
              "hero.tagline_line2",
              "BUILDING FLUID WEB EXPERIENCES & GENERATIVE AI APPS."
            )}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-5">
          <button
            onClick={() => scrollToSection("projects")}
            className="font-pixel text-[11px] sm:text-xs tracking-wider px-4 sm:px-6 py-2 sm:py-2.5 bg-gruvbox-fg text-gruvbox-bg hover:bg-white hover:text-black font-semibold transition-all duration-200 uppercase shadow-md flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 border border-gruvbox-fg cursor-pointer"
          >
            {t("hero.see_projects", "SEE PROJECTS ↓")}
          </button>

          <a
            href={cvPdf}
            download={cvPdf.split("/").pop()}
            className="font-mono text-[11px] sm:text-xs px-3 sm:px-4 py-2 sm:py-2.5 bg-gruvbox-bg1/80 border border-gruvbox-bg3 text-gruvbox-blue hover:border-gruvbox-blue hover:text-gruvbox-fg transition-all flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV.PDF</span>
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="font-mono text-[11px] sm:text-xs px-3 sm:px-4 py-2 sm:py-2.5 bg-gruvbox-bg1/80 border border-gruvbox-bg3 text-gruvbox-yellow hover:border-gruvbox-yellow hover:text-gruvbox-fg transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-pixel text-gruvbox-fg4 tracking-widest mb-1 sm:mb-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gruvbox-orange transition-colors duration-200 py-0.5"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Hero bottom slot - reserves space for ScrollRunnerBar when in Hero mode */}
      <div className="w-full max-w-xl h-14 flex items-center justify-center pointer-events-none select-none z-10" />

      {/* Subtle Scroll Down Indicator */}
      <div className="z-10 pb-1">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gruvbox-gray hover:text-gruvbox-orange transition-colors flex flex-col items-center gap-0.5 group cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase group-hover:text-gruvbox-orange transition-colors">
            {t("hero.scroll", "SCROLL")}
          </span>
          <ArrowDown className="w-3 h-3 animate-bounce text-gruvbox-fg4 group-hover:text-gruvbox-orange" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
