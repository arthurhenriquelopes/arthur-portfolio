import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import { ReactTyped } from "react-typed";
import { GoCommandPalette } from "react-icons/go";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.8), hsl(var(--background) / 0.95)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        {/* Foto de perfil */}
        <div className="mb-6 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse-slow transition duration-500"></div>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQF6YbwK4lmppg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725550766410?e=1766016000&v=beta&t=jPMY8iWnxNLzO-hXud556I30aD9iLPtGjfA0PUQa7ok"
              alt="Arthur Henrique"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-foreground/20 dark:border-foreground/40 shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Olá, eu sou <span className="text-primary">Arthur Henrique</span>
        </h1>

        {/* Container com altura fixa para evitar quebra de layout */}
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 px-4 min-h-[5rem] md:min-h-[4rem] flex items-center justify-center">
          <div className="max-w-3xl">
            <span>Criando soluções digitais inteligentes através de </span>
            <ReactTyped
              strings={[
                "código limpo",
                "design elegante",
                "abordagens criativas",
              ]}
              typeSpeed={45}
              backSpeed={30}
              loop
              className="text-primary font-semibold"
            />
          </div>
        </div>

        {/* Botões compactos lado a lado */}
        <div className="flex gap-2 justify-center items-center animate-fade-in px-2">
          <Button
            onClick={() => scrollToSection("projects")}
            className="h-10 flex-1 max-w-[120px] text-xs flex items-center justify-center gap-1.5 px-2"
          >
            <GoCommandPalette className="w-3.5 h-3.5" />
            <span>Projetos</span>
          </Button>

          <Button
            variant="outline"
            asChild
            className="h-10 flex-1 max-w-[120px] text-xs flex items-center justify-center gap-1.5 px-2"
          >
            <a
              href="/Arthur_Henrique_Lopes_Feitosa_CV.pdf"
              download="Arthur_Henrique_Lopes_Feitosa_CV.pdf"
            >
              <Download className="mr-2 w-4 h-4" />
              <span>CV</span>
            </a>
          </Button>

          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="h-10 flex-1 max-w-[120px] text-xs flex items-center justify-center gap-1.5 px-2"
          >
            <span>Contato</span>
          </Button>
        </div>
      </div>

      {/* Seta centralizada */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce-slow hover:text-primary transition-colors duration-300"
        >
          <ArrowDown className="w-8 h-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
