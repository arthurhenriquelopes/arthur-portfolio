import { Code2, Lightbulb, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Code2,
      title: "dev.fullstack",
      color: "text-gruvbox-green",
      borderColor: "border-gruvbox-green/30 hover:border-gruvbox-green/60",
      description: t("about.feat1_desc"),
    },
    {
      icon: Lightbulb,
      title: "solve.creative",
      color: "text-gruvbox-yellow",
      borderColor: "border-gruvbox-yellow/30 hover:border-gruvbox-yellow/60",
      description: t("about.feat2_desc"),
    },
    {
      icon: Rocket,
      title: "ship.impact",
      color: "text-gruvbox-orange",
      borderColor: "border-gruvbox-orange/30 hover:border-gruvbox-orange/60",
      description: t("about.feat3_desc"),
    },
  ];

  return (
    <section id="about" className="pt-20 pb-32 bg-gruvbox-bg1 relative overflow-hidden">
      <div className="section-ambient-glow" />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section header in pixel font */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-pixel text-xl sm:text-2xl text-gruvbox-orange tracking-wider uppercase">
            <span className="text-gruvbox-gray mr-3">01.</span>
            {t("nav.about", "About")}
          </h2>
          <div className="flex-1 h-[1px] bg-gruvbox-bg3" />
        </div>

        {/* RPG Player Profile Card */}
        <div className="w-full border border-gruvbox-bg3 bg-gruvbox-bg p-6 sm:p-8 mb-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Avatar with retro frame */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 mx-auto md:mx-0 relative border-2 border-gruvbox-bg3 p-1 bg-gruvbox-bg2">
              <img
                src="https://avatars.githubusercontent.com/u/166043613?s=400&u=f0772edd2bcb21ca3812ff7d6a8d287c96da0022&v=4"
                alt="Arthur Henrique"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
              />
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 font-pixel text-[9px] bg-gruvbox-orange text-gruvbox-bg px-2 py-0.5 tracking-wider uppercase font-bold">
                BUILDER
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 w-full space-y-4">
              {/* Header row */}
              <div className="flex items-center justify-between border-b border-gruvbox-bg3 pb-3">
                <span className="font-pixel text-xs text-gruvbox-fg4 tracking-widest uppercase">
                  PLAYER 1
                </span>
                <div className="flex items-center gap-2 font-pixel text-xs text-gruvbox-fg">
                  <span>🇧🇷 🇺🇸</span>
                  <span className="text-gruvbox-green font-bold">LVL 21</span>
                </div>
              </div>

              {/* Name & Class */}
              <div>
                <h3 className="font-pixel text-2xl sm:text-3xl text-gruvbox-fg font-bold tracking-wide uppercase">
                  Arthur Henrique
                </h3>
                <p className="font-mono text-xs text-gruvbox-orange uppercase tracking-wider mt-1">
                  Class: Full-Stack Builder & Architect
                </p>
              </div>

              {/* Inventory stats */}
              <div className="pt-2">
                <p className="font-pixel text-[11px] text-gruvbox-fg4 tracking-wider uppercase mb-2">
                  Inventory
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">DISTROWIKI</span>
                    <span className="text-gruvbox-aqua">OPEN SOURCE LINUX</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">SIGAMA VISION</span>
                    <span className="text-gruvbox-green">AGED / FAPEMA</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">MIDAS SISTEMAS</span>
                    <span className="text-gruvbox-yellow">ENTERPRISE EXP</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">LUMMA.IA</span>
                    <span className="text-gruvbox-purple">LLM CHATBOT</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">SAÚDE++</span>
                    <span className="text-gruvbox-blue">CLINIC VUE APP</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">THIS SITE</span>
                    <span className="text-gruvbox-orange">REACT + TS + TAILWIND</span>
                  </div>
                </div>
              </div>

              {/* Special Move */}
              <div className="pt-2">
                <p className="font-pixel text-[11px] text-gruvbox-fg4 tracking-wider uppercase mb-1">
                  Special Move
                </p>
                <p className="font-mono text-xs text-gruvbox-yellow italic">
                  &quot;Resolver desafios complexos com engenharia sólida, interfaces fluidas e IA aplicada.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story details - Exactly same width as Player card above */}
        <div className="w-full mb-10 border border-gruvbox-bg3 bg-gruvbox-bg p-6 sm:p-8 text-sm leading-relaxed space-y-4 shadow-sm">
          <div className="flex items-center gap-2 border-b border-gruvbox-bg3 pb-3 text-xs text-gruvbox-fg4 font-mono">
            <span className="text-gruvbox-green">❯</span>
            <span>cat ~/.config/bio.md</span>
          </div>

          <p className="text-gruvbox-fg">
            {t("about.sec1_p1_1")}{" "}
            <span className="text-gruvbox-green font-semibold">{t("about.sec1_p1_2")}</span>{" "}
            {t("about.sec1_p1_3")}{" "}
            <span className="text-gruvbox-blue">{t("about.sec1_p1_4")}</span>{t("about.sec1_p1_5")}
          </p>

          <p className="text-gruvbox-fg4">
            {t("about.sec2_p1")}
          </p>

          <p className="text-gruvbox-fg">
            {t("about.sec3_p1_1")}{" "}
            <a
              href="https://distrowiki.site"
              className="text-gruvbox-aqua font-semibold underline underline-offset-4 decoration-gruvbox-aqua/40 hover:decoration-gruvbox-aqua transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              DistroWiki
            </a>
            {t("about.sec3_p1_2")}
          </p>
        </div>

        {/* Feature Cards - as requested: wider on sides (max-w-5xl) as it was originally */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`border ${feature.borderColor} bg-gruvbox-bg p-5 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                  <h3 className={`font-pixel text-xs ${feature.color}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gruvbox-fg4 text-xs leading-relaxed font-mono">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
