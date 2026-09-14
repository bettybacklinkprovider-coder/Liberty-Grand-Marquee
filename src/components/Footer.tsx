import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/venueData';
import { Phone, MapPin, Mail, Clock, ChevronRight, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-amber-900/40 relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-slate-950 font-serif font-bold text-lg shadow-md">
                LGM
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white">
                  Liberty Grand
                </span>
                <span className="block text-xs font-sans tracking-widest text-amber-400 uppercase font-semibold">
                  Marquee • Faisalabad
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-serif italic text-amber-100/70">
              "{BUSINESS_INFO.tagline}"
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Faisalabad’s most prestigious event marquee providing world-class hall ambiance, bespoke floral décor, and warm hospitality for your weddings, receptions, and corporate galas.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              {['Facebook', 'Instagram', 'WhatsApp', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  onClick={(e) => e.preventDefault()}
                  title={social}
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:text-slate-950 hover:bg-amber-400 hover:border-amber-400 transition-all duration-200 text-xs font-semibold shadow-sm"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-5 flex items-center gap-2 border-b border-slate-800/80 pb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Events & Services' },
                { id: 'contact', label: 'Contact Us & Booking' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageRoute)}
                    className="flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-amber-500/70 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenBookingModal}
                  className="flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors pt-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Request Instant Reservation</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Event Services */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-5 flex items-center gap-2 border-b border-slate-800/80 pb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Event Offerings
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center justify-between py-1 border-b border-slate-900">
                <span>Barat & Wedding Ceremonies</span>
                <span className="text-xs text-amber-400/80">Grand Hall</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-slate-900">
                <span>Walima Receptions</span>
                <span className="text-xs text-amber-400/80">Dining Layout</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-slate-900">
                <span>Engagements & Mehndi</span>
                <span className="text-xs text-amber-400/80">Custom Themes</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-slate-900">
                <span>Corporate Summits & Galas</span>
                <span className="text-xs text-amber-400/80">AV Equipped</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Family Birthdays & Anniversaries</span>
                <span className="text-xs text-amber-400/80">Private Setup</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-5 flex items-center gap-2 border-b border-slate-800/80 pb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Contact & Venue Location
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-amber-300 hover:text-amber-200 font-bold transition-colors"
                  id="footer-phone-link"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-snug">
                  {BUSINESS_INFO.timing}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 border border-amber-500/30 text-xs text-amber-300 hover:bg-amber-500/10 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Liberty Grand Marquee. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> for Unforgettable Events in Faisalabad
          </p>
        </div>
      </div>
    </footer>
  );
};
