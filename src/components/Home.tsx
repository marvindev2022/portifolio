import { useRef } from "react";
import { motion } from "framer-motion";
import { useContextPage } from "../context";
import Footer from "./Footer";
import ParticleCanvas from "./ParticleCanvas";
import { useMagnetic } from "../hooks/useMagnetic";

const FEATURED = [
  {
    name: "TreinoZap",
    sub: "SaaS · personal trainers",
    badge: "Em produção",
    color: "#6366f1",
    tech: "React · Supabase · PWA",
  },
  {
    name: "Oficina Mecânica",
    sub: "SaaS · mecânicas multi-tenant",
    badge: "2 clientes",
    color: "#f59e0b",
    tech: "React · Supabase · Realtime",
  },
  {
    name: "PDV Auto-Peças",
    sub: "Sistema de ponto de venda",
    badge: "Em produção",
    color: "#3b82f6",
    tech: "React · PostgreSQL · RPC",
  },
];

function MagneticBtn({
  children,
  className,
  style,
  onClick,
  href,
  target,
  rel,
}: {
  children: React.ReactNode;
  className: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}) {
  const { sx, sy, onMove, onLeave } = useMagnetic(0.38);

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={{ x: sx, y: sy, ...style }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      className={className}
      style={{ x: sx, y: sy, ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default function Home() {
  const { isDarkMode, setSelectedPage } = useContextPage();
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  const base = isDarkMode ? "text-light" : "text-dark";
  const mutedText = isDarkMode ? "text-muted" : "text-zinc-500";
  const dimText = isDarkMode ? "text-muted-dark" : "text-zinc-400";
  const divider = isDarkMode ? "border-border" : "border-zinc-200";
  const btnSecondary = isDarkMode
    ? "border border-border hover:border-accent-light text-light hover:text-accent-light"
    : "border border-zinc-300 hover:border-accent text-dark hover:text-accent";
  const cardBg = isDarkMode
    ? "bg-card border-border hover:border-zinc-600"
    : "bg-white border-zinc-200 hover:border-zinc-400";

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };
  const handleMouseLeave = () => {
    mouseRef.current = { x: -9999, y: -9999 };
  };

  return (
    <>
      <section
        className={`relative flex flex-col h-fit px-6 md:px-16 xl:px-32 ${base} overflow-hidden`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Particle background */}
        <ParticleCanvas isDarkMode={isDarkMode} mouseRef={mouseRef} />

        {/* Content above canvas */}
        <div className="relative z-10 flex flex-col justify-center flex-1 py-6 max-w-4xl">

          <p className={`text-xs font-mono font-medium mb-5 tracking-widest uppercase ${dimText}`}>
            Engenheiro de Software
          </p>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] mb-4 tracking-tight whitespace-nowrap">
            Marcus{" "}
            <span style={{
              color: isDarkMode ? "#22d3ee" : "#3b82f6",
              textShadow: isDarkMode ? "0 0 28px rgba(34,211,238,0.35)" : "none",
            }}>
              Roza.
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl leading-relaxed mb-2 max-w-2xl ${mutedText}`}>
            Construo SaaS do zero — arquitetura, backend,
            frontend e deploy em produção.
          </p>

          <p className={`font-mono text-sm mb-5 flex flex-wrap gap-x-2 gap-y-1 ${dimText}`}>
            <span>Clarke Energy</span>
            <span>·</span>
            <span>Rio de Janeiro, Brasil</span>
            <span>·</span>
            <span>3+ anos</span>
          </p>

          <div className="flex items-center gap-3 flex-wrap mb-5">
            <MagneticBtn
              onClick={() => setSelectedPage("Projetos")}
              className="px-6 py-3 text-white rounded-lg font-semibold text-sm transition-all duration-150 cursor-pointer"
              style={{
                background: isDarkMode ? "#22d3ee" : "#3b82f6",
                boxShadow: isDarkMode ? "0 0 18px rgba(34,211,238,0.25)" : "none",
              }}
            >
              Ver projetos
            </MagneticBtn>
            <MagneticBtn
              href="https://docs.google.com/document/d/10aU8ROLUuQvDvtoNuJvvC8p1GKYZJQrWzwO8fJKWLjQ/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-150 ${btnSecondary}`}
            >
              Currículo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </MagneticBtn>
          </div>

          <div className={`flex items-center gap-6 ${dimText}`}>
            {[
              { label: "GitHub", href: "https://github.com/marvindev2022" },
              { label: "LinkedIn", href: "https://linkedin.com/in/marcus-roza" },
              { label: "WhatsApp", href: "https://wa.me/5521993342879" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`text-sm font-medium transition-colors duration-150 ${isDarkMode ? "hover:text-light" : "hover:text-dark"}`}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => setSelectedPage("Contact")}
              className={`text-sm font-medium transition-colors duration-150 ${isDarkMode ? "hover:text-light" : "hover:text-dark"} cursor-pointer`}
            >
              Email
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className={`relative z-10 border-t ${divider}`} />

        {/* Stats bar */}
        <div className={`relative z-10 flex flex-wrap gap-8 py-2 ${dimText}`}>
          {[
            { value: "3", label: "SaaS em produção" },
            { value: "3+", label: "anos na Clarke Energy" },
            { value: "6+", label: "projetos entregues" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className={`text-2xl font-black tracking-tight ${isDarkMode ? "text-light" : "text-dark"}`}>{value}</span>
              <span className="text-xs font-mono">{label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={`relative z-10 border-t ${divider}`} />

        {/* Featured projects */}
        <div className="relative z-10 py-3 pb-4">
          <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${dimText}`}>
            Projetos em destaque
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {FEATURED.map((p) => (
              <motion.button
                key={p.name}
                onClick={() => setSelectedPage("Projetos")}
                className={`text-left rounded-xl border p-4 transition-all duration-150 ${cardBg} group cursor-pointer`}
                style={{ borderLeft: `2px solid ${p.color}` }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold">{p.name}</span>
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded"
                    style={{ color: p.color, background: `${p.color}18` }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: p.color }} />
                    {p.badge}
                  </span>
                </div>
                <p className={`text-xs mb-2 ${mutedText}`}>{p.sub}</p>
                <p className={`text-[11px] font-mono ${dimText}`}>
                  {p.tech}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

      </section>
      <Footer active={true} />
    </>
  );
}
