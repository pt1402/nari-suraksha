import React from 'react';
import { Laptop, Camera, Lock, AlertTriangle, ExternalLink, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const CyberSafetyPage: React.FC = () => {
  useDocumentTitle('Cyber Safety & Digital Hygiene');

  return (
    <div className="space-y-12 pb-16">
      <PageHero
        icon={Laptop}
        badge="Digital Security & Cyber Law"
        title="Cyber Safety & Digital Protections"
        subtitle="Learn how to handle digital harassment, identity impersonation, non-consensual image sharing, and how to safely log evidence without risking personal safety."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <DisclaimerBox />

        {/* Helpline Notification Card */}
        <div className="bg-gradient-to-r from-teal-900 to-primary-950 text-white p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-teal-800/60">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Government Portal Reference</span>
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">National Cyber Crime Reporting Portal</h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Report cyber abuse on the official government portal (cybercrime.gov.in) or call the Cyber Helpline at 1930. Dedicated provisions exist for crimes against women and children.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 bg-teal-500/20 text-teal-200 border border-teal-400/40 font-bold text-xs sm:text-sm rounded-xl">
              <span>Cyber Helpline: 1930</span>
            </div>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm rounded-xl border border-white/20 transition"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* How to preserve digital evidence safely */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-10 space-y-6">
          <SectionHeading
            badge="Evidence Safety"
            title="How to Safely Preserve Digital Evidence (Only If Safe)"
            subtitle="Before reporting or blocking online offenders, follow these safe guidelines to ensure digital logs remain intact without putting yourself in danger."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="p-2.5 bg-primary-100 text-primary-800 rounded-xl w-fit">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">1. Full Screenshot Captures</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Take uncropped screenshots showing the entire screen—including the top status bar, device clock, sender ID/phone number, and URL bar.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl w-fit">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">2. Record Profile URLs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Copy and save the direct profile link (URL) of the offending account, as usernames and display names can be altered quickly.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl w-fit">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">3. Do Not Alter or Engage</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Do not crop or edit images with stickers/filters. Avoid engaging in arguments or sending money to extortionists.
              </p>
            </div>
          </div>
        </section>

        {/* Common Cyber Threats & Legal Remedies */}
        <section className="space-y-6">
          <SectionHeading
            badge="Cyber Offenses & Awareness"
            title="Understanding Digital Abuse Categories"
            subtitle="Recognize the categories of online violence and the statutory provisions that penalize them."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900">Cyberstalking & Online Harassment</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Repeated monitoring of a woman's internet activity, persistent unwanted messaging across social channels, or tracking movements without consent.
              </p>
              <div className="text-xs font-semibold text-primary-800 bg-primary-50 p-3 rounded-xl border border-primary-100">
                Governed under: Information Technology Act, 2000 & Criminal Law Provisions
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900">Non-Consensual Image Sharing & Deepfakes</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Publishing, distributing, morphing, or creating artificial deepfakes of intimate photographs without consent is a punishable offense.
              </p>
              <div className="text-xs font-semibold text-primary-800 bg-primary-50 p-3 rounded-xl border border-primary-100">
                Governed under: Section 66E (Privacy violation) & Section 67/67A IT Act
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
