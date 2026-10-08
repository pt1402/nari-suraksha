import { FAQItem } from '@/types/content';

export const faqsData: FAQItem[] = [
  {
    id: 'faq-zero-fir',
    category: 'rights',
    question: 'Can a police station turn a person away because the incident occurred in another area?',
    answer:
      'Under general statutory procedural awareness, a Zero FIR may be registered at any police station regardless of territorial jurisdiction, after which the matter is transferred to the jurisdictional police station for inquiry. This procedural mechanism prevents delays in urgent situations.',
    tags: ['FIR', 'Police', 'Procedural Rights', 'Jurisdiction'],
    relatedTopicSlugs: ['stalking', 'sexual-harassment'],
    lastReviewedDate: '2026-03-01',
    verificationStatus: 'needs-verification',
  },
  {
    id: 'faq-night-arrest',
    category: 'rights',
    question: 'What procedural safeguards exist regarding the arrest of women?',
    answer:
      'Procedural law in India provides safeguards including the presence of female police officers during search or arrest, and restrictions against arresting women after sunset and before sunrise except in extraordinary circumstances with judicial magistrate authorization.',
    tags: ['Arrest Safeguards', 'Police Procedures', 'Rights'],
    relatedTopicSlugs: ['domestic-violence', 'stalking'],
    lastReviewedDate: '2026-03-01',
    verificationStatus: 'needs-verification',
  },
  {
    id: 'faq-free-lawyer',
    category: 'rights',
    question: 'Who is eligible for free legal aid in India?',
    answer:
      'Under Section 12(c) of the Legal Services Authorities Act, 1987, all women in India, irrespective of financial status, are eligible for free legal counseling and advocate representation through District Legal Services Authorities (DLSA) and NALSA clinics.',
    tags: ['Legal Aid', 'NALSA', 'DLSA', 'Court Representation'],
    relatedTopicSlugs: ['domestic-violence', 'workplace-sexual-harassment'],
    lastReviewedDate: '2026-03-01',
    verificationStatus: 'needs-verification',
  },
  {
    id: 'faq-posh-ic',
    category: 'workplace',
    question: 'What should an employee do if their workplace lacks an Internal Committee (IC)?',
    answer:
      'Under the POSH Act, workplaces with 10 or more employees must maintain an Internal Committee. If an IC is not constituted, or if a complaint is against the employer, complaints may be submitted to the district Local Committee (LC) constituted by the District Magistrate.',
    tags: ['POSH Act', 'Internal Committee', 'Workplace Safety', 'Local Committee'],
    relatedTopicSlugs: ['workplace-sexual-harassment'],
    lastReviewedDate: '2026-03-01',
    verificationStatus: 'needs-verification',
  },
  {
    id: 'faq-cyber-photos',
    category: 'cyber',
    question: 'What safe initial steps are recommended if someone is threatening to circulate private photos?',
    answer:
      'Do not transfer funds or negotiate with extortionists. Carefully capture unedited screenshots with visible dates, URLs, and timestamps if safe to do so. Lodge a complaint immediately on the National Cyber Crime Reporting Portal (cybercrime.gov.in) or call the Cyber Helpline at 1930.',
    tags: ['Cyber Safety', 'Non-Consensual Media', 'Digital Extortion', 'Privacy'],
    relatedTopicSlugs: ['image-based-abuse', 'cyberstalking'],
    lastReviewedDate: '2026-03-01',
    verificationStatus: 'needs-verification',
  },
  {
    id: 'faq-portal-scope',
    category: 'general',
    question: 'Does this portal register complaints, dispatch police, or provide legal advice?',
    answer:
      'No. NARI-SURAKSHA is strictly an educational public awareness portal. It does not file complaints, collect incident reports, dispatch emergency responders, or provide legal diagnosis. For immediate emergencies, dial 112 directly.',
    tags: ['Scope Limitation', 'Emergency 112', 'Disclaimer', 'General'],
    relatedTopicSlugs: ['domestic-violence'],
    lastReviewedDate: '2026-03-01',
    verificationStatus: 'verified',
  },
];
