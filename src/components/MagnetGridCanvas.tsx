import { useEffect, useRef } from "react";

interface Props {
  isDarkMode: boolean;
}

const SPACING = 30;
const DOT_R = 1.5;
const ATTRACT_RADIUS = 180;
const ATTRACT_FORCE = 0.30;
const SPRING = 0.07;
const FRICTION = 0.70;

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

    const dotColor = isDarkMode ? "rgba(94,129,244," : "rgba(59,130,246,";

    const init = () => {
      // Use offsetWidth/Height from the positioned wrapper — canvas fills it absolutely
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

    // ResizeObserver watches the canvas wrapper so we re-init when size changes
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

      for (const d of dotsRef.current) {
        const dx = mx - d.x;
        const dy = my - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < ATTRACT_RADIUS && dist > 1) {
          const f = ((ATTRACT_RADIUS - dist) / ATTRACT_RADIUS) * ATTRACT_FORCE;
          d.vx += (dx / dist) * f * dist * 0.013;
          d.vy += (dy / dist) * f * dist * 0.013;
        }

        d.vx += (d.ox - d.x) * SPRING;
        d.vy += (d.oy - d.y) * SPRING;
        d.vx *= FRICTION;
        d.vy *= FRICTION;
        d.x += d.vx;
        d.y += d.vy;

        const disp = Math.sqrt((d.x - d.ox) ** 2 + (d.y - d.oy) ** 2);
        const brightness = Math.min(disp / 22, 1);
        const alpha = 0.22 + brightness * 0.65;
        const r = DOT_R + brightness * 1.8;

        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}${alpha.toFixed(2)})`;
        ctx.fill();
      }

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

  // Canvas is absolute so it always fills the positioned parent regardless of how height resolves
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}
