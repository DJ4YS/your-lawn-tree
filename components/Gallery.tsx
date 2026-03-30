"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/gallery/gallery-1.jpg", alt: "Lawn mower on a freshly cut yard" },
  { src: "/gallery/gallery-2.jpg", alt: "Professional mowing equipment" },
  { src: "/gallery/gallery-3.jpg", alt: "Beautifully striped lawn from above" },
  { src: "/gallery/gallery-4.jpg", alt: "Sombrero Lawn & Tree truck at a customer property" },
  { src: "/gallery/gallery-5.jpg", alt: "Aerial view of a manicured lawn" },
  { src: "/gallery/gallery-6.jpg", alt: "Fall lawn care service" },
  { src: "/gallery/gallery-7.jpg", alt: "Pristine lawn and landscaping with lake view" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i! - 1 + photos.length) % photos.length);
  const next = () => setLightbox((i) => (i! + 1) % photos.length);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-lawn font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h2 className="section-heading">Gallery</h2>
          <p className="section-subheading mx-auto">
            A look at the lawns and properties we've had the pleasure of caring for.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setLightbox(i)}
              className={`relative overflow-hidden rounded-xl group focus:outline-none focus:ring-2 focus:ring-lawn focus:ring-offset-2 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-lawn-dark/0 group-hover:bg-lawn-dark/30 transition-colors duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[80vh]">
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-green-300 transition-colors"
              aria-label="Previous photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-green-300 transition-colors"
              aria-label="Next photo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-0 right-0 -translate-y-10 text-white hover:text-green-300 transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <p className="text-center text-white/60 text-sm mt-3">
              {lightbox + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
