const varieties = [
  { tag: "Extra Long", name: "1121 Basmati", grain: "8.30 mm", desc: "World's longest basmati grain — prized for elongation, aroma and fluffiness after cooking." },
  { tag: "Premium Basmati", name: "Super Kernel", grain: "7.20 mm", desc: "Slender, aromatic grain with rich fragrance. Top choice for retail and restaurant supply." },
  { tag: "Specialty", name: "Super Fine Sella", grain: "7.90 mm", desc: "Parboiled for firmness. Ideal for large-scale catering and food service operations." },
  { tag: "Long Grain", name: "PK-386", grain: "6.80 mm", desc: "Versatile non-basmati long grain. Cost-effective for volume importers and processors." },
  { tag: "Long Grain", name: "IRRI-9", grain: "6.40 mm", desc: "High-yield variety with excellent milling outturn. Popular across Middle East and Africa." },
  { tag: "Long Grain", name: "IRRI-6", grain: "6.20 mm", desc: "Economical bulk variety. Available as white, parboiled sella and 100% broken grades." },
];

export default function Products() {
  return (
    <section id="products" className="bg-[#0a1f15] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
              Our Paddy Varieties
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Six cultivars.
              <br />
              <span className="text-green-400">Twelve grades.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start md:self-auto border border-green-600 text-green-300 font-semibold text-xs tracking-widest uppercase px-5 py-3 hover:bg-green-900/30 transition-colors"
          >
            Learn About Rice Grades →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-green-800/30">
          {varieties.map((v, i) => (
            <div
              key={i}
              className="bg-[#0a1f15] p-8 group hover:bg-green-900/20 transition-colors duration-300 cursor-default"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C9A84C] border border-[#C9A84C]/30 px-2 py-1">
                  {v.tag}
                </span>
                <span className="text-green-600 text-xs font-mono">
                  Grain · {v.grain}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-green-300 transition-colors">
                {v.name}
              </h3>
              <p className="text-green-400/70 text-sm leading-relaxed">
                {v.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-green-800/30 flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className={`h-1 w-6 ${n <= (i === 0 ? 5 : i === 1 ? 5 : i === 2 ? 4 : i === 3 ? 3 : i === 4 ? 3 : 2) ? "bg-[#C9A84C]" : "bg-green-800/40"}`}
                    />
                  ))}
                </div>
                <span className="text-green-600 text-xs font-mono">Premium</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
