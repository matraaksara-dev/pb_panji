"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  
  // Spring dynamics for smooth numerical progression
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  // Transform float to formatted integer
  const rounded = useTransform(springValue, (latest) => {
    return Math.floor(latest).toLocaleString("id-ID");
  });

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-card border border-border/20 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline font-mono text-3xl md:text-4xl font-extrabold text-primary">
        <span ref={ref} aria-label={`${value}${suffix}`}>
          {/* Display spring-animated value */}
          {isInView ? (
            <span />
          ) : (
            "0"
          )}
        </span>
        {/* React component insertion for standard rendering */}
        <span className="hidden">{value}</span>
        <span className="inline-block">{suffix}</span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-muted-foreground font-medium text-center">
        {label}
      </p>

      {/* Accessibly bind dynamic changes using direct DOM mutation */}
      <span className="sr-only">{`${value}${suffix} ${label}`}</span>
      
      {/* Effect to sync transformed motion value to screen */}
      <SyncValue rounded={rounded} elementRef={ref} />
    </div>
  );
}

// Side effect component to avoid rendering entire parent on motion tick
function SyncValue({
  rounded,
  elementRef,
}: {
  rounded: any;
  elementRef: React.RefObject<HTMLSpanElement | null>;
}) {
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest: string) => {
      if (elementRef.current) {
        elementRef.current.textContent = latest;
      }
    });
    return () => unsubscribe();
  }, [rounded, elementRef]);

  return null;
}
