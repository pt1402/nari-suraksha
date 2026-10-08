import { VerificationStatus } from './content';

export type SearchResultType = 'Guide' | 'Law' | 'Help' | 'FAQ' | 'Steps' | 'Quiz';

export interface SearchIndexItem {
  id: string;
  title: string;
  type: SearchResultType;
  description: string;
  content: string;
  url: string;
  tags: string[];
  synonyms: string[];
  category?: string;
  verificationStatus?: VerificationStatus;
  verificationBadge?: string;
}

export interface SearchMatch {
  indices: readonly [number, number][];
  key?: string;
  value?: string;
}

export interface SearchResultItem extends SearchIndexItem {
  matches?: readonly SearchMatch[];
  score?: number;
}
