import { LawItem } from '@/types/content';

export const lawsData: LawItem[] = [
  {
    id: 'posh-act-2013',
    actName: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act',
    shortTitle: 'POSH Act, 2013',
    year: 2013,
    category: 'Workplace',
    overview:
      'A comprehensive legislation dedicated to creating a secure and gender-equal work environment free from sexual harassment across organized and informal sectors.',
    keySections: [
      {
        section: 'Section 4',
        description: 'Mandates constitution of Internal Committee (IC) in every administrative unit or office with 10+ employees.',
      },
      {
        section: 'Section 6',
        description: 'Establishment of Local Committee (LC) at district level for unorganized sectors or complaints against employers.',
      },
      {
        section: 'Section 9',
        description: 'Filing of complaint within a period of 3 months from the incident date, extendable by another 3 months upon reasonable grounds.',
      },
      {
        section: 'Section 16',
        description: 'Prohibition of publication or making known contents of complaint and inquiry proceedings to protect privacy.',
      },
    ],
    penaltyInfo: 'Failure to constitute an Internal Committee incurs financial penalty up to ₹50,000 and possible cancellation of business license on repeated offenses.',
    officialSource: 'Ministry of Women and Child Development (WCD), Government of India',
  },
  {
    id: 'dv-act-2005',
    actName: 'Protection of Women from Domestic Violence Act',
    shortTitle: 'PWDVA / Domestic Violence Act, 2005',
    year: 2005,
    category: 'Domestic Rights & Family',
    overview:
      'Provides civil remedies, emergency protection orders, residence rights, and monetary relief to protect women from domestic violence in shared households.',
    keySections: [
      {
        section: 'Section 3',
        description: 'Broad definition of domestic violence encompassing physical, verbal, emotional, sexual, and economic abuse.',
      },
      {
        section: 'Section 17 & 19',
        description: 'Right to reside in a shared household and court protection against unlawful eviction.',
      },
      {
        section: 'Section 18',
        description: 'Protection orders restraining the abuser from committing or aiding acts of domestic violence.',
      },
      {
        section: 'Section 20 & 22',
        description: 'Monetary reliefs, medical expenses, maintenance, and compensation orders.',
      },
    ],
    penaltyInfo: 'Breach of protection order by the respondent is a cognizable and non-bailable offense punishable with up to one year imprisonment or fine.',
    officialSource: 'Ministry of Women and Child Development (WCD), Government of India',
  },
  {
    id: 'it-act-cyber-provisions',
    actName: 'Information Technology Act, 2000 (with Amendments)',
    shortTitle: 'IT Act, 2000',
    year: 2000,
    category: 'Cyber & Digital Privacy',
    overview:
      'Governs electronic records, digital communications, and penalizes digital abuse including non-consensual image sharing, voyeurism, and identity theft.',
    keySections: [
      {
        section: 'Section 66E',
        description: 'Punishment for violation of privacy, intentionally capturing, publishing or transmitting images of private area without consent.',
      },
      {
        section: 'Section 67 / 67A',
        description: 'Punishment for publishing or transmitting obscene or sexually explicit material in electronic form.',
      },
      {
        section: 'Section 66D',
        description: 'Punishment for cheating by personation by using computer resource or fake online profiles.',
      },
    ],
    penaltyInfo: 'Imprisonment ranging from 3 to 7 years and substantial financial fines depending on the specific violation.',
    officialSource: 'Ministry of Electronics and Information Technology (MeitY), Government of India',
  },
  {
    id: 'maternity-benefit-act',
    actName: 'Maternity Benefit (Amendment) Act, 2017',
    shortTitle: 'Maternity Benefit Act',
    year: 2017,
    category: 'Employment & Welfare',
    overview:
      'Ensures paid maternity leave, job security, and health benefits to women employed in establishments with 10 or more employees.',
    keySections: [
      {
        section: 'Section 5',
        description: 'Entitlement to 26 weeks of paid maternity leave for up to two surviving children.',
      },
      {
        section: 'Section 11A',
        description: 'Mandatory crèche facility in establishments employing 50 or more workers.',
      },
      {
        section: 'Section 12',
        description: 'Dismissal or discharge of a woman during pregnancy or absence on maternity leave is unlawful.',
      },
    ],
    penaltyInfo: 'Penalties for non-compliance include imprisonment and fines under labor laws.',
    officialSource: 'Ministry of Labour and Employment, Government of India',
  },
];
