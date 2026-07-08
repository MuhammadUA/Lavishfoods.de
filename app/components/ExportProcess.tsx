const WHATSAPP = "https://wa.me/4915901623270?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";

const steps = [
  { num: "01", title: "Send Inquiry", sub: "WhatsApp or quote form", detail: "Tell us your product, quantity, destination and packaging requirements." },
  { num: "02", title: "Pro-Forma Invoice", sub: "Within 24 hours", detail: "Detailed pricing, specifications and payment terms sent directly." },
  { num: "03", title: "Confirm Order", sub: "LC at Sight · TT · DP", detail: "Choose your payment term. We begin production on confirmation." },
  { num: "04", title: "Shipment", sub: "Full export documentation", detail: "Container sealed, documents prepared, cargo delivered to your port." },
];

const docs = [
  "Bill of Lading",
  "Certificate of Origin (Form E / EUR1)",
  "Phytosanitary Certificate",
  "Fumigation Certificate",
  "SGS Inspection Report",
  "Commercial Invoice",
  "Packing List",
  "HALAL Certificate",
  "Weight & Quality Certificate",
];

const terms = [
  { label: "Minimum Order", value: "1× 20ft container (~25 MT)" },
  { label: "Trial Orders", value: "Available discuss" },
  { label: "Payment Terms", value: "LC at Sight · TT · DP" },
  { label: "Lead Time", value: "7–25 days after confirmation" },
  { label: "Inspection", value: "SGS Third-Party (buyer's choice)" },
  { label: "Private Label", value: "Available 4 to 45 working days" },
  { label: "Shipment Terms", value: "FOB · CFR · CIF" },
  { label: "Port of Loading", value: "Karachi · Port Qasim, Pakistan" },
];

export default function ExportProcess() {
  return (
    <section id="export" className="bg-[#060d1b] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-slate-300 border border-green-800 px-3 py-1 inline-block mb-4">
            Export Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            From inquiry to delivery
            <br />
            <span className="text-slate-300">in four steps.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-green-800/20 mb-16">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#060d1b] p-8 hover:bg-green-900/10 transition-colors group">
              <div className="text-[#C9A84C]/25 text-5xl font-serif font-bold leading-none mb-6">
                {s.num}
              </div>
              <h3 className="text-white font-serif text-xl mb-1 group-hover:text-slate-300 transition-colors">
                {s.title}
              </h3>
              <div className="text-[#C9A84C] text-xs font-mono tracking-wide mb-3">{s.sub}</div>
              <p className="text-green-500/70 text-xs leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        {/* Docs + Terms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Documentation */}
          <div className="border border-white/[0.08]">
            <div className="border-b border-white/[0.08] px-6 py-4">
              <span className="text-slate-300 text-xs font-mono tracking-[0.2em] uppercase">
                Documentation Provided
              </span>
            </div>
            <div className="p-6 space-y-3">
              {docs.map((d) => (
                <div key={d} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-slate-300 text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MOQ & Terms */}
          <div className="border border-white/[0.08]">
            <div className="border-b border-white/[0.08] px-6 py-4">
              <span className="text-slate-300 text-xs font-mono tracking-[0.2em] uppercase">
                MOQ &amp; Trade Terms
              </span>
            </div>
            <div className="divide-y divide-green-800/20">
              {terms.map((t) => (
                <div key={t.label} className="flex justify-between items-center px-6 py-3">
                  <span className="text-green-500 text-xs font-mono uppercase tracking-wide">{t.label}</span>
                  <span className="text-white text-sm text-right max-w-[55%]">{t.value}</span>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-white/[0.08]">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#C9A84C] text-[#0a1f15] font-bold text-xs tracking-widest uppercase px-6 py-4 text-center hover:bg-[#D4AF57] transition-colors"
              >
                Get a Quote on WhatsApp
              </a>
              <p className="text-green-600 text-xs text-center mt-3 font-mono">
                Response within 24 hours · No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
