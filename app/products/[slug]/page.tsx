import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { products, getProduct, getRelated } from "../../lib/products";
import type { Metadata } from "next";

const WHATSAPP_BASE = "https://wa.me/923139999404?text=";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} Lavish Foods`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelated(params.slug);

  const whatsappMsg = encodeURIComponent(
    `Hello, I'm interested in ordering ${product.name} (${product.grain} grain). Please send me a quotation and spec sheet.`
  );

  const specRows = [
    { label: "Length", value: product.specs.length },
    { label: "Width", value: product.specs.width },
    { label: "Thickness", value: product.specs.thickness },
    { label: "Classification", value: product.specs.classification },
    { label: "Aroma", value: product.specs.aroma },
    { label: "Moisture", value: product.specs.moisture },
    { label: "Broken", value: product.specs.broken },
    { label: "Whiteness", value: product.specs.whiteness },
  ];

  return (
    <main className="bg-[#060d1b] text-white min-h-screen">
      <Navbar />

      {/* Back link */}
      <div className="pt-28 pb-0 px-6 md:px-8 bg-[#0b1527] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-green-500 hover:text-slate-300 text-[11px] font-mono tracking-[0.2em] uppercase transition-colors mb-6 block"
          >
            ← All Varieties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12">
            {/* Product Image */}
            <div className="relative h-72 md:h-96 lg:h-[480px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2318]/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#C9A84C] bg-[#060d1b]/80 border border-[#C9A84C]/30 px-2 py-1">
                  {product.tag.split(" · ")[0]}
                </span>
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col justify-center">
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C9A84C] mb-3">
                {product.tag}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-3 leading-tight">
                {product.name}
              </h1>
              <div className="text-green-500 text-xs font-mono tracking-[0.2em] mb-6">
                GRAIN · {product.grain}
              </div>
              <p className="text-slate-300/70 text-base leading-relaxed mb-8">
                {product.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={`${WHATSAPP_BASE}${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0a1f15] font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-4 hover:bg-[#D4AF57] transition-colors"
                >
                  Request Free Sample
                </a>
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(`Please send me the spec sheet for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-green-600 text-slate-300 font-semibold text-[11px] tracking-[0.2em] uppercase px-6 py-4 hover:bg-green-900/30 transition-colors"
                >
                  Download Spec Sheet
                </a>
              </div>
              <p className="text-slate-500 text-[10px] font-mono">
                Spec sheets sent on request via WhatsApp/email within 24 hours.
              </p>

              {/* Badge row */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Premium Grade", "100% Sortex Quality", "ISO 22000 Certified"].map((b) => (
                  <span key={b} className="border border-green-800/50 text-green-500 text-[9px] font-mono tracking-[0.15em] uppercase px-3 py-1.5">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs + Packing */}
      <div className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Rice Characteristics */}
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-300 border border-green-800 px-3 py-1 inline-block mb-3">
                Rice Characteristics
              </span>
              <p className="text-slate-500 text-xs font-mono">
                100% Sortex Quality · Premium Export Grade
              </p>
            </div>

            <div className="border border-white/[0.08] divide-y divide-green-800/20">
              {specRows.map((row) => (
                <div key={row.label} className="flex justify-between items-center px-5 py-3.5 hover:bg-green-900/10 transition-colors">
                  <span className="text-green-500 text-xs font-mono tracking-wide uppercase">{row.label}</span>
                  <span className="text-white text-sm font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Packing + Request */}
          <div className="space-y-6">
            <div className="border border-white/[0.08]">
              <div className="border-b border-white/[0.08] px-5 py-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-300">
                  Available Packing
                </span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.packing.map((pk) => (
                    <span
                      key={pk}
                      className="border border-green-700/40 text-slate-300 text-xs font-mono px-3 py-1.5"
                    >
                      {pk}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-500 text-xs font-mono uppercase tracking-wide">Min. Order</span>
                    <span className="text-white">{product.moq}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-500 text-xs font-mono uppercase tracking-wide">Container</span>
                    <span className="text-white">{product.container}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Request quotation */}
            <div className="border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-6">
              <h3 className="text-white font-serif text-xl mb-2">Request Quotation</h3>
              <p className="text-slate-300/70 text-sm leading-relaxed mb-5">
                Send us your requirements quantity, destination, and packaging and receive a
                detailed quotation within 24 hours.
              </p>
              <a
                href={`${WHATSAPP_BASE}${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#C9A84C] text-[#0a1f15] font-bold text-[11px] tracking-[0.2em] uppercase py-4 hover:bg-[#D4AF57] transition-colors"
              >
                Request Quotation for This Product
              </a>
            </div>

            {/* Certifications mini */}
            <div className="border border-white/[0.08] p-5">
              <div className="flex flex-wrap gap-2">
                {["ISO 22000", "HACCP", "Halal Certified", "SGS Inspected", "FDA Compliant"].map((c) => (
                  <span key={c} className="flex items-center gap-1.5 text-green-500 text-[10px] font-mono">
                    <svg className="w-3 h-3 text-[#C9A84C]" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Varieties */}
      <div className="py-20 px-6 md:px-8 bg-[#0b1527] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif text-white mb-8">More Varieties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-green-800/20">
            {related.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group bg-[#0b1527] hover:bg-green-900/15 transition-colors block"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2318] to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-slate-500 text-[9px] font-mono mb-1">Grain · {p.grain}</div>
                  <div className="text-white text-sm font-serif group-hover:text-slate-300 transition-colors leading-snug">
                    {p.name}
                  </div>
                  <div className="text-[#C9A84C] text-[10px] font-mono mt-2 group-hover:underline">VIEW →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
