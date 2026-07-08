"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "https://wa.me/4915901623270?text=Hello%2C%20I%27m%20interested%20in%20Lavish%20Foods%20rice%20export.";
const LOGO = "https://lavishfoods.com.pk/assets/logo-DaH6OKh_.png";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/certifications", label: "Certifications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#060d1b]/96 backdrop-blur-md border-b border-white/[0.08]"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={LOGO} alt="Lavish Foods" width={38} height={38} className="rounded-full" unoptimized />
          <div className="hidden sm:block">
            <div className="text-white text-sm font-serif leading-none">Lavish Foods</div>
            <div className="text-[#C9A84C] text-[9px] font-mono tracking-[0.25em] uppercase leading-none mt-0.5">Europe · Germany</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-white text-[11px] tracking-[0.18em] uppercase font-medium transition-colors gold-link"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] text-[#060d1b] text-[10px] font-bold tracking-[0.25em] uppercase px-5 py-2 hover:bg-[#D4AF57] transition-all duration-200 hover:scale-[1.02]"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 text-xs tracking-[0.25em] uppercase font-mono border border-white/[0.15] px-3 py-1.5 hover:border-white/30 transition-colors"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#060d1b]/98 border-t border-white/[0.08] px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-300 text-xs tracking-[0.25em] uppercase py-2 border-b border-white/[0.08]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#C9A84C] text-[#060d1b] text-xs font-bold tracking-[0.25em] uppercase py-3 mt-4 hover:bg-[#D4AF57] transition-colors"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
}
