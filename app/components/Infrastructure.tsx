const infraStats = [
  { value: "50,000+", label: "MT / Year Capacity" },
  { value: "10,000", label: "MT Storage" },
  { value: "3", label: "Optical Sorters" },
  { value: "4", label: "Milling Lines" },
];

export default function Infrastructure() {
  return (
    <section className="bg-[#0d2318] py-24 px-6 border-y border-green-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-6">
              Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              State-of-the-art milling
              <br />
              <span className="text-green-400">facility — Okara, Punjab</span>
            </h2>
            <p className="text-green-300/70 text-base leading-relaxed mb-8">
              Modern husking units, parboiling and steaming lines, dedicated
              reprocessing unit, optical color sorters and a fully equipped
              quality control lab — every grain audited before it leaves our floor.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-green-600 text-green-300 font-semibold text-xs tracking-widest uppercase px-6 py-3 hover:bg-green-900/30 transition-colors"
            >
              Tour Our Facility →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-px bg-green-800/30">
            {infraStats.map((s) => (
              <div key={s.label} className="bg-[#0d2318] p-8 text-center">
                <div className="text-4xl md:text-5xl font-serif text-[#C9A84C] mb-2">
                  {s.value}
                </div>
                <div className="text-green-400 text-xs tracking-[0.2em] uppercase font-mono">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
