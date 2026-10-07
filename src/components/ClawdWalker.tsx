import React, { useState, useEffect } from "react";

interface ClawdWalkerProps {
  isWalking?: boolean;
  direction?: 1 | -1; // 1: facing right, -1: facing left
  className?: string;
  size?: number; // width in px
  onClick?: () => void;
}

export const ClawdWalker: React.FC<ClawdWalkerProps> = ({
  isWalking = false,
  direction = 1,
  className = "",
  size = 46,
  onClick,
}) => {
  const [frame, setFrame] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Walk cycle animation: 4 frames
  useEffect(() => {
    if (!isWalking) {
      setFrame(0);
      return;
    }

    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 110);

    return () => clearInterval(interval);
  }, [isWalking]);

  // Idle occasional eye blink
  useEffect(() => {
    if (isWalking) return;

    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.35) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 160);
      }
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, [isWalking]);

  // Exact 128px pixel grid mapping:
  // Base 4 legs:
  // Leg 1 (outer left):  x = 384, width = 128
  // Eye 1 (gap):         x = 512, width = 128
  // Leg 2 (inner left):  x = 640, width = 128
  // Leg 3 (inner right): x = 1280, width = 128
  // Eye 2 (gap):         x = 1408, width = 128
  // Leg 4 (outer right): x = 1536, width = 128
  const baseLegHeight = 256;
  const liftedLegHeight = 150;

  const getLegsConfig = () => {
    switch (frame) {
      case 1:
        // Legs 1 & 3 lifted / swinging forward; Legs 2 & 4 planted
        return {
          leg1: { x: 350, y: 1024, width: 128, height: liftedLegHeight },
          leg2: { x: 640, y: 1024, width: 128, height: baseLegHeight },
          leg3: { x: 1240, y: 1024, width: 128, height: liftedLegHeight },
          leg4: { x: 1536, y: 1024, width: 128, height: baseLegHeight },
          bodyY: -16,
        };
      case 2:
        // All 4 legs passing / touching
        return {
          leg1: { x: 384, y: 1024, width: 128, height: baseLegHeight },
          leg2: { x: 640, y: 1024, width: 128, height: baseLegHeight },
          leg3: { x: 1280, y: 1024, width: 128, height: baseLegHeight },
          leg4: { x: 1536, y: 1024, width: 128, height: baseLegHeight },
          bodyY: 0,
        };
      case 3:
        // Legs 2 & 4 lifted / swinging forward; Legs 1 & 3 planted
        return {
          leg1: { x: 384, y: 1024, width: 128, height: baseLegHeight },
          leg2: { x: 670, y: 1024, width: 128, height: liftedLegHeight },
          leg3: { x: 1280, y: 1024, width: 128, height: baseLegHeight },
          leg4: { x: 1570, y: 1024, width: 128, height: liftedLegHeight },
          bodyY: -16,
        };
      case 0:
      default:
        // Idle / standing (all 4 legs planted firmly)
        return {
          leg1: { x: 384, y: 1024, width: 128, height: baseLegHeight },
          leg2: { x: 640, y: 1024, width: 128, height: baseLegHeight },
          leg3: { x: 1280, y: 1024, width: 128, height: baseLegHeight },
          leg4: { x: 1536, y: 1024, width: 128, height: baseLegHeight },
          bodyY: 0,
        };
    }
  };

  const { leg1, leg2, leg3, leg4, bodyY } = getLegsConfig();
  const clawdColor = "rgb(219, 120, 88)"; // #db7858

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block select-none transition-transform duration-100 ease-out cursor-pointer ${
        isHovered ? "scale-110" : ""
      } ${className}`}
      style={{
        width: size,
        height: (size * 1280) / 2048,
        transform: `scaleX(${direction})`,
      }}
      title="Clawd - Claude Code Companion"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 1280"
        width="100%"
        height="100%"
        className="overflow-visible filter drop-shadow-[0_2px_6px_rgba(219,120,88,0.4)]"
      >
        <defs>
          <mask id="clawd-cutouts-4legs">
            {/* Corpo visível */}
            <rect width="2048" height="1024" fill="white" />

            {/* Recortes dos cantos da cabeça / orelhas */}
            <path fill="black" d="M 1792 0 L 2048 0 L 2048 508.807 L 1792.11 508.934 L 1792 0 z" />
            <path fill="black" d="M 0 0 L 255.982 0 L 255.916 508.815 L 0 508.802 L 0 0 z" />
            <path
              fill="black"
              d="M 0 774.978 C 84.9928 774.819 171.136 775.718 255.984 774.79 L 256.028 1024 L 0 1024 L 0 774.978 z"
            />
            <path
              fill="black"
              d="M 1792.02 774.866 L 2048 774.881 L 2048 1024 L 1792.22 1024 C 1791.43 941.158 1793.19 857.512 1792.02 774.866 z"
            />

            {/* Recortes dos olhos - Perfeitamente retos, simétricos e alinhados na grade 128px */}
            {!isBlinking && (
              <>
                {/* Olho esquerdo: x=512 (4 blocos), y=256 (2 blocos), 1x2 blocos */}
                <rect x="512" y="256" width="128" height="256" fill="black" />
                {/* Olho direito: x=1408 (11 blocos), y=256 (2 blocos), 1x2 blocos */}
                <rect x="1408" y="256" width="128" height="256" fill="black" />
              </>
            )}
          </mask>
        </defs>

        <g transform={`translate(0, ${bodyY})`}>
          {/* Corpo do Clawd com recorte */}
          <rect
            width="2048"
            height="1024"
            fill={clawdColor}
            mask="url(#clawd-cutouts-4legs)"
          />

          {/* As 4 pernas individuais */}
          {/* Perna 1 (esquerda externa) */}
          <rect
            x={leg1.x}
            y={leg1.y}
            width={leg1.width}
            height={leg1.height}
            fill={clawdColor}
          />

          {/* Perna 2 (esquerda interna) */}
          <rect
            x={leg2.x}
            y={leg2.y}
            width={leg2.width}
            height={leg2.height}
            fill={clawdColor}
          />

          {/* Perna 3 (direita interna) */}
          <rect
            x={leg3.x}
            y={leg3.y}
            width={leg3.width}
            height={leg3.height}
            fill={clawdColor}
          />

          {/* Perna 4 (direita externa) */}
          <rect
            x={leg4.x}
            y={leg4.y}
            width={leg4.width}
            height={leg4.height}
            fill={clawdColor}
          />
        </g>
      </svg>
    </div>
  );
};

export default ClawdWalker;
