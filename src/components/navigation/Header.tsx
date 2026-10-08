import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, Search } from 'lucide-react';
import { APP_NAME, NAV_LINKS } from '@/lib/constants';
import { LanguageSelector } from './LanguageSelector';
import { FontSizeAdjuster } from '../accessibility/FontSizeAdjuster';
import { QuickExitButton } from '../emergency/QuickExitButton';
import { GlobalSearch } from '../search/GlobalSearch';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-900 text-white border-b border-primary-800 shadow-sm">
      {/* Top Accessibility & Language Bar */}
      <div className="bg-primary-950/80 border-b border-primary-800/60 text-xs py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="text-primary-300 font-medium hidden sm:inline-block">
            Women’s Safety, Rights and Awareness Portal • India
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <FontSizeAdjuster />
            <LanguageSelector compact />
            <QuickExitButton className="hidden sm:inline-flex" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg p-1 -ml-1 shrink-0"
          >
            <div className="p-2 bg-gradient-to-br from-teal-500 to-primary-700 rounded-xl shadow-inner text-white">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white block leading-tight">
                {APP_NAME}
              </span>
              <span className="text-[10px] text-teal-300 font-medium tracking-wide block uppercase">
                Awareness & Safety
              </span>
            </div>
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
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Tablet Compact Links */}
          <div className="hidden lg:flex xl:hidden items-center gap-1 shrink-0">
            <NavLink
              to="/rights"
              className="px-2.5 py-1.5 rounded text-xs font-medium text-primary-100 hover:bg-primary-800"
            >
              Rights
            </NavLink>
            <NavLink
              to="/what-to-do"
              className="px-2.5 py-1.5 rounded text-xs font-medium text-primary-100 hover:bg-primary-800"
            >
              What To Do
            </NavLink>
            <NavLink
              to="/laws"
              className="px-2.5 py-1.5 rounded text-xs font-medium text-primary-100 hover:bg-primary-800"
            >
              Laws
            </NavLink>
            <NavLink
              to="/get-help"
              className="px-2.5 py-1.5 rounded text-xs font-medium bg-teal-700 text-white hover:bg-teal-600"
            >
              Get Help
            </NavLink>
          </div>

          {/* Mobile search & hamburger controls */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <QuickExitButton className="sm:hidden" />
            <Link
              to="/search"
              className="p-2 rounded-lg bg-primary-800 text-primary-100 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-teal-400 md:hidden"
              aria-label="Open search page"
              title="Search"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg bg-primary-800 text-primary-100 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Open main menu"
              aria-expanded={isMobileMenuOpen}
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
