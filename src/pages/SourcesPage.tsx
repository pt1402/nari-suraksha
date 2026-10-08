import React from 'react';
import { BookOpenCheck, ExternalLink, AlertCircle } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { officialSources } from '@/content/sources';

export const SourcesPage: React.FC = () => {
  useDocumentTitle('Official Citations & Sources');

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={BookOpenCheck}
        badge="Source Verification"
        title="Verified Official Sources & Legal Citations"
        subtitle="Transparent documentation of official government ministries, statutory commissions, and portals referenced across NARI-SURAKSHA."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Verification Protocol: </strong>
            To maintain complete integrity, all source entries are indexed with their governmental publisher. Sources marked with <em>"Placeholder - Verify before launch"</em> are scheduled for administrative confirmation before public release.
          </p>
        </div>

        {/* Sources List */}
        <div className="space-y-4">
          {officialSources.map((src) => (
            <div
              key={src.id}
              className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {src.category}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    {src.verificationStatus}
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900">{src.title}</h2>
                <p className="text-xs text-slate-500 font-medium">{src.organization}</p>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">{src.description}</p>
              </div>

              {src.url && (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary-50 text-primary-800 hover:bg-primary-100 rounded-lg text-xs font-bold shrink-0 transition"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
