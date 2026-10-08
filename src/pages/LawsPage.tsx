import React, { useState } from 'react';
import { Scale, BookCheck, ShieldAlert, Calendar, AlertCircle } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { SearchBar } from '@/components/search/SearchBar';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useLanguage } from '@/hooks/useLanguage';

export const LawsPage: React.FC = () => {
  useDocumentTitle('Know the Law');
  const { lawsData, t } = useLanguage();
  const [search, setSearch] = useState('');

  const filteredLaws = lawsData.filter((law) => {
    return (
      law.shortTitle.toLowerCase().includes(search.toLowerCase()) ||
      law.actName.toLowerCase().includes(search.toLowerCase()) ||
      law.overview.toLowerCase().includes(search.toLowerCase()) ||
      law.plainLanguageSummary.toLowerCase().includes(search.toLowerCase()) ||
      law.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="space-y-12 pb-16">
      <PageHero
        icon={Scale}
        badge={t('laws.page_badge', { defaultValue: 'Statutory Legal Frameworks' })}
        title={t('laws.page_title', { defaultValue: 'Know the Law: Acts & Protections' })}
        subtitle={t('laws.page_subtitle', {
          defaultValue:
            'Plain-language educational summaries of foundational Indian legislations enacted to safeguard women’s safety, bodily integrity, workplace dignity, and family rights.',
        })}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        {/* Search Bar */}
        <div className="max-w-md">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search statutes (e.g. POSH, Domestic Violence, IT Act)..."
          />
        </div>

        {/* Laws Cards */}
        <div className="space-y-8">
          {filteredLaws.map((law) => (
            <article
              key={law.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6"
            >
              {/* Header with Title & Metadata */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                    {law.category} • Year: {law.year}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Status: {law.verificationStatus}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {law.shortTitle}
                </h2>
                <p className="text-xs text-slate-500 italic mt-0.5">{law.actName}</p>
                <p className="text-sm text-slate-700 mt-3 leading-relaxed">
                  {law.overview}
                </p>
              </div>

              {/* Plain-Language Overview Box */}
              <div className="bg-primary-50/60 p-4 sm:p-5 rounded-xl border border-primary-200/60 space-y-2">
                <h3 className="text-sm font-bold text-primary-900 flex items-center gap-1.5">
                  <BookCheck className="w-4 h-4 text-primary-700" />
                  <span>Plain-Language Summary for Citizens</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {law.plainLanguageSummary}
                </p>
              </div>

              {/* Key Statutory Provisions */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-primary-700" />
                  <span>Key Statutory Provisions & Safeguards</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {law.keyProvisions.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs sm:text-sm"
                    >
                      <strong className="text-primary-900 block font-semibold mb-1">
                        {sec.section}
                      </strong>
                      <span className="text-slate-600 leading-relaxed">
                        {sec.explanation}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {law.penaltyOrEnforcementNote && (
                <div className="bg-amber-50/70 border-l-4 border-amber-500 p-3.5 rounded-r-lg text-xs sm:text-sm text-amber-950">
                  <strong>Enforcement & Legal Penalties: </strong>
                  {law.penaltyOrEnforcementNote}
                </div>
              )}

              {/* Review & Source Metadata */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Last Reviewed: {law.lastReviewedDate}</span>
                </div>
                <span>Source ID: {law.officialSourceId} (Verify from official source before public launch)</span>
              </div>
            </article>
          ))}

          {filteredLaws.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-700 font-semibold">No legislation matches your search query.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
