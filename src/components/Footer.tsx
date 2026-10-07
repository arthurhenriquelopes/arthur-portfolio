import { useState } from "react";
import { Terminal, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [secretsFound, setSecretsFound] = useState(0);

  const triggerSecret = () => {
    const next = (secretsFound + 1) % 4;
    setSecretsFound(next);

    const messages = [
      "👾 Secret 1/3: Digite 'brick' ou explore os comandos no terminal!",
      "⚡ Secret 2/3: Você ativou o modo overclock!",
      "🎉 Secret 3/3: Parabéns! Você encontrou todos os segredos do portfólio!",
    ];

    if (next > 0) {
      toast({
        title: `SECRETS ${next}/3 UNLOCKED`,
        description: messages[next - 1],
      });
    }
  };

  return (
    <footer className="bg-gruvbox-bg1 border-t border-gruvbox-bg3">
      {/* Top Status Bar (Vim/tmux style) */}
      <div className="tui-statusbar">
        <div className="flex items-center gap-3">
          <span className="text-gruvbox-green text-[10px] flex items-center gap-1 font-mono">
            <Terminal className="w-3 h-3" />
            NORMAL
          </span>
          <span className="text-gruvbox-bg4">│</span>
          <span className="text-[10px] text-gruvbox-fg4 font-mono">
            portfolio.tsx
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-gruvbox-fg4 font-mono">
            utf-8
          </span>
          <span className="text-gruvbox-bg4">│</span>
          <span className="text-[10px] text-gruvbox-orange font-mono">
            ln 1, col 1
          </span>
        </div>
      </div>

      {/* Main Footer (Samuel Rizzon style) */}
      <div className="container mx-auto px-4 max-w-5xl py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-pixel text-[11px] text-gruvbox-fg4 tracking-wider uppercase text-center sm:text-left">
          Built block by block. © {new Date().getFullYear()} Arthur Henrique
        </p>

        <button
          onClick={triggerSecret}
          className="font-pixel text-[10px] border border-gruvbox-bg3 px-3 py-1.5 text-gruvbox-fg4 hover:text-gruvbox-orange hover:border-gruvbox-orange transition-all flex items-center gap-1.5 cursor-pointer uppercase bg-gruvbox-bg2/40"
        >
          <Sparkles className="w-3 h-3 text-gruvbox-yellow" />
          <span>SECRETS {secretsFound}/3</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
