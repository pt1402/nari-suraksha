import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  badge?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  icon: Icon,
  badge,
  children,
}) => {
  return (
    <section className="bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800 text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-inner border-b border-primary-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-700/60 text-teal-200 border border-teal-400/30">
                {badge}
              </span>
            )}
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="p-2.5 rounded-xl bg-primary-800/80 border border-primary-600/40 text-teal-300 shadow-sm shrink-0">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
                </div>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                {title}
              </h1>
            </div>
            <p className="text-base sm:text-lg text-primary-100/90 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {children && (
            <div className="shrink-0 flex flex-wrap items-center gap-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
