import { Badge } from "./ui/badge";
import { techIcons } from "@/lib/icons";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Vue", "TypeScript", "JavaScript", "Tailwind", "HTML", "CSS"],
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Java", "FastAPI", "Python", "PostgreSQL", "REST API"],
    },
    {
      category: "Mobile",
      skills: ["Flutter", "Dart"],
    },
    {
      category: "Ferramentas",
      skills: ["Git", "Docker", "DBeaver", "Gradle", "Vite", "Pinia", "Recharts"],
    },
    {
      category: "IA & APIs",
      skills: ["Claude API", "Groq API"],
    },
    {
      category: "Soft Skills",
      skills: ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Criatividade", "Scrum", "Kanban"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Habilidades
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar soluções eficientes
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = techIcons[skill];
                  return (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm px-3 py-1 flex items-center gap-1.5"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {skill}
                    </Badge>
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
