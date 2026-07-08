const reviews = [
  {
    flag: "🇳🇱",
    role: "Trading Manager",
    location: "Rotterdam, Netherlands",
    text: "We've been importing 1121 Basmati from Lavish Foods for 3 years. Consistency in quality is exceptional.",
  },
  {
    flag: "🇸🇦",
    role: "Importer",
    location: "Jeddah, Saudi Arabia",
    text: "Best sella rice supplier we've found in Pakistan. Documentation always perfect.",
  },
  {
    flag: "🇦🇪",
    role: "Procurement Head",
    location: "Dubai, UAE",
    text: "Their Super Kernel meets our retail spec every single shipment. Reliable, professional.",
  },
  {
    flag: "🇬🇧",
    role: "Wholesale Buyer",
    location: "Birmingham, UK",
    text: "Fast quotes, real samples, and shipments that arrive exactly as promised.",
  },
  {
    flag: "🇰🇼",
    role: "Distributor",
    location: "Kuwait City, Kuwait",
    text: "Outstanding support from inquiry to bill of lading. Truly an export-ready partner.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0d2318] py-24 px-6 border-y border-green-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
            Buyers Worldwide
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Trusted by importers
            <br />
            <span className="text-green-400">across continents.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((r, i) => (
            <TestimonialCard key={i} r={r} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {reviews.slice(3).map((r, i) => (
            <TestimonialCard key={i + 3} r={r} />
          ))}
        </div>

        {/* Markets row */}
        <div className="mt-16 border-t border-green-800/30 pt-12">
          <p className="text-center text-green-600 text-xs font-mono tracking-[0.25em] uppercase mb-8">
            Serving Global Markets · Certified Quality · Reliable Supply · International Compliance
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "UAE","Saudi Arabia","United Kingdom","United States","Australia",
              "Germany","Netherlands","Kuwait","Qatar","Oman","Malaysia","Canada",
            ].map((m) => (
              <span key={m} className="text-green-400 text-xs font-mono tracking-wide">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div className="border border-green-800/40 p-8 hover:border-green-700/60 transition-colors">
      <div className="text-[#C9A84C]/40 text-4xl font-serif leading-none mb-4">"</div>
      <p className="text-green-300 text-sm leading-relaxed mb-6 italic">{r.text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-green-800/30">
        <span className="text-2xl">{r.flag}</span>
        <div>
          <div className="text-white text-xs font-semibold tracking-wide">{r.role}</div>
          <div className="text-green-600 text-xs font-mono">{r.location}</div>
        </div>
      </div>
    </div>
  );
}
