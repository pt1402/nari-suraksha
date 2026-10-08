import React from 'react';
import { PhoneCall, ExternalLink, ShieldCheck, AlertCircle, Calendar, UserCheck, CheckCircle2, Info } from 'lucide-react';
import { HelpResource } from '@/types/resources';
import { EMERGENCY_NUMBER } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

interface ResourceCardProps {
  resource: HelpResource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { t } = useLanguage();
  const isEmergency = resource.isEmergency112 || resource.contactValue === '112';
  const isVerified = resource.verificationStatus === 'verified';
  const isNationalProgramme = resource.verificationScope === 'national-programme';

  const categoryMap: Record<string, string> = {
    'Police & Emergency': 'resource.category_police_emergency',
    'National Helpline': 'resource.category_national_helpline',
    'Cyber Crime': 'resource.category_cyber_crime',
    'Legal Aid': 'resource.category_legal_aid',
    'Counseling & Support': 'resource.category_counseling_support',
  };
  const categoryLabel = categoryMap[resource.category]
    ? t(categoryMap[resource.category], { defaultValue: resource.category })
    : resource.category;

  const scopeKeyMap: Record<string, string> = {
    'national-programme': 'resource.scope_national_programme',
    'national-contact': 'resource.scope_national_contact',
    'local-contact': 'resource.scope_local_contact',
    'description-only': 'resource.scope_description_only',
    'pending': 'resource.scope_pending',
  };
  const scopeLabel = scopeKeyMap[resource.verificationScope]
    ? t(scopeKeyMap[resource.verificationScope], { defaultValue: resource.verificationScope })
    : resource.verificationScope;

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
            {categoryLabel}
          </span>

          {isVerified ? (
            isNationalProgramme ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                <span>{t('resource.national_programme_verified', { defaultValue: 'National programme information verified' })}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
                <span>{t('common.verified_official_source', { defaultValue: 'Verified official source' })}</span>
              </span>
            )
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-300">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
              <span>{t('common.verify_before_launch', { defaultValue: 'Verify from official source before public launch' })}</span>
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

        {/* Scope Specific Warning / Guidance Notice */}
        {isNationalProgramme && (
          <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-snug">
              {t('resource.local_details_unverified_warning', {
                defaultValue:
                  'National programme information verified; local centre details require separate verification.',
              })}
            </p>
          </div>
        )}

        {!isVerified && (
          <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-snug">
              {t('resource.verify_contact_before_launch', {
                defaultValue: 'Verify this contact information from an official source before launch.',
              })}
            </p>
          </div>
        )}

        {/* Metadata & Audit Section */}
        <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/70 space-y-2 text-xs text-slate-600">
          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 font-medium">
              {t('resource.contact_reference', { defaultValue: 'Contact Reference:' })}
            </span>
            <span className="font-bold text-slate-900 text-right">{resource.contactValue}</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>{t('resource.source_owner', { defaultValue: 'Source Owner:' })}</span>
            </span>
            <span className="text-slate-800 font-medium text-right">{resource.publisher || resource.sourceOwner}</span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-slate-500 font-medium">
              {t('resource.scope_label', { defaultValue: 'Verification Scope:' })}
            </span>
            <span className="font-semibold text-slate-800 px-2 py-0.5 rounded bg-slate-200/70 text-[11px]">
              {scopeLabel}
            </span>
          </div>

          {resource.verifiedClaim && (
            <div className="pt-2 border-t border-slate-200/60 text-xs">
              <span className="font-bold text-slate-700 block mb-0.5">
                {t('resource.verified_claim_label', { defaultValue: 'Verified Claim:' })}
              </span>
              <p className="text-slate-800 leading-snug">{resource.verifiedClaim}</p>
            </div>
          )}

          <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200/60 text-[11px]">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{t('resource.last_verified', { defaultValue: 'Last Verified / Review:' })}</span>
            </span>
            <span className="text-slate-700 font-medium">{resource.lastVerifiedDate}</span>
          </div>

          {resource.limitations && (
            <div className="pt-1.5 border-t border-slate-200/60 text-[11px] text-slate-600">
              <strong className="text-slate-700">{t('resource.limitations_label', { defaultValue: 'Limitations:' })}</strong>{' '}
              <span>{resource.limitations}</span>
            </div>
          )}

          {resource.safeDisplayNote && (
            <div className="pt-1.5 border-t border-slate-200/60 text-[11px] text-slate-500 italic">
              <strong>{t('common.important_note', { defaultValue: 'Note' })}:</strong> {resource.safeDisplayNote}
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="pt-5 border-t border-slate-100 mt-4 flex flex-wrap items-center justify-between gap-3">
        {/* Only 112 has direct calling action; all others are safe non-clickable references */}
        {isEmergency ? (
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm shadow-md bg-emergency-700 hover:bg-emergency-800 text-white focus:outline-none focus:ring-2 focus:ring-emergency-500"
            aria-label="Direct emergency phone call to 112"
          >
            <PhoneCall className="w-4 h-4 text-amber-300" aria-hidden="true" />
            <span>{t('resource.call_112_toll_free', { defaultValue: 'Call 112 (Emergency Toll-Free)' })}</span>
          </a>
        ) : isNationalProgramme ? (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
            <span>{t('resource.in_person', { defaultValue: 'In-Person' })}: {resource.contactValue}</span>
          </div>
        ) : isVerified ? (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-900 text-xs font-semibold border border-teal-200">
            <span>{t('resource.helpline_reference', { defaultValue: 'National Reference:' })} {resource.contactValue}</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200">
            <span>{t('resource.unverified_reference', { defaultValue: 'Pending Reference:' })} {resource.contactValue}</span>
          </div>
        )}

        {resource.officialSourceUrl || resource.officialUrl ? (
          <a
            href={resource.officialSourceUrl || resource.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline"
          >
            <span>{t('resource.official_portal', { defaultValue: 'Official Portal' })}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-[11px] text-slate-500">
            {t('resource.source_reference', { defaultValue: 'Source reference:' })} {resource.sourceId}
          </span>
        )}
      </div>
    </div>
  );
};
