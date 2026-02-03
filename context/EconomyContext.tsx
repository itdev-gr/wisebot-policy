
import React, { createContext, useContext, useState, useEffect } from 'react';

// --- TYPES ---
export interface Badges {
  thinker: boolean;   // Unlocked via Academy & Quizzes
  creator: boolean;   // Unlocked via Image Generation
  filmmaker: boolean; // Unlocked via Video Generation
  builder: boolean;   // Unlocked via Completing Hero
  market: boolean;    // Unlocked via Sharing/Selling
}

export interface EconomyStats {
  quizzesPassed: number;
  imagesCreated: number;
  videosCreated: number;
  heroesUploaded: number; // Used for "Sales" tracking
  lessonsRead: number;
  booksRead: number;
}

interface EconomyContextType {
  credits: number;
  badges: Badges;
  stats: EconomyStats;
  costs: {
    image: number;
    video: number;
  };
  spendCredits: (amount: number) => boolean;
  earnCredits: (amount: number) => void;
  trackAction: (action: 'PASS_QUIZ' | 'CREATE_IMAGE' | 'CREATE_VIDEO' | 'UPLOAD_HERO' | 'COMPLETE_HERO' | 'READ_ACADEMY' | 'READ_BOOK') => void;
}

const EconomyContext = createContext<EconomyContextType | undefined>(undefined);

// --- CONSTANTS ---
const INITIAL_CREDITS = 10;
const BASE_COST_IMAGE = 3;
const BASE_COST_VIDEO = 7;

export const EconomyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. STATE INITIALIZATION (Persisted)
  const [credits, setCredits] = useState<number>(() => {
    const saved = localStorage.getItem('wb_credits');
    return saved ? parseInt(saved) : INITIAL_CREDITS;
  });

  const [stats, setStats] = useState<EconomyStats>(() => {
    const saved = localStorage.getItem('wb_stats');
    return saved ? JSON.parse(saved) : { quizzesPassed: 0, imagesCreated: 0, videosCreated: 0, heroesUploaded: 0, lessonsRead: 0, booksRead: 0 };
  });

  const [badges, setBadges] = useState<Badges>(() => {
    const saved = localStorage.getItem('wb_badges');
    return saved ? JSON.parse(saved) : { thinker: false, creator: false, filmmaker: false, builder: false, market: false };
  });

  // 2. PERSISTENCE
  useEffect(() => { localStorage.setItem('wb_credits', credits.toString()); }, [credits]);
  useEffect(() => { localStorage.setItem('wb_stats', JSON.stringify(stats)); }, [stats]);
  useEffect(() => { localStorage.setItem('wb_badges', JSON.stringify(badges)); }, [badges]);

  // 3. DYNAMIC COSTS
  const costs = {
    image: badges.thinker ? BASE_COST_IMAGE - 1 : BASE_COST_IMAGE, 
    video: badges.filmmaker ? BASE_COST_VIDEO - 2 : BASE_COST_VIDEO, 
  };

  // 4. ACTIONS
  const spendCredits = (amount: number): boolean => {
    if (import.meta.env.DEV) {
      fetch('http://127.0.0.1:7260/ingest/dc0f8245-5936-4005-a5e6-afb53e400b09',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'EconomyContext.tsx:spendCredits',message:'spendCredits called',data:{amount,hypothesisId:'H3'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H3'})}).catch(()=>{});
    }
    if (credits >= amount) {
      setCredits(prev => prev - amount);
      return true;
    }
    return false;
  };

  const earnCredits = (amount: number) => {
    if (import.meta.env.DEV) {
      fetch('http://127.0.0.1:7260/ingest/dc0f8245-5936-4005-a5e6-afb53e400b09',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'EconomyContext.tsx:earnCredits',message:'earnCredits called',data:{amount,hypothesisId:'H3'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H3'})}).catch(()=>{});
    }
    setCredits(prev => prev + amount);
  };

  const trackAction = (action: 'PASS_QUIZ' | 'CREATE_IMAGE' | 'CREATE_VIDEO' | 'UPLOAD_HERO' | 'COMPLETE_HERO' | 'READ_ACADEMY' | 'READ_BOOK') => {
    if (import.meta.env.DEV) {
      fetch('http://127.0.0.1:7260/ingest/dc0f8245-5936-4005-a5e6-afb53e400b09',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'EconomyContext.tsx:trackAction',message:'trackAction called',data:{action,hypothesisId:'H3'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H3'})}).catch(()=>{});
    }
    setStats(prev => {
      const newStats = { ...prev };
      let newBadges = { ...badges };
      let badgeUnlocked = false;

      switch (action) {
        case 'PASS_QUIZ':
          newStats.quizzesPassed += 1;
          // RULE: Every 3 quizzes = 1 Credit
          if (newStats.quizzesPassed % 3 === 0) {
             earnCredits(1);
             alert("🎉 BRAVO! You completed a Quiz Set! +1 CREDIT!");
          }
          // RULE: 5 Quizzes = Thinker Badge (Knowledge)
          if (newStats.quizzesPassed >= 5 && !newBadges.thinker) {
            newBadges.thinker = true;
            badgeUnlocked = true;
            alert("🧠 THINKER BADGE UNLOCKED! (From Quizzes)");
          }
          break;

        case 'READ_BOOK':
          newStats.booksRead += 1;
          // RULE: 1 Book = 1 Credit
          earnCredits(1);
          alert("📚 BOOK COMPLETED! You earned +1 CREDIT!");
          break;

        case 'READ_ACADEMY':
          newStats.lessonsRead += 1;
          // RULE: Academy helps unlock Thinker Badge
          if (newStats.lessonsRead >= 5 && !newBadges.thinker) {
             newBadges.thinker = true;
             badgeUnlocked = true;
             alert("🧠 THINKER BADGE UNLOCKED! (From Academy)");
          }
          break;

        case 'CREATE_IMAGE':
          newStats.imagesCreated += 1;
          if (newStats.imagesCreated >= 5 && !newBadges.creator) {
            newBadges.creator = true;
            badgeUnlocked = true;
            alert("🎨 CREATOR BADGE UNLOCKED!");
          }
          break;

        case 'CREATE_VIDEO':
          newStats.videosCreated += 1;
          if (newStats.videosCreated >= 2 && !newBadges.filmmaker) {
            newBadges.filmmaker = true;
            badgeUnlocked = true;
            alert("🎬 FILMMAKER BADGE UNLOCKED!");
          }
          break;

        case 'COMPLETE_HERO':
          if (!newBadges.builder) {
            newBadges.builder = true;
            badgeUnlocked = true;
            alert("⚙️ BUILDER BADGE UNLOCKED!");
          }
          break;

        case 'UPLOAD_HERO':
          newStats.heroesUploaded += 1;
          // Unlocks "Trader" Badge (Market)
          if (!newBadges.market) {
            newBadges.market = true;
            badgeUnlocked = true;
            alert("🏪 TRADER BADGE UNLOCKED!");
          }
          break;
      }

      if (badgeUnlocked) setBadges(newBadges);
      return newStats;
    });
  };

  return (
    <EconomyContext.Provider value={{ credits, badges, stats, costs, spendCredits, earnCredits, trackAction }}>
      {children}
    </EconomyContext.Provider>
  );
};

export const useEconomy = () => {
  const context = useContext(EconomyContext);
  if (!context) throw new Error('useEconomy must be used within an EconomyProvider');
  return context;
};
