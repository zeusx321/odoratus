"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/features/cart/hooks/useCart";
import { cartPaths } from "@/features/cart/paths";
import { productPaths } from "@/features/products/paths";

export function Header() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const { quantity } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full sticky top-0 z-50 bg-[#faf8f5]">
      {/* Top Black Announcement Bar with Close (X) Button */}
      {showAnnouncement && (
        <div className="bg-[#18181b] text-white py-2.5 px-4 relative flex items-center justify-center text-[11px] font-bold tracking-[0.15em] uppercase select-none transition-all">
          <span className="text-center px-6">
            COMPLIMENTARY SIGNATURE GIFT WRAPPING ON ALL ORDERS ABOVE $150
          </span>
          <button
            type="button"
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-white transition-colors cursor-pointer rounded-full focus:outline-none"
            aria-label="Close announcement bar"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Main Luxury Header Bar */}
      <div className="border-b border-stone-200/70 bg-[#faf8f5]">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider text-[#1c1917] uppercase">
            <Link
              href="/"
              className="hover:text-stone-500 transition-colors"
            >
              HOME
            </Link>
            <Link
              href={productPaths.list}
              className="hover:text-stone-500 transition-colors"
            >
              SHOP
            </Link>
            <Link
              href={productPaths.list}
              className="hover:text-stone-500 transition-colors"
            >
              CATEGORIES
            </Link>
            <a
              href="#"
              className="hover:text-stone-500 transition-colors"
            >
              THE ATELIER
            </a>
          </nav>

          {/* Center Brand Logo */}
          <Link
            href="/"
            className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-normal text-[#1c1917] uppercase hover:opacity-85 transition-opacity"
          >
            O D O R A T U S
          </Link>

          {/* Right Section: Search, User Account, Shopping Bag Counter */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Search Input Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search fragrances..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#f3f0e8] border border-stone-200/90 rounded-full py-2 pl-9 pr-4 text-xs text-[#1c1917] placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400 w-44 sm:w-56 transition-all"
              />
              <svg
                className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Profile Account Icon */}
            <button
              type="button"
              className="p-1.5 text-stone-700 hover:text-stone-950 transition-colors rounded-full focus:outline-none"
              aria-label="User profile"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Shopping Cart Icon & Badge */}
            <Link
              href={cartPaths.cart}
              className="relative p-1.5 text-stone-700 hover:text-stone-950 transition-colors focus:outline-none"
              aria-label="Shopping Cart"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.7}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {quantity > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-[#c4a482] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-2xs">
                  {quantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
