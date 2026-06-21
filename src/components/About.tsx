import { useRef } from "react";
import { useContextPage } from "../context";
import Footer from "./Footer";
import Skills from "./Skills";
import ParticleCanvas from "./ParticleCanvas";

const EXPERIENCE = {
  company: "Clarke Energy",
  role: "Engenheiro de Software",
  period: "2022 – presente",
  highlights: [
    "Subgraphs GraphQL em Apollo Federation v2 — FastAPI + Flask",
    "Workers Celery em Kubernetes (GKE) — projeções tarifárias ACL",
    "Frontends React 18 + TypeScript integrados a ~20 microserviços",
    "Calculadora de energia + relatórios regulatórios em produção",
  ],
};

const PERSONAL = [
  { name: "TreinoZap", detail: "SaaS p/ personal trainers — PWA, WhatsApp, push VAPID, Realtime.", color: "#6366f1" },
  { name: "Oficina Mecânica", detail: "Multi-tenant OS — portal por token UUID, chat RT, Storage. 2 clientes.", color: "#f59e0b" },
  { name: "PDV Auto-Peças", detail: "Ponto de venda — catálogo, carrinho, estoque via RPCs atômicos.", color: "#3b82f6" },
];

const STATS = [
  { value: "3+", label: "anos na Clarke" },
  { value: "3", label: "SaaS como produto" },
  { value: "6+", label: "projetos em prod." },
  { value: "2", label: "clientes na Oficina" },
];

export default function About() {
  const { isDarkMode } = useContextPage();
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  const mutedText = isDarkMode ? "text-muted" : "text-zinc-500";
  const dimText = isDarkMode ? "text-muted-dark" : "text-zinc-400";
  const divider = isDarkMode ? "border-border" : "border-zinc-200";
  const cardBg = isDarkMode ? "bg-card border border-border" : "bg-zinc-50 border border-zinc-200";
  const tagBg = isDarkMode ? "bg-surface border border-border text-muted-dark" : "bg-white border border-zinc-200 text-zinc-500";

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };
  const handleMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

  return (
    <section
      className={`relative w-full overflow-hidden ${isDarkMode ? "text-light" : "text-dark"}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ParticleCanvas isDarkMode={isDarkMode} mouseRef={mouseRef} />

      {/* Bio + Experience — first viewport */}
      <div className="relative z-10 px-6 md:px-16 xl:px-32 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

          {/* Left — bio */}
          <div className="flex flex-col">
            <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${dimText}`}>Sobre</p>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight leading-tight whitespace-nowrap">
              Engenheiro{" "}
              <span className={isDarkMode ? "text-accent-light" : "text-accent"}>full-cycle.</span>
            </h1>

            <div className={`space-y-3 text-sm leading-relaxed ${mutedText} mb-6`}>
              <p>
                Trabalho na{" "}
                <span className={isDarkMode ? "text-light font-medium" : "text-dark font-medium"}>Clarke Energy</span>
                {" "}— maior plataforma de migração para o mercado livre de energia do Brasil — construindo a infraestrutura de software para análises tarifárias, relatórios e contratos.
              </p>
              <p>
                Meu diferencial é o{" "}
                <span className={isDarkMode ? "text-light font-medium" : "text-dark font-medium"}>ciclo completo</span>
                : do problema ao código em produção — arquitetura, implementação, deploy e monitoração.
              </p>
              <p>
                Fora da Clarke, construo SaaS como produto real — com clientes, receita e roadmap.
              </p>
            </div>

            <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${dimText}`}>Projetos próprios</p>
            <div className="space-y-2">
              {PERSONAL.map((p) => (
                <div key={p.name} className={`rounded-xl p-3 ${cardBg}`} style={{ borderLeft: `2px solid ${p.color}` }}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-bold">{p.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ color: p.color, background: `${p.color}18` }}>live</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${mutedText}`}>{p.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — experience + stats + stack */}
          <div className="flex flex-col justify-between">
            <div>
              <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${dimText}`}>Experiência</p>
              <div className={`rounded-xl p-5 ${cardBg} mb-5`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-bold text-sm mb-0.5">{EXPERIENCE.company}</p>
                    <p className={`text-xs ${mutedText}`}>{EXPERIENCE.role}</p>
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded whitespace-nowrap flex-shrink-0 ${tagBg}`}>
                    {EXPERIENCE.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {EXPERIENCE.highlights.map((h, i) => (
                    <li key={i} className={`flex gap-2 text-xs ${mutedText}`}>
                      <span className={`flex-shrink-0 ${isDarkMode ? "text-accent-light" : "text-accent"}`} aria-hidden>→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${dimText}`}>Números</p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {STATS.map(({ value, label }) => (
                  <div key={label} className={`rounded-xl p-3 ${cardBg}`}>
                    <p className="text-2xl font-black tracking-tight mb-0.5">{value}</p>
                    <p className={`text-xs font-mono ${dimText}`}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack principal — preenche espaço restante */}
            <div>
              <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${dimText}`}>Stack principal</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React 18", "TypeScript", "Python", "FastAPI", "GraphQL",
                  "Supabase", "PostgreSQL", "Celery", "Kubernetes", "Docker",
                  "Turborepo", "Vite", "Tailwind CSS", "Apollo Federation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded text-[11px] font-mono ${tagBg}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Skills */}
      <div className={`relative z-10 border-t ${divider}`}>
        <Skills />
      </div>

      <Footer scrollToTop={true} />
    </section>
  );
}
