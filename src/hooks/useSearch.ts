import { useState, useMemo } from 'react';
import { createSearchIndex, SearchableItem } from '@/lib/search';

export function useSearch(items: SearchableItem[]) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(() => createSearchIndex(items), [items]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return items;
    }
    return fuse.search(query).map((res) => res.item);
  }, [fuse, query, items]);

  return {
    query,
    setQuery,
    results,
    hasResults: results.length > 0,
  };
}
