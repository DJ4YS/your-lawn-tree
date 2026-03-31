const reviews = [
  {
    name: "Joseph Salvatori",
    text: "Always reliable. Always sends update pictures. Always polite. NO SUBSCRIPTION CONTRACT. Just a simple good service. Customer for life.",
  },
  {
    name: "Curtis Nicholson",
    text: "Sombrero Lawns and the owner Alejandro are THE BEST!! Great communication, everything done timely and end result is a great looking landscaping job at my house. Highly recommended!!!",
  },
  {
    name: "Merissa Jeanean Camacho",
    text: "Very satisfied with the work that gets done. I was away for a family emergency, and when I came back my yard needed help. With just one phone call, Mr. Alejandro was able to take care of it the same day. Thank you for the excellent service!",
  },
  {
    name: "Bryan Munoz",
    text: "Alejandro and his lawn care business are outstanding. He does an excellent job every time—my yard always looks clean, sharp, and professionally maintained. He pays attention to detail, shows up on time, and takes pride in his work.",
  },
  {
    name: "Mercedes Torres",
    text: "Alejandro helped us keep our rental property looking amazing! He ensured that our yard was cut to HOA standards and that our yard was cleaned up! He always cut it neat and quite quickly! I would definitely recommend him to others who need a consistent lawn guy!",
  },
  {
    name: "Henry de Lange",
    text: "Alejandro has been efficiently maintaining the lawn at one of my rental properties for the past few months. He has promptly taken care of waste removal and various other tasks as needed. His reliability and fair pricing are truly commendable.",
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
