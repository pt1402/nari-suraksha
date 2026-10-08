import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'teal' | 'amber' | 'emergency' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className,
}) => {
  const variantStyles = {
    primary: 'bg-primary-50 text-primary-800 border-primary-200',
    secondary: 'bg-slate-100 text-slate-800 border-slate-200',
    teal: 'bg-teal-50 text-teal-800 border-teal-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    emergency: 'bg-emergency-50 text-emergency-800 border-emergency-200',
    outline: 'bg-transparent text-slate-700 border-slate-300',
  }[variant];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        variantStyles,
        className
      )}
    >
      {children}
    </span>
  );
};
