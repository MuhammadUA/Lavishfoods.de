const params = [
  { label: "Grain Length", detail: "Precision-measured per batch" },
  { label: "Moisture Content", detail: "≤ 12 – 13%" },
  { label: "Whiteness Degree", detail: "38 – 42% range" },
  { label: "Milling Degree", detail: "Well-milled standard" },
  { label: "Broken %", detail: "≤ 1 – 2%" },
  { label: "Aroma Test", detail: "1121 traditional aroma" },
  { label: "Aflatoxin", detail: "< 10 ppb" },
  { label: "Admixture", detail: "≤ 0.1%" },
  { label: "SGS Final Inspection", detail: "Pre-shipment third-party" },
];

const certs = ["SGS Inspected", "FDA Compliant", "HACCP", "ISO 22000", "Halal Certified"];

export default function QualityControl() {
  return (
    <section id="quality" className="bg-[#0a1f15] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
            Quality Control
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Every batch tested
            <br />
            <span className="text-green-400">before shipment.</span>
          </h2>
          <p className="text-green-400/60 max-w-xl mx-auto text-sm leading-relaxed">
            Nine measured parameters. Independent SGS inspection on request.
            Documentation that stands up at any port.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Parameters list */}
          <div className="md:col-span-2 border border-green-800/40">
            <div className="border-b border-green-800/40 px-6 py-4 flex items-center gap-3">
              <div className="w-2 h-2 bg-[#C9A84C] rounded-full" />
              <span className="text-green-400 text-xs font-mono tracking-[0.2em] uppercase">
                Lab Tests on Every Shipment
              </span>
            </div>
            <div className="divide-y divide-green-800/20">
              {params.map((p, i) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between px-6 py-4 hover:bg-green-900/10 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-green-700 text-xs font-mono w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white text-sm font-medium group-hover:text-green-300 transition-colors">
                      {p.label}
                    </span>
                  </div>
                  <span className="text-green-500 text-xs font-mono">{p.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certs column */}
          <div className="space-y-4">
            <div className="border border-green-800/40 p-6">
              <div className="text-green-400 text-xs font-mono tracking-[0.2em] uppercase mb-6">
                Inspected · Certified
              </div>
              <div className="space-y-3">
                {certs.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <div className="w-5 h-5 border border-[#C9A84C]/50 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#C9A84C]" fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-green-300 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-green-800/40 p-6 bg-green-900/10">
              <div className="text-[#C9A84C] text-3xl font-serif font-bold mb-1">9</div>
              <div className="text-green-400 text-xs font-mono tracking-wide uppercase mb-4">
                Quality Parameters
              </div>
              <p className="text-green-500/70 text-xs leading-relaxed">
                Every parameter documented with a certificate of analysis
                provided on request with each shipment.
              </p>
            </div>

            <div className="border border-[#C9A84C]/20 p-6 bg-[#C9A84C]/5">
              <div className="text-[#C9A84C] text-xs font-mono tracking-[0.2em] uppercase mb-3">
                SGS Pre-shipment
              </div>
              <p className="text-green-300/70 text-xs leading-relaxed">
                Third-party SGS inspection available on buyer request — your
                guarantee in writing, with every container.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
