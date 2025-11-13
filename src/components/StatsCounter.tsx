"use client";

import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function StatsCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  label
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-lg md:text-xl text-slate-200">
        {label}
      </div>
    </div>
  );
}
