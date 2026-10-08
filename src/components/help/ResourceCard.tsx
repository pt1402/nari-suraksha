import React from 'react';
import {
  PhoneCall,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Calendar,
  UserCheck,
  CheckCircle2,
  Info,
  ChevronDown,
  ShieldAlert,
} from 'lucide-react';
import { HelpResource } from '@/types/resources';
import { useLanguage } from '@/hooks/useLanguage';

interface ResourceCardProps {
  resource: HelpResource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { t } = useLanguage();

  const isEmergency = resource.isEmergency112 || resource.contactValue === '112';
  const isVerified = resource.verificationStatus === 'verified';
  const isNationalProgramme = resource.verificationScope === 'national-programme';
  const isPending =
    resource.verificationStatus === 'needs-verification' ||
    resource.verificationStatus === 'placeholder';

  // Safe data-driven phone validation rule:
  // - verificationStatus === "verified"
  // - contactType === "phone"
  // - contactValue is present
  // - value passes safe phone-number validation (e.g. 3 to 15 digits)
  const cleanPhone = (resource.contactValue || '').trim();
  const isSafePhoneNumber = /^\+?[0-9]{3,15}$/.test(cleanPhone);
  const isClickablePhone = isVerified && resource.contactType === 'phone' && isSafePhoneNumber;
  const normalizedNumber = isClickablePhone ? cleanPhone.replace(/[^0-9+]/g, '') : '';

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
    pending: 'resource.scope_pending',
  };
  const scopeLabel = scopeKeyMap[resource.verificationScope]
    ? t(scopeKeyMap[resource.verificationScope], { defaultValue: resource.verificationScope })
    : resource.verificationScope;

  // Render distinct accessible call action button based on resource purpose
  const renderPhoneAction = () => {
    if (!isClickablePhone) return null;

    if (isEmergency || normalizedNumber === '112') {
      return (
        <a
          href={`tel:${normalizedNumber}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm shadow-md bg-emergency-700 hover:bg-emergency-800 text-white focus:outline-none focus:ring-4 focus:ring-emergency-400 transition transform active:scale-95"
          aria-label="Call 112 nationwide emergency services now"
        >
          <PhoneCall className="w-4 h-4 text-amber-300 animate-pulse" aria-hidden="true" />
          <span>{t('resource.call_112', { defaultValue: 'Call 112 Now' })}</span>
        </a>
      );
    }

    if (normalizedNumber === '181') {
      return (
        <a
          href={`tel:${normalizedNumber}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm bg-teal-700 hover:bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition transform active:scale-95"
          aria-label="Call 181 Women Helpline for support and referral"
        >
          <PhoneCall className="w-4 h-4 text-teal-200" aria-hidden="true" />
          <span>{t('resource.call_181', { defaultValue: 'Call 181' })}</span>
        </a>
      );
    }

    if (normalizedNumber === '14490') {
      return (
        <a
          href={`tel:${normalizedNumber}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm bg-teal-700 hover:bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition transform active:scale-95"
          aria-label="Call 14490 NCW Women Helpline"
        >
          <PhoneCall className="w-4 h-4 text-teal-200" aria-hidden="true" />
          <span>{t('resource.call_14490', { defaultValue: 'Call 14490' })}</span>
        </a>
      );
    }

    if (normalizedNumber === '15100') {
      return (
        <a
          href={`tel:${normalizedNumber}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm bg-indigo-700 hover:bg-indigo-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition transform active:scale-95"
          aria-label="Call 15100 NALSA Legal Aid Helpline"
        >
          <PhoneCall className="w-4 h-4 text-indigo-200" aria-hidden="true" />
          <span>{t('resource.call_15100', { defaultValue: 'Call 15100' })}</span>
        </a>
      );
    }

    if (normalizedNumber === '1930') {
      return (
        <a
          href={`tel:${normalizedNumber}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm bg-amber-700 hover:bg-amber-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition transform active:scale-95"
          aria-label="Call 1930 cybercrime helpline for online financial fraud"
        >
          <ShieldAlert className="w-4 h-4 text-amber-200" aria-hidden="true" />
          <span>{t('resource.call_1930_financial_fraud', { defaultValue: 'Call 1930 — Online Financial Fraud' })}</span>
        </a>
      );
    }

    return (
      <a
        href={`tel:${normalizedNumber}`}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm bg-teal-700 hover:bg-teal-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition transform active:scale-95"
        aria-label={`Call ${normalizedNumber}`}
      >
        <PhoneCall className="w-4 h-4 text-teal-200" aria-hidden="true" />
        <span>{t('resource.call_number', { number: normalizedNumber, defaultValue: `Call ${normalizedNumber}` })}</span>
      </a>
    );
  };

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all bg-white shadow-sm ${
        isEmergency
          ? 'border-emergency-300 ring-2 ring-emergency-100 bg-emergency-50/15'
          : 'border-slate-200/90 hover:border-slate-300'
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
                <span>{t('resource.verified_national_programme', { defaultValue: 'National programme information verified' })}</span>
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
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">
            {resource.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Public Warning / Scope Notice */}
        {isNationalProgramme && (
          <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-snug">
              {t('resource.local_details_require_verification', {
                defaultValue: 'Local centre details require separate verification',
              })}
            </p>
          </div>
        )}

        {isPending && (
          <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-snug">
              {t('resource.reference_information_pending', {
                defaultValue: 'Reference information pending verification',
              })}
            </p>
          </div>
        )}

        {/* Public Safety Note */}
        {resource.safeDisplayNote && (
          <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/60 leading-relaxed">
            <strong className="text-slate-700">{t('common.important_note', { defaultValue: 'Note' })}:</strong>{' '}
            <span>{resource.safeDisplayNote}</span>
          </div>
        )}
      </div>

      {/* Primary Actions Area */}
      <div className="mt-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
          {/* Action button: Clickable call or in-person / pending badge */}
          {isClickablePhone ? (
            renderPhoneAction()
          ) : resource.contactType === 'in-person' ? (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
              <span>{t('resource.in_person_reference', { defaultValue: 'In-person reference' })}: {resource.contactValue}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">
              <span>{resource.contactValue}</span>
            </div>
          )}

          {/* Official Source outbound portal link */}
          {(resource.officialSourceUrl || resource.officialUrl) && (
            <a
              href={resource.officialSourceUrl || resource.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline"
              aria-label={`Visit official source website for ${resource.name}`}
            >
              <span>{t('resource.official_source', { defaultValue: 'Official source' })}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Accessible Collapsible Source Details Disclosure */}
        <details className="pt-2 border-t border-slate-100 text-xs text-slate-600 group">
          <summary
            className="flex items-center justify-between cursor-pointer font-semibold text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded p-1 transition-colors select-none"
            aria-label={`${t('resource.source_details', { defaultValue: 'Source details' })} for ${resource.name}`}
          >
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-400 group-open:text-teal-600 transition-colors" aria-hidden="true" />
              <span>{t('resource.source_details', { defaultValue: 'Source details' })}</span>
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-open:rotate-180 transition-transform duration-200" aria-hidden="true" />
          </summary>

          <div className="mt-3 bg-slate-50/90 rounded-xl p-3.5 border border-slate-200/70 space-y-2.5 text-xs text-slate-600">
            {/* Verified Claim */}
            {resource.verifiedClaim && (
              <div>
                <span className="font-bold text-slate-700 block mb-0.5">
                  {t('resource.verified_claim_label', { defaultValue: 'Verified Claim:' })}
                </span>
                <p className="text-slate-800 leading-snug">{resource.verifiedClaim}</p>
              </div>
            )}

            {/* Verification Scope */}
            <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200/50">
              <span className="text-slate-500 font-medium">
                {t('resource.scope_label', { defaultValue: 'Verification Scope:' })}
              </span>
              <span className="font-semibold text-slate-800 px-2 py-0.5 rounded bg-slate-200/70 text-[11px]">
                {scopeLabel}
              </span>
            </div>

            {/* Source Owner / Publisher */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-500 font-medium flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <span>{t('resource.source_owner', { defaultValue: 'Source Owner:' })}</span>
              </span>
              <span className="text-slate-800 font-medium text-right">{resource.publisher || resource.sourceOwner}</span>
            </div>

            {/* Last Verified Date */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-500 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                <span>{t('resource.last_verified', { defaultValue: 'Last Verified / Review:' })}</span>
              </span>
              <span className="text-slate-700 font-medium">{resource.lastVerifiedDate}</span>
            </div>

            {/* Date Accessed */}
            {resource.accessedAt && (
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-500 font-medium">
                  {t('sources.date_accessed', { defaultValue: 'Date Accessed:' })}
                </span>
                <span className="text-slate-700 font-medium">{resource.accessedAt}</span>
              </div>
            )}

            {/* Next Review Due Date */}
            {resource.nextReviewDueDate && (
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-500 font-medium">
                  {t('sources.next_review', { defaultValue: 'Next Review Due:' })}
                </span>
                <span className="text-slate-700 font-medium">{resource.nextReviewDueDate}</span>
              </div>
            )}

            {/* Limitations */}
            {resource.limitations && (
              <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
                <strong className="text-slate-700">{t('resource.limitations_label', { defaultValue: 'Limitations:' })}</strong>{' '}
                <span>{resource.limitations}</span>
              </div>
            )}
          </div>
        </details>
      </div>
    </div>
  );
};
