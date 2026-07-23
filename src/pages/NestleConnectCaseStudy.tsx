import React from 'react';
import { caseStudiesData } from '../data/caseStudies';
import { SectionHeading } from '../components/SectionHeading';
import { AttributionCallout } from '../components/AttributionCallout';
import { CaseImage } from '../components/CaseImage';
import { GitBranch, CheckCircle2, Clock, AlertCircle, ArrowDown } from 'lucide-react';

// ─── Branching Flowchart ────────────────────────────────────────────────────

interface BranchFlowchartProps {
  type: 'order' | 'escalation';
}

const OrderFlowchart: React.FC = () => (
  <div className="my-8 p-6 sm:p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark shadow-sm">
    <div className="mb-6">
      <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
        <GitBranch className="w-5 h-5 text-accent dark:text-accent-dark" />
        Order Lifecycle State Diagram
      </h4>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        State machine from order placement through to delivery, with a payment-method branch determining mutability at handoff.
      </p>
    </div>

    {/* Linear top section */}
    <div className="flex flex-col items-center max-w-lg mx-auto">
      {[
        { label: 'Retailer Places Order', type: 'start' },
        { label: 'Order Received by Distributor', type: 'process' },
        { label: 'Distributor Reviews & Accepts Order', type: 'process' },
        { label: 'Distributor Assigns Delivery Agent', type: 'process' },
        { label: 'Order Delivered to Retailer', type: 'process' },
      ].map((node, i) => (
        <React.Fragment key={i}>
          {i > 0 && <div className="w-0.5 h-5 bg-accent/30 dark:bg-accent-dark/30 my-1" />}
          <div className={`w-full p-3.5 rounded-lg border text-sm font-medium text-center ${
            node.type === 'start'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
              : 'bg-neutral-50 dark:bg-neutral-800/80 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200'
          }`}>
            {node.label}
          </div>
        </React.Fragment>
      ))}

      {/* Decision diamond */}
      <div className="w-0.5 h-5 bg-accent/30 dark:bg-accent-dark/30 my-1" />
      <div className="w-full p-3.5 rounded-lg border-2 border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-sm font-bold text-center">
        ◆ Payment Method at Delivery?
      </div>

      {/* Two branches side-by-side */}
      <div className="w-full grid grid-cols-2 gap-4 mt-1 relative">
        {/* Connector lines */}
        <div className="absolute top-0 left-1/4 w-0.5 h-4 bg-amber-400/50" style={{transform:'translateX(-50%)'}} />
        <div className="absolute top-0 right-1/4 w-0.5 h-4 bg-amber-400/50" style={{transform:'translateX(50%)'}} />

        {/* Cash branch */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">Cash</span>
          <div className="w-full p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 text-xs text-center">
            <p className="font-semibold mb-1">Full order edit permitted</p>
            <p className="opacity-80">Item quantities and contents can be adjusted before the final receipt is generated.</p>
          </div>
        </div>

        {/* Credit/Card branch */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/30">Credit / Card</span>
          <div className="w-full p-3 rounded-lg border border-red-500/40 bg-red-500/10 text-red-900 dark:text-red-200 text-xs text-center">
            <p className="font-semibold mb-1">Original order locked</p>
            <p className="opacity-80">Supplementary items may be added; original items are immutable for financial reconciliation.</p>
          </div>
        </div>
      </div>

      {/* Converge */}
      <div className="w-0.5 h-5 bg-accent/30 dark:bg-accent-dark/30 mt-4 mb-1" />
      <div className="w-full p-3.5 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-200 text-sm font-bold text-center">
        ✓ Payment Confirmed — Order Complete
      </div>
    </div>
  </div>
);

const EscalationFlowchart: React.FC = () => (
  <div className="my-8 p-6 sm:p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark shadow-sm">
    <div className="mb-6">
      <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-accent dark:text-accent-dark" />
        Issue Escalation Chain
      </h4>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        Category-based routing at submission, converging into a shared time-boxed escalation loop.
      </p>
    </div>

    <div className="flex flex-col items-center max-w-lg mx-auto">
      {/* Start */}
      <div className="w-full p-3.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 text-sm font-semibold text-center">
        Retailer Submits Issue
      </div>
      <div className="w-0.5 h-5 bg-accent/30 dark:bg-accent-dark/30 my-1" />

      {/* Decision: Category routing */}
      <div className="w-full p-3.5 rounded-lg border-2 border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-sm font-bold text-center">
        ◆ Issue Category Determines Routing
      </div>

      {/* Two branch paths */}
      <div className="w-full grid grid-cols-2 gap-4 mt-1">
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/30">e.g. Damaged Goods</span>
          <div className="w-full p-3 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-200 text-xs text-center">
            Routed to relevant logistics / distribution contact
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/30">e.g. Billing Error</span>
          <div className="w-full p-3 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-900 dark:text-purple-200 text-xs text-center">
            Routed to relevant accounts / admin contact
          </div>
        </div>
      </div>

      {/* Converge into shared loop */}
      <div className="w-0.5 h-5 bg-accent/30 dark:bg-accent-dark/30 mt-4 mb-1" />
      <div className="w-full p-3.5 rounded-lg border-2 border-amber-500/50 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-sm font-bold text-center">
        ◆ Resolved Within Time Window?
      </div>

      {/* Resolved vs. Escalate */}
      <div className="w-full grid grid-cols-2 gap-4 mt-1">
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Yes</span>
          <div className="w-full p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 text-xs text-center font-semibold">
            ✓ Issue Marked Resolved
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-xs font-bold text-red-600 dark:text-red-400">No — Window Expired</span>
          <div className="w-full p-3 rounded-lg border border-red-500/40 bg-red-500/10 text-red-900 dark:text-red-200 text-xs text-center">
            <p className="font-semibold mb-1">Auto-Escalate to Next-Highest Official</p>
            <p className="opacity-80">Repeats up the hierarchy until resolved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Page ───────────────────────────────────────────────────────────────────

export const NestleConnectCaseStudy: React.FC = () => {
  const data = caseStudiesData.find(c => c.id === 'nestle-connect')!;

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-0 space-y-16">
      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1 rounded-full bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark">{data.disciplineTag}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-600 dark:text-neutral-400">Case Study 02</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">{data.title}</h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">{data.subtitle}</p>
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-surface-borderLight dark:border-surface-borderDark text-sm text-neutral-600 dark:text-neutral-400">
          <div><span className="font-semibold text-neutral-900 dark:text-neutral-200">Role: </span>{data.role}</div>
          <div><span className="font-semibold text-neutral-900 dark:text-neutral-200">Context: </span>{data.context.organization}</div>
        </div>
      </header>

      {/* Attribution */}
      <AttributionCallout type="role" title="Team & Scoped UX Ownership">
        <p>Team project — Shenal, Suchiru, Sanuth, and Sheshan Edward. Technical Lead for the project overall. UX design contribution scoped specifically to the Ordering and Issue Reporting platform.</p>
      </AttributionCallout>

      {/* 1. Context */}
      <section>
        <SectionHeading number="01" title="Context & Sprint Constraints" id="context" />
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">{data.context.overview}</p>
        <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-sm">
          <p className="font-bold mb-1">Sprint-MVP Constraint</p>
          <p className="leading-relaxed">{data.context.sprintContext}</p>
        </div>
      </section>

      {/* 2. Research Note */}
      <section>
        <SectionHeading number="02" title="Research" id="research" />
        <div className="p-5 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>{data.research?.empathyMapsNote}</p>
        </div>
      </section>

      {/* 3. Problem */}
      <section>
        <SectionHeading number="03" title="Problem" id="problem" />
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">{data.problem.summary}</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {data.problem.painPoints.map((point, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark flex flex-col">
              <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark mb-2">PAIN POINT 0{idx + 1}</span>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Key Decisions & Flowcharts */}
      <section>
        <SectionHeading number="04" title="Key Decisions & Diagrams" id="decisions" />

        {/* Order Lifecycle Flowchart */}
        <OrderFlowchart />
        <AttributionCallout type="info" title="Payment-Method Gate: Business Logic with a Direct UX Consequence">
          The delivery-point mutability branch is a real business constraint — payment method determines what the delivery agent and retailer can change at handoff. The delivery-side UI needs to surface this clearly: which items are locked, and why. Communicating a non-obvious rule at the right moment, without requiring the user to understand the underlying financial reason, is the design problem here.
        </AttributionCallout>

        {/* Issue Escalation Flowchart */}
        <EscalationFlowchart />
        <AttributionCallout type="info" title="Time-Boxed Auto-Escalation">
          The time-boxed escalation loop is a defensible business rule: no complaint can sit dormant indefinitely without a human escalation trigger. The key design implication is making the escalation status visible to the retailer — so they know their issue is moving, not stuck.
        </AttributionCallout>

        {/* Credit Split Decision */}
        {data.keyDecisions?.[0] && (
          <article className="mt-8 p-6 sm:p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-6">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">{data.keyDecisions[0].title}</h3>
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
              <CaseImage
                src={data.keyDecisions[0].images[0].src}
                alt={data.keyDecisions[0].images[0].alt}
                caption={data.keyDecisions[0].images[0].caption}
              />
            )}
          </article>
        )}
      </section>

      {/* 5. Screens */}
      <section>
        <SectionHeading number="05" title="Interface Walkthrough" id="screens" />
        <div className="space-y-10">
          {data.screens?.map((scr, idx) => (
            <article key={idx} className="p-6 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-accent dark:text-accent-dark bg-accent-muted dark:bg-accent-darkMuted px-2 py-0.5 rounded">SCREEN 0{idx + 1}</span>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">{scr.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{scr.description}</p>
              <CaseImage src={scr.src} alt={scr.alt} />
            </article>
          ))}
        </div>
      </section>

      {/* 6. Outcome */}
      <section>
        <SectionHeading number="06" title="Outcome" id="outcome" />
        <div className="p-8 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">{data.outcome.status}</span>
          </div>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">{data.outcome.summary}</p>
          {data.outcome.learningsOrCritique && (
            <div className="pt-4 border-t border-surface-borderLight dark:border-surface-borderDark space-y-2">
              <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block">Key Takeaways</span>
              <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                {data.outcome.learningsOrCritique.map((l, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2">
                    <span className="text-accent dark:text-accent-dark font-bold">·</span>
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
