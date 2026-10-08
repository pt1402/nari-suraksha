import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, AlertTriangle, ShieldAlert, ExternalLink } from 'lucide-react';
import { EMERGENCY_NUMBER } from '@/lib/constants';
import { quickExit } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

export const EmergencyBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Emergency warning and quick assistance"
      className="bg-emergency-800 text-white border-b-2 border-emergency-900 sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          {/* Main Emergency Message */}
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <div className="p-1 bg-emergency-700 rounded-full animate-pulse" aria-hidden="true">
              <AlertTriangle className="w-4 h-4 text-amber-300" />
            </div>
            <span>{t('emergency_banner_text') || 'In immediate danger? Call emergency services now.'}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3">
            {/* Primary Action: Direct Tel Call */}
            <a
              href={`tel:${EMERGENCY_NUMBER}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-emergency-900 font-bold rounded-md hover:bg-emergency-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emergency-800"
              aria-label={`Emergency phone call to ${EMERGENCY_NUMBER}`}
            >
              <PhoneCall className="w-4 h-4 text-emergency-700 animate-bounce" aria-hidden="true" />
              <span>Call 112 Now</span>
            </a>

            {/* Secondary Action: Helpline directory */}
            <Link
              to="/get-help"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-emergency-700/80 hover:bg-emergency-700 text-white font-medium rounded-md transition-colors border border-emergency-600 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-200" aria-hidden="true" />
              <span>{t('find_helplines') || 'Helplines'}</span>
            </Link>

            {/* Quick Exit Button */}
            <button
              onClick={() => quickExit()}
              title="Quickly leave this website and open Google"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-900/60 hover:bg-slate-950 text-slate-200 hover:text-white text-xs font-semibold rounded-md transition-colors border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
              aria-label="Quick Exit to Google"
            >
              <span>{t('quick_exit') || 'Quick Exit'}</span>
              <ExternalLink className="w-3 h-3 text-slate-300" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
