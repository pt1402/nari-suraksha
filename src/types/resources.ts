import { VerificationStatus, PublicationState } from './content';

export type ContactType = 'phone' | 'portal' | 'in-person' | 'mixed';

export type VerificationScope =
  | 'national-programme'
  | 'national-contact'
  | 'local-contact'
  | 'description-only'
  | 'pending';

export interface HelpResource {
  id: string;
  name: string;
  category: 'National Helpline' | 'Police & Emergency' | 'Cyber Crime' | 'Legal Aid' | 'Counseling & Support' | 'State Specific';
  description: string;
  contactType: ContactType;
  contactValue: string;
  officialUrl?: string;
  officialSourceUrl: string;
  sourceTitle: string;
  publisher: string;
  accessedAt: string;
  sourceOwner: string;
  sourceId: string;
  lastVerifiedDate: string;
  nextReviewDueDate: string;
  verificationStatus: VerificationStatus;
  verificationScope: VerificationScope;
  verifiedClaim?: string;
  limitations?: string;
  publicationStatus: PublicationState;
  reviewDate: string;
  safeDisplayNote: string;
  isEmergency112?: boolean;
}

export interface EmergencyContact {
  label: string;
  number: string;
  description: string;
  available: string;
  isClickableEmergency: boolean;
}
