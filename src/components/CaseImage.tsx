import React, { useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Full view: ${alt}`}
    >
      <button
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={getAssetUrl(src)}
        alt={alt}
        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

interface CaseImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export const CaseImage: React.FC<CaseImageProps> = ({ src, alt, caption, className = '' }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <figure className={`rounded-xl overflow-hidden border border-surface-borderLight dark:border-surface-borderDark bg-neutral-900 ${className}`}>
        <div
          className="relative group cursor-zoom-in"
          onClick={() => setOpen(true)}
          role="button"
          aria-label={`View full image: ${alt}`}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
        >
          <img
            src={getAssetUrl(src)}
            alt={alt}
            className="w-full h-auto object-cover max-h-[420px]"
            loading="lazy"
          />
          {/* Always visible subtle pill badge in top right */}
          <div className="absolute top-2.5 right-2.5 pointer-events-none">
            <span className="flex items-center gap-1 text-[11px] font-medium text-white/90 bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
              <ZoomIn className="w-3 h-3 text-white/80" />
              Click to expand
            </span>
          </div>

          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-white text-xs font-semibold bg-black/75 px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-md">
              <ZoomIn className="w-3.5 h-3.5" />
              Click to view full image
            </span>
          </div>
        </div>
        {caption ? (
          <figcaption className="p-3 text-xs text-center text-neutral-400 bg-neutral-950 border-t border-neutral-800 flex items-center justify-center gap-1.5 flex-wrap">
            <span>{caption}</span>
            <span className="text-neutral-500 font-normal shrink-0">· (Click image to expand)</span>
          </figcaption>
        ) : (
          <div className="px-3 py-1.5 text-[11px] text-center text-neutral-500 bg-neutral-950 border-t border-neutral-800 flex items-center justify-center gap-1">
            <ZoomIn className="w-3 h-3" />
            <span>Click image to expand</span>
          </div>
        )}
      </figure>

      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
};
