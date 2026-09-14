import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, FEATURES_DATA, TESTIMONIALS_DATA } from '../data/venueData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Crown,
  Sparkles,
  ShieldCheck,
  Heart,
  Users,
  Award,
  CheckCircle2,
  Phone,
  ArrowRight,
  Star,
  MapPin,
  Clock
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const highlights = [
    {
      title: 'Elegant Environment',
      desc: 'High ceiling architecture, imported crystal chandeliers, plush carpets, and climate-controlled luxury halls.',
      icon: Crown,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Spacious Venue',
      desc: 'Expansive open floor plan comfortably accommodating up to 1,500 guests with wide aisles and VIP dining areas.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Beautiful Event Setup',
      desc: 'Bespoke floral mandaps, handcrafted stage backdrops, thematic table settings, and ambient accent lighting.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Professional Service',
      desc: 'Attentive, uniform-trained hospitality staff ensuring seamless food timing, valet management, and guest care.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Memorable Celebrations',
      desc: 'Over 500 successful Barat, Walima, and corporate events hosted with 100% satisfaction in Faisalabad.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      
      {/* 1. About Hero */}
      <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80"
            alt="Liberty Grand Marquee Hall Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Breadcrumb currentPage="About Us" onNavigate={onNavigate} />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4"
          >
            About Liberty Grand Marquee
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-amber-200/90 font-serif italic text-xl sm:text-2xl max-w-2xl"
          >
            "Building timeless memories through opulent hospitality and architectural distinction."
          </motion.p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              OUR HERITAGE & VISION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Our Story of Passion & Hospitality
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full" />

            <p className="text-slate-700 text-base leading-relaxed">
              Liberty Grand Marquee was founded with a singular mission: to provide the citizens of Faisalabad with a world-class venue that combines royal grandeur, modern comfort, and impeccable event management. Located at 196 Ghona Road, Millat Town, we have established ourselves as one of the most trusted names for weddings and high-profile celebrations.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              We understand that a wedding or family gathering is a once-in-a-lifetime occasion. That is why every facet of our marquee—from acoustic sound dampening to temperature climate control, plush carpeting, and heavy-duty backup generators—is crafted to ensure your guests experience total luxury.
            </p>

            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-900 space-y-2">
              <p className="font-serif text-lg font-bold text-amber-900 flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-600" /> Dedicated To Excellence
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                Whether you are hosting a traditional Pakistani Barat with 1,200 guests or an executive corporate convention, our staff brings perfection to every detail.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-900/20">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                alt="Liberty Grand Marquee Main Stage Setup"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Our Venue Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              THE VENUE EXPERIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Designed for Comfort & Grandeur
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Discover how our hall structure and amenities set Liberty Grand Marquee apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Opulent Main Hall</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                High ceiling structure lined with crystal chandeliers and ambient mood lights, eliminating pillar obstructions so every guest gets a clear view of the stage.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Bridal & Groom Lounges</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Private, air-conditioned preparation rooms with full-length vanity mirrors, private restrooms, and seating for touch-ups before the grand entrance.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Uninterrupted Power</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dual industrial power generators guarantee uninterrupted lighting, air conditioning, and sound performance throughout your function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Commitment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-8 sm:p-14 border border-amber-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-amber-800 uppercase bg-amber-200 px-3 py-1 rounded-full">
                OUR UNWAVERING PLEDGE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                Our Commitment to Excellence
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                At Liberty Grand Marquee, customer satisfaction is our absolute priority. We hold ourselves to strict standards regarding cleanliness, service punctuality, security, and food setup elegance.
              </p>
              <ul className="space-y-2 text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-700" /> Standardized Hygiene & Food Safety Inspections
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-700" /> On-site Event Managers for Immediate Assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-700" /> Dedicated Security Guard Staff & CCTV Monitoring
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="font-serif text-lg font-semibold text-slate-900 italic">
                "{TESTIMONIALS_DATA[0].quote}"
              </p>
              <div>
                <p className="font-bold text-sm text-slate-900">{TESTIMONIALS_DATA[0].name}</p>
                <p className="text-xs text-amber-700 font-medium">{TESTIMONIALS_DATA[0].event}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Venue Highlights Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 px-4 py-1.5 rounded-full border border-amber-200">
              KEY ADVANTAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
              Venue Highlights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore the core pillars that make Liberty Grand Marquee the ideal venue choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/80 text-amber-400 border border-amber-500/40 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 text-center pt-8 border-t border-slate-200">
            <button
              onClick={onOpenBookingModal}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-base shadow-xl hover:from-amber-400 hover:to-amber-600 transition-colors inline-flex items-center gap-2"
            >
              <span>Schedule a Venue Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
