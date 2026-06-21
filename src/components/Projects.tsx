import { useContextPage } from "../context";
import Footer from "./Footer";
import { useState } from "react";
import treinozapImg from "../assets/projects/treinozap.png";
import treinozapFinanceiroImg from "../assets/projects/treinozap-financeiro.png";
import pdvImg from "../assets/projects/pdv.png";
import oficinaImg from "../assets/projects/oficina.png";
import oficinaOrdensImg from "../assets/projects/oficina-ordens.png";

interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  badge: string;
  badgeType: "live" | "professional";
  accentColor: string;
  images: string[];
  imageAlts: string[];
}

const PROJECTS: Project[] = [
  {
    name: "TreinoZap",
    tagline: "SaaS — gestão de personal trainers",
    description:
      "Plataforma completa para gestão de alunos, treinos e cobranças. PWA com push notifications nativas via VAPID, chat em tempo real e integração WhatsApp para convites e lembretes automáticos.",
    tags: ["React 18", "TypeScript", "Supabase", "PWA", "Edge Functions", "Turborepo"],
    badge: "Em produção",
    badgeType: "live",
    accentColor: "#6366f1",
    images: [treinozapFinanceiroImg, treinozapImg],
    imageAlts: [
      "Tela financeiro — MRR, planos ativos e contratos",
      "Dashboard de alunos e treinos",
    ],
  },
  {
    name: "PDV Auto-Peças",
    tagline: "Sistema de ponto de venda e estoque",
    description:
      "PDV completo com catálogo de peças, carrinho de venda e histórico de movimentações. Controle de estoque via RPCs atômicos no PostgreSQL — sem concorrência, sem inconsistência.",
    tags: ["React 18", "TypeScript", "Supabase", "PostgreSQL", "Turborepo"],
    badge: "Em produção",
    badgeType: "live",
    accentColor: "#3b82f6",
    images: [pdvImg],
    imageAlts: ["Dashboard com métricas de receita e vendas"],
  },
  {
    name: "Oficina Mecânica",
    tagline: "SaaS multi-tenant — mecânicas automotivas",
    description:
      "Sistema de OS com portal público para o cliente por token UUID (sem login), registro de avarias com fotos, chat em tempo real e controle de veículos. Dois clientes em produção.",
    tags: ["React 18", "TypeScript", "Supabase", "Realtime", "RLS", "Storage"],
    badge: "2 clientes ativos",
    badgeType: "live",
    accentColor: "#f59e0b",
    images: [oficinaImg, oficinaOrdensImg],
    imageAlts: [
      "Dashboard — OS por status, receita e ordens recentes",
      "Lista de ordens de serviço com filtros por status",
    ],
  },
  {
    name: "Clarke Energy",
    tagline: "Plataforma de energia no mercado livre",
    description:
      "Subgraph GraphQL em Apollo Federation, workers Celery em Kubernetes (GKE), microserviços Python com FastAPI e Flask, e frontends React integrados a dezenas de serviços de energia.",
    tags: ["GraphQL Federation", "Python", "FastAPI", "Kubernetes", "Celery", "React"],
    badge: "Profissional",
    badgeType: "professional",
    accentColor: "#5e81f4",
    images: [],
    imageAlts: [],
  },
];

function ProjectCard({
  project,
  isDarkMode,
}: {
  project: Project;
  isDarkMode: boolean;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  const cardBg = isDarkMode
    ? "bg-card border-border hover:border-zinc-600"
    : "bg-white border-zinc-200 hover:border-zinc-400";
  const mutedText = isDarkMode ? "text-muted" : "text-zinc-500";
  const tagClass = isDarkMode
    ? "bg-surface border border-border text-muted-dark font-mono"
    : "bg-zinc-50 border border-zinc-200 text-zinc-500 font-mono";
  const badgeClass =
    project.badgeType === "live"
      ? isDarkMode
        ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20"
        : "text-emerald-600 bg-emerald-50 border border-emerald-200"
      : isDarkMode
      ? "text-blue-400 bg-blue-400/10 border border-blue-400/20"
      : "text-blue-600 bg-blue-50 border border-blue-200";

  const hasImages = project.images.length > 0;
  const hasMultiple = project.images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % project.images.length);
  };

  return (
    <article
      className={`flex flex-col rounded-xl border overflow-hidden transition-all duration-150 ${cardBg} group`}
      style={{ borderLeft: `2px solid ${project.accentColor}` }}
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {hasImages ? (
          <>
            <img
              key={imgIndex}
              src={project.images[imgIndex]}
              alt={project.imageAlts[imgIndex]}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            {hasMultiple && (
              <>
                {/* Arrows */}
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  style={{ background: "rgba(0,0,0,.55)", color: "#fff" }}
                  aria-label="Imagem anterior"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  style={{ background: "rgba(0,0,0,.55)", color: "#fff" }}
                  aria-label="Próxima imagem"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                      className="w-1.5 h-1.5 rounded-full transition-all duration-150"
                      style={{ background: i === imgIndex ? "#fff" : "rgba(255,255,255,.4)" }}
                      aria-label={`Imagem ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div
            className="w-full h-full flex items-end p-4"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}18 0%, ${project.accentColor}08 100%)`,
            }}
          >
            <span
              className="text-xs font-mono font-medium px-2 py-1 rounded"
              style={{
                color: project.accentColor,
                background: `${project.accentColor}15`,
              }}
            >
              screenshot em breve
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold mb-0.5">{project.name}</h2>
            <p className={`text-xs ${mutedText}`}>{project.tagline}</p>
          </div>
          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium whitespace-nowrap flex-shrink-0 ${badgeClass}`}>
            {project.badgeType === "live" && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
            )}
            {project.badge}
          </span>
        </div>

        <p className={`text-xs leading-relaxed flex-1 ${mutedText}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-2 py-0.5 rounded text-[11px] ${tagClass}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function RenderProjects() {
  const { isDarkMode } = useContextPage();
  const mutedText = isDarkMode ? "text-muted-dark" : "text-zinc-400";

  return (
    <section className={`w-full min-h-full ${isDarkMode ? "text-light" : "text-dark"}`}>
      <div className="px-6 md:px-16 xl:px-32 py-16">
        <h1 className="text-4xl sm:text-5xl font-black mb-3 tracking-tight">Projetos</h1>
        <p className={`text-sm font-mono mb-12 ${mutedText}`}>
          SaaS independentes e trabalho profissional — todos em produção.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
