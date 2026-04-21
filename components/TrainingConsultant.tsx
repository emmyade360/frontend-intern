import SectionLink from "@/components/ui/SectionLink";

type IconName = "book" | "users" | "badge" | "clipboard";

const ICON_PATHS: Record<IconName, string> = {
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  users:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  badge:
    "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  clipboard:
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
};

interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: "book",
    title: "Expert-Led Learning",
    description:
      "Access certified consultants with professional qualifications in the Talenix Mentor module. Learn from professionals in the field using our calibrated and certified curriculum.",
  },
  {
    icon: "users",
    title: "Interactive Workshops",
    description:
      "Attend a globally recognised certificate training driven by over forty carefully researched modules and industry-recognised trainers.",
  },
  {
    icon: "badge",
    title: "Certification Opportunities",
    description:
      "Earn industry-recognised certifications that validate your expertise and open doors to new career opportunities worldwide.",
  },
  {
    icon: "clipboard",
    title: "Comprehensive Curriculum",
    description:
      "A structured curriculum covering all aspects of professional consulting, from client management to delivering impactful recommendations.",
  },
];

function FeatureIcon({ name }: { name: IconName }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={ICON_PATHS[name]} />
    </svg>
  );
}

export default function TrainingConsultant() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="consultant-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <h2
            id="consultant-heading"
            className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Training The Consultant
          </h2>
          <p className="mb-4 text-sm font-semibold text-brand-maroon sm:text-base">
            Maximise Your Potential as a Certified Trainer
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Begin a rewarding training journey toward becoming a distinguished certified
            trainer / consultant. Learn from professionals in the field in our immersive
            and highly interactive training programme. Our comprehensive training programme
            equips you with the tools, strategies, and expertise needed to lead impactful
            training sessions and drive organisational growth.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {FEATURES.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl bg-gray-50 p-6 transition-colors hover:bg-brand-pink"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-maroon/10 text-brand-maroon">
                <FeatureIcon name={icon} />
              </div>
              <div>
                <h3 className="mb-1.5 text-sm font-bold text-gray-900 sm:text-base">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <SectionLink />
      </div>
    </section>
  );
}
