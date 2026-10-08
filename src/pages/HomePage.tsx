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
} from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { FeatureCard } from '@/components/common/FeatureCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { EMERGENCY_NUMBER } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

export const HomePage: React.FC = () => {
  useDocumentTitle('Home');
  const { topicsData, emergencyContacts, t } = useLanguage();

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

        {/* Quick Emergency Helplines Strip */}
        <section aria-label="Quick helpline summary" className="bg-gradient-to-r from-slate-900 to-primary-950 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-primary-900">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span>{t('home.quick_emergency_ref', { defaultValue: 'Emergency Quick Reference' })}</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold">
                {t('home.in_crisis_title', { defaultValue: 'In Crisis or Immediate Danger?' })}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                {t('home.in_crisis_desc', {
                  defaultValue:
                    'Dial the nationwide 24/7 emergency response number (112) for immediate police, medical, or disaster dispatch. Other helplines are listed for educational reference.',
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full lg:w-auto">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.number}
                  className={`p-3.5 rounded-xl border flex flex-col justify-between text-center transition ${
                    contact.isClickableEmergency
                      ? 'bg-emergency-900/80 border-emergency-500 ring-2 ring-emergency-400'
                      : 'bg-white/10 border-white/10'
                  }`}
                >
                  <div>
                    <span className="text-xs text-slate-300 mb-1 line-clamp-1">{contact.label}</span>
                    {contact.isClickableEmergency ? (
                      <a
                        href={`tel:${EMERGENCY_NUMBER}`}
                        className="text-xl font-extrabold text-white hover:text-amber-300 underline block my-1"
                        aria-label="Direct emergency call to 112"
                      >
                        {EMERGENCY_NUMBER}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-amber-300 block my-1">
                        {contact.number}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-teal-300">{contact.available}</span>
                </div>
              ))}
            </div>
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
