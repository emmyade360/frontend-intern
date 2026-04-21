import Image from "next/image";

interface ProgramItem {
  title: string;
  description: string;
}

const PROGRAM_ITEMS: ProgramItem[] = [
  {
    title: "Team Communication Skills",
    description:
      "Build cohesive, high-performing teams through targeted communication strategies.",
  },
  {
    title: "Cross-Cultural Communication",
    description:
      "Navigate diverse workplace environments with confidence and inclusivity.",
  },
  {
    title: "Effective Communication Skills",
    description:
      "Master verbal and written communication for impactful leadership.",
  },
  {
    title: "Communication Skills for Managers",
    description:
      "Develop advanced communication frameworks tailored for management roles.",
  },
];

export default function ManagementDevelopmentProgram() {
  return (
    <section
      className="bg-brand-section py-16 md:py-20 lg:py-24"
      aria-labelledby="mdp-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-10 md:flex-row lg:gap-16">
          {/* Image */}
          <div className="w-full shrink-0 md:w-2/5">
            <div className="relative min-h-[340px] h-72 overflow-hidden rounded-xl shadow-2xl sm:h-96 md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                alt="Executives participating in a management development program session"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/5">
            <h2
              id="mdp-heading"
              className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
            >
              Management Development Program
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-white/75 sm:text-base">
              Talenix Group offers a comprehensive Management Development Program designed
              to equip corporate organisations with the high-performing leaders they need
              to thrive.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-white/75 sm:text-base">
              This program includes workshops, seminars, coaching sessions, online courses,
              and experiential learning opportunities designed to improve management
              capabilities for corporate excellence.
            </p>

            <ul className="space-y-3">
              {PROGRAM_ITEMS.map(({ title, description }) => (
                <li
                  key={title}
                  className="group flex cursor-pointer items-start gap-4 rounded-lg bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/60">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
