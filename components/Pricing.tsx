import { PHONE_HREF } from "@/lib/constants";

const packages = [
  {
    name: "Basic Maintenance",
    tagline: "Great for regular upkeep",
    features: [
      "Lawn mowing",
      "Edging along driveways & walkways",
      "Blowing clippings off hard surfaces",
      "Flexible scheduling (weekly or biweekly)",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
  {
    name: "Full-Service Care",
    tagline: "Most popular",
    features: [
      "Everything in Basic Maintenance",
      "Fertilizing",
      "Hedging & shrub trimming",
      "Debris & waste disposal",
      "Same-day service available",
    ],
    cta: "Get a Quote",
    highlight: true,
  },
  {
    name: "Complete Property",
    tagline: "Total transformation",
    features: [
      "Everything in Full-Service Care",
      "Tree trimming or removal",
      "Full landscaping & design",
      "Junk removal",
      "Permanent outdoor lighting",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-lawn font-semibold text-sm uppercase tracking-widest mb-3">
            Pricing
          </span>
          <h2 className="section-heading">Simple, Transparent Packages</h2>
          <p className="section-subheading mx-auto">
            Every yard is different — all pricing is customized to your property size and needs.
            Contact us for a 100% free estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 flex flex-col ${
                pkg.highlight
                  ? "bg-lawn text-white shadow-xl ring-4 ring-lawn/30 md:scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {pkg.highlight && (
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-gray-900"}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-6 ${pkg.highlight ? "text-green-200" : "text-gray-500"}`}>
                {pkg.tagline}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-green-200" : "text-lawn"}`}
                      fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${pkg.highlight ? "text-green-100" : "text-gray-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={PHONE_HREF}
                className={`text-center font-bold py-3 rounded-lg transition-colors duration-200 ${
                  pkg.highlight
                    ? "bg-white text-lawn hover:bg-green-50"
                    : "bg-lawn text-white hover:bg-lawn-dark"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          * Pricing varies based on yard size and service frequency. All estimates are free.
        </p>
      </div>
    </section>
  );
}
