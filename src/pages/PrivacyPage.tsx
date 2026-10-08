import React from 'react';
import { Lock, ShieldCheck, EyeOff, ServerOff } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const PrivacyPage: React.FC = () => {
  useDocumentTitle('Privacy Policy & Safety Boundaries');

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={Lock}
        badge="Zero-Tracking Commitment"
        title="Privacy Policy & Safety Boundaries"
        subtitle="Our strict safety architecture guarantees that your identity, location, and queries remain confidential and unrecorded."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        {/* Core Commitments */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <span>Our Privacy Architecture</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <EyeOff className="w-4 h-4 text-primary-700" />
                <span>No Personal Data Collection</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We do not ask for names, phone numbers, email addresses, IP logging, GPS locations, or incident details.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ServerOff className="w-4 h-4 text-primary-700" />
                <span>No Account or Login Required</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All guides, legal summaries, and helpline lists are public and open without registration or sign-in barriers.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-2">
            <h3 className="font-bold text-slate-900 text-base">Client-Side Local Storage</h3>
            <p>
              This portal uses browser <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">localStorage</code> solely to remember your chosen interface language (English, Hindi, Marathi) and font size preferences. This data remains on your physical device and is never transmitted to any third party.
            </p>
          </div>
        </section>

        {/* Safety Tip for Visitors */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 space-y-3 text-amber-950">
          <h3 className="text-base font-bold text-amber-900">Browser History & Safety Tip</h3>
          <p className="text-xs sm:text-sm leading-relaxed">
            If you share your computer or mobile device with others, you can use the <strong>Quick Exit</strong> button at the top of every page to quickly jump to Google Search. You may also want to browse in an "Incognito" or "Private Browsing" window to ensure your browsing history is not saved locally.
          </p>
        </section>
      </div>
    </div>
  );
};
