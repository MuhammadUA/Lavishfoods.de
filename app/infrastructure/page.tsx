import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure — Lavish Foods Milling Facility",
  description:
    "State-of-the-art rice milling facility in Okara, Punjab. 50,000+ MT annual capacity, 4 milling lines, 3 optical sorters, in-house quality lab.",
};

const FACILITY = "https://lavishfoods.com.pk/assets/facility-IHmjPYm1.jpg";
const FARM = "https://lavishfoods.com.pk/assets/farm-hands-Z_SiAFhE.jpg";

const stats = [
  { value: "50,000+", label: "MT / Year Capacity", sub: "Full container load capability" },
  { value: "10,000", label: "MT Storage", sub: "Climate-controlled paddy silos" },
  { value: "4", label: "Milling Lines", sub: "High-throughput husking units" },
  { value: "3", label: "Optical Sorters", sub: "99.9% colour accuracy" },
];

const processSteps = [
  { num: "01", title: "Paddy Procurement", sub: "Direct from Punjab farms", detail: "Long-term partnerships with Punjab growers ensure traceable, consistent paddy sourced direct — no middlemen." },
  { num: "02", title: "Paddy Drying", sub: "Moisture controlled to 13%", detail: "Mechanical dryers reduce grain moisture to optimal 13% before milling — critical for whiteness and shelf life." },
  { num: "03", title: "Husking", sub: "Rubber roll — <0.5% breakage", detail: "Rubber-roll husking gently removes the outer husk with industry-leading breakage rates below 0.5%." },
  { num: "04", title: "Polishing", sub: "Multi-stage to bright finish", detail: "Multiple polishing passes remove the bran layer and produce a bright, uniform, market-ready white grain." },
  { num: "05", title: "Grading", sub: "Length & thickness sorted", detail: "Precision grading cylinders separate grain by length and thickness, ensuring consistent grade in every batch." },
  { num: "06", title: "Optical Sorting", sub: "99.9% accuracy colour sort", detail: "Three optical colour sorters reject discoloured, chalky or damaged grains — guaranteeing a clean, uniform lot." },
  { num: "07", title: "Custom Packing", sub: "Your brand, your spec", detail: "Fully flexible packing lines handle 1kg BOPP retail pouches through to 1,000kg FIBC jumbo bags — all in-house." },
  { num: "08", title: "Export Loading", sub: "Sealed at Karachi & Port Qasim", detail: "Containers sealed under SGS supervision, loaded at Karachi or Port Qasim with full export documentation." },
];

const capabilities = [
  "Modern husking units with rubber-roll technology",
  "Parboiling and steaming lines (Golden Sella & Steam grades)",
  "Dedicated reprocessing unit for specialty grades",
  "3 optical colour sorters — 99.9% accuracy",
  "4 milling lines — continuous throughput",
  "In-house quality control laboratory",
  "Climate-controlled paddy storage silos",
  "Private label packing lines (1kg to 1,000kg)",
  "Container loading under SGS supervision",
];

export default function InfrastructurePage() {
  return (
    <main className="bg-[#0a1f15] text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image src={FACILITY} alt="Lavish Foods milling facility" fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-[#0a1f15]/65" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-8 pb-14 max-w-7xl mx-auto w-full">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4 w-fit">
            Infrastructure
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-3 leading-tight">
            State-of-the-art milling.
            <br />
            <span className="text-green-400">Okara, Punjab.</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Every grain audited before it leaves our floor.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0d2318] border-b border-green-800/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-green-800/30">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0d2318] p-8 text-center">
              <div className="text-4xl md:text-5xl font-serif text-[#C9A84C] mb-1">{s.value}</div>
              <div className="text-white text-sm font-medium mb-1">{s.label}</div>
              <div className="text-green-500/60 text-xs font-mono">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-6">
              Facility Capabilities
            </span>
            <h2 className="text-4xl font-serif text-white mb-8 leading-tight">
              Every stage in-house.
              <br />
              <span className="text-green-400">Zero compromise.</span>
            </h2>
            <ul className="space-y-3">
              {capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-green-300 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 lg:h-[480px] overflow-hidden">
            <Image src={FARM} alt="Punjab rice farming" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f15]/50 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#0a1f15]/80 border border-green-800/40 px-4 py-2">
              <span className="text-green-400 text-[10px] font-mono tracking-[0.2em] uppercase">
                Direct farm partnerships · Punjab
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 8-stage process */}
      <div className="py-20 px-6 md:px-8 bg-[#0d2318] border-t border-green-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
              Milling Process
            </span>
            <h2 className="text-4xl font-serif text-white">From paddy to port — eight precise stages.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-green-800/20">
            {processSteps.map((s) => (
              <div key={s.num} className="bg-[#0d2318] p-7 hover:bg-green-900/15 transition-colors group">
                <div className="text-[#C9A84C]/25 text-5xl font-serif font-bold leading-none mb-5">{s.num}</div>
                <h3 className="text-white font-serif text-lg mb-1 group-hover:text-green-300 transition-colors">{s.title}</h3>
                <div className="text-[#C9A84C] text-[10px] font-mono tracking-wide mb-3">{s.sub}</div>
                <p className="text-green-500/60 text-xs leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to see it in action?</h2>
          <p className="text-green-400/70 text-sm mb-8">Request a facility tour or ask for our full capability document.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/4915901623270?text=I%27d%20like%20to%20request%20a%20facility%20tour%20or%20capability%20document." target="_blank" rel="noopener noreferrer"
              className="bg-[#C9A84C] text-[#0a1f15] font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#D4AF57] transition-colors">
              Request Facility Tour
            </a>
            <Link href="/#contact"
              className="border border-green-600 text-green-300 font-semibold text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-green-900/30 transition-colors">
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
