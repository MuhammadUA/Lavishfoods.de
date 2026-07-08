"use client";
import { useState, useEffect } from "react";

const WHATSAPP = "https://wa.me/923001234567?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#quality", label: "Quality" },
    { href: "#export", label: "Export" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1f15]/95 backdrop-blur-md border-b border-green-800/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#C9A84C] flex items-center justify-center">
            <span className="text-[#0a1f15] font-bold text-sm font-serif">LF</span>
          </div>
          <div>
            <span className="text-white font-serif font-semibold text-base tracking-wide">
              Lavish Foods
            </span>
            <span className="block text-green-400 text-[10px] tracking-[0.2em] font-mono uppercase">
              lavishfoods.de
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-green-300 hover:text-white text-sm tracking-wider uppercase font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] text-[#0a1f15] text-xs font-bold tracking-widest uppercase px-4 py-2 hover:bg-[#D4AF57] transition-colors"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-green-300 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a1f15]/98 border-t border-green-800/40 px-6 py-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-green-300 text-sm tracking-wider uppercase font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#C9A84C] text-[#0a1f15] text-xs font-bold tracking-widest uppercase px-4 py-3 text-center mt-2"
          >
            Get Quote on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
