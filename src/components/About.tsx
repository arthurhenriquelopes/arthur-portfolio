import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

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
                  <span className="text-gruvbox-green font-bold">LVL 25</span>
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
                    <span className="text-gruvbox-fg">INSI</span>
                    <span className="text-gruvbox-orange font-semibold">JR FULL-STACK (ATUAL)</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">FLYRANK AI</span>
                    <span className="text-gruvbox-purple">AI BACKEND (ESTÁGIO)</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">MIDAS SISTEMAS</span>
                    <span className="text-gruvbox-yellow">JR FULL-STACK DEV</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">DISTROWIKI</span>
                    <span className="text-gruvbox-aqua">OPEN SOURCE LINUX</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">SIGAMA VISION</span>
                    <span className="text-gruvbox-green">AGED / FAPEMA</span>
                  </div>
                  <div className="flex justify-between border-b border-gruvbox-bg3/60 py-1">
                    <span className="text-gruvbox-fg">LUMMA.IA</span>
                    <span className="text-gruvbox-blue">LLM CHATBOT</span>
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
            <span className="text-gruvbox-orange font-semibold">{t("about.sec1_p1_insi")}</span>
            {t("about.sec1_p1_fly")}{" "}
            <span className="text-gruvbox-purple font-semibold">{t("about.sec1_p1_flyrank")}</span>{" "}
            {t("about.sec1_p1_fly_role")}{" "}
            <span className="text-gruvbox-yellow font-semibold">{t("about.sec1_p1_midas")}</span>{" "}
            {t("about.sec1_p1_midas_role")}
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

        {/* Career Experience Timeline - directly on section background without wrapping box */}
        <div className="w-full mb-6 pt-2">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-gruvbox-green font-mono text-xs">❯</span>
            <span className="font-mono text-xs text-gruvbox-fg4 uppercase tracking-wider">
              {t("about.experience_title", "cat ~/.config/experience.log")}
            </span>
            <div className="flex-1 h-[1px] bg-gruvbox-bg3/60" />
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8">
            {/* 1. MIDAS (Grupo MDS) - Mais antigo (topo) */}
            <div className="relative pb-2">
              {/* Vertical connector line down to next node */}
              <div className="absolute -left-[18px] top-[18px] -bottom-8 w-[2px] bg-gruvbox-bg3/70" />
              {/* Node dot (Yellow) */}
              <div className="absolute -left-[23px] top-[4px] w-3 h-3 rounded-full bg-[#fabd2f] border-2 border-gruvbox-bg1" />

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-pixel text-sm text-[#fabd2f]">
                    {t("about.exp_midas_company")}
                  </h3>
                  <span className="text-xs font-mono text-gruvbox-fg">
                    · {t("about.exp_midas_role")}
                  </span>
                </div>
                <div className="font-mono text-xs mt-1 mb-3 space-y-0.5">
                  <p className="text-gruvbox-gray text-[11px]">
                    {t("about.exp_midas_period")}
                  </p>
                  <p className="text-gruvbox-fg text-xs font-semibold">
                    {t("about.exp_midas_type")}
                  </p>
                </div>
                <ul className="text-xs font-mono text-gruvbox-fg4 space-y-1.5 list-disc list-inside">
                  <li>{t("about.exp_midas_b1")}</li>
                  <li>{t("about.exp_midas_b2")}</li>
                  <li>{t("about.exp_midas_b3")}</li>
                  <li>{t("about.exp_midas_b4")}</li>
                  <li>{t("about.exp_midas_b5")}</li>
                </ul>
              </div>
            </div>

            {/* 2. FlyRank AI - Intermediário */}
            <div className="relative pb-2">
              {/* Vertical connector line down to Insi */}
              <div className="absolute -left-[18px] top-[18px] -bottom-8 w-[2px] bg-gruvbox-bg3/70" />
              {/* Node dot (Green) */}
              <div className="absolute -left-[23px] top-[4px] w-3 h-3 rounded-full bg-[#b8bb26] border-2 border-gruvbox-bg1" />

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-pixel text-sm text-[#b8bb26]">
                    {t("about.exp_fly_company")}
                  </h3>
                  <span className="text-xs font-mono text-gruvbox-fg">
                    · {t("about.exp_fly_role")}
                  </span>
                </div>
                <div className="font-mono text-xs mt-1 mb-3 space-y-0.5">
                  <p className="text-gruvbox-gray text-[11px]">
                    {t("about.exp_fly_period")}
                  </p>
                  <p className="text-gruvbox-fg text-xs font-semibold">
                    {t("about.exp_fly_type")}
                  </p>
                </div>
                <ul className="text-xs font-mono text-gruvbox-fg4 space-y-1.5 list-disc list-inside">
                  <li>{t("about.exp_fly_b1")}</li>
                  <li>{t("about.exp_fly_b2")}</li>
                  <li>{t("about.exp_fly_b3")}</li>
                  <li>{t("about.exp_fly_b4")}</li>
                </ul>
              </div>
            </div>

            {/* 3. Insi - Mais recente / Atual (embaixo) */}
            <div className="relative">
              {/* Node dot (Purple #6a1b9a) - NENHUMA linha vertical passa por tras nem continua abaixo */}
              <div className="absolute -left-[23px] top-[4px] w-3 h-3 rounded-full bg-[#6a1b9a] border-2 border-gruvbox-bg1 shadow-[0_0_8px_#6a1b9a]" />
              <span className="absolute -left-[27px] top-0 w-5 h-5 rounded-full border border-[#6a1b9a] animate-ping opacity-30 pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-pixel text-sm text-[#6a1b9a]">
                    {t("about.exp_insi_company")}
                  </h3>
                  <span className="text-xs font-mono text-gruvbox-fg">
                    · {t("about.exp_insi_role")}
                  </span>
                  <span className="font-mono text-[10px] text-gruvbox-green border border-gruvbox-green/40 px-1.5 py-0.2">
                    ● ATUAL
                  </span>
                </div>
                <div className="font-mono text-xs mt-1 mb-3 space-y-0.5">
                  <p className="text-gruvbox-gray text-[11px]">
                    {t("about.exp_insi_period")}
                  </p>
                  <p className="text-gruvbox-fg text-xs font-semibold">
                    {t("about.exp_insi_type")}
                  </p>
                </div>
                <p className="text-xs font-mono text-gruvbox-fg4 leading-relaxed max-w-3xl">
                  {t("about.exp_insi_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
