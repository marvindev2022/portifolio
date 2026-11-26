import { useEffect, useState } from "react";

const USER = "marvindev2022";

export interface GithubStats {
  repos?: number;
  contributions?: number;
  lastCommit?: { repo: string; message: string; date: string };
}

// ponytail: client-side, sem token; cada campo falha isolado e a UI usa fallback
export function useGithub(): GithubStats {
  const [s, setS] = useState<GithubStats>({});
  useEffect(() => {
    const set = (p: GithubStats) => setS((o) => ({ ...o, ...p }));
    fetch(`https://api.github.com/users/${USER}`)
      .then((r) => r.json())
      .then((d) => typeof d.public_repos === "number" && set({ repos: d.public_repos }))
      .catch(() => {});
    fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`)
      .then((r) => r.json())
      .then((d) => d?.total?.lastYear && set({ contributions: d.total.lastYear }))
      .catch(() => {});
    // events/public vem vazio nessa conta; usa o repo mais recente + seu último commit
    fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=1`)
      .then((r) => r.json())
      .then(([repo]) =>
        fetch(`https://api.github.com/repos/${USER}/${repo.name}/commits?per_page=1`)
          .then((r) => r.json())
          .then(([c]) =>
            set({ lastCommit: { repo: repo.name, message: c.commit.message.split("\n")[0], date: c.commit.author.date } })
          )
      )
      .catch(() => {});
  }, []);
  return s;
}
