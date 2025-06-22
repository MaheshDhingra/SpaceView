"use client";
import React, { useRef, useEffect } from "react";

const STAR_COUNT = 120;
const LINE_DISTANCE = 120;

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Initialize stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: random(0, width),
      y: random(0, height),
      vx: random(-0.2, 0.2),
      vy: random(-0.2, 0.2),
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw stars
      ctx.fillStyle = "#fff";
      for (const star of stars.current) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
      }
      // Draw lines
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      for (let i = 0; i < stars.current.length; i++) {
        for (let j = i + 1; j < stars.current.length; j++) {
          const a = stars.current[i];
          const b = stars.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      for (const star of stars.current) {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0 || star.x > width) star.vx *= -1;
        if (star.y < 0 || star.y > height) star.vy *= -1;
      }
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
