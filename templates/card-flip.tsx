"use client";

import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export default function CardFlip() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const rotation = spring({
    frame,
    fps,
    from: 0,
    to: 360,
    config: {
      damping: 15,
      mass: 0.5,
    },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        perspective: "1000px",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "400px",
          transform: `translate(-50%, -50%) rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "linear-gradient(45deg, #1e3a8a, #3b82f6)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Remotion 👋
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "linear-gradient(45deg, #1e3a8a, #3b82f6)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
            transform: "rotateY(180deg)",
          }}
        >
          Back
        </div>
      </div>
    </div>
  );
}
