import React from 'react';
import { AlertTriangle, ShieldAlert, Scale, PhoneCall } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { EMERGENCY_NUMBER } from '@/lib/constants';

export const DisclaimerPage: React.FC = () => {
  useDocumentTitle('Legal & General Disclaimer');

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={AlertTriangle}
        badge="Legal Transparency"
        title="Portal Disclaimer & Limitation of Scope"
        subtitle="Important information on the scope, purpose, and limitations of the awareness content provided by NARI-SURAKSHA."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox variant="prominent" />

        {/* In-depth Disclaimers */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-8">
          {/* Section 1: General Awareness Only */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary-800" />
              <span>1. General Awareness Only — Not Legal Advice</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              The content published on <strong>NARI-SURAKSHA</strong> is intended strictly for general informational, educational, and awareness purposes. It does not constitute legal counsel, formal statutory interpretation, medical advice, police reporting, or professional psychological counseling.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Legal remedies and procedures may vary depending on state rules, local court jurisdictions, and specific facts of a situation. Users must consult qualified legal practitioners, District Legal Services Authorities (DLSA), or law enforcement officials for professional representation.
            </p>
          </div>

          {/* Section 2: Not an Emergency Dispatch */}
          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-emergency-700" />
              <span>2. Not an Emergency Dispatch or Incident Reporting Tool</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              This website is not monitored by police officers, emergency services, or medical responders. <strong>Submitting text through any feedback form does not dispatch emergency help or register an official FIR.</strong>
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              In any life-threatening situation or emergency, dial <a href={`tel:${EMERGENCY_NUMBER}`} className="font-bold text-emergency-700 underline">{EMERGENCY_NUMBER}</a> immediately.
            </p>
          </div>

          {/* Section 3: Third Party & Government Helplines */}
          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <span>3. Helplines & External Government Services</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              References to external government schemes, One Stop Centres, helplines, and portals (e.g. cybercrime.gov.in, 112.gov.in) are provided for convenience. While we strive to present accurate information, service availability, response protocols, and helpline operations remain under the administration of the respective governmental authorities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
