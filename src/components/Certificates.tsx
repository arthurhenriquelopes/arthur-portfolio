import { Award, ChevronDown, ChevronRight, ExternalLink, Coffee, Leaf, FlaskConical, Brain, MessageSquareCode, Bot, Database, GitBranch, Cpu, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Certificate {
  name: string;
  file: string;
}

interface CertCategory {
  categoryKey: string;
  color: string;
  icon: LucideIcon;
  certs: Certificate[];
}

const certData: CertCategory[] = [
  {
    categoryKey: "certs.cat_java",
    color: "text-gruvbox-red",
    icon: Coffee,
    certs: [
      { name: "Fundamentos da Sintaxe da Linguagem Java", file: "Certificado - Fundamentos da Sintaxe da Linguagem Java.pdf" },
      { name: "Estruturas de Controle em Java", file: "Certificado - Estruturas de Controle em Java.pdf" },
      { name: "Java e a Arte da Abstração com Classes e Encapsulamento", file: "Certificado - Java e a Arte da Abstração com Classes e Encapsulamento.pdf" },
      { name: "Programação Orientada a Objetos Com Java", file: "Certificado - Programação Orientada a Objetos Com Java.pdf" },
      { name: "Herança e Polimorfismo em Java", file: "Certificado - Herança e Polimorfismo em Java.pdf" },
      { name: "Dominando Interfaces e Lambda em Java", file: "Certificado - Dominando Interfaces e Lambda em Java.pdf" },
      { name: "Imersão Prática com Collections e Outras Classes Úteis", file: "Certificado - Imersão Prática com Collections e Outras Classes Úteis do Java.pdf" },
      { name: "Debugging e Tratamento de Exceções em Java", file: "Certificado - Debugging e o Tratamento de Exceções em Java.pdf" },
      { name: "Persistência de Dados com Java", file: "Certificado - Persistência de Dados com Java.pdf" },
      { name: "Boas Práticas de Desenvolvimento Java", file: "Certificado - Boas Práticas de Desenvolvimento de Aplicações Java.pdf" },
      { name: "Criando um Jogo do Sudoku em Java", file: "Certificado - Criando um Jogo do Sudoku em Java.pdf" },
      { name: "Introdução ao Java e Ambiente de Desenvolvimento", file: "Certificado - Introdução ao Java e seu Ambiente de Desenvolvimento.pdf" },
      { name: "Introdução ao Desenvolvimento Java e Setup", file: "Certificado - Introdução ao Desenvolvimento Java e Setup do Ambiente.pdf" },
      { name: "Primeiro Projeto Java do Zero — Santander Dev Week", file: "Certificado - Iniciando o seu Primeiro Projeto Java do Zero - Santander Dev Week 2024.pdf" },
    ],
  },
  {
    categoryKey: "certs.cat_spring",
    color: "text-gruvbox-green",
    icon: Leaf,
    certs: [
      { name: "Introdução a Spring Framework com Spring Boot", file: "Certificado - Introdução a Spring Framework com Spring Boot.pdf" },
      { name: "Ecossistema Spring para Desenvolvimento de APIs", file: "Certificado - Ecossistema Spring para Desenvolvimento de APIs.pdf" },
      { name: "API REST Documentada com Spring Web e Swagger", file: "Certificado - Criando uma API REST Documentada com Spring Web e Swagger.pdf" },
      { name: "Segurança a uma API REST com Spring Security", file: "Certificado - Adicionando Segurança a uma API REST com Spring Security.pdf" },
      { name: "API Inteligente com Reconhecimento de Fala e Spring Boot", file: "Certificado - Desenvolvendo sua API Inteligente com Reconhecimento de Fala e Spring Boot.pdf" },
      { name: "Globant — Java & Spring Boot AI Developer", file: "Certificado - Globant - Java & Spring Boot AI Developer.pdf" },
      { name: "Boas-vindas a Globant — Introdução ao Mercado Java", file: "Certificado - Boas-vindas a Globant - Introdução ao Mercado de Desenvolvimento Java.pdf" },
      { name: "Introdução ao GFT Start #7", file: "Certificado - Introdução ao GFT Start #7.pdf" },
    ],
  },
  {
    categoryKey: "certs.cat_test",
    color: "text-gruvbox-aqua",
    icon: FlaskConical,
    certs: [
      { name: "Introdução a Testes de Software", file: "Certificado - Introdução a Testes de Software.pdf" },
      { name: "Testes Unitários Com JUnit", file: "Certificado - Testes Unitários Com JUnit.pdf" },
      { name: "Testes Unitários em Java com JUnit", file: "Certificado - Testes Unitários em Java com JUnit.pdf" },
      { name: "Introdução ao JUnit 5", file: "Certificado - Introdução ao Junit 5.pdf" },
    ],
  },
  {
    categoryKey: "certs.cat_ai",
    color: "text-gruvbox-purple",
    icon: Brain,
    certs: [
      { name: "Fundamentos de IA", file: "Certificado - Fundamentos de IA.pdf" },
      { name: "Aplicações Práticas da Inteligência Artificial", file: "Certificado - Aplicações Práticas da Inteligência Artificial.pdf" },
      { name: "Aplicações e Impacto da IA no Mundo Atual", file: "Certificado - Aplicações e Impacto da IA no Mundo Atual.pdf" },
      { name: "IA Aplicada ao Desenvolvimento de Software", file: "Certificado - Inteligência Artificial Aplicada ao Desenvolvimento de Software.pdf" },
      { name: "IA Mentor de Carreira — Descubra Seu Futuro em Tech", file: "Certificado - IA Mentor de Carreira - Descubra Seu Futuro em Tech.pdf" },
      { name: "Acelere sua Aprendizagem com IA — NotebookLM", file: "Certificado - Acelere sua Aprendizagem com IA - Explore o Poder do NotebookLM.pdf" },
      { name: "Modelos de Linguagem Compactos (SLMs)", file: "Certificado - Modelos de Linguagem Compactos (SLMs).pdf" },
    ],
  },
  {
    categoryKey: "certs.cat_prompt",
    color: "text-gruvbox-yellow",
    icon: MessageSquareCode,
    certs: [
      { name: "Introdução à Engenharia de Prompts", file: "Certificado - Introdução à Engenharia de Prompts.pdf" },
      { name: "Introdução a Engenharia de Prompt", file: "Certificado - Introdução a Engenharia de Prompt.pdf" },
      { name: "Técnicas de Engenharia de Prompt", file: "Certificado - Técnicas de Engenharia de Prompt.pdf" },
      { name: "Escrevendo Prompts Eficazes", file: "Certificado - Escrevendo Prompts Eficazes.pdf" },
    ],
  },
  {
    categoryKey: "certs.cat_agents",
    color: "text-gruvbox-orange",
    icon: Bot,
    certs: [
      { name: "Fundamentos de Agentes Autônomos", file: "Certificado - Fundamentos de Agentes Autônomos.pdf" },
      { name: "Primeiros Passos Para Criar Agentes", file: "Certificado - Primeiros Passos Para Criar Agentes.pdf" },
      { name: "Visão Geral do Ecossistema de Agentes", file: "Certificado - Visão Geral do Ecossistema de Agentes.pdf" },
      { name: "Instalação e Configuração do Ambiente de Agentes", file: "Certificado - Instalação e Configuração do Ambiente de Agentes.pdf" },
      { name: "Projeto Final — Assistente Virtual Inteligente por Voz", file: "Certificado - Projeto Final - Assistente Virtual Inteligente por Voz.pdf" },
      { name: "O que é o GitHub Copilot", file: "Certificado - O que é o GitHub Copilot.pdf" },
      { name: "Utilizando Copilotos de Desenvolvimento de Software", file: "Certificado - Utilizando Copilotos de Desenvolvimento de Software.pdf" },
      { name: "Usando IA Como Copiloto para Criar Novas Features", file: "Certificado - Usando IA Como Copiloto para Criar Novas Features no Seu Projeto.pdf" },
    ],
  },
  {
    categoryKey: "certs.cat_db",
    color: "text-gruvbox-blue",
    icon: Database,
    certs: [
      { name: "Introdução a Banco de Dados Relacionais", file: "Certificado - Introdução a Banco de Dados Relacionais.pdf" },
      { name: "Criando suas Primeiras Consultas SQL", file: "Certificado - Criando suas Primeiras Consultas SQL.pdf" },
      { name: "Fundamentos em Python", file: "Certificado - Fundamentos em Python.pdf" },
    ],
  },
  {
    categoryKey: "certs.cat_devops",
    color: "text-gruvbox-fg",
    icon: GitBranch,
    certs: [
      { name: "Git e GitHub — Primeiros Passos e Configuração", file: "Certificado - Git e GitHub - Primeiros Passos e Configuração do Ambiente.pdf" },
      { name: "Introdução a Clean Code", file: "Certificado - Introdução a Clean Code.pdf" },
      { name: "Principais Protocolos de Comunicação da Internet", file: "Certificado - Principais Protocolos de Comunicação da Internet.pdf" },
      { name: "Ética e Cibersegurança Andam Juntas", file: "Certificado - Entenda Porque Ética e Cibersegurança Andam Juntas.pdf" },
    ],
  },
  {
    categoryKey: "certs.cat_iot",
    color: "text-gruvbox-aqua",
    icon: Cpu,
    certs: [
      { name: "Introdução a Sistemas Embarcados", file: "Certificado - Introducao a Sistemas Embarcados.pdf" },
      { name: "Fundamentos de Eletricidade", file: "Certificado - Fundamentos de Eletricidade.pdf" },
      { name: "Semicondutores e Circuitos Analógicos Essenciais", file: "Certificado - Semicondutores e Circuitos Analogicos Essenciais.pdf" },
      { name: "Introdução aos Circuitos Digitais", file: "Certificado - Introducao aos Circuitos Digitais.pdf" },
      { name: "Linguagem C para Sistemas Embarcados", file: "Certificado - Linguagem C para Sistemas Embarcados.pdf" },
      { name: "IA para Sistemas Embarcados", file: "Certificado - Fundamentos de Inteligencia Artificial para Sistemas Embarcados.pdf" },
      { name: "Sistemas de Visão Computacional Embarcada", file: "Certificado - Sistemas de Visao Computacional Embarcada.pdf" },
      { name: "Análise Preditiva de Dados de Sensores", file: "Certificado - Analise Preditiva de Dados de Sensores.pdf" },
      { name: "Aplicações Industriais e IoT", file: "Certificado - Aplicacoes Industriais e IoT.pdf" },
    ],
  },
];

const totalCerts = certData.reduce((acc, cat) => acc + cat.certs.length, 0);

const Certificates = () => {
  const { t } = useTranslation();
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set([0]));

  const toggleCategory = (index: number) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedCategories(new Set(certData.map((_, i) => i)));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  return (
    <section id="certificates" className="py-20 bg-gruvbox-bg1">
      <div className="container mx-auto px-4">
        <div className="tui-section-header">
          <h2 className="text-gruvbox-orange font-bold text-lg whitespace-nowrap">
            <span className="text-gruvbox-gray">04.</span> {t("nav.certificates")}
          </h2>
        </div>

        <div className="flex items-center justify-between mb-8 max-w-4xl">
          <p className="text-gruvbox-fg4 text-sm">
            <span className="text-gruvbox-gray"># </span>
            {totalCerts} {t("certs.subtitle1")} {certData.length} {t("certs.subtitle2")}
          </p>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="text-[10px] text-gruvbox-fg4 hover:text-gruvbox-orange border border-gruvbox-bg3 px-2 py-1 transition-colors"
            >
              expand-all
            </button>
            <button
              onClick={collapseAll}
              className="text-[10px] text-gruvbox-fg4 hover:text-gruvbox-orange border border-gruvbox-bg3 px-2 py-1 transition-colors"
            >
              collapse-all
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-2">
          {certData.map((category, catIdx) => {
            const isExpanded = expandedCategories.has(catIdx);
            return (
              <div key={catIdx} className="border border-gruvbox-bg3 bg-gruvbox-bg transition-all duration-200">
                {/* Category header — clickable */}
                <button
                  onClick={() => toggleCategory(catIdx)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gruvbox-bg2 transition-colors text-left"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-gruvbox-orange flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-gruvbox-fg4 flex-shrink-0" />
                  )}
                  <category.icon className={`w-4 h-4 ${category.color} flex-shrink-0`} />
                  <span className={`text-sm font-bold ${category.color}`}>
                    {t(category.categoryKey)}/
                  </span>
                  <span className="text-gruvbox-bg4 text-[10px] ml-auto flex-shrink-0">
                    {category.certs.length} {t("certs.certs_label")}
                  </span>
                </button>

                {/* Certificates list */}
                {isExpanded && (
                  <div className="border-t border-gruvbox-bg3 px-4 py-2 space-y-0.5 animate-fade-in-fast">
                    {category.certs.map((cert, certIdx) => (
                      <a
                        key={certIdx}
                        href={`/certificados/${encodeURIComponent(cert.file)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-gruvbox-bg2 transition-colors group"
                      >
                        <Award className="w-3 h-3 text-gruvbox-bg4 group-hover:text-gruvbox-orange transition-colors flex-shrink-0" />
                        <span className="text-gruvbox-fg group-hover:text-gruvbox-fg truncate">
                          {cert.name}
                        </span>
                        <ExternalLink className="w-3 h-3 text-gruvbox-bg4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total counter */}
        <div className="max-w-4xl mx-auto mt-4 px-4">
          <p className="text-[10px] text-gruvbox-bg4">
            $ find ./certificados -name "*.pdf" | wc -l → <span className="text-gruvbox-green">{totalCerts}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
