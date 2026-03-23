"use client"; 

import { useState } from "react"; 
import Link from "next/link";

export default function Home() {

  const [emailCopiado, setEmailCopiado] = useState(false);


  const handleCopiarEmail = () => {
    navigator.clipboard.writeText("lucasalmeidafmoraes@gmail.com"); 
    
    setEmailCopiado(true); 
    
    setTimeout(() => {
      setEmailCopiado(false);
    }, 2500);
  };

  const skills = [
    { nome: "Java", categoria: "Linguagem", cor: "text-orange-500" },
    { nome: "Spring Boot", categoria: "Back-end", cor: "text-green-500" },
    { nome: "React & Next.js", categoria: "Front-end", cor: "text-cyan-400" },
    { nome: "Tailwind CSS / Bootstrap", categoria: "Front-end", cor: "text-teal-400" },
    { nome: "JavaScript / TS", categoria: "Linguagem", cor: "text-yellow-400" },
    { nome: "Bancos SQL / Oracle / Mongo", categoria: "Dados", cor: "text-blue-400" },
    { nome: "Git & GitHub", categoria: "Ferramenta", cor: "text-gray-300" },
    { nome: "VPS", categoria: "Infra", cor: "text-purple-400" },
  ];

  const projetos = [
    {
      titulo: "ZenLog",
      descricao: "ZenLog é um diário digital de bem-estar corporativo que permite aos colaboradores registrarem suas percepções emocionais e hábitos diários. A plataforma gera panoramas sobre a saúde mental das equipes, utilizando IA para recomendações personalizadas de atividades para desestressar",
      tecnologias: ["Java", "Spring Boot", "PostgreSQL", "Docker", "HTML"],
      linkGithub: "https://github.com/LucasAlmeida-cmd/gs-java-ZenLog",
      linkAoVivo: "https://zenlog.lucasalmeidadev.com.br",
      corFundo: "from-white to-blue-600",
    },
    {
      titulo: "Figan Tintas",
      descricao: "Catálogo digital moderno e responsivo para uma loja de tintas físicas, focado em alta performance.",
      tecnologias: ["Next.js", "Tailwind CSS", "React"],
      linkGithub: "https://github.com/LucasAlmeida-cmd/Figan-Tintas",
      linkAoVivo: "https://figantintas.com.br/",
      corFundo: "from-red-600 to-yellow-500",
    },
    {
      titulo: "MotoFindr",
      descricao: "O projeto MotoFindr surge para resolver um desafio crítico enfrentado pela Mottu: a dificuldade de gerenciar e localizar motos dentro dos pátios devido à imprecisão do GPS em espaços curtos e à falta de um sistema eficiente de registro. E tem com foco apenas o back-end da solução.",
      tecnologias: ["Java", "Spring Boot", "Docker"],
      linkGithub: "https://github.com/LucasAlmeida-cmd/challenge-mottu",
      linkAoVivo: "#",
      corFundo: "from-green-600 to-black-600",
    },
    {
      titulo: "API-E-commerce",
      descricao: "Backend robusto criado para gerenciar um e-commerce, com usuário e admins utilizando autenticação.",
      tecnologias: ["Java", "Spring Boot", "PostgreSQL"],
      linkGithub: "https://github.com/LucasAlmeida-cmd/API-E-commerce",
      linkAoVivo: "#",
      corFundo: "from-purple-600 to-black-600",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 flex flex-col items-center pt-6 selection:bg-blue-500 selection:text-white">
      
      <section className="max-w-4xl mx-auto text-center space-y-8 mt-20 md:mt-32 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Olá, eu sou o <span className="text-blue-500 hover:text-blue-400 transition-colors">Lucas</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-300">
          Desenvolvedor Full Stack <span className="text-blue-400">(Java & React)</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Transformo ideias em aplicações web reais. Focado em criar interfaces modernas, código limpo e sistemas robustos que resolvem problemas reais.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link href="#projetos" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
            Ver meus Projetos
          </Link>
          <a href="https://github.com/LucasAlmeida-cmd" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
            Acessar GitHub
          </a>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto mt-32 px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Minhas Habilidades</h3>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center group cursor-default">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-slate-400 transition-colors">{skill.categoria}</span>
              <span className={`text-lg font-bold ${skill.cor}`}>{skill.nome}</span>
            </div>
          ))}
        </div>
      </section>


      <section id="projetos" className="w-full max-w-6xl mx-auto mt-32 scroll-mt-20 px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Projetos em Destaque</h3>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">Alguns dos meus trabalhos recentes e de estudo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all duration-300 flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">

              <div className={`h-48 w-full bg-gradient-to-br ${projeto.corFundo} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                <span className="text-white font-bold text-2xl tracking-wider shadow-sm px-4 text-center">
                  {projeto.titulo.split(' ')[0]}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-slate-100 mb-2">{projeto.titulo}</h4>
                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.tecnologias.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a href={projeto.linkAoVivo} target="_blank" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-center py-2 rounded-lg font-semibold transition-colors text-sm">
                    Ver ao Vivo
                  </a>
                  <a href={projeto.linkGithub} target="_blank" className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-2 rounded-lg font-semibold transition-colors text-sm">
                    Código fonte
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

  
      <section id="contato" className="w-full max-w-3xl mx-auto mt-32 mb-20 text-center scroll-mt-20 px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Vamos Trabalhar Juntos?</h3>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos em desenvolvimento web e back-end. Se você tem uma vaga, um projeto ou quer apenas trocar uma ideia, me mande uma mensagem!
        </p>


        <div className="flex flex-wrap justify-center gap-4">
          
 
          <button 
            onClick={handleCopiarEmail}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-1 border cursor-pointer ${
              emailCopiado 
                ? "bg-green-600 border-green-500 text-white shadow-lg shadow-green-500/20" 
                : "bg-slate-800 hover:bg-slate-700 text-white border-slate-700 hover:border-slate-500"
            }`}
          >
            {emailCopiado ? "✅ E-mail Copiado!" : "✉️ Copiar E-mail"}
          </button>

          <a href="https://www.linkedin.com/in/lucas-almeida-fernandes-de-moraes/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/20">
            💼 LinkedIn
          </a>
          <a href="https://wa.me/5511984067514" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-green-500/20">
            📱 WhatsApp
          </a>
          <a href="https://github.com/LucasAlmeida-cmd" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all hover:-translate-y-1 border border-slate-700 hover:border-slate-500">
            💻 GitHub
          </a>
        </div>
      </section>

      <footer className="w-full border-t border-slate-800/50 py-8 text-center text-slate-500 mt-auto bg-slate-900/50">
        <p>
          © {new Date().getFullYear()} Lucas Almeida. Desenvolvido com <span className="text-blue-400 font-semibold">Next.js</span> e <span className="text-teal-400 font-semibold">Tailwind CSS</span>.
        </p>
      </footer>

    </main>
  );
}