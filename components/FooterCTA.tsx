import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="bg-brand-pink py-14 md:py-16" aria-label="Join Talenix Group">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-maroon">
          Ready to be part of something extraordinary?
        </p>
        <h2 className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          Let&apos;s work together to create a difference
        </h2>
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-brand-maroon px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-maroon-hover"
        >
          Apply to Talent
        </Link>
      </div>
    </section>
  );
}
