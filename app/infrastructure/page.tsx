import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure Lavish Foods Milling Facility",
  description:
    "State-of-the-art rice milling facility in Okara, Punjab. 50,000+ MT annual capacity, 4 milling lines, 3 optical sorters, in-house quality lab.",
};

const FACILITY = "https://lavishfoods.com.pk/assets/facility-IHmjPYm1.jpg";
const FARM = "https://lavishfoods.com.pk/assets/farm-hands-Z_SiAFhE.jpg";

const stats = [
  { value: "50,000+", label: "MT / Year", sub: "Annual milling capacity" },
  { value: "10,000", label: "MT Storage", sub: "Climate-controlled silos" },
  { value: "4", label: "Milling Lines", sub: "Continuous throughput" },
  { value: "3", label: "Optical Sorters", sub: "99.9% colour accuracy" },
];

const processSteps = [
  { num: "01", title: "Paddy Procurement", sub: "Direct from Punjab farms", detail: "Long-term partnerships with Punjab growers ensure traceable, consistent paddy sourced direct no middlemen." },
  { num: "02", title: "Paddy Drying", sub: "Moisture controlled to 13%", detail: "Mechanical dryers reduce grain moisture to optimal 13% before milling critical for whiteness and shelf life." },
  { num: "03", title: "Husking", sub: "Rubber roll <0.5% breakage", detail: "Rubber-roll husking gently removes the outer husk with industry-leading breakage rates below 0.5%." },
  { num: "04", title: "Polishing", sub: "Multi-stage to bright finish", detail: "Multiple polishing passes remove the bran layer and produce a bright, uniform, market-ready white grain." },
  { num: "05", title: "Grading", sub: "Length & thickness sorted", detail: "Precision grading cylinders separate grain by length and thickness, ensuring consistent grade in every batch." },
  { num: "06", title: "Optical Sorting", sub: "99.9% accuracy colour sort", detail: "Three optical colour sorters reject discoloured, chalky or damaged grains guaranteeing a clean, uniform lot." },
  { num: "07", title: "Custom Packing", sub: "Your brand, your spec", detail: "Fully flexible packing lines handle 1kg BOPP retail pouches through to 1,000kg FIBC jumbo bags all in-house." },
  { num: "08", title: "Export Loading", sub: "Sealed at Karachi & Port Qasim", detail: "Containers sealed under SGS supervision, loaded at Karachi or Port Qasim with full export documentation." },
];

const capabilities = [
  "Modern husking units with rubber-roll technology",
  "Parboiling and steaming lines (Golden Sella & Steam grades)",
  "Dedicated reprocessing unit for specialty grades",
  "3 optical colour sorters 99.9% accuracy",
  "4 milling lines continuous throughput",
  "In-house quality control laboratory",
  "Climate-controlled paddy storage silos",
  "Private label packing lines (1kg to 1,000kg)",
  "Container loading under SGS supervision",
];

export default function InfrastructurePage() {
  return (
    <main className="bg-[#060d1b] text-white min-h-screen">
      <Navbar />

      {/* Hero full bleed facility photo */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FACILITY}
          alt="Lavish Foods milling facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060d1b]/30 via-[#060d1b]/50 to-[#060d1b]" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-8 pb-16 max-w-7xl mx-auto w-full">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A84C] mb-4 inline-block">
            Infrastructure
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-3 leading-[1.02]">
            State-of-the-art<br />
            <span className="italic text-[#C9A84C]">milling.</span>
          </h1>
          <p className="text-white/50 text-sm font-mono tracking-wide max-w-md">
            Okara, Punjab · Every grain audited before it leaves our floor.
          </p>
        </div>
      </div>

      {/* Stats white section for contrast */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="p-10 text-center">
              <div className="text-5xl font-serif text-[#060d1b] mb-1">{s.value}</div>
              <div className="text-[#060d1b] text-sm font-semibold mb-1">{s.label}</div>
              <div className="text-slate-400 text-[11px] font-mono tracking-wide">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities + farm photo */}
      <div className="py-24 px-6 md:px-8 bg-[#060d1b]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A84C] mb-6 inline-block">
              Facility Capabilities
            </span>
            <h2 className="text-4xl font-serif text-white mb-10 leading-tight">
              Every stage<br />in-house.
            </h2>
            <ul className="space-y-4">
              {capabilities.map((c) => (
                <li key={c} className="flex items-start gap-4">
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-2.5 shrink-0" />
                  <span className="text-slate-300 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden h-80 lg:h-[460px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FARM}
                alt="Punjab rice farming"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d1b]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/70 text-[10px] font-mono tracking-[0.2em] uppercase bg-[#060d1b]/70 px-3 py-1.5 inline-block">
                  Direct farm partnerships · Punjab
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "30+", label: "Export countries" },
                { value: "15+", label: "Rice varieties" },
                { value: "100%", label: "Sortex quality" },
              ].map((s) => (
                <div key={s.label} className="border border-white/[0.08] p-4 text-center">
                  <div className="text-2xl font-serif text-[#C9A84C]">{s.value}</div>
                  <div className="text-slate-500 text-[10px] font-mono tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 8-stage process white section */}
      <div className="bg-white py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A84C] mb-4 inline-block">
              Milling Process
            </span>
            <h2 className="text-4xl font-serif text-[#060d1b]">From paddy to port.</h2>
            <p className="text-slate-400 text-sm mt-2 font-mono">Eight precise, audited stages.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06]">
            {processSteps.map((s) => (
              <div key={s.num} className="bg-white p-8 hover:bg-[#f8f9fb] transition-colors">
                <div className="text-[#C9A84C]/20 text-6xl font-serif font-bold leading-none mb-6">{s.num}</div>
                <h3 className="text-[#060d1b] font-serif text-lg mb-1">{s.title}</h3>
                <div className="text-[#C9A84C] text-[10px] font-mono tracking-wide mb-3">{s.sub}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6 md:px-8 bg-[#060d1b] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to see it in action?</h2>
          <p className="text-slate-500 text-sm mb-10 font-mono">Request a facility tour or ask for our full capability document.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/4915901623270?text=I%27d%20like%20to%20request%20a%20facility%20tour%20or%20capability%20document."
              target="_blank" rel="noopener noreferrer"
              className="bg-[#C9A84C] text-[#060d1b] font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#D4AF57] transition-colors"
            >
              Request Facility Tour
            </a>
            <Link
              href="/#contact"
              className="border border-white/[0.15] text-slate-300 font-semibold text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-white/5 transition-colors"
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
