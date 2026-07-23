import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CaseStudyData } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
  index: number;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
  return (
    <article className="group bg-surface-cardLight dark:bg-surface-cardDark rounded-xl border border-surface-borderLight dark:border-surface-borderDark overflow-hidden hover:border-accent dark:hover:border-accent-dark transition-all duration-300 shadow-sm hover:shadow-md flex flex-col md:flex-row">
      {/* Thumbnail */}
      <div className="md:w-1/2 overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-video md:aspect-auto relative min-h-[220px]">
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-neutral-950/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md">
          0{index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark">
              {caseStudy.disciplineTag}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors tracking-tight">
            <Link to={`/work/${caseStudy.slug}`}>
              {caseStudy.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            {caseStudy.role}
          </p>

          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
            {caseStudy.subtitle}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-surface-borderLight dark:border-surface-borderDark flex items-center justify-between">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {caseStudy.context.organization}
          </span>

          <Link
            to={`/work/${caseStudy.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent dark:text-accent-dark group-hover:translate-x-1 transition-transform"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};
