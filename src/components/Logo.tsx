import React from 'react';

interface LogoProps {
  variant?: 'badge' | 'horizontal' | 'icon';
  className?: string;
  size?: number | string;
}

export function Logo({ variant = 'horizontal', className = '', size }: LogoProps) {
  // Rich Gold gradient colors
  const goldColor = "#D4AF37"; // Elegant Metallic Gold
  const goldGradientId = "citihomez-gold-gradient";

  const renderBadge = () => {
    // Beautiful circular crown/crest badge for Citihomez
    return (
      <div 
        className={`flex items-center justify-center p-2 rounded-full bg-black border-2 border-[#D4AF37]/50 shadow-2xl select-none ${className}`}
        style={{ width: size || 180, height: size || 180 }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D4" />
              <stop offset="30%" stopColor="#DFBA6B" />
              <stop offset="50%" stopColor="#C59B3F" />
              <stop offset="85%" stopColor="#EAD29A" />
              <stop offset="100%" stopColor="#9C7323" />
            </linearGradient>
          </defs>
          
          {/* Inner concentric gold rings */}
          <circle cx="200" cy="200" r="185" fill="#0A0A0A" stroke="url(#citihomez-gold-gradient)" strokeWidth="2" />
          <circle cx="200" cy="200" r="175" fill="none" stroke="url(#citihomez-gold-gradient)" strokeWidth="1" opacity="0.6" strokeDasharray="5,5" />
          <circle cx="200" cy="200" r="170" fill="none" stroke="url(#citihomez-gold-gradient)" strokeWidth="1.5" />
          
          {/* Stylized Modern House / Crest Icon ("C" + House Architecture) */}
          <g transform="translate(130, 95)" stroke="url(#citihomez-gold-gradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant Roof */}
            <path d="M 20 60 L 70 20 L 120 60" strokeWidth="4" />
            <path d="M 40 60 L 40 110 L 100 110 L 100 60" strokeWidth="3" />
            {/* Distinct Inner C Arc */}
            <path d="M 85 55 A 25 25 0 1 0 85 95" strokeWidth="4.5" />
            {/* Small center window */}
            <rect x="52" y="72" width="14" height="18" rx="1" />
          </g>

          {/* Typography */}
          <text
            x="200"
            y="265"
            fontFamily="Georgia, serif"
            fontSize="32"
            fontWeight="bold"
            letterSpacing="3"
            fill="url(#citihomez-gold-gradient)"
            textAnchor="middle"
          >
            CITIHOMEZ
          </text>

          <text
            x="200"
            y="298"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="9"
            fontWeight="600"
            letterSpacing="2.5"
            fill="#E2E8F0"
            textAnchor="middle"
          >
            DELIVERING TRUST
          </text>

          {/* Divider Arc */}
          <path d="M 120 320 Q 200 340 280 320" fill="none" stroke="url(#citihomez-gold-gradient)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  };

  const renderHorizontal = () => {
    // Horizontal logo for headers, dark backgrounds
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        {/* Left emblem: Golden interlocking geometry */}
        <div className="shrink-0 relative" style={{ width: size || 42, height: size || 42 }}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`${goldGradientId}-horiz`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2D4" />
                <stop offset="50%" stopColor="#DFBA6B" />
                <stop offset="100%" stopColor="#9C7323" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="#0E0E0E" stroke="url(#citihomez-gold-gradient-horiz)" strokeWidth="2" />
            {/* Elegant luxury 'C' housing outline */}
            <path d="M 35 60 L 50 45 L 65 60 L 65 72 L 35 72 Z" fill="none" stroke="url(#citihomez-gold-gradient-horiz)" strokeWidth="2" />
            <path d="M 30 52 L 50 32 L 70 52" fill="none" stroke="url(#citihomez-gold-gradient-horiz)" strokeWidth="3" strokeLinecap="round" />
            <path d="M 62 48 A 12 12 0 1 0 62 68" fill="none" stroke="url(#citihomez-gold-gradient-horiz)" strokeWidth="3.5" />
          </svg>
        </div>

        {/* Right text stack */}
        <div className="flex flex-col text-left">
          <div className="flex items-center font-serif font-bold text-[18px] sm:text-[21px] tracking-wider leading-none text-white">
            <span>CITI</span>
            <span className="text-[#DFBA6B]">HOMEZ</span>
          </div>
          
          <div className="text-[7.5px] sm:text-[8.5px] tracking-[0.16em] font-sans font-medium uppercase mt-1 leading-none text-gray-400">
            CONNECTING DREAMS • DELIVERING TRUST
          </div>
        </div>
      </div>
    );
  };

  const renderIconOnly = () => {
    return (
      <div 
        className={`flex items-center justify-center rounded-xl bg-neutral-900 border border-[#DFBA6B]/20 p-1.5 transition-all duration-300 ${className}`} 
        style={{ width: size || 40, height: size || 40 }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`${goldGradientId}-icon`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D4" />
              <stop offset="50%" stopColor="#DFBA6B" />
              <stop offset="100%" stopColor="#9C7323" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="#0E0E0E" stroke="url(#citihomez-gold-gradient-icon)" strokeWidth="2" />
          <path d="M 30 52 L 50 32 L 70 52" fill="none" stroke="url(#citihomez-gold-gradient-icon)" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 62 48 A 12 12 0 1 0 62 68" fill="none" stroke="url(#citihomez-gold-gradient-icon)" strokeWidth="3.5" />
        </svg>
      </div>
    );
  };

  switch (variant) {
    case 'badge':
      return renderBadge();
    case 'icon':
      return renderIconOnly();
    case 'horizontal':
    default:
      return renderHorizontal();
  }
}
