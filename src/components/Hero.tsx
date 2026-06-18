import { Download, ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const BOOT_SEQUENCE = [
  "GRUB loading...",
  "Initializing kernel 6.8.0-arthurix...",
  "Loading modules: portfolio.ko, skills.ko, projects.ko",
  "Mounting /dev/creativity on /home/arthur",
  "Starting arthurd.service...",
  "[  OK  ] Reached target graphical.target",
];

const Hero = () => {
  const { t, i18n } = useTranslation();
  const cvPdf = i18n.language && i18n.language.startsWith("pt") ? "/Arthur_Henrique_Lopes_Feitosa.pdf" : "/Arthur_Henrique_Lopes_Feitosa_EN.pdf";
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [showMain, setShowMain] = useState(false);
  const idxRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (idxRef.current < BOOT_SEQUENCE.length) {
        const line = BOOT_SEQUENCE[idxRef.current];
        setBootLines((prev) => [...prev, line]);
        idxRef.current++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowMain(true), 400);
      }
    }, 250);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gruvbox-bg overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,153,132,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,153,132,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 z-10 max-w-4xl">
        {/* Boot sequence */}
        <div className={`transition-all duration-500 ${showMain ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 mb-8'}`}>
          <div className="tui-window p-4">
            <div className="tui-titlebar -m-4 mb-4">
              <span className="tui-titlebar-dot bg-gruvbox-red" />
              <span className="tui-titlebar-dot bg-gruvbox-yellow" />
              <span className="tui-titlebar-dot bg-gruvbox-green" />
              <span className="ml-2">boot</span>
            </div>
            {bootLines.map((line, i) => (
              <div key={i} className="text-xs animate-fade-in-fast" style={{ animationDelay: `${i * 50}ms` }}>
                {line.startsWith("[") ? (
                  <>
                    <span className="text-gruvbox-green">{line.substring(0, 8)}</span>
                    <span className="text-gruvbox-fg">{line.substring(8)}</span>
                  </>
                ) : (
                  <span className="text-gruvbox-fg4">{line}</span>
                )}
              </div>
            ))}
            {!showMain && bootLines.length > 0 && <span className="tui-cursor" />}
          </div>
        </div>

        {/* Main content */}
        <div className={`transition-all duration-700 ${showMain ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Avatar with terminal frame */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-[2px] bg-gradient-to-br from-gruvbox-orange via-gruvbox-yellow to-gruvbox-green opacity-60" />
              <img
                src="https://avatars.githubusercontent.com/u/166043613?s=400&u=f0772edd2bcb21ca3812ff7d6a8d287c96da0022&v=4"
                alt="Arthur Henrique"
                className="relative w-28 h-28 md:w-36 md:h-36 object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Terminal-style intro */}
          <div className="tui-window p-6 md:p-8">
            <div className="tui-titlebar -m-6 md:-m-8 mb-6 md:mb-8 px-4">
              <span className="tui-titlebar-dot bg-gruvbox-red" />
              <span className="tui-titlebar-dot bg-gruvbox-yellow" />
              <span className="tui-titlebar-dot bg-gruvbox-green" />
              <span className="ml-2">~/arthur-henrique</span>
            </div>

            {/* whoami */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm mb-1">
                <span className="text-gruvbox-green font-bold">❯</span>
                <span className="text-gruvbox-blue">whoami</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gruvbox-fg ml-4 mb-2">
                Arthur <span className="text-gruvbox-orange">Henrique</span>
              </h1>
              <p className="text-gruvbox-fg4 ml-4 text-sm">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Typing effect */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm mb-1">
                <span className="text-gruvbox-green font-bold">❯</span>
                <span className="text-gruvbox-blue">cat</span>
                <span className="text-gruvbox-fg4">motto.txt</span>
              </div>
              <div className="ml-4 text-gruvbox-yellow text-base md:text-lg h-[2em] flex items-center">
                <span className="text-gruvbox-gray">&quot;</span>
                <ReactTyped
                  strings={[
                    t("hero.motto1"),
                    t("hero.motto2"),
                    t("hero.motto3"),
                  ]}
                  typeSpeed={40}
                  backSpeed={25}
                  loop
                  className="text-gruvbox-yellow"
                />
                <span className="text-gruvbox-gray">&quot;</span>
              </div>
            </div>

            {/* Action buttons as commands */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gruvbox-green font-bold">❯</span>
                <span className="text-gruvbox-gray">{t("hero.commands_label")}</span>
              </div>
              <div className="ml-4 flex flex-wrap gap-2">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-4 py-2 bg-gruvbox-bg2 border border-gruvbox-bg3 text-gruvbox-green hover:border-gruvbox-green hover:bg-gruvbox-bg2/80 transition-all text-xs font-medium"
                >
                  {t("hero.cmd_projects")}
                </button>
                <a
                  href={cvPdf}
                  download={cvPdf.split('/').pop()}
                  className="px-4 py-2 bg-gruvbox-bg2 border border-gruvbox-bg3 text-gruvbox-blue hover:border-gruvbox-blue hover:bg-gruvbox-bg2/80 transition-all text-xs font-medium flex items-center gap-1.5"
                >
                  <Download className="w-3 h-3" />
                  {t("hero.cmd_cv")}
                </a>
                <button
                  onClick={() => scrollToSection("certificates")}
                  className="px-4 py-2 bg-gruvbox-bg2 border border-gruvbox-bg3 text-gruvbox-yellow hover:border-gruvbox-yellow hover:bg-gruvbox-bg2/80 transition-all text-xs font-medium"
                >
                  {t("hero.cmd_certs")}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 bg-gruvbox-bg2 border border-gruvbox-bg3 text-gruvbox-orange hover:border-gruvbox-orange hover:bg-gruvbox-bg2/80 transition-all text-xs font-medium"
                >
                  {t("hero.cmd_mail")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gruvbox-fg4 hover:text-gruvbox-orange transition-colors flex flex-col items-center gap-1 group"
        >
          <span className="text-[10px] text-gruvbox-gray group-hover:text-gruvbox-orange transition-colors">
            {t("hero.scroll")}
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
