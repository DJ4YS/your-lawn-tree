import { COMPANY_NAME, PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-lawn-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-2">{COMPANY_NAME}</h3>
            <p className="text-green-300 text-sm leading-relaxed">
              Professional lawn care and tree services in {SERVICE_AREA}.
            </p>
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
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-green-100 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2 text-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {SERVICE_AREA}
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
