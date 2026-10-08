import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="skip-link focus:ring-2 focus:ring-amber-400 focus:outline-none"
    >
      Skip to main content
    </a>
  );
};
