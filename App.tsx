import React, { useState, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { EconomyProvider, useEconomy } from './context/EconomyContext';

// Lazy Layout – μειώνει το αρχικό bundle (Layout + framer-motion + πολλά icons φορτώνονται μετά)
const Layout = lazy(() => import('./components/Layout'));

// Lazy pages – φορτώνονται μόνο όταν ο χρήστης μπαίνει στη σελίδα (γρηγορότερο άνοιγμα στο κινητό)
const Quiz = lazy(() => import('./components/Quiz'));
const HeroFactory = lazy(() => import('./components/HeroFactory'));
const Academy = lazy(() => import('./components/Academy'));
const Ebooks = lazy(() => import('./components/Ebooks'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const Account = lazy(() => import('./components/Account'));
const WiseFriends = lazy(() => import('./components/WiseFriends'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const Cinema = lazy(() => import('./components/Cinema'));
const ThreeDFactory = lazy(() => import('./components/ThreeDFactory'));
const HeroMarket = lazy(() => import('./components/HeroMarket'));
const LegalHub = lazy(() => import('./components/LegalHub'));
const Portal = lazy(() => import('./components/Portal'));

const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
    <div className="w-10 h-10 border-2 border-blue-500/50 border-t-blue-400 rounded-full animate-spin" />
  </div>
);

const LayoutFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0f172a]" aria-hidden="true">
    <div className="w-10 h-10 border-2 border-blue-500/50 border-t-blue-400 rounded-full animate-spin" />
  </div>
);

// --- MAIN APP COMPONENT ---
function AppContent() {
  const [lang, setLang] = useState<'el' | 'en'>('el');
  const [xp, setXp] = useState(1250);
  const [level, setLevel] = useState(7);
  
  // Stats and Economy used to be here, now in Context
  const { earnCredits } = useEconomy();

  const [myHeroes, setMyHeroes] = useState<any[]>([]);
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  const addXp = (amount: number, id: string, creditReward: number = 0) => {
    if (completedIds.includes(id)) return;

    setXp(prev => {
      const newXp = prev + amount;
      const nextLevelXp = level * 500;
      
      if (newXp >= nextLevelXp) {
        setLevel(l => l + 1);
        earnCredits(5); // Level up reward
        alert(lang === 'el' ? `🎉 LEVEL UP! Τώρα είσαι Επίπεδο ${level + 1}! Κέρδισες 5 Credits!` : `🎉 LEVEL UP! You are now Level ${level + 1}! You earned 5 Credits!`);
      }
      return newXp;
    });

    if (creditReward > 0) {
      earnCredits(creditReward);
    }

    setCompletedIds(prev => [...prev, id]);
  };

  const addHero = (hero: any) => {
    setMyHeroes(prev => [...prev, hero]);
  };

  const updateHero = (updatedHero: any) => {
    setMyHeroes(prev => prev.map(h => h.id === updatedHero.id ? updatedHero : h));
  };

  return (
    <HashRouter>
      <Suspense fallback={<LayoutFallback />}>
        <Layout lang={lang} setLang={setLang} xp={xp} level={level} completedIds={completedIds} myHeroes={myHeroes}>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
            <Route path="/" element={<LandingPage lang={lang} />} />
            <Route path="/portal" element={<Portal lang={lang} />} />
            <Route path="/dashboard" element={<Dashboard lang={lang} xp={xp} level={level} completedIds={completedIds} myHeroes={myHeroes} />} />
            <Route path="/factory" element={<HeroFactory lang={lang} addHero={addHero} />} />
            <Route path="/3d-factory" element={<ThreeDFactory lang={lang} />} />
            <Route path="/market" element={<HeroMarket lang={lang} myHeroes={myHeroes} />} /> 
            <Route path="/wise-friends" element={<WiseFriends lang={lang} myHeroes={myHeroes} updateHero={updateHero} completedIds={completedIds} />} />
            <Route path="/academy" element={<Academy lang={lang} addXp={addXp} completedIds={completedIds} />} />
            <Route path="/cinema" element={<Cinema lang={lang} myHeroes={myHeroes} />} />
            <Route path="/ebooks" element={<Ebooks lang={lang} addXp={addXp} completedIds={completedIds} xp={xp} level={level} />} />
            <Route path="/quiz" element={<Quiz lang={lang} />} />
            <Route path="/admin" element={<AdminDashboard lang={lang} />} />
            <Route path="/account" element={<Account lang={lang} onClaimBonus={() => { earnCredits(1); return true; }} lastClaimDate={new Date().toDateString()} />} />
            <Route path="/legal" element={<LegalHub lang={lang} />} />
            </Routes>
          </Suspense>
        </Layout>
      </Suspense>
    </HashRouter>
  );
}

// Wrap with Provider
export default function App() {
  return (
    <EconomyProvider>
      <AppContent />
    </EconomyProvider>
  );
}
