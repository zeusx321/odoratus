"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/features/cart";
import { mockProducts } from "@/features/products/services/products.mock-data";
import { productPaths } from "@/features/products/paths";
import { formatPrice } from "@/features/products/utils/product.utils";

type OlfactoryCompanionsProps = {
  currentProductId?: string;
};

export function OlfactoryCompanions({
  currentProductId,
}: OlfactoryCompanionsProps) {
  const { addItem } = useCart();
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  // Filter out the current product and pick up to 4 companion products
  const companions = mockProducts
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  const handleAddToCart = (productId: string, name: string, price: number, image?: string) => {
    addItem({
      productId,
      name,
      price,
      image,
      selectedOptions: {
        Volume: "100 ml",
      },
      quantity: 1,
    });

    setAddedItemIds((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [productId]: false }));
    }, 1500);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-stone-200/60 bg-[#faf8f5]">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1c1917] tracking-tight">
            Olfactory Companions
          </h2>
          <p className="text-[11px] font-bold tracking-[0.2em] text-stone-500 uppercase">
            FRAGRANCES OF SYNONYMOUS SOPHISTICATION
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companions.map((product) => {
            const isAdded = !!addedItemIds[product.id];
            const mainImg = product.images[0] || "/images/products/santal-parchment.png";

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image */}
                  <Link
                    href={productPaths.detail(product.id)}
                    className="block relative aspect-[4/3.8] overflow-hidden rounded-xl bg-[#f4f1ea] mb-4"
                  >
                    <Image
                      src={mainImg}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </Link>

                  {/* Title & Price Header */}
                  <div className="flex items-baseline justify-between gap-2">
                    <Link
                      href={productPaths.detail(product.id)}
                      className="font-serif text-lg font-medium text-[#1c1917] hover:text-stone-600 transition-colors"
                    >
                      {product.name}
                    </Link>
                    <span className="text-sm font-semibold text-[#1c1917]">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  {/* Scent Notes Subtitle */}
                  <p className="text-[10px] font-bold tracking-wider text-stone-400 uppercase mt-1 mb-5">
                    {product.notes}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={() =>
                    handleAddToCart(product.id, product.name, product.price, mainImg)
                  }
                  className={`w-full border font-semibold text-[11px] tracking-wider uppercase py-3 rounded-xl transition-all duration-200 cursor-pointer text-center ${
                    isAdded
                      ? "bg-emerald-700 text-white border-emerald-700"
                      : "border-stone-200 bg-white hover:bg-[#1c1917] hover:text-white text-[#1c1917]"
                  }`}
                >
                  {isAdded ? "ADDED ✓" : "ADD TO CART +"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
