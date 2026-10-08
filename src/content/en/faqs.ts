import { FAQItem } from '@/types/content';

export const faqsData: FAQItem[] = [
  {
    id: 'faq-zero-fir',
    category: 'rights',
    question: 'Can a police station refuse to file an FIR if the incident happened in another area?',
    answer:
      'No. Under the law and Supreme Court guidelines, police must register a "Zero FIR" regardless of jurisdiction, initiate initial action, and transfer the case to the appropriate police station.',
    tags: ['FIR', 'Police', 'Rights', 'Jurisdiction'],
  },
  {
    id: 'faq-night-arrest',
    category: 'rights',
    question: 'Can a woman be arrested by police at night?',
    answer:
      'Under Section 46(4) of the CrPC / BNSS, women cannot be arrested after sunset and before sunrise, except in exceptional circumstances where prior permission of a Judicial Magistrate is obtained.',
    tags: ['Arrest', 'Night', 'Police Procedures', 'Rights'],
  },
  {
    id: 'faq-free-lawyer',
    category: 'rights',
    question: 'How can I get a free lawyer for legal assistance?',
    answer:
      'All women in India are eligible for free legal aid under Section 12 of the Legal Services Authorities Act, 1987. You can contact your District Legal Services Authority (DLSA) at the district court or call the NALSA helpline at 15100.',
    tags: ['Legal Aid', 'NALSA', 'Free Lawyer', 'Court'],
  },
  {
    id: 'faq-posh-ic',
    category: 'workplace',
    question: 'What should I do if my workplace does not have an Internal Committee (IC)?',
    answer:
      'Every organization with 10 or more employees is mandated by law to constitute an Internal Committee. If an IC does not exist or if the complaint is against the employer, you can submit your complaint directly to the District Local Committee (LC) constituted by the District Magistrate/Collector.',
    tags: ['POSH', 'Workplace', 'Internal Committee', 'Local Committee'],
  },
  {
    id: 'faq-cyber-photos',
    category: 'cyber',
    question: 'What can I do if someone is threatening to share private photos online?',
    answer:
      'Do not give in to threats or demands. Preserve all evidence (screenshots, phone numbers, profile URLs, messages) without altering them. Immediately file a complaint at cybercrime.gov.in or call the 1930 Cyber Helpline.',
    tags: ['Cyber Crime', 'Blackmail', 'Privacy', 'Online Safety'],
  },
  {
    id: 'faq-portal-complaint',
    category: 'general',
    question: 'Does this portal register complaints or connect me to a lawyer directly?',
    answer:
      'No. NARI-SURAKSHA is purely an educational and informational awareness portal. It does not collect personal data, file complaints, or provide legal or emergency services. For official reporting, please contact emergency numbers (112, 1091) or visit official portals like cybercrime.gov.in.',
    tags: ['Portal Scope', 'Disclaimer', 'Complaints', 'General'],
  },
];
