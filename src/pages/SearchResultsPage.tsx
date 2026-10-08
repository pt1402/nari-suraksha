import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  X,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Scale,
  PhoneCall,
  HelpCircle,
  ListOrdered,
  Award,
  Sparkles,
} from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import { HighlightMatch } from '@/components/search/HighlightMatch';
import { SearchResultType, SearchResultItem } from '@/types/search';

const TYPE_CONFIG: Record<
  SearchResultType,
  { label: string; icon: React.FC<{ className?: string }>; color: string }
> = {
  Guide: {
    label: 'Guides',
    icon: BookOpen,
    color: 'bg-teal-50 text-teal-800 border-teal-200',
  },
  Law: {
    label: 'Laws & Acts',
    icon: Scale,
    color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
  },
  Help: {
    label: 'Helplines',
    icon: PhoneCall,
    color: 'bg-rose-50 text-rose-800 border-rose-200',
  },
  FAQ: {
    label: 'FAQs',
    icon: HelpCircle,
    color: 'bg-amber-50 text-amber-900 border-amber-200',
  },
  Steps: {
    label: 'Action Steps',
    icon: ListOrdered,
    color: 'bg-sky-50 text-sky-800 border-sky-200',
  },
  Quiz: {
    label: 'Quizzes',
    icon: Award,
    color: 'bg-purple-50 text-purple-800 border-purple-200',
  },
};

const SUGGESTED_TOPICS = [
  'Domestic Violence',
  'Cyberstalking',
  'Fake Account',
  'Workplace Harassment',
  'OTP',
  'ICC',
  'Dowry Harassment',
  'Emergency 112',
];

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialUrlQuery = searchParams.get('q') || '';

  const { query, setQuery, results, clearQuery } = useSearch(initialUrlQuery, 100);
  const [selectedType, setSelectedType] = useState<SearchResultType | 'ALL'>('ALL');

  // Sync state if URL query changes
  useEffect(() => {
    const urlQuery = searchParams.get('q') || '';
    if (urlQuery !== query) {
      setQuery(urlQuery);
    }
  }, [searchParams]);

  // Update URL without persisting or transmitting
  const handleQueryChange = (val: string) => {
    setQuery(val);
    const trimmed = val.trim();
    if (trimmed) {
      setSearchParams({ q: trimmed }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const handleClear = () => {
    clearQuery();
    setSelectedType('ALL');
    setSearchParams({}, { replace: true });
  };

  // Grouped counts for category filters
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: results.length,
      Guide: 0,
      Law: 0,
      Help: 0,
      FAQ: 0,
      Steps: 0,
      Quiz: 0,
    };
    results.forEach((r) => {
      if (counts[r.type] !== undefined) {
        counts[r.type]++;
      }
    });
    return counts;
  }, [results]);

  // Filtered results based on selected tab
  const filteredResults = useMemo(() => {
    if (selectedType === 'ALL') {
      return results;
    }
    return results.filter((r) => r.type === selectedType);
  }, [results, selectedType]);

  const hasSearchInput = query.trim().length > 0;
  const isSearchActive = query.trim().length >= 2;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header section */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Client-Side Search
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl">
          Search across rights, laws, safe workflows, verified helplines, and safety guides.
          Your query stays strictly in your browser and is never tracked or transmitted.
        </p>
      </div>

      {/* Main search bar */}
      <div className="relative mb-6">
        <label htmlFor="search-page-input" className="sr-only">
          Search query
        </label>
        <div className="relative flex items-center shadow-sm">
          <Search
            className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none"
            aria-hidden="true"
          />
          <input
            id="search-page-input"
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search safety topics, rights, laws, or help…"
            autoComplete="off"
            spellCheck="false"
            className="w-full pl-12 pr-12 py-3.5 bg-white text-slate-900 border border-slate-300 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm transition"
          />
          {hasSearchInput && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3.5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Clear search input"
              title="Clear search"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Search Chips if no search active */}
      {!isSearchActive && (
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 mb-8 text-center sm:text-left">
          <div className="flex items-center gap-2 mb-3 text-teal-800 font-semibold text-sm">
            <Sparkles className="w-4 h-4 text-teal-600" aria-hidden="true" />
            <span>Popular Safety & Legal Topics</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {SUGGESTED_TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => handleQueryChange(topic)}
                className="px-3 py-1.5 bg-white hover:bg-teal-50 text-slate-800 hover:text-teal-900 text-xs sm:text-sm font-medium rounded-lg border border-slate-200 shadow-2xs transition focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {topic}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-200/60 pt-4 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-xs text-slate-500">
            <span>
              🔒 <strong>Privacy Assurance:</strong> Zero network requests, zero telemetry, zero cookies.
            </span>
            <div className="flex items-center gap-3">
              <Link to="/get-help" className="text-teal-700 hover:underline font-semibold">
                Emergency Helplines →
              </Link>
              <Link to="/rights" className="text-teal-700 hover:underline font-semibold">
                Browse All Guides →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Active Search Results Section */}
      {isSearchActive && (
        <div>
          {/* Summary line */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs sm:text-sm text-slate-600">
            <div>
              Found <strong className="text-slate-900">{results.length}</strong> result
              {results.length === 1 ? '' : 's'} for "
              <strong className="text-teal-900">{query.trim()}</strong>"
            </div>
            {hasSearchInput && (
              <button
                type="button"
                onClick={handleClear}
                className="text-teal-700 hover:text-teal-900 hover:underline font-medium"
              >
                Clear all filters and search
              </button>
            )}
          </div>

          {/* Category filter tabs */}
          {results.length > 0 && (
            <div
              className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none"
              role="tablist"
              aria-label="Result categories"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedType === 'ALL'}
                onClick={() => setSelectedType('ALL')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border ${
                  selectedType === 'ALL'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                All ({typeCounts.ALL})
              </button>

              {(['Guide', 'Law', 'Help', 'FAQ', 'Steps', 'Quiz'] as SearchResultType[]).map(
                (type) => {
                  const count = typeCounts[type] || 0;
                  if (count === 0) return null;
                  const cfg = TYPE_CONFIG[type];

                  return (
                    <button
                      key={type}
                      type="button"
                      role="tab"
                      aria-selected={selectedType === type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition border ${
                        selectedType === type
                          ? 'bg-teal-700 text-white border-teal-700 shadow-2xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {cfg.label} ({count})
                    </button>
                  );
                }
              )}
            </div>
          )}

          {/* Results List */}
          {filteredResults.length > 0 ? (
            <div className="space-y-4">
              {filteredResults.map((item: SearchResultItem) => {
                const cfg = TYPE_CONFIG[item.type] || {
                  label: item.type,
                  icon: BookOpen,
                  color: 'bg-slate-100 text-slate-800 border-slate-200',
                };
                const IconComponent = cfg.icon;

                return (
                  <article
                    key={item.id}
                    className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${cfg.color}`}
                        >
                          <IconComponent className="w-3 h-3" aria-hidden="true" />
                          <span>{cfg.label}</span>
                        </span>

                        {item.category && (
                          <span className="text-[11px] text-slate-500 font-medium">
                            • {item.category}
                          </span>
                        )}
                      </div>

                      {/* Verification Badge */}
                      {item.type === 'Help' && item.verificationStatus && (
                        <div>
                          {item.verificationStatus === 'verified' ? (
                            <span className="inline-flex items-center gap-1 text-[11px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-medium">
                              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
                              <span>Verified Official Source</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-300 font-medium">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                              <span>Verify from official source before public launch</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Result Title */}
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-800 transition">
                      <Link to={item.url} className="focus:outline-none focus:underline">
                        <HighlightMatch text={item.title} query={query} />
                      </Link>
                    </h2>

                    {/* Excerpt / Summary */}
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <HighlightMatch text={item.description} query={query} />
                    </p>

                    {/* Unverified note alert */}
                    {item.type === 'Help' && item.verificationStatus && item.verificationStatus !== 'verified' && (
                      <div className="mt-3 p-2 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                        <span>
                          <strong>Note:</strong> This helpline information is awaiting formal departmental verification. Please cross-check before critical reliance.
                        </span>
                      </div>
                    )}

                    {/* Action link */}
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                      <Link
                        to={item.url}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-teal-700 group-hover:text-teal-900 hover:underline"
                      >
                        <span>Open {cfg.label.slice(0, -1) || 'Result'}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>

                      {item.tags && item.tags.length > 0 && (
                        <div className="hidden sm:flex items-center gap-1 text-[10px] text-slate-400">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="bg-slate-100 px-1.5 py-0.5 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* No results state */
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                <Search className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                No matching results found
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
                We couldn't find any documents matching "<strong>{query.trim()}</strong>". Try checking for spelling errors, using simpler keywords, or browsing our primary sections:
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/get-help"
                  className="px-4 py-2 bg-emergency-700 hover:bg-emergency-800 text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition"
                >
                  Emergency Helplines
                </Link>
                <Link
                  to="/rights"
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition"
                >
                  Women's Rights & Guides
                </Link>
                <Link
                  to="/what-to-do"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition"
                >
                  Step-by-Step Plans
                </Link>
                <Link
                  to="/laws"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition"
                >
                  Laws & Provisions
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
