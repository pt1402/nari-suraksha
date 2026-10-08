import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  badge?: string;
  badgeColor?: 'teal' | 'indigo' | 'amber' | 'emergency';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  to,
  badge,
  badgeColor = 'teal',
}) => {
  const badgeClasses = {
    teal: 'bg-teal-50 text-teal-700 border-teal-200',
    indigo: 'bg-primary-50 text-primary-700 border-primary-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    emergency: 'bg-emergency-50 text-emergency-800 border-emergency-200',
  }[badgeColor];

  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-between p-6 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-600"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="p-3 rounded-lg bg-primary-50 group-hover:bg-primary-100 text-primary-700 transition-colors">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          {badge && (
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badgeClasses}`}>
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-primary-700 group-hover:text-primary-800">
        <span>Explore details</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </div>
    </Link>
  );
};
