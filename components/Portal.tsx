import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Zap, Shield, ArrowRight } from 'lucide-react';
import { useEconomy } from '../context/EconomyContext';

const motion = m as any;

type RitualPhase = 'intro' | 'ritual' | 'gateway';

interface PortalProps {
  lang: 'el' | 'en';
}

const Portal: React.FC<PortalProps> = ({ lang }) => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<RitualPhase>('intro');
  const [showLine2, setShowLine2] = useState(false);
  const { earnCredits } = useEconomy();

  useEffect(() => {
    const t1 = setTimeout(() => setShowLine2(true), 5000);
    const t2 = setTimeout(() => setPhase('ritual'), 10000);
    const t3 = setTimeout(() => setPhase('gateway'), 14000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const t = {
    el: {
      line1: 'ΔΕΝ ΑΓΟΡΑΣΕΣ ΕΝΑΝ ΗΡΩΑ.',
      line2: '...ΚΑΠΟΙΟΣ ΣΕ ΔΙΑΛΕΞΕ.',
      cardTitle: 'ΞΕΚΛΕΙΔΩΣΕΣ ΕΝΑΝ ΦΥΛΑΚΑ',
      cardQuote: '«Οι Φύλακες δεν ανήκουν σε κανέναν. Εμφανίζονται μόνο όταν κάποιος είναι έτοιμος να δημιουργήσει κάτι δικό του.»',
      credits: 'Χρησιμοποίησέ τα για να φτιάξεις κάτι που δεν υπήρχε.',
      btn: 'ΠΕΡΝΑ ΣΤΟ ΕΡΓΑΣΤΗΡΙΟ',
      footer: 'ΟΙ ΦΥΛΑΚΕΣ ΔΕΝ ΠΕΡΙΜΕΝΟΥΝ. ΔΗΜΙΟΥΡΓΟΥΝ.'
    },
    en: {
      line1: 'YOU DIDN\'T BUY A HERO.',
      line2: '...SOMEONE CHOSE YOU.',
      cardTitle: 'YOU UNLOCKED A GUARDIAN',
      cardQuote: '«Guardians belong to no one. They appear only when someone is ready to create something of their own.»',
      credits: 'Use them to create something that didn\'t exist.',
      btn: 'ENTER THE WORKSHOP',
      footer: 'GUARDIANS DON\'T WAIT. THEY CREATE.'
    }
  };

  const text = t[lang];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden font-['Nunito'] select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-black to-black" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl px-8 text-center">
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="space-y-12 md:space-y-16"
            >
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="text-slate-400 text-xl md:text-3xl font-thin italic tracking-[0.3em] uppercase"
              >
                {text.line1}
              </motion.p>
              
              <AnimatePresence>
                {showLine2 && (
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-[1000] text-amber-500 uppercase italic tracking-tighter drop-shadow-[0_0_60px_rgba(245,158,11,0.6)]"
                  >
                    {text.line2}
                  </motion.h2>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {(phase === 'ritual' || phase === 'gateway') && (
            <motion.div
              key="ritual"
              initial={{ opacity: 0, scale: 0.95, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="max-w-md mx-auto space-y-8 md:space-y-10"
            >
              <div className="glass-panel p-8 rounded-[3rem] border-2 border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] space-y-8 relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-3xl shadow-xl">
                   <Shield size={32} className="text-blue-400 animate-pulse" />
                </div>
                
                <div className="space-y-4 pt-6">
                  <h3 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
                    {text.cardTitle}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base font-bold italic leading-relaxed px-2">
                    {text.cardQuote}
                  </p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-center gap-4 bg-amber-500/10 border border-amber-500/30 px-6 py-4 rounded-[1.5rem] shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                    <Zap size={24} className="text-amber-500 fill-current" />
                    <span className="text-xl md:text-2xl font-[1000] text-amber-500 italic tracking-tighter">
                      10 Credits
                    </span>
                  </div>
                  <p className="text-white/30 text-xs font-bold italic tracking-wide">
                    {text.credits}
                  </p>
                </motion.div>
              </div>

              {phase === 'gateway' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="space-y-8"
                >
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="group relative px-10 py-6 bg-transparent border-2 border-white/20 rounded-full overflow-hidden transition-all hover:border-blue-500/50 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                  >
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 text-white font-[1000] text-xl uppercase tracking-[0.2em] italic flex items-center gap-4 px-2">
                      {text.btn}
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500 text-blue-400" />
                    </span>
                  </button>
                  
                  <p className="text-[10px] font-[1000] uppercase tracking-[0.6em] text-white/10 italic animate-pulse">
                    {text.footer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-10">
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
      </div>
    </div>
  );
};

export default Portal;
