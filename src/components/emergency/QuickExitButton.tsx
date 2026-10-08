import React from 'react';
import { ExternalLink, Shield } from 'lucide-react';
import { quickExit } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface QuickExitButtonProps {
  className?: string;
  showDisclosure?: boolean;
}

export const QuickExitButton: React.FC<QuickExitButtonProps> = ({
  className = '',
  showDisclosure = false,
}) => {
  const { t } = useLanguage();

  return (
    <div className="inline-flex flex-col items-start">
      <button
        onClick={() => quickExit()}
        type="button"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-slate-100 text-xs font-semibold shadow transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${className}`}
        title="Immediately leave this site and open Google Search. Note: May not erase browser history."
        aria-label="Quick safety exit to Google"
      >
        <Shield className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
        <span>{t('quick_exit') || 'Quick Exit'}</span>
        <ExternalLink className="w-3 h-3 text-slate-400" aria-hidden="true" />
      </button>

      {showDisclosure && (
        <span className="text-[10px] text-slate-500 mt-1 max-w-xs leading-tight">
          Quick Exit redirects immediately to Google, but may not erase browser history or device network logs.
        </span>
      )}
    </div>
  );
};
