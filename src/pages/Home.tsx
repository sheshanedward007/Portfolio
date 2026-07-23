import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudies';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { ArrowRight, Linkedin, Github, Mail, Sparkles, Code, Layout } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>UI/UX Designer & Full-Stack Developer</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15]">
          Hi, I'm Sheshan Edward. <br />
          <span className="text-accent dark:text-accent-dark font-semibold text-2xl sm:text-4xl lg:text-5xl block mt-2">
            Engineering-grounded UI/UX design.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-xl font-medium text-neutral-600 dark:text-neutral-300">
          UI/UX Design | Full-Stack Development Background | Figma, Miro, Laravel
        </p>

        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          Year 2 Computer Science undergraduate at APIIT Sri Lanka (Staffordshire University partnership), targeting UI/UX design internship opportunities. I combine user research and structured design thinking with full-stack engineering experience — so the interfaces I design are grounded in what's actually feasible to build.
        </p>

        {/* Quick Capabilities */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-surface-cardLight dark:bg-surface-cardDark px-3.5 py-2 rounded-lg border border-surface-borderLight dark:border-surface-borderDark">
            <Layout className="w-4 h-4 text-accent dark:text-accent-dark" />
            <span>Figma & Miro System Design</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-surface-cardLight dark:bg-surface-cardDark px-3.5 py-2 rounded-lg border border-surface-borderLight dark:border-surface-borderDark">
            <Code className="w-4 h-4 text-accent dark:text-accent-dark" />
            <span>Full-Stack Build Feasibility</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center sm:justify-start">
          <a
            href="#work"
            className="px-6 py-3 rounded-lg bg-accent dark:bg-accent-dark text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/about"
            className="px-6 py-3 rounded-lg border border-surface-borderLight dark:border-surface-borderDark text-neutral-700 dark:text-neutral-200 font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            About & Background
          </Link>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section id="work" className="scroll-mt-20">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-borderLight dark:border-surface-borderDark">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Featured Case Studies
            </h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              In-depth research, design decisions, and engineering trade-offs across three projects.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {caseStudiesData.map((cs, idx) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} index={idx} />
          ))}
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="p-8 sm:p-10 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark transition-colors">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Design grounded in technical trade-offs.
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            A lot of designers hand off mockups without knowing how authentication gates, database schemas, or state machines behave under edge cases. Having built full-stack applications in Laravel and React, I design interfaces that are intuitively legible for users and architecturally sound for the engineers implementing them.
          </p>
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent dark:text-accent-dark hover:underline"
            >
              <span>More about my approach and background</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
          Let's Connect
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
          Currently open to UI/UX design internship opportunities and collaborative technical projects.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/sheshan-edward-206a4b336/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-surface-borderLight dark:border-surface-borderDark bg-surface-cardLight dark:bg-surface-cardDark text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:border-accent dark:hover:border-accent-dark flex items-center gap-2 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-accent dark:text-accent-dark" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/sheshanedward007"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-surface-borderLight dark:border-surface-borderDark bg-surface-cardLight dark:bg-surface-cardDark text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:border-accent dark:hover:border-accent-dark flex items-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4 text-accent dark:text-accent-dark" />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:sheshanedward007@gmail.com"
            className="px-5 py-2.5 rounded-lg bg-accent dark:bg-accent-dark text-white text-sm font-medium hover:opacity-90 flex items-center gap-2 transition-opacity shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>sheshanedward007@gmail.com</span>
          </a>
        </div>
      </section>
    </div>
  );
};
