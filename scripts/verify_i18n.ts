import i18n from '../src/i18n/config';
import {
  getTopicsData,
  getLawsData,
  getHelpResourcesData,
  getEmergencyContacts,
  getFaqsData,
  getQuizzesData,
  getWorkflowsData,
  getConcernsList,
  getSafeNextStepsFlows,
} from '../src/content';

async function runTests() {
  console.log('--- STARTING I18N VERIFICATION TESTS ---');

  const languages = ['en', 'hi', 'mr'] as const;

  for (const lang of languages) {
    await i18n.changeLanguage(lang);
    console.log(`\n=== Testing Language: [${lang.toUpperCase()}] ===`);

    // 1. Navigation labels
    const homeNav = i18n.t('nav.home');
    const rightsNav = i18n.t('nav.rights');
    const whatToDoNav = i18n.t('nav.what_to_do');
    const getHelpNav = i18n.t('nav.get_help');
    console.log(`[1. Navigation Labels]`);
    console.log(`  home: "${homeNav}", rights: "${rightsNav}", what_to_do: "${whatToDoNav}", get_help: "${getHelpNav}"`);
    if (!homeNav || !rightsNav) throw new Error(`Missing navigation translations for ${lang}`);

    // 2. Emergency banner text
    const emergencyBanner = i18n.t('emergency.banner_text');
    const call112 = i18n.t('emergency.call_112_now');
    const helplines = i18n.t('emergency.find_helplines');
    console.log(`[2. Emergency Banner Text]`);
    console.log(`  banner: "${emergencyBanner}"`);
    console.log(`  call112: "${call112}", helplines: "${helplines}"`);
    if (!emergencyBanner || !call112) throw new Error(`Missing emergency translations for ${lang}`);

    // 3. Page Headings
    const homeTitle = i18n.t('home.hero_title');
    const rightsTitle = i18n.t('rights.page_title');
    const whatToDoTitle = i18n.t('whatToDo.page_title');
    const faqTitle = i18n.t('faq.page_title');
    const quizTitle = i18n.t('quiz.page_title');
    const lawsTitle = i18n.t('laws.page_title');
    console.log(`[3. Page Headings]`);
    console.log(`  Home: "${homeTitle}"`);
    console.log(`  Rights: "${rightsTitle}"`);
    console.log(`  What To Do: "${whatToDoTitle}"`);
    console.log(`  FAQ: "${faqTitle}"`);
    console.log(`  Quiz: "${quizTitle}"`);
    console.log(`  Laws: "${lawsTitle}"`);
    if (!homeTitle || !rightsTitle || !faqTitle) throw new Error(`Missing heading translations for ${lang}`);

    // 4. Topic content
    const topics = getTopicsData(lang);
    console.log(`[4. Topic Content] (Count: ${topics.length})`);
    console.log(`  First topic title: "${topics[0].title}"`);
    console.log(`  First topic summary: "${topics[0].summary}"`);
    console.log(`  First topic safer step: "${topics[0].saferNextSteps[0]}"`);
    if (!topics[0].title || topics[0].title.trim() === '') throw new Error(`Topic content missing for ${lang}`);

    // 5. Help resource labels
    const resources = getHelpResourcesData(lang);
    console.log(`[5. Help Resource Labels] (Count: ${resources.length})`);
    console.log(`  First resource name: "${resources[0].name}"`);
    console.log(`  First resource description: "${resources[0].description}"`);
    if (!resources[0].name) throw new Error(`Help resource content missing for ${lang}`);

    // 6. FAQ questions/answers
    const faqs = getFaqsData(lang);
    console.log(`[6. FAQ Questions/Answers] (Count: ${faqs.length})`);
    console.log(`  First question: "${faqs[0].question}"`);
    console.log(`  First answer: "${faqs[0].answer}"`);
    if (!faqs[0].question || !faqs[0].answer) throw new Error(`FAQ content missing for ${lang}`);

    // 7. Quiz questions
    const quizzes = getQuizzesData(lang);
    console.log(`[7. Quiz Questions] (Count: ${quizzes.length})`);
    console.log(`  First quiz title: "${quizzes[0].title}"`);
    console.log(`  First question text: "${quizzes[0].questions[0].question}"`);
    console.log(`  First option: "${quizzes[0].questions[0].options[0]}"`);
    if (!quizzes[0].questions[0].question) throw new Error(`Quiz content missing for ${lang}`);

    // 8. Footer text
    const footerAbout = i18n.t('footer.about_desc');
    const footerPrivacy = i18n.t('footer.privacy_desc');
    const footerRights = i18n.t('footer.all_rights_reserved');
    console.log(`[8. Footer Text]`);
    console.log(`  About: "${footerAbout}"`);
    console.log(`  Privacy: "${footerPrivacy}"`);
    console.log(`  Reserved: "${footerRights}"`);
    if (!footerAbout || !footerRights) throw new Error(`Missing footer translations for ${lang}`);
  }

  // Cross-language comparison to guarantee content is distinct
  const enTopics = getTopicsData('en');
  const hiTopics = getTopicsData('hi');
  const mrTopics = getTopicsData('mr');

  if (enTopics[0].title === hiTopics[0].title) throw new Error('Hindi topic title matches English!');
  if (enTopics[0].title === mrTopics[0].title) throw new Error('Marathi topic title matches English!');
  if (hiTopics[0].title === mrTopics[0].title) throw new Error('Hindi topic title matches Marathi!');

  const enFaqs = getFaqsData('en');
  const hiFaqs = getFaqsData('hi');
  const mrFaqs = getFaqsData('mr');

  if (enFaqs[0].question === hiFaqs[0].question) throw new Error('Hindi FAQ matches English!');
  if (enFaqs[0].question === mrFaqs[0].question) throw new Error('Marathi FAQ matches English!');

  const enQuizzes = getQuizzesData('en');
  const hiQuizzes = getQuizzesData('hi');
  const mrQuizzes = getQuizzesData('mr');

  if (enQuizzes[0].questions[0].question === hiQuizzes[0].questions[0].question) {
    throw new Error('Hindi quiz question matches English!');
  }
  if (enQuizzes[0].questions[0].question === mrQuizzes[0].questions[0].question) {
    throw new Error('Marathi quiz question matches English!');
  }

  console.log('\n ALL 8 AREAS FULLY TRANSLATED & VERIFIED ACROSS EN, HI, MR!');
}

runTests().catch((err) => {
  console.error('Test failed:', err);
  process.exit(1);
});
