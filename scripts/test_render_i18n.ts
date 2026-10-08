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

    // 3. Validate Homepage Emergency Contacts separation
    const { emergencyContacts: contacts } = await import(`../src/content/${lang}/resources`);
    const emergencyOnly112 = contacts.filter((c: any) => c.isClickableEmergency);
    if (emergencyOnly112.length !== 1 || emergencyOnly112[0].number !== '112') {
      throw new Error(`Exactly one contact (112) must have isClickableEmergency: true in ${lang}`);
    }

    const nonEmergency112 = contacts.filter((c: any) => c.number !== '112');
    for (const nec of nonEmergency112) {
      if (nec.isClickableEmergency) {
        throw new Error(`Contact ${nec.number} must NOT have isClickableEmergency: true in ${lang}`);
      }
    }

    // 4. Validate Homepage Specific I18n Keys
    const homeLabels = [
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

    for (const key of homeLabels) {
      const val = i18n.t(key);
      if (!val || val === key) {
        throw new Error(`Missing or unresolved translation for key ${key} in ${lang}`);
      }
    }

    // 5. Search test for resource numbers
    const { searchContent } = await import('../src/lib/search');
    const search112 = searchContent('112');
    const search181 = searchContent('181');
    const search1930 = searchContent('1930');
    const search14490 = searchContent('14490');
    const search15100 = searchContent('15100');

    if (!search112.some((r) => r.title.includes('112') || r.description.includes('112'))) {
      throw new Error(`Search for 112 should return ERSS 112 in ${lang}`);
    }
    if (!search181.some((r) => r.title.includes('181') || r.description.includes('181'))) {
      throw new Error(`Search for 181 should return Women Helpline in ${lang}`);
    }
    if (!search1930.some((r) => r.title.includes('1930') || r.description.includes('1930'))) {
      throw new Error(`Search for 1930 should return Cyber Crime in ${lang}`);
    }
    if (!search14490.some((r) => r.id.includes('res-ncw-helpline') || r.title.includes('NCW') || r.content.includes('14490'))) {
      throw new Error(`Search for 14490 should return NCW Helpline in ${lang}`);
    }
    if (!search15100.some((r) => r.id.includes('res-nalsa-legal-aid') || r.title.includes('NALSA') || r.content.includes('15100'))) {
      throw new Error(`Search for 15100 should return NALSA Legal Aid in ${lang}`);
    }
    console.log(`  - Search correctly resolves numbers 112, 181, 1930, 14490, 15100 in ${lang}.\n`);
  }

  console.log('✅ All public-facing resource card, search, and homepage separation tests passed successfully!');
}

testRuntimeI18n().catch((err) => {
  console.error('Test error:', err);
  process.exit(1);
});
