export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  domain: string;
  platform: string;
  tags: string[];
  nda?: boolean;
  year: string;
  role: string;
  duration: string;
  team: string;
  oneLiner: string;
  // Detail
  hero: {
    eyebrow: string;
    headline: string;
    summary: string;
    accent: string; // hex
  };
  context: string;
  problem: string;
  goals: string[];
  research: {
    method: string;
    insight: string;
  }[];
  personas: { name: string; role: string; need: string; pain: string }[];
  ia?: string;
  decisions: { title: string; body: string }[];
  outcomes: { metric: string; label: string }[];
  reflection: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ease-well",
    index: "01",
    title: "Ease Well",
    subtitle: "Mental health support, designed to feel like a deep breath.",
    domain: "HealthTech",
    platform: "Mobile App · iOS & Android",
    tags: ["Mental Health", "Wellness", "Mobile"],
    year: "2024",
    role: "Lead UI/UX Designer",
    duration: "10 weeks · discovery → handoff",
    team: "1 PM · 2 engineers · 1 clinical advisor",
    oneLiner: "An app that turns a moment of overwhelm into the smallest possible next step.",
    hero: {
      eyebrow: "Case Study 01 · HealthTech",
      headline: "A quiet companion for the loudest moments.",
      summary:
        "Ease Well helps people in early distress find their footing, without forcing them to name what's wrong before they're ready. The product had to feel less like an app and more like a friend who already knows.",
      accent: "#C9A84C",
    },
    context:
      "Mental-health apps in India are crowded with assessments, streaks, and gamified meditations. For users in acute moments, those patterns feel like homework. We were asked to design a tool that an anxious 22-year-old at 2 a.m. would actually open, and finish using calmer than when they started.",
    problem:
      "Existing wellness apps optimise for daily engagement, not crisis support. The first-time experience demands self-diagnosis, sign-up friction, and a long onboarding before any value is delivered. We needed to invert that hierarchy.",
    goals: [
      "Deliver perceived relief in under 60 seconds of first open.",
      "Make journaling, breathing, and grounding accessible without account creation.",
      "Build a trust ladder that earns the right to ask deeper questions over time.",
    ],
    research: [
      {
        method: "12 user interviews · ages 18–34",
        insight:
          "Users described opening wellness apps and immediately closing them because the home screen 'demanded mood input before offering anything back'.",
      },
      {
        method: "Heuristic audit of 6 competitors",
        insight:
          "Every competitor placed sign-up or assessment before content. Average time to first calming interaction: 2m 40s.",
      },
      {
        method: "Diary study · 7 days · 5 participants",
        insight:
          "Peak app-opens clustered between 11pm–2am. Users wanted 'something to hold', not 'something to learn'.",
      },
    ],
    personas: [
      {
        name: "Ananya, 22",
        role: "Design student, first-time user",
        need: "A 60-second exit from a racing mind before bed.",
        pain: "Hates being asked to rate her mood out of 10.",
      },
      {
        name: "Rohit, 29",
        role: "Returning user, light therapy",
        need: "A gentle thread between sessions with his therapist.",
        pain: "Streaks make him feel worse when he misses a day.",
      },
    ],
    ia: "Home (Calm-first) → Breathe · Ground · Write · Listen → Optional Check-in → Saved Moments",
    decisions: [
      {
        title: "Calm-first home, not stats-first",
        body: "The first surface is a single warm gradient with one tap: 'I want to feel a little better'. Everything else is one swipe away. No streaks, no scores, no notifications by default.",
      },
      {
        title: "Earned identity",
        body: "Account creation is deferred until the user wants something only an account can do (save a journal, sync to therapist). Until then, the app works fully anonymously.",
      },
      {
        title: "Soft motion as therapy",
        body: "Breathing exercises use a 4-7-8 timed expansion synced to subtle haptics. We prototyped 14 easing curves before landing on one that mirrors a slow exhale.",
      },
      {
        title: "Language without judgement",
        body: "Removed clinical labels. 'Anxiety toolkit' became 'When everything feels too much'. Copywriting was reviewed by a practising counsellor.",
      },
    ],
    outcomes: [
      { metric: "−68%", label: "Time to first calming interaction" },
      { metric: "4.7★", label: "Average rating · closed beta · n=84" },
      { metric: "3.2×", label: "Day-7 retention vs. category benchmark" },
    ],
    reflection:
      "The hardest design decision was removing things. Every removed metric, badge, and streak made the product more honest. I learned to defend whitespace as a feature, not as a missing opportunity.",
  },
  {
    slug: "brokerpad",
    index: "02",
    title: "BrokerPad",
    subtitle: "A control room for real-estate brokers drowning in WhatsApp.",
    domain: "PropTech",
    platform: "Mobile + Web Dashboard",
    tags: ["Real Estate", "PropTech", "CRM", "Dashboard"],
    year: "2024",
    role: "Product Designer (sole)",
    duration: "14 weeks · 0→1",
    team: "1 founder · 3 engineers",
    oneLiner: "Turned a 600-message WhatsApp morning into a five-minute morning.",
    hero: {
      eyebrow: "Case Study 02 · PropTech",
      headline: "Brokers don't need another CRM. They need their morning back.",
      summary:
        "BrokerPad is a lead-and-property OS for independent real-estate brokers. The challenge wasn't features; it was earning permission to replace the one tool every broker already trusts: WhatsApp.",
      accent: "#C9A84C",
    },
    context:
      "Independent brokers in Tier-2 Indian cities manage 80–300 active leads across WhatsApp, paper diaries, and memory. They distrust CRMs because every previous attempt felt designed for enterprise sales teams, not for a one-person business done from a scooter.",
    problem:
      "How do we deliver the structure of a CRM with the speed of a chat app, and the trust of a tool a broker can hand to a junior without a week of training?",
    goals: [
      "First lead logged in under 20 seconds, one-handed.",
      "WhatsApp message → structured lead in a single paste.",
      "Property matching that surfaces 'who might want this' the moment a listing is added.",
    ],
    research: [
      {
        method: "8 broker shadowing sessions · 3 cities",
        insight:
          "Brokers are mobile-first, not mobile-only. Mornings happen on the phone; evenings on a desktop. The product had to be genuinely dual-surface, not a responsive afterthought.",
      },
      {
        method: "Competitive teardown · 9 CRMs",
        insight:
          "Every competitor optimised for 'pipeline visibility' for managers. Nobody optimised for the broker actually doing the work.",
      },
    ],
    personas: [
      {
        name: "Vikram, 34",
        role: "Independent broker, Jaipur",
        need: "A way to never lose a lead between site visits.",
        pain: "Forgets which client he promised which floor plan to.",
      },
    ],
    ia: "Inbox → Leads · Properties · Site Visits → Match Engine → Reports",
    decisions: [
      {
        title: "Paste-to-parse lead capture",
        body: "Brokers paste any WhatsApp chunk. We parse name, budget, location, and BHK with a rules + LLM hybrid, and show editable chips before saving. Removes 6 form fields.",
      },
      {
        title: "Match-first listings",
        body: "Adding a property immediately surfaces 'these 8 leads match'. The system rewards action with insight, instead of asking for tagging upfront.",
      },
      {
        title: "Dual-surface, single source",
        body: "Mobile is built for input and reaction. Web is built for analysis and bulk operations. Both share one data model and one design system, so handoff between surfaces feels invisible.",
      },
    ],
    outcomes: [
      { metric: "20s", label: "Median time to log a new lead" },
      { metric: "+41%", label: "Site-visit-to-deal conversion · pilot brokers" },
      { metric: "11/12", label: "Pilot brokers retained after free trial" },
    ],
    reflection:
      "The hardest part was earning trust in the first 48 hours. Brokers don't read onboarding; they test you. The design has to prove itself in the first paste, the first match, the first night without losing a lead.",
  },
  {
    slug: "pawpulse",
    index: "03",
    title: "PawPulse",
    subtitle: "An AI-first companion for the parents of furry, four-legged kids.",
    domain: "PetTech",
    platform: "Mobile App",
    tags: ["PetTech", "AI", "Mobile"],
    year: "2025",
    role: "Lead UI/UX Designer",
    duration: "9 weeks · concept → MVP",
    team: "1 PM · 1 vet advisor · 2 engineers",
    oneLiner: "A pet-care app that recognises that the user is the human, but the customer is the dog.",
    hero: {
      eyebrow: "Case Study 03 · PetTech",
      headline: "Built for the human who carries the leash.",
      summary:
        "PawPulse blends vaccination tracking, AI symptom triage, and a soft community layer. The interface had to balance medical seriousness with the warmth of a tool people use to share photos of their dog.",
      accent: "#C9A84C",
    },
    context:
      "First-time pet parents are anxious researchers. They Google symptoms at midnight, panic-book vets for things that resolve in an hour, and miss the things they shouldn't. The market is full of either clinical vet portals or playful 'pet social' apps. Nobody owned the middle.",
    problem:
      "How do you design AI symptom triage that is confident enough to be useful, but humble enough to never replace a vet?",
    goals: [
      "Make every AI response say what it is, and what it isn't.",
      "Cut time-to-answer for routine concerns from 25 minutes of Googling to under 90 seconds in-app.",
      "Build a vaccination + reminder system that feels like a friend nudging, not a nag.",
    ],
    research: [
      {
        method: "6 vet interviews",
        insight:
          "Vets don't fear AI triage; they fear AI confidence. Every response needs a clear 'see a vet if…' line, calibrated to severity.",
      },
      {
        method: "Survey · 142 pet parents",
        insight:
          "73% had Googled a symptom in the last 30 days. 61% felt 'more worried after' than before.",
      },
    ],
    personas: [
      {
        name: "Sneha, 27",
        role: "First-time dog parent",
        need: "Reassurance that what she's seeing is normal, or a clear push to act.",
        pain: "Google sends her to worst-case-scenario forums.",
      },
    ],
    decisions: [
      {
        title: "Severity-banded AI responses",
        body: "Every AI answer is wrapped in a colour-coded confidence band: green (likely normal), amber (monitor), red (vet now). The band is decided by a rules layer, not the LLM, so we control the floor of safety.",
      },
      {
        title: "One-tap vet handoff",
        body: "Every AI response ends with 'Show this to a vet'; a single tap composes a structured summary the user can paste into any vet chat. The AI is positioned as a translator, not a doctor.",
      },
      {
        title: "Vaccination as a relationship, not a calendar",
        body: "Reminders are written as a friend would: 'Bruno's rabies booster is due next Tuesday. Want me to remind you the night before?' Tone-tested with 14 users.",
      },
    ],
    outcomes: [
      { metric: "−84%", label: "Self-reported anxiety after symptom check" },
      { metric: "92%", label: "Users who completed first vaccination log" },
    ],
    reflection:
      "Designing for emotional users is designing for the spike, not the average. The moment that matters is the 11pm scare; every other screen should earn its way back to that moment.",
  },
  {
    slug: "luxpay",
    index: "04",
    title: "LuxPay",
    subtitle: "Micro-finance for luxury collateral, designed with the seriousness of a bank vault.",
    domain: "Fintech",
    platform: "Web Platform",
    tags: ["Fintech", "Micro-Lending", "Auctions"],
    nda: true,
    year: "2024",
    role: "UI/UX Designer",
    duration: "16 weeks",
    team: "Cross-functional · 8 people",
    oneLiner: "A lending platform where every pixel had to feel like trust.",
    hero: {
      eyebrow: "Case Study 04 · Fintech · Under NDA",
      headline: "Trust is a design system before it is a product.",
      summary:
        "LuxPay enables short-term lending against luxury collateral, with a live auction layer for defaulted assets. Every interaction had to earn a user's belief that their watch, their bag, their gold would be returned. Specifics are abstracted for confidentiality.",
      accent: "#C9A84C",
    },
    context:
      "The product sits between two psychologies: a borrower in temporary need (anxious, protective) and an auction bidder (cool, opportunistic). One UI had to serve both without making either feel cheap.",
    problem:
      "How do you design a financial product that is fast for power users and reassuring for first-timers, without flattening into mediocrity for either?",
    goals: [
      "Reduce loan-application abandonment by removing perceived risk in the first three steps.",
      "Design an auction interface that feels deliberate rather than gamified.",
      "Create a documentation system that holds up under regulatory review.",
    ],
    research: [
      {
        method: "7 borrower interviews",
        insight:
          "Borrowers wanted to know 'where my watch is right now' more than 'what is my interest rate'. Physical-asset visibility was the trust signal.",
      },
    ],
    personas: [
      { name: "Confidential", role: "Borrower archetype", need: "Visibility over their collateral.", pain: "Fear of impersonal process." },
    ],
    decisions: [
      {
        title: "Custody timeline as the hero",
        body: "Replaced the standard 'loan status' bar with a custody timeline: pickup → vault → valuation → live → return. The asset journey is the trust artefact.",
      },
      {
        title: "Auction restraint",
        body: "Removed countdown urgency animations. Bidding pace is shown as a slow, honest pulse, not a casino. Conversions held; complaints dropped.",
      },
    ],
    outcomes: [
      { metric: "−31%", label: "Drop-off in application flow" },
      { metric: "+22%", label: "Repeat borrower rate" },
    ],
    reflection:
      "Financial design is the design of believability. Every micro-decision (a typeface weight, a delay before a confirmation) compounds into whether a user hands you something they love.",
  },
  {
    slug: "agrirent",
    index: "05",
    title: "AgriRent",
    subtitle: "Peer-to-peer farm-equipment rental, designed for hands that do not scroll.",
    domain: "AgriTech",
    platform: "Mobile App",
    tags: ["AgriTech", "Marketplace", "P2P"],
    nda: true,
    year: "2025",
    role: "Lead Designer",
    duration: "12 weeks",
    team: "Confidential",
    oneLiner: "A marketplace that respects that the most important user has soil under their fingernails.",
    hero: {
      eyebrow: "Case Study 05 · AgriTech · Under NDA",
      headline: "If the farmer can't use it standing in a field, it doesn't exist.",
      summary:
        "AgriRent connects farmers who own under-utilised tractors and harvesters with farmers who need them for a few hours. Designed for low-literacy, high-dust, one-handed-with-sun-glare conditions.",
      accent: "#C9A84C",
    },
    context:
      "Equipment ownership in rural India is fragmented: 80% of holdings are smallholder, but most machinery is owned by the top 20%. A rental market exists informally: phone calls, village networks. Digitising it required meeting users where they actually are.",
    problem:
      "How do you design a marketplace for users for whom 'tap a button' is not muscle memory, and whose decision-makers are often offline?",
    goals: [
      "Voice-first equipment search in regional languages.",
      "Booking that survives intermittent connectivity.",
      "Trust signals that map to local cues, not urban marketplace patterns.",
    ],
    research: [
      {
        method: "Field visits · 3 districts · Punjab and Haryana",
        insight:
          "Reviews and ratings meant little. 'Whose son is he?' meant everything. Trust was relational, not transactional.",
      },
    ],
    personas: [
      { name: "Confidential", role: "Smallholder farmer", need: "A harvester for 4 hours next Tuesday.", pain: "Doesn't trust strangers with equipment access." },
    ],
    decisions: [
      {
        title: "Voice as primary input",
        body: "Search is voice-first in Hindi and Punjabi. Typed search is a secondary affordance. Reduced cognitive load and accommodated mixed literacy households.",
      },
      {
        title: "Village-graph trust",
        body: "Trust is shown as proximity in a village/community graph, not stars. 'Rented by 3 farmers in your village' outperformed '4.6 stars' in concept testing.",
      },
      {
        title: "Offline-first bookings",
        body: "Bookings queue locally and confirm when network returns. Users see a 'sent' state immediately, sync happens silently.",
      },
    ],
    outcomes: [
      { metric: "+58%", label: "Booking completion vs. earlier text-first prototype" },
    ],
    reflection:
      "Designing for rural users punctured every assumption I carried from designing for urban ones. The fanciest interaction I shipped was: making things bigger, quieter, and slower.",
  },
  {
    slug: "sports-sphere-hub",
    index: "06",
    title: "Sports Sphere Hub",
    subtitle: "A neighbourhood-scale platform for the joy of showing up to play.",
    domain: "Sports · Community",
    platform: "Web Application",
    tags: ["Sports", "Community", "Events"],
    nda: true,
    year: "2024",
    role: "UI/UX Designer",
    duration: "10 weeks",
    team: "Confidential",
    oneLiner: "A platform that turns 'I should play more' into 'I'm playing on Saturday at 6'.",
    hero: {
      eyebrow: "Case Study 06 · Sports · Under NDA",
      headline: "Friction is the enemy of every Sunday match.",
      summary:
        "Sports Sphere Hub helps amateur communities organise local matches, leagues, and casual play. Designed to remove every excuse between intent and showing up.",
      accent: "#C9A84C",
    },
    context:
      "Local sports happens in WhatsApp groups that die after three weekends. The product had to outperform the inertia of those groups, by being faster to join than to type.",
    problem:
      "How do you design participation so light that someone joins a 6 a.m. match the night before, without thinking twice?",
    goals: [
      "Three-tap RSVP from a shared link.",
      "Group health visible at a glance: who's coming, who's flaky, who's bringing the ball.",
      "Calendars that respect that amateur sport is a hobby, not a job.",
    ],
    research: [
      {
        method: "Group interviews · 4 communities",
        insight:
          "The biggest churn driver wasn't lost interest, it was last-minute headcount uncertainty. People bailed when they couldn't tell if a match would actually happen.",
      },
    ],
    personas: [
      { name: "Confidential", role: "Weekend organiser", need: "A guaranteed 8 players by Friday night.", pain: "Chasing replies in 3 different group chats." },
    ],
    decisions: [
      {
        title: "Confidence indicator",
        body: "Each match shows a 'will it happen' confidence score based on historical reliability of attendees. Removes the anxiety of being the only one who shows up.",
      },
      {
        title: "Soft commitment ladder",
        body: "'Maybe', 'Likely', 'Locked': three states instead of yes/no. Mirrors how amateur athletes actually decide.",
      },
    ],
    outcomes: [
      { metric: "+47%", label: "Match-completion rate over WhatsApp baseline" },
    ],
    reflection:
      "Designing community products taught me that the design isn't the screen; it's the group dynamic the screen quietly shapes.",
  },
  {
    slug: "b2b-marketplace",
    index: "07",
    title: "B2B Marketplace",
    subtitle: "A procurement platform built for the buyer who has done this 400 times before.",
    domain: "B2B · Procurement",
    platform: "Web Platform",
    tags: ["B2B", "Marketplace", "Procurement"],
    nda: true,
    year: "2025",
    role: "UI/UX Designer",
    duration: "14 weeks",
    team: "Confidential",
    oneLiner: "A marketplace optimised for expert speed, not first-time delight.",
    hero: {
      eyebrow: "Case Study 08 · B2B · Under NDA",
      headline: "Power users deserve power tools.",
      summary:
        "A B2B trade platform for repeat procurement. The design challenge was to invert consumer-marketplace instincts: hide nothing, defer nothing, treat the keyboard as the primary input device.",
      accent: "#C9A84C",
    },
    context:
      "B2B buyers don't browse. They re-order, compare, RFQ, and negotiate. Most marketplace patterns inherited from B2C add friction for them. The platform had to be aggressively dense without becoming hostile.",
    problem:
      "How do you build a marketplace UI that rewards expertise, without locking out the occasional new buyer?",
    goals: [
      "Keyboard-first navigation across the entire buyer surface.",
      "RFQ in under 4 fields for repeat categories.",
      "Comparison views that scale to 12 SKUs without losing legibility.",
    ],
    research: [
      {
        method: "8 procurement-manager interviews",
        insight:
          "Buyers measured the platform by 'how few clicks to repeat last quarter's order'. Anything else was noise.",
      },
    ],
    personas: [
      { name: "Confidential", role: "Procurement manager", need: "Reorder, compare, and RFQ at speed.", pain: "Consumer-style marketplaces that hide bulk-pricing." },
    ],
    decisions: [
      {
        title: "Command palette as primary navigation",
        body: "A keyboard-first command palette indexes every supplier, SKU, RFQ, and report. Mouse navigation remains, but the platform's centre of gravity is the keyboard.",
      },
      {
        title: "Density as kindness",
        body: "Tables prioritise information density. Whitespace is earned by data, not by aesthetic default. Power users called it 'finally, a B2B tool that respects my screen'.",
      },
    ],
    outcomes: [
      { metric: "−54%", label: "Median time to reorder" },
    ],
    reflection:
      "Designing for experts is humbling. You stop being the smartest person in the room, and start designing the room for someone who is.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
