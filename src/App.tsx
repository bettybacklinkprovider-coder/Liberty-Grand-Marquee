import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickBookingModal } from './components/QuickBookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Determine initial route based on URL hash or default to 'home'
  const getRouteFromHash = (): PageRoute => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['about', 'services', 'contact'].includes(hash)) {
      return hash as PageRoute;
    }
    return 'home';
  };

  const [activeRoute, setActiveRoute] = useState<PageRoute>(getRouteFromHash);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalEventType, setModalEventType] = useState<string>('Wedding');

  // Sync route changes with URL hash and page title
  const handleNavigate = (route: PageRoute) => {
    setActiveRoute(route);
    window.location.hash = route === 'home' ? '' : `#${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActiveRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Synchronize dynamic Page Titles for SEO
  useEffect(() => {
    switch (activeRoute) {
      case 'home':
        document.title = 'Liberty Grand Marquee | Wedding & Event Venue in Faisalabad';
        break;
      case 'about':
        document.title = 'About Liberty Grand Marquee | Faisalabad';
        break;
      case 'services':
        document.title = 'Events & Services | Liberty Grand Marquee';
        break;
      case 'contact':
        document.title = 'Contact Liberty Grand Marquee | Faisalabad';
        break;
      default:
        document.title = 'Liberty Grand Marquee | Wedding & Event Venue in Faisalabad';
    }
  }, [activeRoute]);

  const handleOpenBookingModal = (eventType = 'Wedding') => {
    setModalEventType(eventType);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-slate-800 antialiased">
      {/* Sticky Top Header */}
      <Header
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal('Wedding')}
      />

      {/* Main Page Route View */}
      <main className="flex-1">
        {activeRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}
        {activeRoute === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBookingModal={() => handleOpenBookingModal('Venue Tour')}
          />
        )}
        {activeRoute === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBookingModal={handleOpenBookingModal}
          />
        )}
        {activeRoute === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal('Wedding')}
      />

      {/* Global Quick Booking Modal */}
      <QuickBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialEventType={modalEventType}
      />
    </div>
  );
}
