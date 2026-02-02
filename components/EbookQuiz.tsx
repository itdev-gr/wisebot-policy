
import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, RefreshCcw, BookOpen } from 'lucide-react';
import { QuizQuestion } from '../data/booksData';

interface EbookQuizProps {
  questions: QuizQuestion[];
  lang: 'el' | 'en';
  onComplete: (score: number, total: number) => void;
  onRetry: () => void;
  onNextBook: () => void;
  hasNextBook: boolean;
}

export const EbookQuiz: React.FC<EbookQuizProps> = ({ 
  questions, 
  lang, 
  onComplete, 
  onRetry, 
  onNextBook,
  hasNextBook 
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswerChecked) return;
    
    setSelectedOption(index);
    setIsAnswerChecked(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setIsFinished(true);
      // Ensure onComplete is called with final score
      onComplete(score + (selectedOption === questions[currentQuestion].correct ? 0 : 0), questions.length);
    }
  };

  if (isFinished) {
    const passed = score === questions.length; // Strict: require perfect score for credit
    
    return (
      <div className="h-full flex flex-col justify-center items-center max-w-2xl mx-auto animate-in fade-in space-y-8 text-center">
        <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto shadow-2xl ${passed ? 'bg-emerald-500' : 'bg-orange-500'}`}>
           {passed ? <CheckCircle size={64} className="text-white" /> : <RefreshCcw size={64} className="text-white" />}
        </div>
        
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter">
            {passed ? (lang === 'el' ? 'ΜΠΡΑΒΟ!' : 'WELL DONE!') : (lang === 'el' ? 'ΠΡΟΣΠΑΘΗΣΕ ΞΑΝΑ' : 'TRY AGAIN')}
          </h2>
          <p className="text-xl text-white/60 font-bold">
            {lang === 'el' ? `Σκορ: ${score}/${questions.length}` : `Score: ${score}/${questions.length}`}
          </p>
        </div>

        <div className="flex flex-col w-full gap-4 max-w-sm">
          {passed ? (
            <>
              {hasNextBook ? (
                <button 
                  onClick={onNextBook}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-[1000] text-white text-xl uppercase italic tracking-widest shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  {lang === 'el' ? 'ΕΠΟΜΕΝΟ ΒΙΒΛΙΟ' : 'NEXT BOOK'} <ArrowRight size={24} />
                </button>
              ) : (
                <div className="p-4 bg-white/10 rounded-xl text-white font-bold">
                  {lang === 'el' ? 'Ολοκλήρωσες όλα τα βιβλία!' : 'You finished all books!'}
                </div>
              )}
              
              <button 
                onClick={onRetry}
                className="w-full py-4 bg-white/5 border border-white/10 text-white/70 hover:text-white font-bold uppercase tracking-widest rounded-xl transition-all"
              >
                {lang === 'el' ? 'ΔΙΑΒΑΣΕ ΞΑΝΑ' : 'READ AGAIN'}
              </button>
            </>
          ) : (
            <button 
              onClick={onRetry}
              className="w-full py-5 bg-white text-black rounded-2xl font-[1000] text-xl uppercase italic tracking-widest shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <RefreshCcw size={24} />
              {lang === 'el' ? 'ΔΙΑΒΑΣΕ ΤΗΝ ΙΣΤΟΡΙΑ' : 'READ THE STORY'}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-center max-w-2xl mx-auto animate-in fade-in slide-in-from-right-4 p-4">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-2">
           <div className="flex justify-between items-center">
             <span className="text-blue-400 font-black text-xs uppercase tracking-widest">
               {lang === 'el' ? 'ΕΡΩΤΗΣΗ' : 'QUESTION'} {currentQuestion + 1} / {questions.length}
             </span>
             <span className="text-white/40 font-bold text-xs">Score: {score}</span>
           </div>
           <h2 className="text-2xl md:text-3xl font-[1000] text-white uppercase italic tracking-tighter leading-tight">
              {questions[currentQuestion].q[lang]}
           </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
           {questions[currentQuestion].options[lang].map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === questions[currentQuestion].correct;
              
              let btnStyle = "bg-white/5 border-2 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20";
              let icon = null;

              if (isAnswerChecked) {
                 if (isCorrect) {
                    btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]";
                    icon = <CheckCircle size={20} className="text-emerald-400" />;
                 } else if (isSelected) {
                    btnStyle = "bg-red-500/20 border-red-500 text-red-300";
                    icon = <XCircle size={20} className="text-red-400" />;
                 } else {
                    btnStyle = "opacity-40 border-transparent";
                 }
              }

              return (
                 <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isAnswerChecked}
                    className={`w-full text-left p-5 rounded-2xl font-bold italic transition-all flex items-center justify-between group ${btnStyle}`}
                 >
                    <span className="group-hover:translate-x-1 transition-transform">{opt}</span>
                    {icon}
                 </button>
              )
           })}
        </div>

        {/* Feedback / Next Button */}
        <div className="h-20 flex items-center justify-center">
          {isAnswerChecked && (
             <div className="w-full animate-in fade-in slide-in-from-bottom-2">
                <div className={`mb-4 text-center font-black uppercase tracking-widest text-sm ${
                   selectedOption === questions[currentQuestion].correct ? 'text-emerald-400' : 'text-red-400'
                }`}>
                   {selectedOption === questions[currentQuestion].correct 
                      ? (lang === 'el' ? 'ΣΩΣΤΗ ΑΠΑΝΤΗΣΗ!' : 'CORRECT ANSWER!') 
                      : (lang === 'el' ? 'ΛΑΘΟΣ...' : 'WRONG...')}
                </div>
                <button 
                  onClick={handleNext} 
                  className="w-full py-4 bg-white text-black font-[1000] uppercase italic tracking-widest rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                   {lang === 'el' ? 'ΣΥΝΕΧΕΙΑ' : 'CONTINUE'} <ArrowRight size={20} />
                </button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
