import React from 'react';
import { FlowchartData } from '../types';
import { ArrowDown, GitBranch, CheckCircle2, Clock } from 'lucide-react';

interface FlowchartDiagramProps {
  data: FlowchartData;
}

export const FlowchartDiagram: React.FC<FlowchartDiagramProps> = ({ data }) => {
  return (
    <div className="my-8 p-6 sm:p-8 rounded-xl bg-surface-cardLight dark:bg-surface-cardDark border border-surface-borderLight dark:border-surface-borderDark shadow-sm">
      <div className="mb-6">
        <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-accent dark:text-accent-dark" />
          <span>{data.title}</span>
        </h4>
        {data.description && (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {data.description}
          </p>
        )}
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {data.nodes.map((node, idx) => {
          const isBranch = node.type === 'branch' || node.type === 'decision';
          const isStart = node.type === 'start';
          const isEnd = node.type === 'end';
          const edgeToThisNode = data.edges.find(e => e.to === node.id);

          return (
            <React.Fragment key={node.id}>
              {idx > 0 && (
                <div className="flex flex-col items-center my-2">
                  <div className="w-0.5 h-4 bg-accent/30 dark:bg-accent-dark/30"></div>
                  {edgeToThisNode?.label && (
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-accent-muted dark:bg-accent-darkMuted text-accent dark:text-accent-dark my-1">
                      {edgeToThisNode.label}
                    </span>
                  )}
                  <ArrowDown className="w-4 h-4 text-accent dark:text-accent-dark -mt-1" />
                </div>
              )}

              <div
                className={`p-4 rounded-lg border text-sm transition-all ${
                  isStart
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200 font-semibold'
                    : isEnd
                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-900 dark:text-blue-200 font-semibold'
                    : isBranch
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-200'
                    : 'bg-neutral-50 dark:bg-neutral-800/80 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  {isStart && <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />}
                  {isBranch && <GitBranch className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />}
                  {isEnd && <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />}
                  {!isStart && !isBranch && !isEnd && <Clock className="w-4 h-4 text-accent dark:text-accent-dark shrink-0 mt-0.5" />}

                  <div>
                    <span className="font-semibold">{node.label}</span>
                    {node.details && (
                      <p className="mt-1 text-xs opacity-90 leading-relaxed">
                        {node.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
