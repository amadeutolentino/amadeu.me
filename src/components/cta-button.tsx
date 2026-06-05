import { ArrowUpRight } from "@/components/icons";
import { BOOKING_URL } from "@/lib/content";

type CtaButtonProps = {
  children: React.ReactNode;
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
};

export function CtaButton({
  children,
  size = "default",
  className = "",
  onClick,
}: CtaButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-8 py-4 text-sm md:text-base"
      : "px-6 py-3 text-xs md:text-sm";

  return (
    <a
      href={BOOKING_URL}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 border border-bronze font-medium text-bronze tracking-[0.18em] uppercase transition-all duration-300 hover:bg-bronze hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze md:tracking-[0.2em] ${sizeClasses} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
    </a>
  );
}
