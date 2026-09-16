import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  Layers, 
  Globe2, 
  Users, 
  Clock, 
  ArrowRight,
  Sparkles,
  Sliders,
  DollarSign
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const FlutterPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'speed' | 'sla' | 'stores' | 'velocity'>('speed');

  // Tab 1: Speed Optimization State
  const [isOptimized, setIsOptimized] = useState(true);

  // Tab 2: SLA & Scale Simulation State
  const [activeUsers, setActiveUsers] = useState(150000);

  // Tab 4: Squad Velocity ROI
  const [teamSize, setTeamSize] = useState(6);

  return (
    <section id="lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-3 mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs font-mono text-cyan-800 font-bold">
          <TrendingUp className="w-3.5 h-3.5 text-cyan-600" />
          <span>BUSINESS IMPACT & PERFORMANCE BENCHMARK LAB</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Measurable Engineering Results & Business ROI
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Interactive metrics proving tangible business outcomes: +30% runtime speedup, 99.9% crash-free SLA, cross-store global reach, and accelerated sprint velocity.
        </p>
      </div>

      {/* Lab Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 mb-8 bg-white rounded-full border border-slate-200/80 shadow-sm max-w-2xl mx-auto">
        {[
          { id: 'speed', name: '+30% Speed Boost', icon: Zap },
          { id: 'sla', name: '99.9% Production SLA', icon: ShieldCheck },
          { id: 'stores', name: '6 Global App Stores', icon: Globe2 },
          { id: 'velocity', name: 'Squad Velocity (+40%)', icon: Clock },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playSound('tap');
                setActiveTab(tab.id as any);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Benchmark Card */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl shadow-slate-100/80">
        
        {/* TAB 1: +30% Performance & Speed */}
        {activeTab === 'speed' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-cyan-800 font-bold uppercase tracking-wider">Runtime Speed Benchmark</span>
              <h3 className="text-2xl font-bold text-slate-900">+30% Faster Execution & 120 FPS</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Demonstrating the tangible impact of high-level asynchronous architecture, background data pipelines, and isolated rendering boundaries on user experience.
              </p>

              {/* Mode Toggle */}
              <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-full border border-slate-200 max-w-md">
                <button
                  onClick={() => {
                    playSound('switch');
                    setIsOptimized(false);
                  }}
                  className={`flex-1 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    !isOptimized
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Standard App Build
                </button>

                <button
                  onClick={() => {
                    playSound('success');
                    setIsOptimized(true);
                  }}
                  className={`flex-1 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isOptimized
                      ? 'bg-emerald-600 text-white shadow-sm font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Anil's Optimized Architecture
                </button>
              </div>

              {/* Key Business Takeaways */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-cyan-800">45s Saved Per Driver</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Faster pump turnaround for Amazon DSPs</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-emerald-800">-25% Battery Drain</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Crucial for 12-hour continuous field shifts</div>
                </div>
              </div>
            </div>

            {/* Gauge Display */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className={`w-5 h-5 ${isOptimized ? 'text-emerald-400' : 'text-rose-400'}`} />
                    <span className="text-sm font-bold text-white font-mono">Real-Time Performance Readout</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                    isOptimized ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-rose-950 text-rose-300 border border-rose-500/30'
                  }`}>
                    {isOptimized ? 'Locked 120 FPS' : 'UI Stutter Detected'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Frame Rate</div>
                    <div className={`text-xl font-mono font-extrabold ${isOptimized ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isOptimized ? '120 FPS' : '42 FPS'}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Frame Budget</div>
                    <div className={`text-xl font-mono font-extrabold ${isOptimized ? 'text-cyan-300' : 'text-amber-400'}`}>
                      {isOptimized ? '6.2 ms' : '23.8 ms'}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-400">UI Thread Jank</div>
                    <div className={`text-xl font-mono font-extrabold ${isOptimized ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isOptimized ? '0.0%' : '18.4%'}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span className="font-mono text-cyan-300 font-bold">Tested in Production</span>
                  <span className="text-slate-400">Low-end to Flagship Hardware</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 99.9% Production SLA */}
        {activeTab === 'sla' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">Enterprise Reliability</span>
              <h3 className="text-2xl font-bold text-slate-900">99.9% Crash-Free User Sessions</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rigorous error boundaries, defensive API deserialization, and cloud crash monitoring guarantee continuous uptime for critical operations like Amazon fleet logistics and Philips warranty verifications.
              </p>

              {/* Scale Slider */}
              <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Simulate Active User Base:</span>
                  <span className="text-emerald-600 font-mono">{activeUsers.toLocaleString()} Users</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="10000"
                  value={activeUsers}
                  onChange={(e) => setActiveUsers(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero downtime recorded across major Q4 holiday peak delivery spikes.</span>
              </div>
            </div>

            {/* SLA Telemetry Card */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-bold font-mono">Firebase Crashlytics SLA Readout</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-300 font-bold px-2 py-0.5 bg-emerald-950 rounded">
                    Verified
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Crash-Free Rate</div>
                    <div className="text-2xl font-mono font-extrabold text-emerald-400">99.94%</div>
                    <div className="text-[10px] text-slate-400 mt-1">Enterprise Standard</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Successful Sessions</div>
                    <div className="text-2xl font-mono font-extrabold text-cyan-300">
                      {Math.round(activeUsers * 0.9994).toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Flawless Executions</div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time telemetry configured with automatic alerting, crash grouping, and sub-minute issue triage.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 6 Global App Stores */}
        {activeTab === 'stores' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-cyan-800 font-bold uppercase tracking-wider">Global App Distribution</span>
              <h3 className="text-2xl font-bold text-slate-900">Multi-Store Deployment Mastery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Full-lifecycle publishing expertise across 6 major global app marketplaces, managing store compliance, review guidelines, and automated CI/CD releases.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
                <div className="font-bold text-slate-900">Publishing Capabilities:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Google Play Console (AAB bundles, Play Integrity)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Apple App Store Connect (TestFlight, Provisioning)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Samsung, Huawei, Amazon & Xiaomi distribution</span>
                </div>
              </div>
            </div>

            {/* Stores Visual Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Google Play', desc: 'AAB & Staged Rollouts', badge: 'Primary', color: '#10B981' },
                  { name: 'Apple App Store', desc: 'iOS & TestFlight', badge: 'Primary', color: '#3B82F6' },
                  { name: 'Samsung Galaxy', desc: 'Galaxy Ecosystem', badge: 'Verified', color: '#6366F1' },
                  { name: 'Amazon Appstore', desc: 'Fire OS & Android', badge: 'Verified', color: '#F59E0B' },
                  { name: 'Huawei AppGallery', desc: 'HMS Core Support', badge: 'Verified', color: '#EF4444' },
                  { name: 'Xiaomi GetApps', desc: 'MIUI Ecosystem', badge: 'Verified', color: '#EC4899' },
                ].map((store, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: store.color }} />
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                        {store.badge}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white">{store.name}</div>
                    <div className="text-[10px] text-slate-400">{store.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Squad Velocity ROI */}
        {activeTab === 'velocity' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-cyan-800 font-bold uppercase tracking-wider">Engineering Productivity</span>
              <h3 className="text-2xl font-bold text-slate-900">+40% Faster Sprint Delivery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Feature-First architecture and modular domain separation enable cross-functional squads to build, test, and ship mobile features without stepping on each other's code.
              </p>

              {/* Team Size Slider */}
              <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Mobile Squad Size:</span>
                  <span className="text-cyan-800 font-mono">{teamSize} Engineers</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </div>

              <div className="text-xs text-slate-600 space-y-1">
                <div className="font-bold text-slate-900">Key Organizational Wins:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Onboarding new engineers reduced from 3 weeks to 4 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                  <span>CI/CD automated build pipelines save 80% deployment overhead</span>
                </div>
              </div>
            </div>

            {/* Velocity Metrics Card */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-bold font-mono">Squad Velocity Multiplier</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 font-bold px-2 py-0.5 bg-cyan-950 rounded">
                    +40% Output
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Sprint Turnaround</div>
                    <div className="text-2xl font-mono font-extrabold text-cyan-300">2 Weeks</div>
                    <div className="text-[10px] text-slate-400 mt-1">Predictable Releases</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase">Hours Saved / Month</div>
                    <div className="text-2xl font-mono font-extrabold text-emerald-400">
                      {teamSize * 28} hrs
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">Via Clean Architecture</div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Proven Agile squad leadership recognized with the Star Performer Award for high velocity and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
};
