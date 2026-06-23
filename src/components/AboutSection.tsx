import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Set up parallax scroll hook for the custom visual frame
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"]
  });

  const yAbout = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-16 text-white overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro Tagline */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 block mb-2">
            THE ARCHITECTURE OF VALUE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
            Curating Space. Defining Legacy.
          </h2>
          <div className="w-16 h-[1.5px] bg-white/40"></div>
        </div>

        {/* Split Grid Column layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text details */}
          <div 
            className={`lg:col-span-7 space-y-6 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Founded and led by premier property strategist and developer <strong>Rohan Sharma</strong>, <strong>MY FIRSTBRICK INFRA</strong> provides premium real estate investment opportunities including freehold plots, farmhouses, and residential projects in Noida, Greater Noida, and Delhi NCR.
            </p>
            
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
              Our core focus is delivering highly trusted property solutions, transparent dealings, and premium land parcels with rapid appreciation potential. Under Rohan Sharma's expert stewardship, we bridge the gap between high-yield investment structures and absolute legal trust, securing pristine assets for modern collectors.
            </p>

            {/* Subtle Signature List Block */}
            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="border-l border-orange-500/40 pl-4">
                <h4 className="text-sm font-medium text-white mb-1">Transparent Registry</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Fully secure freehold titles, verified registries, and transparent, clear-cut pricing channels.</p>
              </div>
              <div className="border-l border-orange-500/40 pl-4">
                <h4 className="text-sm font-medium text-white mb-1">Appreciation Nodes</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Pristine plots strategically selected in Noida &amp; Greater Noida expansion sectors.</p>
              </div>
            </div>

            {/* Elegant Founder Signoff */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D85924] font-mono block mb-1">FOUNDER &amp; OWNER</span>
                <span className="text-lg font-serif font-semibold text-white tracking-wide">Rohan Sharma</span>
                <span className="text-xs text-gray-400 block font-light">Principal Developer &amp; Property Specialist</span>
              </div>
              <div className="italic text-gray-400 font-serif text-sm border-l border-white/10 pl-4 py-1 max-w-[320px] leading-relaxed">
                "We don't just sell plots; we build wealth. Every brick, every coordinate represents a legacy for generations."
              </div>
            </div>
          </div>

          {/* Right Column Image Details with custom parallax frame */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="relative group">
              {/* Outer Border Box design */}
              <div className="absolute -inset-2 rounded-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500 pointer-events-none" />
              
              <div ref={imageContainerRef} className="liquid-glass border border-white/20 rounded-2xl overflow-hidden aspect-[4/5] relative">
                <motion.img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern minimalist architectural design lines"
                  referrerPolicy="no-referrer"
                  style={{ y: yAbout }}
                  className="absolute inset-x-0 w-full h-[124%] -top-[12%] object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                
                {/* Embedded luxury caption overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-orange-400 font-mono block mb-1">CURATED FOCUS</span>
                  <span className="text-sm font-light text-white">Lush Green Farmhouse Site, Greater Noida</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
