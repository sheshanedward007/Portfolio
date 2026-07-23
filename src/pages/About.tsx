import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PlaceholderBlock } from '../components/PlaceholderBlock';
import { GraduationCap, Code, Layout, Terminal, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';

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
          About Sheshan
        </h1>

        <p className="text-xl font-semibold text-accent dark:text-accent-dark">
          UI/UX Design | Full-Stack Development Background | Figma, Miro, Laravel
        </p>
      </header>

      {/* Background Bio */}
      <section className="space-y-6">
        <SectionHeading title="Background & Differentiator" number="01" />
        
        <div className="prose dark:prose-invert max-w-none text-base text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
          <p>
            Sheshan is a Year 2 Computer Science undergraduate at APIIT Sri Lanka, pursuing a degree awarded in partnership with Staffordshire University. Targeting UI/UX design internship opportunities, his work combines user research, wireframing, and systemic design thinking with a solid full-stack engineering background.
          </p>

          <p>
            Unlike traditional UI designers who treat mockups as isolated static visuals, Sheshan approaches design with an acute awareness of backend architectural constraints, database schemas, authentication middleware, and frontend component lifecycles. Having led technical builds in Laravel and React alongside Figma prototyping, he designs systems that are intuitively legible for users and seamless to implement for engineering teams.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-50">Curriculum Vitae / Resume</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Download full PDF resume for internship applications</p>
          </div>
          <PlaceholderBlock label="CV PDF" description="Curriculum Vitae download link pending PDF file attachment." />
        </div>
      </section>

      {/* Core Competencies & Skills */}
      <section>
        <SectionHeading title="Core Competencies & Skillset" number="02" />

        <div className="grid sm:grid-cols-2 gap-6">
          {/* UI/UX Discipline */}
          <div className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
              <Layout className="w-5 h-5 text-accent dark:text-accent-dark" />
              <span>UI/UX Design Discipline</span>
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>User Research, Stakeholder Identification & Empathy Mapping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>User Personas & Current/Future Journey Mapping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>Information Architecture & Sitemap Hierarchy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>Figma Component Systems & Auto Layout Prototyping</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>WCAG AA/AAA Automated Contrast Verification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>Rapid Paper Ideation & Miro Research Workspace</span>
              </li>
            </ul>
          </div>

          {/* Technical & Engineering */}
          <div className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
              <Code className="w-5 h-5 text-accent dark:text-accent-dark" />
              <span>Technical & Engineering Stack</span>
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>React, Vite, TypeScript & React Router SPA Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>Tailwind CSS & Mobile-First Design Tokens</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>Laravel Full-Stack Engineering & MVC Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>REST API Integration & Authentication Middleware</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>Git, GitHub Actions CI/CD & GitHub Pages Workflows</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-dark shrink-0" />
                <span>State Machine Logic & Flowchart Modeling</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Institution */}
      <section className="p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Academic Profile
        </h3>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Year 2 Computer Science Undergraduate at Asia Pacific Institute of Information Technology (APIIT) Sri Lanka in partnership with Staffordshire University, UK. Active Technical Lead & UX Designer for the APIIT Full Stack Computing Society (FCS).
        </p>
      </section>
    </div>
  );
};
