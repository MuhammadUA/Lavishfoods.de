import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications Lavish Foods Quality & Compliance",
  description:
    "ISO 22000, HACCP, Halal Authority, SGS Inspected, FDA Registered, SMETA SEDEX. Full certification documentation for every shipment.",
};

const certs = [
  {
    abbr: "ISO",
    code: "22000",
    color: "#003087",
    name: "ISO 22000",
    subtitle: "Food Safety Management System",
    description:
      "ISO 22000 is the international standard for food safety management systems. Our certification covers the entire milling, packing and export chain ensuring every process meets global food safety requirements from paddy to port.",
    scope: "Full milling, processing & export operations",
    body: "International Organization for Standardization",
  },
  {
    abbr: "HACCP",
    code: "CERT",
    color: "#1a6b3c",
    name: "HACCP Certified",
    subtitle: "Hazard Analysis & Critical Control Points",
    description:
      "HACCP is a systematic preventive approach to food safety. Our HACCP plan identifies, evaluates and controls all biological, chemical and physical hazards throughout our milling process preventing food safety problems before they arise.",
    scope: "Paddy intake through finished goods dispatch",
    body: "Recognised by FDA and global food safety authorities",
  },
  {
    abbr: "HALAL",
    code: "AUTH",
    color: "#6b3a1f",
    name: "Halal Authority",
    subtitle: "Halal Certified Food Production",
    description:
      "All Lavish Foods rice grades are certified Halal compliant with Islamic dietary laws and suitable for Muslim consumers worldwide. Our Halal certificate is accepted across GCC, Middle East, Southeast Asia, UK and European markets.",
    scope: "All rice varieties and grades",
    body: "Approved Halal Certification Authority",
  },
  {
    abbr: "SGS",
    code: "INSP",
    color: "#c41230",
    name: "SGS Inspected",
    subtitle: "Pre-Shipment Third-Party Inspection",
    description:
      "SGS is the world's leading inspection, verification, testing and certification company. Pre-shipment SGS inspection is available on buyer request providing independent third-party verification of grain quality, weight and condition before loading.",
    scope: "Per-shipment basis on buyer request",
    body: "SGS S.A. World's leading testing & inspection company",
  },
];

const additionalCerts = [
  { name: "FDA Registered", detail: "US Food and Drug Administration facility registration required for all exports to the United States of America." },
  { name: "SMETA / SEDEX", detail: "Sedex Members Ethical Trade Audit demonstrates our commitment to ethical, responsible supply chain practices." },
  { name: "Phytosanitary", detail: "Phytosanitary certificate issued per shipment by Pakistan's DPPD required for rice exports to most countries." },
  { name: "Certificate of Origin", detail: "EUR.1 for EU markets, Form E for ASEAN, and standard CO issued per shipment for all destinations." },
  { name: "Fumigation Certificate", detail: "Issued per container confirming treatment against pests, accepted at all major ports worldwide." },
  { name: "SGS Weight Certificate", detail: "Independent weight verification per container protects both buyer and seller on bulk orders." },
];

const docs = [
  "Bill of Lading",
  "Certificate of Origin (EUR1 / Form E)",
  "Phytosanitary Certificate",
  "Fumigation Certificate",
  "SGS Inspection Report (on request)",
  "Commercial Invoice",
  "Packing List",
  "HALAL Certificate",
  "Weight & Quality Certificate",
  "FDA Registration Document",
];

function CertBadge({ abbr, code, color }: { abbr: string; code: string; color: string }) {
  return (
    <div
      className="w-32 h-32 flex flex-col items-center justify-center border-2 relative"
      style={{ borderColor: color + "60" }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundColor: color }}
      />
      <div
        className="text-2xl font-black tracking-tight leading-none"
        style={{ color }}
      >
        {abbr}
      </div>
      <div
        className="text-[10px] font-mono tracking-[0.2em] mt-1 opacity-70"
        style={{ color }}
      >
        {code}
      </div>
      {/* Corner marks */}
      <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l" style={{ borderColor: color }} />
      <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r" style={{ borderColor: color }} />
      <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l" style={{ borderColor: color }} />
      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r" style={{ borderColor: color }} />
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <main className="bg-[#060d1b] text-white min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-40 pb-20 px-6 md:px-8 bg-[#060d1b]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A84C] mb-6 inline-block">
            Certifications
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.02]">
            Certified for<br />
            <span className="italic text-[#C9A84C]">every market.</span>
          </h1>
          <p className="text-slate-400 text-base max-w-2xl leading-relaxed font-light">
            Every certificate listed here is active, audited and available for buyer review.
            Documentation is provided with every container no delays, no exceptions.
          </p>
        </div>
      </div>

      {/* Main cert cards white section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto divide-y divide-black/[0.06]">
          {certs.map((c, i) => (
            <div
              key={c.name}
              className={`grid grid-cols-1 lg:grid-cols-4 gap-0 ${
                i % 2 === 1 ? "bg-[#f9fafb]" : "bg-white"
              }`}
            >
              {/* Badge column */}
              <div className="flex items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-black/[0.06]">
                <div className="flex flex-col items-center gap-4">
                  <CertBadge abbr={c.abbr} code={c.code} color={c.color} />
                  <div className="text-center">
                    <div className="text-[#060d1b] font-serif text-base">{c.name}</div>
                    <div className="text-slate-400 text-[10px] font-mono mt-1 tracking-wide">{c.subtitle}</div>
                  </div>
                </div>
              </div>
              {/* Details spans 3 cols */}
              <div className="lg:col-span-3 p-10 lg:p-12">
                <p className="text-slate-600 text-base leading-relaxed mb-8">{c.description}</p>
                <div className="space-y-3 border-t border-black/[0.06] pt-6">
                  <div className="flex items-start gap-4">
                    <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wide w-20 shrink-0 mt-0.5">Scope</span>
                    <span className="text-[#060d1b] text-sm">{c.scope}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wide w-20 shrink-0 mt-0.5">Issued by</span>
                    <span className="text-[#060d1b] text-sm">{c.body}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional certs dark */}
      <div className="py-24 px-6 md:px-8 bg-[#060d1b]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A84C] mb-4 inline-block">
              Additional Compliance
            </span>
            <h2 className="text-3xl font-serif text-white">Full regulatory coverage.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {additionalCerts.map((c) => (
              <div key={c.name} className="bg-[#060d1b] p-7 hover:bg-[#0b1527] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white font-serif">{c.name}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed pl-7">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation list white */}
      <div className="bg-white py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A84C] mb-6 inline-block">
              Per-Shipment Documents
            </span>
            <h2 className="text-3xl font-serif text-[#060d1b] mb-6">
              Every document, every container.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              All documentation is prepared in-house and reviewed before every container is sealed.
              No delays at customs documents that stand up at any port.
            </p>
            <div className="space-y-3">
              {docs.map((d) => (
                <div key={d} className="flex items-center gap-3 py-2 border-b border-black/[0.05]">
                  <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#060d1b] text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-black/[0.08] p-10 self-start bg-[#f9fafb]">
            <h3 className="text-[#060d1b] font-serif text-xl mb-3">Request Certification Documents</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Need to review our certificates before placing an order? Send us a message and we&apos;ll
              share the full documentation package within 24 hours.
            </p>
            <a
              href="https://wa.me/4915901623270?text=Please%20share%20your%20full%20certification%20documents%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#C9A84C] text-[#060d1b] font-bold text-[10px] tracking-[0.25em] uppercase py-4 hover:bg-[#D4AF57] transition-colors mb-3"
            >
              Request via WhatsApp
            </a>
            <a
              href="mailto:contact@lavishfoods.de?subject=Certification%20Documents%20Request"
              className="block text-center border border-[#060d1b]/20 text-[#060d1b] font-semibold text-[10px] tracking-[0.25em] uppercase py-4 hover:bg-black/5 transition-colors"
            >
              Email: contact@lavishfoods.de
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
