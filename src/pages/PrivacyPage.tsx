import React from 'react';
import { Lock, ShieldCheck, EyeOff, ServerOff, AlertTriangle } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const PrivacyPage: React.FC = () => {
  useDocumentTitle('Privacy Policy & Safety Boundaries');

  return (
    <div className="space-y-12 pb-16">
      <PageHero
        icon={Lock}
        badge="Zero-Tracking Commitment"
        title="Privacy Policy & Safety Architecture"
        subtitle="Our portal is architected so your identity, location, queries, and presence remain completely confidential and unrecorded."
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
                <span>Zero Personal Data Collection</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We do not ask for names, phone numbers, email addresses, IP logging, GPS coordinates, or incident descriptions.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ServerOff className="w-4 h-4 text-primary-700" />
                <span>No Public Login or Registration</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All guides, legal summaries, and helpline lists are public and open without accounts or credentials.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-2">
            <h3 className="font-bold text-slate-900 text-base">Client-Side Local Storage</h3>
            <p>
              This portal uses browser <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">localStorage</code> solely to remember your chosen interface language (English, Hindi, Marathi) and font size scaling preferences. This data remains on your physical device and is never transmitted to any third party.
            </p>
          </div>
        </section>

        {/* Device & Browser Safety Notice */}
        <section className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 space-y-3 text-amber-950 shadow-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
            <h3 className="text-base font-bold text-amber-900">Browser History & Device Safety Notice</h3>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed font-semibold">
            This portal does not guarantee that browser history, device records, network logs, or cached content will be hidden or erased. Use a safer device or browser if you need additional privacy.
          </p>
          <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
            If you share your computer or mobile device with others, consider browsing in an "Incognito" or "Private Window" and closing the window when done, or using a safer device if you need additional privacy.
          </p>
        </section>
      </div>
    </div>
  );
};
