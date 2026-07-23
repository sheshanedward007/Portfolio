import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PlaceholderBlock } from '../components/PlaceholderBlock';
import { GraduationCap, Code, Layout, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-0 space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark">
          <GraduationCap className="w-4 h-4" />
          <span>APIIT Sri Lanka (Staffordshire University)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          About Me
        </h1>

        <p className="text-xl font-semibold text-accent dark:text-accent-dark">
          UI/UX Design | Full-Stack Development Background | Figma, Miro, Laravel
        </p>
      </header>

      {/* Bio */}
      <section className="space-y-6">
        <SectionHeading title="Background" number="01" />

        <div className="prose dark:prose-invert max-w-none text-base text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
          <p>
            I'm Sheshan Edward — a Year 2 Computer Science undergraduate at APIIT Sri Lanka, pursuing a degree in partnership with Staffordshire University. I'm targeting UI/UX design internship opportunities.
          </p>

          <p>
            My background spans both design and engineering. I've run full UX processes — research, personas, journey mapping, information architecture, wireframes, high-fidelity prototyping — and I've also built full-stack applications in Laravel and React. That combination shapes how I approach design: I think about what's feasible to implement, how authentication gates and state machines behave under edge cases, and what a developer needs from a handoff to not have to guess at intent.
          </p>

          <p>
            I'm currently UX Researcher & Designer for the APIIT Full Stack Computing Society (FCS), where I led the design process for the society's first official web platform — from stakeholder research through to a high-fidelity prototype.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-50">Curriculum Vitae</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Download my full CV for internship applications</p>
          </div>
          <PlaceholderBlock label="CV PDF not yet attached" description="Will be linked once the file is ready." />
        </div>
      </section>

      {/* Skills */}
      <section>
        <SectionHeading title="Skills & Tools" number="02" />

        <div className="grid sm:grid-cols-2 gap-6">
          {/* UI/UX */}
          <div className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
              <Layout className="w-5 h-5 text-accent dark:text-accent-dark" />
              <span>UI/UX Design</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {[
                'User Research, Stakeholder Mapping & Empathy Mapping',
                'Personas & Current / Future State Journey Mapping',
                'Information Architecture & Sitemap Hierarchy',
                'Figma — Component Systems, Auto Layout, High-Fidelity Prototyping',
                'Miro — Research Workspaces, Affinity Mapping, Journey Maps',
                'WCAG AA/AAA Contrast Verification',
                'Rapid Paper Ideation & Concept Development',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering */}
          <div className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
              <Code className="w-5 h-5 text-accent dark:text-accent-dark" />
              <span>Engineering Background</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {[
                'React, Vite & TypeScript',
                'Tailwind CSS & Mobile-First Design',
                'Laravel — Full-Stack MVC Architecture',
                'REST API Integration & Authentication Middleware',
                'Git, GitHub Actions CI/CD & GitHub Pages Deployment',
                'State Machine Modelling & Flowchart Documentation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Academic */}
      <section className="p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Education
        </h3>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          BSc (Hons) Computer Science — Year 2<br />
          <span className="text-neutral-500 dark:text-neutral-400">Asia Pacific Institute of Information Technology (APIIT) Sri Lanka, in partnership with Staffordshire University, UK</span>
        </p>
      </section>
    </div>
  );
};
