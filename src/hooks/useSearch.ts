import { useState, useMemo, useEffect } from 'react';
import { searchContent } from '@/lib/search';
import { SearchResultItem } from '@/types/search';

export function useSearch(initialQuery = '', maxResults = 50) {
  const [query, setQuery] = useState(initialQuery);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const results: SearchResultItem[] = useMemo(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      return [];
    }
    return searchContent(trimmed, maxResults);
  }, [query, maxResults]);

  const clearQuery = () => {
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  return {
    query,
    setQuery,
    results,
    hasResults: results.length > 0,
    isOpen,
    setIsOpen,
    selectedIndex,
    setSelectedIndex,
    clearQuery,
  };
}
