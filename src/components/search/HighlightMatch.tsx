import React from 'react';

interface HighlightMatchProps {
  text: string;
  query: string;
  className?: string;
}

/**
 * Renders text with matching query terms wrapped in accessible <mark> tags.
 */
export const HighlightMatch: React.FC<HighlightMatchProps> = ({
  text,
  query,
  className = '',
}) => {
  if (!query || !query.trim() || !text) {
    return <span className={className}>{text}</span>;
  }

  const terms = query
    .trim()
    .split(/\s+/)
    .filter((t) => t.length > 1)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (terms.length === 0) {
    return <span className={className}>{text}</span>;
  }

  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const isMatch = terms.some((term) =>
          new RegExp(`^${term}$`, 'i').test(part)
        );

        if (isMatch) {
          return (
            <mark
              key={i}
              className="bg-amber-200 text-slate-950 font-bold px-0.5 rounded underline decoration-amber-500 decoration-1"
            >
              {part}
            </mark>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};
