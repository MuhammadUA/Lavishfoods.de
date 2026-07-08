import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/products";
import Reveal from "./Reveal";

const featured = products.slice(0, 6);

export default function Products() {
  return (
    <section id="products" className="bg-[#060d1b] py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal>
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A84C] mb-4 inline-block">
                — Products
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Fifteen grades.<br />
                <span className="text-slate-400">One standard of quality.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Link
              href="/products"
              className="self-start border border-white/[0.15] text-slate-300 font-semibold text-[10px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-white/5 hover:border-white/30 transition-all duration-200"
            >
              View All Grades →
            </Link>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} variant="scale">
              <Link
                href={`/products/${p.slug}`}
                className="group bg-[#060d1b] block card-lift"
              >
                {/* Product image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d1b]/90 via-[#060d1b]/20 to-transparent" />
                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#C9A84C] bg-[#060d1b]/80 border border-[#C9A84C]/30 px-2 py-1">
                      {p.tag.split(" · ")[0]}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/5 transition-colors duration-500" />
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-500 text-[10px] font-mono">{p.grain}</span>
                    <span className="text-slate-600 text-[10px] font-mono group-hover:text-[#C9A84C] transition-colors duration-200">
                      Details →
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-white group-hover:text-[#C9A84C] transition-colors duration-200">
                    {p.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-[#060d1b] font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#C9A84C] transition-all duration-200"
            >
              View All 15 Varieties →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
