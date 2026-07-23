import React from 'react';
import { Info, ShieldAlert, Users } from 'lucide-react';

interface AttributionCalloutProps {
  children?: React.ReactNode;
  text?: string;
  type?: 'role' | 'pivot' | 'info';
  title?: string;
}

export const AttributionCallout: React.FC<AttributionCalloutProps> = ({
  children,
  text,
  type = 'role',
  title
}) => {
  const getStyles = () => {
    switch (type) {
      case 'pivot':
        return {
          bg: 'bg-amber-500/10 dark:bg-amber-500/15',
          border: 'border-amber-500/40',
          text: 'text-amber-900 dark:text-amber-200',
          icon: <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        };
      case 'info':
        return {
          bg: 'bg-accent-muted dark:bg-accent-darkMuted/40',
          border: 'border-accent/30 dark:border-accent-dark/30',
          text: 'text-neutral-800 dark:text-neutral-200',
          icon: <Info className="w-5 h-5 text-accent dark:text-accent-dark shrink-0 mt-0.5" />
        };
      case 'role':
      default:
        return {
          bg: 'bg-neutral-100 dark:bg-neutral-800/60',
          border: 'border-neutral-300 dark:border-neutral-700',
          text: 'text-neutral-800 dark:text-neutral-200',
          icon: <Users className="w-5 h-5 text-neutral-600 dark:text-neutral-400 shrink-0 mt-0.5" />
        };
    }
  };

  const style = getStyles();

  return (
    <aside className={`my-6 p-4 sm:p-5 rounded-lg border ${style.bg} ${style.border} ${style.text} flex items-start gap-3 transition-colors`}>
      {style.icon}
      <div className="text-sm leading-relaxed">
        {title && <span className="font-semibold block mb-1">{title}</span>}
        {text || children}
      </div>
    </aside>
  );
};
