
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
  Book as BookIcon, 
  Lock, 
  CheckCircle, 
  Zap, 
  ArrowRight,
  Footprints,
  X
} from 'lucide-react';
import { BOOKS_PART_1 } from '../data/booksData';
import { BOOKS_PART_2 } from '../data/booksDataPart2';
import { BOOKS_PART_3 } from '../data/booksDataPart3';
import { BOOK_QUIZZES } from '../data/bookQuizData'; 
import { EbookQuiz } from './EbookQuiz';
import { useEconomy } from '../context/EconomyContext'; // Hook

const motion = m as any;

const BOOKS = [...BOOKS_PART_1, ...BOOKS_PART_2, ...BOOKS_PART_3];

interface EbooksProps {
  lang: 'el' | 'en';
  addXp?: (amount: number, id: string, creditReward?: number) => void;
  completedIds: string[];
  xp?: number;
  level?: number;
}

export const Ebooks: React.FC<EbooksProps> = ({ lang, addXp, completedIds }) => {
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const { trackAction } = useEconomy();

  const activeBook = BOOKS.find(b => b.id === selectedBookId);
  const activeBookIndex = BOOKS.findIndex(b => b.id === selectedBookId);
  const hasNextBook = activeBookIndex !== -1 && activeBookIndex < BOOKS.length - 1;

  const isBookLocked = (bookId: number) => {
    return false; // Always return false for testing
  };

  const openBook = (id: number) => {
    if (isBookLocked(id)) return;
    setSelectedBookId(id);
    setShowQuiz(false);
  };

  const handleQuizComplete = (score: number, total: number) => {
    if (activeBook && score === total) {
      // 1. Economy Track (Credits & Badges)
      trackAction('READ_BOOK');
      
      // 2. Mark as Completed in App State (Shows Green Checkmark)
      if (addXp) {
        addXp(0, `ebook-${activeBook.id}`);
      }
    }
  };

  const handleNextBook = () => {
    if (hasNextBook) {
      setSelectedBookId(BOOKS[activeBookIndex + 1].id);
      setShowQuiz(false);
    } else {
      setSelectedBookId(null);
    }
  };

  const handleRetryStory = () => {
    setShowQuiz(false);
  };

  return (
    <div className="relative w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar pb-32">
      
      {/* HEADER */}
      <div className="text-center py-10 space-y-4 relative z-10">
         <h2 className="text-5xl md:text-7xl font-[1000] text-white uppercase italic tracking-tighter leading-none">
            WISEBOT & <span className="text-transparent bg-clip-text magic-gradient">{lang === 'el' ? 'ΟΙ ΦΙΛΟΙ' : 'FRIENDS'}</span>
         </h2>
         <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
            {lang === 'el' ? '1 BOOK = +1 CREDIT' : '1 BOOK = +1 CREDIT'}
         </p>
      </div>

      {/* BOOKS LIST */}
      <div className="max-w-5xl mx-auto px-4 relative">
         <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent -translate-x-1/2 hidden md:block"></div>

         <div className="space-y-12 relative z-10">
            {BOOKS.map((book, index) => {
               const isCompleted = completedIds.includes(`ebook-${book.id}`);
               const isLocked = isBookLocked(book.id);
               const isEven = index % 2 === 0;
               
               return (
                  <motion.div 
                     key={book.id}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}
                  >
                     <div className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0f1014] border-4 flex items-center justify-center z-20 hidden md:flex ${isLocked ? 'border-white/5 text-white/20' : 'border-blue-500/30 text-blue-400'}`}>
                        {isLocked ? <Lock size={12} /> : <span className="font-black text-xs">{index + 1}</span>}
                     </div>

                     <div className="flex-1 w-full group">
                        <div 
                          onClick={() => openBook(Number(book.id))}
                          className={`relative glass-panel rounded-[2.5rem] p-2 border-2 transition-all duration-500 overflow-hidden 
                          ${isLocked 
                             ? 'border-white/5 opacity-60 cursor-not-allowed grayscale' 
                             : 'border-white/10 hover:border-purple-500/50 hover:shadow-2xl cursor-pointer'
                          }`}
                        >
                           
                           {!isLocked && <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}

                           <div className="flex flex-col sm:flex-row gap-6 p-4">
                              <div className="w-full sm:w-32 h-40 rounded-[2rem] overflow-hidden shrink-0 relative shadow-lg">
                                 <img src={book.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cover" />
                                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                 {isCompleted && (
                                    <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-[1px] flex items-center justify-center">
                                       <CheckCircle size={32} className="text-emerald-400 drop-shadow-lg" />
                                    </div>
                                 )}
                              </div>

                              <div className="flex-1 flex flex-col justify-center space-y-2">
                                 <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest italic">
                                      {book.stepLabel ? book.stepLabel[lang] : `STEP ${index + 1} • ${book.theme[lang]}`}
                                    </span>
                                 </div>
                                 <h3 className="text-2xl font-[1000] text-white uppercase italic tracking-tighter leading-tight group-hover:text-purple-300 transition-colors">
                                    {book.title[lang]}
                                 </h3>
                                 <p className="text-white/50 text-xs font-bold italic line-clamp-2 pr-4">{book.description[lang]}</p>
                                 
                                 <div className="pt-4 flex items-center gap-4">
                                    {/* UPDATED REWARD BADGE */}
                                    <div className="px-3 py-1 bg-amber-500/10 rounded-lg border border-amber-500/20 text-[10px] font-black text-amber-400 flex items-center gap-1.5 uppercase tracking-widest">
                                       <Zap size={12} fill="currentColor" /> +1 CREDIT
                                    </div>
                                    {!isLocked && (
                                       <div className="text-white/20 group-hover:translate-x-2 transition-transform">
                                          <ArrowRight size={20} />
                                       </div>
                                    )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex-1 hidden md:block"></div>
                  </motion.div>
               );
            })}
         </div>
      </div>

      {/* --- READER & QUIZ MODAL --- */}
      <AnimatePresence>
        {selectedBookId && activeBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-end md:pl-80 md:pr-4 p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedBookId(null)}
              className="absolute inset-0 bg-[#000]/95 backdrop-blur-xl cursor-pointer"
            />

            <motion.div 
              layoutId={`book-${selectedBookId}`}
              initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }}
              className="relative w-full h-[95vh] bg-[#0f1115] border border-white/10 rounded-[3rem] shadow-2xl flex overflow-hidden"
            >
               <button onClick={() => setSelectedBookId(null)} className="absolute top-6 right-6 z-30 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-red-500/80 rounded-full border border-white/5 transition-all group backdrop-blur-md shadow-2xl">
                  <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
               </button>

               <div className="hidden lg:block w-[40%] h-full relative overflow-hidden border-r border-white/5">
                  <img src={activeBook.cover} className="w-full h-full object-cover opacity-60 grayscale-[0.3]" alt="Cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-12 left-12 right-12 space-y-6">
                     <h1 className="text-5xl font-[1000] text-white uppercase italic tracking-tighter leading-none">{activeBook.title[lang]}</h1>
                     <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
                     <p className="text-xl text-white/80 font-bold italic">"{activeBook.meaning[lang]}"</p>
                  </div>
               </div>

               <div className="flex-1 h-full overflow-y-auto custom-scrollbar p-8 md:p-16 relative">
                  {!showQuiz ? (
                     <div className="max-w-2xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center gap-3 text-blue-400 font-black text-xs uppercase tracking-[0.3em] italic mb-8">
                           <Footprints size={16} /> The Journey Begins
                        </div>
                        <div 
                           className="prose prose-invert prose-lg md:prose-xl max-w-none 
                           prose-p:text-gray-300 prose-p:font-medium prose-p:leading-relaxed
                           prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-headings:italic
                           prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/10 prose-blockquote:p-6 prose-blockquote:rounded-r-xl"
                           dangerouslySetInnerHTML={{ __html: activeBook.content[lang] }} 
                        />
                        <div className="pt-12">
                           <button 
                              onClick={() => setShowQuiz(true)}
                              className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] font-[1000] text-white text-xl uppercase italic tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                           >
                              {lang === 'el' ? 'ΚΑΝΕ ΤΟ QUIZ' : 'TAKE THE QUIZ'} <ArrowRight size={24} />
                           </button>
                        </div>
                     </div>
                  ) : (
                     <EbookQuiz 
                       questions={BOOK_QUIZZES[Number(activeBook.id)] || []} 
                       lang={lang}
                       onComplete={handleQuizComplete}
                       onRetry={handleRetryStory}
                       onNextBook={handleNextBook}
                       hasNextBook={hasNextBook}
                     />
                  )}
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Ebooks;
