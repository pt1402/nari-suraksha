import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types/content';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="border border-slate-200/80 rounded-xl bg-white overflow-hidden shadow-sm transition-colors"
          >
            <button
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
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

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50">
                <p className="leading-relaxed mb-3">{faq.answer}</p>
                {faq.tags && faq.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {faq.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
