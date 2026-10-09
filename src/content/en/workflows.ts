import { WorkflowGuide, ConcernId, SafeNextStepsFlowData } from '@/types/workflow';

export interface ConcernOption {
  id: ConcernId;
  label: string;
  description: string;
  isEmergencyDirect?: boolean;
}

export const CONCERNS_LIST: ConcernOption[] = [
  {
    id: 'unsafe-now',
    label: 'I feel unsafe right now',
    description: 'Immediate safety concern or active emergency.',
    isEmergencyDirect: true,
  },
  {
    id: 'stalking',
    label: 'Someone is repeatedly contacting or following me',
    description: 'Persistent physical following, calls, messages, or location monitoring.',
  },
  {
    id: 'fake-profile',
    label: 'Someone created a fake profile or used my photos',
    description: 'Impersonation, cloned accounts, or unauthorized profile misuse.',
  },
  {
    id: 'online-threats',
    label: 'I received online threats or image-related threats',
    description: 'Intimidation, blackmail, morphed media, or non-consensual sharing threats.',
  },
  {
    id: 'workplace-conduct',
    label: 'I am experiencing unwanted conduct at work or college',
    description: 'Inappropriate behavior, pressure, or hostile environment in professional settings.',
  },
  {
    id: 'abuse-at-home',
    label: 'I may be facing abuse at home',
    description: 'Domestic distress, physical or emotional intimidation, or marital cruelty.',
  },
  {
    id: 'financial-scam',
    label: 'I received a suspicious bank, UPI, OTP, job, or payment message',
    description: 'Fraudulent payment links, OTP requests, or unauthorized financial demands.',
  },
  {
    id: 'helping-someone',
    label: 'I am helping someone else',
    description: 'Looking for respectful, safe ways to support a friend, family member, or colleague.',
  },
  {
    id: 'unsure',
    label: 'I am not sure which topic fits',
    description: 'Uncertain about categories or experiencing an overlapping concern.',
  },
];

export const SAFE_NEXT_STEPS_FLOWS: Record<ConcernId, SafeNextStepsFlowData> = {
  'unsafe-now': {
    concernId: 'unsafe-now',
    label: 'Immediate Safety',
    title: 'Immediate Safety & Emergency Assistance',
    shortExplanation:
      'If you are in immediate danger, contact emergency services or a trusted nearby person if it is safe to do so. Do not delay seeking emergency help because of this website.',
    steps: [
      {
        id: 'unsafe-1',
        order: 1,
        title: 'Reach a physically safer location, if possible',
        description:
          'If safe, you may consider moving toward a public place, well-lit area, security desk, or near people you trust.',
        options: [
          'Move toward populated areas or trusted friends if safe.',
          'Avoid confronting an aggressor or attempting to de-escalate alone if risk is high.',
        ],
        cautionNotes: [
          'Do not prioritize preserving physical property or collecting proof over your immediate physical safety.',
        ],
      },
      {
        id: 'unsafe-2',
        order: 2,
        title: 'Contact National Emergency Dispatch (112)',
        description:
          'Call 112 directly from any mobile or landline across India. It connects to Police, Ambulance, and Fire services.',
        options: [
          'State your exact location, nearby landmarks, and immediate safety risk calmly.',
          'Keep the line open if instructed by the emergency dispatcher.',
        ],
      },
    ],
    learnMoreLinks: [
      { title: 'Verified Emergency Helplines', url: '/get-help', note: 'Official 24/7 toll-free contacts' },
    ],
    disclaimer:
      'This website is an informational portal and cannot dispatch first responders or contact police on your behalf. Call 112 directly.',
  },

  stalking: {
    concernId: 'stalking',
    label: 'Repeated Stalking or Tracking',
    title: 'Repeated Contact, Following, or Stalking: Safe Next Steps',
    shortExplanation:
      'Persistent unwanted following, whether physical or digital, requires prioritizing personal safety and avoiding direct confrontation.',
    steps: [
      {
        id: 'stalk-1',
        order: 1,
        title: 'Prioritize your personal safety and avoid confrontation',
        description:
          'Safety experts advise against confronting the individual directly, as this may escalate unpredictably.',
        options: [
          'You may consider varying your regular daily routes and travel times if feasible.',
          'Consider sharing your real-time whereabouts with a trusted family member or friend when commuting.',
          'Avoid isolated locations or meeting the person alone to negotiate.',
        ],
        cautionNotes: [
          'Never agree to meet someone who is following or threatening you in private.',
        ],
      },
      {
        id: 'stalk-2',
        order: 2,
        title: 'Confide in a trusted person, if safe to do so',
        description:
          'Having at least one reliable person aware of the situation provides emotional backing and an emergency contact.',
        options: [
          'You may consider letting a family member, hostel warden, trusted colleague, or friend know what is happening.',
          'Establish a simple check-in routine or safe word for unexpected situations.',
        ],
      },
      {
        id: 'stalk-3',
        order: 3,
        title: 'Preserve records and communications, only if safe',
        description:
          'Maintaining records can be helpful for official reporting, but should never compromise your immediate safety.',
        options: [
          'You may consider taking screenshots of call logs, messages, and timestamps.',
          'Keep a written log of dates, times, locations, and descriptions of incidents on a secure personal device.',
          'Do not delete threatening messages before saving an unedited backup.',
        ],
        cautionNotes: [
          'Do not engage in hazardous physical following or secret filming that could put you in danger.',
        ],
      },
      {
        id: 'stalk-4',
        order: 4,
        title: 'Review digital device permissions and location sharing',
        description:
          'If the monitoring occurs digitally, audit background location sharing and unknown Bluetooth trackers.',
        options: [
          'Check phone settings for active GPS location sharing with unknown contacts or third-party apps.',
          'Review account login activity on social media and messaging platforms.',
        ],
      },
    ],
    evidenceSafetyNotes: [
      'Preserve screenshots showing full dates, timestamps, and usernames without cropping.',
      'Store proof on a private, password-protected cloud account or with a trusted contact outside shared devices.',
    ],
    learnMoreLinks: [
      { title: 'Stalking & Physical Safety Guide', url: '/rights/stalking' },
      { title: 'Cyberstalking & Digital Monitoring Guide', url: '/rights/cyberstalking' },
      { title: 'Verified Support Helplines', url: '/get-help' },
    ],
    disclaimer:
      'This awareness guide provides educational safety options and does not constitute formal legal counsel or police intervention.',
  },

  'fake-profile': {
    concernId: 'fake-profile',
    label: 'Fake Profile or Impersonation',
    title: 'Fake Profile or Photo Misuse: Safe Next Steps',
    shortExplanation:
      'Discovering an unauthorized profile using your name, photos, or identity can be distressing. Practical steps focus on official platform reporting and securing existing accounts.',
    steps: [
      {
        id: 'fake-1',
        order: 1,
        title: 'Preserve visible account details, only if safe',
        description:
          'Before reporting or blocking, you may consider capturing verifiable details of the imposter account.',
        options: [
          'Copy the exact account profile URL (e.g., username link) from a browser or app share menu.',
          'Take full screenshots showing the handle, profile picture, bio text, and publication dates.',
          'Do not send abusive or retaliatory messages to the imposter account.',
        ],
        cautionNotes: [
          'Do not click suspicious links sent by or posted on the fake account.',
        ],
      },
      {
        id: 'fake-2',
        order: 2,
        title: 'Report through the platform’s official reporting tools',
        description:
          'Major social media networks maintain dedicated flows to report identity impersonation.',
        options: [
          'Use the in-app "Report Profile" feature selecting "Impersonation" or "Pretending to be me".',
          'You may consider asking close, trusted friends to report the same profile to increase moderation priority.',
          'Follow the platform’s identity verification prompt if requested by their official verified support channel.',
        ],
      },
      {
        id: 'fake-3',
        order: 3,
        title: 'Audit your own account privacy and security settings',
        description:
          'Preventing further unauthorized image downloads and unauthorized access is an essential precaution.',
        options: [
          'Set your personal social media accounts to private mode if currently public.',
          'Enable two-factor authentication (2FA) using an authenticator app on your email and social accounts.',
          'Review your friend/follower lists and remove unknown profiles.',
        ],
      },
      {
        id: 'fake-4',
        order: 4,
        title: 'Official reporting options under cyber regulations',
        description:
          'If the impersonation involves defamatory content or harassment, official cyber crime avenues exist.',
        options: [
          'You may consider lodging an official complaint at the National Cyber Crime Reporting Portal (cybercrime.gov.in) under "Report Women/Child Related Crime".',
          'National cyber helpline 1930 provides telephonic guidance on cyber complaints.',
        ],
      },
    ],
    evidenceSafetyNotes: [
      'Record the full web URL (not just screenshot of the username), as usernames can be renamed.',
      'Keep copies of the original photographs showing metadata/original date if needed for proof of ownership.',
    ],
    learnMoreLinks: [
      { title: 'Fake Profiles & Online Impersonation Guide', url: '/rights/fake-profiles-impersonation' },
      { title: 'Online Privacy, App Permissions & Consent Guide', url: '/rights/online-privacy-consent' },
      { title: 'Directory of Helplines', url: '/get-help' },
    ],
    sourceVerificationNote:
      'National Cyber Crime Reporting Portal (cybercrime.gov.in) and Helpline 1930 are official Government of India resources.',
    disclaimer:
      'This guide does not guarantee platform removal times or take down outcomes. Use official platform support channels.',
  },

  'online-threats': {
    concernId: 'online-threats',
    label: 'Online Threats or Image-Based Abuse',
    title: 'Online Threats & Non-Consensual Imagery: Safe Next Steps',
    shortExplanation:
      'Facing digital threats or blackmail regarding intimate pictures is serious. Prioritize personal safety, preserve evidence safely, and avoid yielding to financial or personal demands.',
    steps: [
      {
        id: 'threat-1',
        order: 1,
        title: 'Prioritize your immediate emotional and physical safety',
        description:
          'You do not need to face this alone. Reassure yourself that blackmailers rely on isolation and fear.',
        options: [
          'Do not feel pressured into paying money, sending further media, or complying with extortion demands.',
          'Paying extortion demands often leads to further repeated demands rather than deletion.',
          'Consider confiding in a trusted adult, family member, or professional counselor.',
        ],
        cautionNotes: [
          'Never agree to meet someone who is blackmailing or threatening you in person.',
        ],
      },
      {
        id: 'threat-2',
        order: 2,
        title: 'Preserve existing messages and extortion demands, if safe',
        description:
          'Maintain an unedited record of the threats before restricting or blocking communications.',
        options: [
          'Capture screenshots of all messages, payment demands, sender handles, and phone numbers.',
          'Include the date, time, and battery/network bar in the screenshots to establish chronological continuity.',
          'Do not delete the chat thread until you have verified backups stored in a secure location.',
        ],
        cautionNotes: [
          'You are not required to describe intimate images in detail on public forums or to unauthorized individuals.',
        ],
      },
      {
        id: 'threat-3',
        order: 3,
        title: 'Utilize recognized image hash-protection tools, if applicable',
        description:
          'Official nonprofit technologies like StopNCII.org create secure numerical hashes of non-consensual images to prevent upload across participating tech platforms without uploading the raw photo.',
        options: [
          'You may explore StopNCII.org for consenting adults or official NGO partners.',
          'Reporting on official platforms allows moderation teams to flag hash signatures.',
        ],
      },
      {
        id: 'threat-4',
        order: 4,
        title: 'Official reporting through cyber crime avenues',
        description:
          'Section 66E and 67A of the Information Technology Act address non-consensual sharing of intimate images.',
        options: [
          'You may lodge an incident at cybercrime.gov.in under the anonymous/confidential women cyber incident category.',
          'Contact Women Helpline 181 or National Cyber Helpline 1930 for procedural assistance.',
        ],
      },
    ],
    evidenceSafetyNotes: [
      'Preserve screenshots of transaction requests (UPI IDs, QR codes, crypto wallets) if financial extortion is involved.',
      'Store records in an encrypted folder or private cloud drive accessible only by you.',
    ],
    learnMoreLinks: [
      { title: 'Image-Based Abuse & Non-Consensual Media Guide', url: '/rights/image-based-abuse' },
      { title: 'Cyber Safety Hub', url: '/cyber-safety' },
      { title: 'Helplines & Support Directory', url: '/get-help' },
    ],
    sourceVerificationNote:
      'Official statutory cyber provisions referenced under Information Technology Act, 2000.',
    disclaimer:
      'This portal does not assess legal guilt or guarantee takedown timing. For urgent protection, engage official cyber authorities.',
  },

  'workplace-conduct': {
    concernId: 'workplace-conduct',
    label: 'Workplace or College Conduct',
    title: 'Unwanted Workplace or College Conduct: Safe Next Steps',
    shortExplanation:
      'Addressing unwelcome conduct in an employment or educational setting involves understanding institutional policies, confidentiality rules, and statutory committee procedures.',
    steps: [
      {
        id: 'work-1',
        order: 1,
        title: 'Understand that this guide does not determine legal definitions',
        description:
          'Whether specific conduct constitutes sexual harassment under law depends on formal inquiry findings by designated committees.',
        options: [
          'You may consider familiarizing yourself with your organization’s written Anti-Harassment or POSH policy.',
          'Check employee handbooks or student portals for details on grievance channels.',
        ],
      },
      {
        id: 'work-2',
        order: 2,
        title: 'Maintain a confidential, personal record, if safe',
        description:
          'Keeping factual records on personal devices helps preserve clarity without relying on memory alone.',
        options: [
          'You may consider noting dates, approximate times, locations, and verbatim statements.',
          'Save relevant emails, chat transcripts, or meeting invites on a secure personal device outside employer servers.',
          'Note down names of colleagues who may have witnessed the behavior, if applicable.',
        ],
        cautionNotes: [
          'Avoid storing confidential evidence solely on workplace laptops or official email accounts that can be revoked.',
        ],
      },
      {
        id: 'work-3',
        order: 3,
        title: 'Identify the Internal Committee (IC) or Local Committee (LC)',
        description:
          'Under the POSH Act, 2013, workplaces with 10 or more employees must constitute an Internal Committee.',
        options: [
          'Locate the designated email and names of the Internal Committee Presiding Officer and external member.',
          'If your workplace has fewer than 10 workers or the complaint is against the employer, complaints lie with the District Local Committee (LC).',
          'Review the statutory timeframe (formal complaints are typically filed within 3 months of the last incident, subject to condonation).',
        ],
      },
      {
        id: 'work-4',
        order: 4,
        title: 'Inquire about interim relief and confidentiality protections',
        description:
          'The law obligates committees to maintain strict confidentiality of parties and allows requests for interim measures.',
        options: [
          'You may request interim measures such as transfer of supervisory authority, paid leave, or schedule changes during an inquiry.',
          'All parties are bound by statutory confidentiality under Section 16 of the POSH Act.',
        ],
      },
    ],
    evidenceSafetyNotes: [
      'Keep copies of organizational organizational charts, performance reviews, or prior positive appraisals to prevent retaliatory claims.',
    ],
    learnMoreLinks: [
      { title: 'Workplace Sexual Harassment & POSH Framework', url: '/rights/workplace-sexual-harassment' },
      { title: 'Workplace Safety Hub', url: '/workplace' },
      { title: 'POSH Act, 2013 Statutory Overview', url: '/laws' },
    ],
    sourceVerificationNote:
      'Procedures governed by Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. Official verification of local committee contacts required per district.',
    disclaimer:
      'This guide is educational only and does not represent an Internal Committee finding or employer legal advice.',
  },

  'abuse-at-home': {
    concernId: 'abuse-at-home',
    label: 'Abuse at Home or Domestic Safety',
    title: 'Facing Abuse at Home: Safe Next Steps & Safety Planning',
    shortExplanation:
      'Experiencing violence or intimidation within a shared home requires cautious, safety-centered planning. Avoid abrupt actions that could escalate danger.',
    steps: [
      {
        id: 'home-1',
        order: 1,
        title: 'Prioritize personal safety over confrontation',
        description:
          'Safety advocates caution against confronting abusive family members when doing so might provoke physical harm.',
        options: [
          'Identify accessible exits in the residence and avoid confined rooms (like bathrooms or kitchens with sharp objects) during arguments.',
          'If conflict escalates, consider leaving to a safe neighbor, friend, or relative if you can do so safely.',
          'Keep an emergency bag with essential medicine, identification cards, and emergency cash accessible, if safe.',
        ],
        cautionNotes: [
          'Never attempt secret recording if discovery could increase immediate physical risk.',
        ],
      },
      {
        id: 'home-2',
        order: 2,
        title: 'Establish a discreet communication channel with a trusted contact',
        description:
          'Having someone outside the home aware of your situation provides a vital safety lifeline.',
        options: [
          'Agree on a simple distress code or signal with a trusted friend, family member, or neighbor.',
          'Check your device privacy and use a safer browser, device, or private browsing window if you need additional privacy.',
        ],
      },
      {
        id: 'home-3',
        order: 3,
        title: 'Learn about verified institutional support services',
        description:
          'Civil protections exist under Indian law for women in domestic relationships without requiring immediate criminal filing.',
        options: [
          'One Stop Centres (Sakhi Centres) provide medical aid, temporary shelter, psycho-social counseling, and legal assistance under one roof.',
          'Protection Officers appointed under the Domestic Violence Act assist in filing Domestic Incident Reports (DIR).',
          'Women Helpline 181 offers 24/7 telephonic support and referral to district protection infrastructure.',
        ],
      },
      {
        id: 'home-4',
        order: 4,
        title: 'Understand civil remedies under the Domestic Violence Act',
        description:
          'The law provides court-mandated protection orders, residence rights, and maintenance.',
        options: [
          'Protection orders can legally prohibit the abuser from committing or aiding domestic violence.',
          'Residence orders protect a woman’s right to remain in the shared household.',
          'Free legal aid is available via the District Legal Services Authority (DLSA).',
        ],
      },
    ],
    evidenceSafetyNotes: [
      'Keep copies of marriage certificates, birth certificates, medical prescription records, and Stridhan lists with a trusted relative outside the home, if safe.',
    ],
    learnMoreLinks: [
      { title: 'Domestic Violence & Household Safety Guide', url: '/rights/domestic-violence' },
      { title: 'Domestic Violence Act (PWDVA 2005) Legal Summary', url: '/laws' },
      { title: 'Directory of Helplines (181, 112, One Stop Centres)', url: '/get-help' },
    ],
    sourceVerificationNote:
      'Protection of Women from Domestic Violence Act, 2005 (PWDVA). Helplines 112 and 181 are verified national public services.',
    disclaimer:
      'This awareness content cannot guarantee legal outcomes or predict judicial orders. If in immediate danger, call 112.',
  },

  'financial-scam': {
    concernId: 'financial-scam',
    label: 'Suspicious Scam or Payment Fraud',
    title: 'Financial Scams, UPI & OTP Safety: Safe Next Steps',
    shortExplanation:
      'If you received a deceptive message or suspect unauthorized account activity, prompt action with verified banking channels is critical.',
    steps: [
      {
        id: 'fin-1',
        order: 1,
        title: 'Never disclose OTPs, PINs, passwords, or remote-access codes',
        description:
          'Legitimate banks and government officials never demand OTPs, UPI PINs, or installation of remote screen-sharing applications (like AnyDesk or TeamViewer).',
        options: [
          'Remember: You only enter a UPI PIN to SEND money, never to RECEIVE money.',
          'Do not approve unexpected debit requests or scan unknown QR codes to receive funds.',
          'Never share passwords, card CVVs, or OTP verification SMS messages with anyone.',
        ],
        cautionNotes: [
          'If a caller claims to be police, bank fraud department, or courier officials threatening arrest unless you transfer money, disconnect immediately. This is a common digital arrest/coercion scam.',
        ],
      },
      {
        id: 'fin-2',
        order: 2,
        title: 'If money was debited: Contact your bank immediately through verified channels',
        description:
          'Speed is crucial to freezing fraudulent transactions before money is routed through mule accounts.',
        options: [
          'Call your bank’s official customer care number printed directly on the back of your debit/credit card.',
          'Use your official banking app to freeze or hotlist affected cards and disable UPI services temporarily.',
          'Do not search for bank helpline numbers on Google Maps or unofficial forums, as scammers post fake numbers.',
        ],
      },
      {
        id: 'fin-3',
        order: 3,
        title: 'Report immediately to National Cyber Crime Helpline 1930',
        description:
          'The Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS) coordinates bank freezes.',
        options: [
          'Dial 1930 immediately with details of your bank account, transaction ID, date, and recipient UPI handle.',
          'Lodge a formal electronic report on cybercrime.gov.in within 24 hours of the incident.',
        ],
      },
      {
        id: 'fin-4',
        order: 4,
        title: 'Preserve transaction records and communication logs, if safe',
        description:
          'Documenting transactional evidence supports formal bank dispute resolution and cyber investigations.',
        options: [
          'Take screenshots of fraudulent SMS messages, payment gateway confirmation receipts, and WhatsApp chats.',
          'Download official bank account statements showing transaction reference numbers (UTR numbers).',
        ],
      },
    ],
    evidenceSafetyNotes: [
      'Note down exact transaction IDs, recipient UPI VPA handles, timestamps, and mobile numbers used by fraudsters.',
    ],
    learnMoreLinks: [
      { title: 'Financial Scams, Phishing, OTP & UPI Safety Guide', url: '/rights/financial-scams-upi-safety' },
      { title: 'Cyber Safety Hub', url: '/cyber-safety' },
      { title: 'Emergency Contacts & Helplines', url: '/get-help' },
    ],
    sourceVerificationNote:
      'National Cyber Helpline 1930 and cybercrime.gov.in are official Government of India services. Bank numbers must always be verified directly from official cards or bank branches.',
    disclaimer:
      'This website cannot recover stolen funds or dispute bank transactions on your behalf. Contact your banking institution immediately.',
  },

  'helping-someone': {
    concernId: 'helping-someone',
    label: 'Helping Someone Else',
    title: 'Supporting Someone Else: Safe & Respectful Next Steps',
    shortExplanation:
      'Supporting a friend, relative, or colleague experiencing harassment or abuse requires empathy, non-judgmental listening, and prioritizing their autonomy.',
    steps: [
      {
        id: 'help-1',
        order: 1,
        title: 'Listen without blame, disbelief, or pressure',
        description:
          'Survivors of harassment or abuse often fear skepticism or retaliation. Validating their feelings builds essential trust.',
        options: [
          'Listen calmly and believe what they share without asking interrogative questions.',
          'Avoid blaming remarks such as "Why didn’t you speak up earlier?" or "Why did you go there?".',
          'Reassure them that the mistreatment is not their fault.',
        ],
        cautionNotes: [
          'Never pressure the person into making decisions they are not ready for.',
        ],
      },
      {
        id: 'help-2',
        order: 2,
        title: 'Ask what kind of support they would like',
        description:
          'Empowering the person to guide their own decisions restores their sense of control.',
        options: [
          'Ask: "How can I best support you right now?" or "Would you like me to accompany you anywhere?".',
          'Respect their pace; do not take over or make decisions against their expressed wishes unless there is immediate life endangerment.',
        ],
      },
      {
        id: 'help-3',
        order: 3,
        title: 'Avoid confronting the other person on their behalf',
        description:
          'Confronting an alleged harasser or abuser without planning can endanger the person you are trying to help.',
        options: [
          'Do not send angry messages, make retaliatory calls, or physically confront the other party.',
          'Uncoordinated intervention may provoke escalation against the survivor when they are alone.',
        ],
        cautionNotes: [
          'Do not disclose their situation to mutual friends, family, or online groups without their clear consent.',
        ],
      },
      {
        id: 'help-4',
        order: 4,
        title: 'Offer to help them explore verified official resources',
        description:
          'Sharing objective information allows them to review available legal rights and support avenues in their own time.',
        options: [
          'Share links to verified portal guides or the helpline directory (/get-help).',
          'Offer to be present as a silent companion during helpline calls if they request moral support.',
        ],
      },
    ],
    learnMoreLinks: [
      { title: 'Women’s Rights Overview', url: '/rights' },
      { title: 'Step-by-Step Action Protocols', url: '/what-to-do' },
      { title: 'Emergency & Verified Helplines', url: '/get-help' },
    ],
    disclaimer:
      'This guidance provides supportive interpersonal suggestions and does not replace professional crisis intervention or mental health care.',
  },

  unsure: {
    concernId: 'unsure',
    label: 'Unsure / Browse Topics',
    title: 'Explore Portal Topics & Guidance',
    shortExplanation:
      'It is completely normal to feel unsure of which legal category or terminology fits your experience. You can browse our awareness guides and support resources freely.',
    steps: [
      {
        id: 'unsure-1',
        order: 1,
        title: 'Take your time — no diagnosis is needed',
        description:
          'You do not have to categorize your experience to seek information or access safety resources.',
        options: [
          'Many challenging situations involve overlapping elements (such as digital harassment together with workplace or domestic tensions).',
          'You are welcome to read through different guides at your own pace.',
        ],
      },
      {
        id: 'unsure-2',
        order: 2,
        title: 'Explore primary portal sections',
        options: [
          'Rights & Guides: Plain-language awareness covering 10 major women’s safety topics.',
          'Cyber Safety: Practical tips on privacy settings, device protection, and online boundaries.',
          'Workplace Safety: POSH guidelines and institutional resolution frameworks.',
          'Laws & Statutes: Clear summaries of PWDVA, POSH Act, IT Act, and criminal protections.',
          'Get Help: Directory of verified national helplines including 112, 181, 1930, and One Stop Centres.',
        ],
        description:
          'Select any of the sections below to learn more about rights, procedures, and support structures.',
      },
    ],
    learnMoreLinks: [
      { title: 'Women’s Rights & Awareness Guides', url: '/rights' },
      { title: 'Cyber Safety Hub', url: '/cyber-safety' },
      { title: 'Workplace Safety Hub', url: '/workplace' },
      { title: 'Laws & Provisions Summary', url: '/laws' },
      { title: 'Emergency & Helplines Directory', url: '/get-help' },
    ],
    disclaimer:
      'NARI-SURAKSHA provides educational public awareness and cannot diagnose legal claims or provide personal legal representation.',
  },
};

// Existing static workflow data preserved for backwards compatibility and search indexing
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
