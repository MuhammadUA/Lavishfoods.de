import Image from "next/image";

const certs = [
  { src: "https://lavishfoods.com.pk/assets/cert-iso-BfsJoiIm.png", label: "ISO 22000" },
  { src: "https://lavishfoods.com.pk/assets/cert-haccp-C2cWa5E9.png", label: "HACCP Certified" },
  { src: "https://lavishfoods.com.pk/assets/cert-halal-DWWHOjOa.png", label: "Halal Authority" },
  { src: "https://lavishfoods.com.pk/assets/cert-sgs-B9Mt1v3N.png", label: "SGS Inspected" },
];

export default function Certifications() {
  return (
    <section className="bg-[#0d2318] py-20 px-6 md:px-8 border-y border-green-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-4">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Certified for global markets.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {certs.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-4 group">
              <div className="relative w-28 h-28 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <Image
                  src={c.src}
                  alt={c.label}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-green-500 text-[10px] font-mono tracking-[0.2em] uppercase text-center">
                {c.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-green-800/30 pt-8 text-center">
          <p className="text-green-500/60 text-xs font-mono tracking-wide">
            SGS Inspected · FDA Registered · HACCP · ISO 22000 · Halal Authority · SMETA SEDEX
          </p>
        </div>
      </div>
    </section>
  );
}
