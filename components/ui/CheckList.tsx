interface Props {
  items: string[];
  className?: string;
}

export default function CheckList({ items, className = "" }: Props) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-maroon"
            aria-hidden="true"
          >
            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
