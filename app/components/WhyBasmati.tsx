import Image from "next/image";

const FARM_IMG = "https://lavishfoods.com.pk/assets/farm-hands-Z_SiAFhE.jpg";

const pillars = [
  { label: "GI-Protected Origin", sub: "Certified Basmati region" },
  { label: "Naturally Aromatic", sub: "12+ months aged" },
  { label: "Longest Grain", sub: "8.30 mm 1121 cultivar" },
];

export default function WhyBasmati() {
  return (
    <section className="bg-[#0b1527] py-24 px-6 md:px-8 border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-300 border border-green-800 px-3 py-1 inline-block mb-6">
              Why Pakistani Basmati
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              The world&apos;s finest aromatic
              <br />
              <span className="text-slate-300">rice grows in Punjab.</span>
            </h2>
            <p className="text-slate-300/70 text-base leading-relaxed mb-8">
              Pakistan&apos;s Indus belt — Okara, Sheikhupura, Hafizabad, Sialkot — produces the
              longest, most aromatic Basmati on earth. Mineral-rich Himalayan meltwater, hot days
              and cool nights give every grain its signature length, fragrance and post-cook
              elongation.
            </p>
            <div className="space-y-4">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-start gap-4">
                  <div className="w-5 h-5 border border-[#C9A84C] flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 bg-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{p.label}</div>
                    <div className="text-green-500 text-xs mt-0.5">{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real farm image */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden">
            <Image
              src={FARM_IMG}
              alt="Punjab rice farm"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2318]/60 to-transparent" />
            {/* Overlay stats */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              {[
                { val: "8.30 mm", label: "Grain Length" },
                { val: "12+", label: "Months Aged" },
                { val: "GI", label: "Protected" },
              ].map((s) => (
                <div key={s.label} className="bg-[#060d1b]/80 border border-white/[0.08] p-3 text-center">
                  <div className="text-[#C9A84C] font-serif text-xl">{s.val}</div>
                  <div className="text-green-500 text-[9px] font-mono tracking-wide uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
