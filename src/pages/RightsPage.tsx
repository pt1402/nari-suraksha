import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, ArrowRight, CheckCircle2, Scale, Tag } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { SearchBar } from '@/components/search/SearchBar';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useLanguage } from '@/hooks/useLanguage';

export const RightsPage: React.FC = () => {
  useDocumentTitle('Know Your Rights & Awareness Topics');
  const { topicsData, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTopics = topicsData.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(search.toLowerCase()) ||
      topic.summary.toLowerCase().includes(search.toLowerCase()) ||
      topic.plainIntroduction.toLowerCase().includes(search.toLowerCase()) ||
      topic.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || topic.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-16">
      <PageHero
        icon={BookOpen}
        badge={t('rights.page_badge', { defaultValue: '10 Core Awareness Domains' })}
        title={t('rights.page_title', { defaultValue: 'Know Your Rights & Safety Topics' })}
        subtitle={t('rights.page_subtitle', {
          defaultValue:
            'Educational awareness on domestic safety, workplace rights, cyber security, stalking protections, and financial fraud prevention.',
        })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={t('rights.search_placeholder', {
                defaultValue: 'Search topics by keyword (e.g. Domestic, Cyber, POSH, Stalking)...',
              })}
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto" role="group" aria-label="Topic categories">
            {['all', 'domestic', 'rights', 'cyber', 'workplace'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  selectedCategory === cat
                    ? 'bg-primary-800 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat === 'all'
                  ? t('rights.all_categories', { defaultValue: 'All 10 Topics' })
                  : t(`rights.${cat}_topics`, { defaultValue: `${cat} Topics` })}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTopics.map((topic) => (
            <article
              key={topic.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:border-primary-400 hover:shadow-md transition duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                    {t(`rights.category_${topic.category}`, { defaultValue: topic.category })}
                  </span>
                  <Scale className="w-4 h-4 text-primary-700" aria-hidden="true" />
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  <Link
                    to={`/rights/${topic.slug}`}
                    className="hover:text-primary-700 transition-colors focus:outline-none focus:underline"
                  >
                    {topic.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {topic.summary}
                </p>

                {/* Key Points snippet */}
                <div className="space-y-1.5 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                  <span className="text-xs font-bold text-slate-800 block">
                    {t('common.safer_steps_overview', { defaultValue: 'Safer Steps Overview' })}:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {topic.saferNextSteps.slice(0, 2).map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                {topic.tags && topic.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {topic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                      >
                        <Tag className="w-2.5 h-2.5 text-slate-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {t('common.reviewed', { defaultValue: 'Reviewed' })}: {topic.lastReviewedDate}
                </span>
                <Link
                  to={`/rights/${topic.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-primary-700 hover:text-primary-900 group"
                  aria-label={`Read full awareness guide for ${topic.title}`}
                >
                  <span>{t('common.read_full_guide', { defaultValue: 'Read Full Guide' })}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <Shield className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold">
              {t('rights.no_topics_match', { defaultValue: 'No topics match your filter or search query.' })}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {t('rights.reset_filter_hint', {
                defaultValue: 'Try resetting category filters or searching for "Domestic", "Cyber", or "Workplace".',
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
