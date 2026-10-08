export type Language = 'en' | 'hi' | 'mr';

export interface TopicItem {
  id: string;
  slug: string;
  title: string;
  category: 'rights' | 'cyber' | 'workplace' | 'laws' | 'general';
  summary: string;
  description: string;
  keyPoints: string[];
  legalProvisions?: string[];
  actionSteps?: string[];
  relatedTopics?: string[];
}

export interface LawItem {
  id: string;
  actName: string;
  shortTitle: string;
  year: number;
  category: string;
  overview: string;
  keySections: {
    section: string;
    description: string;
  }[];
  penaltyInfo?: string;
  officialSource?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'rights' | 'reporting' | 'workplace' | 'cyber' | 'general';
  tags: string[];
}

export interface SourceCitation {
  id: string;
  title: string;
  organization: string;
  category: string;
  url?: string;
  verificationStatus: 'Verified Official' | 'Placeholder - Verify before launch';
  description: string;
}
