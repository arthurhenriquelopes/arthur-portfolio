import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpeg";
import project3 from "@/assets/project3.jpeg";
import project4 from "@/assets/project4.jpeg";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { techIcons } from "@/lib/icons";

const Projects = () => {
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: false }));

  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
    new Set()
  );

  const projects = [
    {
      title: "SIGAMA Vision",
      year: "2025",
      type: "AGED/FAPEMA",
      description:
        "Sistema de Gestão Agropecuária com interface moderna e que conta com Dashboards Inteligentes e fluídos. IA para processar documentos de forma automática.",
      image: project1,
      tags: ["React", "TypeScript", "Tailwind", "Recharts", "Claude API"],
      demo: "https://sigama-vision.vercel.app/",
      code: "https://github.com/arthurhenriquelopes/sigama-vision",
      wip: false,
    },
    {
      title: "DistroWiki",
      year: "2025",
      type: "Open Source",
      description:
        "Plataforma de comparação de distribuições Linux para auxiliar a decisão do usuário. Dados alimentados dinamicamente via Groq IA.",
      image: project2,
      tags: ["React", "TypeScript", "FastAPI", "Google Sheets API", "Groq API"],
      demo: "https://distrowiki.site",
      code: "https://github.com/arthurhenriquelopes/DistroWiki",
      wip: false,
    },
    {
      title: "Lumma.ia",
      year: "2025",
      type: "MIDAS • Em Produção",
      description:
        "Chatbot inteligente com LLM para conversas naturais. Responde dúvidas e automatiza atendimento com IA generativa em tempo real.",
      image:
        "https://topflightapps.com/wp-content/uploads/2020/09/chatbot-UI-concept.jpg",
      tags: [
        "Spring",
        "Spring Boot",
        "Java",
        "Gradle",
        "Flutter",
        "Dart",
        "Docker",
        "PostgreSQL",
        "DBeaver",
      ],
      demo: null,
      code: null,
      wip: true,
    },
    {
      title: "Saúde++",
      year: "2025",
      type: "Colaborativo",
      description:
        "Sistema de gestão para clínicas com agendamento inteligente. Dashboards inteligentes, modernos e fáceis de usar.",
      image: project3,
      tags: ["Vue", "JavaScript", "Tailwind", "Vite", "Pinia"],
      demo: "https://saudeplusplus.vercel.app/",
      code: "https://github.com/arthurhenriquelopes/saude-plus/",
      wip: false,
    },
    {
      title: "SenhaForte.com",
      year: "2025",
      type: "Pessoal",
      description:
        "Gerador de senhas seguras com personalização completa. Ajuste tamanho e tipos de caracteres, copie rapidamente e salve o histórico local.",
      image: project4,
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://senha-forte.vercel.app/",
      code: "https://github.com/arthurhenriquelopes/senhaforte.com",
      wip: false,
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const toggleExpand = (index: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
          Projetos
        </h2>

        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Alguns dos meus trabalhos recentes que demonstram minhas habilidades e
          criatividade
        </p>
        <div className="max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => {
                const isExpanded = expandedProjects.has(index);
                const hasMoreTags = project.tags.length > 4;
                const visibleTags = isExpanded
                  ? project.tags
                  : project.tags.slice(0, 4);

                return (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group h-full flex flex-col border-border/60">
                      {/* Imagem */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Badge WIP na imagem */}
                        {project.wip && (
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-yellow-500 text-yellow-950 border-0 font-semibold shadow-lg">
                              Em Desenvolvimento
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-6 flex flex-col flex-1">
                        {/* Título com badge ao lado */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-xl font-semibold">
                            {project.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="text-xs whitespace-nowrap"
                          >
                            {project.year} • {project.type}
                          </Badge>
                        </div>

                        {/* Descrição */}
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3 flex-grow leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tags com scroll quando expandido */}
                        <div
                          className={`flex flex-wrap gap-2 mb-4 transition-all duration-300 ${
                            isExpanded
                              ? "max-h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40"
                              : "max-h-none"
                          }`}
                        >
                          {visibleTags.map((tag, tagIndex) => {
                            const Icon = techIcons[tag];
                            return (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="text-xs px-2 py-1 flex items-center gap-1"
                              >
                                {Icon && <Icon className="w-3 h-3" />}
                                {tag}
                              </Badge>
                            );
                          })}
                          {hasMoreTags && (
                            <Badge
                              variant="outline"
                              className="text-xs px-2 py-1 cursor-pointer hover:bg-primary/10 transition-colors"
                              onClick={() => toggleExpand(index)}
                            >
                              {isExpanded
                                ? "Menos"
                                : `+${project.tags.length - 4}`}
                            </Badge>
                          )}
                        </div>

                        {/* Botões */}
                        <div className="flex gap-2 pt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs flex-1"
                            onClick={() =>
                              project.code &&
                              window.open(project.code, "_blank")
                            }
                            disabled={!project.code}
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Código
                          </Button>
                          <Button
                            size="sm"
                            className="text-xs flex-1"
                            onClick={() =>
                              project.demo &&
                              window.open(project.demo, "_blank")
                            }
                            disabled={!project.demo}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Indicadores de paginação (dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full border-2 transition-all duration-300 ${
                  index === current
                    ? "bg-primary border-primary w-8"
                    : "bg-transparent border-primary/40 hover:border-primary/60"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
