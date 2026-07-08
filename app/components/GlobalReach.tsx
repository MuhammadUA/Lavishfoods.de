const regions = [
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Oman", "Yemen"],
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "Netherlands", "Belgium", "France"],
  },
  {
    name: "North America",
    countries: ["USA", "Canada"],
  },
  {
    name: "Africa",
    countries: ["Kenya", "Tanzania", "Nigeria", "Ghana"],
  },
  {
    name: "Southeast Asia",
    countries: ["Malaysia", "Singapore", "Indonesia"],
  },
];

const highlights = [
  "UAE", "Saudi Arabia", "UK", "USA", "Australia",
  "Germany", "Netherlands", "Malaysia", "Kenya", "Pakistan",
];

export default function GlobalReach() {
  return (
    <section className="bg-[#0a1f15] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
            Global Shipping
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Shipping from Karachi
            <br />
            <span className="text-green-400">&amp; Port Qasim.</span>
          </h2>
          <p className="text-green-400/60 text-sm">
            FCL &amp; LCL containers · CIF, FOB, CFR terms · Full export documentation included.
          </p>
        </div>

        {/* Regions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-green-800/20 mb-12">
          {regions.map((r) => (
            <div key={r.name} className="bg-[#0a1f15] p-6">
              <h3 className="text-[#C9A84C] text-xs font-mono tracking-[0.2em] uppercase mb-4">
                {r.name}
              </h3>
              <div className="space-y-2">
                {r.countries.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-600 rounded-full" />
                    <span className="text-green-300 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights ticker */}
        <div className="border border-green-800/30 py-3 overflow-hidden">
          <div className="marquee-track">
            {highlights.concat(highlights).concat(highlights).concat(highlights).map((c, i) => (
              <span key={i} className="px-6 text-green-500 text-xs font-mono tracking-[0.2em] uppercase whitespace-nowrap">
                {i % highlights.length === 0 ? "◆ " : ""}{c}
              </span>
            ))}
          </div>
        </div>

        {/* Ports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            { port: "Karachi Port", note: "Primary container hub", transit: "15–28 days to Europe" },
            { port: "Port Qasim", note: "Secondary export terminal", transit: "15–25 days to Middle East" },
          ].map((p) => (
            <div key={p.port} className="border border-green-800/40 p-6 flex items-start gap-6">
              <div className="w-3 h-3 bg-[#C9A84C] rounded-full mt-1 shrink-0" />
              <div>
                <div className="text-white font-serif text-lg mb-1">{p.port}</div>
                <div className="text-green-500 text-xs font-mono mb-2">{p.note}</div>
                <div className="text-green-400/60 text-sm">{p.transit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
