import Image from "next/image";
import CheckList from "@/components/ui/CheckList";

const ITEMS = [
  "Leadership Training",
  "Customer Service / Sales",
  "Communication / Presentation",
  "Team Building",
  "Consultative Training",
  "Contract Training",
];

export default function CorporateTrainings() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-20 lg:py-24"
      aria-labelledby="corporate-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-16">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2
              id="corporate-heading"
              className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            >
              Corporate Trainings
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              Talenix Group offers cutting-edge, company-specific corporate training
              experiences that help your team members gain the skills they need to excel.
              Our customised training programs create real results with your team and help
              create a high-performance learning experience.
            </p>
            <CheckList items={ITEMS} />
          </div>

          {/* Image */}
          <div className="w-full shrink-0 md:w-1/2">
            <div className="relative h-64 overflow-hidden rounded-xl shadow-lg sm:h-80 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Corporate training session with team members collaborating"
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
