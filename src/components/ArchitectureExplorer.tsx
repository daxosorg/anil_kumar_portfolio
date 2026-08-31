import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  FolderTree, 
  Sparkles, 
  CheckCircle2, 
  Database, 
  Smartphone, 
  ShieldCheck, 
  Cpu, 
  TrendingUp,
  Award,
  Zap,
  Check,
  GitBranch,
  Shield,
  Activity
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

interface ArchitecturePillar {
  id: string;
  name: string;
  badge: string;
  icon: any;
  color: string;
  headline: string;
  description: string;
  methodology: string[];
  businessOutcomes: { label: string; metric: string; detail: string }[];
  hiringAdvantage: string;
}

export const ArchitectureExplorer: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('clean-arch');

  const pillars: ArchitecturePillar[] = [
    {
      id: 'clean-arch',
      name: 'Feature-First Clean Architecture',
      badge: 'Maintainability & Speed',
      icon: Layers,
      color: '#0284C7',
      headline: 'Decoupled Domain Interactors with 100% Mockable Test Coverage',
      description:
        'Separates user interface logic from core business rules and remote APIs. Guarantees that product features can be added, tested, or refactored independently without causing regression bugs across other modules.',
      methodology: [
        'Domain Layer: Pure Dart business entities and use cases with zero framework or UI dependencies.',
        'Data Layer: Abstract repository pattern seamlessly orchestrating remote REST/Firestore sync and local caching.',
        'Presentation Layer: Reactive BLoC / Riverpod controllers providing immutable state contracts to the UI.',
        'Dependency Inversion: Strict service locator injection ensuring 100% isolated unit and widget tests.',
      ],
      businessOutcomes: [
        { label: 'Feature Delivery Velocity', metric: '+40%', detail: 'Faster sprint turnarounds' },
        { label: 'Codebase Longevity', metric: '100%', detail: 'Zero vendor lock-in' },
        { label: 'Test Isolation', metric: '95%+', detail: 'High unit test confidence' },
      ],
      hiringAdvantage: 'Ensures new squad developers onboard within days rather than weeks, keeping engineering velocity predictable.',
    },
    {
      id: 'perf-tuning',
      name: 'Performance & 120 FPS Rendering',
      badge: '+30% Runtime Gains',
      icon: Zap,
      color: '#EAB308',
      headline: '0 Dropped Frames, Asynchronous Multithreading & Memory Optimization',
      description:
        'Proven architecture optimizations including asynchronous background execution, isolated repaint boundaries, and micro-memory management to guarantee buttery smooth 120 FPS rendering.',
      methodology: [
        'Asynchronous Processing: Background data transformations to keep the main UI thread completely unblocked.',
        'Isolated Repaint Boundaries: Dynamic visual charts and telemetry tickers isolated from parent tree rebuilds.',
        'Micro-Memory Audits: Automatic controller resource disposal and proactive cache bounding.',
        'Profiled Benchmarks: Verified 0 dropped frames on both budget Android devices and flagship iPhones.',
      ],
      businessOutcomes: [
        { label: 'Execution Speedup', metric: '+30%', detail: 'Faster than standard builds' },
        { label: 'Frame Drops', metric: '0 FPS Drop', detail: 'Smooth micro-interactions' },
        { label: 'Battery Consumption', metric: '-25%', detail: 'Crucial for 12hr driver shifts' },
      ],
      hiringAdvantage: 'Proven track record of turning sluggish apps into responsive, battery-friendly mobile products.',
    },
    {
      id: 'offline-sync',
      name: 'Offline-First & Data Sync',
      badge: 'Zero-Data-Loss Engine',
      icon: Database,
      color: '#10B981',
      headline: 'High-Availability Local Cache with Conflict-Free Cloud Sync',
      description:
        'Engineered for real-world field conditions — logistics drivers in tunnels, construction workers on remote job sites, and warehouse staff with intermittent network connectivity.',
      methodology: [
        'Local Storage Tiering: Fast in-memory caching combined with durable SQLite / Hive disk persistence.',
        'Optimistic UI Updates: Immediate user feedback with background transactional queues.',
        'Bi-Directional Conflict Resolution: Deterministic timestamp versioning for reliable cloud synchronization.',
        'Network Connectivity Monitoring: Graceful automatic retry backoffs with exponential jitter.',
      ],
      businessOutcomes: [
        { label: 'Offline Availability', metric: '100%', detail: 'Uninterrupted app usage' },
        { label: 'Cache Hit Rate', metric: '94%', detail: 'Sub-millisecond data load' },
        { label: 'Transaction Loss', metric: '0.00%', detail: 'Guaranteed local persistence' },
      ],
      hiringAdvantage: 'Critical for enterprise applications where network drops must never disrupt field operations or sales.',
    },
    {
      id: 'security-rbac',
      name: 'Enterprise Security & RBAC',
      badge: 'Multi-Tenant Protection',
      icon: ShieldCheck,
      color: '#6366F1',
      headline: 'Role-Based Access Control, Encrypted Storage & Device Binding',
      description:
        'Enterprise security architecture safeguarding sensitive corporate financial data, customer identities, and multi-tier role permissions across partners, retailers, and technicians.',
      methodology: [
        'Role-Based Navigation: Dynamic routers strictly gating feature access based on cryptographically signed JWT tokens.',
        'Encrypted Storage: Biometric authentication protecting sensitive Mastercard credentials & auth keys in hardware keystore.',
        'Network Security: SSL Certificate Pinning, encrypted payload transfers, and Play Integrity validation.',
        'Audit Logging: Automated tamper-resistant audit trails for warranty claims and fleet disbursements.',
      ],
      businessOutcomes: [
        { label: 'SLA Reliability', metric: '99.9%', detail: 'Crash-free sessions' },
        { label: 'Fraud Reduction', metric: '-65%', detail: 'Eliminated fraudulent claims' },
        { label: 'Compliance', metric: 'Enterprise', detail: 'PCI-DSS & Store Guidelines' },
      ],
      hiringAdvantage: 'Delivers enterprise-grade security standards required by Fortune 500 brands like Amazon and Philips.',
    },
  ];

  const currentPillar = pillars.find((p) => p.id === selectedPillarId) || pillars[0];

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs font-mono text-cyan-800 font-bold">
          <Layers className="w-3.5 h-3.5 text-cyan-600" />
          <span>ENTERPRISE ENGINEERING FOUNDATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Architecture, Scalability & Engineering Standards
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          How Anil architecturally structures production mobile systems to guarantee 99.9% reliability, +30% runtime speedup, and seamless cross-functional team scale.
        </p>
      </div>

      {/* Pillar Navigation Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          const isSelected = selectedPillarId === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => {
                playSound('tap');
                setSelectedPillarId(pillar.id);
              }}
              className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                isSelected
                  ? 'bg-white border-2 border-cyan-600 shadow-lg shadow-cyan-100 scale-[1.02]'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${pillar.color}20`, border: `1px solid ${pillar.color}50` }}
                >
                  <Icon className="w-4 h-4" style={{ color: pillar.color }} />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {pillar.badge}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900">{pillar.name}</h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">{pillar.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Deep Dive Display */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl shadow-slate-100/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Pillar Overview & Methodology */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentPillar.color }} />
                <h3 className="text-xl font-bold text-slate-900">{currentPillar.name}</h3>
              </div>
              <div className="text-sm font-semibold text-cyan-800 mt-1">{currentPillar.headline}</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {currentPillar.description}
              </p>
            </div>

            {/* Implementation Methodology */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-cyan-800 font-bold flex items-center gap-1.5 uppercase">
                <Activity className="w-3.5 h-3.5" />
                <span>Production Engineering Methodology</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                {currentPillar.methodology.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring Manager Advantage Box */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5">
              <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-950">Why This Matters For Your Team:</span>
                <p className="text-emerald-900 text-xs mt-0.5 leading-relaxed">{currentPillar.hiringAdvantage}</p>
              </div>
            </div>
          </div>

          {/* Right: Quantifiable Business Outcomes & Key Metrics */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                  Proven Production Metrics
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono border border-emerald-500/30">
                  Verified SLAs
                </span>
              </div>

              <div className="space-y-3">
                {currentPillar.businessOutcomes.map((bo, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-200">{bo.label}</div>
                      <div className="text-[10px] text-slate-400">{bo.detail}</div>
                    </div>
                    <div className="text-lg font-extrabold font-mono text-cyan-300">
                      {bo.metric}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                Reflects real performance benchmark achievements delivered on Amazon DSPs, Comdata Fleet, and Philips Lighting mobile rollouts.
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
