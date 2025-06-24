"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX - 9}px,${e.clientY - 9}px,0)`;
      }
    };
    const click = () => {
      if (dot.current) {
        dot.current.classList.add("active");
        setTimeout(() => dot.current && dot.current.classList.remove("active"), 150);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
    };
  }, []);
  return <div className="cursor-dot" ref={dot}></div>;
}
