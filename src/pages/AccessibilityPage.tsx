import React from 'react';
import { Eye, Keyboard, Type, CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { FontSizeAdjuster } from '@/components/accessibility/FontSizeAdjuster';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const AccessibilityPage: React.FC = () => {
  useDocumentTitle('Accessibility Statement');

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={Eye}
        badge="Inclusive Design"
        title="Accessibility Statement (WCAG 2.2 AA)"
        subtitle="NARI-SURAKSHA is engineered to be barrier-free, perceivable, operable, and understandable for all individuals across various assistive technologies."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        {/* Accessibility Features */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            Accessibility Standards & Implementations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Keyboard className="w-5 h-5 text-primary-700" />
                <span>Keyboard Navigation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full focus-visible outlines, logical tab ordering, a "Skip to main content" link, and interactive elements accessible via Tab, Space, and Enter.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Type className="w-5 h-5 text-primary-700" />
                <span>Scalable Typography</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Use our built-in font size adjuster in the header (or test below) to scale text from 90% up to 130% without layout disruption.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-base font-bold text-slate-900">Test Text Sizing Now:</h3>
            <div className="flex items-center gap-4 bg-primary-900 p-4 rounded-xl text-white">
              <span className="text-xs">Adjust Font Scale:</span>
              <FontSizeAdjuster />
            </div>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            Conformance Commitments
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Contrast:</strong> Color ratios meet or exceed 4.5:1 for normal text and 3:1 for large headings.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Reduced Motion:</strong> Respects the <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">prefers-reduced-motion</code> operating system setting by disabling heavy animations.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Semantic Structure:</strong> Single H1 per page, structured landmarks (&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;, &lt;nav&gt;), and proper ARIA labels.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
