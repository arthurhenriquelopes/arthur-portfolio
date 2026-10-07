import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "projects", "skills", "certificates", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language && i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { name: "PROJECTS", id: "projects" },
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    { name: "CERTS", id: "certificates" },
    { name: "CONTACT", id: "contact" },
  ];

  const currentLang = i18n.language && i18n.language.startsWith("pt") ? "PT" : "EN";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gruvbox-bg/90 backdrop-blur-md border-b border-gruvbox-bg3/70 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Name */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <span className="font-pixel text-xs sm:text-sm tracking-wider text-gruvbox-fg group-hover:text-gruvbox-orange transition-colors">
              ARTHUR HENRIQUE
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-pixel text-[11px] tracking-wider transition-all duration-200 cursor-pointer ${
                    activeSection === link.id
                      ? "text-gruvbox-orange font-bold border-b border-gruvbox-orange pb-0.5"
                      : "text-gruvbox-fg4 hover:text-gruvbox-fg"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="h-4 w-[1px] bg-gruvbox-bg3" />

            <div className="flex items-center gap-4">
              {/* GitHub Link */}
              <a
                href="https://github.com/arthurhenriquelopes"
                target="_blank"
                rel="noreferrer"
                className="font-pixel text-[11px] tracking-wider text-gruvbox-fg4 hover:text-gruvbox-green flex items-center gap-1 transition-colors"
              >
                <span>GITHUB</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="font-mono text-xs px-2 py-0.5 border border-gruvbox-bg3 text-gruvbox-yellow hover:border-gruvbox-yellow transition-all flex items-center gap-1 cursor-pointer"
                title="Trocar idioma / Switch language"
              >
                <Globe className="w-3 h-3" />
                <span>{currentLang}</span>
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="font-mono text-xs px-2 py-1 border border-gruvbox-bg3 text-gruvbox-yellow"
            >
              {currentLang}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gruvbox-fg4 hover:text-gruvbox-orange transition-colors p-1"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 px-4 bg-gruvbox-bg1/95 backdrop-blur-md border border-gruvbox-bg3 mb-3 animate-fade-in-fast space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-2 font-pixel text-xs tracking-wider transition-colors ${
                  activeSection === link.id
                    ? "text-gruvbox-orange"
                    : "text-gruvbox-fg4 hover:text-gruvbox-fg"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 border-t border-gruvbox-bg3 flex items-center justify-between">
              <a
                href="https://github.com/arthurhenriquelopes"
                target="_blank"
                rel="noreferrer"
                className="font-pixel text-xs text-gruvbox-fg4 hover:text-gruvbox-green flex items-center gap-1"
              >
                GITHUB <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
