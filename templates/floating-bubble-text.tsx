"use client";

import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export default function FloatingBubbleText() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const float = Math.sin(frame / 30) * 20;
  const scale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 12,
      mass: 0.5,
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translateY(${float}px) scale(${scale})`,
      }}
    >
      <div
        style={{
          fontSize: "4.5rem",
          fontWeight: "bold",
          color: "white",
          padding: "2rem 3.5rem",
          borderRadius: "24px",
          background: "linear-gradient(45deg, #1e3a8a, #3b82f6)",
          border: "3px solid transparent",
          backgroundClip: "padding-box",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(30, 58, 138, 0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-3px",
            background: "linear-gradient(45deg, cyan, magenta)",
            zIndex: -1,
            margin: "-2px",
            animation: `rotate 3s linear infinite`,
          }}
        />
        Floating
      </div>
    </div>
  );
}
