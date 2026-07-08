const services = [
  {
    num: "01",
    title: "Rice Export",
    desc: "FCL & LCL containers from Karachi & Port Qasim to 30+ countries with full export documentation.",
  },
  {
    num: "02",
    title: "Private Label",
    desc: "Your brand, your design we handle artwork, films, retail-ready BOPP and barcodes.",
  },
  {
    num: "03",
    title: "Contract Farming",
    desc: "Direct partnerships with Punjab growers traceable paddy from seed to mill.",
  },
  {
    num: "04",
    title: "Custom Packaging",
    desc: "1kg consumer packs to 1,000kg FIBC every market regulation supported.",
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
    <section id="services" className="bg-[#060d1b] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#C9A84C] mb-4 inline-block">
            What We Do
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              A complete rice <span className="italic text-slate-300">export house.</span>
            </h2>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed md:text-right shrink-0">
              From grower to importer — every link in the chain.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="border border-white/[0.07] p-8 hover:border-white/[0.15] hover:bg-white/[0.03] transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[#C9A84C]/40 text-4xl font-serif font-bold leading-none">
                  {s.num}
                </span>
                <div className="w-8 h-px bg-white/20 mt-3 group-hover:w-12 group-hover:bg-[#C9A84C] transition-all" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/[0.15] text-slate-300 font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-white/5 transition-colors"
          >
            Explore All Services →
          </a>
        </div>
      </div>
    </section>
  );
}
