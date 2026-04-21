import Image from "next/image";
import SectionLink from "@/components/ui/SectionLink";

const TAGS = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Stakeholder Leadership",
  "Communication Skills",
  "Business Mindset",
];

export default function TransformationHub() {
  return (
    <section
      className="bg-brand-pink py-16 md:py-20 lg:py-24"
      aria-labelledby="transformation-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-16">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <span className="mb-4 inline-block rounded-full bg-brand-maroon/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-maroon">
              Learning With Jite
            </span>

            <h2
              id="transformation-heading"
              className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            >
              Transformation Hub With Jite Newton
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              Transformation Hub with Jite Newton is a flagship online course created by
              the CEO, Jite Newton. Designed to develop course templates and leadership
              capabilities, this resource series offers valuable tools for personal and
              professional growth. Whether starting or wanting to enhance your leadership
              skills, the Transformation Hub provides a transformative learning experience
              to unlock your full potential.
            </p>

            <ul className="mb-8 flex flex-wrap gap-2" aria-label="Course topics">
              {TAGS.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-brand-maroon px-4 py-1.5 text-xs font-medium text-white"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <SectionLink />
          </div>

          {/* Image */}
          <div className="w-full shrink-0 md:w-1/2">
            <div className="relative h-72 overflow-hidden rounded-xl shadow-xl sm:h-80 md:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=800&q=80"
                alt="Jite Newton — Transformation Hub course facilitator"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
