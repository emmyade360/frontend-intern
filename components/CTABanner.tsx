import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-brand-section py-14 md:py-16" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <p className="max-w-2xl text-base font-medium leading-relaxed text-white sm:text-lg md:text-xl">
            Want to accelerate professional growth and development at your organisation?{" "}
            <span className="text-white/70">See how we can help.</span>
          </p>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-brand-section"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
