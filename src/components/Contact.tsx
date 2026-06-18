import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_lpm71l8',  
        'template_n1bg53q',  
        e.currentTarget,
        '7xXJ9Z5S7U7mGQUBR'   
      )
      .then(
        () => {
          toast({
            title: t("contact.toast_ok_title"),
            description: t("contact.toast_ok_desc"),
          });
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error('Erro:', error);
          toast({
            title: t("contact.toast_err_title"),
            description: t("contact.toast_err_desc"),
            variant: "destructive",
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/arthurhenriquelopes", label: "GitHub", color: "hover:text-gruvbox-fg" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/arthur-henrique-lopes/", label: "LinkedIn", color: "hover:text-gruvbox-blue" },
    { icon: Mail, href: "mailto:arthurhenriquelopesf@gmail.com", label: "Email", color: "hover:text-gruvbox-yellow" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-gruvbox-aqua" },
  ];

  return (
    <section id="contact" className="py-20 bg-gruvbox-bg">
      <div className="container mx-auto px-4">
        <div className="tui-section-header">
          <h2 className="text-gruvbox-orange font-bold text-lg whitespace-nowrap">
            <span className="text-gruvbox-gray">05.</span> {t("nav.contact")}
          </h2>
        </div>

        <p className="text-gruvbox-fg4 text-sm mb-8 max-w-2xl">
          <span className="text-gruvbox-gray"># </span>
          {t("contact.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Form — styled as terminal input */}
          <div className="border border-gruvbox-bg3 bg-gruvbox-bg1">
            <div className="tui-titlebar">
              <span className="tui-titlebar-dot bg-gruvbox-red" />
              <span className="tui-titlebar-dot bg-gruvbox-yellow" />
              <span className="tui-titlebar-dot bg-gruvbox-green" />
              <span className="ml-2">mail --compose</span>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <div>
                <label className="text-[10px] text-gruvbox-gray mb-1 block">From:</label>
                <input
                  name="from_name"
                  placeholder={t("contact.ph_name")}
                  required
                  className="w-full bg-gruvbox-bg border border-gruvbox-bg3 px-3 py-2 text-xs text-gruvbox-fg placeholder:text-gruvbox-bg4 focus:outline-none focus:border-gruvbox-orange transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] text-gruvbox-gray mb-1 block">Reply-To:</label>
                <input
                  name="reply_to"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-gruvbox-bg border border-gruvbox-bg3 px-3 py-2 text-xs text-gruvbox-fg placeholder:text-gruvbox-bg4 focus:outline-none focus:border-gruvbox-orange transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] text-gruvbox-gray mb-1 block">Subject:</label>
                <input
                  name="subject"
                  placeholder={t("contact.ph_subject")}
                  required
                  className="w-full bg-gruvbox-bg border border-gruvbox-bg3 px-3 py-2 text-xs text-gruvbox-fg placeholder:text-gruvbox-bg4 focus:outline-none focus:border-gruvbox-orange transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] text-gruvbox-gray mb-1 block">Body:</label>
                <textarea
                  name="message"
                  placeholder={t("contact.ph_message")}
                  required
                  className="w-full bg-gruvbox-bg border border-gruvbox-bg3 px-3 py-2 text-xs text-gruvbox-fg placeholder:text-gruvbox-bg4 focus:outline-none focus:border-gruvbox-orange transition-colors min-h-[120px] resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-gruvbox-orange/10 border border-gruvbox-orange text-gruvbox-orange text-xs font-medium hover:bg-gruvbox-orange/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-3 h-3" />
                {isSubmitting ? t("contact.btn_sending") : t("contact.btn_send")}
              </button>
            </form>
          </div>

          {/* Social links — styled as connections */}
          <div className="space-y-4">
            <div className="border border-gruvbox-bg3 bg-gruvbox-bg1">
              <div className="tui-titlebar">
                <span className="tui-titlebar-dot bg-gruvbox-red" />
                <span className="tui-titlebar-dot bg-gruvbox-yellow" />
                <span className="tui-titlebar-dot bg-gruvbox-green" />
                <span className="ml-2">connections</span>
              </div>
              <div className="p-4">
                <p className="text-gruvbox-gray text-xs mb-4">{t("contact.links_desc")}</p>
                <div className="space-y-2">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-3 py-2 text-xs text-gruvbox-fg4 ${social.color} hover:bg-gruvbox-bg2 border border-transparent hover:border-gruvbox-bg3 transition-all group`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium">{social.label}</span>
                        <span className="text-gruvbox-bg4 ml-auto text-[10px] group-hover:text-gruvbox-fg4 transition-colors">
                          →
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border border-gruvbox-bg3 bg-gruvbox-bg1 p-4">
              <pre className="text-[10px] text-gruvbox-bg4 leading-tight select-none">
{`  ╔══════════════════════════════╗
  ║                              ║
  ║   ${t("contact.ascii_l1").padEnd(27, ' ')}║
  ║   ${t("contact.ascii_l2").padEnd(27, ' ')}║
  ║   ${t("contact.ascii_l3").padEnd(27, ' ')}║
  ║                              ║
  ║   ${t("contact.ascii_l4").padEnd(27, ' ')}║
  ║   ${t("contact.ascii_l5").padEnd(27, ' ')}║
  ║                              ║
  ╚══════════════════════════════╝`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
