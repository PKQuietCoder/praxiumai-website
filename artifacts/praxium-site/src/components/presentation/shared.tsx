import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ---- Brand tokens (sampled from the Figma slide deck) ---- */
export const TEAL = "#166A6C";
export const TEAL_DEEP = "#0F5557";
export const NAVY = "#0E1B2B";
export const LIGHT = "#EEF1F6";
export const CORAL = "#E97451";
export const AMBER = "#ECB44C";
export const RED = "#E5484D";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---- Animation variants ---- */
export function stagger(staggerChildren = 0.07, delayChildren = 0.18): Variants {
  return { hidden: {}, show: { transition: { staggerChildren, delayChildren } } };
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export const growUp: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

/* ---- Subtle blueprint grid background ---- */
export function GridBg({ teal }: { teal?: boolean }) {
  const line = teal ? "rgba(255,255,255,0.055)" : "rgba(15,27,43,0.045)";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

/* ---- Slide shell: background + staggered content container ---- */
export function SlideShell({
  variant = "light",
  children,
  className,
}: {
  variant?: "teal" | "light";
  children: React.ReactNode;
  className?: string;
}) {
  const isTeal = variant === "teal";
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: isTeal ? TEAL : LIGHT }}
    >
      <GridBg teal={isTeal} />
      <motion.div
        variants={stagger()}
        initial="hidden"
        animate="show"
        className={cn("relative h-full w-full", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ---- Centered slide header for light content slides ---- */
export function SlideHeader({ title, sub }: { title: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center">
      <motion.h2
        variants={fadeUp}
        className="text-[42px] font-extrabold leading-[1.05] tracking-tight"
        style={{ color: NAVY }}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          variants={fadeUp}
          className="mt-2.5 text-[12px] font-bold uppercase tracking-[0.2em]"
          style={{ color: TEAL }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

/* ---- PraxiumAI squiggle mark (for inline illustrations) ---- */
export function PraxiumMark({
  size = 44,
  bg = TEAL,
  stroke = "#ffffff",
  radius,
}: {
  size?: number;
  bg?: string;
  stroke?: string;
  radius?: number;
}) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size, background: bg, borderRadius: radius ?? size * 0.26 }}
    >
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 16.5c2.4 0 3-9 6.8-9 2.6 0 2.9 5 5 5 1.6 0 2.2-1.5 2.2-1.5"
          stroke={stroke}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
