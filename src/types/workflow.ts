export interface StepItem {
  id: string;
  order: number;
  title: string;
  description: string;
  cautionNotes?: string[];
  recommendedActions: string[];
  officialHelplineOrLink?: string;
}

export interface WorkflowGuide {
  id: string;
  title: string;
  slug: string;
  scenario: string;
  category: 'harassment' | 'cyber' | 'domestic' | 'workplace' | 'emergency';
  summary: string;
  disclaimer: string;
  steps: StepItem[];
}

export type ConcernId =
  | 'unsafe-now'
  | 'stalking'
  | 'fake-profile'
  | 'online-threats'
  | 'workplace-conduct'
  | 'abuse-at-home'
  | 'financial-scam'
  | 'helping-someone'
  | 'unsure';

export type DangerCheckChoice = 'yes-danger' | 'no-danger' | 'unsure';

export interface GuidedFlowStep {
  id: string;
  order: number;
  title: string;
  description: string;
  options: string[];
  cautionNotes?: string[];
}

export interface LearnMoreLink {
  title: string;
  url: string;
  note?: string;
}

export interface SafeNextStepsFlowData {
  concernId: ConcernId;
  label: string;
  title: string;
  shortExplanation: string;
  steps: GuidedFlowStep[];
  evidenceSafetyNotes?: string[];
  learnMoreLinks: LearnMoreLink[];
  sourceVerificationNote?: string;
  disclaimer: string;
}
