import Link from "next/link";

interface Props {
  href?: string;
  children?: React.ReactNode;
}

export default function SectionLink({ href = "#", children = "Learn More" }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded bg-brand-maroon px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-maroon-hover"
    >
      {children}
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}
