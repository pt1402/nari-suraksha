import React from 'react';
import { PhoneCall, ExternalLink, Clock, MapPin, AlertCircle } from 'lucide-react';
import { HelpResource } from '@/types/resources';

interface ResourceCardProps {
  resource: HelpResource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const isEmergency = resource.isEmergencyOnly || resource.contactNumber === '112';

  return (
    <div
      className={`rounded-xl border p-6 flex flex-col justify-between transition-all bg-white shadow-sm ${
        isEmergency
          ? 'border-emergency-300 ring-1 ring-emergency-200'
          : 'border-slate-200/80 hover:border-primary-300'
      }`}
    >
      <div>
        {/* Verification & Category Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
            {resource.category}
          </span>

          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200"
            title="Pre-launch review notice"
          >
            <AlertCircle className="w-3 h-3 text-amber-600" aria-hidden="true" />
            <span>Verify from official source before launch</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {resource.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {resource.description}
        </p>

        {/* Meta details */}
        <div className="space-y-1.5 text-xs text-slate-600 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span>Coverage: {resource.coverage}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
            <span>Timings: {resource.timings}</span>
          </div>
        </div>
      </div>

      {/* Action links */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <a
          href={`tel:${resource.contactNumber.replace(/[^0-9+]/g, '')}`}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 ${
            isEmergency
              ? 'bg-emergency-700 hover:bg-emergency-800 text-white focus:ring-emergency-500'
              : 'bg-primary-800 hover:bg-primary-900 text-white focus:ring-primary-600'
          }`}
        >
          <PhoneCall className="w-4 h-4" aria-hidden="true" />
          <span>Call: {resource.contactNumber}</span>
        </a>

        {resource.website && (
          <a
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800 hover:underline"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
};
