import i18n from '../src/i18n/config';
import { getHelpResourcesData } from '../src/content';

function isClickablePhoneNumber(resource: any): boolean {
  if (resource.verificationStatus !== 'verified') return false;
  if (resource.contactType !== 'phone') return false;
  if (!resource.contactValue) return false;
  const cleanPhone = (resource.contactValue || '').trim();
  return /^\+?[0-9]{3,15}$/.test(cleanPhone);
}

async function testRuntimeI18n() {
  console.log('Testing runtime i18n, clickable verified phone numbers, and simplified cards...\n');

  for (const lang of ['en', 'hi', 'mr'] as const) {
    await i18n.changeLanguage(lang);
    console.log(`[Language: ${lang}]`);

    // 1. Phone action labels
    const call112 = i18n.t('resource.call_112');
    const call181 = i18n.t('resource.call_181');
    const call14490 = i18n.t('resource.call_14490');
    const call15100 = i18n.t('resource.call_15100');
    const call1930 = i18n.t('resource.call_1930_financial_fraud');
    const sourceDetails = i18n.t('resource.source_details');
    const inPersonRef = i18n.t('resource.in_person_reference');
    const localNotice = i18n.t('resource.local_details_require_verification');

    console.log(`  - 112: "${call112}"`);
    console.log(`  - 181: "${call181}"`);
    console.log(`  - 14490: "${call14490}"`);
    console.log(`  - 15100: "${call15100}"`);
    console.log(`  - 1930: "${call1930}"`);
    console.log(`  - Source Details: "${sourceDetails}"`);
    console.log(`  - In-person: "${inPersonRef}"`);
    console.log(`  - Local Notice: "${localNotice.slice(0, 45)}..."`);

    // 2. Validate Help Resources Data
    const resources = getHelpResourcesData(lang);
    const r112 = resources.find((r) => r.id === 'res-er-112');
    const r181 = resources.find((r) => r.id === 'res-whl-181');
    const r14490 = resources.find((r) => r.id === 'res-ncw-helpline');
    const r15100 = resources.find((r) => r.id === 'res-nalsa-legal-aid');
    const r1930 = resources.find((r) => r.id === 'res-cyber-portal');
    const rOsc = resources.find((r) => r.id === 'res-one-stop-centres');
    const rPending = resources.find((r) => r.id === 'res-local-counseling');

    if (!r112 || !isClickablePhoneNumber(r112) || r112.contactValue !== '112') {
      throw new Error(`112 should be clickable phone in ${lang}`);
    }
    if (!r181 || !isClickablePhoneNumber(r181) || r181.contactValue !== '181') {
      throw new Error(`181 should be clickable phone in ${lang}`);
    }
    if (!r14490 || !isClickablePhoneNumber(r14490) || r14490.contactValue !== '14490') {
      throw new Error(`14490 should be clickable phone in ${lang}`);
    }
    if (!r15100 || !isClickablePhoneNumber(r15100) || r15100.contactValue !== '15100') {
      throw new Error(`15100 should be clickable phone in ${lang}`);
    }
    if (!r1930 || !isClickablePhoneNumber(r1930) || r1930.contactValue !== '1930') {
      throw new Error(`1930 should be clickable phone in ${lang}`);
    }

    // In-person and pending must NOT be clickable phones:
    if (!rOsc || isClickablePhoneNumber(rOsc)) {
      throw new Error(`One Stop Centre must NOT be clickable phone in ${lang}`);
    }
    if (!rPending || isClickablePhoneNumber(rPending)) {
      throw new Error(`Pending resource must NOT be clickable phone in ${lang}`);
    }

    console.log(`  - All 5 verified phone numbers (112, 181, 14490, 15100, 1930) are clickable.`);
    console.log(`  - In-person (OSC) and pending resource are verified non-clickable.\n`);
  }

  console.log('✅ All public-facing resource card and phone link tests passed successfully!');
}

testRuntimeI18n().catch((err) => {
  console.error('Test error:', err);
  process.exit(1);
});
