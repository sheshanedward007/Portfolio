import React from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { SectionHeading } from '../components/SectionHeading';
import { AttributionCallout } from '../components/AttributionCallout';
import { PlaceholderBlock } from '../components/PlaceholderBlock';
import { CaseImage } from '../components/CaseImage';
import { Compass, Sparkles, Scissors, AlertTriangle } from 'lucide-react';

export const AuraCaseStudy: React.FC = () => {
  const data = caseStudiesData.find(c => c.id === 'aura')!;

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-0 space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark">{data.disciplineTag}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-600 dark:text-neutral-400">Designathon</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">{data.title}</h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">{data.subtitle}</p>
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-surface-borderLight dark:border-surface-borderDark text-sm text-neutral-600 dark:text-neutral-400">
          <div><span className="font-semibold text-neutral-900 dark:text-neutral-200">Role: </span>{data.role}</div>
          <div><span className="font-semibold text-neutral-900 dark:text-neutral-200">Event: </span>{data.context.organization}</div>
        </div>
      </header>

      {/* Role Attribution — stated once, clearly */}
      <AttributionCallout type="role" title="Team & Role">
        <p>{data.attribution}</p>
      </AttributionCallout>

      {/* 1. Context */}
      <section>
        <SectionHeading number="01" title="Context" id="context" />
        <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4 text-base">
          <p>{data.context.overview}</p>
          <div className="p-5 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm">
            <h4 className="font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-accent dark:text-accent-dark" />
              Paper Ideation — 8-Section A4 Method
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              One of the workshop exercises involved folding an A4 sheet into eight sections and spending roughly a minute per section sketching a distinct concept — a constraint that forces divergent thinking quickly. Two of the ideas that came out of that session, the mood check-in and the AI post-trip journal, made it into the final submission.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section>
        <SectionHeading number="02" title="Problem" id="problem" />
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">{data.problem.summary}</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {data.problem.painPoints.map((point, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
              <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark block mb-2">GAP 0{idx + 1}</span>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Research & Personas */}
      <section>
        <SectionHeading number="03" title="Research & Personas" id="research" />
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">{data.research?.framing}</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {data.research?.personas?.map((p, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-50 text-base mb-1">{p.name}</h4>
              <p className="text-xs text-accent dark:text-accent-dark font-medium mb-3">{p.role}</p>
              <blockquote className="text-xs italic text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900 p-2.5 rounded mb-3 border-l-2 border-accent dark:border-accent-dark">
                {p.quote}
              </blockquote>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{p.details}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 italic">
          Personas were authored collaboratively by the team during the competition. All three were submitted as part of the final presentation.
        </p>
      </section>

      {/* 4. Ideation Concepts */}
      <section>
        <SectionHeading number="04" title="Ideation — Headline Concepts" id="ideation" />
        <div className="space-y-12">
          {data.keyDecisions?.map((dec, idx) => (
            <article key={idx} className="p-6 sm:p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent dark:text-accent-dark" />
                <span>{dec.title}</span>
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-red-600 dark:text-red-400 block mb-1">Gap</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.problem}</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Concept</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.decision}</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1">Trade-off</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.tradeoff}</p>
                </div>
              </div>
              {dec.images && dec.images.length > 0 && (
                <CaseImage src={dec.images[0].src} alt={dec.images[0].alt} caption={dec.images[0].caption} />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 5. Proposed & Cut */}
      {data.ideationCut && (
        <section>
          <SectionHeading number="05" title="Proposed & Scoped Out" id="cut" />
          <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 space-y-3">
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>{data.ideationCut.title}</span>
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <strong>Proposed: </strong>{data.ideationCut.proposed}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              <strong>Cut because: </strong>{data.ideationCut.reasoning}
            </p>
          </div>
        </section>
      )}

      {/* 6. Mood Logic Diagram */}
      <section>
        <SectionHeading number="06" title="Mood-to-Destination Logic" id="logic" />

        {/* Simplified linear flowchart — no intermediate branches */}
        <div className="my-8 p-6 sm:p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark shadow-sm">
          <div className="flex flex-col items-center max-w-lg mx-auto gap-3">
            {[
              { label: 'User Completes Daily Mood Check-in', type: 'start' },
              { label: 'Mood State Selected\n(Energized · Relaxed · Curious · Tired · Spontaneous)', type: 'process' },
              { label: 'AI Engine Synthesises Recommendations', type: 'process' },
              { label: 'Personalised Day Plan Generated', type: 'end' },
            ].map((node, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="w-0.5 h-4 bg-accent/30 dark:bg-accent-dark/30" />}
                <div className={`w-full p-3.5 rounded-lg border text-sm text-center ${
                  node.type === 'start'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200 font-semibold'
                    : node.type === 'end'
                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-900 dark:text-blue-200 font-semibold'
                    : 'bg-neutral-50 dark:bg-neutral-800/80 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200'
                }`}>
                  {node.label.split('\n').map((line, li) => (
                    <span key={li} className={li > 0 ? 'block text-xs opacity-75 mt-0.5' : ''}>{line}</span>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <AttributionCallout type="info" title="Portfolio Documentation Note">
          I built this logic diagram after the competition to document how the mood check-in maps to the recommendation engine. It wasn't part of the original submission — there was no formal requirement for it during the competition week.
        </AttributionCallout>
      </section>

      {/* 7. Outcome */}
      <section>
        <SectionHeading number="07" title="Outcome & Judge Feedback" id="outcome" />
        <div className="p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">{data.outcome.status}</span>
          </div>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">{data.outcome.summary}</p>

          <div className="pt-4 border-t border-surface-borderLight dark:border-surface-borderDark space-y-4">
            <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Critical Feedback — Presented Plainly
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
