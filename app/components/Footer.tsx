import Link from "next/link";

const WHATSAPP = "https://wa.me/4915901623270?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";
const EMAIL = "contact@lavishfoods.de";
const PHONE_DE = "+49 1590 1623270";
const PHONE_US = "+1 (778) 900-6780";

const offices = [
  {
    label: "USA Office",
    address: "1443 SW 1200th Rd\nHolden, Missouri, USA",
    phone: PHONE_US,
    flag: "🇺🇸",
  },
  {
    label: "European Office",
    address: "Steinbachstr 128\n66424 Homburg Saar, Germany",
    phone: PHONE_DE,
    flag: "🇩🇪",
  },
  {
    label: "Origin / Mill",
    address: "Pakistan — details on request",
    phone: null,
    flag: "🌾",
  },
];

const links = {
  Products: [
    { label: "1121 Basmati", href: "/products/1121-basmati-golden-sella" },
    { label: "Super Kernel", href: "/products/super-kernel-basmati-white" },
    { label: "PK-386", href: "/products/pk-386-white" },
    { label: "IRRI-9", href: "/products/irri-9-white" },
    { label: "IRRI-6", href: "/products/irri-6-white" },
    { label: "View All", href: "/products" },
  ],
  Company: [
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Certifications", href: "/certifications" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/#contact" },
  ],
  Export: [
    { label: "Export Process", href: "/#export" },
    { label: "Packaging Options", href: "/#contact" },
    { label: "Global Shipping", href: "/#contact" },
    { label: "Get a Quote", href: "/#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#071510] border-t border-green-800/30">
      {/* CTA strip */}
      <div className="bg-green-900/20 border-b border-green-800/30 py-8 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-serif text-2xl mb-1">Ready to start your first order?</h3>
            <p className="text-green-400/70 text-sm">Send us your specifications — quotation within 24 hours.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="bg-[#C9A84C] text-[#0a1f15] font-bold text-[10px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-[#D4AF57] transition-colors text-center">
              Chat on WhatsApp
            </a>
            <a href="/#contact"
              className="border border-green-600 text-green-300 font-semibold text-[10px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-green-900/30 transition-colors text-center">
              Send Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Office addresses */}
      <div className="border-b border-green-800/30 py-10 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-green-600 mb-6">Our Offices</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((o) => (
              <div key={o.label} className="flex gap-4">
                <span className="text-2xl mt-0.5">{o.flag}</span>
                <div>
                  <div className="text-[#C9A84C] text-[10px] font-mono tracking-[0.2em] uppercase mb-1">{o.label}</div>
                  <div className="text-green-300 text-sm leading-relaxed whitespace-pre-line">{o.address}</div>
                  {o.phone && (
                    <a href={`tel:${o.phone}`} className="text-green-500 text-xs font-mono hover:text-green-300 transition-colors mt-1 block">
                      {o.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-white font-serif text-lg mb-3">Lavish Foods</div>
            <p className="text-green-500/70 text-sm leading-relaxed mb-4">
              Premium Pakistani Basmati rice exporter. ISO 22000 · HACCP · HALAL certified. Shipping to 30+ countries worldwide.
            </p>
            <div className="space-y-1">
              <a href={`mailto:${EMAIL}`} className="block text-green-500 text-xs font-mono hover:text-green-300 transition-colors">
                {EMAIL}
              </a>
              <a href={`tel:${PHONE_DE}`} className="block text-green-500 text-xs font-mono hover:text-green-300 transition-colors">
                {PHONE_DE}
              </a>
              <a href={`tel:${PHONE_US}`} className="block text-green-500 text-xs font-mono hover:text-green-300 transition-colors">
                {PHONE_US}
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[#C9A84C] text-[10px] font-mono tracking-[0.25em] uppercase mb-4">{group}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-green-500 hover:text-green-300 text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div className="border-t border-green-800/30 pt-8 mb-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {["ISO 22000", "HACCP Certified", "Halal Authority", "SGS Inspected", "FDA Registered", "SMETA SEDEX"].map((c) => (
              <span key={c} className="border border-green-800/40 text-green-600 text-[9px] font-mono tracking-[0.2em] uppercase px-3 py-1.5">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-800/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-green-700 text-xs font-mono">
            © {new Date().getFullYear()} Lavish Foods · lavishfoods.de · All rights reserved.
          </span>
          <span className="text-green-700 text-xs font-mono">Germany · USA · Export Division</span>
        </div>
      </div>
    </footer>
  );
}
