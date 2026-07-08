const varieties = [
  { tag: "Basmati", name: "1121 Basmati Golden Sella", grain: "8.30 mm", color: "#C9A84C" },
  { tag: "Basmati", name: "1121 Basmati Steam Rice", grain: "8.30 mm", color: "#C9A84C" },
  { tag: "Basmati", name: "1121 Basmati White Rice", grain: "8.30 mm", color: "#C9A84C" },
  { tag: "Super Kernel", name: "Super Kernel Basmati White Rice", grain: "7.20 mm", color: "#74C69D" },
  { tag: "Super Kernel", name: "Super Kernel Golden Sella", grain: "7.20 mm", color: "#74C69D" },
  { tag: "Super Kernel", name: "Super Kernel Steam Rice", grain: "7.20 mm", color: "#74C69D" },
  { tag: "PK-386", name: "PK-386 White Rice", grain: "6.80 mm", color: "#95D5B2" },
  { tag: "PK-386", name: "PK-386 Sella Rice", grain: "6.80 mm", color: "#95D5B2" },
  { tag: "PK-386", name: "PK-386 Steam Rice", grain: "6.80 mm", color: "#95D5B2" },
  { tag: "IRRI", name: "IRRI-9 White Rice", grain: "6.40 mm", color: "#52B788" },
  { tag: "IRRI", name: "IRRI-9 Sella Parboiled", grain: "6.40 mm", color: "#52B788" },
  { tag: "IRRI", name: "IRRI-6 White 5% Broken", grain: "6.20 mm", color: "#40916C" },
];

export default function FeaturedVarieties() {
  return (
    <section className="bg-[#0d2318] py-24 px-6 border-t border-green-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
              Featured Varieties
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              The Lavish portfolio.
              <br />
              <span className="text-green-400">Twelve premium grades.</span>
            </h2>
          </div>
          <p className="text-green-400/60 max-w-xs text-sm leading-relaxed">
            From the world&apos;s longest grain 1121 Basmati to economical bulk IRRI lots.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-green-800/20">
          {varieties.map((v, i) => (
            <div
              key={i}
              className="bg-[#0d2318] p-6 hover:bg-green-900/15 transition-colors group cursor-default"
            >
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ backgroundColor: v.color }}
              />
              <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-green-600 mb-2">
                {v.tag}
              </div>
              <h3 className="text-white text-sm font-medium leading-snug mb-3 group-hover:text-green-300 transition-colors">
                {v.name}
              </h3>
              <div className="text-green-600 text-xs font-mono">
                Grain · {v.grain}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-green-600 text-green-300 font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-green-900/30 transition-colors"
          >
            View All 12 Varieties →
          </a>
        </div>
      </div>
    </section>
  );
}
