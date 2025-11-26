import { Code2, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Desenvolvimento Full-Stack",
      description: "Experiência em criar aplicações web modernas do frontend ao backend",
    },
    {
      icon: Lightbulb,
      title: "Soluções Criativas",
      description: "Abordagens inovadoras para resolver problemas complexos",
    },
    {
      icon: Rocket,
      title: "Impacto Real",
      description: "Foco em desenvolver ferramentas que fazem diferença no dia a dia",
    },
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Sobre Mim
        </h2>
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground text-center mb-6">
            Sou estudante de <span className="text-foreground font-semibold">Sistemas de Informação</span> e 
            desenvolvedor full-stack apaixonado por resolver problemas complexos com abordagens criativas. 
            Atualmente, atuo como estagiário na Midas Desenvolvimento de Sistemas, onde trabalho em projetos 
            de grande escala.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            Tenho forte ambição em desenvolver soluções tecnológicas para órgãos governamentais e criar 
            ferramentas que facilitem o dia a dia das pessoas. Cada projeto é uma oportunidade de aprender, 
            inovar e causar impacto positivo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
