import React, { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import { HighlightMatch } from './HighlightMatch';
import { SearchResultItem, SearchResultType } from '@/types/search';

interface GlobalSearchProps {
  onNavigate?: () => void;
  className?: string;
  isMobile?: boolean;
}

const TYPE_BADGES: Record<SearchResultType, { label: string; className: string }> = {
  Guide: { label: 'Guide', className: 'bg-teal-50 text-teal-700 border-teal-200' },
  Law: { label: 'Law', className: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  Help: { label: 'Help', className: 'bg-rose-50 text-rose-700 border-rose-200' },
  FAQ: { label: 'FAQ', className: 'bg-amber-50 text-amber-800 border-amber-200' },
  Steps: { label: 'Steps', className: 'bg-sky-50 text-sky-700 border-sky-200' },
  Quiz: { label: 'Quiz', className: 'bg-purple-50 text-purple-700 border-purple-200' },
};

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  onNavigate,
  className = '',
  isMobile = false,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const {
    query,
    setQuery,
    results,
    isOpen,
    setIsOpen,
    selectedIndex,
    setSelectedIndex,
    clearQuery,
  } = useSearch('', 8);

  // Suggestions limited to top 8 items
  const visibleSuggestions = results.slice(0, 8);

  // Handle global "/" shortcut to focus search input
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeEl = document.activeElement;
        const isEditing =
          activeEl instanceof HTMLInputElement ||
          activeEl instanceof HTMLTextAreaElement ||
          activeEl instanceof HTMLSelectElement ||
          activeEl?.hasAttribute('contenteditable');

        if (!isEditing) {
          e.preventDefault();
          inputRef.current?.focus();
          inputRef.current?.select();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [setIsOpen]);

  // Navigate to target url
  const goToResult = useCallback(
    (item: SearchResultItem) => {
      setIsOpen(false);
      if (onNavigate) onNavigate();
      navigate(item.url);
    },
    [navigate, onNavigate, setIsOpen]
  );

  // Submit full search to /search
  const submitSearch = useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    setIsOpen(false);
    if (onNavigate) onNavigate();
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  }, [query, navigate, onNavigate, setIsOpen]);

  // Keyboard navigation within the search component
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      if (query.trim().length >= 2) {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setSelectedIndex(-1);
      inputRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (visibleSuggestions.length === 0) return;
      setSelectedIndex((prev) => (prev < visibleSuggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (visibleSuggestions.length === 0) return;
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : visibleSuggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < visibleSuggestions.length) {
        goToResult(visibleSuggestions[selectedIndex]);
      } else if (query.trim().length > 0) {
        submitSearch();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (selectedIndex >= 0 && listboxRef.current) {
      const activeElement = listboxRef.current.children[selectedIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const hasQuery = query.trim().length >= 2;
  const showNoResults = isOpen && hasQuery && visibleSuggestions.length === 0;

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      role="search"
      aria-label="Sitewide Search"
    >
      <label htmlFor="global-search-input" className="sr-only">
        Search safety topics, rights, laws, or help…
      </label>

      {/* Input container */}
      <div className="relative flex items-center">
        <Search
          className={`absolute left-3 w-4 h-4 pointer-events-none transition-colors ${
            isMobile ? 'text-primary-300' : 'text-slate-400 group-focus-within:text-teal-500'
          }`}
          aria-hidden="true"
        />

        <input
          ref={inputRef}
          id="global-search-input"
          type="search"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen && e.target.value.trim().length >= 2) {
              setIsOpen(true);
            }
          }}
          onFocus={() => {
            if (query.trim().length >= 2) {
              setIsOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search safety topics, rights, laws, or help…"
          aria-autocomplete="list"
          aria-controls="global-search-suggestions"
          aria-expanded={isOpen}
          aria-activedescendant={
            selectedIndex >= 0 ? `search-result-${visibleSuggestions[selectedIndex]?.id}` : undefined
          }
          className={`w-full pl-9 pr-16 py-2 text-xs sm:text-sm rounded-lg transition-all border focus:outline-none focus:ring-2 ${
            isMobile
              ? 'bg-primary-900/90 text-white placeholder-primary-300 border-primary-700/80 focus:ring-teal-400 focus:border-teal-400'
              : 'bg-primary-800/80 hover:bg-primary-800 text-white placeholder-primary-200 border-primary-700/60 focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:ring-teal-400 focus:border-teal-500 shadow-inner'
          }`}
        />

        {/* Right side controls: Clear button and keyboard shortcut indicator */}
        <div className="absolute right-2.5 flex items-center gap-1.5">
          {query ? (
            <button
              type="button"
              onClick={() => {
                clearQuery();
                inputRef.current?.focus();
              }}
              className="p-1 rounded text-primary-300 hover:text-white hover:bg-primary-700/60 focus:outline-none focus:ring-1 focus:ring-amber-400"
              aria-label="Clear search input"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          ) : !isMobile ? (
            <kbd
              aria-hidden="true"
              className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-primary-300 bg-primary-950/60 border border-primary-700/60 rounded select-none shadow-sm"
              title="Press / to search"
            >
              /
            </kbd>
          ) : null}
        </div>
      </div>

      {/* Dropdown Suggestions Panel */}
      {isOpen && (
        <div
          id="global-search-suggestions"
          className="absolute left-0 right-0 top-full mt-2 bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-40 animate-in fade-in duration-100"
        >
          {/* Header summary in dropdown */}
          <div className="px-3.5 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span>
              {visibleSuggestions.length > 0
                ? `${visibleSuggestions.length} suggestions`
                : hasQuery
                ? 'No matching topics'
                : 'Type at least 2 characters'}
            </span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">
              Press Enter for all results • Esc to close
            </span>
          </div>

          {/* Results list */}
          {visibleSuggestions.length > 0 && (
            <ul
              ref={listboxRef}
              role="listbox"
              aria-label="Search suggestions"
              className="max-h-80 overflow-y-auto divide-y divide-slate-100 p-1"
            >
              {visibleSuggestions.map((item, index) => {
                const isSelected = index === selectedIndex;
                const badge = TYPE_BADGES[item.type] || {
                  label: item.type,
                  className: 'bg-slate-100 text-slate-700 border-slate-200',
                };

                return (
                  <li
                    key={item.id}
                    id={`search-result-${item.id}`}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => goToResult(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`p-2.5 rounded-lg cursor-pointer transition-colors flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-teal-50/80 ring-1 ring-teal-500'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border shrink-0 ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
                          <HighlightMatch text={item.title} query={query} />
                        </h4>
                      </div>

                      {/* Verification badge if applicable */}
                      {item.type === 'Help' && item.verificationStatus && (
                        <div className="shrink-0 flex items-center gap-1 text-[10px]">
                          {item.verificationStatus === 'verified' ? (
                            <span className="inline-flex items-center gap-0.5 text-teal-700 font-medium bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                              <ShieldCheck className="w-3 h-3 text-teal-600" aria-hidden="true" />
                              <span className="hidden sm:inline">Verified</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-0.5 text-amber-800 font-medium bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                              <AlertTriangle className="w-3 h-3 text-amber-600" aria-hidden="true" />
                              <span>Verify</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Excerpt / description */}
                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                      <HighlightMatch text={item.description} query={query} />
                    </p>

                    {/* Verification warning for unverified help resources */}
                    {item.type === 'Help' && item.verificationStatus && item.verificationStatus !== 'verified' && (
                      <div className="mt-0.5 flex items-center gap-1 text-[10px] text-amber-800 bg-amber-50/80 px-2 py-0.5 rounded border border-amber-200">
                        <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" aria-hidden="true" />
                        <span>Verify from official source before public launch</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          {/* No results empty state with useful navigation links */}
          {showNoResults && (
            <div className="p-4 text-center">
              <p className="text-xs font-semibold text-slate-800 mb-1">
                No local content found for "{query.trim()}"
              </p>
              <p className="text-[11px] text-slate-500 mb-3">
                Try searching for general topics such as domestic violence, cyberstalking, OTP scams, or workplace safety.
              </p>
              <div className="text-[11px] font-medium text-teal-800 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    if (onNavigate) onNavigate();
                    navigate('/get-help');
                  }}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 rounded-md transition"
                >
                  Emergency Helplines
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    if (onNavigate) onNavigate();
                    navigate('/rights');
                  }}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 rounded-md transition"
                >
                  Rights & Guides
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    if (onNavigate) onNavigate();
                    navigate('/what-to-do');
                  }}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-teal-50 hover:text-teal-700 rounded-md transition"
                >
                  Step-by-Step Plans
                </button>
              </div>
            </div>
          )}

          {/* View full results button footer */}
          {visibleSuggestions.length > 0 && (
            <div className="p-2 bg-slate-50 border-t border-slate-100">
              <button
                type="button"
                onClick={submitSearch}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold transition"
              >
                <span>View all results for "{query.trim()}"</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
