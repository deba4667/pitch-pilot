export const SAMPLE_DECKS = [
  {
    id: 'deck_airbnb_original',
    title: 'Airbnb Pitch Deck (Minimalist Classic)',
    tagline: 'Book rooms with locals, rather than hotels.',
    industry: 'Travel & Hospitality',
    stage: 'Seed / Series A',
    targetRaise: '$500,000',
    theme: 'airbnb',
    updatedAt: '2026-08-20',
    isTemplate: true,
    slides: [
      {
        id: 'slide_1',
        type: 'title',
        title: 'Airbnb',
        subtitle: 'Book rooms with locals, rather than hotels.',
        hook: 'Connecting travelers with local hosts for authentic, affordable stays worldwide.',
        presenter: 'Brian Chesky & Joe Gebbia',
        contact: 'brian@airbnb.com'
      },
      {
        id: 'slide_2',
        type: 'problem',
        title: 'Problem',
        tagline: 'Hotels isolate you from the city and cost too much.',
        points: [
          { label: 'Price', desc: 'Hotels are expensive and disconnect travelers from local culture.' },
          { label: 'No Easy Connection', desc: 'No web platform exists to easily book a room with a local.' },
          { label: 'Unused Space', desc: 'Homeowners cannot monetize their extra space effectively.' }
        ]
      },
      {
        id: 'slide_3',
        type: 'solution',
        title: 'Solution',
        tagline: 'A web platform where users can rent out space to host travelers.',
        points: [
          { label: 'Save Money', desc: 'Travelers save money by booking authentic local spaces.' },
          { label: 'Make Money', desc: 'Hosts earn extra income by renting extra rooms.' },
          { label: 'Local Culture', desc: 'Experience cities like a true insider.' }
        ]
      },
      {
        id: 'slide_4',
        type: 'market',
        title: 'Market Validation',
        tagline: 'Demonstrated consumer demand across peer-to-peer networks.',
        metrics: [
          { label: 'Couchsurfing.com', value: '630,000+', desc: 'Active users seeking informal stays' },
          { label: 'Craigslist Listings', value: '17,000+', desc: 'Temporary housing posts per week in SF & NY' },
          { label: 'Event Spikes', value: '100% Full', desc: 'Hotel saturation during DNC & major conferences' }
        ]
      },
      {
        id: 'slide_5',
        type: 'tam_sam_som',
        title: 'Market Size (TAM / SAM / SOM)',
        tagline: 'Huge addressable global accommodation market.',
        tam: { value: '$1.9B+', label: 'TAM - Total Trips Booked Worldwide' },
        sam: { value: '$560M', label: 'SAM - Budget & P2P Online Bookings' },
        som: { value: '$84M', label: 'SOM - 15% Share of Market Goal' }
      },
      {
        id: 'slide_6',
        type: 'product',
        title: 'Product',
        tagline: 'Simple 3-step booking experience.',
        features: [
          { step: '1', title: 'Search by City', desc: 'Enter dates and location to browse listings.' },
          { step: '2', title: 'Review Profiles', desc: 'Read host reviews, verify identity, and check photos.' },
          { step: '3', title: 'Book Instantly', desc: 'Secure payment processed in seconds.' }
        ]
      },
      {
        id: 'slide_7',
        type: 'business_model',
        title: 'Business Model',
        tagline: 'Simple, scalable 10% transaction fee.',
        feePercentage: '10%',
        projectedBookings: '10.6 Million Trips',
        projectedRevenue: '$200M Revenue',
        metrics: [
          { label: 'Average Booking Fee', value: '$20', desc: 'Per trip (10% on $200 avg order value)' },
          { label: 'Unit Economics', value: '92% Margin', desc: 'High gross margin digital Marketplace' }
        ]
      },
      {
        id: 'slide_8',
        type: 'adoption',
        title: 'Market Adoption & GTM',
        tagline: 'Dual-engine supply and demand acquisition strategy.',
        channels: [
          { title: 'Events Partnerships', detail: 'Target massive sold-out conventions (DNC, SXSW, MacWorld).' },
          { title: 'Craigslist Cross-Posting', detail: 'One-click tool for hosts to mirror listings onto Craigslist.' },
          { title: 'Host Referral Loop', detail: 'Incentivize top hosts with travel credits & free professional photography.' }
        ]
      },
      {
        id: 'slide_9',
        type: 'competitors',
        title: 'Competitive Advantages',
        tagline: 'First dedicated P2P transactional platform with host trust features.',
        matrix: [
          { feature: 'Online Booking', airbnb: true, hotels: false, craigslist: false, couchsurfing: false },
          { feature: 'Host Identity & Verification', airbnb: true, hotels: true, craigslist: false, couchsurfing: false },
          { feature: 'Design & Ease of Use', airbnb: true, hotels: false, craigslist: false, couchsurfing: false },
          { feature: 'Affordable Local Stays', airbnb: true, hotels: false, craigslist: true, couchsurfing: true }
        ]
      },
      {
        id: 'slide_10',
        type: 'team',
        title: 'Team',
        tagline: 'Designers & engineers with passion for spatial experience.',
        members: [
          { name: 'Brian Chesky', role: 'Co-Founder & CEO', bio: 'RISD Industrial Design graduate. Lead brand & user experience.' },
          { name: 'Joe Gebbia', role: 'Co-Founder & CPO', bio: 'RISD Graphic Design & Industrial Design double major. Serial founder.' },
          { name: 'Nathan Blecharczyk', role: 'Co-Founder & CTO', bio: 'Harvard CS. Built infrastructure at OpEnterprise & Microsoft.' }
        ]
      },
      {
        id: 'slide_11',
        type: 'expansion',
        title: 'Expansion Roadmap',
        tagline: 'Scaling from major event cities to global metropolis hubs.',
        milestones: [
          { phase: 'Phase 1', goal: 'Dominate 10 US Major Convention Cities' },
          { phase: 'Phase 2', goal: 'Launch Experiences & Local Tours Integration' },
          { phase: 'Phase 3', goal: 'Expand to European & Asian Capitals' }
        ]
      },
      {
        id: 'slide_12',
        type: 'ask',
        title: 'Funding Ask',
        tagline: 'Raising $500,000 Seed Round to hit 80,000 trips.',
        amount: '$500,000',
        equity: '15% Equity',
        runway: '12 Months Runway',
        breakdown: [
          { category: 'Product & Engineering', percentage: '45%' },
          { category: 'Host Acquisition & Marketing', percentage: '35%' },
          { category: 'Operations & Legal', percentage: '20%' }
        ]
      }
    ]
  },
  {
    id: 'deck_pitchpilot_saas',
    title: 'Pitch Pilot AI',
    tagline: 'Instant AI Pitch Decks for Founders & Startups',
    industry: 'Generative AI / SaaS',
    stage: 'Seed Stage',
    targetRaise: '$1,500,000',
    theme: 'modern_dark',
    updatedAt: '2026-08-24',
    isTemplate: false,
    slides: [
      {
        id: 's1',
        type: 'title',
        title: 'Pitch Pilot AI',
        subtitle: 'Turn napkin ideas into VC-ready pitch decks in 60 seconds.',
        hook: 'AI narrative generator + Airbnb-style minimalist design engine.',
        presenter: 'Alex Rivera, Founder',
        contact: 'alex@pitchpilot.ai'
      },
      {
        id: 's2',
        type: 'problem',
        title: 'The Problem',
        tagline: 'Founders waste 100+ hours wrestling presentation software and pitch narrative.',
        points: [
          { label: 'Time Sink', desc: 'Founders spend 3-4 weeks building decks instead of building product.' },
          { label: 'Flawed Narrative', desc: '80% of rejected decks fail on story structure and TAM clarity.' },
          { label: 'Expensive Agencies', desc: 'Design agencies charge $5,000 - $15,000 per pitch presentation.' }
        ]
      },
      {
        id: 's3',
        type: 'solution',
        title: 'The Solution',
        tagline: 'An AI-native platform that generates structured, investor-grade decks automatically.',
        points: [
          { label: '60-Second Creation', desc: 'Input startup details into interactive forms or one prompt.' },
          { label: 'Proven Frameworks', desc: 'Pre-formatted with Airbnb, Sequoia, and Y Combinator deck standards.' },
          { label: 'Live Customizer & Export', desc: 'Edit copy in real-time and export to high-res PDF or slideshow.' }
        ]
      },
      {
        id: 's4',
        type: 'tam_sam_som',
        title: 'Market Opportunity',
        tagline: 'Riding the explosive wave of global startup creation & AI productivity software.',
        tam: { value: '$14.2B', label: 'TAM - Global AI Presentation Software' },
        sam: { value: '$2.8B', label: 'SAM - Founder & Startup SaaS Market' },
        som: { value: '$150M', label: 'SOM - Early-Stage Fundraising Software Target' }
      },
      {
        id: 's5',
        type: 'product',
        title: 'Product Overview',
        tagline: 'Guided startup wizard + automated slide designer.',
        features: [
          { step: '1', title: 'Guided Wizard', desc: '10-step wizard extracts problem, TAM, competitors, ask.' },
          { step: '2', title: 'AI Narrative Engine', desc: 'Generates compelling investor copywriting & metric visuals.' },
          { step: '3', title: 'One-Click Themes', desc: 'Switch between Airbnb Minimalist, Tech Dark, and Sequoia Clean.' }
        ]
      },
      {
        id: 's6',
        type: 'business_model',
        title: 'Business Model',
        tagline: 'SaaS Freemium with high-margin recurring subscriptions.',
        feePercentage: 'SaaS MRR',
        projectedBookings: '$49/mo Pro',
        projectedRevenue: '$1.2M ARR Year 1',
        metrics: [
          { label: 'Free Tier', value: '1 Deck Export', desc: 'Viral growth loop with pitch pilot watermark' },
          { label: 'Founder Pro', value: '$49 / mo', desc: 'Unlimited AI decks, custom themes, PDF export' },
          { label: 'VC Agency Plan', value: '$199 / mo', desc: 'Team collaboration, custom domain, white label' }
        ]
      },
      {
        id: 's7',
        type: 'ask',
        title: 'Fundraising Ask',
        tagline: 'Raising $1.5M Seed to scale AI models & go-to-market.',
        amount: '$1,500,000',
        equity: '12.5% Equity',
        runway: '18 Months Runway',
        breakdown: [
          { category: 'AI Infrastructure & R&D', percentage: '40%' },
          { category: 'Growth & Founder Community Marketing', percentage: '35%' },
          { category: 'Core Engineering & Design Team', percentage: '25%' }
        ]
      }
    ]
  }
];
