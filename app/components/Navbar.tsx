"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PHONE_DE = "+49 1590 1623270";
const PHONE_US = "+1 (778) 900-6780";
const EMAIL = "contact@lavishfoods.de";
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
    <>
      {/* Top info bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0d2318] border-b border-green-800/40 py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono tracking-wide">
          <div className="flex items-center gap-3 text-green-400">
            <a href={`tel:${PHONE_DE}`} className="hover:text-white transition-colors">{PHONE_DE}</a>
            <span className="text-green-700 hidden sm:block">·</span>
            <a href={`tel:${PHONE_US}`} className="hover:text-white transition-colors hidden sm:block">{PHONE_US}</a>
            <span className="text-green-700 hidden md:block">·</span>
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors hidden md:block">{EMAIL}</a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-green-500 tracking-[0.2em] uppercase text-[10px]">
            ISO 22000 <span className="text-green-700">·</span> HACCP <span className="text-green-700">·</span> HALAL <span className="text-green-700">·</span> SGS INSPECTED
          </div>
          <div className="flex items-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-[#C9A84C] transition-colors" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.359-.214-3.722.97.991-3.622-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`fixed top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#0a1f15]/96 backdrop-blur-md border-b border-green-800/30" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={LOGO}
              alt="Lavish Foods"
              width={48}
              height={48}
              className="rounded-full"
              unoptimized
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-green-300 hover:text-white text-[11px] tracking-[0.2em] uppercase font-medium transition-colors"
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
              className="bg-[#C9A84C] text-[#0a1f15] text-[10px] font-bold tracking-[0.25em] uppercase px-5 py-2 hover:bg-[#D4AF57] transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-green-300 text-xs tracking-[0.25em] uppercase font-mono border border-green-700/50 px-3 py-1.5 hover:border-green-500 transition-colors"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a1f15]/98 border-t border-green-800/30 px-6 py-6 space-y-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-green-300 text-xs tracking-[0.25em] uppercase py-2 border-b border-green-800/20"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              className="block text-center border border-green-700 text-green-300 text-xs font-semibold tracking-[0.25em] uppercase py-3 mt-4 hover:bg-green-900/30 transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
