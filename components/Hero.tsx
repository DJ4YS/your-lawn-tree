"use client";

import { useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

const trustBadges = [
  "Reliable & On-Time",
  "Local Family Business",
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — headline */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Proudly Serving Your Local Community
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Lawn,{" "}
              <span className="text-green-200">Perfected.</span>
            </h1>

            <p className="text-xl text-green-100 font-light mb-10 leading-relaxed">
              Professional lawn care and landscaping services for your neighborhood.
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

            {/* Google rating badge */}
            <a
              href="#reviews"
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9</span>
                </div>
                <p className="text-green-200 text-xs">40+ Google Reviews</p>
              </div>
            </a>
          </div>

          {/* Right — contact form */}
          <div className="bg-lawn-dark/70 backdrop-blur-md border border-white/20 rounded-3xl p-5 sm:p-8 shadow-2xl">
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
