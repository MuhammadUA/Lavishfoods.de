const packs = [
  { name: "PP Woven Bags", detail: "5 / 25 / 50 kg · Breathable · Min 1 MT", icon: "▣" },
  { name: "BOPP Laminated (LDPE)", detail: "1 / 2 / 5 / 10 kg · HD colour print · 45-day lead", icon: "▤" },
  { name: "Jute Bags", detail: "25 / 30 / 50 kg · Eco-friendly natural fibre", icon: "▥" },
  { name: "Jumbo FIBC", detail: "500 / 1000 kg · Bulk · 3-day turnaround", icon: "▦" },
  { name: "Cotton Bags", detail: "200 g – 45 kg · Custom logo printing", icon: "▧" },
  { name: "Custom Private Label", detail: "Any size · Full branding · OEM artwork support", icon: "▨" },
];

export default function Packaging() {
  return (
    <section className="bg-[#0d2318] py-24 px-6 border-t border-green-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
              Packaging
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Flexible packaging
              <br />
              <span className="text-green-400">for every market.</span>
            </h2>
          </div>
          <p className="text-green-400/60 max-w-sm text-sm leading-relaxed">
            Retail-ready BOPP, durable PP woven, traditional jute, bulk FIBC —
            or your private label, any size, any market regulation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-green-800/20 mb-8">
          {packs.map((p) => (
            <div
              key={p.name}
              className="bg-[#0d2318] p-8 hover:bg-green-900/15 transition-colors group"
            >
              <div className="text-green-700 text-2xl font-mono mb-4 group-hover:text-[#C9A84C] transition-colors">
                {p.icon}
              </div>
              <h3 className="text-white font-serif text-xl mb-2 group-hover:text-green-300 transition-colors">
                {p.name}
              </h3>
              <p className="text-green-500/70 text-sm leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>

        <div className="border border-green-800/30 px-6 py-4 text-center">
          <span className="text-green-500 text-xs font-mono tracking-[0.2em]">
            Minimum order: 1 Metric Ton · Private label lead time: 4 – 45 working days
          </span>
        </div>
      </div>
    </section>
  );
}
