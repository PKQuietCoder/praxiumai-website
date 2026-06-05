import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Grid2x2,
  Maximize,
  Minimize,
  X,
} from "lucide-react";
import { SLIDES } from "@/components/presentation/slides";
import { NAVY, TEAL } from "@/components/presentation/shared";
import { cn } from "@/lib/utils";

const BASE_W = 1280;
const BASE_H = 720;

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

function readHashIndex(total: number): number {
  const raw = parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isNaN(raw)) return 0;
  return Math.max(0, Math.min(total - 1, raw - 1));
}

export default function Presentation() {
  const [index, setIndex] = useState(() => readHashIndex(SLIDES.length));
  const [dir, setDir] = useState(1);
  const [scale, setScale] = useState(1);
  const [overview, setOverview] = useState(false);
  const [isFs, setIsFs] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const total = SLIDES.length;

  const go = useCallback(
    (next: number, direction: number) => {
      setDir(direction);
      setIndex((prev) => {
        const clamped = Math.max(0, Math.min(total - 1, next));
        return clamped === prev ? prev : clamped;
      });
    },
    [total],
  );

  const nextSlide = useCallback(() => go(index + 1, 1), [go, index]);
  const prevSlide = useCallback(() => go(index - 1, -1), [go, index]);

  /* Responsive scaling of the 1280×720 stage */
  useLayoutEffect(() => {
    const compute = () => {
      const el = wrapRef.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / BASE_W, height / BASE_H));
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // While the overview overlay is open it behaves like a modal: only
      // Escape (close) and Tab (focus trap, handled separately) are allowed.
      if (overview) {
        if (e.key === "Escape") {
          e.preventDefault();
          setOverview(false);
        }
        return;
      }
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prevSlide();
          break;
        case "Home":
          e.preventDefault();
          go(0, -1);
          break;
        case "End":
          e.preventDefault();
          go(total - 1, 1);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "g":
        case "G":
          setOverview(true);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextSlide, prevSlide, go, total, overview]);

  /* Keep URL hash in sync for deep-linking (write) */
  useEffect(() => {
    const target = `#${index + 1}`;
    if (window.location.hash !== target) {
      window.history.replaceState(null, "", target);
    }
  }, [index]);

  /* Follow external hash changes / browser back-forward (read) */
  useEffect(() => {
    const onHashChange = () => {
      const next = readHashIndex(total);
      setIndex((prev) => {
        if (next === prev) return prev;
        setDir(next > prev ? 1 : -1);
        return next;
      });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [total]);

  /* Focus management for the overview dialog */
  useEffect(() => {
    if (overview) {
      lastFocusRef.current = document.activeElement as HTMLElement | null;
      closeBtnRef.current?.focus();
    } else {
      lastFocusRef.current?.focus?.();
    }
  }, [overview]);

  /* Simple focus trap within the overview dialog */
  const onOverviewKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const root = overviewRef.current;
    if (!root) return;
    const focusable = root.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  /* Fullscreen tracking */
  useEffect(() => {
    const onFs = () => setIsFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  const Current = SLIDES[index].Component;

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden" style={{ background: NAVY }}>
      {/* Progress bar */}
      <div className="absolute left-0 top-0 z-30 h-1 w-full bg-white/10">
        <motion.div
          className="h-full"
          style={{ background: TEAL }}
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Stage */}
      <div ref={wrapRef} className="relative flex flex-1 items-center justify-center">
        <div
          className="relative overflow-hidden rounded-xl shadow-2xl"
          style={{
            width: BASE_W,
            height: BASE_H,
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <AnimatePresence custom={dir} mode="popLayout" initial={false}>
            <motion.div
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Current />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom control bar */}
      <div className="z-30 flex items-center justify-center gap-4 px-6 py-3">
        <button
          onClick={prevSlide}
          disabled={index === 0}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <span className="min-w-[64px] text-center text-sm font-medium tabular-nums text-white/80">
          {index + 1} / {total}
        </span>

        <button
          onClick={nextSlide}
          disabled={index === total - 1}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <span className="mx-2 h-6 w-px bg-white/15" />

        <button
          onClick={() => setOverview(true)}
          aria-label="Show all slides"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <Grid2x2 className="h-5 w-5" />
        </button>

        <button
          onClick={toggleFullscreen}
          aria-label="Toggle fullscreen"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          {isFs ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
        </button>
      </div>

      {/* Dot indicators */}
      <div className="pointer-events-none absolute bottom-[68px] left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i, i > index ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "pointer-events-auto h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60",
            )}
          />
        ))}
      </div>

      {/* Overview grid */}
      <AnimatePresence>
        {overview && (
          <motion.div
            ref={overviewRef}
            role="dialog"
            aria-modal="true"
            aria-label="All slides"
            onKeyDown={onOverviewKeyDown}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 overflow-y-auto p-8"
            style={{ background: "rgba(8,14,24,0.96)" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">All slides</h2>
              <button
                ref={closeBtnRef}
                onClick={() => setOverview(false)}
                aria-label="Close overview"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {SLIDES.map((s, i) => {
                const Thumb = s.Component;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      go(i, i > index ? 1 : -1);
                      setOverview(false);
                    }}
                    className={cn(
                      "group relative aspect-video overflow-hidden rounded-lg ring-2 transition",
                      i === index ? "ring-white" : "ring-transparent hover:ring-white/50",
                    )}
                  >
                    <div
                      className="absolute left-0 top-0"
                      style={{
                        width: BASE_W,
                        height: BASE_H,
                        transform: "scale(0.22)",
                        transformOrigin: "top left",
                      }}
                    >
                      <Thumb />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-gradient-to-t from-black/80 to-transparent px-2 py-1.5">
                      <span className="text-[11px] font-semibold text-white/90">{i + 1}</span>
                      <span className="truncate text-[11px] text-white/70">{s.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
