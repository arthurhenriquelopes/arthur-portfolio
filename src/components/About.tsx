import { Code2, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Desenvolvimento Full‑Stack",
      description:
        "Aplicações modernas do frontend ao backend com qualidade de engenharia.",
    },
    {
      icon: Lightbulb,
      title: "Soluções Criativas",
      description: "Abordagens inovadoras para destravar problemas complexos.",
    },
    {
      icon: Rocket,
      title: "Impacto Real",
      description: "Ferramentas que geram valor prático no dia a dia.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-10">
          Sobre Mim
        </h2>
        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-lg text-foreground/80 text-center leading-relaxed mb-4">
            Sou estudante de{" "}
            <span className="font-semibold">Sistemas de Informação</span> e
            desenvolvedor full‑stack apaixonado em aprender tecnologias novas e
            resolver problemas complexos com abordagens criativas. Atualmente,
            atuo como estagiário na Midas Desenvolvimento de Sistemas,
            trabalhando em projetos de grande escala.
          </p>
          <p className="text-lg text-foreground/80 text-center leading-relaxed mb-4">
            Sou comunicativo, colaborativo e experiente em metodologias ágeis.
            Sempre busco aprender novas tecnologias, e rotineiramente,
            desenvolvo projetos pessoais que facilitem o dia a dia.
          </p>
          <p className="text-lg text-foreground/80 text-center leading-relaxed">
            No momento, estou dedicado no meu projeto de autoria pessoal{" "}
            <a
              href="https://distrowiki.site"
              className="text-foreground font-semibold underline underline-offset-4 hover:text-primary transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              DistroWiki
            </a>{" "}
            , uma plataforma open-source para
            comparação de distribuições Linux com foco em experiência do usuário
            e dados dinâmicos via IA. Minha meta é crescer como desenvolvedor
            backend/full-stack criando soluções que gerem impacto positivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="h-full border-border/60 hover:border-primary/30 hover:shadow-md transition-colors"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 ring-1 ring-primary/15 mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
