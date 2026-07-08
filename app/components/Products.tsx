import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/products";

// Show 6 hero products on homepage
const featured = products.slice(0, 6);

export default function Products() {
  return (
    <section id="products" className="bg-[#060d1b] py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-300 border border-green-800 px-3 py-1 inline-block mb-4">
              Our Paddy Varieties
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Six cultivars.
              <br />
              <span className="text-slate-300">Twelve grades.</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="self-start border border-green-600 text-slate-300 font-semibold text-[10px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-green-900/30 transition-colors"
          >
            Learn About Rice Grades →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-green-800/30">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group bg-[#060d1b] hover:bg-green-900/20 transition-colors duration-300 block"
            >
              {/* Product image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f15] via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#C9A84C] bg-[#060d1b]/80 border border-[#C9A84C]/30 px-2 py-1">
                    {p.tag.split(" · ")[0]}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-600 text-[10px] font-mono">Grain · {p.grain}</span>
                  <span className="text-green-700 text-[10px] font-mono group-hover:text-[#C9A84C] transition-colors">View →</span>
                </div>
                <h3 className="text-xl font-serif text-white group-hover:text-slate-300 transition-colors">
                  {p.name}
                </h3>
                <p className="text-green-500/60 text-xs leading-relaxed mt-2 line-clamp-2">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-green-600 text-slate-300 font-semibold text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-green-900/30 transition-colors"
          >
            View All 15 Varieties →
          </Link>
        </div>
      </div>
    </section>
  );
}
