import React from 'react';
import { ExternalLink, MapPin, Building2, AlertCircle, Shield } from 'lucide-react';
import { OrganizationResource } from '@/types/organizations';
import { useLanguage } from '@/hooks/useLanguage';

interface OrganizationCardProps {
  organization: OrganizationResource;
}

export const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization }) => {
  const { t } = useLanguage();

  const focusAreaKeyMap: Record<string, string> = {
    'Maternal & Child Health': 'organizations.category_maternal_child',
    'Mental Health': 'organizations.category_mental_health',
    'Economic Empowerment': 'organizations.category_economic_empowerment',
    'Menstrual Health': 'organizations.category_menstrual_health',
    "Women's Rights": 'organizations.category_womens_rights',
    'Gender Justice': 'organizations.category_gender_justice',
    "Women's Empowerment": 'organizations.category_womens_empowerment',
  };

  const focusAreaLabel = focusAreaKeyMap[organization.focusArea]
    ? t(focusAreaKeyMap[organization.focusArea], { defaultValue: organization.focusArea })
    : organization.focusArea;

  const isVerified = organization.verificationStatus === 'verified';

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:border-teal-400 hover:shadow-md transition duration-200">
      <div className="space-y-4">
        {/* Header: Focus area badge & status badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200">
            <Building2 className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
            <span>{focusAreaLabel}</span>
          </span>

          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
              isVerified
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-amber-50 text-amber-800 border-amber-200'
            }`}
          >
            <Shield className="w-3 h-3 text-amber-600" aria-hidden="true" />
            <span>
              {isVerified
                ? t('common.verified_official_source', { defaultValue: 'Verified Source' })
                : t('organizations.status_reference', { defaultValue: 'Organization Reference' })}
            </span>
          </span>
        </div>

        {/* Title & Location */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {organization.name}
          </h2>

          <div className="flex items-start gap-1.5 text-xs text-slate-500 mt-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{organization.location}</span>
          </div>

          {organization.address && (
            <p className="text-[11px] text-slate-500 mt-1 pl-5">
              {organization.address}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {organization.description}
        </p>

        {/* Advisory / Scope Notice */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] text-slate-600 flex items-start gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-normal">
            {organization.limitations}
          </p>
        </div>
      </div>

      {/* Footer: External Website CTA */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
        <span className="text-[11px] text-slate-400">
          {t('organizations.checked_date', { defaultValue: 'Checked' })}: {organization.officialWebsiteCheckedAt}
        </span>

        <a
          href={organization.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label={`${t('organizations.visit_website', { defaultValue: 'Visit Website' })} for ${organization.name} (opens in new tab)`}
        >
          <span>{t('organizations.visit_website', { defaultValue: 'Visit Website' })}</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};
