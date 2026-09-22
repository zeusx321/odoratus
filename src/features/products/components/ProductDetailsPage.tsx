"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductDetails } from "@/features/products/components/ProductDetails";
import { ProductImages } from "@/features/products/components/ProductImages";
import { useProduct } from "@/features/products/hooks/useProduct";
import type { Product, VolumeOption } from "@/features/products/types/product.types";

import { OlfactoryCompanions } from "@/features/products/components/OlfactoryCompanions";

export type ProductDetailsActionsContext = {
  product: Product;
  selectedOptions: Record<string, string>;
};

type ProductDetailsPageProps = {
  productId: string;
  actions?: (context: ProductDetailsActionsContext) => ReactNode;
};

export function ProductDetailsPage({
  productId,
}: ProductDetailsPageProps) {
  const productQuery = useProduct(productId);
  const product = productQuery.data;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [giftWrapping, setGiftWrapping] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption | null>(null);

  useEffect(() => {
    if (product) {
      const defaultVol =
        product.volumes && product.volumes.length > 0
          ? product.volumes[product.volumes.length - 1]
          : { size: "100 ml", price: product.price };
      setSelectedVolume(defaultVol);
    }
  }, [product]);

  if (productQuery.isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-sm font-medium text-stone-500 animate-pulse">Loading perfume details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-sm font-medium text-stone-500">Fragrance not found.</p>
      </div>
    );
  }

  const currentVolume: VolumeOption = selectedVolume || {
    size: "100 ml",
    price: product.price,
  };

  return (
    <div className="pb-12">
      <div className="max-w-[1400px] mx-auto pb-16">
        {/* Breadcrumbs Header Navigation */}
        <ProductBreadcrumbs
          category={product.category || "Fragrances"}
          productName={product.name}
        />

        {/* Main Two-Column Product Presentation */}
        <section className="grid gap-10 lg:gap-14 px-4 sm:px-6 md:px-10 lg:grid-cols-12 lg:px-16 pt-2">
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-6">
            <ProductImages
              product={product}
              activeImageIndex={activeImageIndex}
              onSelectImage={setActiveImageIndex}
            />
          </div>

          {/* Right Column: Details & Purchasing Controls */}
          <div className="lg:col-span-6">
            <ProductDetails
              product={product}
              selectedVolume={currentVolume}
              onSelectVolume={setSelectedVolume}
              giftWrapping={giftWrapping}
              onToggleGiftWrapping={() => setGiftWrapping((prev) => !prev)}
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>
        </section>
      </div>

      {/* Olfactory Companions Section */}
      <OlfactoryCompanions currentProductId={product.id} />
    </div>
  );
}
