"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const WHATSAPP = "https://wa.me/4915901623270?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";
const HERO_BG = "https://lavishfoods.com.pk/assets/hero-field-DpK1PLxD.jpg";

const stats = [
  { value: "30+", label: "Countries" },
  { value: "50,000+ MT", label: "Annual Capacity" },
  { value: "15", label: "Rice Varieties" },
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
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#060d1b]">
      {/* Parallax hero image */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />
      {/* Deep navy overlay — distinctly different from the Pakistan site's green */}
      <div className="absolute inset-0 bg-[#060d1b]/65" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#060d1b] to-transparent" />

      {/* European identity strip */}
      <div className="absolute top-[120px] left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/30">
              🇩🇪 Lavish Foods Europe · Homburg Saar, Germany
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-0 pt-40">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[10px] font-mono tracking-[0.3em] uppercase">
            Okara, Punjab · Premium Basmati Export
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-white leading-[1.02] mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-normal">
            Europe&apos;s gateway
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-normal italic text-[#C9A84C]">
            to basmati.
          </span>
        </h1>

        <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light">
          Premium Pakistani Basmati and IRRI rice, sourced from the alluvial soils of Punjab —
          distributed across Europe and beyond from our base in Germany.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-[#060d1b] text-[11px] font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-[#C9A84C] transition-colors"
          >
            Explore Products ↗
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-white/10 transition-colors"
          >
            Send Inquiry →
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/[0.08]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 px-4 ${i < stats.length - 1 ? "border-r border-white/[0.08]" : ""}`}
            >
              <div className="text-[#C9A84C] text-4xl md:text-5xl font-serif mb-1">{s.value}</div>
              <div className="text-white/40 text-[10px] font-mono tracking-[0.2em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
