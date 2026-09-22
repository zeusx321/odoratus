"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/features/products/types/product.types";

type ProductImagesProps = {
  product: Product;
  activeImageIndex?: number;
  onSelectImage?: (index: number) => void;
};

export function ProductImages({
  product,
  activeImageIndex: externalIndex,
  onSelectImage: externalOnSelect,
}: ProductImagesProps) {
  const [internalIndex, setInternalIndex] = useState(0);

  const activeIndex = externalIndex ?? internalIndex;
  const handleSelect = (idx: number) => {
    setInternalIndex(idx);
    externalOnSelect?.(idx);
  };

  const images = product.images.length > 0 ? product.images : [];
  const currentImage = images[activeIndex] || images[0] || "/images/products/santal-parchment.png";

  return (
    <div className="space-y-4">
      {/* Main Image View */}
      <div className="relative w-full aspect-[4/3.8] overflow-hidden rounded-2xl bg-[#ebe7e0] border border-stone-200/60 shadow-xs">
        <Image
          src={currentImage}
          alt={product.name}
          fill
          priority
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {images.slice(0, 3).map((img, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? "border-stone-900 ring-1 ring-stone-900 shadow-xs opacity-100"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
