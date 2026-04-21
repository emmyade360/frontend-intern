import Image from "next/image";
import CheckList from "@/components/ui/CheckList";

const ITEMS = [
  "Life / Personal Development",
  "HR / Life Management",
  "Personal Finance",
  "Team Management and Fieldwork",
];

export default function PersonalisedTraining() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="personalised-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row lg:gap-16">
          {/* Image */}
          <div className="w-full shrink-0 md:w-1/2">
            <div className="relative h-64 overflow-hidden rounded-xl shadow-lg sm:h-80 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800&q=80"
                alt="One-on-one personalised training session between coach and learner"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2
              id="personalised-heading"
              className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            >
              Personalised Individual Training
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              Begin a journey of intensive one-on-one personal development with
              customised training plans built around your specific needs and goals.
              Our expert trainers work closely with you to create a tailored learning
              path, drawing from the expertise of today&apos;s top subject professionals.
            </p>
            <CheckList items={ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
