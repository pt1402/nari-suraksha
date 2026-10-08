import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { X, Shield, PhoneCall } from 'lucide-react';
import { NAV_LINKS, EMERGENCY_NUMBER } from '@/lib/constants';
import { LanguageSelector } from './LanguageSelector';
import { GlobalSearch } from '../search/GlobalSearch';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the close button when opened
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-primary-950 text-white shadow-2xl flex flex-col z-10 border-l border-primary-800"
      >
        {/* Top bar of drawer */}
        <div className="flex items-center justify-between p-4 border-b border-primary-800/80">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-400" aria-hidden="true" />
            <span className="font-bold text-xs sm:text-sm tracking-wider">NARI-SURAKSHA</span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-lg text-primary-200 hover:text-white hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Global Search inside mobile drawer */}
        <div className="p-3 border-b border-primary-800/80 bg-primary-900/70">
          <GlobalSearch isMobile onNavigate={onClose} />
        </div>

        {/* Language selector in mobile drawer */}
        <div className="p-3 sm:p-4 border-b border-primary-800/60 bg-primary-900/50 flex items-center justify-between">
          <span className="text-xs text-primary-200 font-medium">Language:</span>
          <LanguageSelector compact />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1" aria-label="Mobile main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors ${isActive
                  ? 'bg-primary-800 text-teal-300 font-semibold border-l-4 border-teal-400'
                  : 'text-primary-100 hover:bg-primary-900/80 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Emergency Call Box in Mobile Menu */}
        <div className="p-3 sm:p-4 border-t border-primary-800 bg-primary-900/90 space-y-2">
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-emergency-700 hover:bg-emergency-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Emergency phone call to 112"
          >
            <PhoneCall className="w-4 h-4" aria-hidden="true" />
            <span>Emergency: Call 112</span>
          </a>
          <span className="text-[10px] text-slate-300 block text-center">
            24/7 National Emergency Toll-Free
          </span>
        </div>
      </div>
    </div>
  );
};
