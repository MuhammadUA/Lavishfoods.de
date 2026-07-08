"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WHATSAPP = "https://wa.me/4915901623270?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";
const HERO_BG = "https://lavishfoods.com.pk/assets/hero-field-DpK1PLxD.jpg";

const stats = [
  { value: 30,    suffix: "+",     label: "Countries" },
  { value: 50000, suffix: "+ MT",  label: "Annual Capacity" },
  { value: 12,    suffix: "",      label: "Rice Varieties" },
  { value: 100,   suffix: "%",     label: "Sortex Quality" },
];

const trust = ["ISO 22000", "HACCP", "Halal Certified", "SGS Inspected", "FDA Registered"];

function useCountUp(target: number, duration = 1800, active: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1600, active);
  return (
    <div className="py-7 px-5 border-r border-white/[0.07] last:border-r-0">
      <div className="text-[#C9A84C] text-3xl md:text-4xl font-serif leading-none mb-1.5">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/35 text-[9px] font-mono tracking-[0.22em] uppercase">{label}</div>
    </div>
  );
}

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trigger counter when stats section enters view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#060d1b]">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060d1b]/70 via-[#060d1b]/45 to-[#060d1b]/20" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#060d1b] via-[#060d1b]/80 to-transparent" />
      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(6,13,27,0.5) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-0 pt-44 w-full">

        {/* Headline staggered entrance */}
        <h1 className="font-serif text-white leading-[1.0] mb-6">
          <span className="hero-line-1 block text-5xl md:text-7xl lg:text-[88px] font-normal">
            From Punjab fields
          </span>
          <span className="hero-line-2 block text-5xl md:text-7xl lg:text-[88px] font-normal italic text-[#C9A84C]">
            to European shelves.
          </span>
        </h1>

        {/* Subline */}
        <p className="hero-sub text-white/55 text-lg md:text-xl max-w-lg leading-relaxed mb-6 font-light">
          Grade A Pakistani rice. Full EU documentation.<br className="hidden md:block" />
          Shipped on time, every time.
        </p>

        {/* Stats moved up, compact inline row */}
        <div
          ref={statsRef}
          className="hero-stats grid grid-cols-4 border border-white/[0.08] bg-[#060d1b]/60 backdrop-blur-sm mb-8 w-fit"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={statsActive} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="hero-tags flex flex-wrap items-center gap-2 mb-10">
          {trust.map((t) => (
            <span
              key={t}
              className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/30 border border-white/[0.08] px-2.5 py-1 hover:border-[#C9A84C]/40 hover:text-[#C9A84C]/60 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-cta flex flex-wrap gap-4 mb-0 pb-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#060d1b] text-[11px] font-bold tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#D4AF57] transition-all duration-200 hover:scale-[1.02]"
          >
            View Products →
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/25 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
