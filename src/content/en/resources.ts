import { HelpResource, EmergencyContact } from '@/types/resources';

export const emergencyContacts: EmergencyContact[] = [
  {
    label: 'National Emergency Number',
    number: '112',
    description: 'All-in-one emergency response for Police, Fire, and Ambulance across India.',
    available: '24/7 Toll-Free',
  },
  {
    label: 'Women Helpline (National)',
    number: '1091',
    description: 'Dedicated emergency helpline for women facing distress or crisis.',
    available: '24/7 Toll-Free',
  },
  {
    label: 'National Cyber Crime Helpline',
    number: '1930',
    description: 'Official reporting helpline for cyber fraud and cyber crimes against women.',
    available: '24/7 Toll-Free',
  },
  {
    label: 'National Commission for Women (NCW)',
    number: '7827170170',
    description: 'NCW 24x7 helpline for women affected by violence or rights violations.',
    available: '24/7 Helpline',
  },
];

export const helpResourcesData: HelpResource[] = [
  {
    id: 'res-er-112',
    name: 'Emergency Response Support System (ERSS - 112)',
    category: 'Police & Emergency',
    coverage: 'Pan-India',
    contactNumber: '112',
    timings: '24 Hours, 7 Days a week',
    website: 'https://112.gov.in',
    description:
      'Nationwide emergency service platform linking police, medical, fire, and disaster teams.',
    verificationStatus: 'Verify from official source before launch',
    isEmergencyOnly: true,
  },
  {
    id: 'res-ncw-helpline',
    name: 'National Commission for Women (NCW) 24/7 Helpline',
    category: 'National Helpline',
    coverage: 'Pan-India',
    contactNumber: '7827170170',
    timings: '24 Hours, 7 Days a week',
    website: 'http://ncw.nic.in',
    description:
      'Provides counseling, referral services, and intervention for women in distress.',
    verificationStatus: 'Verify from official source before launch',
  },
  {
    id: 'res-nalsa-legal-aid',
    name: 'National Legal Services Authority (NALSA) Legal Aid Helpline',
    category: 'Legal Aid',
    coverage: 'Pan-India (State & District levels)',
    contactNumber: '15100',
    timings: 'Working Hours & Designated helpline hours',
    website: 'https://nalsa.gov.in',
    description:
      'Enables access to free legal consultation, advocate assignment, and paralegal support.',
    verificationStatus: 'Verify from official source before launch',
  },
  {
    id: 'res-cyber-portal',
    name: 'National Cyber Crime Reporting Portal (NCRP)',
    category: 'Cyber Crime',
    coverage: 'Pan-India',
    contactNumber: '1930',
    timings: '24 Hours Online & Telephone Support',
    website: 'https://cybercrime.gov.in',
    description:
      'Official portal for lodging complaints regarding online harassment, cyber bullying, and non-consensual media.',
    verificationStatus: 'Verify from official source before launch',
  },
  {
    id: 'res-one-stop-centres',
    name: 'Sakhi One Stop Centres (OSC)',
    category: 'Counseling & Support',
    coverage: 'District-wise across India',
    contactNumber: '181',
    timings: '24 Hours, 7 Days a week',
    website: 'https://wcd.nic.in',
    description:
      'Integrated support providing medical aid, police facilitation, legal counseling, and temporary shelter under one roof.',
    verificationStatus: 'Verify from official source before launch',
  },
  {
    id: 'res-childline-1098',
    name: 'Child Helpline / POCSO Support',
    category: 'National Helpline',
    coverage: 'Pan-India',
    contactNumber: '1098 / 112',
    timings: '24 Hours, 7 Days a week',
    website: 'https://childlineindia.org',
    description:
      'Emergency support service for children and adolescent girls in need of care and protection.',
    verificationStatus: 'Verify from official source before launch',
  },
];
