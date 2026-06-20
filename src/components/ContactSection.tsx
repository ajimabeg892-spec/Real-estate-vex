import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$5M - $10M',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate luxury API response
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '$5M - $10M',
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
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 block mb-2">
                SECURE COMMUNICATION
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4">
                Initiate Dialogue
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-sm">
                Each acquisition journey starts with an private briefing. Connect with one of our lead partners today to schedule a discrete video consultation.
              </p>
            </div>

            {/* Core Address / Phone details */}
            <div className="space-y-4 pt-4 border-t border-white/10 max-w-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Global Headquarters</h4>
                  <address className="not-italic text-sm text-gray-400 font-light">
                    8480 Wilshire Boulevard, Penthouse Suite A<br />
                    Beverly Hills, CA 90211
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Contact Desk</h4>
                  <p className="text-sm text-gray-400 font-light">+1 (310) 555-0199</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Digital Mailbox</h4>
                  <p className="text-sm text-gray-400 font-light">associate@vexrealestate.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Premium liquid-glass inquiry form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass border border-white/20 p-8 md:p-10 rounded-2xl relative">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-white mb-6 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
                  <h3 className="text-2xl font-light tracking-tight mb-2 text-white">Inquiry Received</h3>
                  <p className="text-sm text-gray-400 font-light max-w-md leading-relaxed">
                    A senior partner has been assigned to your workspace. We will reach out via secure channels to schedule our initial teleconference shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg text-xs font-medium tracking-wider uppercase border border-white/10 cursor-pointer transition-colors duration-200"
                  >
                    Submit Another Inquiry
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
                        placeholder="e.g., Alexander Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors duration-200"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                        Digital Mail Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="e.g., alexander@vance.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone input */}
                    <div className="space-y-2">
                      <label htmlFor="phone-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                        Direct Secure Phone
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        placeholder="e.g., +1 (310) 555-0100"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors duration-200"
                      />
                    </div>

                    {/* Budget selection input */}
                    <div className="space-y-2">
                      <label htmlFor="budget-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                        Target Venture Capital
                      </label>
                      <select
                        id="budget-input"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white focus:outline-none focus:border-white/40 transition-colors duration-200"
                      >
                        <option value="$2M - $5M" className="bg-neutral-900">$2,000,000 - $5,000,000</option>
                        <option value="$5M - $10M" className="bg-neutral-900">$5,000,000 - $10,000,000</option>
                        <option value="$10M - $20M" className="bg-neutral-900">$10,000,000 - $20,000,000</option>
                        <option value="$20M+" className="bg-neutral-900">$20,000,000+ / Off-Market</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message input */}
                  <div className="space-y-2">
                    <label htmlFor="notes-input" className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                      Architectural Parameters / Notes
                    </label>
                    <textarea
                      id="notes-input"
                      rows={4}
                      placeholder="Specify your desired location, layout preferences, and timing parameters..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-white/40 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-100 text-black py-4 px-6 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99]"
                  >
                    <span>Transmit Briefing Request</span>
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
