import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 px-4 md:px-12 lg:px-16 ${
        isScrolled ? 'pt-3' : 'pt-6'
      }`}
    >
      <nav 
        className={`liquid-glass rounded-xl flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'px-6 py-3 bg-black/85 backdrop-blur-md border border-white/10 shadow-xl' 
            : 'px-4 py-2 bg-transparent border border-transparent'
        }`}
      >
        {/* Brand Name Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="cursor-pointer"
        >
          <Logo variant="horizontal" size={38} className="hover:opacity-90 active:scale-95 transition-all duration-300" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About Us', id: 'about' },
            { name: 'Services', id: 'services' },
            { name: 'Properties', id: 'properties' },
            { name: 'Rentals', id: 'properties' }, // Scrolls to the rentals section/tab
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => {
                // If it's Rentals, let's also trigger an event or handle it gracefully
                scrollToSection(item.id);
                if (item.name === 'Rentals') {
                  // Dispatch custom event to select the Rentals category automatically
                  window.dispatchEvent(new CustomEvent('select-property-filter', { detail: 'Apartments & Flats' }));
                }
              }}
              className="text-xs lg:text-sm font-medium text-gray-300 hover:text-[#DFBA6B] transition-colors duration-200 cursor-pointer relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#DFBA6B] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right CTA Button */}
        <div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#DFBA6B] text-black px-4 lg:px-5 py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-[#c59b3f] transition-all duration-300 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          >
            Enquire Now
          </button>
        </div>
      </nav>
    </header>
  );
}
