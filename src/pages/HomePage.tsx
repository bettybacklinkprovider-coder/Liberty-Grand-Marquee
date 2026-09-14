import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute, GalleryItem } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, FEATURES_DATA, STATS_DATA, GALLERY_DATA } from '../data/venueData';
import { Lightbox } from '../components/Lightbox';
import {
  Phone,
  MapPin,
  Calendar,
  ChevronDown,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Wine,
  Briefcase,
  Crown,
  Maximize2,
  Flower2,
  UserCheck,
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ZoomIn
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingModal: (eventType?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Helper to map icon string to Lucide component
  const renderIcon = (iconName: string, className = 'w-6 h-6') => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'Wine': return <Wine className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Crown': return <Crown className={className} />;
      case 'Maximize2': return <Maximize2 className={className} />;
      case 'Flower2': return <Flower2 className={className} />;
      case 'UserCheck': return <UserCheck className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'Award': return <Award className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const handleLightboxNext = () => {
    if (!selectedGalleryItem) return;
    const currentIndex = GALLERY_DATA.findIndex((item) => item.id === selectedGalleryItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_DATA.length;
    setSelectedGalleryItem(GALLERY_DATA[nextIndex]);
  };

  const handleLightboxPrev = () => {
    if (!selectedGalleryItem) return;
    const currentIndex = GALLERY_DATA.findIndex((item) => item.id === selectedGalleryItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
    setSelectedGalleryItem(GALLERY_DATA[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      {/* SECTION 1 — Hero / Intro */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/1200x/ae/eb/3b/aeeb3bbfd213795f38a43d57148961fc.jpg"
            alt="Liberty Grand Marquee Hall Interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-pulse duration-1000"
            style={{ animationDuration: '10s' }}
          />
          {/* Multi-layered Dark & Gold Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-slate-950/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 tracking-wide shadow-lg backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Faisalabad's Premier Luxury Wedding Venue</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-md leading-[1.1]"
          >
            Liberty Grand Marquee
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-amber-200/90 mb-6 font-medium"
          >
            "A Grand Venue for Your Most Memorable Celebrations"
          </motion.p>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-10"
          >
            From fairytale weddings, Barat, and Walima receptions to elegant ring engagements, milestone family functions, and high-profile corporate galas, Liberty Grand Marquee offers unmatched hall grandeur, opulent stage setups, and world-class hospitality in Millat Town, Faisalabad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <button
              onClick={() => onOpenBookingModal()}
              id="hero-primary-cta"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700 text-slate-950 font-bold text-base shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border border-amber-300/40"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Event</span>
            </button>

            <button
              onClick={() => {
                const welcomeSection = document.getElementById('welcome-section');
                welcomeSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-secondary-cta"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-amber-300 font-semibold text-base border border-amber-500/30 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>Explore Our Venue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Clickable Mobile Phone Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-xs text-slate-400 flex items-center justify-center gap-2"
          >
            <span>Direct Reservations:</span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-amber-300 font-bold hover:underline flex items-center gap-1"
              id="hero-phone-clickable"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator Arrow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-amber-400/70 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* SECTION 2 — Welcome / About Preview */}
      <section id="welcome-section" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-900/20 group">
              <img
                src="https://i.pinimg.com/1200x/55/3d/dd/553ddd29ecb342fb1a2a1ceb681cc8c4.jpg"
                alt="Liberty Grand Marquee Elegant Dining Setup"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-white">
                <p className="font-serif text-lg font-bold text-amber-300">World-Class Event Architecture</p>
                <p className="text-xs text-slate-300">Spacious hall layout with non-crowded banquet seating</p>
              </div>
            </div>

            {/* Decorative Gold Accent Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-slate-900 border-2 border-amber-500/40 p-5 rounded-2xl shadow-xl items-center gap-4 text-slate-100 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-slate-950 shrink-0">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Unmatched Grandeur</p>
                <p className="text-xs text-slate-300">Designed for up to 1,500 guests with AC comfort</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-amber-600 uppercase bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              WELCOME TO LIBERTY GRAND MARQUEE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Where Every Celebration Becomes a Grand Memory
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full" />

            <p className="text-slate-600 text-base leading-relaxed">
              Liberty Grand Marquee stands as Faisalabad’s beacon of luxury and elegance. Conveniently located on Ghona Road, Millat Town, our venue was designed specifically to elevate weddings, receptions, and special gatherings into royal, unforgettable experiences.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              With sprawling carpeted halls, crystal lighting chandeliers, custom floral stage backdrops, and dedicated bridal suites, our professional management team takes care of every fine detail so you can enjoy your special day effortlessly.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-sm text-slate-800 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span>1,500 Guest Banquet Capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span>Heavy Heavy Generators Backup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span>Bespoke Floral Stage Decor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span>Ample Valet Parking Area</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                id="welcome-discover-more-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-amber-600 transition-colors shadow-md group"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — Events & Services */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              OUR BESPOKE SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Tailored Offerings for Every Special Occasion
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Choose from our signature event management and venue arrangements designed to deliver perfection.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover ${service.objectPosition || 'object-center'} group-hover:scale-110 transition-transform duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg">
                      {renderIcon(service.iconName, 'w-5 h-5')}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('services')}
                    className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('services')}
              id="view-all-services-btn"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-base shadow-xl hover:from-amber-400 hover:to-amber-600 transition-colors inline-flex items-center gap-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Why Choose Liberty Grand Marquee */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 px-4 py-1.5 rounded-full border border-amber-200">
            OUR DISTINCTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900">
            Why Choose Liberty Grand Marquee?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Designed to provide maximum comfort, lavish stage aesthetics, and flawless service execution in Faisalabad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {FEATURES_DATA.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {feature.image && (
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg">
                    {renderIcon(feature.iconName, 'w-5 h-5')}
                  </div>
                </div>
              )}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {!feature.image && (
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      {renderIcon(feature.iconName, 'w-6 h-6')}
                    </div>
                  )}
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counter / Statistics Area */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-amber-900/40 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {STATS_DATA.map((stat, i) => (
              <div key={i} className={`space-y-1 ${i > 0 ? 'pt-4 lg:pt-0' : ''}`}>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-amber-400">{stat.value}</p>
                <p className="font-semibold text-base text-white">{stat.label}</p>
                <p className="text-xs text-slate-400">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Gallery / Venue Experience */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
                VENUE ATMOSPHERE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-3">
                Experience Liberty Grand Marquee
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Browse snapshots of our grand hall, stage décor, dining seating, and illuminated entrance. Click any photo to view in full screen.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-amber-400 transition-all duration-300 shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="self-end">
                    <span className="w-10 h-10 rounded-full bg-slate-900/80 text-amber-300 border border-amber-500/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-1 group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Call To Action + Contact Preview */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden border-t border-amber-900/40">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1545232979-fbf5842d19b6?auto=format&fit=crop&w=1920&q=80"
            alt="Marquee Exterior Night"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-widest">
            RESERVE YOUR SPECIAL DATE TODAY
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Make Your Next Celebration Truly Grand
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Plan your special occasion at Liberty Grand Marquee and create memories that last a lifetime. Contact our team to check venue dates and customized pricing packages.
          </p>

          {/* Quick Business Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300 py-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <a href={BUSINESS_INFO.phoneTel} className="text-amber-300 font-bold hover:underline">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              id="cta-call-now-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700 text-slate-950 font-bold text-base shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              id="cta-get-in-touch-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 font-semibold text-base transition-colors flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedGalleryItem}
        items={GALLERY_DATA}
        onClose={() => setSelectedGalleryItem(null)}
        onSelectNext={handleLightboxNext}
        onSelectPrev={handleLightboxPrev}
        onOpenBookingModal={onOpenBookingModal}
      />
    </div>
  );
};
