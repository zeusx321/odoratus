import type { Product } from "@/features/products/types/product.types";

export const mockProducts: Product[] = [
  {
    id: "santal-parchment",
    name: "Santal Parchment",
    description:
      "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.",
    notes: "Woody / Sandalwood & Cardamom",
    price: 220,
    availability: "Available in Atelier",
    category: "Fragrances",
    scentFamily: "WOODY",
    occasion: "EVENING",
    volumes: [
      { size: "30 ml", price: 140 },
      { size: "50 ml", price: 180 },
      { size: "100 ml", price: 220 },
    ],
    scentAnatomyDescription:
      "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.",
    detailedNotes: {
      top: "Sicilian Bergamot, Pink Pepper",
      heart: "Egyptian Jasmine Sambac, Papyrus",
      base: "West Indian Sandalwood, Cardamom, Amber",
    },
    images: [
      "/images/products/santal-parchment.png",
      "/images/products/santal-parchment-detail-1.jpg",
      "/images/products/santal-parchment-detail-2.jpg",
      "/images/products/santal-parchment-detail-3.jpg",
    ],
    options: [],
  },
  {
    id: "fleur-de-lune",
    name: "Fleur de Lune",
    description:
      "A luminous floral composition of jasmine and white musk, evocative of moonlit night blossoms blooming under starry skies.",
    notes: "Floral / Jasmine & White Musk",
    price: 195,
    availability: "Available in Atelier",
    category: "Fragrances",
    scentFamily: "FLORAL",
    occasion: "DAYTIME & SPECIAL",
    volumes: [
      { size: "30 ml", price: 125 },
      { size: "50 ml", price: 160 },
      { size: "100 ml", price: 195 },
    ],
    scentAnatomyDescription:
      "Fleur de Lune rests softly upon the skin with an etherial white bouquet. It opens with delicate neroli, radiating into fresh night jasmine before settling into warm cashmere musk.",
    detailedNotes: {
      top: "Fresh Neroli, White Freesia",
      heart: "Night Jasmine Sambac, Lily of the Valley",
      base: "White Musk, Soft Cashmere, Sheer Amber",
    },
    images: [
      "/images/products/fleur-de-lune.png",
      "/images/products/fleur-de-lune.png",
      "/images/products/fleur-de-lune.png",
    ],
    options: [],
  },
  {
    id: "noir-cocoon",
    name: "Noir Cocoon",
    description:
      "An oriental blend of tobacco and amber wrapped in velvety spice and deep woody accords.",
    notes: "Oriental / Tobacco & Amber",
    price: 240,
    availability: "Available in Atelier",
    category: "Fragrances",
    scentFamily: "ORIENTAL",
    occasion: "NIGHT & GALAS",
    volumes: [
      { size: "30 ml", price: 155 },
      { size: "50 ml", price: 195 },
      { size: "100 ml", price: 240 },
    ],
    scentAnatomyDescription:
      "Noir Cocoon unfolds like an intimate velvet sanctuary. Rich tobacco leaf melts into toasted tonka and golden amber resin.",
    detailedNotes: {
      top: "Sweet Tobacco Leaf, Nutmeg",
      heart: "Golden Amber, Toasted Tonka Bean",
      base: "Smoky Vanilla, Dark Oud, Cedarwood",
    },
    images: [
      "/images/products/noir-cocoon.png",
      "/images/products/noir-cocoon.png",
      "/images/products/noir-cocoon.png",
    ],
    options: [],
  },
  {
    id: "sol-dor",
    name: "Sol d'Or",
    description:
      "A fresh coastal blend of bergamot, sea salt, and sun-kissed Mediterranean citrus.",
    notes: "Fresh / Bergamot & Sea Salt",
    price: 185,
    availability: "Available in Atelier",
    category: "Fragrances",
    scentFamily: "FRESH CITRUS",
    occasion: "SUMMER & DAILY",
    volumes: [
      { size: "30 ml", price: 120 },
      { size: "50 ml", price: 150 },
      { size: "100 ml", price: 185 },
    ],
    scentAnatomyDescription:
      "Sol d'Or captures golden light dancing over azure coastal waters. Crisp bergamot meets salty ocean breeze before warming into sunlit driftwood.",
    detailedNotes: {
      top: "Calabrian Bergamot, Sea Salt Accord",
      heart: "Orange Blossom, Marine Waters",
      base: "Sunlit Driftwood, Clean Musk",
    },
    images: [
      "/images/products/sol-dor.png",
      "/images/products/sol-dor.png",
      "/images/products/sol-dor.png",
    ],
    options: [],
  },
  {
    id: "atelier-oud",
    name: "Atelier Oud",
    description:
      "Rich aged agarwood deepened with rare saffron petals and smoldering incense notes.",
    notes: "Woody / Rich Oud & Saffron",
    price: 310,
    availability: "Limited Reserve",
    category: "Fragrances",
    scentFamily: "WOODY OUD",
    occasion: "SIGNATURE EVENING",
    volumes: [
      { size: "30 ml", price: 210 },
      { size: "50 ml", price: 260 },
      { size: "100 ml", price: 310 },
    ],
    scentAnatomyDescription:
      "Atelier Oud is an opulent celebration of rare oriental woods. Saffron threads illuminate rare Cambodian oud and warm benzoin.",
    detailedNotes: {
      top: "Rare Saffron, Rose Petals",
      heart: "Cambodian Oud, Incense Accord",
      base: "Smoky Leather, Patchouli, Benzoin",
    },
    images: [
      "/images/products/atelier-oud.png",
      "/images/products/atelier-oud.png",
      "/images/products/atelier-oud.png",
    ],
    options: [],
  },
  {
    id: "rose-absolute",
    name: "Rose Absolute",
    description:
      "Damask rose balanced with grounding Atlas cedar and velvety clove spice.",
    notes: "Floral / Damask Rose & Cedar",
    price: 205,
    availability: "Available in Atelier",
    category: "Fragrances",
    scentFamily: "FLORAL RICH",
    occasion: "ROMANTIC EVENINGS",
    volumes: [
      { size: "30 ml", price: 130 },
      { size: "50 ml", price: 170 },
      { size: "100 ml", price: 205 },
    ],
    scentAnatomyDescription:
      "Rose Absolute is a sophisticated take on timeless flora. Crimson Damask rose petals harmonize with spicy clove and structured Atlas cedar.",
    detailedNotes: {
      top: "Crimson Damask Rose, Clove",
      heart: "Bulgarian Rose Essence, Geranium",
      base: "Atlas Cedarwood, Vetiver, Amber",
    },
    images: [
      "/images/products/rose-absolute.png",
      "/images/products/rose-absolute.png",
      "/images/products/rose-absolute.png",
    ],
    options: [],
  },
];
