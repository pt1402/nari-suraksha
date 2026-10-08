import i18n from '../src/i18n/config';
import { getHelpResourcesData } from '../src/content';

async function testRuntimeI18n() {
  console.log('Testing runtime i18n language switching, verified help resources, and source registry...\n');

  for (const lang of ['en', 'hi', 'mr'] as const) {
    await i18n.changeLanguage(lang);
    console.log(`[Language: ${lang}]`);

    // 1. Global disclaimer
    const globalDisc = i18n.t('common.global_disclaimer') || i18n.t('global_disclaimer');
    console.log(`  - Disclaimer: "${globalDisc.slice(0, 50)}..."`);
    if (!globalDisc || globalDisc === 'global_disclaimer' || globalDisc.startsWith('common.')) {
      throw new Error(`Invalid disclaimer in ${lang}: ${globalDisc}`);
    }

    // 2. Verified badges and scope warnings
    const verifiedOfficial = i18n.t('common.verified_official_source');
    const programmeVerified = i18n.t('resource.national_programme_verified');
    const localDetailsWarning = i18n.t('resource.local_details_unverified_warning');
    const verifyContactWarning = i18n.t('resource.verify_contact_before_launch');
    console.log(`  - Verified Official Source: "${verifiedOfficial}"`);
    console.log(`  - National Programme Verified: "${programmeVerified}"`);
    console.log(`  - Local Details Warning: "${localDetailsWarning.slice(0, 50)}..."`);
    console.log(`  - Verify Contact Warning: "${verifyContactWarning.slice(0, 50)}..."`);

    // 3. Scope labels
    const scopeProg = i18n.t('resource.scope_national_programme');
    const scopeCont = i18n.t('resource.scope_national_contact');
    const scopePend = i18n.t('resource.scope_pending');
    console.log(`  - Scopes: ${scopeProg} | ${scopeCont} | ${scopePend}`);

    // 4. Sources page titles
    const sourcesTitle = i18n.t('sources.page_title');
    const claimVerified = i18n.t('sources.claim_verified');
    console.log(`  - Sources Title: "${sourcesTitle}"`);
    console.log(`  - Sources Claim Label: "${claimVerified}"`);

    // 5. Help Resources Data verification
    const resources = getHelpResourcesData(lang);
    const r112 = resources.find((r) => r.id === 'res-er-112');
    const r181 = resources.find((r) => r.id === 'res-whl-181');
    const rOsc = resources.find((r) => r.id === 'res-one-stop-centres');
    const rNcw = resources.find((r) => r.id === 'res-ncw-helpline');
    const rNalsa = resources.find((r) => r.id === 'res-nalsa-legal-aid');
    const rCyber = resources.find((r) => r.id === 'res-cyber-portal');

    if (!r112 || r112.verificationStatus !== 'verified' || r112.verificationScope !== 'national-contact') {
      throw new Error(`Invalid 112 resource in ${lang}`);
    }
    if (!r181 || r181.verificationStatus !== 'verified' || r181.verificationScope !== 'national-programme') {
      throw new Error(`Invalid 181 resource in ${lang}`);
    }
    if (!rOsc || rOsc.verificationStatus !== 'verified' || rOsc.verificationScope !== 'national-programme') {
      throw new Error(`Invalid OSC resource in ${lang}`);
    }
    if (!rNcw || rNcw.verificationStatus !== 'verified' || rNcw.verificationScope !== 'national-contact' || rNcw.contactValue !== '14490') {
      throw new Error(`Invalid NCW resource in ${lang}`);
    }
    if (!rNalsa || rNalsa.verificationStatus !== 'verified' || rNalsa.verificationScope !== 'national-contact' || rNalsa.contactValue !== '15100') {
      throw new Error(`Invalid NALSA resource in ${lang}`);
    }
    if (!rCyber || rCyber.verificationStatus !== 'needs-verification' || rCyber.verificationScope !== 'pending') {
      throw new Error(`Cyber portal should remain needs-verification in ${lang}`);
    }

    console.log(`  - Checked 6 Help Resources in ${lang}:`);
    console.log(`    * 112: ${r112.name} [${r112.verificationStatus} / ${r112.verificationScope}]`);
    console.log(`    * 181: ${r181.name} [${r181.verificationStatus} / ${r181.verificationScope}]`);
    console.log(`    * OSC: ${rOsc.name} [${rOsc.verificationStatus} / ${rOsc.verificationScope}]`);
    console.log(`    * NCW: ${rNcw.name} [${rNcw.verificationStatus} / ${rNcw.verificationScope} / ${rNcw.contactValue}]`);
    console.log(`    * NALSA: ${rNalsa.name} [${rNalsa.verificationStatus} / ${rNalsa.verificationScope} / ${rNalsa.contactValue}]`);
    console.log(`    * Cyber: ${rCyber.name} [${rCyber.verificationStatus} / ${rCyber.verificationScope}]\n`);
  }

  console.log('✅ All runtime i18n and verification registry tests passed successfully!');
}

testRuntimeI18n().catch((err) => {
  console.error('Test error:', err);
  process.exit(1);
});
