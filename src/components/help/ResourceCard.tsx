import React from 'react';
import { PhoneCall, ExternalLink, ShieldCheck, AlertCircle, Calendar, UserCheck } from 'lucide-react';
import { HelpResource } from '@/types/resources';
import { EMERGENCY_NUMBER } from '@/lib/constants';

interface ResourceCardProps {
  resource: HelpResource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const isEmergency = resource.isEmergency112 || resource.contactValue === '112';

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all bg-white shadow-sm ${
        isEmergency
          ? 'border-emergency-300 ring-2 ring-emergency-100 bg-emergency-50/20'
          : 'border-slate-200/80 hover:border-primary-300'
      }`}
    >
      <div className="space-y-4">
        {/* Verification Status Banner & Category */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
            {resource.category}
          </span>

          {resource.verificationStatus === 'verified' ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
              <span>Verified Official Source</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-300">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
              <span>Verify from official source before public launch</span>
            </span>
          )}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            {resource.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Metadata section */}
        <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/70 space-y-2 text-xs text-slate-600">
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 font-medium">Contact Reference:</span>
            <span className="font-bold text-slate-900">{resource.contactValue}</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Source Owner:</span>
            </span>
            <span className="text-slate-800 font-medium">{resource.sourceOwner}</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Last Verified / Review:</span>
            </span>
            <span className="text-slate-700">{resource.lastVerifiedDate}</span>
          </div>

          {resource.safeDisplayNote && (
            <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
              <strong>Note:</strong> {resource.safeDisplayNote}
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="pt-5 border-t border-slate-100 mt-4 flex flex-wrap items-center justify-between gap-3">
        {isEmergency ? (
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm shadow-md bg-emergency-700 hover:bg-emergency-800 text-white focus:outline-none focus:ring-2 focus:ring-emergency-500"
            aria-label="Direct emergency phone call to 112"
          >
            <PhoneCall className="w-4 h-4 text-amber-300" aria-hidden="true" />
            <span>Call 112 (Emergency Toll-Free)</span>
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
            <span>Contact: {resource.contactValue}</span>
          </div>
        )}

        {resource.officialUrl && resource.verificationStatus === 'verified' ? (
          <a
            href={resource.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-[11px] text-slate-500">
            Source reference: {resource.sourceId}
          </span>
        )}
      </div>
    </div>
  );
};
