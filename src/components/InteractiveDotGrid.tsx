import React, { useEffect, useRef } from "react";

interface InteractiveDotGridProps {
  className?: string;
  dotSize?: number;
  gap?: number;
  glowRadius?: number;
  color?: string;
  activeColor?: string;
}

export const InteractiveDotGrid: React.FC<InteractiveDotGridProps> = ({
  className = "",
  dotSize = 2,
  gap = 24,
  glowRadius = 150,
  color = "rgba(168, 153, 132, 0.16)",
  activeColor = "#b8bb26",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // ── Mouse state ──
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovering: false,
      lastMoveTime: 0,
    };

    // ── Dot grid (typed arrays for fast iteration) ──
    let dotXs: Float32Array;
    let dotYs: Float32Array;
    let dotEnergies: Float32Array;
    let dotCount = 0;

    // ── Pre-rendered assets ──
    let idleLayer: HTMLCanvasElement | null = null;
    let glowSprite: HTMLCanvasElement | null = null;

    // Parse activeColor hex to rgb for rgba usage
    const parseHex = (hex: string) => {
      const h = hex.replace("#", "");
      return {
        r: parseInt(h.substring(0, 2), 16),
        g: parseInt(h.substring(2, 4), 16),
        b: parseInt(h.substring(4, 6), 16),
      };
    };
    const glowRgb = parseHex(activeColor);

    // Build a soft glow sprite — emulates the visual of shadowBlur
    const buildGlowSprite = () => {
      const spriteSize = 64;
      const c = document.createElement("canvas");
      c.width = spriteSize;
      c.height = spriteSize;
      const sctx = c.getContext("2d");
      if (!sctx) return c;

      const half = spriteSize / 2;
      const grad = sctx.createRadialGradient(half, half, 0, half, half, half);
      // Very soft falloff — mimics gaussian blur halo
      grad.addColorStop(0, `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},0.45)`);
      grad.addColorStop(0.08, `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},0.28)`);
      grad.addColorStop(0.2, `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},0.12)`);
      grad.addColorStop(0.45, `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},0.04)`);
      grad.addColorStop(1, `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},0)`);
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, spriteSize, spriteSize);
      return c;
    };

    // Pre-render the static idle dot grid
    const buildIdleLayer = () => {
      const c = document.createElement("canvas");
      c.width = Math.floor(width * dpr);
      c.height = Math.floor(height * dpr);
      const ictx = c.getContext("2d");
      if (!ictx) return c;
      ictx.scale(dpr, dpr);

      ictx.fillStyle = color;
      ictx.globalAlpha = 0.8;
      const half = dotSize / 2;
      for (let i = 0; i < dotCount; i++) {
        ictx.fillRect(dotXs[i] - half, dotYs[i] - half, dotSize, dotSize);
      }
      return c;
    };

    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      if (width === 0 || height === 0) return;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / gap);
      const rows = Math.ceil(height / gap);
      const offsetX = (width - (cols - 1) * gap) / 2;
      const offsetY = 14;
      dotCount = cols * rows;

      dotXs = new Float32Array(dotCount);
      dotYs = new Float32Array(dotCount);
      dotEnergies = new Float32Array(dotCount);

      let idx = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dotXs[idx] = (offsetX + c * gap) | 0;
          dotYs[idx] = (offsetY + r * gap) | 0;
          idx++;
        }
      }

      glowSprite = buildGlowSprite();
      idleLayer = buildIdleLayer();
    };

    setupCanvas();

    // ── Event handlers (getBoundingClientRect on each move is fine — it's fast) ──
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      if (cx >= -40 && cx <= width + 40 && cy >= -40 && cy <= height + 40) {
        mouse.targetX = cx;
        mouse.targetY = cy;
        mouse.isHovering = true;
        mouse.lastMoveTime = performance.now();
      } else {
        mouse.isHovering = false;
        mouse.targetX = -1000;
        mouse.targetY = -1000;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const t = e.touches[0];
        mouse.targetX = t.clientX - rect.left;
        mouse.targetY = t.clientY - rect.top;
        mouse.isHovering = true;
        mouse.lastMoveTime = performance.now();
      }
    };

    const handleTouchEnd = () => {
      mouse.isHovering = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("resize", handleResize);

    // ── Render loop ──
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.25;
      mouse.y += (mouse.targetY - mouse.y) * 0.25;

      const rSq = glowRadius * glowRadius;
      const isIdle = time - mouse.lastMoveTime > 4000;
      const mx = mouse.x;
      const my = mouse.y;
      const hovering = mouse.isHovering;

      // ── 1. Blit the static idle layer ──
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, width, height);
      if (idleLayer) {
        ctx.drawImage(idleLayer, 0, 0, width, height);
      }

      // ── 2. Update energies & draw glowing dots ──
      ctx.fillStyle = activeColor;

      for (let i = 0; i < dotCount; i++) {
        const dx = dotXs[i] - mx;
        const dy = dotYs[i] - my;
        const distSq = dx * dx + dy * dy;

        let targetEnergy = 0;

        if (hovering && distSq < rSq) {
          const dist = Math.sqrt(distSq);
          targetEnergy = 1 - dist / glowRadius;
          // pow(x, 1.3) approximation via cubic blend
          targetEnergy = targetEnergy * (0.7 + 0.3 * targetEnergy * targetEnergy);
          if (targetEnergy < 0) targetEnergy = 0;
        } else if (isIdle) {
          const wave = Math.sin(time * 0.0015 + dotXs[i] * 0.015 + dotYs[i] * 0.015);
          if (wave > 0.88) {
            targetEnergy = (wave - 0.88) * 1.2;
          }
        }

        const prevEnergy = dotEnergies[i];
        let energy: number;

        if (targetEnergy > prevEnergy) {
          energy = prevEnergy + (targetEnergy - prevEnergy) * 0.45;
        } else {
          energy = prevEnergy + (targetEnergy - prevEnergy) * (3.2 * dt);
        }

        if (energy < 0.003) energy = 0;
        dotEnergies[i] = energy;

        if (energy > 0.003) {
          // Soft glow halo via pre-rendered sprite
          const glowScale = energy * 10; // matches original shadowBlur = energy * 10
          const spriteDrawSize = 4 + glowScale * 2; // halo spread
          ctx.globalAlpha = energy * 0.6; // subtle, not overpowering
          if (glowSprite) {
            ctx.drawImage(
              glowSprite,
              dotXs[i] - spriteDrawSize / 2,
              dotYs[i] - spriteDrawSize / 2,
              spriteDrawSize,
              spriteDrawSize
            );
          }

          // Crisp core dot (same as original)
          const size = dotSize + energy * 2.2;
          ctx.globalAlpha = 0.3 + energy * 0.7;
          ctx.fillRect(
            (dotXs[i] - size / 2) | 0,
            (dotYs[i] - size / 2) | 0,
            (size + 0.5) | 0,
            (size + 0.5) | 0
          );
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [dotSize, gap, glowRadius, color, activeColor]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default InteractiveDotGrid;
