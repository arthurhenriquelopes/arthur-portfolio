import { ExternalLink, Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpeg";
import project3 from "@/assets/project3.jpeg";
import project4 from "@/assets/project4.jpeg";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { techIcons } from "@/lib/icons";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: false }));
  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const projects = [
    {
      title: "SIGAMA Vision",
      year: "2025",
      type: t("projects.p1_type"),
      description: t("projects.p1_desc"),
      image: project1,
      tags: ["React", "TypeScript", "Tailwind", "Recharts", "Claude API"],
      demo: "https://sigama-vision.vercel.app/",
      code: "https://github.com/arthurhenriquelopes/sigama-vision",
      wip: false,
    },
    {
      title: "DistroWiki",
      year: "2025",
      type: t("projects.p2_type"),
      description: t("projects.p2_desc"),
      image: project2,
      tags: ["React", "TypeScript", "FastAPI", "Google Sheets API", "Groq API"],
      demo: "https://distrowiki.site",
      code: "https://github.com/arthurhenriquelopes/DistroWiki",
      wip: false,
    },
    {
      title: "Lumma.ia",
      year: "2025",
      type: t("projects.p3_type"),
      description: t("projects.p3_desc"),
      image: "https://topflightapps.com/wp-content/uploads/2020/09/chatbot-UI-concept.jpg",
      tags: ["Spring", "Spring Boot", "Java", "Gradle", "Flutter", "Dart", "Docker", "PostgreSQL", "DBeaver"],
      demo: null,
      code: null,
      wip: true,
    },
    {
      title: "Saúde++",
      year: "2025",
      type: t("projects.p4_type"),
      description: t("projects.p4_desc"),
      image: project3,
      tags: ["Vue", "JavaScript", "Tailwind", "Vite", "Pinia"],
      demo: "https://saudeplusplus.vercel.app/",
      code: "https://github.com/arthurhenriquelopes/saude-plus/",
      wip: false,
    },
    {
      title: "SenhaForte.com",
      year: "2025",
      type: t("projects.p5_type"),
      description: t("projects.p5_desc"),
      image: project4,
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://senha-forte.vercel.app/",
      code: "https://github.com/arthurhenriquelopes/senhaforte.com",
      wip: false,
    },
  ];

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const toggleExpand = (index: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  return (
    <section id="projects" className="py-20 bg-gruvbox-bg">
      <div className="container mx-auto px-4">
        <div className="tui-section-header">
          <h2 className="text-gruvbox-orange font-bold text-lg whitespace-nowrap">
            <span className="text-gruvbox-gray">02.</span> {t("nav.projects")}
          </h2>
        </div>

        <p className="text-gruvbox-fg4 text-sm mb-8 max-w-2xl">
          <span className="text-gruvbox-gray"># </span>
          {t("projects.subtitle")}
        </p>

        <div className="max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => {
                const isExpanded = expandedProjects.has(index);
                const hasMoreTags = project.tags.length > 4;
                const visibleTags = isExpanded ? project.tags : project.tags.slice(0, 4);

                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="border border-gruvbox-bg3 bg-gruvbox-bg1 h-full flex flex-col group hover:border-gruvbox-orange/40 transition-all duration-300">
                      {/* Title bar */}
                      <div className="tui-titlebar">
                        <span className="tui-titlebar-dot bg-gruvbox-red" />
                        <span className="tui-titlebar-dot bg-gruvbox-yellow" />
                        <span className="tui-titlebar-dot bg-gruvbox-green" />
                        <span className="ml-2 text-[11px]">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                        {project.wip && (
                          <span className="ml-auto text-[10px] text-gruvbox-yellow border border-gruvbox-yellow/30 px-1.5">[WIP]</span>
                        )}
                      </div>

                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gruvbox-bg1 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-sm font-bold text-gruvbox-fg">{project.title}</h3>
                          <span className="text-[10px] text-gruvbox-fg4 border border-gruvbox-bg3 px-1.5 py-0.5 whitespace-nowrap">
                            {project.year} · {project.type}
                          </span>
                        </div>

                        <p className="text-gruvbox-fg4 mb-3 text-xs leading-relaxed line-clamp-3 flex-grow">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className={`flex flex-wrap gap-1.5 mb-3 transition-all duration-300 ${
                          isExpanded ? "max-h-32 overflow-y-auto pr-2 scrollbar-thin" : "max-h-none"
                        }`}>
                          {visibleTags.map((tag, tagIndex) => {
                            const Icon = techIcons[tag];
                            return (
                              <span key={tagIndex} className="tui-tag flex items-center gap-1 text-[10px]">
                                {Icon && <Icon className="w-3 h-3" />}
                                {tag}
                              </span>
                            );
                          })}
                          {hasMoreTags && (
                            <button
                              className="tui-tag text-[10px] cursor-pointer hover:text-gruvbox-orange hover:border-gruvbox-orange"
                              onClick={() => toggleExpand(index)}
                            >
                              {isExpanded ? "[-]" : `[+${project.tags.length - 4}]`}
                            </button>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2 pt-2 border-t border-gruvbox-bg3">
                          <button
                            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-gruvbox-fg4 border border-gruvbox-bg3 hover:border-gruvbox-fg4 hover:text-gruvbox-fg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            onClick={() => project.code && window.open(project.code, "_blank")}
                            disabled={!project.code}
                          >
                            <Github className="w-3 h-3" />
                            src
                          </button>
                          <button
                            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-gruvbox-orange border border-gruvbox-orange/30 hover:border-gruvbox-orange hover:bg-gruvbox-orange/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:text-gruvbox-fg4 disabled:border-gruvbox-bg3"
                            onClick={() => project.demo && window.open(project.demo, "_blank")}
                            disabled={!project.demo}
                          >
                            <ExternalLink className="w-3 h-3" />
                            demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-1.5 transition-all duration-300 ${
                  index === current
                    ? "bg-gruvbox-orange w-8"
                    : "bg-gruvbox-bg3 w-3 hover:bg-gruvbox-bg4"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`${t("projects.aria_slide")} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
