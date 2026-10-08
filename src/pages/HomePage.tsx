import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Laptop,
  Briefcase,
  Scale,
  PhoneCall,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Info,
} from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { FeatureCard } from '@/components/common/FeatureCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useLanguage } from '@/hooks/useLanguage';

export const HomePage: React.FC = () => {
  useDocumentTitle('Home');
  const { topicsData, helpResourcesData, t } = useLanguage();

  // 1. Single Emergency 112 Resource
  const emergency112Resource = helpResourcesData.find(
    (r) => r.isEmergency112 === true || r.id === 'res-er-112'
  );

  // Defensive validation in development
  if (import.meta.env.DEV) {
    if (emergency112Resource && emergency112Resource.contactValue !== '112') {
      console.warn(
        `[Safety Warning] Emergency quick-reference resource must have contactValue '112', but found '${emergency112Resource.contactValue}'!`
      );
    }
  }

  // 2. Specific Non-Emergency Support Resources
  const supportConfigs = [
    {
      id: 'res-whl-181',
      tagKey: 'home.tag_womens_support',
      defaultTag: "Women's Support",
      callKey: 'home.call_181',
      defaultCall: 'Call 181',
      badgeBg: 'bg-teal-100 text-teal-800 border-teal-200',
      cardStyle: 'bg-teal-50/40 border-teal-200 hover:border-teal-400',
      btnStyle: 'bg-teal-700 hover:bg-teal-800 text-white focus:ring-teal-400',
      safeNote: 'Women Helpline / Mission Shakti support',
    },
    {
      id: 'res-ncw-helpline',
      tagKey: 'home.tag_ncw_support',
      defaultTag: 'NCW Support and Referral',
      callKey: 'home.call_14490',
      defaultCall: 'Call 14490',
      badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      cardStyle: 'bg-cyan-50/40 border-cyan-200 hover:border-cyan-400',
      btnStyle: 'bg-cyan-700 hover:bg-cyan-800 text-white focus:ring-cyan-400',
      safeNote: 'NCW Women Helpline support/referral',
    },
    {
      id: 'res-nalsa-legal-aid',
      tagKey: 'home.tag_legal_aid',
      defaultTag: 'Legal Aid',
      callKey: 'home.call_15100',
      defaultCall: 'Call 15100',
      badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      cardStyle: 'bg-indigo-50/40 border-indigo-200 hover:border-indigo-400',
      btnStyle: 'bg-indigo-700 hover:bg-indigo-800 text-white focus:ring-indigo-400',
      safeNote: 'NALSA legal-aid information',
    },
    {
      id: 'res-cyber-portal',
      tagKey: 'home.tag_financial_fraud',
      defaultTag: 'Online Financial Fraud',
      callKey: 'home.call_1930',
      defaultCall: 'Call 1930 — Online Financial Fraud',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
      cardStyle: 'bg-amber-50/40 border-amber-200 hover:border-amber-400',
      btnStyle: 'bg-amber-700 hover:bg-amber-800 text-white focus:ring-amber-400',
      safeNote: 'Online financial fraud reporting',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <PageHero
        badge={t('home.hero_badge', { defaultValue: "India's Public Awareness Portal" })}
        title={t('home.hero_title', { defaultValue: 'Empowering Women with Knowledge, Rights & Safe Guidance' })}
        subtitle={t('home.hero_subtitle', {
          defaultValue:
            'Simple, calm, and legally accurate awareness information on rights, digital privacy, workplace safety, and verified emergency helplines.',
        })}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/rights"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <span>{t('home.explore_rights_btn', { defaultValue: 'Explore Your Rights' })}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/what-to-do"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-800/90 hover:bg-primary-700 text-white font-medium text-sm border border-primary-600 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            <span>{t('home.safe_steps_btn', { defaultValue: 'What Should I Do?' })}</span>
          </Link>
        </div>
      </PageHero>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Global Mandatory Disclaimer Notice */}
        <DisclaimerBox variant="prominent" />

        {/* Section 1: Emergency Quick Reference (112 ONLY) */}
        <section
          aria-label="Emergency quick reference"
          className="bg-gradient-to-br from-emergency-950 via-slate-900 to-emergency-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-emergency-600 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emergency-600/40 border border-emergency-500 text-emergency-200 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-300 animate-pulse" aria-hidden="true" />
                <span>{t('home.quick_emergency_ref', { defaultValue: 'Emergency Quick Reference' })}</span>
                <span className="mx-1">•</span>
                <span className="text-amber-300">{t('home.emergency_response', { defaultValue: 'Emergency Response' })}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {t('home.in_crisis_title', { defaultValue: 'In Crisis or Immediate Danger?' })}
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {emergency112Resource?.description ||
                  t('home.emergency_card_desc', {
                    defaultValue:
                      'Dial the nationwide 24/7 unified emergency response number (112) for immediate police, fire, medical, or crisis dispatch across all states and union territories.',
                  })}
              </p>
            </div>

            {/* Exactly one primary emergency card: 112 */}
            <div className="w-full lg:w-auto flex-shrink-0">
              {emergency112Resource && emergency112Resource.contactValue === '112' ? (
                <div className="bg-emergency-900/90 border-2 border-emergency-500 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center space-y-4 min-w-[280px] sm:min-w-[320px] ring-2 ring-emergency-400/40">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-emergency-800 rounded-xl text-white shadow-inner">
                      <PhoneCall className="w-6 h-6 text-amber-300 animate-bounce" aria-hidden="true" />
                    </span>
                    <div className="text-left">
                      <span className="text-[11px] font-semibold text-emergency-200 uppercase tracking-wider block">
                        {emergency112Resource.name}
                      </span>
                      <span className="text-xs font-bold text-teal-300">
                        {t('emergency.toll_free_national', { defaultValue: '24/7 Toll-Free Emergency' })}
                      </span>
                    </div>
                  </div>

                  <div className="py-2">
                    <span className="text-5xl font-black text-white tracking-wider font-mono block drop-shadow-sm">
                      {emergency112Resource.contactValue}
                    </span>
                  </div>

                  <a
                    href="tel:112"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-emergency-50 text-emergency-900 font-extrabold text-base rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white"
                    aria-label={`${t('home.call_112_now', { defaultValue: 'Call 112 Now' })} - nationwide emergency dispatch`}
                  >
                    <PhoneCall className="w-5 h-5 text-emergency-700" aria-hidden="true" />
                    <span>{t('home.call_112_now', { defaultValue: 'Call 112 Now' })}</span>
                  </a>

                  <p className="text-[11px] text-slate-300 leading-snug">
                    {emergency112Resource.safeDisplayNote ||
                      'Nationwide emergency platform linking citizens directly to local police, medical, and fire dispatch teams.'}
                  </p>
                </div>
              ) : (
                <div className="p-6 bg-red-950/80 border border-red-500 rounded-xl text-red-200 text-sm">
                  {t('home.emergency_112_unavailable', {
                    defaultValue:
                      'Emergency 112 contact is temporarily unavailable. Please dial 112 directly from any mobile or landline phone.',
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 2: Other Official Support Resources (Non-Emergency) */}
        <section aria-label="Other official support resources" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
                <span>{t('home.other_support_title', { defaultValue: 'Other Official Support Resources' })}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t('home.other_support_title', { defaultValue: 'Other Official Support Resources' })}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {t('home.other_support_subtitle', {
                  defaultValue:
                    "Verified national helplines for specialized guidance, women's referral, legal aid, and online financial fraud.",
                })}
              </p>
            </div>

            <Link
              to="/get-help"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 bg-primary-50 hover:bg-primary-100 border border-primary-200 px-4 py-2 rounded-xl transition-colors self-start md:self-auto"
            >
              <span>{t('home.view_all_resources', { defaultValue: 'View all verified help resources' })}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Calming non-emergency distinction advisory */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700">
            <Info className="w-4 h-4 text-teal-600 flex-shrink-0" aria-hidden="true" />
            <p>
              {t('home.not_emergency_service_notice', {
                defaultValue:
                  'Support and guidance helplines are not emergency dispatch services. In active danger or physical threat, dial 112 immediately.',
              })}
            </p>
          </div>

          {/* Grid of the 4 non-emergency support resources */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportConfigs.map((config) => {
              const resource = helpResourcesData.find((r) => r.id === config.id);

              // Defensive check 1: If non-emergency card displays 112, fail / render obvious error
              if (resource && resource.contactValue === '112') {
                if (import.meta.env.DEV) {
                  console.error(
                    `[Safety Error] Non-emergency support card (${config.id}) cannot display 112!`
                  );
                }
                return (
                  <div
                    key={config.id}
                    className="p-4 border-2 border-red-500 bg-red-50 text-red-700 text-xs rounded-xl"
                  >
                    <strong>Data Configuration Error:</strong> Non-emergency card cannot display 112.
                  </div>
                );
              }

              // Defensive check 2: If marked emergency, warn in development
              if (resource && resource.isEmergency112) {
                if (import.meta.env.DEV) {
                  console.warn(
                    `[Safety Warning] Support resource ${config.id} should not be marked isEmergency112.`
                  );
                }
              }

              const isVerified = resource?.verificationStatus === 'verified';
              const cleanPhone = (resource?.contactValue || '').trim();
              const isSafePhone = /^\+?[0-9]{3,15}$/.test(cleanPhone);
              const isClickablePhone = isVerified && resource?.contactType === 'phone' && isSafePhone;
              const normalizedNumber = isClickablePhone ? cleanPhone.replace(/[^0-9+]/g, '') : '';

              return (
                <div
                  key={config.id}
                  className={`p-5 rounded-2xl border flex flex-col justify-between transition-shadow hover:shadow-md ${config.cardStyle}`}
                >
                  <div className="space-y-3">
                    {/* Purpose Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${config.badgeBg}`}>
                        {t(config.tagKey, { defaultValue: config.defaultTag })}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {t('home.not_emergency_service', { defaultValue: 'This is not an emergency service' })}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1">
                        {resource?.name || config.id}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {resource?.description}
                      </p>
                    </div>

                    {/* Contact Number Display */}
                    <div className="pt-2 border-t border-slate-200/60">
                      <span className="text-2xl font-black text-slate-900 tracking-wide font-mono block">
                        {resource?.contactValue}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        {config.safeNote}
                      </span>
                    </div>
                  </div>

                  {/* Safe Phone Action CTA */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    {isClickablePhone ? (
                      <a
                        href={`tel:${normalizedNumber}`}
                        className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 ${config.btnStyle}`}
                        aria-label={`${t(config.callKey, { defaultValue: config.defaultCall })} (${resource?.contactValue})`}
                      >
                        <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="line-clamp-1">
                          {t(config.callKey, { defaultValue: config.defaultCall })}
                        </span>
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-slate-500 block text-center py-2">
                        {resource?.contactValue}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Core Exploration Modules */}
        <section aria-label="Portal core sections">
          <SectionHeading
            badge={t('home.core_domains_badge', { defaultValue: 'Portal Domains' })}
            title={t('home.core_domains_title', { defaultValue: 'Essential Safety Domains' })}
            subtitle={t('home.core_domains_subtitle', {
              defaultValue:
                'Explore verified information across key areas of safety, law, and digital well-being.',
            })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={BookOpen}
              title={t('home.feature_rights_title', { defaultValue: 'Know Your Rights' })}
              description={t('home.feature_rights_desc', {
                defaultValue:
                  'Learn about 10 foundational topics including domestic safety, stalking, image-based abuse, and free legal aid entitlements.',
              })}
              to="/rights"
              badge={t('home.feature_rights_badge', { defaultValue: '10 Topics' })}
              badgeColor="indigo"
            />
            <FeatureCard
              icon={CheckCircle}
              title={t('home.feature_what_to_do_title', { defaultValue: 'What Should I Do?' })}
              description={t('home.feature_what_to_do_desc', {
                defaultValue:
                  'Guided, calm next-steps when encountering harassment, cyber stalking, domestic distress, or workplace discrimination.',
              })}
              to="/what-to-do"
              badge={t('home.feature_what_to_do_badge', { defaultValue: 'Action Flows' })}
              badgeColor="teal"
            />
            <FeatureCard
              icon={Laptop}
              title={t('home.feature_cyber_title', { defaultValue: 'Cyber Safety' })}
              description={t('home.feature_cyber_desc', {
                defaultValue:
                  'Protections against cyberstalking, fake profiles, non-consensual imagery, financial UPI scams, and how to safely log evidence.',
              })}
              to="/cyber-safety"
              badge={t('home.feature_cyber_badge', { defaultValue: 'Digital Safety' })}
              badgeColor="amber"
            />
            <FeatureCard
              icon={Briefcase}
              title={t('home.feature_workplace_title', { defaultValue: 'Workplace Safety (POSH)' })}
              description={t('home.feature_workplace_desc', {
                defaultValue:
                  'Understand POSH Act, Internal Committees (IC), Local Committees (LC), inquiry timelines, and anti-retaliation rules.',
              })}
              to="/workplace"
              badge={t('home.feature_workplace_badge', { defaultValue: 'POSH Law' })}
              badgeColor="teal"
            />
            <FeatureCard
              icon={Scale}
              title={t('home.feature_laws_title', { defaultValue: 'Know the Law' })}
              description={t('home.feature_laws_desc', {
                defaultValue:
                  'Plain-language educational summaries of Indian legislations: PWDVA 2005, POSH Act 2013, Dowry Prohibition Act, and IT Act.',
              })}
              to="/laws"
              badge={t('home.feature_laws_badge', { defaultValue: 'Statutes' })}
              badgeColor="indigo"
            />
            <FeatureCard
              icon={PhoneCall}
              title={t('home.feature_help_title', { defaultValue: 'Get Help & Helplines' })}
              description={t('home.feature_help_desc', {
                defaultValue:
                  'Verified helpline contacts, One Stop Centres (Sakhi), Legal Services Authorities (NALSA/DLSA), and NCW references.',
              })}
              to="/get-help"
              badge={t('home.feature_help_badge', { defaultValue: 'Directory' })}
              badgeColor="emergency"
            />
          </div>
        </section>

        {/* Featured Rights Highlight */}
        <section className="bg-primary-50/70 border border-primary-100 rounded-2xl p-6 sm:p-10">
          <div className="max-w-4xl">
            <SectionHeading
              badge={t('home.legal_highlights_badge', { defaultValue: 'Legal Awareness Highlights' })}
              title={t('home.legal_highlights_title', { defaultValue: 'Foundational Safety & Rights Topics' })}
              subtitle={t('home.legal_highlights_subtitle', {
                defaultValue:
                  'Indian legislation and procedural frameworks provide specific protections designed to safeguard personal dignity and safety.',
              })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topicsData.slice(0, 4).map((topic) => (
                <div key={topic.id} className="bg-white p-5 rounded-2xl border border-primary-200/60 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{topic.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed line-clamp-2">{topic.summary}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-teal-700 font-semibold">
                      {t(`rights.category_${topic.category}`, { defaultValue: topic.category })}
                    </span>
                    <Link
                      to={`/rights/${topic.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary-700 hover:text-primary-900"
                    >
                      <span>{t('common.read_guide', { defaultValue: 'Read Guide' })}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-primary-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-600">
                {t('home.explore_all_10_desc', {
                  defaultValue: 'Explore all 10 topics covering digital safety, domestic rights, and workplace protections.',
                })}
              </span>
              <Link
                to="/rights"
                className="font-bold text-primary-800 hover:underline flex items-center gap-1"
              >
                <span>{t('common.view_all_topics', { defaultValue: 'View all 10 topics' })}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Community & Safety Ethics Banner */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <h2 className="text-lg font-bold text-slate-900">
                {t('home.principles_title', { defaultValue: 'Safety & Privacy Principles' })}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t('home.principles_desc', {
                defaultValue:
                  'NARI-SURAKSHA does not require account creation, login, or personal incident disclosures. This platform is built solely to educate, inform, and guide.',
              })}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/privacy"
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              {t('nav.privacy', { defaultValue: 'Privacy Policy' })}
            </Link>
            <Link
              to="/disclaimer"
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              {t('nav.disclaimer', { defaultValue: 'Disclaimer' })}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
