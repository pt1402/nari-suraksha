import React, { useState } from 'react';
import { Scale, BookCheck, ShieldAlert } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { SearchBar } from '@/components/search/SearchBar';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { lawsData } from '@/content/en/laws';

export const LawsPage: React.FC = () => {
  useDocumentTitle('Know the Law');
  const [search, setSearch] = useState('');

  const filteredLaws = lawsData.filter((law) => {
    return (
      law.shortTitle.toLowerCase().includes(search.toLowerCase()) ||
      law.actName.toLowerCase().includes(search.toLowerCase()) ||
      law.overview.toLowerCase().includes(search.toLowerCase()) ||
      law.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={Scale}
        badge="Statutory Legal Frameworks"
        title="Know the Law: Acts & Legal Protections"
        subtitle="Plain-language summaries of key Indian legislations enacted to safeguard women’s safety, bodily integrity, workplace dignity, and family rights."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        {/* Search Bar */}
        <div className="max-w-md">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search legislations (e.g. POSH, DV Act, IT Act)..."
          />
        </div>

        {/* Laws Accordion/Cards */}
        <div className="space-y-8">
          {filteredLaws.map((law) => (
            <article
              key={law.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                    {law.category} • Enacted {law.year}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Source: {law.officialSource}
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

              {/* Key Sections */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                  <BookCheck className="w-4 h-4 text-primary-700" />
                  <span>Key Statutory Sections & Provisions</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {law.keySections.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs sm:text-sm"
                    >
                      <strong className="text-primary-900 block font-semibold mb-1">
                        {sec.section}
                      </strong>
                      <span className="text-slate-600 leading-relaxed">
                        {sec.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {law.penaltyInfo && (
                <div className="bg-amber-50/70 border-l-4 border-amber-500 p-3.5 rounded-r-lg text-xs sm:text-sm text-amber-950">
                  <strong>Penalty / Enforcement: </strong>
                  {law.penaltyInfo}
                </div>
              )}
            </article>
          ))}

          {filteredLaws.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
              <ShieldAlert className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-700 font-semibold">No legislation matches your search query.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
