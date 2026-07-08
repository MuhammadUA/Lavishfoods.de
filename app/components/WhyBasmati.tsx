const pillars = [
  { label: "GI-Protected Origin", sub: "Certified Basmati region" },
  { label: "Naturally Aromatic", sub: "12+ months aged" },
  { label: "Longest Grain", sub: "8.30 mm 1121 cultivar" },
];

export default function WhyBasmati() {
  return (
    <section className="bg-[#0d2318] py-24 px-6 border-y border-green-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-6">
              Why Pakistani Basmati
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              The world&apos;s finest aromatic
              <br />
              <span className="text-green-400">rice grows in Punjab.</span>
            </h2>
            <p className="text-green-300/70 text-base leading-relaxed mb-8">
              Pakistan&apos;s Indus belt — Okara, Sheikhupura, Hafizabad,
              Sialkot — produces the longest, most aromatic Basmati on earth.
              Mineral-rich Himalayan meltwater, hot days and cool nights give
              every grain its signature length, fragrance and post-cook
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

          {/* Visual card */}
          <div className="relative">
            <div className="border border-green-800/40 p-10 bg-[#0a1f15] relative overflow-hidden">
              {/* decorative */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-800/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="text-7xl font-serif text-[#C9A84C]/20 leading-none mb-2">
                  8.30
                </div>
                <div className="text-green-400 text-xs font-mono tracking-[0.2em] uppercase mb-8">
                  mm — 1121 Basmati grain length
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Grain Elongation", val: 95 },
                    { label: "Aroma Intensity", val: 90 },
                    { label: "Milling Yield", val: 85 },
                    { label: "Whiteness Degree", val: 88 },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-green-400 font-mono tracking-wide">{m.label}</span>
                        <span className="text-[#C9A84C]">{m.val}%</span>
                      </div>
                      <div className="h-0.5 bg-green-800/40">
                        <div
                          className="h-full bg-[#C9A84C]"
                          style={{ width: `${m.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-green-800/30 text-center">
                  <span className="text-green-500 text-xs font-mono tracking-[0.2em] uppercase">
                    Punjab · Okara · Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
