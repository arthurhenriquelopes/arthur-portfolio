import { useState, useRef, useEffect } from "react";
import { ExternalLink, Send, Terminal as TerminalIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

interface TermLog {
  text: string;
  type?: "system" | "user" | "success" | "error";
}

const Contact = () => {
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const isPt = i18n.language && i18n.language.startsWith("pt");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [cmdInput, setCmdInput] = useState("");

  const initialLogs = isPt
    ? [
        { text: "olá! este é o terminal do arthur.", type: "system" as const },
        { text: "digite um comando e pressione enter,", type: "system" as const },
        { text: "ou apenas use os botões abaixo.", type: "system" as const },
      ]
    : [
        { text: "hi. this is arthur's terminal.", type: "system" as const },
        { text: "type a command and press enter,", type: "system" as const },
        { text: "or just use the buttons below.", type: "system" as const },
      ];

  const [logs, setLogs] = useState<TermLog[]>(initialLogs);
  const screenRef = useRef<HTMLDivElement | null>(null);

  // Update initial logs when language switches if no user commands were typed yet
  useEffect(() => {
    setLogs(initialLogs);
  }, [isPt]);

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setLogs((prev) => [...prev, { text: `guest ~ $ ${trimmed}`, type: "user" }]);

    if (trimmed === "help" || trimmed === "ajuda") {
      setLogs((prev) => [
        ...prev,
        {
          text: isPt
            ? "comandos disponíveis: note (enviar nota), projects, about, email, github, clear, brick"
            : "available commands: note (send message), projects, about, email, github, clear, brick",
          type: "system",
        },
      ]);
    } else if (
      trimmed === "note" ||
      trimmed === "write" ||
      trimmed === "contact" ||
      trimmed === "mensagem" ||
      trimmed === "nota"
    ) {
      setShowNoteForm(true);
      setLogs((prev) => [
        ...prev,
        {
          text: isPt
            ? "formulário de mensagem aberto abaixo. digite e envie!"
            : "opened message form below. type and submit!",
          type: "success",
        },
      ]);
    } else if (trimmed === "clear" || trimmed === "limpar") {
      setLogs(initialLogs);
    } else if (trimmed === "projects" || trimmed === "projetos") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      setLogs((prev) => [
        ...prev,
        {
          text: isPt ? "rolando até projetos..." : "scrolling to projects...",
          type: "system",
        },
      ]);
    } else if (trimmed === "about" || trimmed === "sobre") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      setLogs((prev) => [
        ...prev,
        {
          text: isPt ? "rolando até sobre..." : "scrolling to about...",
          type: "system",
        },
      ]);
    } else if (trimmed === "email" || trimmed === "mail") {
      window.open("mailto:arthurhenriquelopesf@gmail.com", "_blank");
      setLogs((prev) => [
        ...prev,
        {
          text: isPt ? "abrindo cliente de e-mail..." : "opening mail client...",
          type: "system",
        },
      ]);
    } else if (trimmed === "github") {
      window.open("https://github.com/arthurhenriquelopes", "_blank");
      setLogs((prev) => [
        ...prev,
        {
          text: isPt ? "abrindo perfil do github..." : "opening github...",
          type: "system",
        },
      ]);
    } else if (trimmed === "brick" || trimmed === "clawd" || trimmed === "secret") {
      setLogs((prev) => [
        ...prev,
        {
          text: isPt
            ? "🧱 Bloco por bloco! Você encontrou o segredo! Clawd aprova."
            : "🧱 Block by block! You unlocked a secret! Clawd approves.",
          type: "success",
        },
      ]);
    } else {
      setLogs((prev) => [
        ...prev,
        {
          text: isPt
            ? `comando não encontrado: "${trimmed}". digite "help" para ver opções.`
            : `command not found: "${trimmed}". type "help" for options.`,
          type: "error",
        },
      ]);
    }
    setCmdInput("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_lpm71l8",
        "template_n1bg53q",
        e.currentTarget,
        "7xXJ9Z5S7U7mGQUBR"
      )
      .then(
        () => {
          toast({
            title: t("contact.toast_ok_title"),
            description: t("contact.toast_ok_desc"),
          });
          setLogs((prev) => [
            ...prev,
            {
              text: isPt
                ? "✓ nota entregue direto na caixa de entrada do Arthur!"
                : "✓ note delivered straight to Arthur's inbox!",
              type: "success",
            },
          ]);
          setShowNoteForm(false);
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error("Erro:", error);
          toast({
            title: t("contact.toast_err_title"),
            description: t("contact.toast_err_desc"),
            variant: "destructive",
          });
          setLogs((prev) => [
            ...prev,
            {
              text: isPt
                ? "✗ falha na transmissão. envie um e-mail direto."
                : "✗ transmission failed. please email directly.",
              type: "error",
            },
          ]);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const socials = [
    { name: "GITHUB", handle: "@arthurhenriquelopes", url: "https://github.com/arthurhenriquelopes" },
    { name: "LINKEDIN", handle: "@arthur-henrique-lopes", url: "https://www.linkedin.com/in/arthur-henrique-lopes/" },
    { name: "EMAIL", handle: "arthurhenriquelopesf@gmail.com", url: "mailto:arthurhenriquelopesf@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24 bg-gruvbox-bg relative overflow-hidden">
      <div className="section-ambient-glow" />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-pixel text-xl sm:text-2xl text-gruvbox-orange tracking-wider uppercase">
            <span className="text-gruvbox-gray mr-3">05.</span>
            {t("nav.contact", "Contact")}
          </h2>
          <div className="flex-1 h-[1px] bg-gruvbox-bg3" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column: Social Links with Handles (Samuel Rizzon style) */}
          <div className="space-y-4">
            <p className="font-mono text-xs text-gruvbox-gray uppercase tracking-wider mb-6">
              # {isPt ? "CONECTAR & SEGUIR" : "CONNECT & FOLLOW"}
            </p>

            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 border border-gruvbox-bg3/80 bg-gruvbox-bg1/60 hover:border-gruvbox-orange hover:bg-gruvbox-bg2 transition-all duration-200 group"
                >
                  <span className="font-pixel text-xs tracking-wider text-gruvbox-fg group-hover:text-gruvbox-orange transition-colors">
                    {s.name}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs text-gruvbox-fg4 group-hover:text-gruvbox-fg transition-colors">
                    <span className="truncate max-w-[180px] sm:max-w-none">{s.handle}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-gruvbox-gray group-hover:text-gruvbox-orange" />
                  </div>
                </a>
              ))}
            </div>

            <div className="border border-gruvbox-bg3/40 bg-gruvbox-bg1/20 p-4 mt-6 text-xs font-mono text-gruvbox-fg4 space-y-2">
              <div className="flex items-center gap-2 text-gruvbox-green font-bold text-[11px]">
                <span className="w-2 h-2 rounded-full bg-gruvbox-green animate-pulse" />
                <span>{isPt ? "DISPONIBILIDADE IMEDIATA" : "OPEN FOR OPPORTUNITIES"}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {isPt
                  ? "Atualmente aberto para novas oportunidades, projetos de engenharia full-stack e desafios com IA aplicada."
                  : "Currently open to new opportunities, full-stack engineering roles, and applied AI challenges."}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Guest Terminal (Samuel Rizzon style) */}
          <div className="border border-gruvbox-bg3 bg-gruvbox-bg1/90 shadow-2xl relative">
            {/* Terminal Window Chrome */}
            <div className="bg-gruvbox-bg2 px-4 py-2 border-b border-gruvbox-bg3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gruvbox-red" />
                <span className="w-2.5 h-2.5 rounded-full bg-gruvbox-yellow" />
                <span className="w-2.5 h-2.5 rounded-full bg-gruvbox-green" />
                <span className="ml-2 text-gruvbox-fg4 font-pixel text-[10px]">
                  guest@arthurhenrique.dev
                </span>
              </div>
              <TerminalIcon className="w-3.5 h-3.5 text-gruvbox-gray" />
            </div>

            {/* Terminal Screen */}
            <div
              ref={screenRef}
              className="p-4 h-64 overflow-y-auto font-mono text-xs space-y-2 scrollbar-thin bg-black/40"
            >
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed ${
                    log.type === "user"
                      ? "text-gruvbox-orange"
                      : log.type === "success"
                      ? "text-gruvbox-green"
                      : log.type === "error"
                      ? "text-gruvbox-red"
                      : "text-gruvbox-fg4"
                  }`}
                >
                  {log.text}
                </div>
              ))}
            </div>

            {/* Prompt Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(cmdInput);
              }}
              className="border-t border-gruvbox-bg3/80 bg-gruvbox-bg px-4 py-2.5 flex items-center gap-2 text-xs font-mono"
            >
              <span className="text-gruvbox-green font-bold">guest ~ $</span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                placeholder={
                  isPt
                    ? "digite um comando (ex: help, note, brick)"
                    : "type a command (e.g. help, note, brick)"
                }
                className="flex-1 bg-transparent border-none outline-none text-gruvbox-fg placeholder:text-gruvbox-bg4 font-mono text-xs"
              />
            </form>

            {/* Terminal Chips / Buttons */}
            <div className="border-t border-gruvbox-bg3 bg-gruvbox-bg2/60 p-2.5 flex flex-wrap gap-2 text-[11px] font-pixel">
              <button
                type="button"
                onClick={() => {
                  setShowNoteForm((prev) => !prev);
                  setLogs((prev) => [
                    ...prev,
                    {
                      text: showNoteForm
                        ? isPt
                          ? "formulário de nota fechado."
                          : "closed note form."
                        : isPt
                        ? "formulário de nota aberto abaixo."
                        : "opened note form below.",
                      type: "system",
                    },
                  ]);
                }}
                className="px-3 py-1.5 bg-gruvbox-fg text-gruvbox-bg hover:bg-white uppercase font-bold transition-all cursor-pointer"
              >
                {showNoteForm
                  ? isPt
                    ? "FECHAR NOTA"
                    : "CLOSE NOTE"
                  : isPt
                  ? "ESCREVER NOTA"
                  : "WRITE A NOTE"}
              </button>
              <button
                type="button"
                onClick={() => handleCommand("github")}
                className="px-3 py-1.5 border border-gruvbox-bg3 text-gruvbox-fg hover:border-gruvbox-green uppercase transition-all cursor-pointer"
              >
                {isPt ? "SEGUIR" : "FOLLOW"}
              </button>
              <button
                type="button"
                onClick={() => handleCommand("help")}
                className="px-3 py-1.5 border border-gruvbox-bg3 text-gruvbox-yellow hover:border-gruvbox-yellow uppercase transition-all cursor-pointer"
              >
                {isPt ? "AJUDA" : "HELP"}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Message / Note Form */}
        {showNoteForm && (
          <div className="mt-8 border border-gruvbox-orange/60 bg-gruvbox-bg1 p-6 animate-fade-in-fast max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-gruvbox-bg3 pb-3 mb-4">
              <span className="font-pixel text-xs text-gruvbox-orange uppercase">
                {isPt ? "ENVIAR --MENSAGEM / NOTA" : "MAIL --COMPOSE NOTE"}
              </span>
              <button
                type="button"
                onClick={() => setShowNoteForm(false)}
                className="text-gruvbox-gray hover:text-gruvbox-red text-xs font-mono cursor-pointer"
              >
                [ESC / {isPt ? "FECHAR" : "CLOSE"}]
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
              <div>
                <label className="text-[10px] text-gruvbox-gray mb-1 block">
                  {isPt ? "DE (SEU NOME):" : "FROM (NAME):"}
                </label>
                <input
                  name="from_name"
                  placeholder={t("contact.ph_name")}
                  required
                  className="w-full bg-gruvbox-bg border border-gruvbox-bg3 px-3 py-2 text-gruvbox-fg focus:outline-none focus:border-gruvbox-orange"
                />
              </div>
              <div>
                <label className="text-[10px] text-gruvbox-gray mb-1 block">
                  {isPt ? "RESPONDER PARA (E-MAIL):" : "REPLY-TO (EMAIL):"}
                </label>
                <input
                  name="reply_to"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-gruvbox-bg border border-gruvbox-bg3 px-3 py-2 text-gruvbox-fg focus:outline-none focus:border-gruvbox-orange"
                />
              </div>
              <div>
                <label className="text-[10px] text-gruvbox-gray mb-1 block">
                  {isPt ? "ASSUNTO:" : "SUBJECT:"}
                </label>
                <input
                  name="subject"
                  placeholder={t("contact.ph_subject")}
                  required
                  className="w-full bg-gruvbox-bg border border-gruvbox-bg3 px-3 py-2 text-gruvbox-fg focus:outline-none focus:border-gruvbox-orange"
                />
              </div>
              <div>
                <label className="text-[10px] text-gruvbox-gray mb-1 block">
                  {isPt ? "MENSAGEM:" : "MESSAGE:"}
                </label>
                <textarea
                  name="message"
                  placeholder={t("contact.ph_message")}
                  required
                  rows={4}
                  className="w-full bg-gruvbox-bg border border-gruvbox-bg3 px-3 py-2 text-gruvbox-fg focus:outline-none focus:border-gruvbox-orange"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 bg-gruvbox-orange text-gruvbox-bg font-pixel text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                {isSubmitting
                  ? isPt
                    ? "TRANSMITINDO..."
                    : "TRANSMITTING..."
                  : isPt
                  ? "$ ENVIAR NOTA --AGORA"
                  : "$ SEND NOTE --NOW"}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
