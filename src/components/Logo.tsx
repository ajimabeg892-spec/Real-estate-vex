import React from 'react';

interface LogoProps {
  variant?: 'badge' | 'horizontal' | 'icon';
  className?: string;
  size?: number | string;
}

export function Logo({ variant = 'horizontal', className = '', size }: LogoProps) {
  // Brick-orange signature color from the uploaded logo image
  const brickOrange = "#D85924";
  
  // High-fidelity SVG logo element reflecting precise typography and visual structure of MY FIRSTBRICK INFRA
  const renderBadge = () => {
    // Large circle badge (exact match of uploaded layout)
    return (
      <div 
        className={`flex items-center justify-center p-2 rounded-full bg-white border border-gray-200/50 shadow-lg select-none ${className}`}
        style={{ width: size || 180, height: size || 180 }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular Container White Backdrop with a very subtle brick pattern */}
          <defs>
            <pattern id="circle-brick-pattern" width="40" height="20" patternUnits="userSpaceOnUse">
              <rect width="40" height="20" fill="transparent" />
              <path d="M 0,0 L 40,0 M 0,10 L 40,10 M 20,0 L 20,10 M 0,10 L 0,20 M 40,10 L 40,20 M 10,10 L 10,20 M 30,10 L 30,20" 
                    fill="none" stroke="#F1F5F9" strokeWidth="1" />
            </pattern>
          </defs>
          
          <circle cx="200" cy="200" r="195" fill="url(#circle-brick-pattern)" />
          <circle cx="200" cy="200" r="190" fill="none" stroke="#E2E8F0" strokeWidth="1" />
          
          {/* Logo graphics centered inside circular badge */}
          <g transform="translate(15, 110)">
            {/* The "MY 1" Orange Brick Badge */}
            <g transform="translate(10, 20)">
              {/* Outer Golden/Orange border line */}
              <rect x="0" y="0" width="125" height="85" rx="16" fill="none" stroke={brickOrange} strokeWidth="3" />
              
              {/* Inner Solid Orange Rectangle with brick pattern background */}
              <rect x="5" y="5" width="115" height="75" rx="12" fill={brickOrange} />
              
              {/* Double Lines/Brick lines inside orange box */}
              <path d="M 15 35 L 110 35 M 15 55 L 110 55 M 40 5 L 40 35 M 80 5 L 80 35 M 60 35 L 60 55 M 30 55 L 30 80 M 85 55 L 85 80" 
                    fill="none" stroke="#ffffff22" strokeWidth="1.5" />
              
              {/* "MY" White Text */}
              <text x="50" y="55" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="900" fill="#FFFFFF" textAnchor="middle">MY</text>
              
              {/* "1" Subscript accent inside white badge frame */}
              <text x="96" y="54" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="900" fill="#FDBA74" textAnchor="middle">1</text>
            </g>

            {/* "FIRSTBRICK INFRA" and "BUILD LEGACY" Text */}
            <g transform="translate(150, 50)">
              <text x="0" y="15" fontFamily="system-ui, -apple-system, sans-serif" fontSize="27" fontWeight="800" letterSpacing="0.2">
                <tspan fill={brickOrange}>FIRSTBRICK</tspan>
                <tspan fill="#1E293B"> INFRA</tspan>
              </text>
              
              <text x="2" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="1.2">
                <tspan fill="#475569">BUILD LEGACY </tspan>
                <tspan fill={brickOrange}>BRICK BY BRICK</tspan>
              </text>
              
              {/* The stylized horizontal point/arrow shape on the right */}
              <path d="M 245 4 L 300 4 L 315 14 L 300 24 L 245 24 Z" fill={brickOrange} />
              <rect x="228" y="27" width="87" height="4" rx="2" fill="#1E293B" />
            </g>
          </g>
        </svg>
      </div>
    );
  };

  const renderHorizontal = () => {
    // Horizontal navigation header brand logo - adapts elegantly to dark backgrounds
    // Using high contrast colors with high aesthetic curves and premium text placement
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Left Side: "MY 1" Rounded Block */}
        <div className="shrink-0 relative" style={{ width: size ? (Number(size) * 1.5) : 56, height: size || 38 }}>
          <svg
            viewBox="0 0 125 85"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft border accent */}
            <rect x="0" y="0" width="125" height="85" rx="16" fill="none" stroke={brickOrange} strokeWidth="3" />
            
            {/* Signature Filled Orange Brick Block */}
            <rect x="5" y="5" width="115" height="75" rx="12" fill={brickOrange} />
            
            {/* Grid Brick Pattern Accent */}
            <path d="M 15 35 L 110 35 M 15 55 L 110 55 M 40 5 L 40 35 M 80 5 L 80 35 M 60 35 L 60 55 M 30 55 L 30 80 M 85 55 L 85 80" 
                  fill="none" stroke="#ffffff1a" strokeWidth="1.5" />
            
            {/* Bold Logotype Text inside Box */}
            <text x="50" y="56" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="900" fill="#FFFFFF" textAnchor="middle">MY</text>
            <text x="96" y="54" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="900" fill="#FDBA74" textAnchor="middle">1</text>
          </svg>
        </div>

        {/* Right Side: Logotype Text columns */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1 font-sans font-extrabold text-[15px] sm:text-[18px] tracking-wide leading-none">
            <span style={{ color: brickOrange }} className="transition-colors duration-300">FIRSTBRICK</span>
            <span className="text-white">INFRA</span>
          </div>
          
          <div className="text-[7.5px] sm:text-[9.2px] tracking-[0.14em] font-sans font-bold uppercase mt-1 leading-none">
            <span className="text-gray-400">BUILD LEGACY </span>
            <span style={{ color: brickOrange }}>BRICK BY BRICK</span>
          </div>
        </div>
      </div>
    );
  };

  const renderIconOnly = () => {
    // A clean circular representation with solely the signature orange badge
    return (
      <div 
        className={`flex items-center justify-center rounded-xl bg-orange-950/20 border border-orange-500/20 p-1.5 transition-all duration-300 ${className}`} 
        style={{ width: size || 40, height: size || 40 }}
      >
        <svg
          viewBox="0 0 125 85"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="125" height="85" rx="16" fill="none" stroke={brickOrange} strokeWidth="3.5" />
          <rect x="5" y="5" width="115" height="75" rx="12" fill={brickOrange} />
          <text x="50" y="56" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="900" fill="#FFFFFF" textAnchor="middle">MY</text>
          <text x="96" y="54" fontFamily="system-ui, -apple-system, sans-serif" fontSize="28" fontWeight="900" fill="#FDBA74" textAnchor="middle">1</text>
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
