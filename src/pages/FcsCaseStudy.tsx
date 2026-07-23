import React from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { SectionHeading } from '../components/SectionHeading';
import { AttributionCallout } from '../components/AttributionCallout';
import { PlaceholderBlock } from '../components/PlaceholderBlock';
import { ArrowUpRight, CheckCircle, ExternalLink, ShieldCheck, UserCheck, Sparkles, Layers, Lock, Cpu } from 'lucide-react';

export const FcsCaseStudy: React.FC = () => {
  const data = caseStudiesData.find(c => c.id === 'fcs')!;

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-0 space-y-16">
      {/* Header Banner */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark">
            {data.disciplineTag}
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-600 dark:text-neutral-400">Lead Case Study</span>
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
            <span className="font-semibold text-neutral-900 dark:text-neutral-200">Organization:</span> {data.context.organization}
          </div>
        </div>
      </header>

      {/* Main Ownership Statement */}
      <AttributionCallout type="role" title="Project Ownership & Scope">
        <p>{data.attribution}</p>
      </AttributionCallout>

      {/* 1. Context */}
      <section>
        <SectionHeading number="01" title="Context" id="context" />
        <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
          <p>{data.context.overview}</p>
          <p>
            The case study presented here reflects the actual ongoing project for FCS APIIT. All research artefacts, wireframes, information architecture diagrams, and frontend code structures were developed to produce a production-grade web platform for the society.
          </p>
          
          <div className="mt-4 p-4 rounded-lg bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Official Society Platform Link:</span>
            {data.context.liveUrl ? (
              <PlaceholderBlock label={data.context.liveUrl} description="Live site URL link will be updated upon official domain deployment." />
            ) : (
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/10 text-amber-600">Launching Soon</span>
            )}
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section>
        <SectionHeading number="02" title="Problem" id="problem" />
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          {data.problem.summary}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.problem.painPoints.map((point, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex items-start gap-3">
              <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark bg-accent-muted dark:bg-accent-darkMuted px-2 py-0.5 rounded shrink-0 mt-0.5">
                P{idx + 1}
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Research */}
      <section>
        <SectionHeading number="03" title="Research & Discovery" id="research" />
        
        {/* Stakeholders */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-accent dark:text-accent-dark" />
            <span>Identified Stakeholder Groups</span>
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {data.research?.stakeholders?.map((sh, idx) => (
              <li key={idx} className="p-3 rounded bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark shrink-0"></span>
                <span>{sh}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Empathy Mapping Summary */}
        <div className="mb-10 p-5 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
          <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Empathy Mapping (Says / Thinks / Does / Feels)
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Full empathy maps were constructed across four key quadrants for Industry Recruiters, Prospective Members, General Members, and Committee Officers. This mapping surfaced emotional barriers — such as non-computing students feeling excluded and recruiters feeling frustrated by unverified Instagram claims.
          </p>
        </div>

        {/* Personas */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            User Personas & Key Differentiator
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.research?.personas?.map((p, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all ${
                  p.highlight
                    ? 'bg-accent-muted/40 dark:bg-accent-darkMuted/30 border-accent/40 dark:border-accent-dark/40 shadow-sm'
                    : 'bg-surface-cardLight dark:bg-surface-cardDark border-surface-borderLight dark:border-surface-borderDark'
                }`}
              >
                {p.tag && (
                  <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-accent dark:bg-accent-dark text-white mb-2">
                    {p.tag}
                  </span>
                )}
                <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">{p.name}</h4>
                <p className="text-xs font-medium text-accent dark:text-accent-dark mb-3">{p.role}</p>
                <blockquote className="text-xs italic text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/80 p-3 rounded border-l-2 border-accent dark:border-accent-dark mb-3">
                  {p.quote}
                </blockquote>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {p.details}
                </p>
              </div>
            ))}
          </div>

          <AttributionCallout type="info" title="Why Persona Mark Cooray is a Key Portfolio Differentiator">
            <p>
              Most student club portfolio projects design strictly for fellow students. Incorporating <strong>Mark Cooray (Industry Recruiter & Sponsor)</strong> as a primary persona forced the system to deliver high-density, verifiable society metrics, public project portfolios, and clear governance details on first visit.
            </p>
          </AttributionCallout>
        </div>

        {/* Journey Maps */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            User Journey Mapping (Current vs. Future State)
          </h3>

          {/* Prospective Member Table */}
          <div className="mb-8">
            <h4 className="text-sm font-bold text-accent dark:text-accent-dark uppercase tracking-wider mb-3">
              1. Prospective Member Joining Journey (Full Breakdown)
            </h4>
            <div className="overflow-x-auto rounded-xl border border-surface-borderLight dark:border-surface-borderDark">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border-b border-surface-borderLight dark:border-surface-borderDark font-semibold">
                  <tr>
                    <th className="p-3 sm:p-4">Stage</th>
                    <th className="p-3 sm:p-4 text-red-600 dark:text-red-400">Current Pain Point</th>
                    <th className="p-3 sm:p-4 text-emerald-600 dark:text-emerald-400">Future Web Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-borderLight dark:divide-surface-borderDark bg-surface-cardLight dark:bg-surface-cardDark">
                  {data.research?.journeyMaps?.[0].fullTable?.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="p-3 sm:p-4 font-semibold text-neutral-900 dark:text-neutral-100">{row.stage}</td>
                      <td className="p-3 sm:p-4 text-neutral-600 dark:text-neutral-400">{row.currentPain}</td>
                      <td className="p-3 sm:p-4 text-neutral-800 dark:text-neutral-200 font-medium">{row.futureSolution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summarized Journeys */}
          <div className="grid sm:grid-cols-2 gap-6">
            {data.research?.journeyMaps?.slice(1).map((jm, jIdx) => (
              <div key={jIdx} className="p-5 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
                <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-1">{jm.title}</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">{jm.description}</p>
                <div className="space-y-3">
                  {jm.summaryRows?.map((sr, sIdx) => (
                    <div key={sIdx} className="p-3 rounded bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs">
                      <span className="font-semibold text-accent dark:text-accent-dark block mb-1">{sr.stage}</span>
                      <p className="text-neutral-500 dark:text-neutral-400 mb-1"><strong>Before:</strong> {sr.currentPain}</p>
                      <p className="text-neutral-800 dark:text-neutral-200"><strong>With Web Platform:</strong> {sr.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HMW Statements */}
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            "How Might We" (HMW) Research Bridges
          </h3>
          <div className="space-y-4">
            {data.research?.hmwStatements?.map((hmw, hIdx) => (
              <div key={hIdx} className="p-4 rounded-lg bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="font-medium text-sm text-neutral-900 dark:text-neutral-100 flex items-start gap-2">
                  <span className="text-accent dark:text-accent-dark font-bold">HMW:</span>
                  <span>"{hmw.question}"</span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded sm:max-w-xs shrink-0">
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Design Connection:</span> {hmw.connection}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Information Architecture */}
      <section>
        <SectionHeading number="04" title="Information Architecture" id="ia" />
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Public Branch */}
          <div className="p-6 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent dark:text-accent-dark" />
              <span>Public Branch Sitemap</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {data.informationArchitecture?.sitemapPublic.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent dark:text-accent-dark font-bold">└</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CMS Branch */}
          <div className="p-6 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
            <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-500" />
              <span>CMS Admin Branch Sitemap</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {data.informationArchitecture?.sitemapCms.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">└</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Structural Callouts */}
        <div className="space-y-2">
          {data.informationArchitecture?.decisions.map((dec, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-accent dark:text-accent-dark shrink-0 mt-0.5" />
              <span><strong>Architectural Decision:</strong> {dec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. User Flows & Auth Middleware */}
      <section>
        <SectionHeading number="05" title="User Flows & Systemic Verification" id="flows" />
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          {data.userFlows?.summary}
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent dark:text-accent-dark" />
              <span>CMS Middleware Access Gate</span>
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {data.userFlows?.middlewareNote}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark">
            <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent dark:text-accent-dark" />
              <span>Two-Tier Auth & MojoAuth Integration</span>
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {data.userFlows?.mojoAuthNote}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Design Decisions & Visual Evidence */}
      <section>
        <SectionHeading number="06" title="Key Design Decisions & Evidence" id="decisions" />
        
        <div className="space-y-12">
          {data.keyDecisions?.map((dec, idx) => (
            <article key={idx} className="p-6 sm:p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark"></span>
                <span>{dec.title}</span>
              </h3>

              <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-red-600 dark:text-red-400 block mb-1">Problem</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.problem}</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Decision</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.decision}</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1">Trade-off</span>
                  <p className="text-neutral-600 dark:text-neutral-400">{dec.tradeoff}</p>
                </div>
              </div>

              {dec.callout && (
                <AttributionCallout type="pivot" title="Data-Driven Pivot">
                  <p>{dec.callout}</p>
                </AttributionCallout>
              )}

              {/* Image Evidence */}
              {dec.images && dec.images.length > 0 && (
                <div className="space-y-4 pt-2">
                  {dec.images.map((img, imgIdx) => (
                    <figure key={imgIdx} className="rounded-xl overflow-hidden border border-surface-borderLight dark:border-surface-borderDark bg-neutral-900">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover max-h-[500px]"
                        loading="lazy"
                      />
                      {img.caption && (
                        <figcaption className="p-3 text-xs text-center text-neutral-400 bg-neutral-950 border-t border-neutral-800">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 7. Prototype Links & Caveats */}
      <section>
        <SectionHeading number="07" title="Prototype & Deliverables" id="prototype" />
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Figma High-Fidelity Prototype</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Complete UI component library & screens</p>
            </div>
            <PlaceholderBlock label={data.prototype?.figmaUrl || 'Figma Link'} description="Interactive Figma design file" />
          </div>

          <div className="p-5 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">Miro Research Workspace</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Affinity mapping, journey maps & IA</p>
            </div>
            <PlaceholderBlock label={data.prototype?.miroUrl || 'Miro Link'} description="Interactive Miro research board" />
          </div>
        </div>

        <div className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
          <p>• {data.prototype?.implementationGapNote}</p>
          <p>• {data.prototype?.unsplashNote}</p>
        </div>
      </section>

      {/* 8. Outcome & Status */}
      <section>
        <SectionHeading number="08" title="Outcome & Reflection" id="outcome" />
        <div className="p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
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

// Helper icon component
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
