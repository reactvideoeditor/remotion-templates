"use client";

import { random, useCurrentFrame, useVideoConfig } from "remotion";

export default function SoundWave() {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const BAR_COUNT = 40;
  const bars = Array.from({ length: BAR_COUNT }).map((_, i) => {
    const seed = i * 1000;
    const height =
      Math.abs(Math.sin(frame / 10 + i / 2)) * 100 + random(seed) * 50;

    return {
      height,
      hue: (i / BAR_COUNT) * 180 + frame,
    };
  });

  return (
    <div
      style={{
        width,
        height,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        backdropFilter: "blur(8px)",
        boxShadow: "inset 0 0 100px rgba(59, 130, 246, 0.2)",
      }}
    >
      {bars.map((bar, i) => (
        <div
          key={i}
          style={{
            width: "12px",
            height: `${bar.height}px`,
            background: `white`,
            borderRadius: "6px",
            transition: "height 0.1s ease",
            boxShadow: `0 0 10px rgba(59, 130, 246, 0.6)`,
          }}
        />
      ))}
    </div>
  );
}
