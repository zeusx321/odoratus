"use client";

import { useState } from "react";
import type { Product, VolumeOption } from "@/features/products/types/product.types";
import { formatPrice } from "@/features/products/utils/product.utils";
import { useCart } from "@/features/cart";

type ProductDetailsProps = {
  product: Product;
  selectedVolume: VolumeOption;
  onSelectVolume: (vol: VolumeOption) => void;
  giftWrapping: boolean;
  onToggleGiftWrapping: () => void;
  quantity: number;
  onQuantityChange: (qty: number) => void;
};

export function ProductDetails({
  product,
  selectedVolume,
  onSelectVolume,
  giftWrapping,
  onToggleGiftWrapping,
  quantity,
  onQuantityChange,
}: ProductDetailsProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const defaultVolumes: VolumeOption[] = [
    { size: "30 ml", price: 140 },
    { size: "50 ml", price: 180 },
    { size: "100 ml", price: 220 },
  ];

  const volumes = product.volumes && product.volumes.length > 0 ? product.volumes : defaultVolumes;
  const unitPrice = selectedVolume.price;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: unitPrice,
      image: product.images[0],
      selectedOptions: {
        Volume: selectedVolume.size,
        "Gift Wrapping": giftWrapping ? "Included" : "None",
      },
      quantity,
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const scentAnatomyText =
    product.scentAnatomyDescription ||
    product.description ||
    "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.";

  const topNotes = product.detailedNotes?.top || "Sicilian Bergamot, Pink Pepper";
  const heartNotes = product.detailedNotes?.heart || "Egyptian Jasmine Sambac, Papyrus";
  const baseNotes = product.detailedNotes?.base || "West Indian Sandalwood, Cardamom, Amber";

  return (
    <div className="space-y-6 text-[#1c1917]">
      {/* Scent Family & Occasion Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="bg-[#f3f0e8] text-[#524e48] text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-md uppercase">
          SCENT FAMILY: {product.scentFamily || "WOODY"}
        </span>
        <span className="bg-[#f3f0e8] text-[#524e48] text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-md uppercase">
          OCCASION: {product.occasion || "EVENING"}
        </span>
      </div>

      {/* Product Name Title */}
      <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1c1917] tracking-tight pt-1">
        {product.name}
      </h1>

      {/* Price & Availability Status */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-2xl sm:text-3xl font-medium text-[#1c1917]">
          {formatPrice(unitPrice)}
        </span>
        <div className="flex items-center gap-2 text-emerald-600 text-xs sm:text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{product.availability || "Available in Atelier"}</span>
        </div>
      </div>

      {/* Volume Selector */}
      <div className="pt-2">
        <label className="block text-[11px] font-bold tracking-wider text-[#4a4744] uppercase mb-2.5">
          SELECT VOLUME
        </label>
        <div className="grid grid-cols-3 gap-3">
          {volumes.map((vol) => {
            const isSelected = selectedVolume.size === vol.size;
            return (
              <button
                key={vol.size}
                type="button"
                onClick={() => onSelectVolume(vol)}
                className={`py-3.5 px-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-[#1c1917] bg-white ring-1 ring-[#1c1917] shadow-xs"
                    : "border-stone-200 bg-[#f9f7f3] hover:border-stone-300 text-stone-700"
                }`}
              >
                <div className={`text-sm font-bold ${isSelected ? "text-[#1c1917]" : "text-stone-700"}`}>
                  {vol.size}
                </div>
                <div className={`text-xs mt-0.5 ${isSelected ? "text-stone-600" : "text-stone-400"}`}>
                  {formatPrice(vol.price)}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Complimentary Signature Gift Wrapping Toggle */}
      <div className="bg-[#f6f3ed] border border-stone-200/70 rounded-xl p-4 flex items-center justify-between gap-4">
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-[#1c1917]">
            Complimentary Signature Gift Wrapping
          </h4>
          <p className="text-xs text-stone-500 mt-0.5 leading-snug">
            Encased in linen paper box with custom wax seal stamp.
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={giftWrapping}
          onClick={onToggleGiftWrapping}
          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
            giftWrapping ? "bg-[#c4a482]" : "bg-stone-300"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
              giftWrapping ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Quantity & Add to Cart Controls */}
      <div className="flex items-center gap-3 pt-2">
        {/* Quantity Stepper */}
        <div className="flex items-center justify-between border border-stone-200 rounded-xl px-3 py-3.5 w-28 bg-[#fdfcfb]">
          <button
            type="button"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            className="text-stone-400 hover:text-[#1c1917] disabled:opacity-30 font-medium px-1 text-sm focus:outline-none"
          >
            –
          </button>
          <span className="text-sm font-semibold text-[#1c1917] select-none">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => onQuantityChange(quantity + 1)}
            className="text-stone-400 hover:text-[#1c1917] font-medium px-1 text-sm focus:outline-none"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex-1 font-semibold text-xs tracking-wider uppercase py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer ${
            isAdded
              ? "bg-emerald-700 text-white"
              : "bg-[#1c1917] hover:bg-black text-white"
          }`}
        >
          {isAdded ? "ADDED TO CART ✓" : `ADD TO CART / ${formatPrice(totalPrice)}`}
        </button>
      </div>

      {/* Scent Anatomy Breakdown */}
      <div className="pt-8 border-t border-stone-200/80 space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1c1917]">
          Scent Anatomy
        </h3>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {scentAnatomyText}
        </p>

        <div className="space-y-3 pt-2 text-xs sm:text-sm">
          <div className="flex items-start justify-between py-2 border-b border-stone-200/60">
            <span className="font-bold tracking-wider text-stone-500 uppercase text-[11px] w-32 shrink-0 pt-0.5">
              TOP NOTES
            </span>
            <span className="text-stone-700 font-medium text-right sm:text-left flex-1">
              {topNotes}
            </span>
          </div>

          <div className="flex items-start justify-between py-2 border-b border-stone-200/60">
            <span className="font-bold tracking-wider text-stone-500 uppercase text-[11px] w-32 shrink-0 pt-0.5">
              HEART NOTES
            </span>
            <span className="text-stone-700 font-medium text-right sm:text-left flex-1">
              {heartNotes}
            </span>
          </div>

          <div className="flex items-start justify-between py-2 border-b border-stone-200/60">
            <span className="font-bold tracking-wider text-stone-500 uppercase text-[11px] w-32 shrink-0 pt-0.5">
              BASE NOTES
            </span>
            <span className="text-stone-700 font-medium text-right sm:text-left flex-1">
              {baseNotes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
