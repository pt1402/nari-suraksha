export interface HelpResource {
  id: string;
  name: string;
  category: 'National Helpline' | 'Police & Emergency' | 'Cyber Crime' | 'Legal Aid' | 'Counseling & Support' | 'State Specific';
  coverage: string;
  contactNumber: string;
  alternativeContact?: string;
  timings: string;
  website?: string;
  description: string;
  verificationStatus: 'Verified Official' | 'Verify from official source before launch';
  isEmergencyOnly?: boolean;
}

export interface EmergencyContact {
  label: string;
  number: string;
  description: string;
  available: string;
}
