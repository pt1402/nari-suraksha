import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Shield, ArrowRight, CheckCircle2, Scale } from 'lucide-react';
import { PageHero } from '@/components/common/PageHero';
import { DisclaimerBox } from '@/components/common/DisclaimerBox';
import { SearchBar } from '@/components/search/SearchBar';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { topicsData } from '@/content/en/topics';

export const RightsPage: React.FC = () => {
  useDocumentTitle('Know Your Rights');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTopics = topicsData.filter((topic) => {
    const matchesSearch =
      topic.title.toLowerCase().includes(search.toLowerCase()) ||
      topic.summary.toLowerCase().includes(search.toLowerCase()) ||
      topic.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      <PageHero
        icon={BookOpen}
        badge="Legal Entitlements"
        title="Know Your Legal & Procedural Rights"
        subtitle="Clear, verified awareness regarding rights in police stations, court access, arrest safeguards, and constitutional protections in India."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DisclaimerBox />

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:max-w-md">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search rights (e.g. Zero FIR, Legal Aid, Arrest)..."
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {['all', 'rights', 'workplace', 'cyber'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                  selectedCategory === cat
                    ? 'bg-primary-800 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'All Topics' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Rights Topics List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTopics.map((topic) => (
            <article
              key={topic.id}
              className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:border-primary-400 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                    {topic.category}
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

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {topic.summary}
                </p>

                <div className="space-y-1.5 mb-5">
                  <span className="text-xs font-bold text-slate-800 block">Key Procedural Points:</span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {topic.keyPoints.slice(0, 2).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Legal awareness guide</span>
                <Link
                  to={`/rights/${topic.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 group"
                >
                  <span>Detailed Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
            <Shield className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold">No rights topics match your query.</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for "Zero FIR", "Arrest", or "Legal Aid".</p>
          </div>
        )}
      </div>
    </div>
  );
};
