import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[480px] items-center overflow-hidden bg-brand-dark md:min-h-[560px]"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Train With Us
          </span>
        </div>

        <h1 className="mx-auto mb-5 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Training and Development
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Our comprehensive range of programs and resources is designed to enhance
          skills, broaden knowledge, and empower careers through today&apos;s
          ever-evolving business landscape.
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded bg-brand-maroon px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-maroon-hover"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
