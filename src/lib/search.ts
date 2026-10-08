import Fuse from 'fuse.js';
import { SearchIndexItem, SearchResultItem } from '@/types/search';
import {
  getTopicsData,
  getLawsData,
  getHelpResourcesData,
  getFaqsData,
  getWorkflowsData,
  getSafeNextStepsFlows,
  getQuizzesData,
  getOrganizationsData,
} from '@/content';
import { Language } from '@/types/content';

// Conservative synonyms for MVP topics and statutes
const TOPIC_SYNONYMS: Record<string, string[]> = {
  'domestic-violence': [
    'domestic violence',
    'domestic abuse',
    'marital violence',
    'in-laws cruelty',
    'husband abuse',
    'shared household',
    'domestic cruelty',
    'home safety',
  ],
  'sexual-harassment': [
    'sexual harassment',
    'eve teasing',
    'unwelcome touch',
    'molestation',
    'indecent gesture',
    'harassment',
    'touching',
  ],
  stalking: [
    'stalking',
    'following',
    'shadowing',
    'tracking',
    'loitering',
    'chasing',
    'watcher',
    'physical stalking',
  ],
  cyberstalking: [
    'cyberstalking',
    'online stalking',
    'digital tracking',
    'gps tracker',
    'airtag tracking',
    'spyware',
    'monitoring messages',
    'social media stalking',
  ],
  'dowry-harassment': [
    'dowry harassment',
    'dowry demand',
    'stridhan',
    'wedding gifts',
    'dowry prohibition',
    'marriage demands',
    'dowry torture',
  ],
  'fake-profiles-impersonation': [
    'fake account',
    'fake profile',
    'identity theft',
    'impersonation',
    'imposter',
    'catfishing',
    'clone account',
    'duplicate account',
  ],
  'image-based-abuse': [
    'image based abuse',
    'morphed photo',
    'blackmail',
    'intimate photos',
    'sextortion',
    'photo leak',
    'deepfake',
    'private picture threat',
  ],
  'online-privacy-consent': [
    'online privacy',
    'app permissions',
    '2fa',
    'two factor authentication',
    'account security',
    'privacy settings',
    'location tracking',
  ],
  'financial-scams-upi-safety': [
    'OTP',
    'financial scams',
    'upi fraud',
    'qr code scam',
    'phishing',
    'bank fraud',
    'fake job scam',
    'part time job scam',
    'pin scam',
  ],
  'workplace-sexual-harassment': [
    'workplace harassment',
    'office harassment',
    'POSH',
    'ICC',
    'internal complaints committee',
    'Internal Committee',
    'LCC',
    'Local Committee',
    'workplace abuse',
    'boss harassment',
    'quid pro quo',
  ],
};

const LAW_SYNONYMS: Record<string, string[]> = {
  'law-dv-act-2005': [
    'PWDVA',
    'domestic violence act',
    'protection order',
    'shared household rights',
    'section 18',
    'maintenance order',
  ],
  'law-posh-act-2013': [
    'POSH Act',
    'ICC',
    'internal committee',
    'local committee',
    'workplace law',
    'vishaka guidelines',
    'section 4',
  ],
  'law-dowry-prohibition-1961': [
    'dowry prohibition act',
    'stridhan rights',
    'dowry act',
    'section 3',
  ],
  'law-it-act-2000': [
    'IT Act',
    'information technology act',
    'section 66E',
    'section 67',
    'section 67A',
    'cyber law',
    'privacy section',
  ],
  'law-bns-placeholder': [
    'BNS',
    'Bharatiya Nyaya Sanhita',
    'criminal law',
    'stalking section',
    'arrest procedure',
  ],
};

/**
 * Builds the entire static in-memory search index across all content types.
 */
export function buildSearchIndex(): SearchIndexItem[] {
  const items: SearchIndexItem[] = [];
  const languages: Language[] = ['en', 'hi', 'mr'];

  languages.forEach((lang) => {
    const langTopics = getTopicsData(lang);
    const langLaws = getLawsData(lang);
    const langResources = getHelpResourcesData(lang);
    const langFaqs = getFaqsData(lang);
    const langWorkflows = getWorkflowsData(lang);
    const langFlows = getSafeNextStepsFlows(lang);
    const langQuizzes = getQuizzesData(lang);

    // 1. Guides / Awareness Topics
    langTopics.forEach((topic) => {
      const syns = lang === 'en' ? (TOPIC_SYNONYMS[topic.slug] || []) : [];
      const contentText = [
        topic.plainIntroduction,
        (topic.whatItMayInclude || []).join(' '),
        (topic.examples || []).join(' '),
        (topic.saferNextSteps || []).join(' '),
        (topic.evidenceAndRecordsSafety || []).join(' '),
        (topic.whereToLookForHelp || []).join(' '),
      ].join(' ');

      items.push({
        id: `${lang}-topic-${topic.id}`,
        title: topic.title,
        type: 'Guide',
        description: topic.summary,
        content: contentText,
        url: `/rights/${topic.slug}`,
        tags: topic.tags || [],
        synonyms: syns,
        category: topic.category,
        verificationStatus: topic.verificationStatus,
      });
    });

    // 2. Laws / Statutes
    langLaws.forEach((law) => {
      const syns = lang === 'en' ? (LAW_SYNONYMS[law.id] || []) : [];
      const provisionsText = (law.keyProvisions || [])
        .map((p) => `${p.section} ${p.explanation}`)
        .join(' ');
      const contentText = `${law.actName} ${law.plainLanguageSummary} ${provisionsText} ${law.penaltyOrEnforcementNote || ''}`;

      items.push({
        id: `${lang}-law-${law.id}`,
        title: law.shortTitle,
        type: 'Law',
        description: law.overview,
        content: contentText,
        url: '/laws',
        tags: [law.category, 'Statute', 'Law'],
        synonyms: syns,
        category: law.category,
        verificationStatus: law.verificationStatus,
      });
    });

    // 3. Help Resources
    langResources.forEach((resource) => {
      items.push({
        id: `${lang}-resource-${resource.id}`,
        title: resource.name,
        type: 'Help',
        description: resource.description,
        content: `${resource.contactValue} ${resource.category} ${resource.contactType} ${resource.safeDisplayNote || ''} ${resource.sourceOwner}`,
        url: '/get-help',
        tags: [resource.category, 'Helpline', 'Support', resource.contactValue].filter(Boolean),
        synonyms: [
          resource.contactValue,
          resource.isEmergency112 ? 'emergency 112 police ambulance fire 112' : '',
          resource.category.toLowerCase(),
        ].filter(Boolean),
        category: resource.category,
        verificationStatus: resource.verificationStatus,
        verificationBadge:
          resource.verificationStatus === 'verified'
            ? 'Verified Official Source'
            : 'Verify from official source before public launch',
      });
    });

    // 4. FAQs
    langFaqs.forEach((faq) => {
      items.push({
        id: `${lang}-faq-${faq.id}`,
        title: faq.question,
        type: 'FAQ',
        description: faq.answer,
        content: `${faq.question} ${faq.answer} ${(faq.tags || []).join(' ')}`,
        url: '/faq',
        tags: faq.tags || [],
        synonyms: ['faq', 'question', 'answers', faq.category],
        category: faq.category,
        verificationStatus: faq.verificationStatus,
      });
    });

    // 5. Workflows / Action Steps
    langWorkflows.forEach((guide) => {
      const stepsText = (guide.steps || [])
        .map((s) => `${s.title} ${s.description} ${(s.recommendedActions || []).join(' ')}`)
        .join(' ');

      items.push({
        id: `${lang}-workflow-${guide.id}`,
        title: guide.title,
        type: 'Steps',
        description: guide.summary,
        content: `${guide.scenario} ${guide.disclaimer} ${stepsText}`,
        url: '/what-to-do',
        tags: [guide.category, 'Action Steps', 'Safe Protocol'],
        synonyms: ['next steps', 'what to do', 'action flow', guide.category],
        category: guide.category,
      });
    });

    // Guided Next-Steps Flows
    Object.values(langFlows).forEach((flow) => {
      const stepsText = (flow.steps || [])
        .map((s) => `${s.title} ${s.description} ${(s.options || []).join(' ')}`)
        .join(' ');

      items.push({
        id: `${lang}-guided-flow-${flow.concernId}`,
        title: flow.title,
        type: 'Steps',
        description: flow.shortExplanation,
        content: `${flow.title} ${flow.shortExplanation} ${stepsText}`,
        url: '/what-to-do',
        tags: ['Explore Safe Next Steps', 'Guided Flow', flow.label],
        synonyms: ['explore safe next steps', 'safe next steps', 'what to do', flow.label.toLowerCase()],
      });
    });

    // 6. Quizzes
    langQuizzes.forEach((quiz) => {
      const questionsText = (quiz.questions || []).map((q) => q.question).join(' ');

      items.push({
        id: `${lang}-quiz-${quiz.id}`,
        title: quiz.title,
        type: 'Quiz',
        description: quiz.description,
        content: `${quiz.title} ${quiz.description} ${questionsText}`,
        url: '/quiz',
        tags: ['Quiz', 'Awareness Check', 'Self Assessment'],
        synonyms: ['quiz', 'test', 'knowledge check'],
      });
    });

    // 7. Free Legal Aid Guide
    const legalAidMeta = {
      en: {
        title: 'Free Legal Aid for Women (Section 12(c))',
        description: 'Women may be eligible to seek free legal services under Section 12(c) of the Legal Services Authorities Act, 1987. Review official NALSA guidance.',
        content: 'Article 39A Section 12(c) Legal Services Authorities Act 1987 NALSA 15100 DLSA TLSC State Legal Services Authority panel advocate free legal counsel legal advice court assistance legal aid clinics',
        tags: ['Free Legal Aid', 'Section 12(c)', 'NALSA', '15100', 'DLSA', 'TLSC', 'Article 39A'],
        synonyms: ['free legal aid', 'section 12(c)', 'nalsa', '15100', 'dlsa', 'tlsc', 'free lawyer', 'article 39a', 'legal aid helpline'],
      },
      hi: {
        title: 'महिलाओं के लिए मुफ्त कानूनी सहायता (धारा 12(c))',
        description: 'विधिक सेवा प्राधिकरण अधिनियम, 1987 की धारा 12(c) के तहत महिलाएं मुफ्त कानूनी सेवाएं प्राप्त करने के लिए पात्र हैं।',
        content: 'अनुच्छेद 39A धारा 12(c) विधिक सेवा प्राधिकरण अधिनियम 1987 नालसा NALSA 15100 डीएलएसए DLSA टीएलएससी TLSC मुफ्त कानूनी सहायता वकील परामर्श',
        tags: ['Free Legal Aid', 'Section 12(c)', 'NALSA', '15100', 'DLSA', 'TLSC', 'कानूनी सहायता', 'नालसा'],
        synonyms: ['मुफ्त कानूनी सहायता', 'धारा 12(c)', 'नालसा', '15100', 'डीएलएसए', 'टीएलएससी', 'free legal aid', 'nalsa', '15100'],
      },
      mr: {
        title: 'महिलांसाठी मोफत कायदेशीर मदत (कलम 12(c))',
        description: 'विधी सेवा प्राधिकरण कायदा, 1987 च्या कलम 12(c) अंतर्गत महिला मोफत कायदेशीर सेवा मिळवण्यासाठी पात्र आहेत.',
        content: 'अनुच्छेद 39A कलम 12(c) विधी सेवा प्राधिकरण कायदा 1987 नालसा NALSA 15100 डीएलएसए DLSA टीएलएससी TLSC मोफत कायदेशीर मदत वकील सल्ला',
        tags: ['Free Legal Aid', 'Section 12(c)', 'NALSA', '15100', 'DLSA', 'TLSC', 'कायदेशीर मदत', 'नालसा'],
        synonyms: ['मोफत कायदेशीर मदत', 'कलम 12(c)', 'नालसा', '15100', 'डीएलएसए', 'टीएलएससी', 'free legal aid', 'nalsa', '15100'],
      },
    };
    const laInfo = legalAidMeta[lang];
    items.push({
      id: `${lang}-legal-aid-guide`,
      title: laInfo.title,
      type: 'Guide',
      description: laInfo.description,
      content: laInfo.content,
      url: '/rights/free-legal-aid',
      tags: laInfo.tags,
      synonyms: laInfo.synonyms,
      category: 'rights',
      verificationStatus: 'verified',
    });

    // 8. Organizations Directory
    const langOrgs = getOrganizationsData(lang);
    langOrgs.forEach((org) => {
      items.push({
        id: `${lang}-org-${org.id}`,
        title: org.name,
        type: 'Help',
        description: `${org.focusArea} — ${org.description}`,
        content: `${org.name} ${org.focusArea} ${org.description} ${org.location} ${org.address || ''} ${org.websiteUrl}`,
        url: '/get-help/organizations',
        tags: [org.focusArea, 'Organization', 'Support Services', org.location],
        synonyms: [
          org.name.toLowerCase(),
          org.focusArea.toLowerCase(),
          org.location.toLowerCase(),
          'organization',
          'support service',
          'ngo',
        ],
        category: org.focusArea,
        verificationStatus: 'needs-verification',
        verificationBadge: 'Organization Reference',
      });
    });
  });

  return items;
}

// In-memory singleton index
let cachedIndex: SearchIndexItem[] | null = null;
let cachedFuse: Fuse<SearchIndexItem> | null = null;

export function getGlobalSearchIndex(): SearchIndexItem[] {
  if (!cachedIndex) {
    cachedIndex = buildSearchIndex();
  }
  return cachedIndex;
}

export function getGlobalFuseInstance(): Fuse<SearchIndexItem> {
  if (!cachedFuse) {
    const items = getGlobalSearchIndex();
    cachedFuse = new Fuse(items, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'synonyms', weight: 0.25 },
        { name: 'tags', weight: 0.15 },
        { name: 'description', weight: 0.15 },
        { name: 'content', weight: 0.05 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }
  return cachedFuse;
}

/**
 * Searches in-memory index without transmitting or recording the query.
 */
export function searchContent(query: string, maxResults = 50): SearchResultItem[] {
  const normalized = query.trim().toLowerCase();
  if (normalized.length < 2) {
    return [];
  }

  const fuse = getGlobalFuseInstance();
  const fuseResults = fuse.search(normalized);

  return fuseResults.slice(0, maxResults).map((res) => ({
    ...res.item,
    matches: res.matches,
    score: res.score,
  }));
}
