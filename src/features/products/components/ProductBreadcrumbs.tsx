/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { productPaths } from "@/features/products/paths";

type ProductBreadcrumbsProps = {
  productName?: string;
  category?: string;
};

export function ProductBreadcrumbs({
  productName,
  category = "Fragrances",
}: ProductBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 px-4 py-4 sm:px-6 sm:py-6 md:px-10 lg:px-16"
    >
      <span className="flex items-center gap-2">
        <Link
          href="/"
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          Home
        </Link>
        <span className="text-xs text-zinc-400">›</span>
      </span>
      <span className="flex items-center gap-2">
        <Link
          href={productPaths.list}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          Shop
        </Link>
        <span className="text-xs text-zinc-400">›</span>
      </span>
      <span className="flex items-center gap-2">
        <Link
          href={productPaths.list}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          {category}
        </Link>
        {productName && <span className="text-xs text-zinc-400">›</span>}
      </span>
      {productName && (
        <span className="text-xs font-bold text-zinc-900 whitespace-nowrap">
          {productName}
        </span>
      )}
    </nav>
  );
}
