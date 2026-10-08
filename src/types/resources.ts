import { VerificationStatus, PublicationState } from './content';

export type ContactType = 'phone' | 'portal' | 'in-person' | 'mixed';

export interface HelpResource {
  id: string;
  name: string;
  category: 'National Helpline' | 'Police & Emergency' | 'Cyber Crime' | 'Legal Aid' | 'Counseling & Support' | 'State Specific';
  description: string;
  contactType: ContactType;
  contactValue: string;
  officialUrl?: string;
  sourceOwner: string;
  sourceId: string;
  lastVerifiedDate: string;
  verificationStatus: VerificationStatus;
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
