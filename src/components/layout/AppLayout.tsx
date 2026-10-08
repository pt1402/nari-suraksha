import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SkipToContent } from '../accessibility/SkipToContent';
import { EmergencyBanner } from '../emergency/EmergencyBanner';
import { Header } from '../navigation/Header';
import { Footer } from '../navigation/Footer';

export const AppLayout: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-teal-100 selection:text-teal-900">
      {/* WCAG Skip to Main Content Link */}
      <SkipToContent />

      {/* Persistent Top Emergency Banner */}
      <EmergencyBanner />

      {/* Global Application Header */}
      <Header />

      {/* Main Page Body */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>

      {/* Global Application Footer */}
      <Footer />
    </div>
  );
};
