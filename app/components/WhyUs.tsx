const reasons = [
  {
    icon: "◈",
    title: "Extra Long Grain",
    desc: "8.30 mm 1121 Basmati — world's longest, guaranteed grain length on every shipment.",
  },
  {
    icon: "◉",
    title: "Aromatic & Aged",
    desc: "Naturally aged 12+ months for richer aroma, firmer texture and superior elongation.",
  },
  {
    icon: "◧",
    title: "Custom Packing",
    desc: "Private label, any bag size, any market — BOPP, PP woven, jute, FIBC, cotton.",
  },
  {
    icon: "◷",
    title: "On-Time Delivery",
    desc: "7–25 day lead time from order confirmation. FCL & LCL from Karachi and Port Qasim.",
  },
  {
    icon: "◎",
    title: "Lab Tested",
    desc: "Every batch tested across 9 quality parameters. SGS pre-shipment inspection on request.",
  },
  {
    icon: "◈",
    title: "Halal Certified",
    desc: "ISO 22000 · HACCP · HALAL Authority · SGS Inspected · FDA Registered · SMETA SEDEX.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#0d2318] py-24 px-6 border-y border-green-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
              Why Lavish Foods
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Six reasons buyers
              <br />
              <span className="text-green-400">choose us.</span>
            </h2>
          </div>
          <p className="text-green-400/70 max-w-sm text-sm leading-relaxed">
            Premium quality, full documentation, and reliable supply — every
            shipment, every season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-green-800/20">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-[#0d2318] p-8 hover:bg-green-900/10 transition-colors group"
            >
              <div className="text-[#C9A84C] text-2xl mb-4 font-mono">{r.icon}</div>
              <h3 className="text-lg font-serif text-white mb-2 group-hover:text-green-300 transition-colors">
                {r.title}
              </h3>
              <p className="text-green-400/60 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
