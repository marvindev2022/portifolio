import { useEffect, useRef } from "react";

interface Props {
  isDarkMode: boolean;
  mouseRef: React.RefObject<{ x: number; y: number }>;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseVx: number;
  baseVy: number;
}

const MAX_SPEED = 1.4;
const REPEL_RADIUS = 110;
const LINE_DIST = 130;
const DAMPING = 0.985;
const REPEL_FORCE = 1.1;

export default function ParticleCanvas({ isDarkMode, mouseRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const accentRgb = isDarkMode ? "94,129,244" : "59,130,246";
    const dotRgb = isDarkMode ? "100,100,120" : "160,160,170";

    const init = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      const count = Math.min(Math.floor((w * h) / 13000), 90);
      particlesRef.current = Array.from({ length: count }, () => {
        const vx = (Math.random() - 0.5) * 0.5;
        const vy = (Math.random() - 0.5) * 0.5;
        return { x: Math.random() * w, y: Math.random() * h, vx, vy, baseVx: vx, baseVy: vy, r: Math.random() * 1.4 + 0.6 };
      });
    };

    const onResize = () => init();
    window.addEventListener("resize", onResize);
    init();

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const ps = particlesRef.current;
      const cr = canvas.getBoundingClientRect();
      const raw = mouseRef.current ?? { x: -9999, y: -9999 };
      const mx = raw.x < 0 ? -9999 : raw.x - cr.left;
      const my = raw.y < 0 ? -9999 : raw.y - cr.top;

      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < REPEL_RADIUS && d > 0.5) {
          const f = ((REPEL_RADIUS - d) / REPEL_RADIUS) * REPEL_FORCE;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        } else {
          // Drift back toward base velocity
          p.vx += (p.baseVx - p.vx) * 0.012;
          p.vy += (p.baseVy - p.vy) * 0.012;
        }

        p.vx *= DAMPING;
        p.vy *= DAMPING;
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED;
          p.vy = (p.vy / speed) * MAX_SPEED;
        }
      }

      // Lines
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINE_DIST) {
            const alpha = (1 - d / LINE_DIST) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${accentRgb},${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse connection lines
      for (const p of ps) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < REPEL_RADIUS * 1.6) {
          const alpha = (1 - d / (REPEL_RADIUS * 1.6)) * 0.35;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${accentRgb},${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.9;
          ctx.moveTo(mx, my);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }

      // Dots
      for (const p of ps) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const nearMouse = Math.sqrt(dx * dx + dy * dy) < REPEL_RADIUS * 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = nearMouse
          ? `rgba(${accentRgb},0.9)`
          : `rgba(${dotRgb},0.55)`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [isDarkMode, mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
