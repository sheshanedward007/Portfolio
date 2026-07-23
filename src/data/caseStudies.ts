import { CaseStudyData } from '../types';

export const caseStudiesData: CaseStudyData[] = [
  // 1. FCS Case Study (Lead)
  {
    id: 'fcs',
    slug: 'fcs',
    title: 'FCS Website — Full UX Process & Design',
    subtitle: "Designing the official digital hub for APIIT's Full Stack Computing Society — from research through prototyping.",
    role: 'UX Researcher & Designer',
    disciplineTag: 'UX Research & Design',
    thumbnail: '/assets/images/Home.png',
    attribution: 'UX research and design across the full pipeline: stakeholder identification, empathy mapping, personas, journey maps, information architecture, wireframes, and high-fidelity prototype. Implementation was handled separately. I also conducted feasibility research into supporting technologies — for example, evaluating MojoAuth as a viable hosted OTP provider.',
    context: {
      overview: 'Full Stack Computing Society (FCS) is the primary computing society at APIIT Sri Lanka. I led the end-to-end UX design process — from initial research through to a high-fidelity Figma prototype — to establish a structured digital platform that could serve students, committee members, and external industry partners alike.',
      organization: 'APIIT Sri Lanka (Staffordshire University partnership)',
      liveUrl: '[FCS_LIVE_SITE_LINK]'
    },
    problem: {
      summary: 'FCS had no central platform. Information was scattered across Instagram, WhatsApp, and LinkedIn, creating friction at every point — for students trying to find events, for prospective members trying to join, and for recruiters trying to verify student involvement.',
      painPoints: [
        'No official web presence — prospective members and external visitors had no single place to learn what FCS does.',
        'Unclear membership process — students across all disciplines had no structured path to find out if they were eligible or how to join.',
        'Unverifiable involvement — recruiters could not verify a student\'s CV or LinkedIn claims about their FCS participation.',
        'Fragmented committee workflows — event management, article submissions, and magazine publishing all relied on disconnected manual processes.'
      ]
    },
    research: {
      stakeholders: [
        'External (Industry professionals, recruiters, students and lecturers outside APIIT)',
        'Prospective Members (Students from any discipline curious about joining)',
        'General Members (Students from all disciplines attending FCS events)',
        'Executive Committee (Members managing events, publishing content, and tracking participation)',
        'Lecturers & Academic Advisors (Institutional oversight and society alignment)'
      ],
      personas: [
        {
          name: 'Gautham Asogan',
          role: 'Prospective FCS Member (First Year, Law)',
          quote: '"I don\'t even know if I\'m allowed to join, and I\'ve had to check three different places just to find out."',
          details: 'Curious about computing workshops but uncertain whether non-computing students can participate — and has no single place to look for a clear answer.'
        },
        {
          name: 'Mark Cooray',
          role: 'Industry Recruiter & Sponsor Contact (Financial Services / Tech, 12+ yrs)',
          quote: '"I want to know what the club is about and what they actually do, at a glance — not dig through a student\'s Instagram to find out."',
          highlight: true,
          tag: 'Key Differentiator Persona',
          details: 'Evaluates university partnerships and hires interns. Needs immediate, verifiable evidence of active technical projects and society governance quality — without having to corroborate a student\'s CV or LinkedIn claims manually.'
        },
        {
          name: 'Shenal Kumarasinghe',
          role: 'FCS General Member (First Year, Computing)',
          quote: '"Sometimes I miss FCS emails, and then I just can\'t find them later."',
          details: 'Active participant who needs a reliable calendar of upcoming events and an easy way to find content he\'s missed.'
        },
        {
          name: 'Thihansa Gamalathge',
          role: 'FCS Committee Member / Secretary (Second Year, Computing)',
          quote: '"Why can\'t we just centralise everything?"',
          details: 'Spends hours manually coordinating event RSVPs, Microsoft Forms links, and magazine submissions across disconnected channels.'
        }
      ],
      journeyMaps: [
        {
          title: 'Prospective Member Joining Journey (Full Breakdown)',
          description: 'Comparing the fragmented current state against the streamlined future-state experience across Awareness, Research, Evaluation, and Conversion.',
          fullTable: [
            {
              stage: 'Awareness',
              currentPain: 'Discovers FCS via word-of-mouth or a social media post; no link to any structured information.',
              futureSolution: 'Lands on the FCS website with a clear headline, value proposition, and quick overview of what the society does.'
            },
            {
              stage: 'Research',
              currentPain: 'Checks Instagram, WhatsApp groups, and asks student contacts to confirm whether non-computing students can join.',
              futureSolution: 'Finds eligibility criteria stated plainly on the About page — no chasing needed.'
            },
            {
              stage: 'Evaluation',
              currentPain: 'Has no clear path to sign up; unclear whether membership is still active or being accepted.',
              futureSolution: 'Clicks a visible "Join Us" button that opens a lightweight 2-step modal — no separate page required.'
            },
            {
              stage: 'Conversion',
              currentPain: 'No structured join process existed — there was no form to fill, no confirmation, and no way to know membership had been registered.',
              futureSolution: 'Verifies their APIIT email via OTP check and receives immediate confirmation that their membership is registered.'
            }
          ]
        },
        {
          title: 'Committee Event Creation & Management Journey (Summary)',
          description: 'Streamlining event setup from scattered Microsoft Forms and manual file-sharing to an integrated CMS.',
          summaryRows: [
            {
              stage: 'Creation & Setup',
              currentPain: 'Creating separate Microsoft Forms, Drive folders, and social graphics manually for each event.',
              solution: 'Unified CMS Event Editor with tabbed Details, Custom Form Builder, Resource Uploads, and Access Settings.'
            },
            {
              stage: 'Distribution & Access',
              currentPain: 'Manually sharing registration links across multiple WhatsApp groups with no domain validation.',
              solution: 'Public event cards with four time-based states and domain-gated registration built into the CMS workflow.'
            }
          ]
        },
        {
          title: 'StackPulse Magazine Publishing Journey (Summary)',
          description: 'Transitioning article submissions from email attachments to a structured CMS pipeline.',
          summaryRows: [
            {
              stage: 'Submission & Review',
              currentPain: 'Authors email Word documents to the secretary; lost attachments and no revision tracking.',
              solution: 'Public article submission form with author identity verification; submissions are downloaded and reviewed by the committee.'
            },
            {
              stage: 'Publication',
              currentPain: 'The team currently shares the magazine via a Heyzine flipbook link. There is no dedicated place on the FCS web presence that surfaces the magazine.',
              solution: 'A card on the site links out to the Heyzine flipbook. A custom magazine editor/reader within the CMS is planned as a future phase.'
            }
          ]
        }
      ],
      hmwStatements: [
        {
          question: 'How might we display the essential facts about FCS in one place when a first-time visitor lands?',
          connection: 'Led directly to the minimal hero layout with a clear positioning statement and a prominent "Join Us" entry point.'
        },
        {
          question: 'How might we make the events management view less cluttered to reduce confusion for committee members?',
          connection: 'Informed the four-state event card framework and the tabbed CMS Event Editor structure.'
        },
        {
          question: 'How might we make the magazine submission and publishing workflow clearer for both authors and editors?',
          connection: 'Guided the article submission flow design and the phased approach to StackPulse digital publishing.'
        }
      ]
    },
    informationArchitecture: {
      sitemapPublic: [
        'Home (Hero, Value Prop, Featured Events)',
        'Events (Public directory with four time-state card views and an event details view)',
        'Articles (Technical articles and member blog posts)',
        'StackPulse Magazine (Issue reader card linking to Heyzine flipbook; Article Submission form)',
        'Portfolio (Student project showcases)',
        'About Us (Society mission, history, committee directory)',
        'Contact (Inquiry form and official channels)'
      ],
      sitemapCms: [
        'CMS Gate (Domain + OTP authentication middleware)',
        'Dashboard (Overview and quick actions)',
        'Event Manager (Create/Edit event details, forms, resources, eligibility settings)',
        'Article & Issue Manager (Accept submissions, publish magazine issues)',
        'Member Directory (Manage members)',
        'Feedback & Enquiries (Review incoming messages)'
      ],
      decisions: [
        '"Join Us" is implemented as a lightweight modal rather than a separate page, to reduce conversion friction.',
        'StackPulse magazine links to an embedded Heyzine flipbook card for the current phase; a custom magazine editor within the CMS is planned for a future build phase.',
        'The FCS executive board directory is managed via the Member Directory CMS rather than as a separate hardcoded structure.'
      ]
    },
    userFlows: {
      summary: 'All committee administrative features are protected by a centralised authentication gate. Three public-facing flows — Join Us, Article Submission, and Event Registration — use a two-tier verification pattern to confirm identity before granting access.',
      middlewareNote: 'A reusable "Login to FCS CMS" middleware gate protects all admin routes, enforcing consistent access control across events, articles, and member management without re-implementing the logic per flow.',
      mojoAuthNote: 'The Join Us modal, Article Submission form, and Event Registration all use a two-tier verification pattern: an APIIT-domain email check, followed by OTP confirmation. The OTP step is handled by MojoAuth — a third-party hosted auth provider. Its verification UI is provider-hosted and styled via MojoAuth\'s template options. Choosing a hosted provider was a deliberate feasibility decision: it avoids reinventing rate-limiting, OTP delivery, and email deliverability from scratch.'
    },
    keyDecisions: [
      {
        title: 'Dark & Authoritative Society Palette',
        problem: 'FCS needed a visual identity that felt technically credible and distinct from generic university club aesthetics, while meeting accessibility standards.',
        decision: 'Selected a dark palette (#000000, #034078, #085470) with a gold accent (#EDAC06). Ran WCAG contrast checks across all text and background pairings before committing to the palette.',
        tradeoff: 'Dark palettes reduce legibility if contrast is insufficient. Verification was done early to confirm AA/AAA compliance across all combinations, avoiding colour rework later in the process.',
        images: [
          {
            src: '/assets/images/AA.png',
            alt: 'WCAG Contrast Verification Matrix showing AA and AAA compliance across the FCS palette',
            caption: 'Contrast verification matrix — AA and AAA compliance across dark navy, teal, gold, and white text combinations.'
          },
          {
            src: '/assets/images/Colours.png',
            alt: 'FCS colour palette overview from contrast-checking process',
            caption: 'Palette validation output confirming contrast ratios meet WCAG minimum thresholds.'
          }
        ]
      },
      {
        title: 'Four Event Time-States (Today / Upcoming / Concluded / Recap)',
        problem: 'A flat event list made it hard to distinguish what was happening now, what was coming up, and what had already ended — especially around sign-up deadlines.',
        decision: 'Designed four distinct card states: Today, Upcoming, Concluded, and Recap. Each state shows different information and a different call to action. Upcoming shows available slots and a sign-up CTA; Concluded is a temporary state while a member writes up a recap; Recap surfaces the post-event write-up and links any recorded session once it\'s available.',
        tradeoff: 'Requires the committee to update event state as time progresses, but significantly reduces confusion about whether registration is still open.',
        images: [
          {
            src: '/assets/images/Events - public.png',
            alt: 'FCS Public Events Directory showing Today, Upcoming, Concluded, and Recap card states',
            caption: 'Public Events directory showing the four time-state card treatments side by side.'
          }
        ]
      },
      {
        title: 'Committee Directory — Three-Step Design Journey',
        problem: 'The committee has 22 members. Displaying them in a grid required a decision about how to handle members who opted out of submitting a headshot.',
        decision: 'The design went through three stages: (1) Originally designed for a photo grid — all members submit headshots. (2) In practice, the majority of committee members opted out of providing a photo, so a monogram SVG fallback was designed to handle the no-photo case. (3) On reflection, a grid of mostly monograms mixed with a handful of photos looked inconsistent. A names-only directory — no images at all — was cleaner and more visually coherent, so that became the final direction.',
        tradeoff: 'A names-only directory sacrifices visual richness for consistent presentation. Given real opt-in rates, the alternative would have been a layout that looked half-finished.',
        callout: 'Design pivot: the original photo-grid assumption held until real opt-in data (majority of committee members declining to submit a photo) made the fallback the dominant pattern rather than the exception. At that point, committing to a names-only directory was the more honest and visually sound choice.',
        images: [
          {
            src: '/assets/images/About Us.png',
            alt: 'FCS About Us committee directory — exploring photo grid and monogram fallback layouts before settling on names-only',
            caption: 'Committee directory explorations — photo grid, monogram fallback, and the final names-only direction.'
          }
        ]
      },
      {
        title: 'Multi-Tab CMS Event Editor',
        problem: 'Creating and configuring events required managing eligibility rules, registration forms, file downloads, and event details in one long, overwhelming form.',
        decision: 'Structured the CMS editor into four tabs: Details, Form Builder, Resources, and Settings. The Settings tab includes per-event eligibility toggles (APIIT Students / Staff / Community) that map directly to the MojoAuth domain-check rules — committee members configure who can register, and the verification system enforces it.',
        tradeoff: 'Tabbed interfaces require navigating between screens to review all settings, but the reduction in cognitive load when creating or editing an event is significant.',
        images: [
          {
            src: '/assets/images/Edit Event Details.png',
            alt: 'FCS CMS Event Editor — Details tab showing event metadata, title, venue, and banner image fields',
            caption: 'Details tab — basic event metadata including title, venue, dates, and banner image.'
          },
          {
            src: '/assets/images/Edit Event - Forms.png',
            alt: 'FCS CMS Event Editor — Form Builder tab for custom attendee questions',
            caption: 'Form Builder tab — dynamic registration questions per event.'
          },
          {
            src: '/assets/images/Edit Event - resources.png',
            alt: 'FCS CMS Event Editor — Resources tab for attaching slide decks and files',
            caption: 'Resources tab — attach workshop slides, code links, or other materials.'
          },
          {
            src: '/assets/images/Edit Event - settings.png',
            alt: 'FCS CMS Event Editor — Settings tab showing eligibility toggles and capacity limits',
            caption: 'Settings tab — per-event eligibility configuration linked to the domain + OTP verification flow.'
          }
        ]
      },
      {
        title: 'Homepage Headline Positioning',
        problem: 'FCS needed a clear value proposition that distinguished it from purely social student clubs and positioned it as practically valuable alongside academic study.',
        decision: 'The homepage headline reads: "Your degree is enough to get started. What you build takes you further." — framing FCS as a hands-on, applied complement to coursework rather than just another student society.',
        tradeoff: 'A positioning-led headline requires buy-in from the committee, but communicates purpose more effectively than a generic welcome message.',
        images: [
          {
            src: '/assets/images/Home.png',
            alt: 'FCS Website Homepage showing headline and hero section design',
            caption: 'Homepage — headline positioning and hero section layout.'
          }
        ]
      }
    ],
    prototype: {
      figmaUrl: '[FIGMA_LINK_FCS]',
      miroUrl: '[MIRO_LINK_FCS]',
      implementationGapNote: 'Some UI details may differ from the Figma prototype as the build evolves — this is expected and doesn\'t require further justification here.',
      unsplashNote: 'Background imagery used in mockups (e.g. in the homepage and event detail screens) is sourced from Unsplash for prototyping purposes — not original photography.'
    },
    outcome: {
      status: 'In Development / Imminent Launch',
      summary: 'The FCS platform design has gone through a complete UX process — from research through to a high-fidelity prototype — and is currently being implemented. The research surfaced stakeholder groups and pain points that most student club projects overlook entirely, particularly the external recruiter perspective. Running contrast verification early prevented palette rework, and the committee directory pivot illustrated how real usage data changes design decisions.',
      learningsOrCritique: [
        'Rigorous contrast checking early in the design process prevented major colour redesigns during build.',
        'The committee directory pivot reinforced how quickly a design assumption can be invalidated by real-world data — opt-in rates matter.'
      ]
    }
  },

  // 2. Nestlé Connect Case Study (Second)
  {
    id: 'nestle-connect',
    slug: 'nestle-connect',
    title: 'Nestlé Connect — Ordering & Issue Reporting Platform UX',
    subtitle: 'Streamlining B2B FMCG order placement, payment splitting, and structured issue escalation for Nestlé Lanka distributors and retailers.',
    role: 'Technical Lead, Scrum Master, and Scoped UX Designer (Ordering & Issue Reporting)',
    disciplineTag: 'Full-Stack + UX',
    thumbnail: '/assets/images/Catalogue.png',
    attribution: 'Team project — Shenal, Suchiru, Sanuth, and Sheshan Edward. Project-wide: Technical Lead and Scrum Master. UX design contribution scoped specifically to the Ordering and Issue Reporting platform.',
    context: {
      overview: 'Nestlé Connect is a B2B Fast-Moving Consumer Goods retail management system built for Nestlé Lanka across three sprints. The broader platform covers 14 roles across four user tables, promotions, and ROIDS forecasting. This case study focuses strictly on the ordering workflow, payment credit-split UI, and issue escalation system — the areas where my UX design contribution was concentrated.',
      organization: 'Academic B2B Team Project (Nestlé Lanka Case Study)',
      sprintContext: 'Built across three Scrum sprints. Each sprint required delivering a working, testable MVP slice rather than polishing one area at the expense of another — a constraint that shaped every scope and prioritisation decision.'
    },
    problem: {
      summary: 'Distributors and retail shopkeepers faced significant operational friction: no real-time visibility into order status, no flexible payment options for retailers with partial credit lines, and no structured path for reporting and escalating issues like damaged goods or incorrect invoicing.',
      painPoints: [
        'No order status visibility — shopkeepers had no way to track whether an order had been accepted, assigned, or dispatched.',
        'Rigid payment handling — retailers with available credit lines had no way to partially apply credit and pay the balance by cash or card.',
        'Informal issue reporting — complaints about damaged goods or billing errors were handled via phone calls and had no tracking, accountability, or escalation path.'
      ]
    },
    research: {
      empathyMapsNote: 'Empathy mapping was conducted as a collaborative team exercise early in the project. Detailed individual artefacts were not preserved for separate documentation here.'
    },
    keyDecisions: [
      {
        title: 'Credit / Cash Payment Split Interface',
        problem: 'Shopkeepers with partially available credit needed to split payment across their credit line and cash or card — a common scenario the original order flow didn\'t accommodate.',
        decision: 'Designed a payment review screen that shows the retailer\'s credit limit, how much of it they are using, the remaining balance, and which payment method covers it. The layout makes the split immediately legible before the order is confirmed.',
        tradeoff: 'Increases transaction state complexity on the distributor side, but significantly reduces rejected orders from retailers who can\'t pay the full amount in a single method.',
        images: [
          {
            src: '/assets/images/Cart.png',
            alt: 'Nestlé Connect credit-split payment interface showing credit utilisation, remaining balance, and payment method breakdown',
            caption: 'Payment split screen — credit utilisation, outstanding balance, and method selection.'
          }
        ]
      },
      {
        title: 'Order Mutability at Delivery — Payment-Method Gate',
        problem: 'At the point of delivery, retailers sometimes want to adjust their order. Whether that should be permitted depends on how the original order was paid for — a business logic constraint with a direct UX consequence.',
        decision: 'Cash-paid orders allow full quantity and item edits at the point of delivery. Credit- or card-paid orders lock the original items for financial reconciliation, but permit supplementary items to be added. The delivery agent\'s UI communicates which parts of the order are editable based on the original payment method.',
        tradeoff: 'The delivery UI needs to surface a non-obvious business rule clearly enough that delivery agents don\'t attempt illegal edits in the field.'
      },
      {
        title: 'Time-Boxed Auto-Escalation for Issue Reporting',
        problem: 'Submitted complaints about damaged goods or billing errors had no accountability mechanism — they could sit unresolved indefinitely with no escalation trigger.',
        decision: 'Introduced time-boxed automatic escalation. If an issue is not resolved within a defined window, it automatically routes to the next-highest official in the hierarchy. The escalation repeats up the chain until resolution.',
        tradeoff: 'Requires reliable backend scheduling and push notification infrastructure, but ensures no complaint can be ignored without a human escalation trigger.'
      }
    ],
    flowcharts: [
      {
        title: 'Order Lifecycle State Diagram',
        description: 'State machine from order placement through to delivery, with a payment-method branch determining what can be edited at the point of handoff.',
        nodes: [
          { id: '1', label: 'Retailer Places Order', type: 'start' },
          { id: '2', label: 'Order Received by Distributor', type: 'process' },
          { id: '3', label: 'Distributor Reviews & Accepts Order', type: 'process' },
          { id: '4', label: 'Distributor Assigns Delivery Agent', type: 'process' },
          { id: '5', label: 'Order Delivered to Retailer', type: 'process' },
          { id: '6', label: 'Payment Method at Delivery?', type: 'decision' },
          { id: '7A', label: 'Cash — Full order edit permitted at delivery', type: 'branch', details: 'Item quantities and contents can be adjusted before the final receipt is generated.' },
          { id: '7B', label: 'Credit / Card — Original order locked; add-ons only', type: 'branch', details: 'Original items are immutable for financial reconciliation. Supplementary items may be added to the invoice.' },
          { id: '8', label: 'Payment Confirmed — Order Complete', type: 'end' }
        ],
        edges: [
          { from: '1', to: '2' },
          { from: '2', to: '3' },
          { from: '3', to: '4' },
          { from: '4', to: '5' },
          { from: '5', to: '6' },
          { from: '6', to: '7A', label: 'Cash' },
          { from: '6', to: '7B', label: 'Credit / Card' },
          { from: '7A', to: '8' },
          { from: '7B', to: '8' }
        ]
      },
      {
        title: 'Issue Escalation Chain',
        description: 'Category-based routing at submission, converging into a shared time-boxed escalation loop up the management hierarchy.',
        nodes: [
          { id: 'e1', label: 'Retailer Submits Issue', type: 'start' },
          { id: 'e2', label: 'Issue Category Determines Routing', type: 'decision' },
          { id: 'e3A', label: 'Routed to Relevant Distributor Contact', type: 'branch', details: 'e.g. Damaged goods → logistics contact; Billing error → accounts contact.' },
          { id: 'e3B', label: 'Routed to Relevant Admin Contact', type: 'branch', details: 'Category-specific routing ensures the right person receives the issue immediately.' },
          { id: 'e4', label: 'Resolved within Time Window?', type: 'decision' },
          { id: 'e5', label: 'Issue Marked Resolved', type: 'end' },
          { id: 'e6', label: 'Auto-Escalate to Next-Highest Official', type: 'branch', details: 'Push notification + urgent status flag sent up the hierarchy. Ensures no issue sits dormant.' },
          { id: 'e7', label: 'Repeat until Resolved', type: 'process' }
        ],
        edges: [
          { from: 'e1', to: 'e2' },
          { from: 'e2', to: 'e3A', label: 'Category A (e.g. Damaged goods)' },
          { from: 'e2', to: 'e3B', label: 'Category B (e.g. Billing)' },
          { from: 'e3A', to: 'e4' },
          { from: 'e3B', to: 'e4' },
          { from: 'e4', to: 'e5', label: 'Yes — Resolved' },
          { from: 'e4', to: 'e6', label: 'No — Time Window Expired' },
          { from: 'e6', to: 'e7' },
          { from: 'e7', to: 'e4' }
        ]
      }
    ],
    screens: [
      {
        src: '/assets/images/Catalogue.png',
        title: 'Shopkeeper Order & Product Catalogue',
        description: 'Starting point of the ordering lifecycle. Shopkeepers browse categorised FMCG products, check availability, and build their cart before submitting an order to the distributor.',
        alt: 'Nestlé Connect Shopkeeper Product Catalogue — categorised FMCG product listing with cart actions'
      },
      {
        src: '/assets/images/Summary.png',
        title: 'Distributor Order Summary & Payment Review',
        description: 'Distributor-side review screen showing an itemised order, payment method (Cash — LKR 2,950 pending), and the Accept Order action.',
        alt: 'Nestlé Connect Distributor Order Summary — itemised order view with cash payment pending and Accept Order action'
      },
      {
        src: '/assets/images/Issue.png',
        title: 'Issue Reporting Form & Issues History',
        description: 'Dual-panel UI: issue submission fields (category, type, order reference, description) on the left; a live "My Issues History" table with Pending/Submitted status badges on the right. The status column makes issue tracking visible and persistent.',
        alt: 'Nestlé Connect Issue Reporting and Status Tracking — submission form and issues history table with status badges'
      }
    ],
    outcome: {
      status: 'Delivered MVP across 3 Sprints',
      summary: 'The Ordering and Issue Reporting platform was delivered as part of a working Nestlé Connect MVP across three sprints. The payment mutability branch and time-boxed escalation logic were two of the more complex business rules to surface clearly in the UI, and both received strong academic feedback.',
      learningsOrCritique: [
        'Designing under Scrum MVP constraints reinforced the value of scoping core business logic (like payment mutability) before visual refinement.',
        'The flowcharts were useful early artefacts for aligning the team on what the backend state machine needed to enforce before any screens were designed.'
      ]
    }
  },

  // 3. Aura Case Study (Last)
  {
    id: 'aura',
    slug: 'aura',
    title: 'Aura — Mood-Based Travel Companion',
    subtitle: 'Connecting daily mood check-ins with personalised destination recommendations and AI-generated post-trip memory journals.',
    role: 'Research & Ideation',
    disciplineTag: 'UX Research & Design',
    thumbnail: '/assets/images/MoodCheck.png',
    attribution: 'Team of 5, one-week external design competition. My role: UX research and ideation. Lo-fi wireframes and all high-fidelity Figma prototyping were handled by teammates.',
    context: {
      overview: 'Aura was built during a one-week external design competition. The week opened with a one-day structured workshop (roughly 3–4 hours) that introduced the team to the design methodology — including a paper-based ideation exercise where you fold an A4 sheet into eight sections for rapid concept sketching. The team then had the rest of the week to develop a concept and produce a prototype. We chose a tourism problem statement from the five provided by the organisers, with a requirement to incorporate AI.',
      organization: 'External Designathon Competition (Team of 5)',
      sprintContext: 'One-week ideation and design sprint following a one-day methodology workshop.'
    },
    problem: {
      summary: 'Digital tourism infrastructure is fragmented. Navigation, reviews, and accommodation all live in separate platforms that don\'t talk to each other — for example, properties list on Booking.com while their reviews exist only on TripAdvisor, requiring travellers to manually cross-reference between platforms when planning a trip.',
      painPoints: [
        'Fragmented toolchain — travellers typically move between multiple apps when researching and planning, with no shared context between them.',
        'Stateless recommendations — existing apps suggest popular spots without any awareness of the traveller\'s current mood or energy level.',
        'No post-trip continuity — once a trip ends, travel apps offer no way to reflect on or learn from the experience.'
      ]
    },
    research: {
      framing: 'Primary research found that the majority of travellers lean toward mood-driven destination choices — preferring to decide based on how they\'re feeling rather than a fixed itinerary — though some travel decisions remain geography-specific and don\'t fit that pattern.',
      personas: [
        {
          name: 'The Solo Traveller',
          role: 'Spontaneous explorer looking for low-effort, mood-matched suggestions.',
          quote: '"I don\'t want a rigid itinerary. Tell me where to go based on how I feel right now."',
          details: 'Wants instant daily recommendations without the overhead of booking research.'
        },
        {
          name: 'Honeymooners / Couples',
          role: 'Quality-oriented travellers seeking atmosphere over logistics.',
          quote: '"We want somewhere quiet and scenic — without reading through conflicting reviews to find it."',
          details: 'Prioritises mood-filtered suggestions (Relaxed, Scenic) over generic popularity rankings.'
        },
        {
          name: 'The Cultural Traveller',
          role: 'Curious learner interested in local history and authentic experiences.',
          quote: '"I love reflecting on where I\'ve been and capturing the real story behind each trip."',
          details: 'Values post-trip memory and context-aware suggestions for follow-up destinations.'
        }
      ]
    },
    keyDecisions: [
      {
        title: 'Mood-to-Destination Matching (Headline Differentiator)',
        problem: 'Existing travel apps recommend destinations based on location or popularity, not on how someone actually feels on a given morning.',
        decision: 'I proposed a daily mood check-in as the app\'s entry point: "How are you waking up today?" with five states — Energized, Relaxed, Curious, Tired, Spontaneous. A teammate independently arrived at the same concept minutes later in the ideation session, unprompted. We developed it jointly from there. The check-in feeds the recommendation engine and shapes the day\'s suggested itinerary.',
        tradeoff: 'Mood is inherently subjective and difficult to map to destinations consistently — but that ambiguity is also part of what makes the recommendation feel personal rather than algorithmic.',
        images: [
          {
            src: '/assets/images/MoodCheck.png',
            alt: 'Aura daily mood check-in screen — "How are you waking up today?" with Energized, Relaxed, Curious, Tired, and Spontaneous options',
            caption: 'Daily mood check-in — entry point feeding the personalised day plan.'
          }
        ]
      },
      {
        title: 'AI Post-Trip Memory Journal ("Ella · A Memory")',
        problem: 'Once a trip ends, travel apps abandon the user until the next booking — missing an opportunity to build a lasting relationship with the traveller and improve future recommendations.',
        decision: 'I proposed an AI-generated post-trip journal that synthesises photos, visited locations, and trip notes into a narrative. The journal closes with a contextually aware follow-up destination suggestion based on what the AI understood about the trip — similar in spirit to how AI systems use prior conversation context to tailor their next response.',
        tradeoff: 'Relies on generative AI quality, but transforms a transactional booking app into something that feels like a personal travel companion over time.',
        images: [
          {
            src: '/assets/images/Memory.png',
            alt: 'Aura AI Memory screen — "Ella · A Memory" post-trip journal with highlighted moments and a follow-up destination suggestion',
            caption: '"Ella · A Memory" — AI-generated post-trip journal and contextual follow-up suggestion.'
          }
        ]
      },
      {
        title: 'Transport & Rental Integration',
        problem: 'Getting between destinations is typically handled by a separate app, breaking the experience just when a traveller has found somewhere they want to go.',
        decision: 'The team agreed to integrate transport and rental options directly into the app\'s home view, making them accessible alongside accommodation and itinerary without switching context. The onboarding dashboard shows tuktuk rental listings and transport access as part of the baseline app experience.',
        tradeoff: 'Integrating third-party transport APIs adds scope complexity, but the alternative — telling users to open a separate app — defeats the consolidation premise.',
        images: [
          {
            src: '/assets/images/OnboardAura.png',
            alt: 'Aura home dashboard — map view with tuktuk rentals, accommodation bookings, and transport options alongside the daily itinerary',
            caption: 'Main dashboard — transport, rental, and accommodation options surfaced in one view.'
          }
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Mood-to-Destination Logic',
        description: 'Built after the competition to document how the mood check-in connects to the recommendation engine. Not part of the original submission.',
        nodes: [
          { id: 'm1', label: 'User Completes Daily Mood Check-in', type: 'start' },
          { id: 'm2', label: 'Mood State Selected\n(Energized / Relaxed / Curious / Tired / Spontaneous)', type: 'process' },
          { id: 'm3', label: 'AI Engine Synthesises Recommendations', type: 'process' },
          { id: 'm4', label: 'Personalised Day Plan Generated', type: 'end' }
        ],
        edges: [
          { from: 'm1', to: 'm2' },
          { from: 'm2', to: 'm3' },
          { from: 'm3', to: 'm4' }
        ]
      }
    ],
    ideationCut: {
      title: 'Weather-Based Destination Filtering (Proposed, Not Built)',
      proposed: 'During the paper ideation session, I sketched out a concept for filtering destination suggestions based on current weather conditions — avoiding beach recommendations on a rainy day, for example.',
      reasoning: 'Cut at the wireframe stage, before any design work was done on it. The core problem was weather\'s inherent unpredictability — a feature built around real-time conditions would make unreliable recommendations, which felt worse than not offering the filter at all.'
    },
    outcome: {
      status: 'Designathon Concept Presentation',
      summary: 'The judges responded positively to the overall concept, particularly the mood check-in and AI memory features. The proposed monetisation model — commission-based partnerships with existing platforms like Booking.com and a local rideshare service, rather than building competing booking infrastructure from scratch — was well received when it came up in Q&A.',
      learningsOrCritique: [
        'Judges flagged the WhatsApp-style double-tick read receipts on AI chat messages as an unnecessary UI pattern — since an AI responds effectively instantly, a "read" state doesn\'t reflect any real interaction and imports a human messaging convention that doesn\'t apply here.',
        'One destination recommendation in our demo suggested a beach to a user based in Ella, Sri Lanka — an inland hill-country location. It was a real gap in the recommendation logic that the team didn\'t catch given the time available.'
      ]
    }
  }
];
