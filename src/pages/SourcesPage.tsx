import React from 'react';
import { BookOpenCheck, ExternalLink, AlertCircle, ShieldCheck, Calendar, Clock, Info } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { officialSources } from '@/content/sources';
import { useLanguage } from '@/hooks/useLanguage';

export const SourcesPage: React.FC = () => {
  useDocumentTitle('Official Citations & Sources');
  const { t } = useLanguage();

  const scopeKeyMap: Record<string, string> = {
    'national-programme': 'resource.scope_national_programme',
    'national-contact': 'resource.scope_national_contact',
    'local-contact': 'resource.scope_local_contact',
    'description-only': 'resource.scope_description_only',
    'pending': 'resource.scope_pending',
  };

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={BookOpenCheck}
        badge={t('sources.page_badge', { defaultValue: 'Source Verification' })}
        title={t('sources.page_title', { defaultValue: 'Verified Official Sources & Legal Citations' })}
        subtitle={t('sources.page_subtitle', {
          defaultValue:
            'Transparent documentation of official government ministries, statutory commissions, and portals referenced across NARI-SURAKSHA.',
        })}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong>{t('sources.protocol_title', { defaultValue: 'Verification Protocol:' })} </strong>
            {t('sources.protocol_desc', {
              defaultValue:
                'To maintain complete integrity, all source entries are indexed with their governmental publisher. Resources are marked verified only when the official government source supports the exact claim displayed.',
            })}
          </p>
        </div>

        {/* Sources Registry List */}
        <div className="space-y-6">
          {officialSources.map((src) => {
            const isVerified = src.verificationStatus === 'verified';
            const scopeKey = src.verificationScope ? scopeKeyMap[src.verificationScope] : undefined;
            const scopeLabel = scopeKey
              ? t(scopeKey, { defaultValue: src.verificationScope || 'Pending' })
              : src.verificationScope || 'Pending';

            return (
              <div
                key={src.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 space-y-4 transition hover:border-slate-300"
              >
                {/* Header: Category & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                    {src.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {isVerified ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
                        <span>{t('common.verified_official_source', { defaultValue: 'Verified official source' })}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-300">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                        <span>{t('common.verify_before_launch', { defaultValue: 'Verify from official source before public launch' })}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{src.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{src.description}</p>
                </div>

                {/* Audit Grid */}
                <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70 grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
                  {/* Publisher */}
                  <div className="space-y-0.5">
                    <span className="text-slate-500 font-semibold block">
                      {t('sources.publisher', { defaultValue: 'Publisher:' })}
                    </span>
                    <span className="text-slate-900 font-medium">{src.publisher || src.organization}</span>
                  </div>

                  {/* Verification Scope */}
                  <div className="space-y-0.5">
                    <span className="text-slate-500 font-semibold block">
                      {t('sources.verification_scope', { defaultValue: 'Verification Scope:' })}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-200/80 text-slate-800 font-semibold text-[11px]">
                      {scopeLabel}
                    </span>
                  </div>

                  {/* Date Accessed */}
                  {src.accessedAt && (
                    <div className="space-y-0.5">
                      <span className="text-slate-500 font-semibold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{t('sources.date_accessed', { defaultValue: 'Date Accessed:' })}</span>
                      </span>
                      <span className="text-slate-700 font-medium">{src.accessedAt}</span>
                    </div>
                  )}

                  {/* Last Verified Date */}
                  <div className="space-y-0.5">
                    <span className="text-slate-500 font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t('sources.last_verified', { defaultValue: 'Last Verified Date:' })}</span>
                    </span>
                    <span className="text-slate-700 font-medium">{src.lastVerifiedDate}</span>
                  </div>

                  {/* Claim Verified */}
                  {src.verifiedClaim && (
                    <div className="md:col-span-2 pt-2 border-t border-slate-200/60 space-y-0.5">
                      <span className="text-slate-700 font-bold block">
                        {t('sources.claim_verified', { defaultValue: 'Claim Verified:' })}
                      </span>
                      <p className="text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200 leading-snug">
                        {src.verifiedClaim}
                      </p>
                    </div>
                  )}

                  {/* Limitations */}
                  {src.limitations && (
                    <div className="md:col-span-2 pt-1 border-t border-slate-200/60 space-y-0.5">
                      <span className="text-slate-700 font-bold flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-slate-500" />
                        <span>{t('sources.limitations', { defaultValue: 'Limitations:' })}</span>
                      </span>
                      <p className="text-slate-600 italic leading-snug">{src.limitations}</p>
                    </div>
                  )}
                </div>

                {/* Official Source Link */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">ID: {src.id}</span>
                  {(src.officialSourceUrl || src.url) && (
                    <a
                      href={src.officialSourceUrl || src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-50 text-primary-900 hover:bg-primary-100 rounded-lg text-xs font-bold transition border border-primary-200"
                    >
                      <span>{t('sources.visit_official_source', { defaultValue: 'Visit Official Source' })}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
