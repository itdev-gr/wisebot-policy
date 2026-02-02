
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  ArrowRight, 
  Wand2,
  Book,
  PlayCircle,
  Brain,
  Zap,
  Users,
  Clapperboard,
  Box,
  Sparkles,
  Lock,
  Palette,
  Film,
  Hammer,
  Store,
  Compass,
  GraduationCap,
  Rocket
} from 'lucide-react';
import { UI_TEXT } from '../constants'; 
import { useEconomy } from '../context/EconomyContext'; // Hook

interface DashboardProps {
  lang: 'el' | 'en';
  xp: number;
  level: number;
  completedIds: string[];
  myHeroes?: any[];
}

const Dashboard: React.FC<DashboardProps> = ({ lang, xp, level, completedIds, myHeroes = [] }) => {
  const navigate = useNavigate();
  const { credits, badges, stats } = useEconomy(); // Get Economy State

  // Unlock Logic
  const isEbooksUnlocked = true; 
  const isFactoryUnlocked = true; 
  const isCinemaUnlocked = true; 
  const is3DUnlocked = badges.builder; 
  const isFriendsUnlocked = true;

  const t = UI_TEXT[lang];

  // Helper for Module Card
  const ModuleCard = ({ 
    title, 
    subtitle, 
    rewardText, 
    icon: Icon, 
    color, 
    path, 
    locked = false,
    delay = 0
  }: any) => (
    <div 
      onClick={() => !locked && navigate(path)}
      className={`relative group cursor-pointer rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden flex flex-col h-full
        ${locked 
          ? 'border-white/5 bg-[#0a0b10] opacity-60 grayscale' 
          : `border-white/10 hover:border-${color}-500/50 bg-[#0f1014] hover:bg-[#15171e] hover:-translate-y-2 hover:shadow-2xl`
        }
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
        {/* Background Glow */}
        {!locked && <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />}
        
        <div className="p-8 flex-1 flex flex-col relative z-10">
            {/* Header Icon */}
            <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 border border-white/10
                    ${locked ? 'bg-white/5' : `bg-gradient-to-br from-${color}-500 to-${color}-700`}`}>
                    {locked ? <Lock size={28} /> : <Icon size={32} />}
                </div>
                {/* Reward Pill */}
                {!locked && (
                    <div className={`px-3 py-1.5 rounded-lg border border-${color}-500/30 bg-${color}-500/10 flex items-center gap-2`}>
                       <Zap size={12} className={`text-${color}-400 fill-current`} />
                       <span className={`text-[9px] font-black uppercase tracking-widest text-${color}-300`}>
                          {rewardText}
                       </span>
                    </div>
                )}
            </div>

            {/* Texts */}
            <div className="mt-auto space-y-2">
                <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {title}
                </h3>
                <p className="text-white/50 text-xs font-bold leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>

        {/* Bottom Action Strip */}
        <div className={`px-8 py-4 border-t border-white/5 flex items-center justify-between ${locked ? 'bg-black/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">
                {locked ? (lang === 'el' ? 'ΚΛΕΙΔΩΜΕΝΟ' : 'LOCKED') : (lang === 'el' ? 'ΕΚΚΙΝΗΣΗ' : 'START')}
            </span>
            {!locked && <ArrowRight size={16} className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />}
        </div>
    </div>
  );

  // Badge Component for Footer
  const BadgeItem = ({ icon: Icon, title, unlocked }: any) => (
    <div className={`flex flex-col items-center gap-2 transition-all ${unlocked ? 'opacity-100 scale-105' : 'opacity-30 grayscale'}`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${unlocked ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]' : 'bg-white/5 border-white/10 text-white'}`}>
            <Icon size={20} />
        </div>
        <span className="text-[8px] font-black uppercase tracking-widest text-center">{title}</span>
    </div>
  );

  return (
    <div className="pb-32 relative z-10 px-4 max-w-7xl mx-auto animate-in fade-in duration-700 space-y-12">
      
      {/* 🌟 1. WELCOME HEADER (Mission Control) */}
      <header className="pt-8 text-center space-y-4">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 mb-2">
            <Compass size={16} className="animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">WISEBOT ACADEMY HQ</span>
         </div>
         <h1 className="text-4xl md:text-6xl font-[1000] text-white italic tracking-tighter uppercase leading-none">
            {lang === 'el' ? 'ΤΙ ΘΑ ΜΑΘΟΥΜΕ' : 'WHAT WILL WE LEARN'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{lang === 'el' ? 'ΣΗΜΕΡΑ;' : 'TODAY?'}</span>
         </h1>
         <p className="text-white/50 font-bold text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'el' 
             ? 'Επίλεξε τη διαδρομή σου. Κάθε ενότητα σου δίνει δυνάμεις, γνώση και εργαλεία για να χτίσεις τον δικό σου κόσμο.' 
             : 'Choose your path. Each module gives you powers, knowledge, and tools to build your own world.'}
         </p>
      </header>

      {/* 🚀 2. MAIN MODULES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
         {/* A. LEARNING & READING */}
         <ModuleCard 
            title={t.dashboard.modules.academy.title}
            subtitle={lang === 'el' ? 'Διάβασε ιστορίες σπουδαίων ανθρώπων και πάρε μαθήματα ζωής.' : 'Read stories of great people and learn life lessons.'}
            rewardText={lang === 'el' ? 'ΚΕΡΔΙΣΕ ΓΝΩΣΗ & BADGES' : 'EARN KNOWLEDGE & BADGES'}
            icon={GraduationCap}
            color="blue"
            path="/academy"
            delay={100}
         />

         <ModuleCard 
            title={t.dashboard.modules.ebooks.title}
            subtitle={lang === 'el' ? 'Η Βιβλιοθήκη της Σοφίας. Κάθε βιβλίο σου δίνει ενέργεια.' : 'The Library of Wisdom. Every book gives you energy.'}
            rewardText={lang === 'el' ? '+1 CREDIT ΑΝΑ ΒΙΒΛΙΟ' : '+1 CREDIT PER BOOK'}
            icon={Book}
            color="indigo"
            path="/ebooks"
            locked={!isEbooksUnlocked}
            delay={200}
         />

         {/* B. TESTING & EARNING */}
         <ModuleCard 
            title={t.dashboard.modules.quiz.title}
            subtitle={lang === 'el' ? 'Απέδειξε τι έμαθες. Πέρνα τα τεστ για να ξεκλειδώσεις το Thinker Badge.' : 'Prove what you learned. Pass tests to unlock the Thinker Badge.'}
            rewardText={lang === 'el' ? 'ΞΕΚΛΕΙΔΩΣΕ BADGES' : 'UNLOCK BADGES'}
            icon={Brain}
            color="purple"
            path="/quiz"
            delay={300}
         />

         {/* C. CREATION & IMAGINATION */}
         <ModuleCard 
            title={t.dashboard.modules.factory.title}
            subtitle={lang === 'el' ? 'Φαντάσου τον ήρωά σου και δες τον να ζωντανεύει σε εικόνα.' : 'Imagine your hero and see them come to life as an image.'}
            rewardText={lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΚΟΤΗΤΑ' : 'CREATIVITY'}
            icon={Wand2}
            color="fuchsia"
            path="/factory"
            locked={!isFactoryUnlocked}
            delay={400}
         />

         {/* MARKET (New) */}
         <ModuleCard 
            title={t.steps.market.title}
            subtitle={lang === 'el' ? 'Πούλα τις δημιουργίες σου, αγόρασε από άλλους και μάθε πώς λειτουργεί η αγορά.' : 'Sell your creations, buy from others and learn how the market works.'}
            rewardText={lang === 'el' ? 'ΚΕΡΔΙΣΕ CREDITS' : 'EARN CREDITS'}
            icon={Store}
            color="amber"
            path="/market"
            delay={450}
         />

         <ModuleCard 
            title={t.steps.cinema.title}
            subtitle={lang === 'el' ? 'Κάνε τον ήρωά σου να μιλήσει και να κουνηθεί. Μαγεία!' : 'Make your hero speak and move. Magic!'}
            rewardText={lang === 'el' ? 'ΖΩΝΤΑΝΕΜΑ ΗΡΩΑ' : 'BRING HERO TO LIFE'}
            icon={Clapperboard}
            color="pink"
            path="/cinema"
            locked={!isCinemaUnlocked}
            delay={500}
         />

         {/* D. ADVANCED & COMMUNITY */}
         <ModuleCard 
            title={t.steps.factory3d.title}
            subtitle={lang === 'el' ? 'Μετάτρεψε τη ζωγραφιά σου σε αληθινό 3D μοντέλο.' : 'Turn your drawing into a real 3D model.'}
            rewardText={lang === 'el' ? '3D EXPORT (PRO)' : '3D EXPORT (PRO)'}
            icon={Box}
            color="emerald"
            path="/3d-factory"
            locked={!is3DUnlocked}
            delay={600}
         />

         <ModuleCard 
            title={t.dashboard.modules.friends.title}
            subtitle={lang === 'el' ? 'Γνώρισε την ομάδα WiseBot και τους δικούς σου ήρωες.' : 'Meet the WiseBot team and your own heroes.'}
            rewardText={lang === 'el' ? 'Η ΟΜΑΔΑ ΣΟΥ' : 'YOUR TEAM'}
            icon={Users}
            color="cyan"
            path="/wise-friends"
            locked={!isFriendsUnlocked}
            delay={700}
         />

      </div>

      {/* 💼 3. THE "WALLET" FOOTER (Stats & Badges) */}
      <div className="mt-20 border-t border-white/10 pt-12">
         <div className="glass-panel p-8 rounded-[3rem] bg-gradient-to-r from-slate-900 to-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            
            {/* Credits Display */}
            <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
                    <Zap size={40} className="text-amber-400 fill-current" />
                </div>
                <div>
                    <h4 className="text-white/40 font-black uppercase tracking-widest text-xs mb-1">
                        {lang === 'el' ? 'ΤΟ ΠΟΡΤΟΦΟΛΙ ΣΟΥ' : 'YOUR WALLET'}
                    </h4>
                    <div className="text-5xl font-[1000] text-white italic tracking-tighter">
                        {credits} <span className="text-lg not-italic font-bold text-white/50">Credits</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full md:w-px h-px md:h-20 bg-white/10"></div>

            {/* Badges Display */}
            <div className="flex-1 w-full md:w-auto">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-white/40 font-black uppercase tracking-widest text-xs">
                        {lang === 'el' ? 'ΤΑ ΠΑΡΑΣΗΜΑ ΣΟΥ' : 'YOUR BADGES'}
                    </h4>
                    <span className="text-xs font-bold text-white/30 bg-white/5 px-2 py-1 rounded">
                        Level {level}
                    </span>
                </div>
                <div className="flex justify-between gap-2">
                    <BadgeItem icon={Brain} title="Thinker" unlocked={badges.thinker} />
                    <BadgeItem icon={Palette} title="Creator" unlocked={badges.creator} />
                    <BadgeItem icon={Film} title="Director" unlocked={badges.filmmaker} />
                    <BadgeItem icon={Hammer} title="Builder" unlocked={badges.builder} />
                    <BadgeItem icon={Store} title="Trader" unlocked={badges.market} />
                </div>
            </div>

         </div>
         
         <div className="text-center mt-8">
             <p className="text-white/20 font-bold uppercase tracking-[0.3em] text-[10px]">
                 WISEBOT ACADEMY v2.4 • EST. 2024
             </p>
         </div>
      </div>

    </div>
  );
};

export default Dashboard;
