import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gruvbox-bg1 border-t border-gruvbox-bg3">
      {/* Status bar — like vim/tmux */}
      <div className="tui-statusbar">
        <div className="flex items-center gap-3">
          <span className="text-gruvbox-green text-[10px] flex items-center gap-1">
            <Terminal className="w-3 h-3" />
            NORMAL
          </span>
          <span className="text-gruvbox-bg4">│</span>
          <span className="text-[10px] text-gruvbox-fg4">
            portfolio.tsx
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-gruvbox-fg4">
            utf-8
          </span>
          <span className="text-gruvbox-bg4">│</span>
          <span className="text-[10px] text-gruvbox-fg4">
            tsx
          </span>
          <span className="text-gruvbox-bg4">│</span>
          <span className="text-[10px] text-gruvbox-orange">
            ln 1, col 1
          </span>
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-gruvbox-fg4 text-xs flex items-center justify-center gap-2">
          <span className="text-gruvbox-gray">/*</span>
          Feito com
          <span className="text-gruvbox-red">♥</span>
          por
          <a
            href="#contact"
            className="text-gruvbox-orange hover:text-gruvbox-yellow transition-colors font-medium"
          >
            Arthur Henrique
          </a>
          <span className="text-gruvbox-gray">*/</span>
        </p>
        <p className="text-[10px] text-gruvbox-bg4 mt-2">
          © {new Date().getFullYear()} // Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
