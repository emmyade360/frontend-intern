import Image from "next/image";
import SectionLink from "@/components/ui/SectionLink";

const COURSE_MODELS = ["Entrepreneurship", "Course Development", "Business Radio"];

export default function LearningManagementSystem() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="lms-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row lg:gap-16">
          {/* Circular portrait */}
          <div className="flex w-full shrink-0 justify-center md:w-2/5">
            <div className="relative h-72 w-72 overflow-hidden rounded-full shadow-xl ring-4 ring-brand-pink md:h-80 md:w-80 lg:h-96 lg:w-96">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Professional woman representing the Learning Management System"
                fill
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/5">
            <h2
              id="lms-heading"
              className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            >
              Learning Management System
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              TG Academy is a hub of knowledge and tech-enabling resources designed to
              empower tech talents on their learning journey. From technical courses,
              Learning by TG (corporate training) to other professional development
              programs, executive management &mdash; TG Academy offers a wide range of
              courses to cater to diverse learner levels. With student-centred learning
              and interactive learning platforms, Academy ensures your learning journey
              is both accessible and impactful.
            </p>

            <p className="mb-3 text-sm font-semibold text-gray-700">
              Some of our course modules
            </p>

            <ul className="mb-8 flex flex-wrap gap-3">
              {COURSE_MODELS.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm text-gray-700">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand-maroon" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <SectionLink />
          </div>
        </div>
      </div>
    </section>
  );
}
