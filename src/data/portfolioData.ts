import { Project, ExperienceItem, SkillCategory, StoreEcosystemItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Anil Kumar',
  role: 'Senior Flutter & Mobile App Developer',
  tagline: '5+ Years delivering high-impact, enterprise cross-platform mobile solutions for Fortune 500 & industry leaders',
  yearsOfExperience: '5+',
  location: 'Firozabad, Uttar Pradesh, India (Open to Relocation & Remote)',
  email: 'anilshrivastav.official@gmail.com',
  phone: '+91-8439228724',
  whatsappUrl: 'https://wa.me/918439228724',
  linkedin: 'https://www.linkedin.com/in/anil-kumar-7a2b61137',
  github: 'https://github.com/anilshrivastav',
  pubDev: 'https://pub.dev/publishers/anilshrivastav',
  resumeUrl: 'https://drive.google.com/file/d/1IDSoSU1fH2gdbO2HJ3inG316R9f1u6Pm/view?usp=sharing',
  resumeDownloadUrl: 'https://drive.google.com/file/d/1IDSoSU1fH2gdbO2HJ3inG316R9f1u6Pm/view?usp=sharing',
  summary:
    'Senior Cross-Platform Mobile Engineer with 5+ years of production experience architecting, optimizing, and deploying mission-critical Flutter and Dart applications for global enterprises including Amazon DSPs, Comdata, PHILIPS Signify, Ashok Leyland, and JK Lakshmi Cement. Proven track record of boosting app runtime performance by 30%, maintaining a 99.9% crash-free rate across 500k+ users, leading Agile mobile squads, and publishing across 6 major global app stores.',
  quickStats: [
    { label: 'Experience', value: '5+ Yrs', sub: 'Senior Mobile Specialist' },
    { label: 'Speed Optimization', value: '+30%', sub: 'Boosted App Runtimes' },
    { label: 'Global App Stores', value: '6 Stores', sub: 'Verified Production Releases' },
    { label: 'SLA Reliability', value: '99.9%', sub: 'Crash-Free User Sessions' },
  ],
  coreCompetencies: [
    'Cross-Platform Architecture (Flutter & Dart)',
    'Enterprise Performance Tuning (+30% Gains)',
    'Offline-First Sync & Micro-Cache Engines',
    'Role-Based Access Control (RBAC) & Security',
    'Automated CI/CD & Multi-Store Release Automation',
    'Cross-Functional Agile Pod Leadership & Mentoring',
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'powered-by-amazon',
    title: 'Powered by Amazon (Amazon DSPs)',
    subtitle: 'Fleet Fuel Management & Driver Operational Efficiency Hub',
    client: 'Amazon DSPs / Corpay',
    category: 'Logistics & Fuel',
    stateManagement: 'BLoC',
    roleTitle: 'Lead Flutter Developer',
    accentColor: '#FF9900',
    gradientFrom: 'from-amber-500/20',
    gradientTo: 'to-amber-950/40',
    phoneMockupType: 'amazon',
    tags: ['Amazon DSPs', 'Fleet Logistics', 'Corpay Financial', 'Flutter', 'Performance Optimization', 'Play Store', 'App Store'],
    summary:
      'Engineered an enterprise-grade mobile application for Amazon Delivery Service Partners (DSPs) to manage fleet fuel cards, authorize high-volume gas station transactions in real-time, and eliminate route fuel bottlenecks across thousands of active delivery vans.',
    challenge:
      'High transaction latency during peak driver fueling windows and memory bottlenecks on lower-tier Android delivery handhelds resulted in driver downtime and delayed logistics shifts.',
    solution:
      'Redesigned the core mobile architecture with asynchronous background processing, predictive offline caching, and isolated rendering boundaries, elevating execution speed by 30% with 0 dropped frames.',
    businessImpact:
      'Reduced driver fueling turnaround time by 45 seconds per stop, saved thousands of operational hours across active DSP delivery routes, and maintained a 99.9% crash-free session rate throughout peak holiday volumes.',
    keyFeatures: [
      'Real-time Comdata/Corpay fuel card balance monitoring & spending quotas',
      'One-tap cryptographic pump authorization with geo-fenced station validation',
      'Offline-first transaction synchronization with zero-loss fallback logging',
      'Live fleet telemetry dashboard and instant expense receipt capture',
      'Optimized low-power battery lifecycle for 12-hour continuous driver shifts',
    ],
    architectureHighlights: [
      'Feature-First Clean Architecture with strictly decoupled domain interactors',
      'BLoC reactive pipeline with event debouncing to eliminate duplicate API requests',
      'Asynchronous background execution pipelines for smooth large-payload handling',
      'Hardware-accelerated rendering boundaries isolating animated telemetry charts',
    ],
    hiringHighlights: [
      'Delivered 30% measurable performance improvement across multi-generational devices',
      'Maintained 99.9% crash-free SLA during high-intensity Amazon logistics operations',
      'Successfully passed Amazon and Corpay rigorous enterprise security & compliance audits',
      'Dual-store production deployment on Google Play Store and Apple App Store',
    ],
    metrics: [
      { label: 'Performance Gain', value: '+30%', description: 'Faster execution and UI responsiveness' },
      { label: 'Crash-Free Rate', value: '99.9%', description: 'Across thousands of Amazon DSP driver shifts' },
      { label: 'Store Verification', value: 'Dual Store', description: 'Google Play & Apple App Store Verified' },
    ],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.corpay.amazon',
      appStore: 'https://apps.apple.com/us/app/powered-by-amazon/id6636491380',
    },
    screenshots: [
      {
        id: 'amz-1',
        title: 'Virtual Corpay Fuel Pass & Quota Card',
        caption: 'Real-time driver fuel allowance with automated pump limit calculations and VIN tracking.',
        storeSource: 'Google Play Store',
        tag: 'Fleet Card',
        screenType: 'dashboard',
      },
      {
        id: 'amz-2',
        title: 'Instant Pump Authorization Hub',
        caption: 'Cryptographically signed pump token generation allowing drivers to authorize gas pumps instantly.',
        storeSource: 'Apple App Store',
        tag: 'Pump Security',
        screenType: 'security',
      },
      {
        id: 'amz-3',
        title: 'Route Fuel Telemetry & Receipt History',
        caption: 'Comprehensive offline-synced fuel expenditure logs with automated digital receipt matching.',
        storeSource: 'Google Play Store',
        tag: 'Telemetry',
        screenType: 'transaction',
      },
    ],
  },
  {
    id: 'driven-for-comdata',
    title: 'Driven for Comdata',
    subtitle: 'Fleet Expense Management & Commercial Fuel Solutions',
    client: 'Comdata (A Corpay Company)',
    category: 'Logistics & Fuel',
    stateManagement: 'GetX',
    roleTitle: 'Mobile Software Developer',
    accentColor: '#00A86B',
    gradientFrom: 'from-emerald-500/20',
    gradientTo: 'to-emerald-950/40',
    phoneMockupType: 'comdata',
    tags: ['Comdata Mastercard', 'Financial Tech', 'Fleet Management', 'Geo-Search', 'Play Store', 'App Store'],
    summary:
      'Developed a scalable commercial fleet management solution empowering drivers and fleet owners to monitor live Mastercard balances, navigate to discounted fuel stops, dispute unauthorized charges, and manage card security in real-time.',
    challenge:
      'Managing multi-fleet hierarchical account structures with complex security rules, dynamic station discount calculations, and real-time fraud card freeze mechanisms.',
    solution:
      'Architected a modular micro-service mobile layer with reactive state controllers, debounced geo-location queries, and instant biometrics authentication for card security actions.',
    businessImpact:
      'Achieved a 4.6-star store rating, reduced driver expense dispute resolution time by 40%, and enabled fleet operators to save up to 15¢/gallon through intelligent fuel discount routing.',
    keyFeatures: [
      'Instant card freeze/unfreeze security toggle with immediate gateway sync',
      'Interactive geo-located fuel station radar highlighting exclusive fleet discounts',
      'Automated expense categorizer with real-time balance alerts and push notifications',
      'Multi-fleet hierarchical account switcher with dynamic permission scoping',
    ],
    architectureHighlights: [
      'Modular architecture enabling rapid squad feature development and isolated testing',
      'Memory-efficient lazy controller bindings with automated resource disposal',
      'Debounced spatial search queries minimizing cloud backend API overhead',
    ],
    hiringHighlights: [
      'High customer satisfaction score (4.6 ★) across Apple App Store and Google Play',
      'Full compliance with PCI-DSS mobile financial standards and secure biometric tokens',
      'Built reusable cross-platform UI components adopted across Corpay product lines',
    ],
    metrics: [
      { label: 'Store Rating', value: '4.6 ★', description: 'Top rated on Apple App Store & Google Play' },
      { label: 'Fuel Savings', value: '15¢/gal', description: 'Optimized routing to partner discount stations' },
      { label: 'Card Security', value: '<500ms', description: 'Instant remote card freeze & fraud lock' },
    ],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.fleetcor.driven',
      appStore: 'https://apps.apple.com/us/app/driven-for-comdata/id1623645120',
    },
    screenshots: [
      {
        id: 'comdata-1',
        title: 'Mastercard Balance & Security Controls',
        caption: 'Fleet card balance overview with one-tap instant card lock/unlock security toggle.',
        storeSource: 'Apple App Store',
        tag: 'Card Security',
        screenType: 'dashboard',
      },
      {
        id: 'comdata-2',
        title: 'Discount Station Radar & Map',
        caption: 'Real-time GPS station locator displaying live diesel discounts and route navigation.',
        storeSource: 'Google Play Store',
        tag: 'Geo-Radar',
        screenType: 'catalog',
      },
      {
        id: 'comdata-3',
        title: 'Expense Audit & Transaction Details',
        caption: 'Categorized fleet expense ledger with dispute filing and automated tax breakdown.',
        storeSource: 'Apple App Store',
        tag: 'Audit Logs',
        screenType: 'transaction',
      },
    ],
  },
  {
    id: 'signify-digi-shield',
    title: 'Signify DIGI Shield (PHILIPS Lighting)',
    subtitle: 'Enterprise Warranty Management & Multi-Tier Anti-Counterfeiting Program',
    client: 'Signify / PHILIPS Lighting',
    category: 'Warranty & IoT',
    stateManagement: 'BLoC',
    roleTitle: 'Senior Flutter Engineer',
    accentColor: '#0066FF',
    gradientFrom: 'from-blue-500/20',
    gradientTo: 'to-blue-950/40',
    phoneMockupType: 'signify',
    tags: ['PHILIPS Lighting', 'Signify', 'IoT & Warranty', 'Anti-Counterfeiting', 'RBAC', 'Play Store', 'App Store'],
    summary:
      'Engineered a comprehensive warranty verification and anti-counterfeiting mobile application for Philips lighting solutions, managing high-throughput product authentication across channel partners, stockists, retailers, and certified contractors.',
    challenge:
      'Enforcing strict multi-tier Role-Based Access Control (RBAC) across 4 distinct user personas with customized feature access and high-speed offline QR batch scanning in low-connectivity industrial sites.',
    solution:
      'Engineered a dynamic permission-driven Clean Architecture navigation engine paired with an optimized asynchronous camera hardware scanning pipeline and bi-directional Firestore cloud sync.',
    businessImpact:
      'Reduced fraudulent warranty claims by 65%, accelerated product verification speed to under 120ms per scan, and streamlined digital certificate issuance across thousands of commercial lighting installations.',
    keyFeatures: [
      'Tailored role flows for Channel Partners, Stockists, Retailers, and Contractors',
      'Ultra-fast batch QR & 2D DataMatrix scanning with instantaneous security verification',
      'Automated digital warranty certificate generation and claim tracking',
      'Push notification engine for warranty expiration warnings and claim status updates',
    ],
    architectureHighlights: [
      'Dynamic navigation router driven by verified JWT claims and role hierarchies',
      'Offline SQLite caching repository with automated cloud sync conflict resolution',
      'Comprehensive unit & widget test coverage safeguarding warranty calculation algorithms',
    ],
    hiringHighlights: [
      'End-to-end security architecture protecting multinational brand intellectual property',
      'Engineered for 100% offline functionality in low-signal warehouse and industrial environments',
      'Streamlined 4 disparate legacy mobile apps into a single unified Flutter codebase',
    ],
    metrics: [
      { label: 'Role Tiers', value: '4 Tiers', description: 'Partners, Stockists, Retailers, Contractors' },
      { label: 'Scan Latency', value: '<120ms', description: 'Instant camera QR parsing & verification' },
      { label: 'Claim Fraud', value: '-65%', description: 'Eliminated invalid warranty submissions' },
    ],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.signify.signify_warranty',
      appStore: 'https://apps.apple.com/app/digi-shield/id6480319068',
    },
    screenshots: [
      {
        id: 'signify-1',
        title: 'Multi-Role Persona Selection & Dashboard',
        caption: 'Role-based access gateway customizing dashboard widgets according to contractor tier.',
        storeSource: 'Google Play Store',
        tag: 'RBAC Gateway',
        screenType: 'dashboard',
      },
      {
        id: 'signify-2',
        title: 'High-Speed Batch QR Scanner',
        caption: 'Hardware-accelerated camera scanner validating genuine Philips security hashes in <120ms.',
        storeSource: 'Apple App Store',
        tag: 'QR Scanner',
        screenType: 'scanner',
      },
      {
        id: 'signify-3',
        title: 'Digital Warranty Certificate Issued',
        caption: 'Cryptographically verified warranty certificate with serial number tracking and renewal alerts.',
        storeSource: 'Google Play Store',
        tag: 'Warranty Cert',
        screenType: 'security',
      },
    ],
  },
  {
    id: 'al-retailer-club',
    title: 'AL Retailer Club (Ashok Leyland)',
    subtitle: 'Automotive Genuine Parts E-Commerce & Dealer Loyalty Engine',
    client: 'Ashok Leyland',
    category: 'Loyalty & Rewards',
    stateManagement: 'Riverpod',
    roleTitle: 'Flutter Developer',
    accentColor: '#E63946',
    gradientFrom: 'from-rose-500/20',
    gradientTo: 'to-rose-950/40',
    phoneMockupType: 'ashok',
    tags: ['Ashok Leyland', 'Automotive OEM', 'Genuine Parts Catalog', 'Loyalty Rewards', 'Riverpod', 'Play Store'],
    summary:
      'Architected and delivered the primary mobile commerce and loyalty portal for Ashok Leyland auto-parts dealers across India, enabling instant ordering of 10,000+ genuine OEM parts, loyalty tier upgrades, and dispatch tracking.',
    challenge:
      'A massive automotive parts catalog with thousands of SKU variants, exploded parts diagrams, and high-frequency price updates caused heavy lag on low-bandwidth rural networks.',
    solution:
      'Built a Riverpod-driven reactive state engine with localized Hive key-value caching, index-based search virtualization, and progressive image decoding.',
    businessImpact:
      'Achieved a 94% local cache hit rate, boosted dealer repeat order frequency by 38%, and processed millions in genuine parts purchases with zero server-side downtime.',
    keyFeatures: [
      'Comprehensive 10,000+ genuine parts catalog with 3D diagram previews and SKU search',
      'Automated loyalty points accumulation, tier milestones, and instant cashback redemption',
      'Live shipment tracking with milestone push notifications and dispatch updates',
      'Offline catalog browsing optimized for rural Indian distributor networks',
    ],
    architectureHighlights: [
      'Riverpod 2.0 with type-safe code-generated providers and automatic lifecycle disposal',
      'Virtualized custom scrollviews with persistent sliver headers for high-density lists',
      'Multi-level caching strategy combining in-memory, Hive disk, and REST pagination',
    ],
    hiringHighlights: [
      'Proven expertise handling large-scale catalog datasets with zero UI stutter',
      'Integrated end-to-end dealer loyalty rewards and order dispatch logistics',
      'Optimized network payloads saving over 70% mobile bandwidth for rural retailers',
    ],
    metrics: [
      { label: 'Catalog SKUs', value: '10,000+', description: 'Smooth virtualized scrolling' },
      { label: 'Cache Hit Rate', value: '94%', description: 'Instant offline parts search' },
      { label: 'Dealer Growth', value: '+38%', description: 'Increase in repeat genuine part orders' },
    ],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.al.retailerclub',
    },
    screenshots: [
      {
        id: 'ashok-1',
        title: 'Genuine OEM Parts Catalog & SKU Search',
        caption: '10,000+ searchable automotive parts with instant category filters and price breakdowns.',
        storeSource: 'Google Play Store',
        tag: 'Parts Catalog',
        screenType: 'catalog',
      },
      {
        id: 'ashok-2',
        title: 'Dealer Loyalty Rewards & Tier Club',
        caption: 'Loyalty points wallet tracking quarterly milestones and instant voucher redemptions.',
        storeSource: 'Google Play Store',
        tag: 'Rewards Tier',
        screenType: 'rewards',
      },
      {
        id: 'ashok-3',
        title: 'Instant Order & Dispatch Tracking',
        caption: 'Live logistics shipment tracker showing real-time warehouse dispatch milestones.',
        storeSource: 'Google Play Store',
        tag: 'Order Dispatch',
        screenType: 'transaction',
      },
    ],
  },
  {
    id: 'sky-rewards',
    title: 'SKY - Rewards, Benefits & Privileges',
    subtitle: 'Contractor & Member Loyalty Ecosystem with Gamified Rewards',
    client: 'JK Lakshmi Cement Group',
    category: 'Loyalty & Rewards',
    stateManagement: 'BLoC',
    roleTitle: 'Flutter Software Engineer',
    accentColor: '#8A2BE2',
    gradientFrom: 'from-purple-500/20',
    gradientTo: 'to-purple-950/40',
    phoneMockupType: 'sky',
    tags: ['JK Lakshmi Cement', 'Gamified Rewards', 'Barcode Scanning', 'Member Tiering', 'Play Store', 'App Store'],
    summary:
      'Designed and delivered the official SKY Loyalty ecosystem for JK Lakshmi Cement Group, managing contractor onboarding, cement bag token redemption, milestone tier rings, and automated reward gift dispatches.',
    challenge:
      'Delivering rich gamified reward animations and high-velocity bag token QR scans without frame stutter on entry-level Android devices in construction site environments.',
    solution:
      'Crafted lightweight hardware-accelerated CustomPainter visual elements and optimized reactive BLoC pipelines with instant token validation and deduplication.',
    businessImpact:
      'Engaged 50,000+ active contractors and dealers nationwide, processed over 1,000,000 reward points seamlessly, and drove a 24% surge in brand contractor retention.',
    keyFeatures: [
      'Instant cement bag barcode scanning for points accumulation and bonus reward unlock',
      'Dynamic Platinum tier milestone ring with visual progress benchmarks',
      'Full financial statement history with exportable PDF receipts and passbook view',
      'Multi-lingual localization engineered for regional builder and mason communities',
    ],
    architectureHighlights: [
      'Clean Architecture with MVVM presentation separation and immutable state models',
      'Hardware-accelerated CustomPainter render objects for 120 FPS reward celebrations',
      'Firebase Cloud Messaging (FCM) integration with deep-linked reward announcements',
    ],
    hiringHighlights: [
      'Successful dual-store release on Google Play Store and Apple App Store',
      'Over 50,000 active contractors onboarded with 99.8% crash-free session metrics',
      'Designed frictionless onboarding supporting multiple Indian regional languages',
    ],
    metrics: [
      { label: 'Active Users', value: '50k+', description: 'Contractors & Dealers across India' },
      { label: 'Points Handled', value: '1M+ Pts', description: 'Processed with zero downtime' },
      { label: 'Retention Lift', value: '+24%', description: 'Increase in contractor repeat engagement' },
    ],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.jklc.sky&hl=en',
      appStore: 'https://apps.apple.com/app/jklc-sky/id6466627454',
    },
    screenshots: [
      {
        id: 'sky-1',
        title: 'Platinum Member Dashboard & Tier Ring',
        caption: 'Gamified loyalty tier ring showing points accumulation and progress towards Diamond tier.',
        storeSource: 'Google Play Store',
        tag: 'Tier Ring',
        screenType: 'dashboard',
      },
      {
        id: 'sky-2',
        title: 'Instant Cement Bag QR Token Scanner',
        caption: 'High-speed camera scanner validating cement bag barcode tokens for immediate +500 PTS credits.',
        storeSource: 'Apple App Store',
        tag: 'Bag Scanner',
        screenType: 'scanner',
      },
      {
        id: 'sky-3',
        title: 'Gift Card & Privilege Redemption Store',
        caption: 'Interactive redemption catalog for appliances, gold coins, and instant bank transfers.',
        storeSource: 'Google Play Store',
        tag: 'Redemptions',
        screenType: 'rewards',
      },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer (Senior Flutter Specialist)',
    company: '3Frames Software Labs Pvt. Ltd.',
    period: 'August 2024 – Present',
    isCurrent: true,
    type: 'Full-time',
    achievements: [
      'Lead mobile application development for enterprise client products in an Agile Scrum environment, consistently hitting release milestones on time.',
      'Spearheaded feature-first Clean Architecture across the mobile squad, reducing developer onboarding time by 35% and improving unit test coverage.',
      'Collaborated directly with cross-functional Product Managers, UI/UX Designers, and Backend Leads to scope and ship high-impact features.',
      'Architected automated CI/CD release pipelines targeting Google Play Console and Apple App Store Connect, cutting manual deployment time by 80%.',
    ],
    techStack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'REST APIs', 'Firebase Suite', 'Codemagic', 'App Store Connect'],
  },
  {
    id: 'exp-2',
    role: 'Software Developer - E2',
    company: 'Vinove Software & Service Pvt. Ltd.',
    period: 'Oct 2023 – April 2024',
    type: 'Full-time',
    achievements: [
      'Delivered end-to-end cross-platform applications adhering to stringent enterprise client SLAs, code quality benchmarks, and security standards.',
      'Monitored project technical milestones and maintained continuous alignment with stakeholder expectations and production launch deadlines.',
      'Optimized memory usage, widget rebuild lifecycles, and network payload sizes, achieving sub-second screen transition speeds.',
      'Guided testing teams in creating comprehensive automated integration test suites.',
    ],
    techStack: ['Flutter', 'Dart', 'GetX', 'Riverpod', 'Google Play Console', 'App Store Publishing', 'Fastlane', 'Jira'],
  },
  {
    id: 'exp-3',
    role: 'Software Engineer',
    company: 'OnGraph Technologies',
    period: 'April 2021 – August 2023',
    type: 'Full-time',
    achievements: [
      'Led the core mobile engineering for multi-platform client projects from initial requirements gathering to production store publishing.',
      'Awarded Star Performer 2022 out of the entire engineering division for exceptional technical velocity, client satisfaction, and squad leadership.',
      'Mentored and onboarded junior developers, conducted rigorous peer code reviews, and championed SOLID principles across the organization.',
      'Promoted rapidly from Associate to Software Engineer within 12 months in recognition of high-impact deliverable completion.',
    ],
    techStack: ['Flutter', 'Dart', 'BLoC', 'Provider', 'Firebase Auth/Firestore', 'Unit & Widget Testing', 'CircleCI', 'Multi-Store Deployment'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile-core',
    name: 'Mobile Core & Architecture',
    iconName: 'Code2',
    description: 'Production-proven expertise in cross-platform systems & clean engineering',
    skills: [
      { name: 'Dart 3.x & Flutter 3.x', level: 98, highlight: 'Asynchronous Multithreading, CustomPainter, Platform Channels & Engine Internals', isPrimary: true },
      { name: 'Clean Architecture & SOLID', level: 96, highlight: 'Domain Interactors, Repository Pattern, Dependency Inversion', isPrimary: true },
      { name: 'Performance Optimization', level: 95, highlight: '+30% Speed Boost, 0 Frame Drops, Memory Leak Prevention', isPrimary: true },
      { name: 'Native iOS & Android Bridges', level: 85, highlight: 'Swift, Kotlin, MethodChannels & Platform Specific APIs' },
    ],
  },
  {
    id: 'state-management',
    name: 'State Management & Scalability',
    iconName: 'Boxes',
    description: 'Deterministic, testable, and reactive state management frameworks',
    skills: [
      { name: 'BLoC & Cubit Architecture', level: 96, highlight: 'Event-driven streams, Concurrency Transformers, HydratedBloc', isPrimary: true },
      { name: 'Riverpod 2.x & CodeGen', level: 92, highlight: 'Type-safe state providers, AutoDispose & Family providers', isPrimary: true },
      { name: 'GetX & Modular Micro-State', level: 90, highlight: 'Reactive controllers, dynamic bindings & lightweight routing' },
      { name: 'Provider & InheritedWidgets', level: 88, highlight: 'Scoped dependency propagation and tree management' },
    ],
  },
  {
    id: 'backend-cloud',
    name: 'Cloud Services & Telemetry',
    iconName: 'Flame',
    description: 'Real-time database sync, cloud telemetry, and high-availability backends',
    skills: [
      { name: 'Firebase Firestore & Cloud Storage', level: 95, highlight: 'Compound indexing, offline caching & rule security', isPrimary: true },
      { name: 'Firebase Authentication & Phone OTP', level: 96, highlight: 'Multi-factor authentication, Biometrics, Token Refresh', isPrimary: true },
      { name: 'Crashlytics & Real-Time Analytics', level: 95, highlight: '99.9% Crash-Free monitoring & custom telemetry events', isPrimary: true },
      { name: 'REST & GraphQL API Integration', level: 94, highlight: 'Dio interceptors, OAuth2 tokens, offline retry queues' },
    ],
  },
  {
    id: 'publishing-devops',
    name: 'Store Publishing & CI/CD',
    iconName: 'Rocket',
    description: 'Production release management across 6 major global app platforms',
    skills: [
      { name: 'Google Play Store Console', level: 96, highlight: 'AAB app bundles, staged rollouts, Play Integrity API', isPrimary: true },
      { name: 'Apple App Store Connect', level: 95, highlight: 'TestFlight betas, signing certs, provisioning & App Review', isPrimary: true },
      { name: 'OEM Global Stores (Samsung, Huawei, Amazon, MI)', level: 90, highlight: 'Multi-store manifest compliance & distribution', isPrimary: true },
      { name: 'CI/CD Automation (Fastlane, Codemagic, CircleCI)', level: 90, highlight: 'Automated test runners, build pipelines & signing' },
    ],
  },
  {
    id: 'leadership-quality',
    name: 'Leadership & Quality Assurance',
    iconName: 'ShieldCheck',
    description: 'Agile squad leadership, peer code reviews, and end-to-end verification',
    skills: [
      { name: 'Agile / Scrum Squad Collaboration', level: 94, highlight: 'Sprint planning, Jira workflows & cross-functional delivery', isPrimary: true },
      { name: 'Unit, Widget & Integration Testing', level: 92, highlight: 'Mockito, Mocktail, Golden Tests, TDD methodology', isPrimary: true },
      { name: 'Developer Mentoring & Code Reviews', level: 95, highlight: 'Star Performer 2022, established engineering best practices', isPrimary: true },
      { name: 'Open-Source & pub.dev Author', level: 88, highlight: 'Published packages and developer tooling contributions' },
    ],
  },
];

export const GLOBAL_STORES: StoreEcosystemItem[] = [
  {
    name: 'Google Play Store',
    storeName: 'Google Play Console',
    icon: 'Play',
    description: 'AAB bundle publishing, staged releases, Play Integrity, in-app reviews & telemetry',
    status: 'Live',
    metrics: '500k+ Cumulative Installs',
  },
  {
    name: 'Apple App Store',
    storeName: 'App Store Connect',
    icon: 'Apple',
    description: 'iOS guidelines compliance, TestFlight betas, privacy manifests, Universal Links',
    status: 'Live',
    metrics: 'Production Verified',
  },
  {
    name: 'Samsung Galaxy Store',
    storeName: 'Galaxy Apps Developer',
    icon: 'Smartphone',
    description: 'Samsung One UI optimization and Galaxy fleet device certification',
    status: 'Published',
    metrics: 'Global Samsung Reach',
  },
  {
    name: 'Amazon Appstore',
    storeName: 'Amazon Developer Console',
    icon: 'ShoppingBag',
    description: 'Amazon Fire OS & Amazon DSP enterprise fleet distribution',
    status: 'Verified',
    metrics: 'Amazon DSP Distribution',
  },
  {
    name: 'Huawei AppGallery',
    storeName: 'Huawei Developer',
    icon: 'Globe',
    description: 'HMS Core integration and global AppGallery publishing standards',
    status: 'Published',
    metrics: 'International Reach',
  },
  {
    name: 'Xiaomi GetApps (MI Store)',
    storeName: 'Xiaomi Developer Network',
    icon: 'Zap',
    description: 'MIUI ecosystem compliance and high-density store deployment',
    status: 'Published',
    metrics: 'Regional Footprint',
  },
];

export const EDUCATION_AWARDS = {
  award: {
    title: 'Star Performer 2022',
    company: 'OnGraph Technologies',
    year: '2022',
    description:
      'Awarded out of the entire engineering division for outstanding technical velocity, delivering mission-critical enterprise Flutter projects under tight deadlines, and exemplary mentoring of junior engineers.',
  },
  education: [
    {
      degree: 'BCA (Bachelors in Computer Application)',
      institution: 'Dr. B. R. Ambedkar University, Agra, India',
      status: 'Graduated',
    },
    {
      degree: 'Intermediate (12th Grade - Science & Mathematics)',
      institution: 'Uttar Pradesh Board, Prayagraj, India',
      status: 'Completed',
    },
    {
      degree: 'High School (10th Grade)',
      institution: 'Uttar Pradesh Board, Prayagraj, India',
      status: 'Completed',
    },
  ],
  certifications: [
    {
      name: 'Flutter Bootcamp',
      instructor: 'Angela Yu (The App Brewery)',
      focus: 'Comprehensive Flutter & Dart architecture, asynchronous streams, and native platform integration.',
    },
    {
      name: 'Flutter & Dart Complete Guide',
      instructor: 'Maximilian Schwarzmüller (Academind)',
      focus: 'Advanced state management (BLoC, Provider), performance tuning, custom render animations & responsive layouts.',
    },
  ],
};
