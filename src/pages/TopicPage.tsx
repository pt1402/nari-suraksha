import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Scale,
  ShieldAlert,
  BookOpen,
  Calendar,
  AlertCircle,
  HelpCircle,
  FolderLock,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { officialSources } from '@/content/sources';
import { useLanguage } from '@/hooks/useLanguage';

export const TopicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { topicsData, lawsData, helpResourcesData, t } = useLanguage();
  const topic = topicsData.find((t) => t.slug === slug);

  useDocumentTitle(topic ? topic.title : 'Topic Details');

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="p-3 bg-amber-100 rounded-full inline-block text-amber-800">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          {t('topic.not_found_title', { defaultValue: 'Topic Not Found' })}
        </h1>
        <p className="text-slate-600 text-sm">
          {t('topic.not_found_desc', {
            defaultValue: 'The requested awareness topic does not exist or may have been moved.',
          })}
        </p>
        <div className="pt-2">
          <Link
            to="/rights"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-800 text-white text-sm font-semibold rounded-xl hover:bg-primary-900 transition shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('topic.return_to_rights', { defaultValue: 'Return to Rights Overview' })}</span>
          </Link>
        </div>
      </div>
    );
  }

  // Related data lookups
  const relatedLaws = lawsData.filter((l) => topic.relatedLawIds?.includes(l.id));
  const relatedResources = helpResourcesData.filter((r) => topic.relatedResourceIds?.includes(r.id));
  const relatedSources = officialSources.filter((s) => topic.sourceIds?.includes(s.id));

  return (
    <div className="space-y-10 pb-16">
      {/* 1. Header Hero */}
      <PageHero
        icon={BookOpen}
        badge={`${t('topic.badge_prefix', { defaultValue: 'Awareness Topic' })} • ${t(`rights.category_${topic.category}`, { defaultValue: topic.category })}`}
        title={topic.title}
        subtitle={topic.summary}
      >
        <Link
          to="/rights"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-800/80 hover:bg-primary-700 text-white text-xs font-semibold border border-primary-600 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t('topic.all_topics_btn', { defaultValue: 'All Topics' })}</span>
        </Link>
      </PageHero>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 9. General-Awareness Disclaimer */}
        <DisclaimerBox customText={topic.disclaimerText} />

        {/* 1. Plain-Language Introduction */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            {t('topic.plain_language_introduction', { defaultValue: '1. Plain-Language Introduction' })}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {topic.plainIntroduction}
          </p>
        </section>

        {/* 2. What It May Include */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            {t('topic.what_it_may_include', { defaultValue: '2. What It May Include' })}
          </h2>
          <p className="text-xs text-slate-500 italic">
            {t('topic.behaviors_associated', {
              defaultValue: 'Behaviors and circumstances that may be associated with this topic:',
            })}
          </p>
          <ul className="space-y-2.5">
            {topic.whatItMayInclude.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="w-2 h-2 rounded-full bg-teal-600 mt-2 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Examples */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary-700" />
            <span>{t('topic.illustrative_examples', { defaultValue: '3. Illustrative Examples' })}</span>
          </h2>
          <div className="space-y-3">
            {topic.examples.map((ex, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200/80 text-sm text-slate-700">
                <span className="font-semibold text-primary-900 block mb-1">
                  {t('topic.scenario_example', { defaultValue: 'Scenario Example' })} {idx + 1}:
                </span>
                <p className="leading-relaxed">{ex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Safer Next Steps */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            {t('topic.safer_next_steps', { defaultValue: '4. Safer Next Steps' })}
          </h2>
          <div className="space-y-3">
            {topic.saferNextSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-teal-50/50 rounded-xl border border-teal-100 text-sm text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Evidence and Records Safety */}
        <section className="bg-white rounded-2xl border border-amber-200/80 shadow-sm p-6 sm:p-8 space-y-4 bg-amber-50/20">
          <h2 className="text-xl font-bold text-slate-900 border-b border-amber-100 pb-3 flex items-center gap-2">
            <FolderLock className="w-5 h-5 text-amber-700" />
            <span>{t('topic.evidence_and_records', { defaultValue: '5. Evidence & Records (Only If Safe)' })}</span>
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r text-xs text-amber-900">
            <strong>{t('topic.crucial_safety_rule', { defaultValue: 'Crucial Safety Rule:' })} </strong>{' '}
            {t('topic.crucial_safety_desc', {
              defaultValue:
                'Never put your physical safety at risk to collect evidence. Never confront a perpetrator or attempt unauthorized covert recordings.',
            })}
          </div>
          <ul className="space-y-2.5 pt-2">
            {topic.evidenceAndRecordsSafety.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                <span className="leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Where to Look for Verified Help */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            {t('topic.where_to_look_for_help', { defaultValue: '6. Where to Look for Verified Help' })}
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            {topic.whereToLookForHelp.map((help, idx) => (
              <li key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                <span>{help}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 7. Related Laws and Official Resources */}
        <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary-800" />
            <span>{t('topic.related_laws_and_resources', { defaultValue: '7. Related Laws & Institutional Resources' })}</span>
          </h2>

          <div className="space-y-4">
            {relatedLaws.length > 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('topic.applicable_statutes', { defaultValue: 'Applicable Statutes:' })}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relatedLaws.map((law) => (
                    <div key={law.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <strong className="text-primary-900 block font-semibold mb-1">{law.shortTitle}</strong>
                      <p className="text-slate-600 line-clamp-2">{law.overview}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {relatedResources.length > 0 && (
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('topic.institutional_contacts', { defaultValue: 'Institutional Reference Contacts:' })}
                </span>
                <div className="space-y-2">
                  {relatedResources.map((res) => (
                    <div key={res.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="font-bold text-slate-900 block">{res.name}</span>
                        <span className="text-slate-500">Contact: {res.contactValue}</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {t(`common.${res.verificationStatus === 'verified' ? 'verified_official_source' : 'verify_before_launch'}`, {
                          defaultValue: res.verificationStatus,
                        })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 8. Related Guides */}
        <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
            {t('topic.related_action_guides', { defaultValue: '8. Related Action Guides' })}
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/what-to-do"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-xl border border-slate-200 text-xs font-bold text-primary-800 hover:bg-primary-50 transition shadow-sm"
            >
              <span>{t('topic.action_guides_btn', { defaultValue: 'View What Should I Do? Guides' })}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/laws"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-xl border border-slate-200 text-xs font-bold text-teal-800 hover:bg-teal-50 transition shadow-sm"
            >
              <span>{t('topic.statutes_library_btn', { defaultValue: 'Explore Statutes Library' })}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* 10 & 11. Metadata & Source Verification Section */}
        <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 space-y-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>
                <strong>{t('topic.last_reviewed', { defaultValue: '10. Last Reviewed Date:' })}</strong> {topic.lastReviewedDate}
              </span>
              <span className="text-slate-400">|</span>
              <span>
                <strong>{t('topic.next_review_due', { defaultValue: 'Next Review Due:' })}</strong> {topic.nextReviewDueDate}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>
                <strong>{t('topic.verification_status', { defaultValue: 'Status:' })}</strong>{' '}
                {t(`common.${topic.verificationStatus === 'verified' ? 'verified_official_source' : 'verify_before_launch'}`, {
                  defaultValue: topic.verificationStatus,
                })}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <UserCheck className="w-4 h-4 text-primary-700" />
              <span>{t('topic.official_citations', { defaultValue: '11. Official Citations & Source Transparency:' })}</span>
            </div>
            {relatedSources.length > 0 ? (
              <ul className="space-y-1.5">
                {relatedSources.map((src) => (
                  <li key={src.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-900">{src.title}</span> — {src.organization}
                    <span className="text-[11px] text-slate-500 block">{src.description}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 italic">
                {t('topic.official_records_note', {
                  defaultValue: 'Official legislative gazette records and statutory references.',
                })}
              </p>
            )}
          </div>
        </section>

        {/* Navigation back */}
        <div className="pt-4 flex justify-between items-center">
          <Link
            to="/rights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('topic.back_to_topics', { defaultValue: 'Back to All Topics' })}</span>
          </Link>

          <Link
            to="/get-help"
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-700 text-white text-xs font-bold rounded-xl hover:bg-teal-800 transition shadow-sm"
          >
            <span>{t('topic.verified_helplines', { defaultValue: 'Verified Helplines' })}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
