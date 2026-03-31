"use client";

import { useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const faqs = [
  {
    q: "Do you offer same-day service?",
    a: "Yes! We regularly provide same-day service depending on availability. Many of our customers have called in the morning and had their yard done that afternoon. Give us a call and we'll do our best to fit you in.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve San Antonio, TX and the surrounding areas. Not sure if we cover your neighborhood? Give us a call at " + PHONE + " and we'll let you know right away.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We are a fully insured lawn care and tree service business. You can trust that your property is in safe hands on every visit.",
  },
  {
    q: "Do you bring your own equipment?",
    a: "Absolutely. We show up with all the professional tools and equipment needed to get the job done right — you don't need to provide anything.",
  },
  {
    q: "Do you offer recurring service plans?",
    a: "Yes. Many of our customers are on weekly or biweekly maintenance plans. We also offer one-time services with no subscription or contract required — just call when you need us.",
  },
  {
    q: "How do I get a quote?",
    a: "The easiest way is to call or text us directly at " + PHONE + ". All estimates are 100% free. You can also fill out the contact form above and we'll get back to you within 24 hours.",
  },
  {
    q: "Do you handle tree removal and large jobs?",
    a: "Yes. In addition to lawn care, we offer tree trimming, tree removal, debris and junk removal, hedging, and permanent outdoor lighting. We handle both small residential yards and larger properties.",
  },
  {
    q: "Do you serve rental and HOA properties?",
    a: "Definitely. We work with many landlords and rental property owners to keep yards HOA-compliant and looking great — even when the owner is out of town.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-lawn font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="section-heading">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between text-left px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-lawn flex-shrink-0 ml-4 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Still have questions?{" "}
          <a href={PHONE_HREF} className="text-lawn font-semibold hover:underline">
            Call us at {PHONE}
          </a>{" "}
          — we're happy to help.
        </p>
      </div>
    </section>
  );
}
