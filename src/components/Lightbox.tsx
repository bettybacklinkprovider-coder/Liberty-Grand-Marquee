import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onOpenBookingModal: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
  onOpenBookingModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative z-10 max-w-5xl w-full bg-slate-900 border border-amber-900/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
          <img
            src={item.image}
            alt={item.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover max-h-[70vh] md:max-h-[80vh]"
          />

          {/* Navigation Arrows */}
          <button
            onClick={onSelectPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-700 text-amber-300 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors shadow-lg"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onSelectNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 border border-slate-700 text-amber-300 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors shadow-lg"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Info Sidebar */}
        <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
              {item.category}
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>
            )}
            <p className="text-xs text-slate-400 border-t border-slate-800 pt-3">
              Venue Location: <strong className="text-slate-200">Liberty Grand Marquee, Faisalabad</strong>
            </p>
          </div>

          <div className="pt-6 space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-700 text-slate-950 font-bold text-sm shadow-md hover:from-amber-400 hover:to-amber-600 transition-colors"
            >
              Book Event Like This
            </button>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full py-2.5 rounded-lg border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
