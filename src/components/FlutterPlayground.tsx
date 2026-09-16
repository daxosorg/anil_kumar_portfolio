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
    <section id="lab" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="space-y-3 mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-cyan-500/20 text-xs font-mono text-cyan-400 font-bold">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>PERFORMANCE BENCHMARK LAB</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Measurable Engineering <span className="text-shimmer">Results &amp; ROI</span>
        </h2>
        
      </div>

      {/* Lab Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 mb-8 glass-card rounded-full border border-white/[0.08] max-w-2xl mx-auto">
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
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>


      {/* Main Interactive Benchmark Card */}
      <div className="rounded-3xl glass-card border border-white/[0.08] p-6 sm:p-8">

        
        {/* TAB 1: +30% Performance & Speed */}
        {activeTab === 'speed' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-cyan-800 font-bold uppercase tracking-wider">Runtime Speed Benchmark</span>
              <h3 className="text-2xl font-bold text-slate-900">+30% Faster Execution & 120 FPS</h3>

              {/* Mode Toggle */}
              <div className="flex items-center gap-2 p-1.5 bg-white/[0.05] border border-white/10 rounded-full max-w-md">

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
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
                  <div className="font-bold text-cyan-400">45s Saved Per Driver</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Faster pump turnaround for Amazon DSPs</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
                  <div className="font-bold text-emerald-400">-25% Battery Drain</div>
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
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Enterprise Reliability</span>
              <h3 className="text-2xl font-bold text-white">99.9% Crash-Free User Sessions</h3>
              <p className="text-sm text-slate-400 leading-relaxed">

                Rigorous error boundaries, defensive API deserialization, and cloud crash monitoring guarantee continuous uptime for critical operations like Amazon fleet logistics and Philips warranty verifications.
              </p>

              {/* Scale Slider */}
              <div className="space-y-2 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
                <div className="flex justify-between text-xs font-bold text-slate-300">

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
                <span>Zero downtime across Q4 peak delivery spikes.</span>
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

              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 6 Global App Stores */}
        {activeTab === 'stores' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Global App Distribution</span>
              <h3 className="text-2xl font-bold text-white">Multi-Store Deployment Mastery</h3>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07] text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /><span>Google Play Console (AAB bundles, Play Integrity)</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /><span>Apple App Store Connect (TestFlight, Provisioning)</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" /><span>Samsung, Huawei, Amazon &amp; Xiaomi</span></div>
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
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Engineering Productivity</span>
              <h3 className="text-2xl font-bold text-white">+40% Faster Sprint Delivery</h3>

              {/* Team Size Slider */}
              <div className="space-y-2 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
                <div className="flex justify-between text-xs font-bold text-slate-300">

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

              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" /><span>Onboarding: 3 weeks → 4 days</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" /><span>CI/CD saves 80% deployment overhead</span></div>
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

              </div>
            </div>
          </div>
        )}

      </div>
      </div>
    </section>
  );
};
