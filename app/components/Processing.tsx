const steps = [
  { num: "01", title: "Paddy Procurement", sub: "Direct from Punjab farms" },
  { num: "02", title: "Paddy Drying", sub: "Moisture controlled to 13%" },
  { num: "03", title: "Husking", sub: "Rubber roll <0.5% breakage" },
  { num: "04", title: "Polishing", sub: "Multi-stage to bright finish" },
  { num: "05", title: "Grading", sub: "Length & thickness sorted" },
  { num: "06", title: "Optical Sorting", sub: "99.9% accuracy color sort" },
  { num: "07", title: "Custom Packing", sub: "Your brand, your spec" },
  { num: "08", title: "Export Loading", sub: "Sealed at Karachi & Qasim" },
];

export default function Processing() {
  return (
    <section className="bg-[#0a1f15] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
              Rice Processing
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              From paddy to port,
              <br />
              <span className="text-green-400">eight precise stages.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start border border-green-600 text-green-300 font-semibold text-xs tracking-widest uppercase px-5 py-3 hover:bg-green-900/30 transition-colors"
          >
            See Full Process →
          </a>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-green-800/20">
          {steps.map((s, i) => (
            <div key={s.num} className="bg-[#0a1f15] p-8 relative group hover:bg-green-900/15 transition-colors">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[3.25rem] right-0 w-px h-4 bg-green-800/40" />
              )}
              <div className="text-[#C9A84C]/30 text-5xl font-serif font-bold leading-none mb-4">
                {s.num}
              </div>
              <h3 className="text-white font-serif text-lg mb-1 group-hover:text-green-300 transition-colors">
                {s.title}
              </h3>
              <p className="text-green-500 text-xs font-mono tracking-wide">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
