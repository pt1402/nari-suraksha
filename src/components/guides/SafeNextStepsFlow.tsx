import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  PhoneCall,
  ShieldAlert,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  Home,
  CreditCard,
  HeartHandshake,
  HelpCircle,
  Eye,
  UserX,
  MessageSquareWarning,
  Info,
} from 'lucide-react';
import {
  ConcernId,
  DangerCheckChoice,
  SafeNextStepsFlowData,
} from '@/types/workflow';
import { EMERGENCY_NUMBER } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

const CONCERN_ICONS: Record<ConcernId, React.FC<{ className?: string }>> = {
  'unsafe-now': AlertTriangle,
  stalking: Eye,
  'fake-profile': UserX,
  'online-threats': MessageSquareWarning,
  'workplace-conduct': Building2,
  'abuse-at-home': Home,
  'financial-scam': CreditCard,
  'helping-someone': HeartHandshake,
  unsure: HelpCircle,
};

export const SafeNextStepsFlow: React.FC = () => {
  const { concernsList, safeNextStepsFlows, t } = useLanguage();

  // State is held strictly in component memory and never persisted
  const [selectedConcernId, setSelectedConcernId] = useState<ConcernId | null>(null);
  const [dangerChoice, setDangerChoice] = useState<DangerCheckChoice | null>(null);

  // Accessible heading ref for focus transitions
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);

  // Focus heading on step transitions
  useEffect(() => {
    if (selectedConcernId) {
      stepHeadingRef.current?.focus();
    }
  }, [selectedConcernId, dangerChoice]);

  // Restart / Reset all flow state
  const handleRestart = () => {
    setSelectedConcernId(null);
    setDangerChoice(null);
  };

  const handleBackToDangerCheck = () => {
    setDangerChoice(null);
  };

  const handleSelectConcern = (concernId: ConcernId) => {
    setSelectedConcernId(concernId);
    if (concernId === 'unsafe-now') {
      // Immediate emergency option bypasses danger check
      setDangerChoice('yes-danger');
    } else {
      setDangerChoice(null);
    }
  };

  // Determine current active flow data
  const currentFlow: SafeNextStepsFlowData | null = selectedConcernId
    ? safeNextStepsFlows[selectedConcernId]
    : null;

  /* =========================================================================
     VIEW 1: Initial Concern Selection Grid
     ========================================================================= */
  if (!selectedConcernId || !currentFlow) {
    return (
      <section
        aria-labelledby="flow-select-title"
        className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-8 shadow-sm space-y-6"
      >
        <div className="border-b border-slate-100 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-teal-600" aria-hidden="true" />
            <span>{t('workflow.interactive_guide', { defaultValue: 'Interactive Guide' })}</span>
          </div>
          <h2
            id="flow-select-title"
            tabIndex={-1}
            ref={stepHeadingRef}
            className="text-xl sm:text-2xl font-bold text-slate-900 focus:outline-none"
          >
            {t('workflow.main_concern_question', { defaultValue: 'What is your main concern today?' })}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t('workflow.main_concern_desc', {
              defaultValue:
                'Select an option below to view safe options and resources. Answers are held only in temporary memory and are never saved or sent to any server.',
            })}
          </p>
        </div>

        {/* 9 Concern Choice Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {concernsList.map((concern) => {
            const IconComponent = CONCERN_ICONS[concern.id] || HelpCircle;
            const isEmergencyOption = concern.isEmergencyDirect;

            return (
              <button
                key={concern.id}
                type="button"
                onClick={() => handleSelectConcern(concern.id)}
                className={`flex flex-col text-left p-4 rounded-xl border transition-all text-xs sm:text-sm group focus:outline-none focus:ring-2 ${
                  isEmergencyOption
                    ? 'border-emergency-300 bg-emergency-50/80 hover:bg-emergency-100 text-emergency-950 focus:ring-emergency-500 shadow-2xs'
                    : 'border-slate-200 hover:border-teal-400 bg-slate-50/60 hover:bg-teal-50/40 text-slate-900 focus:ring-teal-500 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2 w-full">
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isEmergencyOption
                        ? 'bg-emergency-700 text-white'
                        : 'bg-teal-100 text-teal-800 group-hover:bg-teal-700 group-hover:text-white transition-colors'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                      isEmergencyOption ? 'text-emergency-700' : 'text-slate-400 group-hover:text-teal-700'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <span
                  className={`font-bold leading-snug mb-1 ${
                    isEmergencyOption ? 'text-emergency-900 font-extrabold' : 'text-slate-900'
                  }`}
                >
                  {concern.label}
                </span>
                <span className="text-[11px] text-slate-600 leading-normal mt-auto">
                  {concern.description}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact disclaimer footnote */}
        <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
          <span>
            {t('workflow.this_guide_does_not_assess', {
              defaultValue:
                'This tool provides neutral, educational awareness options and does not diagnose, assess legal merit, or replace emergency dispatch.',
            })}
          </span>
        </div>
      </section>
    );
  }

  /* =========================================================================
     VIEW 2: Immediate Danger Check (For all concerns except direct unsafe-now)
     ========================================================================= */
  if (selectedConcernId !== 'unsafe-now' && dangerChoice === null) {
    return (
      <section
        aria-labelledby="danger-check-heading"
        className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 shadow-sm space-y-6"
      >
        {/* Navigation & Progress Header */}
        <div className="flex items-center justify-between gap-3 text-xs text-slate-500 border-b border-slate-100 pb-3">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-900 font-medium focus:outline-none focus:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t('common.change_topic', { defaultValue: 'Change Topic' })}</span>
          </button>
          <span className="font-semibold px-2.5 py-0.5 bg-slate-100 rounded-full text-[11px] text-slate-700">
            {t('workflow.step1_title', { defaultValue: 'Step 1 of 2: Immediate Safety Check' })}
          </span>
        </div>

        {/* Immediate Danger Question */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emergency-800 bg-emergency-50 px-2.5 py-1 rounded-md mb-3 border border-emergency-200">
            <AlertTriangle className="w-3.5 h-3.5 text-emergency-700 shrink-0" aria-hidden="true" />
            <span>{t('common.safety_first', { defaultValue: 'Safety First' })}</span>
          </div>
          <h2
            id="danger-check-heading"
            tabIndex={-1}
            ref={stepHeadingRef}
            className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug focus:outline-none"
          >
            {t('workflow.immediate_danger_question', {
              defaultValue: 'Is there immediate danger, violence, or a threat of harm right now?',
            })}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t('workflow.danger_check_subtitle', {
              label: currentFlow.label,
              defaultValue: `Regarding: "${currentFlow.label}". Your physical safety is the top priority before considering any paperwork, reporting, or procedural steps.`,
            })}
          </p>
        </div>

        {/* 3 Choices */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl">
          {/* Choice 1: Yes / I may not be safe */}
          <button
            type="button"
            onClick={() => setDangerChoice('yes-danger')}
            className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-emergency-300 bg-emergency-50 hover:bg-emergency-100 text-emergency-900 font-bold transition focus:outline-none focus:ring-2 focus:ring-emergency-500"
          >
            <AlertTriangle className="w-5 h-5 text-emergency-700 mb-1.5" aria-hidden="true" />
            <span className="text-sm">
              {t('workflow.yes_not_safe', { defaultValue: 'Yes / I may not be safe' })}
            </span>
            <span className="text-[10px] text-emergency-700 font-normal mt-0.5">
              {t('workflow.urgent_help_needed', { defaultValue: 'Urgent help needed now' })}
            </span>
          </button>

          {/* Choice 2: No / Not immediate */}
          <button
            type="button"
            onClick={() => setDangerChoice('no-danger')}
            className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-teal-300 bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold transition focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <CheckCircle2 className="w-5 h-5 text-teal-700 mb-1.5" aria-hidden="true" />
            <span className="text-sm">
              {t('workflow.no_not_immediate', { defaultValue: 'No / Not immediate' })}
            </span>
            <span className="text-[10px] text-teal-700 font-normal mt-0.5">
              {t('workflow.continue_to_safe_options', { defaultValue: 'Continue to safe options' })}
            </span>
          </button>

          {/* Choice 3: I am not sure */}
          <button
            type="button"
            onClick={() => setDangerChoice('unsure')}
            className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold transition focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <HelpCircle className="w-5 h-5 text-slate-600 mb-1.5" aria-hidden="true" />
            <span className="text-sm">
              {t('workflow.not_sure', { defaultValue: 'I am not sure' })}
            </span>
            <span className="text-[10px] text-slate-600 font-normal mt-0.5">
              {t('workflow.show_safety_guidance', { defaultValue: 'Show safety guidance first' })}
            </span>
          </button>
        </div>

        {/* Footer info note */}
        <div className="pt-2 text-[11px] text-slate-500">
          This question helps prioritize emergency assistance if active danger is present. No responses are stored.
        </div>
      </section>
    );
  }

  /* =========================================================================
     VIEW 3A: Immediate Emergency Information Panel (for Yes / Unsure / Unsafe-Now)
     ========================================================================= */
  if (dangerChoice === 'yes-danger' || dangerChoice === 'unsure') {
    return (
      <section
        aria-labelledby="emergency-panel-heading"
        className="bg-white border-2 border-emergency-600 rounded-2xl p-5 sm:p-8 shadow-md space-y-6"
      >
        {/* Navigation & Progress Header */}
        <div className="flex items-center justify-between gap-3 text-xs border-b border-emergency-100 pb-3">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 text-emergency-900 hover:underline font-semibold focus:outline-none focus:ring-1 focus:ring-emergency-500 rounded px-1"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t('workflow.return_to_topic_choices', { defaultValue: 'Return to topic choices' })}</span>
          </button>
          {selectedConcernId !== 'unsafe-now' && (
            <button
              type="button"
              onClick={handleBackToDangerCheck}
              className="text-xs text-slate-600 hover:text-slate-900 underline"
            >
              {t('common.back', { defaultValue: 'Back to question' })}
            </button>
          )}
        </div>

        {/* Emergency Notice */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emergency-700 text-white rounded-xl shrink-0 mt-0.5">
              <PhoneCall className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="emergency-panel-heading"
                tabIndex={-1}
                ref={stepHeadingRef}
                className="text-xl sm:text-2xl font-extrabold text-emergency-950 focus:outline-none"
              >
                {t('emergency.immediate_danger_title', { defaultValue: 'Immediate Danger & Emergency Services' })}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-emergency-900 leading-relaxed font-medium">
                {t('emergency.immediate_danger_desc', {
                  defaultValue:
                    'If you are in immediate danger, contact emergency services or a trusted nearby person if it is safe to do so. Do not delay seeking emergency help because of this website.',
                })}
              </p>
            </div>
          </div>

          {dangerChoice === 'unsure' && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
              <strong>{t('workflow.caution_label', { defaultValue: 'Calm note:' })}</strong>{' '}
              {t('workflow.calm_unsure_note', {
                defaultValue:
                  'It is completely okay to feel unsure about the level of risk. Choose the option below that feels safest to you right now without any pressure.',
              })}
            </div>
          )}
        </div>

        {/* Immediate Emergency Action CTAs */}
        <div className="bg-emergency-50/90 border border-emergency-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-sm text-emergency-950">
              {t('workflow.national_erss_title', { defaultValue: 'National Emergency Response Service: 112' })}
            </h3>
            <p className="text-xs text-emergency-800 leading-relaxed mt-0.5">
              {t('workflow.national_erss_desc', {
                defaultValue: '24/7 toll-free all-India emergency helpline connecting to police, medical assistance, and fire rescue.',
              })}
            </p>
          </div>
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emergency-700 hover:bg-emergency-800 text-white text-sm font-bold rounded-xl shadow-md transition shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emergency-800"
            aria-label={`Emergency phone call to ${EMERGENCY_NUMBER}`}
          >
            <PhoneCall className="w-4 h-4 animate-bounce" aria-hidden="true" />
            <span>{t('workflow.call_112_now', { defaultValue: 'Call 112 Now' })}</span>
          </a>
        </div>

        {/* Additional verified resources list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            to="/get-help"
            className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900 transition focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <div>
              <span className="font-bold text-xs sm:text-sm block">
                {t('workflow.directory_title', { defaultValue: 'Directory of Verified Helplines' })}
              </span>
              <span className="text-[11px] text-slate-500">
                {t('workflow.directory_desc', { defaultValue: 'Women Helpline 181, Cyber Crime 1930, One Stop Centres' })}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
          </Link>

          {selectedConcernId !== 'unsafe-now' && (
            <button
              type="button"
              onClick={() => setDangerChoice('no-danger')}
              className="flex items-center justify-between p-3.5 rounded-xl border border-teal-200 bg-teal-50/60 hover:bg-teal-100 text-teal-900 transition text-left focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <div>
                <span className="font-bold text-xs sm:text-sm block">
                  {t('workflow.continue_if_safe', { defaultValue: 'Continue to topic options if safe' })}
                </span>
                <span className="text-[11px] text-teal-700">
                  {t('workflow.read_non_emergency_steps', {
                    label: currentFlow.label,
                    defaultValue: `Read non-emergency procedural steps for "${currentFlow.label}"`,
                  })}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Essential Disclaimers */}
        <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-1">
          <p>
            <strong>{t('common.important_note', { defaultValue: 'Note' })}:</strong>{' '}
            {t('workflow.no_dispatch_note', {
              defaultValue:
                'NARI-SURAKSHA does not dispatch first responders or track your location. Emergency calls connect through your telecom provider directly to 112.',
            })}
          </p>
          <p>
            {t('workflow.quick_exit_note', {
              defaultValue: 'Use the Quick Exit button at the top of the screen at any time to instantly redirect to Google.',
            })}
          </p>
        </div>
      </section>
    );
  }

  /* =========================================================================
     VIEW 3B: Topic-Specific Guided Informational Flow (When dangerChoice === 'no-danger')
     ========================================================================= */
  return (
    <section
      aria-labelledby="topic-flow-heading"
      className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 shadow-sm space-y-8"
    >
      {/* Navigation & Progress Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleBackToDangerCheck}
            className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 font-medium focus:outline-none focus:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t('common.back', { defaultValue: 'Safety check' })}</span>
          </button>
          <span className="text-slate-300">•</span>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 focus:outline-none focus:underline"
          >
            <RotateCcw className="w-3 h-3" aria-hidden="true" />
            <span>{t('workflow.return_to_topic_choices', { defaultValue: 'Return to topic choices' })}</span>
          </button>
        </div>

        <span className="font-semibold px-2.5 py-0.5 bg-teal-50 border border-teal-200 text-teal-800 rounded-full text-[11px]">
          {t('workflow.step2_title', { defaultValue: 'Step 2 of 2: Recommended Safe Options' })}
        </span>
      </div>

      {/* Topic Title & Neutral Explanation */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" aria-hidden="true" />
          <span>{currentFlow.label}</span>
        </div>
        <h2
          id="topic-flow-heading"
          tabIndex={-1}
          ref={stepHeadingRef}
          className="text-xl sm:text-2xl font-extrabold text-slate-900 focus:outline-none"
        >
          {currentFlow.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          {currentFlow.shortExplanation}
        </p>
      </div>

      {/* Numbered Steps List */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
          {t('workflow.options_title', { defaultValue: 'Possible Steps You May Consider (Options, not commands)' })}
        </h3>

        <div className="space-y-4">
          {currentFlow.steps.map((step) => (
            <div
              key={step.id}
              className="p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition space-y-2.5"
            >
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-700 text-white text-xs font-bold shrink-0 mt-0.5">
                  {step.order}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Recommended Options */}
              {step.options && step.options.length > 0 && (
                <ul className="pl-9 space-y-1.5 text-xs text-slate-700">
                  {step.options.map((opt, optIdx) => (
                    <li key={optIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Caution Notes */}
              {step.cautionNotes && step.cautionNotes.length > 0 && (
                <div className="ml-9 p-2.5 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900 space-y-1">
                  {step.cautionNotes.map((c, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong>{t('workflow.caution_label', { defaultValue: 'Caution:' })}</strong> {c}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Evidence & Records Safety Section (When Appropriate) */}
      {currentFlow.evidenceSafetyNotes && currentFlow.evidenceSafetyNotes.length > 0 && (
        <div className="p-4 sm:p-5 bg-sky-50/60 border border-sky-200 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-sky-700" aria-hidden="true" />
            <span>{t('workflow.evidence_safe_title', { defaultValue: 'Evidence and Records, If Safe' })}</span>
          </div>
          <p className="text-xs text-slate-600">
            {t('workflow.evidence_safe_desc', {
              defaultValue:
                'Never attempt to gather evidence if doing so puts you or others at physical risk. If safe, you may consider:',
            })}
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {currentFlow.evidenceSafetyNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Where to Learn More & Internal Links */}
      <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
          {t('workflow.learn_more_title', { defaultValue: 'Where to Learn More (Verified Internal Guides)' })}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {currentFlow.learnMoreLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.url}
              className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-teal-400 rounded-lg text-xs font-semibold text-slate-900 hover:text-teal-900 shadow-2xs transition group focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <div>
                <span>{link.title}</span>
                {link.note && (
                  <span className="block text-[10px] text-slate-500 font-normal mt-0.5">
                    {link.note}
                  </span>
                )}
              </div>
              <ChevronRight
                className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 shrink-0"
                aria-hidden="true"
              />
            </Link>
          ))}
          <Link
            to="/get-help"
            className="flex items-center justify-between p-3 bg-teal-50 border border-teal-200 hover:border-teal-400 rounded-lg text-xs font-semibold text-teal-950 shadow-2xs transition group focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <div>
              <span>Official Helplines Directory</span>
              <span className="block text-[10px] text-teal-700 font-normal mt-0.5">
                National 24/7 helplines & One Stop Centres
              </span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-teal-600 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* External Resource / Source Verification Note */}
      {currentFlow.sourceVerificationNote && (
        <div className="p-3 bg-slate-100/70 border border-slate-200 rounded-lg text-xs text-slate-600">
          <strong>{t('workflow.source_verification_prefix', { defaultValue: 'Source / Verification Status:' })} </strong>
          {currentFlow.sourceVerificationNote}
        </div>
      )}

      {/* Bottom Flow Controls & Disclaimer */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t('workflow.choose_different_topic', { defaultValue: 'Choose Different Topic' })}</span>
          </button>
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="inline-flex items-center gap-1 text-emergency-800 hover:text-emergency-900 text-xs font-bold underline"
          >
            <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Emergency: 112</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-500 max-w-sm">
          <strong>Disclaimer:</strong> {currentFlow.disclaimer}
        </p>
      </div>
    </section>
  );
};
