export default function CertBar() {
  const certs = [
    "ISO 22000",
    "◆",
    "HACCP Certified",
    "◆",
    "Halal Authority",
    "◆",
    "SGS Inspected",
    "◆",
    "SMETA SEDEX",
    "◆",
    "FDA Registered",
    "◆",
    "ISO 22000",
    "◆",
    "HACCP Certified",
    "◆",
    "Halal Authority",
    "◆",
    "SGS Inspected",
    "◆",
    "SMETA SEDEX",
    "◆",
    "FDA Registered",
  ];

  return (
    <div className="bg-green-900/30 border-y border-green-800/40 py-3 overflow-hidden">
      <div className="marquee-track">
        {certs.concat(certs).map((c, i) => (
          <span
            key={i}
            className={`px-4 text-xs font-mono tracking-[0.2em] uppercase whitespace-nowrap ${
              c === "◆" ? "text-[#C9A84C]" : "text-green-400"
            }`}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
