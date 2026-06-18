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
    <section id="about" className="py-20 bg-gruvbox-bg1">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="tui-section-header">
          <h2 className="text-gruvbox-orange font-bold text-lg whitespace-nowrap">
            <span className="text-gruvbox-gray">01.</span> {t("nav.about")}
          </h2>
        </div>

        {/* About text — styled like a config file */}
        <div className="max-w-3xl mx-auto mb-14 tui-window p-6">
          <div className="tui-titlebar -m-6 mb-6 px-4">
            <span className="tui-titlebar-dot bg-gruvbox-red" />
            <span className="tui-titlebar-dot bg-gruvbox-yellow" />
            <span className="tui-titlebar-dot bg-gruvbox-green" />
            <span className="ml-2">~/.config/about.conf</span>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-gruvbox-gray">{t("about.sec1_title")}</p>
            <p className="text-gruvbox-fg leading-relaxed">
              {t("about.sec1_p1_1")}{" "}
              <span className="text-gruvbox-green font-semibold">{t("about.sec1_p1_2")}</span>{" "}
              {t("about.sec1_p1_3")}{" "}
              <span className="text-gruvbox-blue">{t("about.sec1_p1_4")}</span>{t("about.sec1_p1_5")}
            </p>

            <p className="text-gruvbox-gray">{t("about.sec2_title")}</p>
            <p className="text-gruvbox-fg leading-relaxed">
              {t("about.sec2_p1")}
            </p>

            <p className="text-gruvbox-gray">{t("about.sec3_title")}</p>
            <p className="text-gruvbox-fg leading-relaxed">
              {t("about.sec3_p1_1")}{" "}
              <a
                href="https://distrowiki.site"
                className="text-gruvbox-aqua font-semibold underline underline-offset-4 decoration-gruvbox-aqua/30 hover:decoration-gruvbox-aqua transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                DistroWiki
              </a>
              {t("about.sec3_p1_2")}
            </p>
          </div>
        </div>

        {/* Feature cards — TUI style */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`border ${feature.borderColor} bg-gruvbox-bg p-5 transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                  <h3 className={`text-sm font-bold ${feature.color}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gruvbox-fg4 text-xs leading-relaxed">
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
