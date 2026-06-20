import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  isVideoReady: boolean;
  onAnimationComplete: () => void;
}

export function Preloader({ isVideoReady, onAnimationComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // If the video status isn't ready, we fill up to 85% gradually
    // Once video reports ready AND page load completes, we accelerate swiftly to 100%
    const maxFakeProgress = isVideoReady ? 100 : 88;
    const intervalTime = isVideoReady ? 8 : 25;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= maxFakeProgress) {
          clearInterval(timer);
          return maxFakeProgress;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVideoReady]);

  useEffect(() => {
    if (progress === 100) {
      // Small pause for luxury effect, then trigger fade out
      const delayTimer = setTimeout(() => {
        setIsFadingOut(true);
        // Remove preloader after CSS fade-out transition concludes
        const removeTimer = setTimeout(() => {
          setIsDone(true);
          onAnimationComplete();
        }, 800);
        return () => clearTimeout(removeTimer);
      }, 500);

      return () => clearTimeout(delayTimer);
    }
  }, [progress, onAnimationComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex flex-col justify-center items-center select-none transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center max-w-sm w-full px-8 space-y-8">
        {/* Brand visual logotype */}
        <div className="flex flex-col items-center space-y-1">
          <div className="text-4xl font-semibold tracking-[0.2em] text-white overflow-hidden">
            <span className="block animate-pulse">VEX</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-mono font-light">
            Legacy Real Estate
          </span>
        </div>

        {/* Dynamic percentage counter */}
        <div className="text-sm font-mono text-gray-400 font-light">
          {progress}%
        </div>

        {/* Minimalist raw line progress gauge matching VEX alignment */}
        <div className="w-48 h-[1.5px] bg-white/5 relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 bottom-0 bg-white transition-all duration-300 ease-out shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Discretion protocol text */}
        <div className="text-[9px] uppercase tracking-[0.15em] text-gray-600 font-light text-center">
          Establishing Secure Portal...
        </div>
      </div>
    </div>
  );
}
