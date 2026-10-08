import Fuse from 'fuse.js';

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  tags?: string[];
}

export function createSearchIndex(items: SearchableItem[]) {
  return new Fuse(items, {
    keys: ['title', 'description', 'category', 'tags'],
    threshold: 0.35,
    ignoreLocation: true,
  });
}
