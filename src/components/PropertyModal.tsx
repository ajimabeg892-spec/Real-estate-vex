import React from 'react';
import { X, BedDouble, Bath, Square, MapPin, Calendar, Compass, ArrowUpRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export function PropertyModal({ property, onClose }: PropertyModalProps) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Dark backdrop overlay */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer transition-opacity duration-300"
      />

      {/* Main Glass Modal container */}
      <div className="liquid-glass border border-white/20 rounded-3xl w-full max-w-4xl relative z-10 max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        
        {/* Close Button (Floating right) */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-25 bg-black/60 p-2.5 rounded-full border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image header banner */}
        <div className="relative aspect-video w-full max-h-[360px] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Tag Overlay overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-300 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 mb-2 inline-block">
              {property.tag}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white mb-1">
              {property.title}
            </h2>
            <div className="flex items-center gap-1.5 text-gray-300 text-sm font-light">
              <MapPin className="w-4 h-4" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Details Grid Section */}
        <div className="p-8 md:p-10 grid md:grid-cols-12 gap-8">
          
          {/* Main Info (Left) */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">Architectural Summary</h3>
              <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                {property.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-6">
              {property.beds > 0 ? (
                <>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                      <BedDouble className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-light">Beds</span>
                    </div>
                    <span className="text-lg md:text-xl font-mono text-white">{property.beds}</span>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                      <Bath className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-light">Baths</span>
                    </div>
                    <span className="text-lg md:text-xl font-mono text-white">{property.baths}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                      <span className="text-xs font-light text-orange-400 font-mono">CATEGORY</span>
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-white block mt-1 uppercase">Freehold Plot</span>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                      <span className="text-xs font-light text-emerald-400 font-mono">STATUS</span>
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-white block mt-1 uppercase">Immediate Registry</span>
                  </div>
                </>
              )}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                  <Square className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-light">Plots Area</span>
                </div>
                <span className="text-base md:text-lg font-mono text-white block leading-none">{Math.round(property.sqft / 9)} <span className="text-xs text-gray-400">SQYD</span></span>
                <span className="text-[10px] text-gray-500 font-mono">({property.sqft.toLocaleString()} SQFT)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-400 block mb-1 font-mono">POSSESSION</span>
                <span className="text-sm font-medium text-white">Immediate / Gated</span>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-400 block mb-1 font-mono">CLEAR TITLE</span>
                <span className="text-sm font-medium text-white">100% Verified Bank-Loanable</span>
              </div>
            </div>
          </div>

          {/* Pricing & Inquiry Action Widget (Right) */}
          <div className="md:col-span-5 bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gray-400 block font-light">Premium Investment Pricing</span>
                <span className="text-3xl md:text-4xl font-semibold tracking-tight text-white block mt-1">
                  {property.price}
                </span>
                <span className="text-xs text-gray-400 block mt-1 font-mono">INR Direct Land Registry Transaction</span>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Estimated Registry Timeline</span>
                  <span className="text-white">15-30 Days</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Token Booking Req.</span>
                  <span className="text-white">10% of Area Cost</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full bg-[#D85924] hover:bg-[#c44e1e] text-white py-3 px-4 rounded-xl font-medium text-xs md:text-sm transition-all text-center block cursor-pointer"
              >
                Book Site Visit
              </a>
              <a
                href={`https://wa.me/919220436321?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20at%20${encodeURIComponent(property.location)}.%20Please%20send%20me%20the%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-medium text-xs md:text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                Get Property Details (WhatsApp)
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
