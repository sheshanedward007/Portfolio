import { CaseStudyData } from '../types';

export const caseStudiesData: CaseStudyData[] = [
  // 1. FCS Case Study (Lead)
  {
    id: 'fcs',
    slug: 'fcs',
    title: 'FCS Website — Full UX Process & Build',
    subtitle: 'Designing and engineering the official digital hub for APIIT’s Full Stack Computing Society.',
    role: 'Technical Lead & UX Designer',
    disciplineTag: 'Full-Stack + UX',
    thumbnail: '/assets/images/Home.png',
    attribution: 'Solo-owned work across the full pipeline (research → IA → wireframes → prototype → build). State this plainly with no attribution callout required for overall ownership.',
    context: {
      overview: 'Full Stack Computing Society (FCS) is the primary university computing society at APIIT Sri Lanka. Sheshan led both the technical build and end-to-end UX design to establish a modern, centralized platform for students, committee members, and external industry partners.',
      organization: 'APIIT Sri Lanka (Staffordshire University partnership)',
      liveUrl: '[FCS_LIVE_SITE_LINK]'
    },
    problem: {
      summary: 'Before the web platform was conceived, FCS operated without any centralized digital presence. Critical information was fragmented across disparate social media channels (Instagram, WhatsApp, LinkedIn), creating significant friction for event discovery, membership onboarding, and contribution verification.',
      painPoints: [
        'No official web portal — students and external guests had to dig through social channels for event details.',
        'Information fragmentation — prospective members were uncertain about eligibility or how to officially join.',
        'Unverifiable contributions — prospective members and recruiters could not verify student committee roles or project involvement.',
        'Manual committee workflows — managing events, form submissions, and StackPulse magazine articles relied on unorganized manual chats.'
      ]
    },
    research: {
      stakeholders: [
        'External (Industry Professionals, recruiters, students/lecturers outside APIIT)',
        'Prospective Members (First-year & non-computing students curious about joining)',
        'General Members (Enrolled APIIT computing students attending events)',
        'Executive Committee (Organizers managing events, publishing content, and tracking members)',
        'Lecturers & Academic Advisors (Institutional oversight and official society alignment)'
      ],
      personas: [
        {
          name: 'Gautham Asogan',
          role: 'Prospective FCS Member (First Year, Law)',
          quote: '"I don\'t even know if I\'m allowed to join, and I\'ve had to check three different places just to find out."',
          details: 'Beginner technical experience. Curious about computing workshops but intimidated by technical jargon and uncertain if non-computing students can participate.'
        },
        {
          name: 'Mark Cooray',
          role: 'Industry Recruiter & Sponsor Contact (Financial Services / Tech, 12+ yrs)',
          quote: '"I want to know what the club is about and what they actually do, at a glance — not dig through a student\'s Instagram to find out."',
          highlight: true,
          tag: 'Key Differentiator Persona',
          details: 'Evaluates university partnerships and hires interns. Needs immediate proof of active technical projects, society governance quality, and verifiable student work without wading through social media posts.'
        },
        {
          name: 'Shenal Kumarasinghe',
          role: 'FCS General Member (First Year, Computing)',
          quote: '"Sometimes I miss FCS emails, and then I just can\'t find them later."',
          details: 'Active participant who needs a single reliable calendar for upcoming workshops, access to slide decks/code repos, and an easy way to submit articles to StackPulse.'
        },
        {
          name: 'Thihansa Gamalathge',
          role: 'FCS Committee Member / Secretary (Second Year, Computing)',
          quote: '"Why can\'t we just centralise everything?"',
          details: 'Spends hours manually cross-checking event RSVPs, handling Google Forms, and emailing magazine submissions across disorganized spreadsheet links.'
        }
      ],
      journeyMaps: [
        {
          title: 'Prospective Member Joining Journey (Presented in Full)',
          description: 'Comparing the fragmented current state against the streamlined future state experience across Awareness, Research, Evaluation, and Conversion.',
          fullTable: [
            {
              stage: 'Awareness',
              currentPain: 'Discovers FCS via word-of-mouth or social media flyer; no link to structured details.',
              futureSolution: 'Discovers FCS via official website landing page with clear value proposition and headline tagline.'
            },
            {
              stage: 'Research',
              currentPain: 'Checks Instagram bio, WhatsApp groups, and student contacts to verify if non-computing students are eligible.',
              futureSolution: 'Lands on "About Us" and public FAQ stating explicit eligibility criteria in one readable section.'
            },
            {
              stage: 'Evaluation',
              currentPain: 'Wastes 15+ minutes searching for registration forms; doubts whether membership is active.',
              futureSolution: 'Clicks prominent "Join Us" button in main navigation to open a lightweight 2-step verification modal.'
            },
            {
              stage: 'Conversion',
              currentPain: 'Fills out external unverified Google Form without confirmation email or member ID.',
              futureSolution: 'Verifies APIIT email via instant OTP check and receives immediate confirmation dashboard access.'
            }
          ]
        },
        {
          title: 'Committee Event Creation & Management Journey (Summary)',
          description: 'Streamlining event setup from fragmented Google Forms to an integrated multi-tab CMS.',
          summaryRows: [
            {
              stage: 'Creation & Setup',
              currentPain: 'Creating separate Google Forms, Drive folders, and social graphics manually per event.',
              solution: 'Unified CMS Event Editor with tabbed Details, Custom Form Builder, Resource Uploads, and Access Settings.'
            },
            {
              stage: 'Distribution & Access',
              currentPain: 'Manual sharing of links across multiple WhatsApp groups with no domain validation.',
              solution: 'Automated 4-state public event cards (Today, Upcoming, Concluded, Recap) with domain-gated registration.'
            }
          ]
        },
        {
          title: 'StackPulse Magazine Publishing Journey (Summary)',
          description: 'Transitioning article submissions from email attachments to a structured CMS pipeline.',
          summaryRows: [
            {
              stage: 'Submission & Review',
              currentPain: 'Authors email Word documents to secretary; lost attachments and untracked revisions.',
              solution: 'Public article submission form with automated author verification and admin review queue.'
            },
            {
              stage: 'Publication',
              currentPain: 'Publishing static PDFs manually; no web view for individual issues or submission guidelines.',
              solution: 'Interactive Heyzine flipbook embed for current issues with dedicated digital article archives.'
            }
          ]
        }
      ],
      hmwStatements: [
        {
          question: 'How might we display the essential facts about FCS in one place when a first-time visitor lands?',
          connection: 'Led directly to the minimal hero layout with high-impact positioning: "Your degree is enough to get started. What you build takes you further."'
        },
        {
          question: 'How might we make the events management page less cluttered to reduce confusion?',
          connection: 'Inspired the 4-state event card framework (Today, Upcoming, Concluded, Recap) with dynamic CTAs depending on event status.'
        },
        {
          question: 'How might we make the magazine submission layout visually clear and trustworthy?',
          connection: 'Guided the creation of the phased StackPulse digital publishing workflow and Heyzine flipbook integration.'
        }
      ]
    },
    informationArchitecture: {
      sitemapPublic: [
        'Home (Hero, Value Prop, Featured Events, Society Highlights)',
        'Events (Public directory with 4 time-state card views & details modal)',
        'Articles (Technical articles & member blog posts)',
        'StackPulse Magazine (Issue reader, Heyzine flipbook, Article Submissions)',
        'Portfolio (Student project showcases & repository highlights)',
        'About Us (Society mission, history, committee directory)',
        'Contact (Inquiry form & official channels)'
      ],
      sitemapCms: [
        'CMS Gate (Middleware domain + OTP authentication)',
        'Dashboard (Overview metrics & quick actions)',
        'Event Manager (Create/Edit event details, forms, resources, settings)',
        'Article & Issue Manager (Review submissions, publish magazine issues)',
        'Member Directory (Manage member profiles, board assignments, access tiers)',
        'Feedback & Enquiries (Review incoming messages)'
      ],
      decisions: [
        '"Join Us" is implemented as a lightweight modal rather than a separate page to minimize conversion drop-off.',
        'StackPulse magazine links directly to an embedded Heyzine flipbook viewer for phased delivery while the custom magazine editor is in development.',
        'The FCS executive board directory is populated dynamically from the Member Directory CMS rather than hardcoding a separate structure.'
      ]
    },
    userFlows: {
      summary: 'All executive administrative features are protected by a centralized authentication gate, while public user interactions prioritize friction-free verification.',
      middlewareNote: 'A reusable "Login to FCS CMS" middleware gate guards all admin routes, ensuring systemic access control across events, articles, and member management.',
      mojoAuthNote: 'Both the "Join Us" modal and "Article Submission" forms utilize a two-tier verification pattern: an APIIT domain check followed by OTP confirmation. Verification is powered by MojoAuth (a third-party hosted auth provider). The UI between email entry and form access is provider-hosted and styled via MojoAuth templates, framed as a deliberate engineering decision to avoid reinventing rate-limiting and deliverability.'
    },
    keyDecisions: [
      {
        title: 'Dark & Authoritative Society Palette',
        problem: 'FCS needed a visual identity that felt mature, technical, and distinct from generic university club sites while maintaining rigorous accessibility standards.',
        decision: 'Selected a deep navy & black palette (#000000, #034078, #085470) paired with a gold accent (#EDAC06). Performed comprehensive WCAG contrast verification tests across all text and background pairings.',
        tradeoff: 'Dark palettes risk low legibility if text contrast is compromised. Used WCAG AA/AAA automated testing to enforce minimum contrast ratios for body text and interactive states.',
        images: [
          {
            src: '/assets/images/Screenshot 2026-07-23 001003.png',
            alt: 'FCS WCAG Contrast Verification Matrix 1',
            caption: 'WCAG contrast checking showing AA and AAA compliance across dark navy, teal, gold, and white elements.'
          },
          {
            src: '/assets/images/Screenshot 2026-07-23 001019.png',
            alt: 'FCS WCAG Contrast Verification Matrix 2',
            caption: 'Automated contrast ratio validation testing for high-contrast accessibility compliance.'
          }
        ]
      },
      {
        title: 'Four Event Time-States (Today / Upcoming / Concluded / Recap)',
        problem: 'Mixing past, active, and future events in a single grid confused users regarding sign-up deadlines and available slots.',
        decision: 'Designed four distinct card states: "Today" (glowing active badge), "Upcoming" (live CTA with slot counter), "Concluded" (summary only), and "Recap" (links to recorded sessions and slide decks).',
        tradeoff: 'Requires additional card design variations and state logic in frontend rendering, but eliminates user frustration around expired sign-ups.',
        images: [
          {
            src: '/assets/images/Events - public.png',
            alt: 'FCS Public Events Directory',
            caption: 'Public Events page demonstrating state-driven card treatments for Upcoming vs. Concluded events.'
          }
        ]
      },
      {
        title: 'Committee Directory — Real-World Data Pivot',
        problem: 'Originally designed a custom monogram SVG fallback pattern for committee members opting out of uploading headshots.',
        decision: 'In practice, only 5 of 22 committee members submitted official photos. The heavy reliance on monogram fallbacks made the layout look incomplete. Based on usage data, the team pivoted to a clean, names-only directory grid.',
        tradeoff: 'Sacrificed avatar graphics in favor of a polished, uniform typographic layout that scales gracefully regardless of photo submission rates.',
        callout: 'Pivot Rationale: When real usage data contradicted the initial design assumption (low photo submission rate), we adapted the UI layout to prioritize visual harmony rather than forcing an empty fallback pattern.',
        images: [
          {
            src: '/assets/images/About Us.png',
            alt: 'FCS About Us Board Directory Grid',
            caption: 'Original board layout showcasing monogram fallback exploration prior to the names-only directory pivot.'
          }
        ]
      },
      {
        title: 'Multi-Tab CMS Event Editor',
        problem: 'Creating and configuring events required managing complex settings (registration forms, eligibility rules, file downloads) in a long, overwhelming single-page form.',
        decision: 'Structured the CMS editor into four intuitive tabs: Details, Form Builder, Resources, and Settings. The Settings tab includes explicit eligibility toggles (APIIT Students / Staff / Community) linked to MojoAuth verification rules.',
        tradeoff: 'Tabbed interfaces hide off-tab inputs, but drastically reduce cognitive load during event creation.',
        images: [
          {
            src: '/assets/images/Edit Event Details.png',
            alt: 'FCS CMS Edit Event - Details Tab',
            caption: 'Details tab for basic event metadata, title, venue, and banner image.'
          },
          {
            src: '/assets/images/Edit Event - Forms.png',
            alt: 'FCS CMS Edit Event - Forms Tab',
            caption: 'Custom form builder tab for dynamic attendee questions.'
          },
          {
            src: '/assets/images/Edit Event - resources.png',
            alt: 'FCS CMS Edit Event - Resources Tab',
            caption: 'Resources tab for attaching workshop slide decks and code repositories.'
          },
          {
            src: '/assets/images/Edit Event - settings.png',
            alt: 'FCS CMS Edit Event - Settings Tab',
            caption: 'Settings tab showing domain-gated registration toggles and capacity limits.'
          }
        ]
      }
    ],
    prototype: {
      figmaUrl: '[FIGMA_LINK_FCS]',
      miroUrl: '[MIRO_LINK_FCS]',
      implementationGapNote: 'Note: Minor UI details (such as button padding and modal backdrop blur) evolved during production build implementation to optimize mobile responsiveness.',
      unsplashNote: 'Background imagery in mockups is sourced from Unsplash for prototyping purposes.'
    },
    outcome: {
      status: 'In Development / Imminent Launch',
      summary: 'The FCS web platform centralizes society operations for APIIT students and committee members. The full UX pipeline resulted in high stakeholder buy-in, clear access controls, and an authoritative brand presence.',
      learningsOrCritique: [
        'Rigorous contrast checking early in the design phase prevented major color redesigns during frontend engineering.',
        'Pivoting based on real committee photo submission rates reinforced the importance of designing for actual user behavior over ideal assumptions.'
      ]
    }
  },

  // 2. Nestlé Connect Case Study (Second)
  {
    id: 'nestle-connect',
    slug: 'nestle-connect',
    title: 'Nestlé Connect — Ordering & Issue Reporting Platform UX',
    subtitle: 'Streamlining B2B FMCG order placement, payment splitting, and multi-tier issue escalation for Nestlé Lanka distributors.',
    role: 'Technical Lead & Scrum Master (Project-Wide) | Scoped UX Designer',
    disciplineTag: 'Full-Stack + UX',
    thumbnail: '/assets/images/Screenshot 2026-07-22 233633.png',
    attribution: 'Team project (Shenal, Suchiru, Sanuth, Sheshan). My role: overall Technical Lead & Scrum Master, with UX design contribution strictly scoped to the Ordering & Issue Reporting platform.',
    context: {
      overview: 'Nestlé Connect is a comprehensive B2B Fast-Moving Consumer Goods (FMCG) retail management system built for Nestlé Lanka across three intensive sprints. While the broader platform handles 14 roles across 4 user tables, promotions, and RIDOS forecasting, this case study focuses strictly on the ordering workflow, payment credit-split UI, and issue escalation system.',
      organization: 'Academic B2B Team Project (Nestlé Lanka Case Study)',
      sprintContext: 'Built across 3 Sprints under strict Scrum MVP constraints. Each sprint required delivering a fully functional, testable MVP slice rather than polishing isolated mockups.'
    },
    problem: {
      summary: 'Distributors and retail shopkeepers faced severe operational friction due to manual phone/paper ordering, zero real-time inventory visibility, rigid payment options, and undocumented complaint tracking for damaged goods or pricing discrepancies.',
      painPoints: [
        'Zero structured visibility — shopkeepers could not track order approval status or delivery agent assignments.',
        'Rigid payment mechanisms — lack of flexible payment splitting between available credit lines and cash/card on delivery.',
        'Informal complaint handling — issues regarding damaged items or incorrect invoices were handled via informal phone calls, frequently getting lost without resolution.'
      ]
    },
    research: {
      empathyMapsNote: 'Empathy mapping was conducted collaboratively as an early team discovery exercise. Detailed individual artefacts were not preserved for individual inclusion.'
    },
    keyDecisions: [
      {
        title: 'Credit / Cash Payment Split Interface',
        problem: 'Shopkeepers needed the flexibility to utilize remaining credit lines while settling remaining balances via cash or card without failing the transaction.',
        decision: 'Designed an interactive payment review screen displaying credit limit metrics, remaining balance, and itemized totals with clear payment breakdown options.',
        tradeoff: 'Increased transaction state complexity on the distributor end, but significantly reduced order rejection rates for shopkeepers with partial credit limits.',
        images: [
          {
            src: '/assets/images/Screenshot 2026-07-22 233952.png',
            alt: 'Nestlé Connect Credit Split Payment UI',
            caption: 'Credit-split payment interface detailing credit utilization, remaining balance, and payment method selection.'
          }
        ]
      },
      {
        title: 'Business-Logic Gated Order Mutability at Delivery',
        problem: 'Delivering orders involves cash handling and inventory adjustments. A core operational rule emerged: payment method dictates whether an order can be edited during delivery.',
        decision: 'Implemented explicit mutability rules: Cash-paid orders allow shopkeepers to modify item quantities at delivery. Credit/Card-paid orders lock original items, but allow adding new items to the invoice.',
        tradeoff: 'Delivery agent UI requires dynamic input locks based on payment origin, preventing illegal status modifications in the field.'
      },
      {
        title: 'Time-Boxed Auto-Escalation Engine',
        problem: 'Submitted issues often sat unresolved in distributor queues with no accountability or escalation path.',
        decision: 'Introduced time-boxed automatic escalation. Unresolved issues automatically climb the managerial hierarchy after defined time windows (e.g. 24h distributor -> 48h area manager).',
        tradeoff: 'Requires strict backend schedule triggers and notification dispatching, but guarantees complaints cannot sit ignored indefinitely.'
      }
    ],
    flowcharts: [
      {
        title: 'Order Lifecycle State Flowchart',
        description: 'Demonstrating the state machine from order placement to delivery point mutability branching.',
        nodes: [
          { id: '1', label: 'Retailer Places Order', type: 'start' },
          { id: '2', label: 'Order Received by Distributor', type: 'process' },
          { id: '3', label: 'Distributor Reviews & Accepts Order', type: 'process' },
          { id: '4', label: 'Distributor Assigns Delivery Agent', type: 'process' },
          { id: '5', label: 'Delivery Agent Delivers Order to Retailer', type: 'process' },
          { id: '6', label: 'Payment Method Branch at Delivery?', type: 'decision' },
          { id: '7A', label: 'Cash Payment: Retailer may fully change order at delivery', type: 'branch', details: 'Full quantity & item edits permitted prior to final receipt generation.' },
          { id: '7B', label: 'Credit/Card Payment: Original order locked; extra items can be added', type: 'branch', details: 'Original items immutable for financial reconciliation; supplementary items allowed.' },
          { id: '8', label: 'Final Payment Confirmation & Order Completed', type: 'end' }
        ],
        edges: [
          { from: '1', to: '2' },
          { from: '2', to: '3' },
          { from: '3', to: '4' },
          { from: '4', to: '5' },
          { from: '5', to: '6' },
          { from: '6', to: '7A', label: 'Paid via Cash' },
          { from: '6', to: '7B', label: 'Paid via Credit / Card' },
          { from: '7A', to: '8' },
          { from: '7B', to: '8' }
        ]
      },
      {
        title: 'Issue Escalation Chain Flowchart',
        description: 'Time-gated routing logic ensuring no retailer grievance goes unaddressed.',
        nodes: [
          { id: 'e1', label: 'Retailer Submits Issue (Category & Description)', type: 'start' },
          { id: 'e2', label: 'Issue Routed to Primary Official (by Category)', type: 'process' },
          { id: 'e3', label: 'Is Issue Resolved within Time Window?', type: 'decision' },
          { id: 'e4', label: 'Issue Marked Resolved & Logged', type: 'end' },
          { id: 'e5', label: 'Auto-Escalate to Next-Highest Official in Hierarchy', type: 'branch', details: 'Triggers push notification & urgent status badge to regional manager.' },
          { id: 'e6', label: 'Repeat Escalation until Resolution Reached', type: 'process' }
        ],
        edges: [
          { from: 'e1', to: 'e2' },
          { from: 'e2', to: 'e3' },
          { from: 'e3', to: 'e4', label: 'Yes (Resolved)' },
          { from: 'e3', to: 'e5', label: 'No (Time Window Expired)' },
          { from: 'e5', to: 'e6' },
          { from: 'e6', to: 'e3' }
        ]
      }
    ],
    screens: [
      {
        src: '/assets/images/Screenshot 2026-07-22 233633.png',
        title: 'Shopkeeper Order & Product Catalogue',
        description: 'First screen in the ordering lifecycle. Shopkeepers browse categorized FMCG products, view stock availability, and build their cart.',
        alt: 'Nestlé Connect Shopkeeper Product Catalogue Screen'
      },
      {
        src: '/assets/images/Screenshot 2026-07-22 234351.png',
        title: 'Distributor Order Summary & Payment Review',
        description: 'Distributor review screen showing itemized order details, cash payment pending status (LKR 2,950), and the Accept Order action.',
        alt: 'Nestlé Connect Distributor Order Summary Screen'
      },
      {
        src: '/assets/images/Screenshot 2026-07-22 234045.png',
        title: 'Issue Reporting Form & Issues History Tracking',
        description: 'Dual-panel UI featuring complaint submission fields on the left and a live "My Issues History" table with Pending/Submitted badges on the right.',
        alt: 'Nestlé Connect Issue Reporting and Status Tracking Screen'
      }
    ],
    outcome: {
      status: 'Delivered MVP across 3 Sprints',
      summary: 'Successfully engineered and delivered the Ordering & Issue Reporting platform slice for Nestlé Connect. The clear separation of cash vs credit order mutability and auto-escalating complaint engine received strong academic commendation.',
      learningsOrCritique: [
        'Designing under Scrum MVP constraints proved the value of scoping core business logic (payment mutability) before polishing visual accents.',
        'Interactive flowcharts helped align backend engineers and frontend UI views early in sprint planning.'
      ]
    }
  },

  // 3. Aura Case Study (Last)
  {
    id: 'aura',
    slug: 'aura',
    title: 'Aura — Mood-Based Travel Companion',
    subtitle: 'Connecting mood check-ins with tailored destination recommendations and AI post-trip memory journals.',
    role: 'Research & Ideation',
    disciplineTag: 'UX Research & Design',
    thumbnail: '/assets/images/Screenshot 2026-07-20 170404.png',
    attribution: 'Team Designathon Project (Team of 5). My role: UX Research & Ideation. UI wireframes and high-fidelity Figma prototypes were executed by teammates.',
    context: {
      overview: 'Aura was built during an intensive 1-week external design competition. Following a week of workshop-taught methodologies — including a structured paper ideation exercise (folding an A4 sheet into eight sections for rapid concept drafting) — the team selected a tourism problem statement with a mandate to integrate AI.',
      organization: 'External Designathon Competition (Team of 5)',
      sprintContext: '1-Week Ideation & Design Sprint following workshop training.'
    },
    problem: {
      summary: 'Digital tourism infrastructure is deeply fragmented. Users must manually juggle Google/Apple Maps for navigation, TripAdvisor for reviews, and Booking.com for accommodation. Crucially, these platforms do not communicate with each other (e.g. property owners list on Booking.com, but user reviews exist in isolation on TripAdvisor).',
      painPoints: [
        'Fragmented toolchains — travellers jump between 4+ apps to plan a single day trip.',
        'Stateless recommendations — existing apps suggest popular spots without considering the user\'s current emotional state or energy level.',
        'Passive trip reflection — post-trip memories fade without synthesized digital journaling.'
      ]
    },
    research: {
      framing: 'Primary research findings synthesised during competition week highlighted that travellers make destination choices based on immediate emotional mood (e.g. seeking quiet relaxation vs adventurous curiosity) rather than static geographic categories.',
      personas: [
        {
          name: 'The Solo Traveller',
          role: 'Spontaneous explorer looking for low-stress, mood-matched spots.',
          quote: '"I don\'t want a rigid 10-step itinerary. Tell me where to go based on how I feel right now."',
          details: 'Needs instant daily mood check-in recommendations without booking friction.'
        },
        {
          name: 'Honeymooners / Couples',
          role: 'Quality-oriented travellers seeking romantic, quiet atmosphere.',
          quote: '"We want secluded, peaceful spots without spending hours reading conflicting reviews."',
          details: 'Prioritizes mood filters (Relaxed, Scenic) over generic top-rated lists.'
        },
        {
          name: 'Cultural Traveller',
          role: 'Curious learner interested in local history and authentic stories.',
          quote: '"I love reflecting on where I\'ve been and capturing authentic stories from each trip."',
          details: 'Values post-trip memory journaling and intelligent follow-up suggestions.'
        }
      ]
    },
    keyDecisions: [
      {
        title: 'Mood-to-Destination Matching (Headline Differentiator)',
        problem: 'Standard travel apps assume travellers plan around static categories (e.g. "Museums" or "Restaurants") rather than how they feel on a given morning.',
        decision: 'Co-proposed the core "Mood Check-in" feature ("How are you waking up today?": Energized, Relaxed, Curious, Tired, Spontaneous). The algorithm dynamically filters itineraries based on emotional state.',
        tradeoff: 'Requires defining subjective mood parameters, but creates an emotionally resonant user experience.',
        images: [
          {
            src: '/assets/images/Screenshot 2026-07-20 170404.png',
            alt: 'Aura Daily Mood Check-in Interface',
            caption: 'Daily mood check-in screen ("How are you waking up today?") feeding into customized itinerary generation.'
          }
        ]
      },
      {
        title: 'AI Post-Trip Memory Journal ("Ella · A Memory")',
        problem: 'Once a trip ends, travel apps abandon the user until the next booking, missing an opportunity for meaningful reflection and context-aware future suggestions.',
        decision: 'Proposed an AI-generated post-trip memory journal that synthesizes photos, visited spots, and trip notes into a story, concluding with context-aware recommendations for follow-up trips.',
        tradeoff: 'Relies on generative text synthesis, but transforms a transactional booking app into a long-term personal travel companion.',
        images: [
          {
            src: '/assets/images/Screenshot 2026-07-20 170428.png',
            alt: 'Aura AI Post-Trip Memory Journal',
            caption: 'AI Memory screen ("Ella · A Memory") showcasing synthesized trip highlights and intelligent follow-up suggestions.'
          }
        ]
      },
      {
        title: 'Onboarding & Main Dashboard',
        problem: 'Navigating between mood check-ins, active bookings, and saved spots required a clear spatial hierarchy.',
        decision: 'Designed a unified map-centric home dashboard providing instant access to daily plans, accommodation rentals, and transport options.',
        tradeoff: 'Dense dashboard elements require careful spacing on small screens.',
        images: [
          {
            src: '/assets/images/Screenshot 2026-07-20 165438.png',
            alt: 'Aura Home Dashboard',
            caption: 'Main dashboard ("Hey Perera, Welcome back") unifying map view, rental bookings, and active itineraries.'
          }
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Mood-to-Destination Logic Diagram',
        description: 'Retroactive logic flowchart mapping mood check-in states to activity and destination recommendation filters. (Note: Created retroactively for portfolio documentation).',
        nodes: [
          { id: 'm1', label: 'User Completes Daily Check-in', type: 'start' },
          { id: 'm2', label: 'Select Emotional State?', type: 'decision' },
          { id: 'm3A', label: 'Energized / Spontaneous', type: 'branch', details: 'Filter: Outdoor hiking, water sports, vibrant local markets.' },
          { id: 'm3B', label: 'Relaxed / Tired', type: 'branch', details: 'Filter: Scenic viewpoints, quiet cafes, wellness spas, low-walking routes.' },
          { id: 'm3C', label: 'Curious', type: 'branch', details: 'Filter: Heritage sites, artisan workshops, museum tours.' },
          { id: 'm4', label: 'Synthesize Recommendations via AI Engine', type: 'process' },
          { id: 'm5', label: 'Generate Personalized Day Plan', type: 'end' }
        ],
        edges: [
          { from: 'm1', to: 'm2' },
          { from: 'm2', to: 'm3A', label: 'Energized / Spontaneous' },
          { from: 'm2', to: 'm3B', label: 'Relaxed / Tired' },
          { from: 'm2', to: 'm3C', label: 'Curious' },
          { from: 'm3A', to: 'm4' },
          { from: 'm3B', to: 'm4' },
          { from: 'm3C', to: 'm4' },
          { from: 'm4', to: 'm5' }
        ]
      }
    ],
    ideationCut: {
      title: 'Weather-Based Destination Filtering',
      proposed: 'Proposed dynamically altering destination recommendations based on real-time satellite weather forecasts during the ideation sprint.',
      reasoning: 'Cut before competition submission because weather patterns in tropical regions are inherently unpredictable, and integrating credible live satellite APIs was out of scope for a 1-week concept.'
    },
    outcome: {
      status: 'Designathon Concept Presentation',
      summary: 'Aura received strong positive feedback from the judging panel for its novel mood-based matching and AI post-trip reflection concepts. The proposed monetization model relied on commission-based partnerships with platforms like Booking.com.',
      learningsOrCritique: [
        'Judges flagged WhatsApp-style double-tick read receipts on AI chat messages as an unnatural human messaging artifact for an instantaneous AI response.',
        'Judges highlighted a geographic mismatch in one demo recommendation — suggesting a coastal beach spot to a user in inland hill country (Ella, Sri Lanka) — revealing a flaw in spatial recommendation logic under short competition timelines.'
      ]
    }
  }
];
