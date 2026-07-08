import Image from "next/image";
import Reveal from "./Reveal";

const FARM_IMG = "https://lavishfoods.com.pk/assets/farm-hands-Z_SiAFhE.jpg";

const pillars = [
  { label: "GI-Protected Origin", sub: "Certified Basmati growing region — Punjab, Pakistan" },
  { label: "Naturally Aromatic", sub: "12+ months aged · signature post-cook elongation" },
  { label: "Longest Grain", sub: "8.30 mm — the 1121 cultivar, world benchmark" },
];

export default function WhyBasmati() {
  return (
    <section className="bg-[#0b1527] py-24 px-6 md:px-8 border-y border-white/[0.07]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <Reveal>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A84C] mb-6 inline-block">
                — Why Pakistani Basmati
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                The world&apos;s finest<br />
                <span className="italic text-slate-300">rice grows in Punjab.</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-10">
                Pakistan&apos;s Indus belt produces the longest, most aromatic Basmati on earth.
                Mineral-rich Himalayan meltwater, hot days and cool nights give every grain
                its signature length, fragrance, and post-cook elongation.
              </p>
            </Reveal>
            <div className="space-y-5">
              {pillars.map((p, i) => (
                <Reveal key={p.label} delay={i * 100}>
                  <div className="flex items-start gap-4 group">
                    <div className="w-5 h-5 border border-[#C9A84C]/50 flex items-center justify-center mt-0.5 shrink-0 group-hover:border-[#C9A84C] transition-colors">
                      <div className="w-1.5 h-1.5 bg-[#C9A84C]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{p.label}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{p.sub}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Farm image */}
          <Reveal variant="left" delay={100}>
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image
                src={FARM_IMG}
                alt="Punjab rice farm"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1527]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[
                  { val: "8.30 mm", label: "Grain Length" },
                  { val: "12+", label: "Months Aged" },
                  { val: "GI", label: "Protected" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#060d1b]/85 backdrop-blur-sm border border-white/[0.08] p-3 text-center hover:border-[#C9A84C]/30 transition-colors">
                    <div className="text-[#C9A84C] font-serif text-xl">{s.val}</div>
                    <div className="text-slate-500 text-[9px] font-mono tracking-wide uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
