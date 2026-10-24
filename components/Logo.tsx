import Link from "next/link";

type LogoProps = {
  className?: string;
  markOnly?: boolean;
};

export function Logo({ className = "", markOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="GIE Holding, home"
      className={`inline-flex shrink-0 items-center gap-3 ${className}`}
    >
      <svg
        width="42"
        height="34"
        viewBox="0 0 42 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="0.5" y="0.5" width="41" height="33" stroke="currentColor" strokeOpacity="0.75" />
        <path d="M8.5 25.5L21 7.5L33.5 25.5H8.5Z" stroke="currentColor" strokeWidth="1.1" />
        <path d="M15.5 25.5L21 17.5L26.5 25.5" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.8" />
      </svg>
      {!markOnly && (
        <>
          <span className="h-9 w-px bg-current opacity-30" aria-hidden="true" />
          <span className="flex flex-col">
            <span className="font-serif text-[1.65rem] leading-none tracking-[0.16em]">GIE</span>
            <span className="mt-1.5 text-[0.5rem] font-medium leading-none tracking-[0.34em] opacity-80">
              HOLDING
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
