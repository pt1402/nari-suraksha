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
