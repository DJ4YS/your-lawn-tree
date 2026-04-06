const reviews = [
  {
    name: "James T.",
    text: "Always reliable. Always sends update pictures. Always polite. No subscription contract — just a simple, great service. Customer for life.",
  },
  {
    name: "Sandra M.",
    text: "Absolutely the best lawn care company I've used! Great communication, everything done on time, and the end result was a beautiful landscaping job. Highly recommended!",
  },
  {
    name: "Maria C.",
    text: "Very satisfied with the work. I was away for a family emergency, and when I came back my yard needed help. With just one phone call they took care of it the same day. Excellent service!",
  },
  {
    name: "Brian N.",
    text: "Outstanding work every time — my yard always looks clean, sharp, and professionally maintained. They pay attention to detail, show up on time, and take pride in their work.",
  },
  {
    name: "Lisa T.",
    text: "They helped us keep our rental property looking amazing! Cut to HOA standards, always neat and quick. I would definitely recommend them to anyone who needs a consistent, reliable lawn crew.",
  },
  {
    name: "Robert D.",
    text: "Been maintaining one of my rental properties for several months. Promptly handles waste removal and various other tasks as needed. Reliability and fair pricing are truly commendable.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-lawn font-semibold text-sm uppercase tracking-widest mb-3">
            Google Reviews
          </span>
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <StarRating />
              <p className="text-gray-600 leading-relaxed flex-1 mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lawn to-lawn-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-gray-800 text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
