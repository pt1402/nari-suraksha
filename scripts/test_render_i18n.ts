import i18n from '../src/i18n/config';
import enTranslation from '../src/locales/en/translation.json';
import hiTranslation from '../src/locales/hi/translation.json';
import mrTranslation from '../src/locales/mr/translation.json';

async function testRuntimeI18n() {
  console.log('Testing runtime i18n language switching and string resolution...\n');

  for (const lang of ['en', 'hi', 'mr'] as const) {
    await i18n.changeLanguage(lang);
    console.log(`[Language: ${lang}]`);

    // 1. Global disclaimer
    const globalDisc = i18n.t('common.global_disclaimer') || i18n.t('global_disclaimer');
    console.log(`  - Disclaimer: "${globalDisc.slice(0, 50)}..."`);
    if (!globalDisc || globalDisc === 'global_disclaimer' || globalDisc.startsWith('common.')) {
      throw new Error(`Invalid disclaimer in ${lang}: ${globalDisc}`);
    }

    // 2. Buttons
    const readGuide = i18n.t('common.read_guide');
    const readFullGuide = i18n.t('common.read_full_guide');
    const exploreDetails = i18n.t('common.explore_details');
    console.log(`  - Read Guide: "${readGuide}"`);
    console.log(`  - Read Full Guide: "${readFullGuide}"`);
    console.log(`  - Explore details: "${exploreDetails}"`);

    // 3. Section headings
    const intro = i18n.t('topic.plain_language_introduction');
    const whatItMay = i18n.t('topic.what_it_may_include');
    const examples = i18n.t('topic.illustrative_examples');
    const reviewed = i18n.t('common.reviewed');
    const saferStepsOverview = i18n.t('common.safer_steps_overview');
    console.log(`  - Intro: "${intro}"`);
    console.log(`  - What it may include: "${whatItMay}"`);
    console.log(`  - Examples: "${examples}"`);
    console.log(`  - Reviewed: "${reviewed}"`);
    console.log(`  - Safer Steps: "${saferStepsOverview}"`);

    // 4. Categories & Tags
    const catDomestic = i18n.t('rights.category_domestic');
    const catCyber = i18n.t('rights.category_cyber');
    const catWorkplace = i18n.t('rights.category_workplace');
    const tagDomestic = i18n.t('tag.domestic_violence');
    const tagStalking = i18n.t('tag.stalking');
    console.log(`  - Categories: ${catDomestic}, ${catCyber}, ${catWorkplace}`);
    console.log(`  - Tags: ${tagDomestic}, ${tagStalking}\n`);
  }

  console.log('✅ Runtime i18n tests completed successfully!');
}

testRuntimeI18n().catch((err) => {
  console.error('Test error:', err);
  process.exit(1);
});
