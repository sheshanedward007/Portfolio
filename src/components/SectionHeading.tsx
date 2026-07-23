import React from 'react';

interface SectionHeadingProps {
  title: string;
  number?: string;
  subtitle?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, number, subtitle, id }) => {
  return (
    <div id={id} className="scroll-mt-24 mb-8 pt-4 border-b border-surface-borderLight dark:border-surface-borderDark pb-4">
      <div className="flex items-center gap-3">
        {number && (
          <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark bg-accent-muted dark:bg-accent-darkMuted px-2 py-1 rounded">
            {number}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};
