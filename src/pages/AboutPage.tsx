import React from 'react';
import { Shield, Target, Heart, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const AboutPage: React.FC = () => {
  useDocumentTitle('About Portal');

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={Shield}
        badge="Mission & Vision"
        title="About NARI-SURAKSHA"
        subtitle="An India-focused public awareness initiative dedicated to empowering women with accessible knowledge of legal rights, workplace safety, cyber security, and emergency procedures."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        {/* Mission Statement */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary-700" />
            <span>Our Core Purpose</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            In many instances, women experiencing distress or harassment face barriers not due to a lack of protective laws, but due to lack of accessible, plain-language knowledge about their rights, procedure in police stations, and verified support helplines.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            <strong>NARI-SURAKSHA</strong> bridges this information gap. It transforms legal statutes (such as the POSH Act, Domestic Violence Act, CrPC/BNSS safeguards, and the IT Act) into clear, readable, and structured awareness guides.
          </p>
        </section>

        {/* Guiding Principles */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-600" />
            <span>Guiding Principles</span>
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block text-sm">Dignity & Non-Blaming Language:</strong>
                <p className="text-xs sm:text-sm text-slate-600">
                  Every guide is crafted with respect, avoiding fear-based design, shame, or victim-blaming stereotypes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block text-sm">Zero Personal Data Collection:</strong>
                <p className="text-xs sm:text-sm text-slate-600">
                  We do not collect names, phone numbers, locations, incident reports, or passwords. Your browsing on this portal is completely anonymous.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block text-sm">Accessible & Multilingual:</strong>
                <p className="text-xs sm:text-sm text-slate-600">
                  Designed for ease of reading, supporting high-contrast interfaces, keyboard accessibility (WCAG 2.2 AA standards), and English, Hindi, and Marathi languages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
