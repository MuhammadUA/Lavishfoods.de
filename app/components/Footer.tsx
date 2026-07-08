const WHATSAPP = "https://wa.me/923139999404?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";

const links = {
  Products: ["1121 Basmati", "Super Kernel", "PK-386", "IRRI-9", "IRRI-6", "Super Fine Sella"],
  Services: ["Rice Export", "Private Label", "Custom Packaging", "Contract Farming", "Quality Assurance"],
  Export: ["MOQ & Terms", "Documentation", "Export Process", "Global Shipping", "Certifications"],
  Company: ["About Us", "Infrastructure", "Quality Lab", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-[#071510] border-t border-green-800/30">
      {/* CTA strip */}
      <div className="bg-green-900/20 border-b border-green-800/30 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-serif text-2xl mb-1">
              Ready to start your first order?
            </h3>
            <p className="text-green-400/70 text-sm">
              Send us your specifications and receive a detailed quotation within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A84C] text-[#0a1f15] font-bold text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#D4AF57] transition-colors text-center"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="border border-green-600 text-green-300 font-semibold text-xs tracking-widest uppercase px-6 py-3 hover:bg-green-900/30 transition-colors text-center"
            >
              Send Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#C9A84C] flex items-center justify-center">
                <span className="text-[#0a1f15] font-bold text-sm font-serif">LF</span>
              </div>
              <span className="text-white font-serif font-semibold text-base">Lavish Foods</span>
            </div>
            <p className="text-green-500/70 text-sm leading-relaxed mb-4">
              Premium Pakistani Basmati rice exporter. ISO 22000 · HACCP · HALAL certified.
              Shipping from Karachi &amp; Port Qasim to 30+ countries.
            </p>
            <div className="text-green-600 text-xs font-mono space-y-1">
              <div>Okara, Punjab, Pakistan</div>
              <div>lavishfoods.de</div>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[#C9A84C] text-[10px] font-mono tracking-[0.25em] uppercase mb-4">
                {group}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-green-500 hover:text-green-300 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-green-800/30 pt-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {["ISO 22000", "HACCP Certified", "Halal Authority", "SGS Inspected", "FDA Registered", "SMETA SEDEX"].map((c) => (
              <span
                key={c}
                className="border border-green-800/40 text-green-600 text-[10px] font-mono tracking-[0.2em] uppercase px-3 py-1.5"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-800/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-green-700 text-xs font-mono">
            © {new Date().getFullYear()} Lavish Foods · lavishfoods.de · All rights reserved.
          </span>
          <span className="text-green-700 text-xs font-mono">
            Okara, Punjab, Pakistan · Export Division
          </span>
        </div>
      </div>
    </footer>
  );
}
