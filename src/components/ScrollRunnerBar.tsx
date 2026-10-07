import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import ClawdWalker from "./ClawdWalker";

export const ScrollRunnerBar = () => {
  const { i18n } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [isDocked, setIsDocked] = useState(false);
  const [currentSection, setCurrentSection] = useState("HERO");

  const lastScrollY = useRef(0);
  const bubbleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Walking direction based on scroll delta
      if (currentY > lastScrollY.current + 2) {
        setDirection(1); // Walking right
      } else if (currentY < lastScrollY.current - 2) {
        setDirection(-1); // Walking left
      }
      lastScrollY.current = currentY;

      // Scroll progress
      if (totalScroll > 0) {
        const currentProgress = currentY / totalScroll;
        setScrollProgress(Math.min(1, Math.max(0, currentProgress)));
      }

      // Docked trigger when leaving Hero section
      setIsDocked(currentY > 110);

      const isPt = i18n.language && i18n.language.startsWith("pt");
      const sections = [
        { id: "contact", label: isPt ? "CONTATO" : "CONTACT" },
        { id: "certificates", label: isPt ? "CERTIFICADOS" : "CERTS" },
        { id: "skills", label: "SKILLS" },
        { id: "projects", label: isPt ? "PROJETOS" : "PROJECTS" },
        { id: "about", label: isPt ? "SOBRE" : "ABOUT" },
        { id: "hero", label: "HERO" },
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          setCurrentSection(sec.label);
          break;
        }
      }

      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleClawdClick = () => {
    const isPt = i18n.language && i18n.language.startsWith("pt");

    const ptQuotes = [
      "Bora buildar! 🚀",
      "Pique Claude Code!",
      "Zero bugs em prod!",
      "Bloco por bloco. 🧱",
      "Codando a todo vapor!",
      "Vem comigo descendo! ↓",
      "DistroWiki tá on!",
      "Café + TypeScript = ☕",
    ];

    const enQuotes = [
      "Ship it! 🚀",
      "Claude Code style!",
      "Zero bugs allowed.",
      "100% block by block.",
      "Building at full speed!",
      "Follow me down! ↓",
      "DistroWiki is alive!",
      "Coffee + TypeScript = ☕",
    ];

    const quotes = isPt ? ptQuotes : enQuotes;
    const pick = quotes[Math.floor(Math.random() * quotes.length)];
    setSpeechBubble(pick);

    if (bubbleTimeout.current) clearTimeout(bubbleTimeout.current);
    bubbleTimeout.current = setTimeout(() => {
      setSpeechBubble(null);
    }, 2400);
  };

  const segments = Array.from({ length: 24 });

  const handleSegmentClick = (index: number) => {
    const ratio = index / (segments.length - 1);
    const targetY = ratio * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const percentText = `${Math.round(scrollProgress * 100)}%`;

  return (
    <div
      className={`fixed z-40 select-none transition-all duration-300 ease-out left-1/2 -translate-x-1/2 ${
        isDocked
          ? "bottom-3 sm:bottom-4 w-[94%] sm:w-auto sm:min-w-[460px] max-w-xl bg-gruvbox-bg/95 backdrop-blur-md border border-gruvbox-orange/50 shadow-[0_8px_32px_rgba(0,0,0,0.85)] px-3 py-1.5 sm:px-4 sm:py-2"
          : "bottom-10 sm:bottom-12 md:bottom-14 w-[92%] max-w-xl bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-3 w-full">
        {/* Section Badge (visible when docked) */}
        {isDocked && (
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 border border-gruvbox-bg3 bg-gruvbox-bg1/80 text-[10px] font-pixel text-gruvbox-orange shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-gruvbox-green animate-pulse" />
            <span>{currentSection}</span>
          </div>
        )}

        {/* Runner Track + Clawd */}
        <div className="relative flex-1 flex items-center">
          {/* Clawd Animated Walker + Speech Bubble - perfectly clamped within track bounds */}
          <div
            className="absolute transition-all duration-150 ease-out z-20 flex flex-col items-center pointer-events-none"
            style={{
              width: `${isDocked ? 38 : 42}px`,
              left: `calc(${scrollProgress} * (100% - ${isDocked ? 38 : 42}px))`,
              bottom: isDocked ? "15px" : "17px",
            }}
          >
            {/* Speech Bubble: Centered flex flow directly above mascot */}
            {speechBubble && (
              <div className="flex flex-col items-center mb-1 animate-fade-in select-none">
                <div className="whitespace-nowrap bg-gruvbox-bg2 border border-gruvbox-orange text-gruvbox-fg font-pixel text-[9px] px-2.5 py-0.5 rounded shadow-lg">
                  {speechBubble}
                </div>
                <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gruvbox-orange -mt-[1px]" />
              </div>
            )}

            {/* Mascot Container */}
            <div className="flex items-center justify-center pointer-events-auto">
              <ClawdWalker
                size={isDocked ? 38 : 42}
                isWalking={isScrolling}
                direction={direction}
                onClick={handleClawdClick}
              />
            </div>
          </div>

          {/* Segmented Track */}
          <div
            className={`flex w-full gap-0.5 sm:gap-1 p-1 border transition-colors ${
              isDocked
                ? "border-gruvbox-bg3/80 bg-gruvbox-bg1/80"
                : "border-gruvbox-bg3/60 bg-gruvbox-bg1/40"
            }`}
          >
            {segments.map((_, i) => {
              const segmentRatio = i / (segments.length - 1);
              const isPassed = segmentRatio <= scrollProgress;

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSegmentClick(i)}
                  className={`h-1.5 sm:h-2 flex-1 transition-all duration-150 cursor-pointer ${
                    isPassed
                      ? "bg-[#db7858] hover:bg-gruvbox-orange"
                      : "bg-gruvbox-bg2 hover:bg-gruvbox-bg3"
                  }`}
                  aria-label={`Scroll to ${Math.round(segmentRatio * 100)}%`}
                />
              );
            })}
          </div>
        </div>

        {/* Percent indicator (visible when docked) */}
        {isDocked && (
          <span className="font-mono text-[10px] text-gruvbox-fg4 w-8 text-right shrink-0">
            {percentText}
          </span>
        )}
      </div>
    </div>
  );
};

export default ScrollRunnerBar;
