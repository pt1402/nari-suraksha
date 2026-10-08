export const APP_NAME = 'NARI-SURAKSHA';
export const APP_TAGLINE = "Women's Safety, Rights & Awareness Portal";

export const EMERGENCY_NUMBER = '112';
export const WOMEN_HELPLINE_NATIONAL = '1091';
export const CYBER_CRIME_HELPLINE = '1930';

export const GLOBAL_DISCLAIMER_TEXT =
  'This portal provides general awareness information only. It is not legal, medical, counselling, police, or emergency advice.';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
] as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Know Your Rights', path: '/rights' },
  { label: 'What Should I Do?', path: '/what-to-do' },
  { label: 'Cyber Safety', path: '/cyber-safety' },
  { label: 'Workplace Safety', path: '/workplace' },
  { label: 'Know the Law', path: '/laws' },
  { label: 'Get Help', path: '/get-help' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Quiz', path: '/quiz' },
] as const;

export const FOOTER_LINKS = [
  { label: 'About Portal', path: '/about' },
  { label: 'Survey / Feedback', path: '/survey' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Disclaimer', path: '/disclaimer' },
  { label: 'Verified Sources', path: '/sources' },
  { label: 'Accessibility', path: '/accessibility' },
] as const;
