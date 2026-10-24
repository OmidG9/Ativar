import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="32" height="32" rx="9" fill="#176B9B" />
        <path
          d="M9.5 22.5 16 9l6.5 13.5"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.6 18.2h6.8"
          fill="none"
          stroke="#12AFC1"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-bold text-text-primary">آتیوار</span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.18em] text-text-secondary">
            ATIVAR
          </span>
        </span>
      )}
    </span>
  );
}
