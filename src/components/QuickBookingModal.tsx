import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { BUSINESS_INFO } from '../data/venueData';
import { X, Calendar, User, Phone, Mail, Users, MessageSquare, CheckCircle2 } from 'lucide-react';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  initialEventType = 'Wedding',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    eventType: initialEventType,
    preferredDate: '',
    numberOfGuests: '300-500 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Phone number is required';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred event date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      eventType: 'Wedding',
      preferredDate: '',
      numberOfGuests: '300-500 Guests',
      message: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-amber-900/40 rounded-2xl overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-amber-900/30 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              Liberty Grand Marquee
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              Event Inquiry & Booking
            </h2>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Inquiry Sent Successfully!
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                Thank you <strong className="text-amber-300">{formData.fullName}</strong>. Our management team at Liberty Grand Marquee will contact you shortly on <strong className="text-amber-300">{formData.phoneNumber}</strong> to confirm hall availability and pricing details.
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 text-left space-y-1.5 max-w-md mx-auto">
                <p><strong>Venue:</strong> Liberty Grand Marquee, Faisalabad</p>
                <p><strong>Event:</strong> {formData.eventType} ({formData.numberOfGuests})</p>
                <p><strong>Requested Date:</strong> {formData.preferredDate}</p>
                <p><strong>Direct Line:</strong> <a href={BUSINESS_INFO.phoneTel} className="text-amber-400 underline">{BUSINESS_INFO.phone}</a></p>
              </div>
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Chaudhry Ahmed"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-slate-950 border ${
                        errors.fullName ? 'border-red-500' : 'border-slate-800 focus:border-amber-500'
                      } rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. +92 300 1234567"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className={`w-full bg-slate-950 border ${
                        errors.phoneNumber ? 'border-red-500' : 'border-slate-800 focus:border-amber-500'
                      } rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-xs text-red-400 mt-1">{errors.phoneNumber}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Event Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg px-3 py-2 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Wedding / Barat">Wedding / Barat</option>
                    <option value="Walima Reception">Walima Reception</option>
                    <option value="Engagement Ceremony">Engagement Ceremony</option>
                    <option value="Mehndi / Sangeet">Mehndi / Sangeet</option>
                    <option value="Corporate Event / Gala">Corporate Event / Gala</option>
                    <option value="Family Birthday / Anniversary">Family Birthday / Anniversary</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Date <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full bg-slate-950 border ${
                        errors.preferredDate ? 'border-red-500' : 'border-slate-800 focus:border-amber-500'
                      } rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.preferredDate && <p className="text-xs text-red-400 mt-1">{errors.preferredDate}</p>}
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Estimated Number of Guests
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <select
                    value={formData.numberOfGuests}
                    onChange={(e) => setFormData({ ...formData, numberOfGuests: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="100 - 300 Guests">100 - 300 Guests</option>
                    <option value="300 - 500 Guests">300 - 500 Guests</option>
                    <option value="500 - 800 Guests">500 - 800 Guests</option>
                    <option value="800 - 1200 Guests">800 - 1,200 Guests</option>
                    <option value="1200+ Guests (Grand Capacity)">1,200+ Guests (Grand Capacity)</option>
                  </select>
                </div>
              </div>

              {/* Special Notes / Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Additional Decor or Food Requirements (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <textarea
                    rows={3}
                    placeholder="Tell us about stage preferences, catering choices, or special arrangements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-sm shadow-lg hover:from-amber-400 hover:to-amber-600 transition-all duration-200"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
