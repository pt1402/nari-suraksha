import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={cn(
        'bg-white rounded-xl border border-slate-200/80 shadow-sm p-6',
        className
      )}
    >
      {children}
    </Component>
  );
};
