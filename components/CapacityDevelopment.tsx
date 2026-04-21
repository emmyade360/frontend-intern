import Image from "next/image";
import CheckList from "@/components/ui/CheckList";

const ITEMS = [
  "Project Leadership",
  "Data and Technology",
  "Sustainability / Environment",
  "Effective Communication",
  "Career Support and Recruitment",
];

export default function CapacityDevelopment() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-20 lg:py-24"
      aria-labelledby="capacity-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-16">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2
              id="capacity-heading"
              className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            >
              Capacity Development
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              At Talenix Group, we empower individuals and organisations through various
              capacity development programs. Our tailored training initiatives build the
              skills, knowledge, and confidence needed for long-term success. We offer
              both standalone and bespoke programs designed to meet operational needs.
            </p>
            <CheckList items={ITEMS} />
          </div>

          {/* Image */}
          <div className="w-full shrink-0 md:w-1/2">
            <div className="relative h-64 overflow-hidden rounded-xl shadow-lg sm:h-80 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                alt="Team collaborating on a capacity development project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
