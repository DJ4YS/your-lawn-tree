import { COMPANY_NAME, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, SERVICE_AREA } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-lawn-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-2">{COMPANY_NAME}</h3>
            <p className="text-green-300 text-sm leading-relaxed mb-4">
              Professional lawn care and tree services in {SERVICE_AREA}.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/sombrerolawn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sombrero Lawn & Tree on Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-green-200 uppercase text-xs tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-green-100 text-sm">
              {SERVICES.map((s) => (
                <li key={s.value}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-green-200 uppercase text-xs tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-green-100 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "Gallery", href: "#gallery" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-green-200 uppercase text-xs tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-green-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="flex items-center gap-2 text-green-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {SERVICE_AREA}
              </li>
              <li className="flex items-center gap-2 text-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon – Sat: 7am – 6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 text-center text-green-400 text-sm">
          &copy; {CURRENT_YEAR} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
