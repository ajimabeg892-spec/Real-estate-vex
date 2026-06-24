import React from 'react';
import { X, BedDouble, Bath, Square, MapPin, Shield, CheckCircle } from 'lucide-react';
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
        className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer transition-opacity duration-300"
      />

      {/* Main Glass Modal container */}
      <div className="liquid-glass border border-white/20 rounded-3xl w-full max-w-4xl relative z-10 max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in bg-neutral-950">
        
        {/* Close Button (Floating right) */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-25 bg-black/80 p-2.5 rounded-full border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer hover:border-[#DFBA6B]/50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image header banner */}
        <div className="relative aspect-video w-full max-h-[380px] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {/* Tag Overlay overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-black bg-[#DFBA6B] px-3 py-1 rounded mb-2 inline-block shadow-md">
              {property.tag}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white mb-2">
              {property.title}
            </h2>
            <div className="flex items-center gap-1.5 text-gray-300 text-sm font-light">
              <MapPin className="w-4 h-4 text-[#DFBA6B]" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Details Grid Section */}
        <div className="p-8 md:p-10 grid md:grid-cols-12 gap-8 bg-neutral-950">
          
          {/* Main Info (Left) */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-[#DFBA6B] font-semibold mb-3">Architectural Summary</h3>
              <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                {property.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-6">
              {property.beds > 0 ? (
                <>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                      <BedDouble className="w-4 h-4 text-[#DFBA6B]" />
                      <span className="text-xs font-light">Beds</span>
                    </div>
                    <span className="text-lg md:text-xl font-mono text-white">{property.beds}</span>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                      <Bath className="w-4 h-4 text-[#DFBA6B]" />
                      <span className="text-xs font-light">Baths</span>
                    </div>
                    <span className="text-lg md:text-xl font-mono text-white">{property.baths}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                      <span className="text-xs font-light text-[#DFBA6B] font-mono uppercase tracking-wider">CATEGORY</span>
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-white block mt-1 uppercase truncate">{property.tag.replace(' & Flats', '').replace(' Spaces', '')}</span>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                      <span className="text-xs font-light text-emerald-400 font-mono uppercase tracking-wider">POSSESSION</span>
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-white block mt-1 uppercase">Immediate / Ready</span>
                  </div>
                </>
              )}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400 mb-1">
                  <Square className="w-4 h-4 text-[#DFBA6B]" />
                  <span className="text-xs font-light">Total Area</span>
                </div>
                <span className="text-base md:text-lg font-mono text-white block leading-none">{property.sqft.toLocaleString()}</span>
                <span className="text-[10px] text-gray-500 font-mono">SQFT Total Space</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#DFBA6B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1 font-mono uppercase tracking-wider">LEGAL ACCREDITATION</span>
                  <span className="text-xs font-medium text-white">100% Verified clear-title documentation</span>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1 font-mono uppercase tracking-wider">REGISTRATION STATUS</span>
                  <span className="text-xs font-medium text-white">Fast-track direct registry &amp; handovers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Inquiry Action Widget (Right) */}
          <div className="md:col-span-5 bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gray-400 block font-light">Citihomez Premier Listing</span>
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-white block mt-1.5 text-[#DFBA6B]">
                  {property.price}
                </span>
                <span className="text-[10px] text-gray-400 block mt-2 font-mono uppercase tracking-wider">Direct Transaction Advisory</span>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Advisory Desk Location</span>
                  <span className="text-white font-medium">Bangalore &amp; Dubai</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>Booking Security</span>
                  <span className="text-white font-medium">Fully Escrowed &amp; Insured</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full bg-[#DFBA6B] hover:bg-[#c59b3f] text-black py-3 px-4 rounded-xl font-semibold text-xs md:text-sm transition-all text-center block cursor-pointer shadow-md"
              >
                Book Private Briefing
              </a>
              <a
                href={`https://wa.me/919845056564?text=Hi%20Citihomez%2C%20I%20am%20interested%20in%20the%20property%20%22${encodeURIComponent(property.title)}%22%20at%20${encodeURIComponent(property.location)}.%20Please%20share%20further%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-medium text-xs md:text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.811 1.451 5.4 0 9.791-4.394 9.795-9.793.002-2.617-1.015-5.074-2.864-6.924C16.48 2.036 14.025 1.02 11.408 1.02c-5.4 0-9.792 4.394-9.796 9.794-.001 1.705.454 3.37 1.317 4.823L1.91 21.087l5.737-1.505zm14.032-9.336c-.198-.1-.198-.1-.198-.1H12h-.002z M17.487 14.39c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-.893-.797-1.493-1.78-1.668-2.08-.175-.3-.018-.462.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.481-.58-.663-.589l-.562-.012c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.524.714.31 1.27.494 1.705.633.717.228 1.368.196 1.884.119.575-.085 1.775-.725 2.025-1.39.25-.665.25-1.23.175-1.35-.075-.1-.275-.2-.575-.35z" />
                </svg>
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
