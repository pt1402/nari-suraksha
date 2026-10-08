import React from 'react';
import { CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { WorkflowGuide } from '@/types/workflow';

interface WorkflowStepsProps {
  guide: WorkflowGuide;
}

export const WorkflowSteps: React.FC<WorkflowStepsProps> = ({ guide }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded">
          {guide.category} guide
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 mb-1">
          {guide.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          {guide.summary}
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r text-xs text-amber-900">
          <strong>Note: </strong> {guide.disclaimer}
        </div>
      </div>

      {/* Steps timeline */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-slate-200">
        {guide.steps.map((step) => (
          <div key={step.id} className="relative flex items-start gap-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-800 text-white text-sm font-bold shrink-0 z-10 shadow-sm">
              {step.order}
            </div>

            <div className="flex-1 bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 sm:p-5">
              <h4 className="text-base font-bold text-slate-900 mb-1">
                {step.title}
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                {step.description}
              </p>

              {step.recommendedActions && step.recommendedActions.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-slate-900 block mb-1">
                    Recommended Actions:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {step.recommendedActions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.cautionNotes && step.cautionNotes.length > 0 && (
                <div className="bg-red-50/60 border border-red-200/60 rounded p-2.5 text-xs text-red-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-red-900">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                    <span>Important Caution:</span>
                  </div>
                  {step.cautionNotes.map((c, idx) => (
                    <p key={idx}>{c}</p>
                  ))}
                </div>
              )}

              {step.officialHelplineOrLink && (
                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-teal-700">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Official link / helpline: {step.officialHelplineOrLink}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
