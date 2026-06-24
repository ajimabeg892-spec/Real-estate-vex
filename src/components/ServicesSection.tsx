import React from 'react';
import { Home, Building, Briefcase, Compass, Key, TrendingUp, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home,
  Building: Building,
  Briefcase: Briefcase,
  Compass: Compass,
  Key: Key,
  TrendingUp: TrendingUp,
};

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-24 px-6 md:px-12 lg:px-16 bg-[#030303] relative border-t border-white/5 scroll-mt-20"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Services Heading details */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFBA6B] block mb-2">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-white">
              Bespoke Property Solutions
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-400 font-light leading-relaxed">
            Delivering trust and elite real estate solutions across India and the UAE since 2013, from luxury residential search to strategic commercial deployments.
          </p>
        </div>

        {/* Services Grid Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Compass;

            return (
              <div
                key={service.id}
                className="liquid-glass border border-white/10 hover:border-[#DFBA6B]/30 p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full bg-black/40"
              >
                <div>
                  {/* Premium animated icon wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-[#DFBA6B] group-hover:text-black group-hover:bg-[#DFBA6B] group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
                  </div>

                  <h3 className="text-lg font-serif font-semibold text-white mb-3 group-hover:text-[#DFBA6B] transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Micro interactivity tag */}
                <div className="pt-6 flex justify-end border-t border-white/5 mt-6">
                  <span className="text-xs text-gray-500 font-mono flex items-center gap-1 group-hover:text-white transition-colors duration-200">
                    LEARN MORE <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#DFBA6B]" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
