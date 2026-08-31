export type StateManagementType = 'BLoC' | 'Riverpod' | 'GetX' | 'Provider' | 'Clean Architecture';

export type ProjectCategory = 'Enterprise' | 'Logistics & Fuel' | 'Loyalty & Rewards' | 'Warranty & IoT';

export interface ProjectStoreLinks {
  playStore?: string;
  appStore?: string;
  huaweiStore?: string;
  samsungStore?: string;
  amazonStore?: string;
  demoUrl?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  caption: string;
  storeSource: 'Google Play Store' | 'Apple App Store' | 'Verified Production';
  tag: string;
  screenType: 'dashboard' | 'transaction' | 'scanner' | 'catalog' | 'rewards' | 'security';
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  period?: string;
  category: ProjectCategory;
  stateManagement: StateManagementType;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  businessImpact: string;
  keyFeatures: string[];
  metrics: ProjectMetric[];
  storeLinks: ProjectStoreLinks;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  phoneMockupType: 'amazon' | 'comdata' | 'signify' | 'ashok' | 'sky';
  screenshots: AppScreenshot[];
  roleTitle: string;
  architectureHighlights: string[];
  hiringHighlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  achievements: string[];
  techStack: string[];
  type: 'Full-time' | 'Contract' | 'Award';
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    highlight?: string;
    isPrimary?: boolean;
  }[];
}

export interface StoreEcosystemItem {
  name: string;
  storeName: string;
  icon: string;
  description: string;
  status: 'Verified' | 'Published' | 'Live';
  metrics: string;
}
