import { TopicItem } from '@/types/content';

export const topicsData: TopicItem[] = [
  {
    id: 'right-to-zero-fir',
    slug: 'zero-fir',
    title: 'Right to Zero FIR',
    category: 'rights',
    summary: 'A Zero FIR can be filed at any police station regardless of jurisdiction or place of incident.',
    description:
      'Under Indian legal provisions, a woman can lodge a First Information Report (FIR) at any police station irrespective of the territorial jurisdiction where the incident occurred. The receiving police station registers it as a "Zero FIR" and subsequently transfers it to the competent jurisdictional station for investigation.',
    keyPoints: [
      'Police officers cannot refuse to register an FIR based on jurisdictional boundaries.',
      'A copy of the registered Zero FIR must be provided free of cost to the complainant.',
      'Helps avoid critical delays in initiating investigations and gathering time-sensitive evidence.',
    ],
    legalProvisions: [
      'Supreme Court directives on Zero FIR',
      'Section 154 CrPC / Bharatiya Nagarik Suraksha Sanhita (BNSS)',
    ],
    actionSteps: [
      'Approach the nearest police station or women’s help desk.',
      'Request the duty officer to record your statement and register a Zero FIR.',
      'Ensure you receive an official stamped copy of the FIR with the crime reference number.',
    ],
    relatedTopics: ['police-station-rights', 'free-legal-aid'],
  },
  {
    id: 'right-against-arrest-at-night',
    slug: 'night-arrest-rights',
    title: 'Rights Regarding Arrest & Detention',
    category: 'rights',
    summary: 'Clear procedural safeguards govern when and how a woman can be arrested or questioned by law enforcement.',
    description:
      'The law provides strict procedural safeguards for women during questioning, search, and arrest to ensure dignity and safety.',
    keyPoints: [
      'Except in exceptional circumstances with prior judicial magistrate permission, a woman cannot be arrested after sunset and before sunrise.',
      'Arrests must be conducted in the presence of a female police officer.',
      'Search of a female suspect or witness must only be conducted by another woman with strict regard to decency.',
      'Interrogation or recording of statement of women should preferably occur at their place of residence.',
    ],
    legalProvisions: [
      'Section 46(4) CrPC / BNSS provisions on arrest of women',
      'Section 160 CrPC / BNSS regarding witness attendance',
    ],
    actionSteps: [
      'Ask for the presence of a female officer during any official inquiry.',
      'You are entitled to contact family members or legal representation immediately upon detention.',
    ],
    relatedTopics: ['zero-fir', 'free-legal-aid'],
  },
  {
    id: 'right-to-free-legal-aid',
    slug: 'free-legal-aid',
    title: 'Right to Free Legal Services (NALSA/SLSA)',
    category: 'rights',
    summary: 'All women in India are eligible for free legal aid and counsel under the Legal Services Authorities Act.',
    description:
      'Under the Legal Services Authorities Act, 1987, every woman, regardless of financial background or income status, is entitled to free legal aid, advice, and representation before courts through Legal Services Authorities.',
    keyPoints: [
      'Covers drafting petitions, legal counseling, advocate fees, and court documentation expenses.',
      'Available at Taluka, District (DLSA), State (SLSA), and National (NALSA) levels.',
      'Legal Aid Clinics operate at district court complexes and designated community centers.',
    ],
    legalProvisions: [
      'Section 12(c) of the Legal Services Authorities Act, 1987',
      'Article 39A of the Constitution of India (Equal justice and free legal aid)',
    ],
    actionSteps: [
      'Visit your nearest District Legal Services Authority (DLSA) office located in the district court complex.',
      'Call the National Legal Services Authority helpline at 15100.',
      'Submit a simple application requesting free legal assistance for your matter.',
    ],
    relatedTopics: ['zero-fir', 'posh-act'],
  },
  {
    id: 'posh-act-workplace-rights',
    slug: 'posh-act',
    title: 'Protection from Sexual Harassment at Workplace (POSH Act)',
    category: 'workplace',
    summary: 'Every workplace with 10 or more employees must maintain an Internal Committee (IC) to redress complaints.',
    description:
      'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 safeguards women working in organized, unorganized, private, and government sectors.',
    keyPoints: [
      'Mandatory Internal Committee (IC) in organizations with 10+ employees, presided by a senior woman.',
      'Local Complaints Committee (LCC/LC) in every district for organizations with fewer than 10 workers or complaints against employers.',
      'Time-bound inquiry process completed within 90 days of complaint submission.',
      'Strict confidentiality of complainant identity and proceedings.',
      'Protection against retaliation and options for interim relief (e.g., paid leave or transfer).',
    ],
    legalProvisions: [
      'POSH Act, 2013 and POSH Rules',
      'Vishaka Guidelines (Supreme Court of India)',
    ],
    actionSteps: [
      'Document dates, times, communications, and witnesses to unwelcome behavior.',
      'Submit a formal written complaint to your workplace Internal Committee (IC) within 3 months.',
      'If your employer has fewer than 10 employees or the IC is unavailable, submit the complaint to the District Local Committee (LC).',
    ],
    relatedTopics: ['free-legal-aid', 'digital-evidence-safeguarding'],
  },
  {
    id: 'cyber-stalking-doxxing-rights',
    slug: 'cyber-stalking-harassment',
    title: 'Cyber Harassment & Digital Privacy Protections',
    category: 'cyber',
    summary: 'Legal avenues and safety protocols for dealing with online harassment, stalking, morphing, or impersonation.',
    description:
      'Cyber crimes against women—including online stalking, non-consensual image sharing, impersonation, doxxing, and threatening messages—are punishable offenses under both the Information Technology Act and criminal law.',
    keyPoints: [
      'Non-consensual sharing of intimate images is punishable with imprisonment and fines.',
      'National Cyber Crime Reporting Portal (cybercrime.gov.in) allows anonymous reporting of objectionable media.',
      'Intermediary social media platforms are legally required to remove non-consensual intimate imagery within 24 hours of notification.',
    ],
    legalProvisions: [
      'Section 66E (Violation of privacy) & 67/67A of IT Act, 2000',
      'Section 354D IPC / BNSS (Stalking - online and offline)',
    ],
    actionSteps: [
      'Take clear screenshots showing URLs, timestamps, sender handles, and message text.',
      'Do not engage or negotiate with extortionists or cyber stalkers.',
      'Report on the National Cyber Crime Reporting Portal or call the Cyber Helpline 1930.',
      'Use platform reporting tools to flag abusive profiles and content.',
    ],
    relatedTopics: ['posh-act', 'zero-fir'],
  },
];
