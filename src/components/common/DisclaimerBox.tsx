import React from 'react';
import { Info, ShieldAlert } from 'lucide-react';
import { GLOBAL_DISCLAIMER_TEXT } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

interface DisclaimerBoxProps {
  customText?: string;
  variant?: 'subtle' | 'prominent' | 'compact';
  className?: string;
}

export const DisclaimerBox: React.FC<DisclaimerBoxProps> = ({
  customText,
  variant = 'prominent',
  className = '',
}) => {
  const { t } = useLanguage();
  const text = customText || t('global_disclaimer') || GLOBAL_DISCLAIMER_TEXT;

  if (variant === 'compact') {
    return (
      <div
        role="note"
        aria-label="Portal disclaimer"
        className={`flex items-start gap-2 text-xs text-slate-600 bg-amber-50/70 border border-amber-200/80 p-2.5 rounded-md ${className}`}
      >
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
        <p className="leading-relaxed">{text}</p>
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div
        role="note"
        aria-label="Portal disclaimer"
        className={`flex items-start gap-3 text-xs sm:text-sm text-slate-700 bg-slate-100 border-l-4 border-slate-400 p-3 rounded-r-md ${className}`}
      >
        <Info className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" aria-hidden="true" />
        <p className="leading-relaxed">{text}</p>
      </div>
    );
  }

  return (
    <div
      role="note"
      aria-label="Portal disclaimer notice"
      className={`bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 shadow-sm ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="p-1 bg-amber-100 rounded-md shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5 text-amber-700" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-amber-900 mb-0.5">Important Safety & Legal Notice</h2>
          <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};
