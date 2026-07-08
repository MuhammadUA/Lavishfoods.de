const BASE = "https://lavishfoods.com.pk/assets";
const SB = "https://wddhkskdmjfbionlvuaz.supabase.co/storage/v1/object/public/product-images";

export interface Product {
  slug: string;
  name: string;
  tag: string;
  grain: string;
  image: string;
  description: string;
  isNew?: boolean;
  specs: {
    length: string;
    width: string;
    thickness: string;
    classification: string;
    aroma: string;
    moisture: string;
    broken: string;
    whiteness: string;
  };
  packing: string[];
  moq: string;
  container: string;
}

export const products: Product[] = [
  {
    slug: "1121-basmati-golden-sella",
    name: "1121 Basmati Golden Sella",
    tag: "Basmati · Parboiled (Golden Sella)",
    grain: "8.30 mm",
    image: `${BASE}/rice-1121-sella-Dvk9t5j6.jpg`,
    description:
      "1121 Kainaat Basmati is the world's longest grain in Basmati rice, grown in the fertile area of Punjab. The Golden Sella (parboiled) process gives it a firm, non-sticky texture that elongates beautifully on cooking. Preferred across GCC, Middle East and European markets for its consistent quality and natural aroma.",
    specs: {
      length: "8.30 mm",
      width: "1.63 mm",
      thickness: "1.56 mm",
      classification: "Extra Long Grain",
      aroma: "Present",
      moisture: "≤13%",
      broken: "≤1%",
      whiteness: "High Grade",
    },
    packing: ["1kg", "5kg", "25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "1121-basmati-steam",
    name: "1121 Basmati Steam Rice",
    tag: "Basmati · Steam",
    grain: "8.30 mm",
    image: `${BASE}/rice-1121-steam-3X5eimDw.jpg`,
    description:
      "1121 Basmati Steam Rice is partially boiled and de-husked to preserve its natural nutrients. It elongates 2.5× on cooking, offering an authentic aroma and fluffy texture. The perfect choice for European, UK and premium food service buyers who demand consistent quality.",
    specs: {
      length: "8.30 mm",
      width: "1.63 mm",
      thickness: "1.56 mm",
      classification: "Extra Long Grain",
      aroma: "Strong",
      moisture: "≤13%",
      broken: "≤1%",
      whiteness: "High Grade",
    },
    packing: ["1kg", "5kg", "25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "1121-basmati-white",
    name: "1121 Basmati White Rice",
    tag: "Basmati · White Milled",
    grain: "8.30 mm",
    image: `${SB}/1121-basmati-white/1779206969518.jpg`,
    description:
      "Classic 1121 Basmati White Rice — milled with its husk, bran and germ removed, then polished to a bright white shiny finish. Natural aroma preserved throughout. A worldwide favourite for retail shelves and food service, recognised globally for its extraordinary length and authentic fragrance.",
    specs: {
      length: "8.30 mm",
      width: "1.63 mm",
      thickness: "1.56 mm",
      classification: "Extra Long Grain",
      aroma: "Present",
      moisture: "≤13%",
      broken: "≤1%",
      whiteness: "High Grade",
    },
    packing: ["1kg", "2kg", "5kg", "25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "super-kernel-basmati-white",
    name: "Super Kernel Basmati White Rice",
    tag: "Super Kernel · White Aromatic",
    grain: "7.20 mm",
    image: `${BASE}/rice-sk-white-CmK7FfIa.jpg`,
    description:
      "Super Kernel Basmati is the most popular and premium extra long grain rice, cultivated in Punjab and Sindh province of Pakistan. Our tremendous Super Kernel quality is adored worldwide for its exceptional taste and fragrance. Soft texture, authentic aroma, and rich authentic Basmati flavour in every grain.",
    specs: {
      length: "7.20 mm",
      width: "1.60 mm",
      thickness: "1.50 mm",
      classification: "Premium Basmati",
      aroma: "Strong",
      moisture: "≤13%",
      broken: "≤1%",
      whiteness: "High Grade",
    },
    packing: ["1kg", "2kg", "5kg", "10kg", "25kg", "50kg"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "super-kernel-basmati-golden-sella",
    name: "Super Kernel Basmati Golden Sella",
    tag: "Super Kernel · Parboiled Golden Sella",
    grain: "7.20 mm",
    image: `${SB}/super-kernel-basmati-golden-sella/1779207258084.png`,
    description:
      "Super Kernel Basmati Golden Sella undergoes parboiling in the husk, retaining 80% of total rice nutrients before processing. Full of nutrients with a firm golden grain that is healthy and wholesome. Extended shelf life makes it ideal for bulk buyers and long-distance export to Africa, Middle East and Southeast Asia.",
    specs: {
      length: "7.20 mm",
      width: "1.60 mm",
      thickness: "1.50 mm",
      classification: "Premium Basmati",
      aroma: "Present",
      moisture: "≤13%",
      broken: "≤1%",
      whiteness: "Golden",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "super-kernel-basmati-steam",
    name: "Super Kernel Basmati Steam Rice",
    tag: "Super Kernel · Steam",
    grain: "7.20 mm",
    image: `${BASE}/rice-sk-steam-CZ0V0izJ.jpg`,
    description:
      "Super Kernel Basmati Steam Rice is partially boiled and dehusked to preserve its nutrients — the perfect blend of parboiled quality and white rice appearance. Light, fluffy, delicate aroma with a clean finish. An authentic experience for consumers across the globe.",
    specs: {
      length: "7.20 mm",
      width: "1.60 mm",
      thickness: "1.50 mm",
      classification: "Premium Basmati",
      aroma: "Delicate",
      moisture: "≤13%",
      broken: "≤1%",
      whiteness: "High Grade",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "pk-386-white",
    name: "PK-386 White Rice",
    tag: "PK-386 · White Long Grain",
    grain: "6.80 mm",
    image: `${BASE}/rice-pk386-white-BKniRG8U.jpg`,
    description:
      "PK-386 is the most demanded non-Basmati rice grown in Sindh province. Due to its high demand we export the majority to Middle East and African markets. With an average grain length of 6.8mm and excellent cooking result, PK-386 White Rice offers reliable quality at a competitive price point for wholesale buyers.",
    specs: {
      length: "6.80 mm",
      width: "1.70 mm",
      thickness: "1.60 mm",
      classification: "Long Grain",
      aroma: "Mild",
      moisture: "≤13%",
      broken: "≤2%",
      whiteness: "Good",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP", "Jute Bags"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "pk-386-sella",
    name: "PK-386 Sella Rice (Parboiled)",
    tag: "PK-386 · Parboiled Sella",
    grain: "6.80 mm",
    image: `${SB}/pk-386-sella/1779207475181.jpg`,
    description:
      "PK-386 Sella Parboiled Rice undergoes careful parboiling to deliver a golden grain with extended shelf life and firm, non-sticky texture on cooking. Very popular in African, Gulf and Asian wholesale markets. Consistent quality and reliable supply every season.",
    specs: {
      length: "6.80 mm",
      width: "1.70 mm",
      thickness: "1.60 mm",
      classification: "Long Grain",
      aroma: "Mild",
      moisture: "≤13%",
      broken: "≤2%",
      whiteness: "Golden",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "pk-386-steam",
    name: "PK-386 Steam Rice",
    tag: "PK-386 · Steam Processed",
    grain: "6.80 mm",
    image: `${BASE}/rice-pk386-steam-B3P8sRJZ.jpg`,
    description:
      "PK-386 Steam Rice is steam-processed for a soft texture and clean white appearance. Versatile across multiple markets and cuisines. Ideal for buyers seeking a reliable non-Basmati long grain at competitive pricing with consistent batch-to-batch quality.",
    specs: {
      length: "6.80 mm",
      width: "1.70 mm",
      thickness: "1.60 mm",
      classification: "Long Grain",
      aroma: "Mild",
      moisture: "≤13%",
      broken: "≤2%",
      whiteness: "High Grade",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "super-fine-sella",
    name: "Super Fine Sella Parboiled Rice",
    tag: "Specialty · Super Fine Parboiled",
    grain: "7.90 mm",
    image: `${BASE}/rice-super-fine-CG5iHCIr.jpg`,
    description:
      "Super Fine Sella is a premium parboiled specialty grade rice selected for discerning food service buyers, hospitality chains and premium retail. Extra fine milling, superior whiteness degree and parboiling that retains 80% of natural nutrients. The choice for buyers who accept nothing but the finest grain.",
    specs: {
      length: "7.90 mm",
      width: "1.65 mm",
      thickness: "1.58 mm",
      classification: "Specialty",
      aroma: "Present",
      moisture: "≤13%",
      broken: "≤1%",
      whiteness: "Superior",
    },
    packing: ["1kg", "5kg", "25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "irri-9-white",
    name: "IRRI-9 White Rice",
    tag: "IRRI · Long Grain White",
    grain: "6.40 mm",
    image: `${BASE}/rice-irri9-white-CBVplULI.jpg`,
    description:
      "IRRI-9 is a non-Basmati long grain rice cultivated in Sindh and Punjab province of Pakistan with an average grain length of 6.4mm. Exports from Pakistan are continuously increasing due to its impressive cooking result and taste. Popular in Southeast Asia, East Africa and budget-conscious wholesale markets worldwide.",
    specs: {
      length: "6.40 mm",
      width: "1.68 mm",
      thickness: "1.55 mm",
      classification: "Long Grain",
      aroma: "None",
      moisture: "≤14%",
      broken: "≤2%",
      whiteness: "Good",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP", "Jute Bags"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "irri-9-sella",
    name: "IRRI-9 Sella Parboiled Rice",
    tag: "IRRI · Parboiled Sella",
    grain: "6.40 mm",
    image: `${BASE}/rice-irri9-sella-BVpx73cQ.jpg`,
    description:
      "IRRI-9 Sella Parboiled Rice — golden parboiled non-Basmati long grain for extended shelf life and firm texture. Consistent quality for long-distance shipping to African and Middle Eastern wholesale markets. Reliable supply, competitive pricing, every batch 100% sortex quality assured.",
    specs: {
      length: "6.40 mm",
      width: "1.68 mm",
      thickness: "1.55 mm",
      classification: "Long Grain",
      aroma: "None",
      moisture: "≤14%",
      broken: "≤2%",
      whiteness: "Golden",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "irri-6-white",
    name: "IRRI-6 White Rice 5% Broken",
    tag: "IRRI · White 5% Broken",
    grain: "6.20 mm",
    image: `${BASE}/rice-irri6-white-DayCFp8n.jpg`,
    description:
      "IRRI-6 is a non-Basmati long grain rice with an average grain length of 6.20mm, cultivated in Sindh and Punjab. Very popular among top rice importing countries as a low-priced variety that Pakistan grows with the highest exporting figures. Reliable, high-yield, budget-conscious export grade for large-volume wholesale buyers.",
    specs: {
      length: "6.20 mm",
      width: "1.65 mm",
      thickness: "1.52 mm",
      classification: "Long Grain",
      aroma: "None",
      moisture: "≤14%",
      broken: "≤5%",
      whiteness: "Good",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP", "Jute Bags", "FIBC 500/1000kg"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "irri-6-parboiled",
    name: "IRRI-6 Parboiled Rice 5% Broken",
    tag: "IRRI · Parboiled 5% Broken",
    grain: "6.20 mm",
    image: `${BASE}/rice-irri6-parboiled-Ck-ptzTi.jpg`,
    description:
      "IRRI-6 Parboiled Rice carries 80% of total rice nutrients before processing — healthy and wholesome. Parboiling gives extended shelf life and firm texture for distant shipments. Very popular in African and South Asian wholesale markets. 100% Sortex quality, consistent every batch.",
    specs: {
      length: "6.20 mm",
      width: "1.65 mm",
      thickness: "1.52 mm",
      classification: "Long Grain",
      aroma: "None",
      moisture: "≤14%",
      broken: "≤5%",
      whiteness: "Golden",
    },
    packing: ["25kg", "50kg", "PP Woven / BOPP"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
  {
    slug: "irri-6-100-broken",
    name: "IRRI-6 100% Broken Rice",
    tag: "IRRI · 100% Broken",
    grain: "4.50 mm",
    image: `${BASE}/rice-irri6-broken-C87up9TD.jpg`,
    description:
      "IRRI-6 100% Broken Rice — used in food processing, animal feed, rice flour production and industrial applications. Sourced from premium IRRI-6 rice and 100% sortex quality assured. Popular among food processors and industrial buyers in Africa, Southeast Asia and South Asia. Competitive pricing for high-volume orders.",
    specs: {
      length: "4.50 mm",
      width: "1.65 mm",
      thickness: "1.52 mm",
      classification: "Broken",
      aroma: "None",
      moisture: "≤14%",
      broken: "100%",
      whiteness: "Standard",
    },
    packing: ["25kg", "50kg", "PP Woven", "FIBC 500/1000kg"],
    moq: "1 Metric Ton",
    container: "25–27 MT in 20ft container",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelated(slug: string): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, 4);
}
