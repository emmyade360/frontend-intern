interface Props {
  className?: string;
  size?: number;
}

export default function TalenixLogo({ className = "", size = 28 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path className="fill-brand-maroon" d="M14 2L26 8V20L14 26L2 20V8L14 2Z" />
      <path className="fill-white opacity-30" d="M14 7L20 10.5V17.5L14 21L8 17.5V10.5L14 7Z" />
    </svg>
  );
}
