"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aisha Yusuf",
    role: "HR Manager, Tech Firm",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    quote:
      "Working with Talenix Group has been an absolute game-changer. Their corporate training program transformed how our team communicates and collaborates. Incredible results!",
    rating: 5,
  },
  {
    name: "John Daniels",
    role: "CEO, StartUp Connect",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote:
      "Talenix Group's Digital Marketing strategies are second to none. Our engagement metrics jumped by 200% within three months. I'd highly recommend them to any business.",
    rating: 5,
  },
  {
    name: "Christine Nwachukwu",
    role: "Operations Director",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    quote:
      "Talenix Group has been instrumental in our transformational journey. Their team has truly gone above and beyond, making our partnership worthwhile. Absolutely reliable and professional.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="mb-12 text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
        >
          Testimonials
        </h2>

        {/* Cards — single visible on mobile, all visible on md+ */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md ${
                i === active
                  ? "border-brand-maroon/30 bg-brand-pink"
                  : "border-gray-100 bg-white"
              } ${i !== active ? "hidden md:block" : "block"}`}
              aria-current={i === active ? "true" : undefined}
            >
              <StarRating rating={t.rating} />

              <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <footer className="mt-5 flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Navigation dots — meaningful on mobile, decorative on desktop */}
        <div
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-brand-maroon" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
