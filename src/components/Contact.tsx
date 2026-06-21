import { motion } from "framer-motion";
import { useContextPage } from "../context";
import Footer from "./Footer";
import MagnetGridCanvas from "./MagnetGridCanvas";

const LINKS = [
  {
    label: "Email",
    value: "mavirolero@gmail.com",
    href: "mailto:mavirolero@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+55 21 99334-2879",
    href: "https://wa.me/5521993342879",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/marcus-roza",
    href: "https://linkedin.com/in/marcus-roza",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/marvindev2022",
    href: "https://github.com/marvindev2022",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

export default function RenderContact() {
  const { isDarkMode } = useContextPage();

  const dark = isDarkMode;

  return (
    <>
      <section
        className={`relative w-full min-h-[calc(100vh-6rem)] flex flex-col overflow-hidden ${dark ? "text-white" : "text-zinc-900"}`}
      >
        {/* Full-page dot grid — canvas reacts to mouse anywhere */}
        <div className="absolute inset-0">
          <MagnetGridCanvas isDarkMode={isDarkMode} />
        </div>

        {/* Scanlines overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
          }}
        />

        {/* Left-side gradient so text stays readable over the grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dark
              ? "linear-gradient(to right, rgba(9,9,11,0.97) 20%, rgba(9,9,11,0.75) 48%, rgba(9,9,11,0.10) 72%, transparent)"
              : "linear-gradient(to right, rgba(255,255,255,0.96) 20%, rgba(255,255,255,0.70) 48%, rgba(255,255,255,0.10) 72%, transparent)",
          }}
        />

        {/* Ghost MR — centered in the right empty area */}
        <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none" style={{ left: "50%", transform: "translate(8%, -50%)" }}>
          <p
            className="font-black tracking-tighter leading-none"
            style={{
              fontSize: "clamp(7rem,13vw,13rem)",
              opacity: dark ? 0.07 : 0.05,
              color: dark ? "#22d3ee" : "#3b82f6",
              textShadow: dark ? "0 0 80px rgba(34,211,238,0.5)" : "none",
            }}
            aria-hidden="true"
          >
            MR
          </p>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col justify-center flex-1 px-6 md:px-16 xl:px-24 py-16 max-w-xl">

          {/* Terminal label */}
          <div className="flex items-center gap-2 mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: dark ? "#22d3ee" : "#3b82f6" }}
            />
            <p
              className="text-[10px] font-mono uppercase tracking-[0.25em]"
              style={{ color: dark ? "#22d3ee" : "#3b82f6" }}
            >
              contact.init
            </p>
          </div>

          <h1
            className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.0] mb-5 whitespace-nowrap"
            style={dark ? { textShadow: "0 0 60px rgba(34,211,238,0.12)" } : {}}
          >
            Vamos{" "}
            <span style={{ color: dark ? "#22d3ee" : "#3b82f6", textShadow: dark ? "0 0 30px rgba(34,211,238,0.4)" : "none" }}>
              falar.
            </span>
          </h1>

          <p
            className="text-sm mb-10 leading-relaxed"
            style={{ color: dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)", maxWidth: "26rem" }}
          >
            Disponível para projetos freelance, posições de engenharia ou uma conversa técnica.
          </p>

          <div className="flex flex-col gap-2.5">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 px-5 py-3.5 rounded-xl group transition-all duration-200"
                style={{
                  background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                  border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.1)",
                  backdropFilter: "blur(8px)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: "easeOut" }}
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = dark
                    ? "1px solid rgba(34,211,238,0.35)"
                    : "1px solid rgba(59,130,246,0.4)";
                  (e.currentTarget as HTMLElement).style.background = dark
                    ? "rgba(34,211,238,0.04)"
                    : "rgba(59,130,246,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = dark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(0,0,0,0.1)";
                  (e.currentTarget as HTMLElement).style.background = dark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.03)";
                }}
              >
                <span style={{ color: dark ? "rgba(34,211,238,0.7)" : "rgba(59,130,246,0.8)" }} className="flex-shrink-0">
                  {link.icon}
                </span>
                <div className="min-w-0">
                  <p
                    className="text-[10px] font-mono uppercase tracking-[0.18em] mb-0.5"
                    style={{ color: dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)" }}
                  >
                    {link.label}
                  </p>
                  <p className="text-sm font-medium truncate" style={{ color: dark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.85)" }}>
                    {link.value}
                  </p>
                </div>
                <svg
                  className="ml-auto w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ color: dark ? "#22d3ee" : "#3b82f6" }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
