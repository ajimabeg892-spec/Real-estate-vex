import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '₹1 Crore - ₹3 Crore',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '₹1 Crore - ₹3 Crore',
        notes: '',
      });
    }, 800);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 lg:px-16 text-white border-t border-white/5 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Structural Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#DFBA6B] block mb-2">
                SECURE PORTAL
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-white mb-4">
                Initiate Consultation
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-sm">
                Each real estate milestone starts with a trusted briefing. Contact Citihomez today to map your future luxury villa, premium apartment, or strategic commercial space.
              </p>
            </div>

            {/* Core Address / Phone details */}
            <div className="space-y-4 pt-4 border-t border-white/10 max-w-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#DFBA6B] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Advisory Office</h4>
                  <address className="not-italic text-sm text-gray-400 font-light">
                    Hennur Road, Bangalore, India<br />
                    <span className="text-xs text-gray-500 font-mono mt-1 block">In Collaboration with Alba Real Estate, Dubai</span>
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#DFBA6B] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Direct Enquiry Desk</h4>
                  <p className="text-sm text-gray-400 font-light">+91 98450 56564</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#DFBA6B] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Digital Mailbox</h4>
                  <p className="text-sm text-gray-400 font-light">associate@citihomez.com</p>
                </div>
              </div>

              {/* Real-time WhatsApp Enquiry button requested */}
              <div className="pt-4">
                <a
                  href="https://wa.me/919845056564?text=Hi%20Citihomez%2C%20I%20am%20interested%20in%20your%20properties.%20Please%20provide%20the%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] transition-all text-white font-medium px-5 py-3 rounded-xl text-sm shadow-lg shadow-emerald-950/20"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.811 1.451 5.4 0 9.791-4.394 9.795-9.793.002-2.617-1.015-5.074-2.864-6.924C16.48 2.036 14.025 1.02 11.408 1.02c-5.4 0-9.792 4.394-9.796 9.794-.001 1.705.454 3.37 1.317 4.823L1.91 21.087l5.737-1.505zm14.032-9.336c-.198-.1-.198-.1-.198-.1H12h-.002z M17.487 14.39c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-.893-.797-1.493-1.78-1.668-2.08-.175-.3-.018-.462.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.481-.58-.663-.589l-.562-.012c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.524.714.31 1.27.494 1.705.633.717.228 1.368.196 1.884.119.575-.085 1.775-.725 2.025-1.39.25-.665.25-1.23.175-1.35-.075-.1-.275-.2-.575-.35z" />
                  </svg>
                  <span>WhatsApp Chat Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Premium liquid-glass inquiry form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass border border-white/20 p-8 md:p-10 rounded-2xl relative">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-[#DFBA6B] mb-6 drop-shadow-[0_0_12px_rgba(223,186,107,0.4)]" />
                  <h3 className="text-2xl font-serif font-light tracking-tight mb-2 text-white">Briefing Received</h3>
                  <p className="text-sm text-gray-400 font-light max-w-md leading-relaxed">
                    Thank you. A Citihomez property specialist has been assigned to your workspace. We will contact you back immediately to coordinate your property requirements and private viewings.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg text-xs font-medium tracking-wider uppercase border border-white/10 cursor-pointer transition-colors duration-200"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                        Your Full Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="e.g., Rajesh Ramakrishnan"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-[#DFBA6B]/40 transition-colors duration-200"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="e.g., rajesh@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-[#DFBA6B]/40 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone input */}
                    <div className="space-y-2">
                      <label htmlFor="phone-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                        Phone Number
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        placeholder="e.g., +91 98450-56564"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-[#DFBA6B]/40 transition-colors duration-200"
                      />
                    </div>

                    {/* Budget selection input */}
                    <div className="space-y-2">
                      <label htmlFor="budget-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                        Budget Range
                      </label>
                      <select
                        id="budget-input"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white focus:outline-none focus:border-[#DFBA6B]/40 transition-colors duration-200"
                      >
                        <option value="₹50 Lakhs - ₹1 Crore" className="bg-neutral-900">₹50 Lakhs - ₹1 Crore</option>
                        <option value="₹1 Crore - ₹3 Crore" className="bg-neutral-900">₹1 Crore - ₹3 Crore</option>
                        <option value="₹3 Crore - ₹5 Crore" className="bg-neutral-900">₹3 Crore - ₹5 Crore</option>
                        <option value="₹5 Crore - ₹10 Crore" className="bg-neutral-900">₹5 Crore - ₹10 Crore</option>
                        <option value="₹10 Crore+" className="bg-neutral-900">₹10 Crore+ / Ultra High Networth</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message input */}
                  <div className="space-y-2">
                    <label htmlFor="notes-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                      Specific Property Requirements
                    </label>
                    <textarea
                      id="notes-input"
                      rows={4}
                      placeholder="Specify your preferred parameters (e.g., Luxury Villa in Hennur, Penthouse in Dubai, Commercial blocks in Bangalore)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-[#DFBA6B]/40 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-[#DFBA6B] hover:bg-[#c59b3f] text-black py-4 px-6 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99]"
                  >
                    <span>Connect Now &amp; Book Briefing</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
