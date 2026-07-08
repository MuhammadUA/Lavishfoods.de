import Image from "next/image";

const FACILITY_IMG = "https://lavishfoods.com.pk/assets/facility-IHmjPYm1.jpg";

const infraStats = [
  { value: "50,000+", label: "MT / Year Capacity" },
  { value: "10,000", label: "MT Storage" },
  { value: "3", label: "Optical Sorters" },
  { value: "4", label: "Milling Lines" },
];

export default function Infrastructure() {
  return (
    <section className="bg-[#0b1527] py-24 px-6 md:px-8 border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-300 border border-green-800 px-3 py-1 inline-block mb-6">
              Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              State-of-the-art milling
              <br />
              <span className="text-slate-300">facility Okara, Punjab</span>
            </h2>
            <p className="text-slate-300/70 text-base leading-relaxed mb-8">
              Modern husking units, parboiling and steaming lines, dedicated reprocessing unit,
              optical color sorters and a fully equipped quality control lab every grain audited
              before it leaves our floor.
            </p>
            <div className="grid grid-cols-2 gap-px bg-green-800/30">
              {infraStats.map((s) => (
                <div key={s.label} className="bg-[#0b1527] p-6 text-center">
                  <div className="text-3xl md:text-4xl font-serif text-[#C9A84C] mb-1">{s.value}</div>
                  <div className="text-green-500 text-[10px] tracking-[0.2em] uppercase font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Facility image */}
          <div className="relative h-80 lg:h-[460px] overflow-hidden">
            <Image
              src={FACILITY_IMG}
              alt="Lavish Foods milling facility, Okara"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2318]/50 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#060d1b]/80 border border-white/[0.08] px-4 py-2">
              <span className="text-slate-300 text-[10px] font-mono tracking-[0.2em] uppercase">
                Okara, Punjab, Pakistan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
