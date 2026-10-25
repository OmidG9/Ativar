import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/ativar-mark.png"
        alt=""
        width={512}
        height={281}
        sizes="64px"
        className="h-8 w-auto shrink-0"
        aria-hidden="true"
      />
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
