import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Fuel, 
  CreditCard, 
  QrCode, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Search, 
  ShoppingBag, 
  ChevronRight, 
  Smartphone,
  Flame,
  ScanLine,
  TrendingUp,
  ExternalLink,
  Star,
  Info
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
  const [isCardLocked, setIsCardLocked] = useState(false);
  const [authorizedFuel, setAuthorizedFuel] = useState(false);
  const [scannedQR, setScannedQR] = useState(false);
  const [ashokCartCount, setAshokCartCount] = useState(3);
  const [skyPoints, setSkyPoints] = useState(14500);
  const [selectedRole, setSelectedRole] = useState<'Partner' | 'Stockist' | 'Retailer' | 'Technician'>('Partner');

  const appConfigs = [
    { id: 'amazon', name: 'Amazon DSPs', client: 'Amazon / Corpay', color: '#FF9900', icon: Fuel, fullId: 'powered-by-amazon', badge: 'Play & App Store' },
    { id: 'comdata', name: 'Driven Comdata', client: 'Comdata Fleet', color: '#10B981', icon: CreditCard, fullId: 'driven-for-comdata', badge: '4.6 ★ Rated' },
    { id: 'signify', name: 'DIGI Shield', client: 'PHILIPS Lighting', color: '#3B82F6', icon: ShieldCheck, fullId: 'signify-digi-shield', badge: 'Enterprise RBAC' },
    { id: 'ashok', name: 'AL Retailer', client: 'Ashok Leyland', color: '#F43F5E', icon: ShoppingBag, fullId: 'al-retailer-club', badge: '10k+ SKUs' },
    { id: 'sky', name: 'SKY Rewards', client: 'JK Lakshmi', color: '#A855F7', icon: Award, fullId: 'sky-rewards', badge: '50k+ Users' },
  ];

  const handleAppChange = (appId: 'amazon' | 'comdata' | 'signify' | 'ashok' | 'sky') => {
    playSound('switch');
    setActiveApp(appId);
    const target = appConfigs.find(a => a.id === appId);
    if (target && onSelectProject) {
      onSelectProject(target.fullId);
    }
  };

  const handleAuthorizeFuel = () => {
    playSound('success');
    setAuthorizedFuel(true);
    setTimeout(() => setAuthorizedFuel(false), 3500);
  };

  const handleScanQR = () => {
    playSound('tap');
    setScannedQR(true);
    setTimeout(() => {
      playSound('success');
      setScannedQR(false);
    }, 2500);
  };

  const handleAddPart = () => {
    playSound('tap');
    setAshokCartCount(c => c + 1);
  };

  const handleRedeemPoints = () => {
    playSound('success');
    setSkyPoints(p => p + 500);
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
              onClick={() => handleAppChange(app.id as any)}
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
            Live App Demo
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-cyan-700 font-semibold">Production SLA 99.9%</span>
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
          <div className="pt-2.5 px-6 pb-1 flex items-center justify-between text-[10px] font-semibold text-slate-400 z-30">
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
            <div className="bg-cyan-500/15 border-b border-cyan-500/30 px-3 py-1 text-[9px] text-cyan-300 flex items-center justify-between z-30 font-medium">
              <span>Interactive Mobile Workflow</span>
              <span className="text-emerald-400 font-bold">Tested in Production</span>
            </div>
          )}

          {/* Active Screen Content with Animated Transitions */}
          <div className="relative flex-1 overflow-y-auto overflow-x-hidden p-3.5 text-xs scrollbar-none">
            <AnimatePresence mode="wait">
              {activeApp === 'amazon' && (
                <motion.div
                  key="amazon-screen"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-amber-400 font-bold tracking-wider uppercase">Amazon DSP Fleet</div>
                      <h4 className="text-sm font-bold text-white">Delivery Partner Hub</h4>
                    </div>
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded-full text-[10px] font-bold border border-amber-500/30">
                      Active Shift
                    </span>
                  </div>

                  {/* Virtual Corpay Fuel Card */}
                  <div className="relative p-3.5 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-900 shadow-lg text-white space-y-3 border border-amber-400/30 overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-sm" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-4 h-4 text-amber-200" />
                        <span className="text-[10px] font-bold tracking-wider">CORPAY FLEET PASS</span>
                      </div>
                      <span className="text-[10px] font-mono bg-black/30 px-1.5 py-0.5 rounded">DSP #4829</span>
                    </div>

                    <div>
                      <div className="text-[10px] text-amber-200/80">Available Fuel Quota</div>
                      <div className="text-xl font-extrabold tracking-tight font-mono">$450.00 <span className="text-[10px] text-amber-200 font-normal">/ 120 Gal</span></div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] text-amber-100 font-mono">
                      <span>VAN: AMZ-VAN-881</span>
                      <span>EXP: 08/28</span>
                    </div>
                  </div>

                  {/* Quick Action: Instant Fuel Authorization */}
                  <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-200">Fuel Pump Authorization</span>
                      <span className="text-[10px] text-cyan-400 font-mono">Pump #04</span>
                    </div>

                    <button
                      onClick={handleAuthorizeFuel}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        authorizedFuel
                          ? 'bg-emerald-500 text-white'
                          : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                      }`}
                    >
                      {authorizedFuel ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Card Authorized (Pump Ready)</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-3.5 h-3.5 fill-slate-950" />
                          <span>Authorize Fuel Pump Instant</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Real-time Metric Callout */}
                  <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <TrendingUp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Execution Speedup</div>
                        <div className="text-[11px] font-bold text-white">+30% Runtime Efficiency</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      99.9% SLA
                    </span>
                  </div>

                  {/* Recent Transactions */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Recent Route Fuel Logs</div>
                    {[
                      { station: 'Pilot Flying J #204', gallons: '24.5 Gal', cost: '$88.20', time: '10:14 AM' },
                      { station: 'Love\'s Travel Stop', gallons: '32.1 Gal', cost: '$115.56', time: 'Yesterday' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-800/50 text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <Fuel className="w-3 h-3 text-amber-400" />
                          <span className="font-medium text-slate-200">{item.station}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-slate-100 font-mono">{item.cost}</div>
                          <div className="text-[8px] text-slate-400">{item.gallons} • {item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeApp === 'comdata' && (
                <motion.div
                  key="comdata-screen"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-emerald-400 font-bold uppercase">Driven for Comdata</div>
                      <h4 className="text-sm font-bold text-white">Fleet Expense Hub</h4>
                    </div>
                    <button
                      onClick={() => {
                        playSound('tap');
                        setIsCardLocked(!isCardLocked);
                      }}
                      className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold transition-all cursor-pointer ${
                        isCardLocked 
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      }`}
                    >
                      {isCardLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                      <span>{isCardLocked ? 'Card Locked' : 'Card Active'}</span>
                    </button>
                  </div>

                  {/* Card Visual */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-950 shadow-lg text-white space-y-2 border border-emerald-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-emerald-200">COMDATA MASTERCARD</span>
                      <CreditCard className="w-4 h-4 text-emerald-200" />
                    </div>
                    <div>
                      <div className="text-[10px] text-emerald-200/80">Fleet Card Balance</div>
                      <div className="text-lg font-bold font-mono">$1,840.50</div>
                    </div>
                    <div className="flex items-center justify-between text-[9px] text-emerald-200 font-mono">
                      <span>•••• •••• •••• 9214</span>
                      <span>CVV •••</span>
                    </div>
                  </div>

                  {/* Discount Stations */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-semibold uppercase tracking-wider">Nearby Discount Fuel</span>
                      <span className="text-emerald-400 font-medium">Save up to 15¢/gal</span>
                    </div>
                    {[
                      { name: 'Speedway #188', dist: '0.8 mi', price: '$3.19/gal', saving: '-12¢ discount' },
                      { name: 'TA Travel Center', dist: '2.4 mi', price: '$3.24/gal', saving: '-10¢ discount' },
                      { name: 'Kwik Trip Fleet', dist: '4.1 mi', price: '$3.28/gal', saving: '-8¢ discount' },
                    ].map((st, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/60 text-[10px]">
                        <div>
                          <div className="font-semibold text-slate-100">{st.name}</div>
                          <div className="text-[8px] text-slate-400">{st.dist} away</div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono font-bold text-emerald-400">{st.price}</div>
                          <div className="text-[8px] text-emerald-300 font-medium">{st.saving}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeApp === 'signify' && (
                <motion.div
                  key="signify-screen"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-blue-400 font-bold uppercase">PHILIPS Lighting</div>
                      <h4 className="text-sm font-bold text-white">Signify DIGI Shield</h4>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>

                  {/* Multi-role Selector */}
                  <div className="space-y-1">
                    <div className="text-[9px] text-slate-400 font-medium">Enterprise RBAC User Tier:</div>
                    <div className="grid grid-cols-4 gap-1 p-1 bg-slate-900/90 rounded-lg border border-slate-800">
                      {(['Partner', 'Stockist', 'Retailer', 'Technician'] as const).map(role => (
                        <button
                          key={role}
                          onClick={() => {
                            playSound('tap');
                            setSelectedRole(role);
                          }}
                          className={`py-1 rounded text-[9px] font-medium transition-all cursor-pointer ${
                            selectedRole === role
                              ? 'bg-blue-600 text-white font-bold'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* QR Scan Simulation Card */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 shadow-lg text-white space-y-2.5 border border-blue-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-blue-200 font-semibold">WARRANTY VERIFICATION</span>
                      <QrCode className="w-4 h-4 text-blue-300" />
                    </div>

                    <div className="p-3 bg-black/40 rounded-xl border border-blue-400/20 text-center space-y-1.5">
                      <div className="flex justify-center">
                        <div className="relative p-2 bg-white/10 rounded-lg border border-dashed border-blue-400">
                          <ScanLine className={`w-8 h-8 text-blue-300 ${scannedQR ? 'animate-bounce text-emerald-400' : ''}`} />
                        </div>
                      </div>
                      <div className="text-[10px] font-medium text-slate-300">
                        {scannedQR ? 'Validating Philips Security Hash...' : 'Scan Product QR / Barcode'}
                      </div>
                    </div>

                    <button
                      onClick={handleScanQR}
                      className="w-full py-1.5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg text-[10px] flex items-center justify-center gap-1 cursor-pointer transition-all shadow-md shadow-blue-500/30"
                    >
                      <ScanLine className="w-3 h-3" />
                      <span>{scannedQR ? 'Authenticating Product...' : 'Simulate Camera QR Scan'}</span>
                    </button>
                  </div>

                  {/* Active Validated Warranty Status */}
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-100">Philips CoreLine LED Highbay</div>
                        <div className="text-[8px] text-slate-400 font-mono">SN: PH-99382-2026 • 5 Yr Warranty Active</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeApp === 'ashok' && (
                <motion.div
                  key="ashok-screen"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-rose-400 font-bold uppercase">Ashok Leyland</div>
                      <h4 className="text-sm font-bold text-white">AL Retailer Club</h4>
                    </div>
                    <div className="relative">
                      <ShoppingBag className="w-4 h-4 text-slate-300" />
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full text-[8px] font-bold flex items-center justify-center text-white">
                        {ashokCartCount}
                      </span>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900 rounded-xl border border-slate-800 text-[10px] text-slate-400">
                    <Search className="w-3 h-3 text-slate-400" />
                    <span>Search 10,000+ Genuine Parts...</span>
                  </div>

                  {/* Genuine Parts Item Cards */}
                  <div className="space-y-1.5">
                    {[
                      { name: 'Heavy Duty Brake Pad Set (Dost / Bada Dost)', sku: 'AL-BP-904', pts: '+120 Pts', price: '₹1,850' },
                      { name: 'OEM Fuel Injection Nozzle Kit', sku: 'AL-INJ-550', pts: '+350 Pts', price: '₹4,200' },
                      { name: 'Clutch Pressure Plate Assembly', sku: 'AL-CLP-302', pts: '+280 Pts', price: '₹3,450' },
                    ].map((item, i) => (
                      <div key={i} className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/70 flex items-center justify-between">
                        <div className="space-y-0.5 max-w-[170px]">
                          <div className="font-semibold text-slate-100 text-[10px] truncate">{item.name}</div>
                          <div className="text-[8px] text-slate-400 font-mono">{item.sku}</div>
                          <span className="inline-block text-[8px] font-bold text-rose-400 bg-rose-950/60 px-1 py-0.2 rounded">
                            {item.pts} Loyalty
                          </span>
                        </div>
                        <div className="text-right flex flex-col items-end gap-1">
                          <span className="font-bold font-mono text-slate-100 text-[10px]">{item.price}</span>
                          <button
                            onClick={handleAddPart}
                            className="px-2 py-0.5 bg-rose-600 hover:bg-rose-500 text-white rounded text-[9px] font-bold cursor-pointer transition-all"
                          >
                            + Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeApp === 'sky' && (
                <motion.div
                  key="sky-screen"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-purple-400 font-bold uppercase">JK Lakshmi Cement</div>
                      <h4 className="text-sm font-bold text-white">SKY Rewards Club</h4>
                    </div>
                    <Award className="w-4 h-4 text-purple-400" />
                  </div>

                  {/* Loyalty Points Card with Custom Ring Visual */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-900 to-slate-950 shadow-lg text-white space-y-2 border border-purple-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-purple-300 font-semibold tracking-wider">PLATINUM TIER MEMBER</span>
                      <span className="text-[9px] bg-purple-500/30 px-1.5 py-0.5 rounded text-purple-200 font-mono">ID: SKY-7710</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-purple-200/70">Total Reward Points</div>
                        <div className="text-xl font-extrabold font-mono text-white tracking-tight">{skyPoints.toLocaleString()} <span className="text-xs font-normal text-purple-300">PTS</span></div>
                      </div>
                      
                      {/* Interactive Progress Circle */}
                      <div className="relative w-11 h-11 rounded-full border-3 border-purple-400 flex items-center justify-center bg-purple-950">
                        <Sparkles className="w-4 h-4 text-purple-300" />
                      </div>
                    </div>

                    <div className="w-full bg-purple-950/80 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-full w-[78%]" />
                    </div>
                    <div className="flex justify-between text-[8px] text-purple-300/80">
                      <span>Tier Progress: 78%</span>
                      <span>Next: Diamond (20,000 Pts)</span>
                    </div>
                  </div>

                  {/* Scan Bag QR for Instant Points */}
                  <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-semibold text-slate-200">Scan Cement Bag Token</span>
                      <span className="text-[9px] text-purple-400 font-mono">+500 PTS / Bag</span>
                    </div>

                    <button
                      onClick={handleRedeemPoints}
                      className="w-full py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-lg text-[10px] flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-purple-600/30 transition-all"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Redeem Cement Coupon (+500 Pts)</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Simulated Mobile Bottom Navigation Bar */}
          <div className="bg-slate-950/90 border-t border-slate-800/80 px-4 py-2 flex items-center justify-around text-slate-400 z-30">
            <button className="flex flex-col items-center gap-0.5 text-cyan-400">
              <Smartphone className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Home</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 hover:text-slate-200">
              <Zap className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Activity</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 hover:text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="text-[8px] font-medium">Account</span>
            </button>
          </div>

          {/* Simulated Home Indicator Bar */}
          <div className="pb-1 pt-0.5 flex justify-center bg-slate-950">
            <div className="w-24 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
