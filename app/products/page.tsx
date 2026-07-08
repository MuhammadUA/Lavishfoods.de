import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rice Varieties Lavish Foods Premium Pakistani Basmati",
  description:
    "Twelve premium Pakistani rice grades 1121 Basmati, Super Kernel, PK-386, IRRI-9, IRRI-6 and more. View specs, packaging options and request a quote.",
};

const comparison = [
  { variety: "1121 Basmati", type: "Extra Long Basmati", grain: "8.30 mm", aroma: "Strong", bestFor: "Biryani · Pilaf · Premium retail" },
  { variety: "Super Fine Sella", type: "Specialty Parboiled", grain: "7.90 mm", aroma: "Present", bestFor: "Hospitality · Premium retail" },
  { variety: "Super Kernel", type: "Premium Basmati", grain: "7.20 mm", aroma: "Strong", bestFor: "All purpose · Retail · HORECA" },
  { variety: "PK-386", type: "Long Grain", grain: "6.80 mm", aroma: "Mild", bestFor: "Bulk wholesale · Trade" },
  { variety: "IRRI-9", type: "Long Grain", grain: "6.40 mm", aroma: "None", bestFor: "Processing · Bulk export" },
  { variety: "IRRI-6", type: "Long Grain", grain: "6.20 mm", aroma: "None", bestFor: "Industrial · Wholesale" },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#060d1b] text-white min-h-screen">
      <Navbar />

      {/* Page header */}
      <div className="pt-32 pb-16 px-6 md:px-8 border-b border-white/[0.08] bg-[#0b1527]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-300 border border-green-800 px-3 py-1 inline-block mb-6">
            Our Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
            Twelve premium rice varieties.
          </h1>
          <p className="text-slate-300/70 text-base max-w-2xl leading-relaxed">
            From the world&apos;s longest grain 1121 Basmati to economical bulk IRRI lots every
            grade milled to your exact export specification.
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-green-800/20">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group bg-[#060d1b] hover:bg-green-900/15 transition-colors block"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f15] via-[#0a1f15]/20 to-transparent" />
                  {p.isNew && (
                    <div className="absolute top-3 right-3 bg-[#C9A84C] text-[#0a1f15] text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1">
                      NEW
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-[#C9A84C] bg-[#060d1b]/80 border border-[#C9A84C]/30 px-2 py-1">
                      {p.tag.split(" · ")[0]}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-500 text-[10px] font-mono">Grain · {p.grain}</span>
                    <span className="text-slate-600 text-[10px] font-mono group-hover:text-[#C9A84C] transition-colors">
                      View Spec →
                    </span>
                  </div>
                  <h2 className="text-lg font-serif text-white group-hover:text-slate-300 transition-colors leading-snug">
                    {p.name}
                  </h2>
                  <p className="text-slate-500/60 text-xs leading-relaxed mt-2 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-slate-500">
                      {p.tag}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="py-20 px-6 md:px-8 bg-[#0b1527] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-300 border border-green-800 px-3 py-1 inline-block mb-4">
              Compare
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Variety comparison.</h2>
            <p className="text-slate-300/60 text-sm mt-2">Quick reference for choosing the right grade for your market.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  {["Variety", "Type", "Grain Length", "Aroma", "Best For"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 text-[10px] font-mono tracking-[0.2em] uppercase text-green-500">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-green-800/20">
                {comparison.map((row) => (
                  <tr key={row.variety} className="hover:bg-green-900/10 transition-colors">
                    <td className="py-4 px-4 text-white font-serif">{row.variety}</td>
                    <td className="py-4 px-4 text-slate-300 text-sm">{row.type}</td>
                    <td className="py-4 px-4 text-[#C9A84C] font-mono text-sm">{row.grain}</td>
                    <td className="py-4 px-4 text-slate-300 text-sm">{row.aroma}</td>
                    <td className="py-4 px-4 text-slate-300/70 text-sm">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
