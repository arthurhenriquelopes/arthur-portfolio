import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["hero", "about", "projects", "skills", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "~", id: "hero", label: "home" },
    { name: "about", id: "about", label: "sobre" },
    { name: "projects", id: "projects", label: "projetos" },
    { name: "skills", id: "skills", label: "skills" },
    { name: "certs", id: "certificates", label: "certificados" },
    { name: "contact", id: "contact", label: "contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gruvbox-bg/95 backdrop-blur-sm border-b border-gruvbox-bg3"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo — terminal style */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-gruvbox-green hover:text-gruvbox-orange transition-colors font-bold text-sm group"
          >
            <Terminal className="w-4 h-4" />
            <span className="text-gruvbox-fg4 group-hover:text-gruvbox-orange">arthur</span>
            <span className="text-gruvbox-orange">@</span>
            <span className="text-gruvbox-blue group-hover:text-gruvbox-orange">portfolio</span>
            <span className="text-gruvbox-fg4">:~$</span>
          </button>

          {/* Desktop Navigation — tab-style */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1 text-xs font-medium transition-all duration-200 border ${
                  activeSection === link.id
                    ? "bg-gruvbox-bg2 text-gruvbox-orange border-gruvbox-bg3 border-b-gruvbox-bg2"
                    : "text-gruvbox-fg4 border-transparent hover:text-gruvbox-fg hover:border-gruvbox-bg3"
                }`}
              >
                [{link.name}]
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gruvbox-fg4 hover:text-gruvbox-orange transition-colors p-1"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-2 bg-gruvbox-bg1 border border-gruvbox-bg3 mb-2 animate-fade-in-fast">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                  activeSection === link.id
                    ? "text-gruvbox-orange bg-gruvbox-bg2"
                    : "text-gruvbox-fg4 hover:text-gruvbox-fg hover:bg-gruvbox-bg2"
                }`}
              >
                <span className="text-gruvbox-gray mr-2">{idx + 1}.</span>
                [{link.name}]
                <span className="text-gruvbox-gray ml-2">-- {link.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
