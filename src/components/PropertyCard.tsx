import React, { useRef } from 'react';
import { BedDouble, Bath, Square, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  key?: React.Key;
}

export function PropertyCard({ property, onSelect }: PropertyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll details relative to this card component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create a slow vertical translation relative to scroll progression
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      onClick={() => onSelect(property)}
      className="liquid-glass border border-white/20 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 flex flex-col h-full"
    >
      {/* Property Image with zoom container and parallax effect */}
      <div ref={containerRef} className="relative overflow-hidden aspect-[4/3] w-full">
        <motion.img
          src={property.image}
          alt={property.title}
          referrerPolicy="no-referrer"
          style={{ y }}
          className="absolute inset-x-0 w-full h-[116%] -top-[8%] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Absolute Ribbon Tag */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[10px] uppercase tracking-wider font-semibold text-gray-200 z-10">
          {property.tag}
        </div>
      </div>

      {/* Property Details Core */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Price & Location Title */}
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-white">
              {property.price}
            </span>
            <div className="flex items-center gap-1 text-gray-400 text-xs font-light">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.location}</span>
            </div>
          </div>

          <h3 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors duration-200 mb-2">
            {property.title}
          </h3>

          <p className="text-sm text-gray-400 line-clamp-2 md:line-clamp-3 mb-6 font-light leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Real Estate Specifications */}
        <div className="border-t border-white/10 pt-4 flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-mono">{property.beds} <span className="text-gray-500 text-[10px]">BDS</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-mono">{property.baths} <span className="text-gray-500 text-[10px]">BA</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-mono">{property.sqft.toLocaleString()} <span className="text-gray-500 text-[10px]">SQFT</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
