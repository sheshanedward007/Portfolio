import React from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { SectionHeading } from '../components/SectionHeading';
import { AttributionCallout } from '../components/AttributionCallout';
import { FlowchartDiagram } from '../components/FlowchartDiagram';
import { getAssetUrl } from '../utils/assets';
import { ShoppingCart, AlertCircle, CreditCard, ShieldCheck, Layers, GitBranch, ArrowRight } from 'lucide-react';

export const NestleConnectCaseStudy: React.FC = () => {
  const data = caseStudiesData.find(c => c.id === 'nestle-connect')!;

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-0 space-y-16">
      {/* Header Banner */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark">
            {data.disciplineTag}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-600 dark:text-neutral-400">Case Study 02</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {data.title}
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
          {data.subtitle}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-surface-borderLight dark:border-surface-borderDark text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">Role:</span> {data.role}
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">Context:</span> {data.context.organization}
          </div>
        </div>
      </header>

      {/* Attribution Callout */}
      <AttributionCallout type="role" title="Honest Role Attribution & Scoped UX Ownership">
        <p>{data.attribution}</p>
      </AttributionCallout>

      {/* 1. Context & Sprint Constraints */}
      <section>
        <SectionHeading number="01" title="Context & Scrum Constraints" id="context" />
        <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
          <p>{data.context.overview}</p>
          
          <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-sm">
            <h4 className="font-bold mb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Sprint-MVP Scoping Constraint</span>
            </h4>
            <p className="leading-relaxed">
              {data.context.sprintContext}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Research Note */}
      <section>
        <SectionHeading number="02" title="Research Note" id="research" />
        <div className="p-5 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>{data.research?.empathyMapsNote}</p>
        </div>
      </section>

      {/* 3. Problem */}
      <section>
        <SectionHeading number="03" title="Problem Statement" id="problem" />
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          {data.problem.summary}
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {data.problem.painPoints.map((point, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex flex-col justify-between">
              <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark mb-2">PAIN POINT 0{idx + 1}</span>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Key Decisions & State Diagrams */}
      <section>
        <SectionHeading number="04" title="Key Architectural Decisions & Flowcharts" id="decisions" />
        
        {/* Order Lifecycle Flowchart */}
        {data.flowcharts?.[0] && (
          <FlowchartDiagram data={data.flowcharts[0]} />
        )}

        <AttributionCallout type="info" title="Business-Logic Constraint: Order Mutability at Delivery">
          <p>
            Notice the crucial branch in the flowchart above: <strong>Cash payment</strong> allows shopkeepers to adjust item quantities upon delivery, whereas <strong>Credit/Card payment</strong> locks the original invoice for accounting reconciliation, permitting only supplementary items to be added. Communicating this lock status explicitly in the delivery agent UI prevented unauthorized receipt edits.
          </p>
        </AttributionCallout>

        {/* Issue Escalation Chain Flowchart */}
        {data.flowcharts?.[1] && (
          <FlowchartDiagram data={data.flowcharts[1]} />
        )}

        <AttributionCallout type="info" title="Time-Boxed Auto-Escalation Engine Rationale">
          <p>
            By introducing an automated timer trigger to complaints, unresolved grievances regarding damaged FMCG items climb the manager hierarchy automatically. This defensible business logic ensures zero issues sit dormant indefinitely without human intervention.
          </p>
        </AttributionCallout>

        {/* Payment Credit-Split UI Decision */}
        {data.keyDecisions?.[0] && (
          <article className="mt-8 p-6 sm:p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-accent dark:text-accent-dark" />
              <span>{data.keyDecisions[0].title}</span>
            </h3>

            <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                <span className="font-bold text-red-600 dark:text-red-400 block mb-1">Problem</span>
                <p className="text-neutral-600 dark:text-neutral-400">{data.keyDecisions[0].problem}</p>
              </div>
              <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Decision</span>
                <p className="text-neutral-600 dark:text-neutral-400">{data.keyDecisions[0].decision}</p>
              </div>
              <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1">Trade-off</span>
                <p className="text-neutral-600 dark:text-neutral-400">{data.keyDecisions[0].tradeoff}</p>
              </div>
            </div>

            {data.keyDecisions[0].images && (
              <figure className="rounded-xl overflow-hidden border border-surface-borderLight dark:border-surface-borderDark bg-neutral-900">
                <img
                  src={getAssetUrl(data.keyDecisions[0].images[0].src)}
                  alt={data.keyDecisions[0].images[0].alt}
                  className="w-full h-auto object-cover max-h-[500px]"
                  loading="lazy"
                />
                <figcaption className="p-3 text-xs text-center text-neutral-400 bg-neutral-950 border-t border-neutral-800">
                  {data.keyDecisions[0].images[0].caption}
                </figcaption>
              </figure>
            )}
          </article>
        )}
      </section>

      {/* 5. Interface Screens & Visual Walkthrough */}
      <section>
        <SectionHeading number="05" title="Platform Interface Walkthrough" id="screens" />
        
        <div className="space-y-10">
          {data.screens?.map((scr, idx) => (
            <article key={idx} className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark bg-accent-muted dark:bg-accent-darkMuted px-2 py-0.5 rounded">
                  SCREEN 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  {scr.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {scr.description}
              </p>

              <figure className="rounded-xl overflow-hidden border border-surface-borderLight dark:border-surface-borderDark bg-neutral-900">
                <img
                  src={getAssetUrl(scr.src)}
                  alt={scr.alt}
                  className="w-full h-auto object-cover max-h-[500px]"
                  loading="lazy"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Outcome */}
      <section>
        <SectionHeading number="06" title="Outcome & Project Delivery" id="outcome" />
        <div className="p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              {data.outcome.status}
            </span>
          </div>

          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {data.outcome.summary}
          </p>

          {data.outcome.learningsOrCritique && (
            <div className="pt-4 border-t border-surface-borderLight dark:border-surface-borderDark space-y-2">
              <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block">Key Learnings:</span>
              <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                {data.outcome.learningsOrCritique.map((l, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2">
                    <span className="text-accent dark:text-accent-dark font-bold">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
