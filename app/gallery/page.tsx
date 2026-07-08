import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Lavish Foods Rice & Facility Photos",
  description:
    "Photos of our premium Basmati and IRRI rice varieties, milling facility, paddy farms and packaging operations in Okara, Punjab.",
};

const B = "https://lavishfoods.com.pk/assets";
const SB = "https://wddhkskdmjfbionlvuaz.supabase.co/storage/v1/object/public/product-images";

const sections = [
  {
    title: "Rice Varieties",
    sub: "Every grade, photographed at specification.",
    items: [
      { src: `${B}/rice-1121-sella-Dvk9t5j6.jpg`, caption: "1121 Basmati Golden Sella", tag: "8.30 mm", href: "/products/1121-basmati-golden-sella" },
      { src: `${B}/rice-1121-steam-3X5eimDw.jpg`, caption: "1121 Basmati Steam Rice", tag: "8.30 mm", href: "/products/1121-basmati-steam" },
      { src: `${SB}/1121-basmati-white/1779206969518.jpg`, caption: "1121 Basmati White Rice", tag: "8.30 mm", href: "/products/1121-basmati-white" },
      { src: `${B}/rice-sk-white-CmK7FfIa.jpg`, caption: "Super Kernel Basmati White", tag: "7.20 mm", href: "/products/super-kernel-basmati-white" },
      { src: `${SB}/super-kernel-basmati-golden-sella/1779207258084.png`, caption: "Super Kernel Golden Sella", tag: "7.20 mm", href: "/products/super-kernel-basmati-golden-sella" },
      { src: `${B}/rice-sk-steam-CZ0V0izJ.jpg`, caption: "Super Kernel Steam Rice", tag: "7.20 mm", href: "/products/super-kernel-basmati-steam" },
      { src: `${B}/rice-pk386-white-BKniRG8U.jpg`, caption: "PK-386 White Rice", tag: "6.80 mm", href: "/products/pk-386-white" },
      { src: `${SB}/pk-386-sella/1779207475181.jpg`, caption: "PK-386 Sella Parboiled", tag: "6.80 mm", href: "/products/pk-386-sella" },
      { src: `${B}/rice-pk386-steam-B3P8sRJZ.jpg`, caption: "PK-386 Steam Rice", tag: "6.80 mm", href: "/products/pk-386-steam" },
      { src: `${B}/rice-super-fine-CG5iHCIr.jpg`, caption: "Super Fine Sella", tag: "7.90 mm", href: "/products/super-fine-sella" },
      { src: `${B}/rice-irri9-white-CBVplULI.jpg`, caption: "IRRI-9 White Rice", tag: "6.40 mm", href: "/products/irri-9-white" },
      { src: `${B}/rice-irri9-sella-BVpx73cQ.jpg`, caption: "IRRI-9 Sella Parboiled", tag: "6.40 mm", href: "/products/irri-9-sella" },
      { src: `${B}/rice-irri6-white-DayCFp8n.jpg`, caption: "IRRI-6 White 5% Broken", tag: "6.20 mm", href: "/products/irri-6-white" },
      { src: `${B}/rice-irri6-parboiled-Ck-ptzTi.jpg`, caption: "IRRI-6 Parboiled 5% Broken", tag: "6.20 mm", href: "/products/irri-6-parboiled" },
      { src: `${B}/rice-irri6-broken-C87up9TD.jpg`, caption: "IRRI-6 100% Broken", tag: "4.50 mm", href: "/products/irri-6-100-broken" },
    ],
  },
  {
    title: "Farm & Origin",
    sub: "From the alluvial soils of Punjab.",
    items: [
      { src: `${B}/hero-field-DpK1PLxD.jpg`, caption: "Rice fields at dawn — Okara, Punjab", tag: "Origin", href: null },
      { src: `${B}/farm-hands-Z_SiAFhE.jpg`, caption: "Paddy procurement — direct from farms", tag: "Sourcing", href: null },
    ],
  },
  {
    title: "Facility & Operations",
    sub: "State-of-the-art milling in Okara.",
    items: [
      { src: `${B}/facility-IHmjPYm1.jpg`, caption: "Lavish Foods milling facility — Okara", tag: "Infrastructure", href: "/infrastructure" },
      { src: `${B}/packaging-BNAfPZPr.jpg`, caption: "Packing lines — custom branding available", tag: "Packaging", href: null },
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#060d1b] text-white min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="pt-36 pb-16 px-6 md:px-8 bg-[#0b1527] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-300 border border-green-800 px-3 py-1 inline-block mb-6">
            Gallery
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
            See what we export.
          </h1>
          <p className="text-slate-300/70 text-base max-w-xl leading-relaxed">
            Rice varieties, farm origins, milling facility and packaging operations — documented at every stage.
          </p>
        </div>
      </div>

      {/* Gallery sections */}
      <div className="py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {sections.map((section) => (
            <div key={section.title}>
              {/* Section header */}
              <div className="flex items-end justify-between mb-8 border-b border-white/[0.08] pb-6">
                <div>
                  <h2 className="text-2xl font-serif text-white">{section.title}</h2>
                  <p className="text-slate-500/70 text-sm mt-1">{section.sub}</p>
                </div>
                <span className="text-slate-600 text-xs font-mono">{section.items.length} photos</span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-green-800/20">
                {section.items.map((item) => {
                  const Inner = (
                    <div className="bg-[#060d1b] group relative overflow-hidden">
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f15] via-transparent to-transparent" />
                        <div className="absolute top-2 left-2">
                          <span className="text-[9px] font-mono tracking-[0.1em] uppercase text-[#C9A84C] bg-[#060d1b]/80 px-2 py-0.5">
                            {item.tag}
                          </span>
                        </div>
                        {item.href && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-[10px] font-mono tracking-[0.2em] uppercase bg-[#060d1b]/70 px-3 py-1.5">
                              View Details →
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="px-3 py-3">
                        <p className="text-slate-300 text-xs leading-snug group-hover:text-white transition-colors">{item.caption}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <Link key={item.caption} href={item.href}>
                      {Inner}
                    </Link>
                  ) : (
                    <div key={item.caption}>{Inner}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-8 bg-[#0b1527] border-t border-white/[0.08] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-serif text-white mb-3">Request samples or spec sheets</h2>
          <p className="text-slate-300/70 text-sm mb-8">
            See any variety you&apos;d like to order? Send us your target market and quantity and receive a quotation within 24 hours.
          </p>
          <Link href="/products"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0a1f15] font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#D4AF57] transition-colors">
            Browse All Varieties →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
