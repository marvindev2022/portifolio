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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/marcus-roza",
    href: "https://linkedin.com/in/marcus-roza",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

export default function RenderContact() {
  const { isDarkMode } = useContextPage();

  const base = isDarkMode ? "text-light" : "text-dark";
  const mutedText = isDarkMode ? "text-muted" : "text-zinc-500";
  const dimText = isDarkMode ? "text-muted-dark" : "text-zinc-400";
  const cardBg = isDarkMode
    ? "bg-card border border-border hover:border-accent-light"
    : "bg-white border border-zinc-200 hover:border-accent";

  return (
    <>
      <section className={`w-full min-h-[calc(100vh-6rem)] flex flex-col ${base}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 flex-1">

          {/* Left — content */}
          <div className="flex flex-col justify-center px-6 md:px-16 xl:px-20 py-16">
            <p className={`text-xs font-mono uppercase tracking-widest mb-6 ${dimText}`}>
              Entre em contato
            </p>

            {/* whitespace-nowrap keeps the headline on its designed lines */}
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-4 whitespace-nowrap">
              Vamos{" "}
              <span className={isDarkMode ? "text-accent-light" : "text-accent"}>falar.</span>
            </h1>

            <p className={`text-base mb-10 max-w-md ${mutedText}`}>
              Disponível para projetos freelance, posições de engenharia ou uma conversa técnica.
            </p>

            <div className="flex flex-col gap-3 max-w-sm">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-colors duration-150 ${cardBg} group`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
                  whileHover={{ x: 6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                >
                  <span className={`${dimText} group-hover:text-accent-light transition-colors flex-shrink-0`}>
                    {link.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-mono font-medium uppercase tracking-widest text-muted mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium truncate">{link.value}</p>
                  </div>
                  <svg
                    className={`ml-auto w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${dimText}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — magnet grid fills absolutely inside this relative wrapper */}
          <div className="hidden lg:block relative overflow-hidden">
            <MagnetGridCanvas isDarkMode={isDarkMode} />

            {/* Ghost initials overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <p
                className="text-[clamp(5rem,10vw,9rem)] font-black tracking-tighter leading-none opacity-[0.04]"
                aria-hidden="true"
              >
                MR
              </p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
