export type OrganizationFocusArea =
  | 'Maternal & Child Health'
  | 'Mental Health'
  | 'Economic Empowerment'
  | 'Menstrual Health'
  | "Women's Rights"
  | 'Gender Justice'
  | "Women's Empowerment";

export type OrganizationVerificationStatus =
  | 'verified'
  | 'organization-reference'
  | 'needs-review';

export interface OrganizationResource {
  id: string;
  name: string;
  focusArea: OrganizationFocusArea;
  description: string;
  location: string;
  address?: string;
  websiteUrl: string;
  verificationStatus: OrganizationVerificationStatus;
  officialWebsiteCheckedAt: string;
  sourceUrl: string;
  limitations: string;
  isPublished: boolean;
}
