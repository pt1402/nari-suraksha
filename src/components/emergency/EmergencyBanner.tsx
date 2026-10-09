import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, AlertTriangle, ShieldAlert, X } from 'lucide-react';
import { EMERGENCY_NUMBER } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

const BANNER_DISMISS_KEY = 'nari_suraksha_emergency_banner_dismissed';

export const EmergencyBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(BANNER_DISMISS_KEY) === 'true';
    } catch {
      return false;
    }
  });

  if (isDismissed) {
    return null;
  }

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(BANNER_DISMISS_KEY, 'true');
    } catch {
      // Gracefully handle environments where sessionStorage is restricted
    }
    setIsDismissed(true);

    // Logical focus shift so focus does not disappear into document.body
    requestAnimationFrame(() => {
      const nextTarget =
        document.getElementById('header-brand-link') ||
        document.querySelector<HTMLElement>('header a[href="/"]') ||
        document.querySelector<HTMLElement>('.skip-link') ||
        document.querySelector<HTMLElement>('header a');
      nextTarget?.focus();
    });
  };

  return (
    <aside
      aria-label="Emergency warning and quick assistance"
      className="bg-emergency-800 text-white border-b-2 border-emergency-900 sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-sm">
          {/* Main Emergency Message */}
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <div className="p-1 bg-emergency-700 rounded-full animate-pulse" aria-hidden="true">
              <AlertTriangle className="w-4 h-4 text-amber-300" />
            </div>
            <span>
              {t('emergency.banner_text', {
                defaultValue: 'In immediate danger? Call emergency services now.',
              })}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 ml-auto sm:ml-0">
            {/* Primary Action: Direct Tel Call */}
            <a
              href={`tel:${EMERGENCY_NUMBER}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-emergency-900 font-bold rounded-md hover:bg-emergency-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emergency-800 text-xs sm:text-sm"
              aria-label={`Emergency phone call to ${EMERGENCY_NUMBER}`}
            >
              <PhoneCall className="w-4 h-4 text-emergency-700 animate-bounce" aria-hidden="true" />
              <span>{t('emergency.call_112_now', { defaultValue: 'Call 112 Now' })}</span>
            </a>

            {/* Secondary Action: Helpline directory */}
            <Link
              to="/get-help"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-emergency-700/80 hover:bg-emergency-700 text-white font-medium rounded-md transition-colors border border-emergency-600 focus:outline-none focus:ring-2 focus:ring-white text-xs sm:text-sm"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-200" aria-hidden="true" />
              <span>{t('emergency.find_helplines', { defaultValue: 'Helplines' })}</span>
            </Link>

            {/* Accessible Dismiss X Button */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label={t('emergency.dismiss_banner', { defaultValue: 'Dismiss emergency banner' })}
              title={t('emergency.dismiss_banner_title', {
                defaultValue: 'Temporarily hide the emergency banner for this session',
              })}
              className="inline-flex items-center justify-center min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] p-1.5 sm:p-2 rounded-md bg-emergency-900/60 hover:bg-emergency-900 text-emergency-100 hover:text-white border border-emergency-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emergency-800"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
