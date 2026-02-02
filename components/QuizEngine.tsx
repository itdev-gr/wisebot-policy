
import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw, Brain, Trophy, Star, AlertTriangle, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEconomy } from '../context/EconomyContext'; // Hook

interface QuizEngineProps {
  topic: string;
  questions: QuizQuestion[];
  onRestart: () => void;
  lang: 'el' | 'en';
}

const QUESTIONS_PER_LEVEL = 4;
const PASS_THRESHOLD = 3;

// Encouraging words for correct answers
const HYPE_WORDS = {
  el: ['ΜΠΡΑΒΟ!', 'ΤΕΛΕΙΑ!', 'ΣΥΝΕΧΙΣΕ!', 'ΕΙΣΑΙ ΑΣΤΕΡΙ!', 'ΔΥΝΑΜΗ!', 'ΣΩΣΤΟΣ!', 'ΘΡΥΛΟΣ!'],
  en: ['BRAVO!', 'AWESOME!', 'KEEP GOING!', 'YOU ARE A STAR!', 'POWER!', 'CORRECT!', 'LEGEND!']
};

const QuizEngine: React.FC<QuizEngineProps> = ({ topic, questions, onRestart, lang }) => {
  const { trackAction } = useEconomy(); // Economy
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [levelScore, setLevelScore] = useState(0); 
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showLevelReward, setShowLevelReward] = useState(false);
  const [showFailScreen, setShowFailScreen] = useState(false);
  const [hypeMessage, setHypeMessage] = useState<string | null>(null);

  const currentLevel = Math.floor(currentIdx / QUESTIONS_PER_LEVEL) + 1;
  const totalLevels = Math.ceil(questions.length / QUESTIONS_PER_LEVEL);
  const isLevelEnd = (currentIdx + 1) % QUESTIONS_PER_LEVEL === 0;

  useEffect(() => {
    if (isFinished && totalScore > 0) {
      // Track Action for Thinker Badge & Credits (handled in Context)
      trackAction('PASS_QUIZ');
    }
  }, [isFinished]);

  const currentQuestion = questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (showExplanation) return;
    setSelectedIdx(idx);
    setShowExplanation(true);
    
    if (idx === currentQuestion.correct) {
      setTotalScore(s => s + 1);
      setLevelScore(s => s + 1);
      // Trigger random hype message
      const words = HYPE_WORDS[lang];
      setHypeMessage(words[Math.floor(Math.random() * words.length)]);
    }
  };

  const handleNext = () => {
    setHypeMessage(null); // Clear hype
    if (isLevelEnd && !isFinished) {
        if (levelScore >= PASS_THRESHOLD) {
            setShowLevelReward(true);
        } else {
            setShowFailScreen(true);
        }
    } else {
       advanceQuestion();
    }
  };

  const advanceQuestion = () => {
    setShowLevelReward(false);
    setShowFailScreen(false);
    setHypeMessage(null);
    
    if (currentIdx + 1 < questions.length) {
      if (isLevelEnd) {
          setLevelScore(0);
      }
      setCurrentIdx(currentIdx + 1);
      setSelectedIdx(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const retryLevel = () => {
      const startOfLevelIdx = (currentLevel - 1) * QUESTIONS_PER_LEVEL;
      setCurrentIdx(startOfLevelIdx);
      setLevelScore(0);
      setSelectedIdx(null);
      setShowExplanation(false);
      setShowFailScreen(false);
      setHypeMessage(null);
  };

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto text-center py-12 glass-panel rounded-[3rem] shadow-2xl border border-white/10 p-8"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30 animate-bounce">
          <Trophy className="text-white" size={48} />
        </div>
        <h2 className="text-4xl font-[1000] text-white mb-2 uppercase italic tracking-tighter">
          {lang === 'el' ? 'Θρυλική Νίκη!' : 'Legendary Victory!'}
        </h2>
        <p className="text-white/60 mb-8 font-bold">
          {lang === 'el' ? `Ολοκλήρωσες το: ${topic}!` : `You completed: ${topic}!`}
        </p>
        
        <div className="text-7xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
          {totalScore} / {questions.length}
        </div>

        <div className="mb-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
          <p className="text-emerald-400 font-black uppercase tracking-widest italic text-sm flex flex-col items-center justify-center gap-2">
            <span className="flex items-center gap-2"><Zap size={20} fill="currentColor" /> QUIZ COMPLETED</span>
            <span className="text-white/60 text-xs">(Progression towards +1 Credit & Thinker Badge)</span>
          </p>
        </div>
        
        <button 
          onClick={onRestart}
          className="inline-flex items-center gap-2 magic-gradient text-white px-10 py-5 rounded-2xl font-[1000] hover:scale-105 transition-all shadow-xl uppercase tracking-widest italic text-sm"
        >
          <RefreshCcw size={20} />
          {lang === 'el' ? 'ΠΑΙΞΕ ΑΛΛΟ' : 'PLAY ANOTHER'}
        </button>
      </motion.div>
    );
  }

  if (showFailScreen) {
      return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto text-center py-16 px-8 glass-panel rounded-[3rem] border border-rose-500/30 bg-gradient-to-b from-slate-900 to-rose-900/20">
            <div className="mb-6 relative inline-block"><AlertTriangle size={80} className="text-rose-500 fill-rose-500/20 animate-pulse" /></div>
            <h2 className="text-4xl font-[1000] text-white mb-4 uppercase italic tracking-tighter">{lang === 'el' ? 'Μην τα παρατάς!' : 'Don\'t Give Up!'}</h2>
            <p className="text-rose-300 font-bold uppercase tracking-widest mb-2 text-sm">{lang === 'el' ? `Σκορ Επιπέδου: ${levelScore}/${QUESTIONS_PER_LEVEL}` : `Level Score: ${levelScore}/${QUESTIONS_PER_LEVEL}`}</p>
            <button onClick={retryLevel} className="w-full py-5 bg-white text-black rounded-2xl font-[1000] text-xl uppercase italic tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"><RefreshCcw size={24} /> {lang === 'el' ? 'ΠΡΟΣΠΑΘΗΣΕ ΞΑΝΑ' : 'TRY AGAIN'} </button>
        </motion.div>
      )
  }

  if (showLevelReward) {
      return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl mx-auto text-center py-16 px-8 glass-panel rounded-[3rem] border border-emerald-500/30 bg-gradient-to-b from-slate-900 to-emerald-900/20">
            <div className="mb-6 relative inline-block"><Star size={80} className="text-yellow-400 fill-yellow-400 animate-spin-slow" /><div className="absolute inset-0 blur-xl bg-yellow-400/30 rounded-full"></div></div>
            <h2 className="text-4xl font-[1000] text-white mb-4 uppercase italic tracking-tighter">{lang === 'el' ? `Επίπεδο ${currentLevel} Ολοκληρώθηκε!` : `Level ${currentLevel} Complete!`}</h2>
            <p className="text-emerald-300 font-bold uppercase tracking-widest mb-8 text-sm">{lang === 'el' ? 'Συνέχισε δυνατά!' : 'Keep going strong!'}</p>
            <div className="space-y-4">
                <button onClick={advanceQuestion} className="w-full py-5 bg-white text-black rounded-2xl font-[1000] text-xl uppercase italic tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3">{lang === 'el' ? 'ΠΑΜΕ ΕΠΟΜΕΝΟ LEVEL' : 'GO TO NEXT LEVEL'} <ArrowRight size={24} /></button>
            </div>
        </motion.div>
      )
  }

  return (
    <div className="max-w-3xl mx-auto relative">
      
      {/* HYPE OVERLAY */}
      <AnimatePresence>
        {hypeMessage && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.5, y: 0 }}
                animate={{ opacity: 1, scale: 1.5, y: -50 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
            >
                <div className="text-4xl md:text-6xl font-[1000] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] uppercase italic tracking-tighter rotate-[-5deg]">
                    {hypeMessage}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-8 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
             <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg text-[10px] font-black uppercase tracking-widest">LEVEL {currentLevel} / {totalLevels}</span>
             <span className="px-3 py-1 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-lg text-[10px] font-black uppercase tracking-widest">Q {currentIdx + 1}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter">{topic}</h2>
        </div>
        <div className="glass-panel px-6 py-2 rounded-xl font-black text-white italic border-white/20">{lang === 'el' ? 'ΣΚΟΡ' : 'SCORE'}: {totalScore}</div>
      </div>

      <div className="w-full bg-white/5 h-2 rounded-full mb-8 overflow-hidden relative">
         <motion.div initial={{ width: 0 }} animate={{ width: `${((currentIdx % QUESTIONS_PER_LEVEL) / QUESTIONS_PER_LEVEL) * 100}%` }} className="h-full bg-blue-500" />
      </div>

      <div className="glass-panel rounded-[2.5rem] shadow-2xl border border-white/10 p-8 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <p className="text-xl md:text-2xl text-white font-black italic mb-10 leading-snug relative z-10">{currentQuestion.q[lang]}</p>
        <div className="space-y-4 relative z-10">
          {currentQuestion.options[lang].map((option, idx) => {
            let borderClass = "border-white/10";
            let bgClass = "hover:bg-white/5";
            let textClass = "text-white/80";
            let icon = null;

            if (showExplanation) {
              if (idx === currentQuestion.correct) {
                borderClass = "border-emerald-500 ring-2 ring-emerald-500/20";
                bgClass = "bg-emerald-500/10";
                textClass = "text-emerald-400";
                icon = <CheckCircle2 className="text-emerald-500" size={24} />;
              } else if (idx === selectedIdx) {
                borderClass = "border-rose-500 ring-2 ring-rose-500/20";
                bgClass = "bg-rose-500/10";
                textClass = "text-rose-400";
                icon = <XCircle className="text-rose-500" size={24} />;
              } else {
                bgClass = "opacity-50";
              }
            } else if (selectedIdx === idx) {
                bgClass = "bg-white/10";
            }

            return (
              <button key={idx} onClick={() => handleSelect(idx)} disabled={showExplanation} className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${borderClass} ${bgClass} ${textClass}`}>
                <span className="font-bold text-lg">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 pt-8 border-t border-white/10">
            <div className={`p-6 rounded-2xl border mb-6 ${selectedIdx === currentQuestion.correct ? 'bg-emerald-900/20 border-emerald-500/20' : 'bg-rose-900/20 border-rose-500/20'}`}>
                <h4 className={`font-black mb-2 uppercase tracking-widest text-xs italic flex items-center gap-2 ${selectedIdx === currentQuestion.correct ? 'text-emerald-400' : 'text-rose-400'}`}><Brain size={14} /> WiseBot Explanation:</h4>
                <p className="text-white/90 leading-relaxed font-bold italic text-base">{currentQuestion.explanation ? currentQuestion.explanation[lang] : (lang === 'el' ? 'Καλή προσπάθεια!' : 'Good try!')}</p>
            </div>
            <button onClick={handleNext} className="w-full flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-[1000] hover:scale-[1.02] transition-all uppercase tracking-widest italic shadow-lg">
              {isLevelEnd ? (lang === 'el' ? 'ΕΛΕΓΧΟΣ ΕΠΙΠΕΔΟΥ...' : 'CHECKING LEVEL...') : (lang === 'el' ? 'ΕΠΟΜΕΝΗ ΕΡΩΤΗΣΗ' : 'NEXT QUESTION')} <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuizEngine;
