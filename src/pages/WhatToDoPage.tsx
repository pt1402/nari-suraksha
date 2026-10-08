import React from 'react';
import { Compass, ShieldAlert, PhoneCall } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { SafeNextStepsFlow } from '@/components/guides/SafeNextStepsFlow';
import { WorkflowSteps } from '@/components/guides/WorkflowSteps';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { workflowsData } from '@/content/en/workflows';
import { EMERGENCY_NUMBER } from '@/lib/constants';

export const WhatToDoPage: React.FC = () => {
  useDocumentTitle('Explore Safe Next Steps');

  return (
    <div className="space-y-10 pb-16">
      <PageHero
        icon={Compass}
        badge="Guided Decision Support"
        title="Explore Safe Next Steps"
        subtitle="Choose a general topic to see information and options. Do not enter personal details. This guide cannot assess your situation."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Prominent General Awareness Disclaimer */}
        <DisclaimerBox variant="prominent" />

        {/* Immediate Danger Quick Notice Banner */}
        <div className="bg-emergency-50 border-l-4 border-emergency-600 p-4 sm:p-5 rounded-r-xl text-emergency-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-emergency-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="font-bold text-sm text-emergency-900">In Active Physical Danger?</h2>
              <p className="text-xs text-emergency-800 leading-relaxed mt-0.5">
                Do not navigate lengthy articles or administrative forms if you are currently unsafe. Prioritize moving to safety and call emergency dispatch immediately.
              </p>
            </div>
          </div>
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="px-4 py-2 bg-emergency-700 hover:bg-emergency-800 text-white text-xs font-bold rounded-lg shrink-0 shadow-sm inline-flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emergency-400"
            aria-label={`Emergency phone call to ${EMERGENCY_NUMBER}`}
          >
            <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Call 112</span>
          </a>
        </div>

        {/* Main Interactive "Explore Safe Next Steps" Flow */}
        <SafeNextStepsFlow />

        {/* Additional Structured Reference Guides */}
        <div className="pt-6 border-t border-slate-200/80 space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Structured Procedural Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Read comprehensive stage-by-stage reference documentation for formal reporting and documentation.
            </p>
          </div>

          <div className="space-y-8">
            {workflowsData.map((guide) => (
              <WorkflowSteps key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
