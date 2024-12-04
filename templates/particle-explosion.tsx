/**
 * Free Remotion Template Component
 * ---------------------------------
 * This template is free to use in your projects!
 * Credit appreciated but not required.
 *
 * Created by the team at https://www.reactvideoeditor.com
 *
 * Happy coding and building amazing videos! 🎉
 */

"use client";

import { random, spring, useCurrentFrame, useVideoConfig } from "remotion";

const PARTICLE_COUNT = 150;
const TEXT = "BOOM!";

export default function ParticleExplosion() {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
    const baseAngle = (i / PARTICLE_COUNT) * Math.PI * 2;
    const rotationSpeed = 0.02;
    const rotatingAngle = baseAngle + frame * rotationSpeed;

    const scale = spring({
      frame,
      fps,
      from: 0,
      to: random(i) * 1.2 + 0.3,
      config: { mass: 0.3, damping: 12 },
    });

    const distance = spring({
      frame,
      fps,
      from: 0,
      to: 180 + random(i) * 40,
      config: { mass: 0.4, damping: 10 },
    });

    const x = Math.cos(rotatingAngle) * distance;
    const y = Math.sin(rotatingAngle) * distance;
    const opacity = Math.max(0, 1 - frame / 90);

    return { x, y, opacity, scale };
  });

  return (
    <div style={{ width, height, position: "relative" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${Math.min(1, frame / 10)})`,
          fontSize: "48px",
          fontWeight: "bold",
          color: "white",
          textShadow: "0 0 10px rgba(255,255,255,0.5)",
          zIndex: 2,
        }}
      >
        {TEXT}
      </div>

      {particles.map((particle, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${particle.x}px, ${particle.y}px) scale(${particle.scale})`,
            width: "12px",
            height: "12px",
            backgroundColor: `hsl(${
              200 + (i / PARTICLE_COUNT) * 40
            }, 85%, 70%)`,
            borderRadius: "50%",
            opacity: particle.opacity,
            boxShadow: "0 0 5px rgba(255,255,255,0.3)",
          }}
        />
      ))}
    </div>
  );
}
