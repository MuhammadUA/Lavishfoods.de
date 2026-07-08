const services = [
  {
    num: "01",
    title: "Rice Export",
    desc: "FCL & LCL containers from Karachi & Port Qasim to 30+ countries with full export documentation.",
  },
  {
    num: "02",
    title: "Private Label",
    desc: "Your brand, your design — we handle artwork, films, retail-ready BOPP and barcodes.",
  },
  {
    num: "03",
    title: "Contract Farming",
    desc: "Direct partnerships with Punjab growers — traceable paddy from seed to mill.",
  },
  {
    num: "04",
    title: "Custom Packaging",
    desc: "1kg consumer packs to 1,000kg FIBC — every market regulation supported.",
  },
  {
    num: "05",
    title: "Quality Assurance",
    desc: "In-house lab + SGS inspection on request. 9-parameter testing on every batch.",
  },
  {
    num: "06",
    title: "Sourcing & Trading",
    desc: "Bulk pulses, oilseeds and Pakistani agri commodities sourced on buyer request.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-[#0a1f15] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              A complete rice
              <br />
              <span className="text-green-400">export house.</span>
            </h2>
          </div>
          <p className="text-green-400/70 max-w-sm text-sm leading-relaxed">
            Beyond milling and shipping — we partner with growers, packers,
            retailers and importers across the entire value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="border border-green-800/40 p-8 hover:border-green-700/60 hover:bg-green-900/10 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[#C9A84C]/40 text-4xl font-serif font-bold leading-none">
                  {s.num}
                </span>
                <div className="w-8 h-px bg-green-700 mt-3 group-hover:w-12 transition-all" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-green-300 transition-colors">
                {s.title}
              </h3>
              <p className="text-green-400/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-green-600 text-green-300 font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-green-900/30 transition-colors"
          >
            Explore All Services →
          </a>
        </div>
      </div>
    </section>
  );
}
