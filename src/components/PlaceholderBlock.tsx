import React from 'react';
import { AlertCircle } from 'lucide-react';

interface PlaceholderBlockProps {
  label: string;
  description?: string;
}

export const PlaceholderBlock: React.FC<PlaceholderBlockProps> = ({ label, description }) => {
  return (
    <div className="my-6 p-6 rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/40 text-center flex flex-col items-center justify-center">
      <AlertCircle className="w-6 h-6 text-amber-500 mb-2" />
      <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
        [PLACEHOLDER] {label}
      </p>
      {description && (
        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 max-w-md">
          {description}
        </p>
      )}
    </div>
  );
};
