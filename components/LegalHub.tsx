
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Scale, 
  CreditCard, 
  Brain, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Lock,
  ChevronRight
} from 'lucide-react';

interface LegalHubProps {
  lang: 'el' | 'en';
}

export default function LegalHub({ lang }: LegalHubProps) {
  const [activeSection, setActiveSection] = useState('overview');

  const text = {
    el: {
      title: 'Κέντρο Ασφάλειας & Όρων',
      subtitle: 'Διαφάνεια, Ασφάλεια και Κανόνες Λειτουργίας',
      menu: {
        overview: 'Επισκόπηση',
        safety: 'Ασφάλεια & AI',
        terms: 'Όροι & Πληρωμές',
        refund: 'Πολιτική Επιστροφών'
      }
    },
    en: {
      title: 'Safety & Legal Hub',
      subtitle: 'Transparency, Safety and Operating Rules',
      menu: {
        overview: 'Overview',
        safety: 'Safety & AI',
        terms: 'Terms & Payments',
        refund: 'Refund Policy'
      }
    }
  };

  const t = text[lang];

  const sections = [
    { id: 'overview', icon: FileText, label: t.menu.overview },
    { id: 'safety', icon: Shield, label: t.menu.safety },
    { id: 'terms', icon: Scale, label: t.menu.terms },
    { id: 'refund', icon: CreditCard, label: t.menu.refund },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 pb-32 min-h-screen">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full">
            <Lock size={14} /> <span className="text-[10px] font-black uppercase tracking-widest">OFFICIAL DOCUMENTS</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter">
          {t.title}
        </h1>
        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl border-2 transition-all ${
                        activeSection === section.id 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg' 
                        : 'bg-white/5 border-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    <section.icon size={20} />
                    <span className="font-bold text-sm uppercase tracking-wide">{section.label}</span>
                    {activeSection === section.id && <ChevronRight size={16} className="ml-auto" />}
                </button>
            ))}
            
            <div className="mt-8 p-6 bg-slate-900/50 rounded-3xl border border-white/5 text-center">
                <HelpCircle size={32} className="mx-auto text-white/20 mb-4" />
                <p className="text-white/40 text-xs font-bold leading-relaxed">
                    Για οποιαδήποτε απορία, επικοινωνήστε μαζί μας στο <span className="text-blue-400">support@wisebot.app</span>
                </p>
            </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
            <div className="glass-panel p-8 md:p-12 rounded-[3rem] border border-white/10 bg-[#0f1014] relative overflow-hidden">
                
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <AnimatePresence mode='wait'>
                    
                    {/* 1. OVERVIEW */}
                    {activeSection === 'overview' && (
                        <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                                <Brain className="text-blue-400" /> WISEBOT CORE SYSTEM
                            </h2>
                            
                            <div className="space-y-6 text-gray-300 leading-relaxed font-medium">
                                <p className="text-lg text-white">
                                    Το Wisebot είναι ένα εκπαιδευτικό οικοσύστημα όπου τα παιδιά μαθαίνουν, δημιουργούν, πειραματίζονται και ανταμείβονται.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">ΣΤΟΧΟΣ</h4>
                                        <p className="text-sm opacity-80">Η μετατροπή της γνώσης σε δημιουργία. Όχι παιχνίδι για το παιχνίδι.</p>
                                    </div>
                                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">ΕΙΣΟΔΟΣ</h4>
                                        <p className="text-sm opacity-80">Μέσω φυσικής 3D φιγούρας ή NFC κάρτας (Entry Pack).</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-black text-white mt-8 mb-4">CREDITS & BADGES</h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                                        <span>Τα credits είναι εσωτερικό εκπαιδευτικό εργαλείο. Δεν είναι χρήματα και δεν ανταλλάσσονται εκτός πλατφόρμας.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                                        <span>Τα Badges δείχνουν ταυτότητα και ξεκλειδώνουν δυνατότητες (π.χ. Thinker, Creator, Builder).</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {/* 2. SAFETY & AI */}
                    {activeSection === 'safety' && (
                        <motion.div key="safety" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                                <Shield className="text-emerald-400" /> ΑΣΦΑΛΕΙΑ & ΓΟΝΙΚΗ ΕΥΘΥΝΗ
                            </h2>

                            <div className="p-6 bg-emerald-900/20 border border-emerald-500/30 rounded-3xl">
                                <h4 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                                    <AlertTriangle size={16} /> ΓΟΝΙΚΗ ΕΠΙΒΛΕΨΗ
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Η χρήση της πλατφόρμας από ανήλικους γίνεται αποκλειστικά με ευθύνη του γονέα ή κηδεμόνα. Ο γονέας οφείλει να εξηγεί στο παιδί πώς να χρησιμοποιεί σωστά τα εργαλεία δημιουργίας.
                                </p>
                            </div>

                            <div className="space-y-6 text-gray-300">
                                <h3 className="text-xl font-black text-white">AI DISCLAIMER (Τεχνητή Νοημοσύνη)</h3>
                                <p>
                                    Το Wisebot χρησιμοποιεί τεχνολογίες AI για τη δημιουργία εικόνων, videos και 3D μοντέλων.
                                </p>
                                <ul className="space-y-3 border-l-2 border-white/10 pl-6">
                                    <li className="text-sm">🤖 Το τελικό αποτέλεσμα ενδέχεται να διαφέρει από την αρχική ιδέα.</li>
                                    <li className="text-sm">🤖 Η απρόβλεπτη φύση είναι μέρος της εκπαιδευτικής εμπειρίας (πειραματισμός, αποδοχή).</li>
                                    <li className="text-sm">🤖 Το σύστημα διαθέτει φίλτρα ασφαλείας, αλλά η ανθρώπινη επίβλεψη είναι απαραίτητη.</li>
                                </ul>

                                <h3 className="text-xl font-black text-white">ΚΑΤΑΧΡΗΣΗ & ΠΡΟΣΤΑΣΙΑ</h3>
                                <p className="text-sm">
                                    Σε περίπτωση εντοπισμού ακατάλληλου περιεχομένου ή παραβίασης κανόνων, το Wisebot διατηρεί το δικαίωμα αφαίρεσης περιεχομένου και αναστολής πρόσβασης. Δεν υπάρχει άμεση επικοινωνία (chat) μεταξύ παιδιών χωρίς επίβλεψη.
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* 3. TERMS & PAYMENTS */}
                    {activeSection === 'terms' && (
                        <motion.div key="terms" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                                <Scale className="text-amber-400" /> ΟΡΟΙ ΧΡΗΣΗΣ & ΙΔΙΟΚΤΗΣΙΑ
                            </h2>

                            <div className="space-y-6 text-gray-300">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-black text-white">ΙΔΙΟΚΤΗΣΙΑ ΔΗΜΙΟΥΡΓΙΩΝ</h3>
                                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <p className="font-bold text-white mb-2">Κάθε εικόνα, video ή 3D μοντέλο που δημιουργείται:</p>
                                        <ul className="space-y-2 text-sm opacity-80 list-disc list-inside">
                                            <li>Ανήκει στο παιδί που το δημιούργησε.</li>
                                            <li>Μπορεί να κατέβει (download) για προσωπική χρήση.</li>
                                            <li>Δεν αφαιρείται η ιδιοκτησία από το παιδί.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-black text-white">ΑΓΟΡΕΣ & CREDITS</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                                            <span className="text-sm">Όλες οι αγορές πραγματοποιούνται αποκλειστικά από γονέα.</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                                            <span className="text-sm">Τα παιδιά δεν μπορούν να αγοράσουν credits μόνα τους.</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                                            <span className="text-sm">Τα credits δεν αποτελούν πραγματικό χρήμα και δεν εξαργυρώνονται.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* 4. REFUND POLICY */}
                    {activeSection === 'refund' && (
                        <motion.div key="refund" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                            <h2 className="text-3xl font-[1000] text-white uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                                <CreditCard className="text-fuchsia-400" /> ΠΟΛΙΤΙΚΗ ΕΠΙΣΤΡΟΦΩΝ
                            </h2>

                            <div className="p-8 bg-gradient-to-br from-fuchsia-900/20 to-purple-900/20 border border-fuchsia-500/30 rounded-3xl text-center space-y-6">
                                <div className="w-16 h-16 bg-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto text-fuchsia-400">
                                    <AlertTriangle size={32} />
                                </div>
                                
                                <h3 className="text-2xl font-black text-white uppercase italic">ΨΗΦΙΑΚΕΣ ΥΠΗΡΕΣΙΕΣ</h3>
                                
                                <p className="text-white/80 leading-relaxed">
                                    Οι υπηρεσίες δημιουργίας περιεχομένου (εικόνες, videos, 3D μοντέλα) θεωρούνται ψηφιακές υπηρεσίες που <strong>εκτελούνται άμεσα</strong>.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                                        <span className="text-red-400 font-bold">❌</span>
                                        <span className="text-sm text-gray-300">Δεν παρέχεται επιστροφή χρημάτων (refund).</span>
                                    </div>
                                    <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                                        <span className="text-red-400 font-bold">❌</span>
                                        <span className="text-sm text-gray-300">Δεν γίνεται ακύρωση μετά τη χρήση credits.</span>
                                    </div>
                                </div>

                                <p className="text-xs text-white/40 uppercase tracking-widest font-bold pt-4">
                                    ΤΟ ΣΥΣΤΗΜΑ ΕΧΕΙ ΣΧΕΔΙΑΣΤΕΙ ΩΣΤΕ ΤΑ ΠΑΙΔΙΑ ΝΑ ΜΑΘΑΙΝΟΥΝ ΤΗΝ ΑΞΙΑ ΤΗΣ ΕΠΙΛΟΓΗΣ.
                                </p>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>

      </div>
    </div>
  );
}
