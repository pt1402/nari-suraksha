import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { LanguageSelector } from './LanguageSelector';
import { FontSizeAdjuster } from '../accessibility/FontSizeAdjuster';
import { GlobalSearch } from '../search/GlobalSearch';
import { MobileMenu } from './MobileMenu';
import { useLanguage } from '@/hooks/useLanguage';

const NAV_KEY_MAP: Record<string, string> = {
  '/': 'nav.home',
  '/rights': 'nav.rights',
  '/what-to-do': 'nav.what_to_do',
  '/cyber-safety': 'nav.cyber_safety',
  '/workplace': 'nav.workplace',
  '/laws': 'nav.laws',
  '/get-help': 'nav.get_help',
  '/faq': 'nav.faq',
  '/quiz': 'nav.quiz',
};

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const { t } = useLanguage();

  // Return focus to hamburger button when mobile menu closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      wasOpenRef.current = true;
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      hamburgerButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-primary-900 text-white border-b border-primary-800 shadow-sm">
      {/* Top Accessibility & Language Bar */}
      <div className="bg-primary-950/80 border-b border-primary-800/60 text-xs py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="text-primary-300 font-medium hidden sm:inline-block">
            {t('app.portal_subtitle', { defaultValue: 'Women’s Safety, Rights and Awareness Portal • India' })}
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <FontSizeAdjuster />
            <LanguageSelector compact />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-1.5 sm:py-2 gap-2 sm:gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            id="header-brand-link"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg p-0.5 shrink-0"
            aria-label="NARI-SURAKSHA — Women’s Safety, Rights & Awareness Portal"
          >
            <img
              src="/brand/nari-suraksha-header.jpg"
              alt="NARI-SURAKSHA — Women’s Safety, Rights & Awareness Portal"
              width={500}
              height={95}
              className="block object-contain max-w-full w-[130px] min-[360px]:w-[150px] min-[400px]:w-[180px] sm:w-[240px] md:w-[280px] lg:w-[360px] xl:w-[480px] max-w-[500px] h-auto"
            />
          </Link>

          {/* Desktop Global Search Field */}
          <div className="hidden md:block flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-2">
            <GlobalSearch />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 shrink-0" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-colors ${isActive
                    ? 'bg-primary-800 text-teal-300 shadow-sm border-b-2 border-teal-400'
                    : 'text-primary-100 hover:text-white hover:bg-primary-800/60'
                  }`
                }
              >
                {t(NAV_KEY_MAP[link.path] || link.label, { defaultValue: link.label })}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Tablet Compact Links */}
          <div className="hidden lg:flex xl:hidden items-center gap-1 shrink-0">
            <NavLink
              to="/rights"
              className="px-2.5 py-1.5 rounded text-xs font-medium text-primary-100 hover:bg-primary-800"
            >
              {t('nav.rights', { defaultValue: 'Rights' })}
            </NavLink>
            <NavLink
              to="/what-to-do"
              className="px-2.5 py-1.5 rounded text-xs font-medium text-primary-100 hover:bg-primary-800"
            >
              {t('nav.what_to_do', { defaultValue: 'What To Do' })}
            </NavLink>
            <NavLink
              to="/laws"
              className="px-2.5 py-1.5 rounded text-xs font-medium text-primary-100 hover:bg-primary-800"
            >
              {t('nav.laws', { defaultValue: 'Laws' })}
            </NavLink>
            <NavLink
              to="/get-help"
              className="px-2.5 py-1.5 rounded text-xs font-medium bg-teal-700 text-white hover:bg-teal-600"
            >
              {t('nav.get_help', { defaultValue: 'Get Help' })}
            </NavLink>
          </div>

          {/* Mobile search & hamburger controls */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <Link
              to="/search"
              className="p-2 rounded-lg bg-primary-800 text-primary-100 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-teal-400 md:hidden"
              aria-label="Open search page"
              title="Search"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </Link>
            <button
              ref={hamburgerButtonRef}
              type="button"
              id="hamburger-menu-button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="p-2 rounded-lg bg-primary-800 text-primary-100 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label={t('nav.open_menu', { defaultValue: 'Open navigation menu' })}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
