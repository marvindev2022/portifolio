import { useEffect, useRef } from "react";

interface Props {
  isDarkMode: boolean;
}

const SPACING = 32;
const DOT_R = 1.4;
const ATTRACT_RADIUS = 200;
const ATTRACT_FORCE = 0.35;
const SPRING = 0.06;
const FRICTION = 0.68;

interface Dot {
  ox: number; oy: number;
  x: number;  y: number;
  vx: number; vy: number;
}

export default function MagnetGridCanvas({ isDarkMode }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const dotsRef = useRef<Dot[]>([]);
  const viewportMouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dotBase = isDarkMode ? "rgba(34,211,238," : "rgba(59,130,246,";
    const glowColor = isDarkMode ? "rgba(34,211,238,0.9)" : "rgba(59,130,246,0.7)";

    const init = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;
      canvas.width = w;
      canvas.height = h;
      const dots: Dot[] = [];
      for (let r = 0; r * SPACING <= h + SPACING; r++) {
        for (let c = 0; c * SPACING <= w + SPACING; c++) {
          const ox = c * SPACING;
          const oy = r * SPACING;
          dots.push({ ox, oy, x: ox, y: oy, vx: 0, vy: 0 });
        }
      }
      dotsRef.current = dots;
    };

    const onWindowMove = (e: MouseEvent) => {
      viewportMouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onWindowLeave = () => {
      viewportMouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onWindowMove);
    window.addEventListener("mouseleave", onWindowLeave);

    const ro = new ResizeObserver(() => init());
    ro.observe(canvas);
    init();

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      if (!w || !h) { frameRef.current = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w, h);

      const cr = canvas.getBoundingClientRect();
      const vx = viewportMouseRef.current.x;
      const vy = viewportMouseRef.current.y;
      const mx = vx < -100 ? -9999 : vx - cr.left;
      const my = vy < -100 ? -9999 : vy - cr.top;

      // Physics
      for (const d of dotsRef.current) {
        const dx = mx - d.x;
        const dy = my - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < ATTRACT_RADIUS && dist > 1) {
          const f = ((ATTRACT_RADIUS - dist) / ATTRACT_RADIUS) * ATTRACT_FORCE;
          d.vx += (dx / dist) * f * dist * 0.012;
          d.vy += (dy / dist) * f * dist * 0.012;
        }
        d.vx += (d.ox - d.x) * SPRING;
        d.vy += (d.oy - d.y) * SPRING;
        d.vx *= FRICTION;
        d.vy *= FRICTION;
        d.x += d.vx;
        d.y += d.vy;
      }

      // Render — pass 1: dim dots (no shadow)
      ctx.shadowBlur = 0;
      for (const d of dotsRef.current) {
        const disp = Math.sqrt((d.x - d.ox) ** 2 + (d.y - d.oy) ** 2);
        const brightness = Math.min(disp / 20, 1);
        if (brightness <= 0.08) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, DOT_R, 0, Math.PI * 2);
          ctx.fillStyle = `${dotBase}0.20)`;
          ctx.fill();
        }
      }

      // Render — pass 2: glowing dots (near mouse)
      ctx.shadowColor = glowColor;
      for (const d of dotsRef.current) {
        const disp = Math.sqrt((d.x - d.ox) ** 2 + (d.y - d.oy) ** 2);
        const brightness = Math.min(disp / 20, 1);
        if (brightness > 0.08) {
          const alpha = 0.28 + brightness * 0.65;
          const r = DOT_R + brightness * 2.2;
          ctx.shadowBlur = 3 + brightness * 14;
          ctx.beginPath();
          ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
          ctx.fillStyle = `${dotBase}${alpha.toFixed(2)})`;
          ctx.fill();
        }
      }
      ctx.shadowBlur = 0;

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onWindowMove);
      window.removeEventListener("mouseleave", onWindowLeave);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}
