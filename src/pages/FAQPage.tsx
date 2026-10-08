import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { SearchBar } from '@/components/search/SearchBar';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useLanguage } from '@/hooks/useLanguage';

export const FAQPage: React.FC = () => {
  useDocumentTitle('Frequently Asked Questions');
  const { faqsData, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()) ||
      faq.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={HelpCircle}
        badge={t('faq.page_badge', { defaultValue: 'Clarifications & Answers' })}
        title={t('faq.page_title', { defaultValue: 'Frequently Asked Questions (FAQ)' })}
        subtitle={t('faq.page_subtitle', {
          defaultValue:
            'Common questions regarding police station procedures, Zero FIR, free legal aid, cyber crime lodging, and the scope of this awareness portal.',
        })}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={t('faq.search_placeholder', {
                defaultValue: 'Search questions (e.g. Zero FIR, Night Arrest)...',
              })}
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {['all', 'rights', 'workplace', 'cyber', 'general'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                  activeCategory === cat
                    ? 'bg-primary-800 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? t('faq.all_questions', { defaultValue: 'All Questions' }) : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Component */}
        <FAQAccordion faqs={filteredFaqs} />

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold">
              {t('faq.no_results', { defaultValue: 'No questions match your search.' })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
