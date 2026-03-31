"use client";

import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function FloatingCallButton() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-5 right-5 z-50 md:hidden flex items-center gap-2 bg-lawn text-white font-bold px-5 py-3.5 rounded-full shadow-lg hover:bg-lawn-dark active:scale-95 transition-all duration-150"
      aria-label={`Call ${PHONE}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call Now — Free Quote
    </a>
  );
}
