import { WorkflowGuide } from '@/types/workflow';

export const workflowsData: WorkflowGuide[] = [
  {
    id: 'workflow-workplace-harassment',
    title: 'Workplace Sexual Harassment: Safe Next Steps',
    slug: 'workplace-harassment-steps',
    scenario: 'You are experiencing unwelcome verbal, physical, or digital behavior at your workplace.',
    category: 'workplace',
    summary: 'A structured, safe step-by-step awareness guide for understanding internal and statutory reporting procedures.',
    disclaimer: 'This guide is for informational purposes. If you are in immediate physical danger, call 112 right away.',
    steps: [
      {
        id: 'step-1',
        order: 1,
        title: 'Document incidents meticulously',
        description: 'Maintain a confidential, personal record of dates, times, locations, witnesses, conversations, emails, and screenshots. Keep these outside workplace devices.',
        recommendedActions: [
          'Take screenshots of messages with full sender handles and timestamps.',
          'Save relevant emails to a personal, secure device.',
          'Note down names of colleagues who witnessed the behavior.',
        ],
      },
      {
        id: 'step-2',
        order: 2,
        title: 'Review company POSH policy and IC contacts',
        description: 'Check your employer’s internal portal or HR handbook for the composition and email address of the Internal Committee (IC).',
        recommendedActions: [
          'Locate the designated email of the IC Presiding Officer.',
          'Review the timeline (formal complaints must usually be submitted within 3 months of the last incident).',
        ],
      },
      {
        id: 'step-3',
        order: 3,
        title: 'Submit formal written complaint to IC or Local Committee',
        description: 'Submit your signed written complaint detailing the incidents and evidence. If your employer has fewer than 10 workers or the complaint is against the top management, file with the District Local Committee.',
        recommendedActions: [
          'Submit via official written correspondence or registered email.',
          'Request written acknowledgment of complaint receipt.',
          'Ask about interim protections (such as reassignment or leave) if needed.',
        ],
      },
    ],
  },
  {
    id: 'workflow-online-harassment',
    title: 'Cyber Stalking & Online Abuse: Safe Action Guide',
    slug: 'online-abuse-steps',
    scenario: 'You are receiving threats, morphed pictures, or persistent non-consensual messages online.',
    category: 'cyber',
    summary: 'Recommended safe steps to preserve evidence, block perpetrators, and report to official cyber crime authorities.',
    disclaimer: 'Never share money or sensitive credentials under threats. Reach out to verified helplines immediately.',
    steps: [
      {
        id: 'step-1',
        order: 1,
        title: 'Capture and securely preserve digital evidence',
        description: 'Before blocking or deleting conversations, capture clear screenshots showing complete profile links, mobile numbers, and timestamps.',
        recommendedActions: [
          'Capture full screen images including system clock and status bar.',
          'Note the full URL of abusive social media profiles or groups.',
          'Do not edit, crop, or alter images in any way.',
        ],
      },
      {
        id: 'step-2',
        order: 2,
        title: 'Report directly to platform moderators',
        description: 'Use the in-app reporting tools (Instagram, WhatsApp, Facebook, X, etc.) to flag harassment, impersonation, or privacy violations.',
        recommendedActions: [
          'Use specific reporting categories like "Harassment", "Impersonation", or "Non-consensual imagery".',
          'Block the offending account after securing evidence.',
        ],
      },
      {
        id: 'step-3',
        order: 3,
        title: 'File an official report on Cyber Crime Portal',
        description: 'Lodge an official complaint via the National Cyber Crime Reporting Portal or dial 1930.',
        recommendedActions: [
          'Visit cybercrime.gov.in and choose the appropriate women-related cyber crime section.',
          'Call 1930 for immediate telephonic guidance.',
        ],
        officialHelplineOrLink: 'https://cybercrime.gov.in | Helpline 1930',
      },
    ],
  },
];
