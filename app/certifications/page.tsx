import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications — Lavish Foods Quality & Compliance",
  description:
    "ISO 22000, HACCP, Halal Authority, SGS Inspected, FDA Registered, SMETA SEDEX. Full certification documentation for every shipment.",
};

const certs = [
  {
    image: "https://lavishfoods.com.pk/assets/cert-iso-BfsJoiIm.png",
    name: "ISO 22000",
    subtitle: "Food Safety Management System",
    description:
      "ISO 22000 is the international standard for food safety management systems. Our certification covers the entire milling, packing and export chain — ensuring every process meets global food safety requirements from paddy to port.",
    scope: "Full milling, processing & export operations",
    body: "International Organization for Standardization",
  },
  {
    image: "https://lavishfoods.com.pk/assets/cert-haccp-C2cWa5E9.png",
    name: "HACCP Certified",
    subtitle: "Hazard Analysis & Critical Control Points",
    description:
      "HACCP is a systematic preventive approach to food safety. Our HACCP plan identifies, evaluates and controls all biological, chemical and physical hazards throughout our milling process — preventing food safety problems before they arise.",
    scope: "Paddy intake through finished goods dispatch",
    body: "Recognised by FDA and global food safety authorities",
  },
  {
    image: "https://lavishfoods.com.pk/assets/cert-halal-DWWHOjOa.png",
    name: "Halal Authority",
    subtitle: "Halal Certified Food Production",
    description:
      "All Lavish Foods rice grades are certified Halal — compliant with Islamic dietary laws and suitable for Muslim consumers worldwide. Our Halal certificate is accepted across GCC, Middle East, Southeast Asia, UK and European markets.",
    scope: "All rice varieties and grades",
    body: "Approved Halal Certification Authority",
  },
  {
    image: "https://lavishfoods.com.pk/assets/cert-sgs-B9Mt1v3N.png",
    name: "SGS Inspected",
    subtitle: "Pre-Shipment Third-Party Inspection",
    description:
      "SGS is the world's leading inspection, verification, testing and certification company. Pre-shipment SGS inspection is available on buyer request — providing independent third-party verification of grain quality, weight and condition before loading.",
    scope: "Per-shipment basis on buyer request",
    body: "SGS S.A. — World's leading testing & inspection company",
  },
];

const additionalCerts = [
  { name: "FDA Registered", detail: "US Food and Drug Administration facility registration — required for all exports to the United States of America." },
  { name: "SMETA / SEDEX", detail: "Sedex Members Ethical Trade Audit — demonstrates our commitment to ethical, responsible supply chain practices." },
  { name: "Phytosanitary", detail: "Phytosanitary certificate issued per shipment by Pakistan's DPPD — required for rice exports to most countries." },
  { name: "Certificate of Origin", detail: "EUR.1 for EU markets, Form E for ASEAN, and standard CO issued per shipment for all destinations." },
  { name: "Fumigation Certificate", detail: "Issued per container confirming treatment against pests, accepted at all major ports worldwide." },
  { name: "SGS Weight Certificate", detail: "Independent weight verification per container — protects both buyer and seller on bulk orders." },
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

export default function CertificationsPage() {
  return (
    <main className="bg-[#0a1f15] text-white min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-36 pb-16 px-6 md:px-8 bg-[#0d2318] border-b border-green-800/30">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-6">
            Certifications
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4 leading-tight">
            Certified for every market.
            <br />
            <span className="text-green-400">Documented on every shipment.</span>
          </h1>
          <p className="text-green-400/70 text-base max-w-2xl leading-relaxed">
            Every certificate listed here is active, audited and available for buyer review.
            Documentation is provided with every container — no delays, no exceptions.
          </p>
        </div>
      </div>

      {/* Main cert cards */}
      <div className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-px bg-green-800/20">
          {certs.map((c, i) => (
            <div key={c.name} className={`bg-[#0a1f15] grid grid-cols-1 lg:grid-cols-3 gap-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Badge */}
              <div className="flex items-center justify-center p-12 bg-[#0d2318] border-b lg:border-b-0 lg:border-r border-green-800/30">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-36 h-36">
                    <Image src={c.image} alt={c.name} fill className="object-contain" unoptimized />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-serif text-xl">{c.name}</div>
                    <div className="text-green-500 text-xs font-mono mt-1">{c.subtitle}</div>
                  </div>
                </div>
              </div>
              {/* Details */}
              <div className="lg:col-span-2 p-10">
                <p className="text-green-300/80 text-base leading-relaxed mb-6">{c.description}</p>
                <div className="space-y-3 border-t border-green-800/30 pt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-[10px] font-mono uppercase tracking-wide w-20 shrink-0 mt-0.5">Scope</span>
                    <span className="text-green-300 text-sm">{c.scope}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-[10px] font-mono uppercase tracking-wide w-20 shrink-0 mt-0.5">Issued by</span>
                    <span className="text-green-300 text-sm">{c.body}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional certs */}
      <div className="py-20 px-6 md:px-8 bg-[#0d2318] border-t border-green-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
              Additional Compliance
            </span>
            <h2 className="text-3xl font-serif text-white">Full regulatory coverage.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-green-800/20">
            {additionalCerts.map((c) => (
              <div key={c.name} className="bg-[#0d2318] p-6 hover:bg-green-900/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white font-serif">{c.name}</span>
                </div>
                <p className="text-green-500/70 text-sm leading-relaxed pl-7">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation list */}
      <div className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-6">
              Per-Shipment Documents
            </span>
            <h2 className="text-3xl font-serif text-white mb-6">
              Every document, every container.
            </h2>
            <p className="text-green-400/70 text-sm leading-relaxed mb-8">
              All documentation is prepared in-house and reviewed before every container is sealed.
              No delays at customs — documents that stand up at any port.
            </p>
            <div className="space-y-3">
              {docs.map((d) => (
                <div key={d} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-green-300 text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-green-800/40 p-8 self-start">
            <h3 className="text-white font-serif text-xl mb-3">Request Certification Documents</h3>
            <p className="text-green-400/70 text-sm leading-relaxed mb-6">
              Need to review our certificates before placing an order? Send us a message and we&apos;ll
              share the full documentation package within 24 hours.
            </p>
            <a
              href="https://wa.me/4915901623270?text=Please%20share%20your%20full%20certification%20documents%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#C9A84C] text-[#0a1f15] font-bold text-[10px] tracking-[0.25em] uppercase py-4 hover:bg-[#D4AF57] transition-colors mb-3"
            >
              Request via WhatsApp
            </a>
            <a
              href="mailto:contact@lavishfoods.de?subject=Certification%20Documents%20Request"
              className="block text-center border border-green-600 text-green-300 font-semibold text-[10px] tracking-[0.25em] uppercase py-4 hover:bg-green-900/30 transition-colors"
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
