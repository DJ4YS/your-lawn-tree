"use client";

import { useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lawn-dark flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 48 48" className="w-7 h-7 sm:w-8 sm:h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground */}
                <rect x="4" y="36" width="40" height="5" rx="2.5" fill="#4ade80" />
                {/* Grass blades */}
                <path d="M12 36 Q10 28 14 22 Q16 30 12 36Z" fill="#86efac" />
                <path d="M12 36 Q15 26 18 20 Q18 30 12 36Z" fill="#4ade80" />
                <path d="M22 36 Q20 26 24 18 Q26 28 22 36Z" fill="#86efac" />
                <path d="M22 36 Q25 24 28 18 Q28 29 22 36Z" fill="#4ade80" />
                <path d="M33 36 Q31 27 35 21 Q37 29 33 36Z" fill="#86efac" />
                <path d="M33 36 Q36 25 39 20 Q39 30 33 36Z" fill="#4ade80" />
                {/* Sun */}
                <circle cx="36" cy="13" r="5" fill="#fde047" />
                <line x1="36" y1="5" x2="36" y2="3" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
                <line x1="36" y1="21" x2="36" y2="23" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="13" x2="26" y2="13" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
                <line x1="44" y1="13" x2="46" y2="13" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
                <line x1="30.34" y1="7.34" x2="28.93" y2="5.93" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
                <line x1="41.66" y1="18.66" x2="43.07" y2="20.07" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-lawn-dark font-bold text-xl leading-tight">
              Your Lawn<br />
              <span className="text-lawn font-semibold text-base">& Tree</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-lawn-dark font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="btn-primary text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700 hover:text-lawn-dark p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-lawn-dark hover:bg-green-50 rounded-md font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="flex items-center gap-2 px-3 py-2 text-lawn-dark font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
