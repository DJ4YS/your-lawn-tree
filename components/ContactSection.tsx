import { PHONE, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-lawn font-semibold text-sm uppercase tracking-widest mb-3">
            Contact Us
          </span>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading mx-auto">
            Call or text us directly — it's the fastest way to get a quote or schedule a visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href={PHONE_HREF}
            className="flex flex-col items-center text-center gap-4 bg-lawn text-white rounded-2xl p-8 shadow-md hover:bg-lawn-dark transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-green-200 text-sm font-medium mb-1">Call or Text</p>
              <p className="text-white font-bold text-xl">{PHONE}</p>
            </div>
          </a>

          <div className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-green-100 text-lawn flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Service Area</p>
              <p className="text-gray-900 font-bold text-xl">{SERVICE_AREA}</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-green-100 text-lawn flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Business Hours</p>
              <p className="text-gray-900 font-bold text-lg">Mon – Sat: 7am – 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
