"use client";

import { useCurrentFrame, useVideoConfig } from "remotion";

export default function LiquidWave() {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const numberOfPoints = 50;
  const points = Array.from({ length: numberOfPoints + 1 }).map((_, i) => {
    const x = (i / numberOfPoints) * width;
    const waveHeight = Math.sin(frame / 20 + i / 5) * 50;
    const y = height / 2 + waveHeight;
    return `${x},${y}`;
  });

  return (
    <svg width={width} height={height} style={{ background: "#111827" }}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d={`M 0,${height} ${points.join(" ")} ${width},${height} Z`}
        fill="url(#gradient)"
        style={{
          filter: "blur(10px)",
        }}
      />
    </svg>
  );
}
