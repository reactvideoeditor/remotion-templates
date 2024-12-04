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

import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export default function BubblePopText() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const text = "HELLO";

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        gap: "0.5rem",
      }}
    >
      {text.split("").map((char, i) => {
        const delay = i * 5;
        const scale = spring({
          frame: frame - delay,
          fps,
          from: 0,
          to: 1,
          config: {
            damping: 8,
            mass: 0.3,
            stiffness: 100,
          },
        });

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              transform: `scale(${scale})`,
              fontSize: "4rem",
              fontWeight: "bold",
              color: "white",
              border: "4px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              lineHeight: "92px",
              textAlign: "center",
              background: "linear-gradient(45deg, #1e3a8a, #3b82f6)",
              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.5)",
              backdropFilter: "blur(8px)",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
