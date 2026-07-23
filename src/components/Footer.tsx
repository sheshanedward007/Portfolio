import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-borderLight dark:border-surface-borderDark bg-surface-cardLight dark:bg-surface-cardDark mt-20 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link to="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 hover:text-accent dark:hover:text-accent-dark transition-colors">
              Sheshan
            </Link>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
              UI/UX Design | Full-Stack Development Background | APIIT Sri Lanka (Staffordshire University)
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <a 
              href="[LINKEDIN_LINK]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
            <a 
              href="[GITHUB_LINK]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
            <a 
              href="mailto:[EMAIL_LINK]" 
              className="flex items-center gap-1.5 hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-borderLight dark:border-surface-borderDark flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 dark:text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} Sheshan. Designed & Built with Vite, React, and Tailwind CSS.</p>
          <div className="flex gap-4">
            <Link to="/work/fcs" className="hover:underline">FCS Case Study</Link>
            <Link to="/work/nestle-connect" className="hover:underline">Nestlé Connect</Link>
            <Link to="/work/aura" className="hover:underline">Aura</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
