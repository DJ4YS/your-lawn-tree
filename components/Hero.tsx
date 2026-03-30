"use client";

import { useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

const trustBadges = [
  "Reliable & On-Time",
  "Local San Antonio Business",
  "Free Estimates",
];

const INITIAL_FORM_STATE = { name: "", phone: "", email: "", service: "", message: "" };
const INPUT_CLASS = "w-full px-4 py-2.5 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-white/60";

export default function Hero() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData(INITIAL_FORM_STATE);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-lawn-dark/90 via-lawn-dark/70 to-lawn-dark/40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — headline */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Proudly Serving San Antonio, TX
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Lawn,{" "}
              <span className="text-green-200">Perfected.</span>
            </h1>

            <p className="text-xl text-green-100 font-light mb-10 leading-relaxed">
              Professional lawn care and landscaping services in San Antonio.
              Reliable, affordable, and built around your schedule.
            </p>

            <a href={PHONE_HREF} className="btn-outline text-lg px-8 py-4 inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {PHONE}
            </a>

            <div className="mt-10 flex flex-wrap gap-6 text-green-100">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div className="bg-lawn-dark/70 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-white/20 text-white flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-green-100 mb-6">
                  We'll be in touch soon. For faster service, call us at{" "}
                  <a href={PHONE_HREF} className="text-white font-semibold underline">{PHONE}</a>.
                </p>
                <button onClick={() => setStatus("idle")} className="text-white/80 font-medium hover:text-white underline">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-1">Get a Free Quote</h2>
                <p className="text-green-200 text-sm mb-6">We'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-green-100 mb-1">
                        Full Name <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={INPUT_CLASS}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-green-100 mb-1">
                        Phone Number <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(210) 000-0000"
                        className={INPUT_CLASS}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-green-100 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${INPUT_CLASS} [&>option]:bg-lawn-dark [&>option]:text-white`}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-green-100 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your yard..."
                      className={`${INPUT_CLASS} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-300 text-sm">
                      Something went wrong. Please call us at{" "}
                      <a href={PHONE_HREF} className="font-semibold underline">{PHONE}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-white text-lawn-dark font-bold py-3 rounded-lg hover:bg-green-50 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
