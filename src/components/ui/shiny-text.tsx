import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShinyTextProps {
  /** The text to render with the shimmer effect. */
  text: string;
  className?: string;
  /** Color of the moving shine highlight. */
  shineColor?: string;
  /** Base color of the text (the non-shining part). */
  baseColor?: string;
  /** Animation duration in seconds. */
  duration?: number;
  /** Width of the shimmer band in pixels. */
  shimmerWidth?: number;
  /** "loop" shimmers continuously; "hover" only shimmers on hover. */
  trigger?: "loop" | "hover";
}

export function ShinyText({
  text,
  className,
  // Defaults are tuned to the portfolio's gold theme; override per the demo API.
  shineColor = "rgba(255, 248, 220, 1)",
  baseColor = "#f1c100",
  duration = 4,
  shimmerWidth = 120,
  trigger = "loop",
}: ShinyTextProps) {
  return (
    <span
      className={cn(
        "shiny-text",
        trigger === "hover" && "shiny-text--hover",
        className,
      )}
      style={
        {
          "--shiny-shine": shineColor,
          "--shiny-base": baseColor,
          "--shiny-duration": `${duration}s`,
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
    >
      {text}
    </span>
  );
}
