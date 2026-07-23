import React from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { SectionHeading } from '../components/SectionHeading';
import { AttributionCallout } from '../components/AttributionCallout';
import { PlaceholderBlock } from '../components/PlaceholderBlock';
import { FlowchartDiagram } from '../components/FlowchartDiagram';
import { getAssetUrl } from '../utils/assets';
import { Compass, Smile, Sparkles, Scissors, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AuraCaseStudy: React.FC = () => {
  const data = caseStudiesData.find(c => c.id === 'aura')!;

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-0 space-y-16">
      {/* Header Banner */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark">
            {data.disciplineTag}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-600 dark:text-neutral-400">Designathon Project</span>
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
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">Event:</span> {data.context.organization}
          </div>
        </div>
      </header>

      {/* Role & Team Attribution */}
      <AttributionCallout type="role" title="Team Designathon Scope & Role Attribution">
        <p>{data.attribution}</p>
      </AttributionCallout>

      {/* 1. Context & Workshop Method */}
      <section>
        <SectionHeading number="01" title="Context & Ideation Methodology" id="context" />
        <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
          <p>{data.context.overview}</p>

          <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm space-y-2">
            <h4 className="font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Compass className="w-4 h-4 text-accent dark:text-accent-dark" />
              <span>Workshop Method: 8-Section A4 Folding Exercise</span>
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              During the initial ideation week, the team applied a workshop-taught paper exercise: folding an A4 sheet into eight equal sections for rapid 1-minute concept sketching. This constraint forced quick ideation and directly generated the <em>Mood Check-in</em> and <em>AI Post-Trip Journal</em> concepts.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section>
        <SectionHeading number="02" title="Problem & Infrastructure Fragmentation" id="problem" />
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          {data.problem.summary}
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {data.problem.painPoints.map((point, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
              <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark block mb-2">FRAGILE WORKFLOW 0{idx + 1}</span>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Research & Personas */}
      <section>
        <SectionHeading number="03" title="Research Framing & Competition Personas" id="research" />
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          {data.research?.framing}
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {data.research?.personas?.map((p, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-50 text-base mb-1">{p.name}</h4>
              <p className="text-xs text-accent dark:text-accent-dark font-medium mb-3">{p.role}</p>
              <blockquote className="text-xs italic text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900 p-2.5 rounded mb-3 border-l-2 border-accent dark:border-accent-dark">
                {p.quote}
              </blockquote>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {p.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Headline Ideation Concepts */}
      <section>
        <SectionHeading number="04" title="Headline Ideation Concepts" id="ideation" />
        
        <div className="space-y-12">
          {data.keyDecisions?.map((dec, idx) => (
            <article key={idx} className="p-6 sm:p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent dark:text-accent-dark" />
                <span>{dec.title}</span>
              </h3>

              <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-red-600 dark:text-red-400 block mb-1">Gap in Market</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.problem}</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Proposed Concept</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.decision}</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1">Design Trade-off</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.tradeoff}</p>
                </div>
              </div>

              {dec.images && (
                <figure className="rounded-xl overflow-hidden border border-surface-borderLight dark:border-surface-borderDark bg-neutral-900">
                  <img
                    src={getAssetUrl(dec.images[0].src)}
                    alt={dec.images[0].alt}
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3 text-xs text-center text-neutral-400 bg-neutral-950 border-t border-neutral-800">
                    {dec.images[0].caption}
                  </figcaption>
                </figure>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 5. Concept Scoped Out (Weather Filtering) */}
      {data.ideationCut && (
        <section>
          <SectionHeading number="05" title="Proposed & Scoped-Out Concept" id="cut" />
          <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 space-y-3">
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>{data.ideationCut.title}</span>
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <strong>Proposed Idea:</strong> {data.ideationCut.proposed}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              <strong>Reasoning for Cut:</strong> {data.ideationCut.reasoning}
            </p>
          </div>
        </section>
      )}

      {/* 6. Retroactive Logic Flowchart */}
      <section>
        <SectionHeading number="06" title="Mood-to-Destination Logic Diagram" id="flowchart" />
        {data.flowcharts?.[0] && (
          <FlowchartDiagram data={data.flowcharts[0]} />
        )}

        <AttributionCallout type="info" title="Portfolio Documentation Callout">
          <p>
            The Mood-to-Destination logic diagram above was created retroactively to illustrate how Sheshan’s mood check-in concept maps to recommendation filter logic for portfolio documentation.
          </p>
        </AttributionCallout>
      </section>

      {/* 7. Transport Wireframe & UI Note */}
      <section>
        <SectionHeading number="07" title="Transport & UI Integration" id="wireframe" />
        <div className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
          <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Transport & Rideshare Integration Wireframe</h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The team integrated local rideshare and transport options directly into the destination detail wireframe to solve transport handoff friction.
          </p>
          <PlaceholderBlock label="Transport / Rideshare Wireframe Screenshot" description="Wireframe screenshot pending teammate export." />
        </div>
      </section>

      {/* 8. Outcome & Honest Critiques */}
      <section>
        <SectionHeading number="08" title="Competition Outcome & Judge Critique" id="outcome" />
        <div className="p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              {data.outcome.status}
            </span>
          </div>

          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {data.outcome.summary}
          </p>

          <div className="pt-4 border-t border-surface-borderLight dark:border-surface-borderDark space-y-4">
            <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100 block flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Honest Post-Mortem & Critical Judge Feedback:</span>
            </span>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.outcome.learningsOrCritique?.map((crit, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs leading-relaxed">
                  <span className="font-bold block mb-1">Critique 0{idx + 1}</span>
                  <p>{crit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
