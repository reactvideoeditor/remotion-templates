"use client";

import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export default function AnimatedList() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Sample list items
  const items = [
    { name: "Item One", color: "#3b82f6" },
    { name: "Item Two", color: "#60a5fa" },
    { name: "Item Three", color: "#93c5fd" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: "600px",
        padding: "2rem",
      }}
    >
      {items.map((item, i) => {
        const delay = i * 5;

        // Slide in from left
        const slideX = spring({
          frame: frame - delay,
          fps,
          from: -100,
          to: 0,
          config: {
            damping: 12,
            mass: 0.5,
          },
        });

        // Fade in
        const opacity = spring({
          frame: frame - delay,
          fps,
          from: 0,
          to: 1,
          config: {
            damping: 12,
            mass: 0.5,
          },
        });

        // Scale up
        const scale = spring({
          frame: frame - delay,
          fps,
          from: 0.3,
          to: 1,
          config: {
            damping: 12,
            mass: 0.5,
          },
        });

        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
              transform: `translateX(${slideX}px) scale(${scale})`,
              opacity,
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <span
              style={{
                color: "white",
                fontSize: "3.5rem",
                fontWeight: "500",
              }}
            >
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
