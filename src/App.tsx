import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { AnimatedHeading } from './components/AnimatedHeading';
import { FadeIn } from './components/FadeIn';
import { Navbar } from './components/Navbar';
import { PropertyCard } from './components/PropertyCard';
import { PropertyModal } from './components/PropertyModal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsCounter } from './components/StatsCounter';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { ContactSection } from './components/ContactSection';
import { Preloader } from './components/Preloader';
import { Logo } from './components/Logo';
import { PROPERTIES, STATS } from './data';
import { Property } from './types';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  // Track page scroll coordinates for high-fidelity animations
  const { scrollY } = useScroll();

  // Subtly fade out and shift up the hero elements as the user scrolls down
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const heroTranslateY = useTransform(scrollY, [0, 450], [0, -60]);
  const tagY = useTransform(scrollY, [0, 450], [0, -30]);

  // Framer Motion variants for stagger scroll entrances
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 24,
        stiffness: 90,
      }
    }
  };

  // Safety timeout fallback (4.5 seconds maximum waiting time for slow video loads)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoReady(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll helper for buttons in the hero section
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
    <div className="relative min-h-screen bg-black text-white flex flex-col overflow-x-hidden select-none font-sans scroll-smooth">
      
      {/* Dynamic luxury preloader overlay */}
      <Preloader 
        isVideoReady={isVideoReady} 
        onAnimationComplete={() => setIsPreloaderComplete(true)} 
      />

      {/* 1. STICKY NAVBAR */}
      <Navbar />

      {/* 2. HERO SECTION / VIEWPORT FOLD - Includes raw, undimmed background video */}
      <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-12 lg:pb-16 pt-24">
        {/* Video Background (Autoplay, Loop, Muted, playsInline, object-cover) */}
        {/* NO overlays, NO gradients, raw video playback exactly as specified */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setIsVideoReady(true)}
          onLoadedData={() => setIsVideoReady(true)}
        />
        
        {/* Content Box Overlay sitting securely on top of z-0 Video with parallax scroll effect */}
        <motion.div 
          style={{ opacity: heroOpacity, y: heroTranslateY }}
          className="relative z-10 w-full px-6 md:px-12 lg:px-16 flex flex-col justify-end mt-auto h-full"
        >
          <div className="w-full lg:grid lg:grid-cols-2 lg:items-end gap-10">
            
            {/* Left Column - Headline details with scroll-based staggered entrance */}
            <motion.div 
              variants={heroContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="flex flex-col items-start"
            >
              {/* Heading with Inter, text sizes, letter-spacing, and character staggered animations */}
              <motion.div variants={heroItemVariants} className="w-full">
                <AnimatedHeading
                  text={"Invest in Land,\nBuild Wealth."}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-[1.08] text-white"
                />
              </motion.div>
              
              {/* Subheading with slight delay */}
              <motion.div variants={heroItemVariants} className="w-full">
                <p className="text-base md:text-lg text-gray-300 mb-5 max-w-lg leading-relaxed font-normal">
                  Premium freehold plots, luxurious farmhouse retreats, and high-appreciation residential land investment opportunities in Noida, Greater Noida, and Delhi NCR.
                </p>
              </motion.div>
              
              {/* Buttons with additional delay */}
              <motion.div variants={heroItemVariants} className="w-full">
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-[#D85924] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c44e1e] transition-colors duration-200 cursor-pointer text-sm md:text-base active:scale-95 shadow-lg"
                  >
                    Book Site Visit
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('properties')}
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-sm md:text-base active:scale-95"
                  >
                    Get Property Details
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Luxury Tag block aligned at bottom right, responding to scroll */}
            <motion.div 
              style={{ y: tagY }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0"
            >
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-lg md:text-xl lg:text-2xl font-light tracking-wide text-white">
                  Noida • Greater Noida • Delhi NCR
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 3. FEATURED PROPERTIES SECTION */}
      <section id="properties" className="py-24 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-black scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-orange-400 block">
                PRIME PORTFOLIO EXCLUSIVES
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
                Featured Properties
              </h2>
            </div>
            <p className="max-w-md text-sm text-gray-400 font-light leading-relaxed">
              Premium land developments, pre-designed luxury farmhouse plots, and direct high-rise residential properties representing pristine trust and appreciation.
            </p>
          </div>

          {/* Properties Grid Column */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PROPERTIES.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <PropertyCard
                  property={property}
                  onSelect={setSelectedProperty}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <AboutSection />

      {/* 5. SERVICES SECTION */}
      <ServicesSection />

      {/* 6. STATISTICS / WHY CHOOSE US COUNTERS */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-black relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 block mb-2 font-mono">
              VALUATION RECORD
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
              MY FIRSTBRICK INFRA by the Numbers
            </h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Our market trust is proven through unmatched area metrics, secure direct land registries, and 100% transparent pricing models.
            </p>
          </div>

          {/* Animated Counters Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <StatsCounter
                key={stat.id}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-neutral-950/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 block mb-1">
              PATRONS OF MODERN LUXURY
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
              Endorsements
            </h2>
          </div>

          {/* Testimonial Active Slider component */}
          <TestimonialCarousel />
        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="relative py-28 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-white/5">
        
        {/* Abstract Architectural BG Asset visual detail */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium text-white bg-orange-600 border border-orange-500 px-3 py-1 rounded inline-block">
            INVEST IN LAND, BUILD WEALTH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Build Your Legacy Brick By Brick
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Our premium freehold land packages and modular farmhouse site schedules inside scenic expansions are fully active.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#D85924] hover:bg-[#c44e1e] text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-300 cursor-pointer shadow-lg w-full sm:w-auto active:scale-95"
            >
              Book Site Visit
            </button>
            <button 
              onClick={() => scrollToSection('properties')}
              className="liquid-glass border border-white/20 hover:bg-white hover:text-black font-semibold text-white px-8 py-4 rounded-xl text-sm transition-all duration-300 cursor-pointer w-full sm:w-auto active:scale-95"
            >
              Get Property Details
            </button>
          </div>
        </div>
      </section>

      {/* 9. SECURE CONTACT FORM / INTERACTIVE BRIEFING */}
      <ContactSection />

      {/* 10. PREMIUM FOOTER */}
      <footer className="bg-neutral-950 border-t border-white/10 text-white pt-16 pb-8 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo variant="horizontal" size={42} className="hover:opacity-95" />
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              MY FIRSTBRICK INFRA • Build Legacy Brick By Brick. Noida, Greater Noida, and Delhi NCR's trusted freehold plots and luxury real estate developers.
            </p>
          </div>

          {/* Rapid Navigation Links */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">Navigational Map</h3>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              {['Home', 'Properties', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Secure Services Sub-list */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">Investment Sectors</h3>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              <li><div className="hover:text-white transition-colors">Premium Freehold Plots</div></li>
              <li><div className="hover:text-white transition-colors">Farmhouse Developments</div></li>
              <li><div className="hover:text-white transition-colors">Residential Apartments</div></li>
              <li><div className="hover:text-white transition-colors">Strategic Land Investment</div></li>
            </ul>
          </div>

          {/* Global Communication lines */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">Secure Coordinates</h3>
            <div className="flex items-center gap-3 text-sm text-gray-400 font-light">
              <Mail className="w-4 h-4" />
              <span>associate@rsrealestate.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400 font-light">
              <Phone className="w-4 h-4" />
              <span>+91 9220436321</span>
            </div>
            
            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#instagram" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#facebook" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#twitter" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#globe" aria-label="Global Site" className="text-gray-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

        </div>

        {/* copyright and credentials */}
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-light gap-4">
          <div>
            &copy; {new Date().getFullYear()} MY FIRSTBRICK INFRA. All Rights Reserved. Private Trust Protected.
          </div>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-white transition-colors">Terms of Briefing</a>
            <a href="#privacy" className="hover:text-white transition-colors">Confidentiality Protocol</a>
          </div>
        </div>
      </footer>

      {/* MODAL WINDOW FOR PROPERTY DETAIL */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

    </div>
  );
}
