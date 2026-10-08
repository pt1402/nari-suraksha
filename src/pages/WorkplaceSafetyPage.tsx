import React from 'react';
import { Briefcase, Users, Clock, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const WorkplaceSafetyPage: React.FC = () => {
  useDocumentTitle('Workplace Safety & POSH Act');

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={Briefcase}
        badge="POSH Act, 2013"
        title="Workplace Safety & Anti-Harassment Protections"
        subtitle="Comprehensive awareness on the Sexual Harassment of Women at Workplace Act, Internal Committees, inquiry timelines, and worker protections."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <DisclaimerBox />

        {/* Pillars of POSH Act */}
        <section className="space-y-6">
          <SectionHeading
            badge="Institutional Framework"
            title="Core Pillars of the POSH Framework"
            subtitle="The law applies to all women—permanent, contractual, interns, daily-wage, domestic workers, or visitors—across organized and unorganized sectors."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="p-2.5 bg-primary-50 text-primary-800 rounded-lg w-fit">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Internal Committee (IC)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mandatory for every establishment with 10 or more employees. Must be headed by a senior woman Presiding Officer and include an independent external member.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="p-2.5 bg-teal-50 text-teal-800 rounded-lg w-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Local Committee (LC)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Established by the District Officer in every district to receive complaints from establishments with fewer than 10 workers or complaints against employers themselves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="p-2.5 bg-amber-50 text-amber-800 rounded-lg w-fit">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Strict Timelines</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complaints should be filed within 3 months of incident. The IC inquiry must be completed within 90 days, and the employer must act on the report within 60 days.
              </p>
            </div>
          </div>
        </section>

        {/* What Constitutes Workplace Harassment */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-10 space-y-6">
          <SectionHeading
            badge="Definition of Harassment"
            title="What Constitutes Sexual Harassment at Workplace?"
            subtitle="Under Section 2(n) of the POSH Act, sexual harassment includes unwelcome sexually determined behavior, whether directly or by implication."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span>Physical contact, unwanted touching, or sexual advances.</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span>A demand or request for sexual favors (quid pro quo).</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span>Making sexually colored remarks, inappropriate jokes, or comments on appearance.</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span>Showing pornography or sending unsolicited explicit digital messages.</span>
            </div>
          </div>

          <div className="bg-primary-50 p-4 rounded-xl border border-primary-200 text-xs sm:text-sm text-primary-950 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-1">Protection Against Retaliation (Section 12):</span>
              During the pendency of inquiry, the complainant may request interim measures, including paid leave up to 3 months or a transfer of the complainant or the respondent.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
