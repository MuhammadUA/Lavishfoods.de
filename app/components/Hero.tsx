"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const WHATSAPP = "https://wa.me/923139999404?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";
const HERO_BG = "https://lavishfoods.com.pk/assets/hero-field-DpK1PLxD.jpg";

const stats = [
  { value: "30+", label: "Countries" },
  { value: "50000+ MT", label: "Annual Capacity" },
  { value: "12", label: "Rice Varieties" },
  { value: "100%", label: "Sortex Quality" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Parallax hero image */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />
      {/* Dark overlay — matches original's green-dark tint */}
      <div className="absolute inset-0 bg-[#0a1f15]/60" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a1f15] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-0 pt-40">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[10px] font-mono tracking-[0.3em] uppercase">
            Okara, Punjab · Premium Basmati Export
          </span>
        </div>

        {/* Headline — matches original typography */}
        <h1 className="font-serif text-white leading-[1.05] mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-normal">
            Exporting Quality.
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-normal italic text-[#C9A84C]">
            Delivering Trust.
          </span>
        </h1>

        <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light">
          Premium Pakistani Basmati and IRRI rice, cultivated in the alluvial soils of Punjab —
          shipped to importers across 30+ countries with certified quality you can count on.
        </p>

        {/* CTA buttons — styled like original */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-white/60 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-white/10 transition-colors"
          >
            Explore Products ↗
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[11px] font-semibold tracking-[0.2em] uppercase py-3.5 transition-colors"
          >
            Send Inquiry →
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 px-4 ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <div className="text-[#C9A84C] text-4xl md:text-5xl font-serif mb-1">{s.value}</div>
              <div className="text-white/50 text-[10px] font-mono tracking-[0.2em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
