import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageRoute, ContactFormData } from '../types';
import { BUSINESS_INFO } from '../data/venueData';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  User,
  Users,
  MessageSquare,
  CheckCircle2,
  Send,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    eventType: 'Wedding / Barat',
    preferredDate: '',
    numberOfGuests: '300-500 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Please enter a contact phone number';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      {/* 1. Contact Hero */}
      <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1545232979-fbf5842d19b6?auto=format&fit=crop&w=1920&q=80"
            alt="Liberty Grand Marquee Entrance"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <Breadcrumb currentPage="Contact" onNavigate={onNavigate} />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Contact Liberty Grand Marquee
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-amber-200/90 font-serif italic text-xl sm:text-2xl max-w-2xl"
          >
            "Let's Make Your Celebration Special"
          </motion.p>
        </div>
      </section>

      {/* 2. Main Contact Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
                GET IN TOUCH
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-3">
                Venue Booking & Inquiries
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Have questions about availability, hall capacity, stage decor, or catering arrangements? Reach out to our management team directly.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:border-amber-400 transition-colors flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Phone & WhatsApp</h3>
                  <p className="text-xs text-slate-500 mb-1">Click below to dial directly on mobile:</p>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-amber-700 hover:text-amber-800 font-bold text-lg hover:underline transition-colors block"
                    id="contact-page-phone-link"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:border-amber-400 transition-colors flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Venue Address</h3>
                  <p className="text-sm text-slate-700 leading-snug mt-1 font-medium">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-700 font-semibold hover:underline mt-2"
                  >
                    <span>View Location on Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Timing Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Office Hours & Visits</h3>
                  <p className="text-xs text-slate-600 leading-snug mt-1">
                    {BUSINESS_INFO.timing}
                  </p>
                  <p className="text-xs text-amber-700 font-medium mt-1">
                    Walk-in venue tours available 7 days a week.
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantee Callout */}
            <div className="p-5 rounded-xl bg-slate-900 text-amber-100 border border-amber-900/40 text-xs flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
              <p>
                <strong>Fast Response Guarantee:</strong> All inquiry submissions are reviewed within 2 hours during office hours.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl"
          >
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Send an Inquiry
              </h3>
              <p className="text-slate-600 text-sm">
                Fill out the form below and our team will get back to you with detailed date options and package quotes.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 border border-amber-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-slate-900">
                  Inquiry Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you <strong className="text-slate-900">{formData.fullName}</strong>. We have received your inquiry for <strong className="text-slate-900">{formData.eventType}</strong> on <strong className="text-slate-900">{formData.preferredDate}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                  <p><strong>Contact Phone:</strong> {formData.phoneNumber}</p>
                  <p><strong>Email:</strong> {formData.email || 'N/A'}</p>
                  <p><strong>Estimated Guests:</strong> {formData.numberOfGuests}</p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      email: '',
                      eventType: 'Wedding / Barat',
                      preferredDate: '',
                      numberOfGuests: '300-500 Guests',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-amber-600 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. Chaudhry Ahmed"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-[#FAF9F6] border ${
                          errors.fullName ? 'border-red-500' : 'border-slate-300 focus:border-amber-600'
                        } rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        placeholder="e.g. +92 307 1505555"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className={`w-full bg-[#FAF9F6] border ${
                          errors.phoneNumber ? 'border-red-500' : 'border-slate-300 focus:border-amber-600'
                        } rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        placeholder="e.g. ahmed@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 focus:border-amber-600 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 focus:border-amber-600 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors"
                    >
                      <option value="Wedding / Barat">Wedding / Barat</option>
                      <option value="Walima Reception">Walima Reception</option>
                      <option value="Engagement Ceremony">Engagement Ceremony</option>
                      <option value="Mehndi / Sangeet">Mehndi / Sangeet</option>
                      <option value="Corporate Event / Gala">Corporate Event / Gala</option>
                      <option value="Family Birthday / Anniversary">Family Birthday / Anniversary</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date <span className="text-amber-600">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full bg-[#FAF9F6] border ${
                          errors.preferredDate ? 'border-red-500' : 'border-slate-300 focus:border-amber-600'
                        } rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.preferredDate && <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>}
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <select
                        value={formData.numberOfGuests}
                        onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 focus:border-amber-600 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors"
                      >
                        <option value="100 - 300 Guests">100 - 300 Guests</option>
                        <option value="300 - 500 Guests">300 - 500 Guests</option>
                        <option value="500 - 800 Guests">500 - 800 Guests</option>
                        <option value="800 - 1200 Guests">800 - 1,200 Guests</option>
                        <option value="1200+ Guests (Grand Capacity)">1,200+ Guests (Grand Capacity)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Specific Requirements
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <textarea
                      rows={4}
                      placeholder="Please share any stage design preferences, menu expectations, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-slate-300 focus:border-amber-600 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-base shadow-lg hover:from-amber-400 hover:to-amber-600 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3. Responsive Map / Location Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              LOCATION & DIRECTIONS
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Find Us in Faisalabad
            </h2>
            <p className="text-sm text-slate-600">
              196 Ghona Road, Millat Town, Faisalabad, Pakistan
            </p>
          </div>

          {/* Map Display Box */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-slate-900 h-[380px] sm:h-[450px]">
            {/* Interactive Embedded Google Map for Millat Town Faisalabad */}
            <iframe
              title="Liberty Grand Marquee Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.123456789!2d73.0850000!3d31.4500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242123456789%3A0x123456789abcdef!2sMillat%20Town%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-[110%]"
            />

            {/* Overlay Info Box */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-6 sm:right-auto max-w-sm bg-slate-950/95 backdrop-blur-md p-5 rounded-2xl border border-amber-500/40 text-white shadow-2xl space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center font-serif text-sm">
                  LGM
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-amber-300">Liberty Grand Marquee</h4>
                  <p className="text-[11px] text-slate-300">196 Ghona Road, Millat Town</p>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1">
                <p>📍 <strong>City:</strong> Faisalabad, Pakistan</p>
                <p>📞 <strong>Phone:</strong> <a href={BUSINESS_INFO.phoneTel} className="text-amber-300 underline">{BUSINESS_INFO.phone}</a></p>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:from-amber-400 hover:to-amber-600 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open Directions in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
