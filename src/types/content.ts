export type Language = 'en' | 'hi' | 'mr';

export type VerificationStatus = 'verified' | 'needs-verification' | 'placeholder';
export type PublicationState = 'published' | 'draft';

export interface TopicItem {
  id: string;
  slug: string;
  title: string;
  category: 'rights' | 'cyber' | 'workplace' | 'domestic' | 'general';
  summary: string;
  plainIntroduction: string;
  whatItMayInclude: string[];
  examples: string[];
  saferNextSteps: string[];
  evidenceAndRecordsSafety: string[];
  whereToLookForHelp: string[];
  relatedLawIds: string[];
  relatedResourceIds: string[];
  relatedGuideSlugs?: string[];
  sourceIds: string[];
  tags: string[];
  disclaimerText: string;
  lastReviewedDate: string;
  nextReviewDueDate: string;
  verificationStatus: VerificationStatus;
  publicationState: PublicationState;
}

export interface LawItem {
  id: string;
  actName: string;
  shortTitle: string;
  year: number | string;
  category: string;
  overview: string;
  plainLanguageSummary: string;
  keyProvisions: {
    section: string;
    explanation: string;
  }[];
  penaltyOrEnforcementNote?: string;
  officialSourceId: string;
  lastReviewedDate: string;
  verificationStatus: VerificationStatus;
  publicationState: PublicationState;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'rights' | 'reporting' | 'workplace' | 'cyber' | 'general' | 'domestic';
  tags: string[];
  relatedTopicSlugs?: string[];
  lastReviewedDate: string;
  verificationStatus: VerificationStatus;
}

export interface SourceCitation {
  id: string;
  title: string;
  organization: string;
  publisher?: string;
  category: string;
  url?: string;
  officialSourceUrl?: string;
  lastVerifiedDate: string;
  verificationStatus: VerificationStatus;
  verificationScope?: 'national-programme' | 'national-contact' | 'local-contact' | 'description-only' | 'pending';
  verifiedClaim?: string;
  accessedAt?: string;
  limitations?: string;
  nextReviewDueDate?: string;
  description: string;
}
