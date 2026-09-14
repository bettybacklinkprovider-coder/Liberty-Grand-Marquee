import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/venueData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  HeartHandshake,
  Wine,
  Sparkles,
  Briefcase,
  CheckCircle2,
  Phone,
  ArrowRight,
  Calendar
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (eventType?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Wine': return <Wine className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      
      {/* 1. Services Hero */}
      <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80"
            alt="Liberty Grand Marquee Stage Setup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Breadcrumb currentPage="Events & Services" onNavigate={onNavigate} />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Events & Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-amber-200/90 font-serif italic text-xl sm:text-2xl max-w-2xl"
          >
            "A Beautiful Setting for Every Special Occasion"
          </motion.p>
        </div>
      </section>

      {/* 2. Service Cards Detailed Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 px-4 py-1.5 rounded-full border border-amber-200">
            COMPREHENSIVE HOSTING
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
            Tailored Event Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every celebration at Liberty Grand Marquee is executed with artistic floral arrangements, custom lighting, and dedicated service teams.
          </p>
        </div>

        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center hover:border-amber-400 transition-all duration-300`}
            >
              {/* Image side */}
              <div
                className={`lg:col-span-6 relative h-[320px] sm:h-[400px] lg:h-full overflow-hidden ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover ${service.objectPosition || 'object-center'} hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/40 flex items-center gap-2 font-serif font-bold text-base">
                  {renderIcon(service.iconName)}
                  <span>{service.title}</span>
                </div>
              </div>

              {/* Text Content side */}
              <div
                className={`lg:col-span-6 p-8 sm:p-12 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div>
                  <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                    SERVICE FEATURE
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-slate-900 mt-1">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Amenities Included:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-800 font-medium">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => onOpenBookingModal(service.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Inquire About {service.title}</span>
                  </button>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl border border-amber-500/40 text-amber-800 hover:bg-amber-50 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. Final CTA */}
      <section className="py-20 bg-slate-950 text-white text-center border-t border-amber-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-widest">
            PLAN WITH LIBERTY GRAND MARQUEE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Ready to Plan Your Event?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
            Let us help you bring your vision to life. Get in touch with our event reservation specialists today for custom package pricing.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              id="services-final-cta-btn"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700 text-slate-950 font-bold text-base shadow-xl hover:from-amber-300 hover:to-amber-600 transition-colors inline-flex items-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
