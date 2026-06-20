import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
  target: number;
  suffix?: string;
  label: string;
  key?: React.Key;
}

export function StatsCounter({ target, suffix = '', label }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startCountAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target]);

  const startCountAnimation = () => {
    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const steps = 40;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        // Round appropriately (or use decimals for float parameters like 4.8)
        setCount(Number(start.toFixed(target % 1 === 0 ? 0 : 1)));
      }
    }, stepTime);
  };

  return (
    <div 
      ref={elementRef}
      className="text-center p-6 bg-black/30 backdrop-blur-sm border border-white/5 rounded-2xl flex flex-col justify-center items-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-2 font-sans">
        <span>{count}</span>
        <span className="text-gray-400 font-normal">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm text-gray-400 tracking-wider uppercase font-medium">
        {label}
      </div>
    </div>
  );
}
