import { useContextPage } from "../context";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "PWA",
    ],
  },
  {
    label: "Backend",
    skills: ["Python", "FastAPI", "Flask", "GraphQL", "Celery", "Redis"],
  },
  {
    label: "Data & Infra",
    skills: ["PostgreSQL", "Supabase", "Docker", "Kubernetes", "GKE"],
  },
  {
    label: "Tooling",
    skills: [
      "Turborepo",
      "Apollo Federation",
      "Vercel",
      "pnpm",
      "Git",
    ],
  },
];

export default function Skills() {
  const { isDarkMode } = useContextPage();

  const tagClass = isDarkMode
    ? "bg-card border border-border text-muted hover:text-light hover:border-accent transition-colors duration-150"
    : "bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-accent transition-colors duration-150";

  const labelClass = isDarkMode ? "text-muted-dark" : "text-zinc-400";

  return (
    <section className="w-full py-16 px-6 md:px-16 xl:px-32">
      <h2
        className={`text-xs font-mono font-semibold uppercase tracking-widest mb-10 ${labelClass}`}
      >
        Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <p
              className={`text-xs font-mono font-semibold uppercase tracking-widest mb-4 ${labelClass}`}
            >
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium cursor-default ${tagClass}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
