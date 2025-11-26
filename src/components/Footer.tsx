import { Heart } from "lucide-react";
import { DotSlashIcon } from "@/lib/icons";

const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Feito com{" "}
          <Heart className="w-4 h-4 text-destructive fill-destructive" /> por
          <a
            href="#contact"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <DotSlashIcon className="w-4 h-4 text-foreground" />
            Arthur Henrique
          </a>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
