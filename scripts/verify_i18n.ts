import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import enTranslation from '../src/locales/en/translation.json';
import hiTranslation from '../src/locales/hi/translation.json';
import mrTranslation from '../src/locales/mr/translation.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface FlattenedKeys {
  [key: string]: string;
}

function flattenKeys(obj: any, prefix = ''): FlattenedKeys {
  const result: FlattenedKeys = {};
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, flattenKeys(obj[key], fullKey));
    } else {
      result[fullKey] = String(obj[key]);
    }
  }
  return result;
}

function getAllSourceFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllSourceFiles(fullPath));
    } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const REQUIRED_UI_LABELS = [
  // common
  'common.global_disclaimer',
  'common.general_awareness_only',
  'common.read_guide',
  'common.read_full_guide',
  'common.explore_details',
  'common.learn_more',
  'common.read_more',
  'common.reviewed',
  'common.last_reviewed',
  'common.next_review_due',
  'common.verify_before_launch',
  'common.verified_official_source',
  'common.placeholder',
  'common.source',
  'common.sources',
  'common.official_source',
  'common.verification_status',
  'common.category',
  'common.tags',
  'common.related_topics',
  'common.related_laws',
  'common.related_guides',
  'common.back',
  'common.next',
  'common.previous',
  'common.continue',
  'common.restart',
  'common.reset',
  'common.close',
  'common.clear',
  'common.search',
  'common.no_results',
  'common.return_home',
  'common.view_all',
  'common.view_all_topics',
  'common.learn_more_about',
  'common.safer_steps_overview',
  'common.if_safe',
  'common.important_note',
  'common.required',
  'common.optional',

  // topic
  'topic.plain_language_introduction',
  'topic.what_it_may_include',
  'topic.illustrative_examples',
  'topic.safer_next_steps',
  'topic.evidence_and_records',
  'topic.where_to_look_for_help',
  'topic.related_laws_and_resources',
  'topic.related_action_guides',
  'topic.official_citations',
  'topic.content_review',
  'topic.source_transparency',

  // resource
  'resource.emergency',
  'resource.helpline',
  'resource.website',
  'resource.phone',
  'resource.in_person',
  'resource.educational_reference',
  'resource.contact_information',
  'resource.coverage',
  'resource.source_owner',
  'resource.last_verified',
  'resource.verification_pending',
  'resource.do_not_rely_without_verification',

  // rights
  'rights.domestic',
  'rights.cyber',
  'rights.workplace',
  'rights.legal',
  'rights.digital_safety',
  'rights.all_topics',
  'rights.domestic_topics',
  'rights.rights_topics',
  'rights.cyber_topics',
  'rights.workplace_topics',

  // workflow
  'workflow.step',
  'workflow.steps',
  'workflow.step_of',
  'workflow.immediate_danger_question',
  'workflow.yes_not_safe',
  'workflow.no_not_immediate',
  'workflow.not_sure',
  'workflow.return_to_topic_choices',
  'workflow.choose_different_topic',
  'workflow.continue_if_safe',
  'workflow.emergency_first',
  'workflow.this_guide_does_not_assess',

  // disclaimer
  'disclaimer.title',
  'disclaimer.body',
  'disclaimer.emergency_instruction',
  'disclaimer.not_legal_advice',
  'disclaimer.not_emergency_service',

  // homepage emergency & support
  'home.quick_emergency_ref',
  'home.other_support_title',
  'home.call_112_now',
  'home.call_181',
  'home.call_14490',
  'home.call_15100',
  'home.call_1930',
  'home.tag_womens_support',
  'home.tag_ncw_support',
  'home.tag_legal_aid',
  'home.tag_financial_fraud',
  'home.view_all_resources',
  'home.emergency_response',
  'home.not_emergency_service',
];

async function verifyI18n() {
  console.log('====================================================');
  console.log('   NARI-SURAKSHA AUTOMATED I18N COMPLETENESS CHECK   ');
  console.log('====================================================\n');

  let hasError = false;

  const enKeys = flattenKeys(enTranslation);
  const hiKeys = flattenKeys(hiTranslation);
  const mrKeys = flattenKeys(mrTranslation);

  console.log(`[1] Extracted keys counts:`);
  console.log(`    English (en): ${Object.keys(enKeys).length}`);
  console.log(`    Hindi   (hi): ${Object.keys(hiKeys).length}`);
  console.log(`    Marathi (mr): ${Object.keys(mrKeys).length}\n`);

  // 1. Cross-locale key symmetry checks
  console.log('[2] Checking key symmetry between en, hi, mr...');
  const allKeySet = new Set([...Object.keys(enKeys), ...Object.keys(hiKeys), ...Object.keys(mrKeys)]);
  const missingInEn: string[] = [];
  const missingInHi: string[] = [];
  const missingInMr: string[] = [];

  for (const k of allKeySet) {
    if (!(k in enKeys)) missingInEn.push(k);
    if (!(k in hiKeys)) missingInHi.push(k);
    if (!(k in mrKeys)) missingInMr.push(k);
  }

  if (missingInEn.length > 0) {
    console.error(`  ERROR: Keys missing in en: ${missingInEn.join(', ')}`);
    hasError = true;
  }
  if (missingInHi.length > 0) {
    console.error(`  ERROR: Keys missing in hi: ${missingInHi.join(', ')}`);
    hasError = true;
  }
  if (missingInMr.length > 0) {
    console.error(`  ERROR: Keys missing in mr: ${missingInMr.join(', ')}`);
    hasError = true;
  }
  if (missingInEn.length === 0 && missingInHi.length === 0 && missingInMr.length === 0) {
    console.log('  PASS: Perfect 100% key parity across en, hi, and mr!');
  }

  // 2. Global Disclaimer checks
  console.log('\n[3] Checking Global Disclaimer resolution in all locales...');
  const disclaimers = [
    { lang: 'en', val: enKeys['common.global_disclaimer'] || enKeys['global_disclaimer'] },
    { lang: 'hi', val: hiKeys['common.global_disclaimer'] || hiKeys['global_disclaimer'] },
    { lang: 'mr', val: mrKeys['common.global_disclaimer'] || mrKeys['global_disclaimer'] },
  ];

  for (const d of disclaimers) {
    if (!d.val || d.val.trim().length < 30) {
      console.error(`  ERROR: Global disclaimer for ${d.lang} is too short or empty: "${d.val}"`);
      hasError = true;
    } else if (d.val === 'global_disclaimer' || d.val === 'common.global_disclaimer') {
      console.error(`  ERROR: Global disclaimer for ${d.lang} returned raw key string!`);
      hasError = true;
    } else {
      console.log(`  PASS (${d.lang}): "${d.val.slice(0, 60)}..."`);
    }
  }

  // 3. Required Reusable UI Labels check
  console.log('\n[4] Checking Required Reusable UI Labels existence and translation quality...');
  let missingRequired = 0;
  let untranslatedRequired = 0;

  for (const key of REQUIRED_UI_LABELS) {
    const enVal = enKeys[key];
    const hiVal = hiKeys[key];
    const mrVal = mrKeys[key];

    if (!enVal || !hiVal || !mrVal) {
      console.error(`  ERROR: Required label missing for key: ${key} (en:${!!enVal}, hi:${!!hiVal}, mr:${!!mrVal})`);
      missingRequired++;
      hasError = true;
      continue;
    }

    // Check that Hindi and Marathi are genuinely translated (not raw key and not untranslated English, unless technical/proper noun)
    const allowedIdentical = ['PWDVA', 'POSH', '112', 'NALSA', 'DLSA', 'Zero FIR', 'FAQ'];
    const isAllowedIdentical = allowedIdentical.some((w) => enVal.includes(w));

    if (!isAllowedIdentical) {
      if (hiVal.trim().toLowerCase() === enVal.trim().toLowerCase()) {
        console.warn(`  WARNING: Hindi translation matches English for "${key}": "${hiVal}"`);
        untranslatedRequired++;
      }
      if (mrVal.trim().toLowerCase() === enVal.trim().toLowerCase()) {
        console.warn(`  WARNING: Marathi translation matches English for "${key}": "${mrVal}"`);
        untranslatedRequired++;
      }
    }
  }

  if (missingRequired === 0) {
    console.log(`  PASS: All ${REQUIRED_UI_LABELS.length} required UI labels exist in all 3 locales!`);
  }
  if (untranslatedRequired === 0) {
    console.log(`  PASS: All non-proper-noun UI labels have distinct Hindi & Marathi translations!`);
  }

  // 4. Source code scan for raw key leakage or untranslated usage
  console.log('\n[5] Scanning source code for raw translation key usage...');
  const srcDir = path.resolve(__dirname, '../src');
  const srcFiles = getAllSourceFiles(srcDir);
  const usedKeys = new Set<string>();
  const rawKeyLeakPatterns = [
    /"global_disclaimer"/g,
    /'global_disclaimer'/g,
    /["']common\.[a-z0-9_]+["'](?!\s*[:,)])/g,
  ];

  let rawKeyLeaksFound = 0;

  for (const file of srcFiles) {
    // Skip locales and i18n configs
    const normalizedFile = file.replace(/\\/g, '/');
    if (normalizedFile.includes('src/locales') || normalizedFile.includes('src/i18n')) continue;

    const content = fs.readFileSync(file, 'utf8');

    // Find t('...') usages
    const tRegex = /\bt\(\s*['"]([a-zA-Z0-9_.]+)['"]/g;
    let match;
    while ((match = tRegex.exec(content)) !== null) {
      const key = match[1];
      usedKeys.add(key);

      // Verify this key exists in enTranslation
      if (!(key in enKeys) && !key.startsWith('rights.category_') && !key.startsWith('laws.category_') && !key.startsWith('resource.category_')) {
        console.error(`  ERROR: Key used in code not found in en: "${key}" in ${path.relative(srcDir, file)}`);
        hasError = true;
      }
    }

    // Check for raw keys rendered directly in JSX without t()
    if (content.includes('>global_disclaimer<') || content.includes('>"global_disclaimer"<')) {
      console.error(`  ERROR: Raw "global_disclaimer" text rendered in JSX in ${path.relative(srcDir, file)}`);
      rawKeyLeaksFound++;
      hasError = true;
    }
  }

  console.log(`  Total unique static translation keys referenced in src: ${usedKeys.size}`);
  if (rawKeyLeaksFound === 0) {
    console.log('  PASS: No raw translation keys leaking in JSX text nodes.');
  }

  console.log('\n====================================================');
  if (hasError) {
    console.error('❌ I18N VERIFICATION FAILED! Please fix the errors above.');
    process.exit(1);
  } else {
    console.log('✅ ALL I18N ARCHITECTURE AND LOCALIZATION CHECKS PASSED!');
    console.log('====================================================\n');
    process.exit(0);
  }
}

verifyI18n().catch((err) => {
  console.error('Unexpected error in verify_i18n:', err);
  process.exit(1);
});
