"use client";
import { useEffect, useRef } from "react";

const WHATSAPP = "https://wa.me/923001234567?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";

const stats = [
  { value: "30+", label: "Countries" },
  { value: "50,000+", label: "MT Annual Capacity" },
  { value: "12", label: "Rice Varieties" },
  { value: "100%", label: "Sortex Quality" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a1f15]">
      {/* Background layers */}
      <div
        ref={heroRef}
        className="absolute inset-0 scale-110"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(45,106,79,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Origin tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-mono tracking-[0.3em] uppercase">
            Okara, Punjab · Premium Basmati Export
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-white leading-[1.05] mb-6 max-w-4xl">
          Exporting Quality.
          <br />
          <em className="text-green-400 not-italic">Delivering Trust.</em>
        </h1>

        <p className="text-green-300/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
          Premium Pakistani Basmati and IRRI rice, cultivated in the alluvial
          soils of Punjab — shipped to importers across 30+ countries with
          certified quality you can count on.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0a1f15] font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#D4AF57] transition-colors"
          >
            Explore Products
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-300 font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-green-900/30 transition-colors"
          >
            Send Inquiry →
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-green-800/30">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0a1f15] p-6 text-center">
              <div className="text-4xl md:text-5xl font-serif text-[#C9A84C] mb-1">
                {s.value}
              </div>
              <div className="text-green-400 text-xs tracking-[0.2em] uppercase font-mono">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-600">
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-green-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
