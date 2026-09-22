import Link from "next/link";
import { productPaths } from "@/features/products/paths";

export function Footer() {
  return (
    <footer className="bg-[#18181b] text-[#f4f2ee] border-t border-stone-800/80 pt-16 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Brand Description Column */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-normal text-white uppercase">
            O D O R A T U S
          </h3>
          <p className="text-xs text-stone-400 leading-relaxed font-light max-w-sm">
            An independent olfactory house cultivating slow-luxury liquid
            narratives. Every bottle is hand-poured in small batches using
            sustainably sourced botanicals.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#27272a] hover:bg-[#3f3f46] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* X / Twitter Icon */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#27272a] hover:bg-[#3f3f46] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#27272a] hover:bg-[#3f3f46] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Collections Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-[11px] font-bold tracking-widest text-stone-400 uppercase">
            COLLECTIONS
          </h4>
          <ul className="space-y-2 text-xs text-stone-300">
            <li>
              <Link href={productPaths.list} className="hover:text-white transition-colors">
                La Maison
              </Link>
            </li>
            <li>
              <Link href={productPaths.list} className="hover:text-white transition-colors">
                Private Reserve
              </Link>
            </li>
            <li>
              <Link href={productPaths.list} className="hover:text-white transition-colors">
                Scented Candles
              </Link>
            </li>
            <li>
              <Link href={productPaths.list} className="hover:text-white transition-colors">
                Discovery Sets
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care Links */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-[11px] font-bold tracking-widest text-stone-400 uppercase">
            CUSTOMER CARE
          </h4>
          <ul className="space-y-2 text-xs text-stone-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Olfactory Consultation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shipping &amp; Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Atelier Appointments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Care Guide
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Links */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-[11px] font-bold tracking-widest text-stone-400 uppercase">
            ABOUT US
          </h4>
          <ul className="space-y-2 text-xs text-stone-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Our Philosophy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Sourcing Standards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Sustainability Commitments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Journal
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Payment Row */}
      <div className="max-w-[1400px] mx-auto border-t border-stone-800/80 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
        <p>© 2026 Odoratus. All rights reserved.</p>

        <div className="flex items-center gap-2 tracking-wider">
          <span>SECURED CHECKOUT VIA</span>
          <span className="border border-stone-800 bg-[#242427] px-2 py-0.5 rounded text-[10px] text-stone-400 font-semibold">
            VISA
          </span>
          <span className="border border-stone-800 bg-[#242427] px-2 py-0.5 rounded text-[10px] text-stone-400 font-semibold">
            MASTERCARD
          </span>
          <span className="border border-stone-800 bg-[#242427] px-2 py-0.5 rounded text-[10px] text-stone-400 font-semibold">
            AMEX
          </span>
        </div>
      </div>
    </footer>
  );
}
