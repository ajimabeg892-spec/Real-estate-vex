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
            ? 'px-6 py-3 bg-black/65 backdrop-blur-md border border-white/10' 
            : 'px-4 py-2 bg-transparent'
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
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Properties', id: 'properties' },
            { name: 'About', id: 'about' },
            { name: 'Services', id: 'services' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right CTA Button */}
        <div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black px-5 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer shadow-lg active:scale-95"
          >
            Start a Chat
          </button>
        </div>
      </nav>
    </header>
  );
}
