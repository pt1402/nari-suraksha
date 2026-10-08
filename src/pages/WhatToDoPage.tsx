import React from 'react';
import { CheckCircle, ShieldAlert, PhoneCall } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { WorkflowSteps } from '@/components/guides/WorkflowSteps';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { workflowsData } from '@/content/en/workflows';
import { EMERGENCY_NUMBER } from '@/lib/constants';

export const WhatToDoPage: React.FC = () => {
  useDocumentTitle('What Should I Do?');

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={CheckCircle}
        badge="Guided Action Protocols"
        title="What Should I Do? Step-by-Step Safe Actions"
        subtitle="Calm, structured, and legally aligned procedural guidance for common challenging scenarios including workplace harassment and online threats."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <DisclaimerBox variant="prominent" />

        {/* Immediate Physical Danger Caution */}
        <div className="bg-emergency-50 border-l-4 border-emergency-600 p-5 rounded-r-xl text-emergency-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-emergency-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-emergency-900">Immediate Danger or Emergency?</h3>
              <p className="text-xs text-emergency-800 leading-relaxed">
                Do not attempt complex administrative steps if your safety is compromised. Prioritize your physical safety and contact emergency dispatch immediately.
              </p>
            </div>
          </div>
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="px-4 py-2 bg-emergency-700 hover:bg-emergency-800 text-white text-xs font-bold rounded-lg shrink-0 shadow-sm inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call 112</span>
          </a>
        </div>

        {/* Guided Workflows List */}
        <div className="space-y-10">
          {workflowsData.map((guide) => (
            <WorkflowSteps key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </div>
  );
};
