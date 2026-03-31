import { PHONE, PHONE_HREF } from "@/lib/constants";

const stats = [
  { value: "5★", label: "Google Rating" },
  { value: "40+", label: "Happy Customers" },
  { value: "Same Day", label: "Service Available" },
  { value: "Free", label: "Estimates" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-lawn to-lawn-dark rounded-3xl p-10 text-white">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20"
                  >
                    <div className="text-3xl font-extrabold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-green-200 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-200 rounded-full -z-10" />
          </div>

          <div>
            <span className="inline-block text-lawn font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2 className="section-heading mb-6">
              San Antonio's Local Lawn Care Experts
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Sombrero Lawn & Tree, we take pride in keeping San Antonio yards
                looking their absolute best. We're a local business built on
                hard work, reliability, and a genuine love for the craft.
              </p>
              <p>
                Whether you need a weekly mow, seasonal fertilizing, tree trimming,
                or a full landscaping overhaul, our team shows up on time with
                the right tools and the right attitude to get the job done —
                often the same day you call.
              </p>
              <p>
                We understand the Texas climate — the heat, the dry spells, and
                what your lawn needs to thrive all year long. That local
                knowledge makes all the difference.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {PHONE}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-lawn-dark border-2 border-lawn font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
