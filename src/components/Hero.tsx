import { ArrowDown } from "lucide-react";
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Olá, eu sou <span className="text-primary">Arthur Henrique</span>
        </h1>
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 min-h-[4rem] px-4">
          <span>Criando soluções digitais inteligentes através de </span>
          <ReactTyped
            strings={[
              "código limpo",
              "design elegante",
              "abordagens criativas"
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="text-primary font-semibold"
          />
        </div>
        
        {/* Botões com altura e largura iguais */}
        <div className="flex flex-row gap-3 justify-center items-center animate-fade-in px-4">
          <Button 
            onClick={() => scrollToSection("projects")}
            className="h-11 w-40 sm:w-44 text-xs sm:text-sm flex items-center justify-center"
          >
            <span className="hidden sm:inline">Ver Projetos</span>
            <span className="sm:hidden">Projetos</span>
            <GoCommandPalette className="ml-1.5 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="h-11 w-40 sm:w-44 text-xs sm:text-sm flex items-center justify-center"
          >
            <span className="hidden sm:inline">Entrar em Contato</span>
            <span className="sm:hidden">Contato</span>
          </Button>
        </div>
      </div>
      
      {/* Seta centralizada */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce hover:text-primary transition-colors"
        >
          <ArrowDown className="w-8 h-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
