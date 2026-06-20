import React from 'react';
import { Compass, ArrowUpRight, TrendingUp, Shield } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass: Compass,
  ArrowUpRight: ArrowUpRight,
  TrendingUp: TrendingUp,
  Shield: Shield,
};

export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-24 px-6 md:px-12 lg:px-16 bg-neutral-950/40 relative border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Services Heading details */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 block mb-2">
              OUR SERVICE ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Strategic Services
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-400 font-light leading-relaxed">
            From physical search parameters to strategic real estate asset restructuring, our workflows provide premium execution across four core services.
          </p>
        </div>

        {/* 4 Services Grid Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Compass;

            return (
              <div
                key={service.id}
                className="liquid-glass border border-white/10 hover:border-white/20 p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Premium animated icon wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-gray-300 group-hover:text-white group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
                  </div>

                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-gray-300 transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Micro interactivity tag */}
                <div className="pt-6 flex justify-end">
                  <span className="text-xs text-gray-500 font-mono flex items-center gap-1 group-hover:text-white transition-colors duration-200">
                    LEARN MORE <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
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
