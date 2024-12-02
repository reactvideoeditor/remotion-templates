"use client";

import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export default function GeometricPatterns() {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const patterns = Array.from({ length: 20 }).map((_, i) => {
    const rotation = spring({
      frame: frame - i * 3,
      fps: 30,
      from: 0,
      to: 360,
      config: { damping: 100 },
    });

    const scale = spring({
      frame: frame - i * 3,
      fps: 30,
      from: 0.5,
      to: 1,
      config: { damping: 100 },
    });

    return { rotation, scale, index: i };
  });

  return (
    <div
      style={{
        width,
        height,
        background: "linear-gradient(45deg, #0f172a, #1e293b)",
        overflow: "hidden",
      }}
    >
      {patterns.map(({ rotation, scale, index }) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "100%",
            height: "100%",
            transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: `${index * 5}%`,
          }}
        />
      ))}
    </div>
  );
}
