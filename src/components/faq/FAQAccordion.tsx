import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Tag } from 'lucide-react';
import { FAQItem } from '@/types/content';
import { useLanguage } from '@/hooks/useLanguage';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3" role="region" aria-label="Frequently Asked Questions list">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        const panelId = `faq-panel-${faq.id}`;
        const headerId = `faq-header-${faq.id}`;

        return (
          <div
            key={faq.id}
            className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-sm transition-colors"
          >
            <h3>
              <button
                id={headerId}
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full px-5 py-4 text-left font-semibold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-600"
              >
                <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180 text-primary-700' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 space-y-3"
              >
                <p className="leading-relaxed text-slate-700">{faq.answer}</p>

                {/* Related topics link */}
                {faq.relatedTopicSlugs && faq.relatedTopicSlugs.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">
                      {t('common.related_guides', { defaultValue: 'Related Topic Guides:' })}
                    </span>
                    {faq.relatedTopicSlugs.map((slug) => (
                      <Link
                        key={slug}
                        to={`/rights/${slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-primary-900 underline"
                      >
                        <span className="capitalize">{slug.replace(/-/g, ' ')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                )}

                {/* Tags and metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  <div className="flex flex-wrap gap-1.5">
                    {faq.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded"
                      >
                        <Tag className="w-2.5 h-2.5 text-slate-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  <span>
                    {t('common.reviewed', { defaultValue: 'Reviewed' })}: {faq.lastReviewedDate}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
