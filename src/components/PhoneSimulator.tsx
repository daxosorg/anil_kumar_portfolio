import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Fuel, 
  CreditCard, 
  ShieldCheck, 
  ShoppingBag, 
  Award, 
  ExternalLink,
  Info,
  Maximize2,
  CheckCircle2
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

interface PhoneSimulatorProps {
  initialAppId?: string;
  onSelectProject?: (appId: string) => void;
  className?: string;
}

export const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({
  initialAppId = 'powered-by-amazon',
  onSelectProject,
  className = '',
}) => {
  const [activeApp, setActiveApp] = useState<'amazon' | 'comdata' | 'signify' | 'ashok' | 'sky'>(
    initialAppId === 'driven-for-comdata' ? 'comdata' :
    initialAppId === 'signify-digi-shield' ? 'signify' :
    initialAppId === 'al-retailer-club' ? 'ashok' :
    initialAppId === 'sky-rewards' ? 'sky' : 'amazon'
  );

  const [showFeatureGuide, setShowFeatureGuide] = useState(true);

  const appConfigs = [
    { 
      id: 'amazon' as const, 
      name: 'Amazon DSPs', 
      client: 'Amazon / Corpay', 
      color: '#FF9900', 
      icon: Fuel, 
      fullId: 'powered-by-amazon', 
      badge: 'Play & App Store',
      screenshot: '/screenshots/amazon/screenshot_1.webp',
      title: 'Virtual Corpay Fuel Pass & Van Fleet Hub',
      caption: 'Official Amazon DSP fleet fuel management dashboard & Prime van authorization',
      featureNote: 'Google Play Store Verified • +30% Runtime Boost',
    },
    { 
      id: 'comdata' as const, 
      name: 'Driven Comdata', 
      client: 'Comdata Fleet', 
      color: '#10B981', 
      icon: CreditCard, 
      fullId: 'driven-for-comdata', 
      badge: '4.6 ★ Rated',
      screenshot: '/screenshots/comdata/screenshot_1.webp',
      title: 'Driven for Comdata Welcome Portal',
      caption: 'Live cardholder & fleet manager hub with truck stop discount locator',
      featureNote: 'Google Play Store Verified • 4.6 ★ Top Rated',
    },
    { 
      id: 'signify' as const, 
      name: 'DIGI Shield', 
      client: 'PHILIPS Lighting', 
      color: '#3B82F6', 
      icon: ShieldCheck, 
      fullId: 'signify-digi-shield', 
      badge: 'Enterprise RBAC',
      screenshot: '/screenshots/signify/screenshot_1.webp',
      title: 'Signify DIGI Shield Multi-Role Gateway',
      caption: 'Enterprise role-based warranty management for Philips & EcoLink partners',
      featureNote: 'Google Play Store Verified • Enterprise RBAC',
    },
    { 
      id: 'ashok' as const, 
      name: 'AL Retailer', 
      client: 'Ashok Leyland', 
      color: '#F43F5E', 
      icon: ShoppingBag, 
      fullId: 'al-retailer-club', 
      badge: '10k+ SKUs',
      screenshot: '/screenshots/ashok/screenshot_1.webp',
      title: 'AL Retailer Club Member Hub',
      caption: 'Platinum Tier dealer portal, parts catalog & rewards ledger',
      featureNote: 'Google Play Store Verified • 10,000+ SKUs',
    },
    { 
      id: 'sky' as const, 
      name: 'SKY Rewards', 
      client: 'JK Lakshmi', 
      color: '#A855F7', 
      icon: Award, 
      fullId: 'sky-rewards', 
      badge: '50k+ Users',
      screenshot: '/screenshots/sky/screenshot_1.webp',
      title: 'SKY - Climb to Success Portal',
      caption: 'JK Lakshmi Cement contractor rewards & bag coupon redemption',
      featureNote: 'Google Play Store Verified • 50,000+ Users',
    },
  ];

  const currentAppConfig = appConfigs.find(a => a.id === activeApp) || appConfigs[0];

  const handleAppChange = (appId: 'amazon' | 'comdata' | 'signify' | 'ashok' | 'sky') => {
    playSound('switch');
    setActiveApp(appId);
    const target = appConfigs.find(a => a.id === appId);
    if (target && onSelectProject) {
      onSelectProject(target.fullId);
    }
  };

  const handleOpenDeepDive = () => {
    playSound('click');
    if (onSelectProject) {
      onSelectProject(currentAppConfig.fullId);
    }
  };

  return (
    <div id="phone-simulator-container" className={`relative flex flex-col items-center ${className}`}>
      {/* App Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 mb-3 bg-white/95 backdrop-blur-md rounded-full border border-slate-200 shadow-md max-w-full overflow-x-auto">
        {appConfigs.map((app) => {
          const Icon = app.icon;
          const isActive = activeApp === app.id;
          return (
            <button
              key={app.id}
              id={`phone-tab-${app.id}`}
              onClick={() => handleAppChange(app.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <span 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: app.color }} 
              />
              <Icon className="w-3.5 h-3.5" style={{ color: isActive ? app.color : undefined }} />
              <span className="whitespace-nowrap font-medium">{app.name}</span>
            </button>
          );
        })}
      </div>

      {/* Simulator Control Bar */}
      <div className="flex items-center justify-between w-full max-w-[325px] px-3 py-1.5 mb-2 bg-white/90 rounded-xl border border-slate-200 text-[11px] text-slate-600 shadow-xs">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Original Play Store Asset
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-cyan-700 font-semibold">Verified Live</span>
        </div>

        <button
          id="toggle-feature-guide-btn"
          onClick={() => {
            playSound('switch');
            setShowFeatureGuide(!showFeatureGuide);
          }}
          className={`flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
            showFeatureGuide
              ? 'bg-cyan-100 text-cyan-800 border border-cyan-300'
              : 'bg-slate-100 text-slate-600 hover:text-slate-900'
          }`}
          title="Toggle Product Feature Highlights"
        >
          <Info className="w-3 h-3 text-cyan-600" />
          <span>Feature Guide {showFeatureGuide ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* Phone Hardware Mockup Frame */}
      <div className="relative w-[310px] sm:w-[325px] h-[640px] bg-slate-900 rounded-[44px] p-3 shadow-2xl shadow-cyan-950/40 border-4 border-slate-800 ring-1 ring-slate-700/50 select-none">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-40 flex items-center justify-between px-3">
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-950/80 border border-cyan-800" />
        </div>

        {/* Screen Container */}
        <div className="relative w-full h-full bg-[#0d121f] rounded-[36px] overflow-hidden flex flex-col font-sans text-white border border-slate-800/40">
          
          {/* Status Bar */}
          <div className="pt-2.5 px-6 pb-1 flex items-center justify-between text-[10px] font-semibold text-slate-400 z-30 bg-slate-950/80 backdrop-blur-xs">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-cyan-400 font-mono">5G</span>
              <div className="w-4 h-2 rounded-xs border border-slate-400 flex items-center p-0.5">
                <div className="w-full h-full bg-emerald-400 rounded-xs" />
              </div>
            </div>
          </div>

          {/* Feature Guide Banner (if active) */}
          {showFeatureGuide && (
            <div className="bg-cyan-950/90 border-b border-cyan-500/30 px-3 py-1.5 text-[9px] text-cyan-300 flex items-center justify-between z-30 font-medium backdrop-blur-xs">
              <span className="truncate max-w-[190px]">{currentAppConfig.featureNote}</span>
              <span className="text-emerald-400 font-bold flex items-center gap-0.5 shrink-0">
                <CheckCircle2 className="w-2.5 h-2.5" />
                Play Store
              </span>
            </div>
          )}

          {/* Original Play Store Screenshot Screen Area */}
          <div className="relative flex-1 overflow-hidden bg-slate-950 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAppConfig.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative w-full h-full flex flex-col group cursor-pointer"
                onClick={handleOpenDeepDive}
              >
                {/* Real High-Resolution Play Store Screenshot */}
                <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={currentAppConfig.screenshot}
                    alt={currentAppConfig.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-3 pt-6 space-y-1">
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-900/90 border"
                        style={{ color: currentAppConfig.color, borderColor: `${currentAppConfig.color}40` }}
                      >
                        {currentAppConfig.client}
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/90 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        {currentAppConfig.badge}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white line-clamp-1">
                      {currentAppConfig.title}
                    </div>
                    <p className="text-[10px] text-slate-300 line-clamp-1 leading-tight">
                      {currentAppConfig.caption}
                    </p>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center">
                    <div className="p-3 rounded-full bg-cyan-500 text-slate-950 shadow-xl shadow-cyan-500/40">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-white font-mono">
                      Explore Full Case Study & All Screenshots
                    </div>
                    <span className="text-[10px] text-cyan-300 bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      Click to Open Interactive Modal
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Simulated Mobile Bottom Action Bar */}
          <div className="bg-slate-950/95 border-t border-slate-800/80 px-3 py-2 flex items-center justify-between z-30">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentAppConfig.color }} />
              <span className="text-[9px] font-mono text-slate-400 truncate max-w-[130px]">{currentAppConfig.name}</span>
            </div>
            
            <button
              onClick={handleOpenDeepDive}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 text-[10px] font-bold font-mono flex items-center gap-1 cursor-pointer transition-all border border-slate-700"
            >
              <span>Case Study</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* Simulated Home Indicator Bar */}
          <div className="pb-1.5 pt-0.5 flex justify-center bg-slate-950">
            <div className="w-24 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
