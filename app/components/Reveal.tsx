"use client";
import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "scale";
  delay?: number;
}

export default function Reveal({ children, className = "", variant = "up", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cls = variant === "left" ? "reveal-left" : variant === "scale" ? "reveal-scale" : "reveal";
    el.classList.add(cls);
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [variant, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
