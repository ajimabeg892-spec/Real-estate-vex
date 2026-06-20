import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 5500);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0">
      {/* Carousel Container */}
      <div className="liquid-glass border border-white/20 p-8 md:p-12 lg:p-16 rounded-3xl relative overflow-hidden backdrop-blur-lg">
        {/* Absolute Quote Design Attribute */}
        <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none transform translate-x-4 -translate-y-4" />

        {/* Content Slides with responsive transition */}
        <div className="relative min-h-[220px] flex flex-col justify-between">
          <div className="transition-all duration-500 ease-in-out">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              ))}
            </div>

            {/* Testimonial Message */}
            <blockquote className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 italic leading-relaxed mb-8">
              "{TESTIMONIALS[activeIndex].content}"
            </blockquote>
          </div>

          {/* Client Bio Section */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img
                src={TESTIMONIALS[activeIndex].avatar}
                alt={TESTIMONIALS[activeIndex].name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-white/25"
              />
              <div>
                <cite className="not-italic text-base font-medium text-white block">
                  {TESTIMONIALS[activeIndex].name}
                </cite>
                <span className="text-xs text-gray-400 font-light block">
                  {TESTIMONIALS[activeIndex].role} &mdash; <span className="text-white/60">{TESTIMONIALS[activeIndex].company}</span>
                </span>
              </div>
            </div>

            {/* Slider Manual Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous review"
                className="p-2.5 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next review"
                className="p-2.5 rounded-full border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-6">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
