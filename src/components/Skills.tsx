import { techIcons } from "@/lib/icons";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const skillCategories = [
    {
      category: t("skills.cat_front"),
      color: "text-gruvbox-blue",
      borderColor: "border-gruvbox-blue/20",
      skills: ["React", "Vue", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"],
    },
    {
      category: t("skills.cat_back"),
      color: "text-gruvbox-green",
      borderColor: "border-gruvbox-green/20",
      skills: ["Spring Boot", "Java", "FastAPI", "Python", "PostgreSQL", "REST API"],
    },
    {
      category: t("skills.cat_mobile"),
      color: "text-gruvbox-purple",
      borderColor: "border-gruvbox-purple/20",
      skills: ["Flutter", "Dart"],
    },
    {
      category: t("skills.cat_tools"),
      color: "text-gruvbox-yellow",
      borderColor: "border-gruvbox-yellow/20",
      skills: ["Git", "Docker", "DBeaver", "Gradle", "Vite", "Pinia", "Recharts"],
    },
    {
      category: t("skills.cat_ai"),
      color: "text-gruvbox-aqua",
      borderColor: "border-gruvbox-aqua/20",
      skills: ["Claude API", "Groq API"],
    },
    {
      category: t("skills.cat_soft"),
      color: "text-gruvbox-orange",
      borderColor: "border-gruvbox-orange/20",
      skills: [
        { key: "Comunicação", label: t("skills.comm") },
        { key: "Trabalho em Equipe", label: t("skills.team") },
        { key: "Resolução de Problemas", label: t("skills.prob") },
        { key: "Criatividade", label: t("skills.creat") },
        { key: "Scrum", label: "Scrum" },
        { key: "Kanban", label: "Kanban" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gruvbox-bg1">
      <div className="container mx-auto px-4">
        <div className="tui-section-header">
          <h2 className="text-gruvbox-orange font-bold text-lg whitespace-nowrap">
            <span className="text-gruvbox-gray">03.</span> {t("nav.skills")}
          </h2>
        </div>

        <p className="text-gruvbox-fg4 text-sm mb-8 max-w-2xl">
          <span className="text-gruvbox-gray"># </span>
          {t("skills.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className={`border ${category.borderColor} bg-gruvbox-bg p-4 transition-all duration-300 hover:border-opacity-50`}>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gruvbox-bg3">
                <span className={`${category.color} font-bold text-xs`}>▸</span>
                <h3 className={`text-sm font-bold ${category.color}`}>{category.category}/</h3>
                <span className="text-gruvbox-gray text-[10px] ml-auto">{category.skills.length} pkgs</span>
              </div>
              <div className="space-y-1">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = typeof skill === 'string' ? skill : skill.key;
                  const skillLabel = typeof skill === 'string' ? skill : skill.label;
                  const Icon = techIcons[skillKey as keyof typeof techIcons];
                  return (
                    <div key={skillIndex} className="flex items-center gap-2 text-xs py-1 px-2 hover:bg-gruvbox-bg2 transition-colors group">
                      <span className="text-gruvbox-green text-[10px]">✓</span>
                      {Icon && <span className="opacity-60 group-hover:opacity-100 transition-opacity"><Icon className="w-3.5 h-3.5" /></span>}
                      <span className="text-gruvbox-fg group-hover:text-gruvbox-fg">{skillLabel}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
