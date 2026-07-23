export interface Persona {
  name: string;
  role: string;
  quote: string;
  highlight?: boolean;
  tag?: string;
  details: string;
}

export interface JourneyStage {
  stage: string;
  currentPain: string;
  futureSolution: string;
}

export interface JourneyMap {
  title: string;
  description: string;
  fullTable?: JourneyStage[];
  summaryRows?: { stage: string; currentPain: string; solution: string }[];
}

export interface HmwStatement {
  question: string;
  connection: string;
}

export interface DesignDecision {
  title: string;
  problem: string;
  decision: string;
  tradeoff: string;
  images?: { src: string; alt: string; caption?: string }[];
  callout?: string;
}

export interface FlowchartNode {
  id: string;
  label: string;
  type?: 'start' | 'process' | 'decision' | 'end' | 'branch';
  details?: string;
}

export interface FlowchartEdge {
  from: string;
  to: string;
  label?: string;
}

export interface FlowchartData {
  title: string;
  description?: string;
  nodes: FlowchartNode[];
  edges: FlowchartEdge[];
}

export interface CaseStudyData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  disciplineTag: string;
  thumbnail: string;
  attribution: string;
  context: {
    overview: string;
    organization?: string;
    sprintContext?: string;
    liveUrl?: string;
  };
  problem: {
    summary: string;
    painPoints: string[];
  };
  research?: {
    stakeholders?: string[];
    empathyMapsNote?: string;
    personas?: Persona[];
    journeyMaps?: JourneyMap[];
    hmwStatements?: HmwStatement[];
    framing?: string;
  };
  informationArchitecture?: {
    sitemapPublic: string[];
    sitemapCms: string[];
    decisions: string[];
  };
  userFlows?: {
    summary: string;
    middlewareNote?: string;
    mojoAuthNote?: string;
  };
  keyDecisions?: DesignDecision[];
  flowcharts?: FlowchartData[];
  screens?: {
    src: string;
    title: string;
    description: string;
    alt: string;
  }[];
  ideationCut?: {
    title: string;
    proposed: string;
    reasoning: string;
  };
  prototype?: {
    figmaUrl?: string;
    miroUrl?: string;
    implementationGapNote?: string;
    unsplashNote?: string;
  };
  outcome: {
    status: string;
    summary: string;
    learningsOrCritique?: string[];
  };
}
