
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Zap, 
  ChevronRight,
  Wand2, 
  Sparkles, 
  Upload, 
  Edit3, 
  Mic, 
  Activity, 
  Download, 
  Film,
  Users,
  MessageCircle,
  Play
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useLocation } from 'react-router-dom';
import { HEROES } from '../constants';
import { useEconomy } from '../context/EconomyContext';

// --- DATA ---
const VIDEOS = [
  {
    id: '1',
    title: { el: 'Η ΑΦΥΠΝΙΣΗ: Η ΕΠΙΣΤΡΟΦΗ', en: 'THE AWAKENING: WISEBOT RETURNS' },
    hero: 'Wisebot',
    category: 'adventure',
    thumbnail: 'https://i.postimg.cc/qqT2wZKn/Gemini-Generated-Image-e2e7aoe2e7aoe2e7.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '2:45',
    description: { el: 'Δες πώς η Wisebot έφτασε για πρώτη φορά στην Ακαδημία.', en: 'See how Wisebot first arrived at the Academy.' },
    xpReward: 25
  },
  {
    id: '2',
    title: { el: 'ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ ΜΕ ΤΗ LINK', en: 'CODE THE FUTURE WITH LINK' },
    hero: 'Link',
    category: 'lesson',
    thumbnail: 'https://i.postimg.cc/5yV8gkz0/Gemini-Generated-Image-1kbdh81kbdh81kbd.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '5:20',
    description: { el: 'Η Link εξηγεί τα βασικά της λογικής.', en: 'Link explains the basics of logic.' },
    xpReward: 40
  },
  {
    id: '3',
    title: { el: 'CROCUS: ΔΥΝΑΜΗ ΣΤΗΝ ΠΡΑΞΗ', en: 'Crocus: STRENGTH IN ACTION' },
    hero: 'Crocus',
    category: 'short',
    thumbnail: 'https://i.postimg.cc/j2byckfH/Gemini-Generated-Image-htitclhtitclhtit.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '1:15',
    description: { el: 'Μια γρήγορη ματιά στον Crocus.', en: 'A quick look at Crocus.' },
    xpReward: 15
  },
];

// STEP 1 OPTIONS
const GREETINGS = [
  { id: 'morning', text: 'Καλημέρα!' },
  { id: 'evening', text: 'Καλησπέρα!' },
  { id: 'night', text: 'Καληνύχτα!' }
];

// STEP 2 OPTIONS
const ACTIONS = [
  { id: 'dance', text: 'Να χορεύει' },
  { id: 'serious', text: 'Να είναι σοβαρός' },
  { id: 'disappear', text: 'Να εξαφανίζεται' }
];

// STEP 3 OPTIONS
const MESSAGES = [
  { id: 'friend', text: 'Είσαι ο καλύτερός μου φίλος.' },
  { id: 'create', text: 'Πάμε να δημιουργήσουμε κάτι όμορφο.' },
  { id: 'book', text: 'Πάμε να διαβάσουμε βιβλίο.' }
];

interface CinemaProps {
  lang: 'el' | 'en';
  myHeroes: any[];
}

const Cinema: React.FC<CinemaProps> = ({ lang, myHeroes }) => {
  const { credits, spendCredits, costs, trackAction } = useEconomy();
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Wizard State
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Selection State
  const [selectedHero, setSelectedHero] = useState<any | null>(null);
  
  const [selectedGreeting, setSelectedGreeting] = useState<string>('');
  const [customGreeting, setCustomGreeting] = useState('');
  
  const [selectedAction, setSelectedAction] = useState<string>('');
  const [customAction, setCustomAction] = useState('');
  
  const [selectedMessage, setSelectedMessage] = useState<string>('');
  const [customMessage, setCustomMessage] = useState('');

  // Generation State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null); // For playing standard videos

  useEffect(() => {
    if (location.state && location.state.animateHero) {
      setIsWizardOpen(true);
      setSelectedHero(location.state.animateHero);
      setCurrentStep(2); // Skip hero selection if coming from WiseFriends
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const allHeroes = [
    ...HEROES.map(h => ({ ...h, type: 'default' })),
    ...myHeroes.map(h => ({ ...h, avatar: h.image, role: { el: 'Δικός σου', en: 'Yours' }, type: 'user' }))
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const newHero = {
            id: `uploaded-${Date.now()}`,
            name: 'Uploaded Hero',
            avatar: event.target.result as string,
            type: 'uploaded'
          };
          setSelectedHero(newHero);
          setCurrentStep(2);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getApiKey = async (): Promise<string> => {
    let key = process.env.API_KEY;
    const win = window as any;
    if (win.aistudio) {
        const hasKey = await win.aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await win.aistudio.openSelectKey();
        }
    }
    return key || '';
  };

  const handleGenerate = async () => {
    if (!spendCredits(costs.video)) {
        alert('Not enough Credits!');
        return;
    }

    setIsGenerating(true);
    
    // Prepare Inputs
    const finalGreeting = customGreeting || selectedGreeting;
    const finalAction = customAction || selectedAction;
    const finalMessage = customMessage || selectedMessage;

    try {
      await getApiKey();
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // Image Prep
      let imageBytes = "";
      let mimeType = "image/png";

      if (selectedHero.avatar.startsWith('data:')) {
          const parts = selectedHero.avatar.split(',');
          mimeType = parts[0].match(/:(.*?);/)?.[1] || "image/png";
          imageBytes = parts[1];
      } else {
          // Handle URL images (CORS might apply)
          const resp = await fetch(selectedHero.avatar);
          const blob = await resp.blob();
          mimeType = blob.type;
          const reader = new FileReader();
          imageBytes = await new Promise((resolve) => {
              reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
              reader.readAsDataURL(blob);
          });
      }

      // --- THE PROMPT EXACTLY AS REQUESTED ---
      // "zontanepse tin eikona kai vale na leei aftes tis leksis"
      // "live animate the character and make it say these words"
      const prompt = `Animate the character in this image.
      Action: The character is doing: ${finalAction}.
      Speech: The character is looking at the camera and speaking this exact text: "${finalGreeting} ${finalMessage}".
      Lip Sync: Synchronize mouth movement to the speech text provided.
      Style: High quality, cinematic 3D.`;

      console.log("Sending Prompt to Veo:", prompt);

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: { imageBytes, mimeType },
        config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '9:16' }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      if (operation.response?.generatedVideos?.[0]?.video?.uri) {
        const videoUri = operation.response.generatedVideos[0].video.uri;
        const fetchUrl = `${videoUri}&key=${process.env.API_KEY}`;
        const videoResponse = await fetch(fetchUrl);
        const videoBlob = await videoResponse.blob();
        const localUrl = URL.createObjectURL(videoBlob);
        setGeneratedVideoUrl(localUrl);
        trackAction('CREATE_VIDEO');
      } else {
        throw new Error("No video generated.");
      }

    } catch (error: any) {
      console.error(error);
      alert("Error generating video: " + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const resetWizard = () => {
    setIsWizardOpen(false);
    setCurrentStep(1);
    setSelectedHero(null);
    setGeneratedVideoUrl(null);
    setSelectedGreeting(''); setCustomGreeting('');
    setSelectedAction(''); setCustomAction('');
    setSelectedMessage(''); setCustomMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 pb-32">
      
      {/* Header */}
      {!isWizardOpen && (
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-5xl font-[1000] text-white uppercase italic tracking-tighter">
            WISE <span className="text-blue-500">CINEMA</span>
          </h2>
          <button 
            onClick={() => setIsWizardOpen(true)}
            className="px-8 py-4 bg-white text-black rounded-full font-[1000] uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
          >
            {lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΑ LIVE VIDEO' : 'CREATE LIVE VIDEO'}
          </button>
        </div>
      )}

      {/* WIZARD CONTAINER */}
      <AnimatePresence mode="wait">
        {isWizardOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto bg-[#0f1014] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <button onClick={resetWizard} className="absolute top-8 right-8 text-white/50 hover:text-white">
                <X size={24} />
            </button>

            {/* PROGRESS BAR */}
            <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4].map(s => (
                    <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${s <= currentStep ? 'bg-blue-500' : 'bg-white/10'}`}></div>
                ))}
            </div>

            {/* LOADING STATE */}
            {isGenerating ? (
                <div className="text-center py-20">
                    <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <h3 className="text-2xl font-black text-white uppercase italic">ΖΩΝΤΑΝΕΥΟΥΜΕ ΤΟΝ ΗΡΩΑ...</h3>
                    <p className="text-white/50 text-sm mt-2">Παρακαλώ περιμένετε</p>
                </div>
            ) : generatedVideoUrl ? (
                // RESULT STATE
                <div className="text-center">
                    <h3 className="text-2xl font-black text-white uppercase italic mb-6">ΕΤΟΙΜΟ!</h3>
                    <div className="aspect-[9/16] max-w-sm mx-auto bg-black rounded-3xl overflow-hidden border-4 border-blue-500 shadow-2xl mb-8">
                        <video src={generatedVideoUrl} controls autoPlay loop className="w-full h-full object-cover" />
                    </div>
                    <div className="flex gap-4 justify-center">
                        <button onClick={resetWizard} className="px-6 py-3 bg-white/10 rounded-xl text-white font-bold uppercase text-xs">ΝΕΟ ΒΙΝΤΕΟ</button>
                        <a href={generatedVideoUrl} download="hero_live.mp4" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold uppercase text-xs flex items-center gap-2">
                            <Download size={16} /> ΚΑΤΕΒΑΣΜΑ
                        </a>
                    </div>
                </div>
            ) : (
                // STEPS
                <div className="space-y-8">
                    
                    {/* STEP 1: HERO */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-white uppercase italic flex items-center gap-3">
                                <Users className="text-blue-400"/> 1. ΕΠΙΛΕΞΕ ΗΡΩΑ
                            </h3>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                                <div onClick={() => fileInputRef.current?.click()} className="aspect-square rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/5">
                                    <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileUpload}/>
                                    <Upload size={24} className="text-white/50 mb-2"/>
                                    <span className="text-[10px] font-bold text-white/50 uppercase">UPLOAD</span>
                                </div>
                                {allHeroes.map(h => (
                                    <div key={h.id} onClick={() => { setSelectedHero(h); setCurrentStep(2); }} className="aspect-square rounded-2xl overflow-hidden border-2 border-white/10 hover:border-blue-500 cursor-pointer transition-all">
                                        <img src={h.avatar} className="w-full h-full object-cover" alt={h.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2: GREETING */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-white uppercase italic flex items-center gap-3">
                                <Mic className="text-purple-400"/> 2. ΤΙ ΧΑΙΡΕΤΙΣΜΟ ΘΕΛΕΙΣ;
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {GREETINGS.map(g => (
                                    <button 
                                        key={g.id} 
                                        onClick={() => { setSelectedGreeting(g.text); setCustomGreeting(''); }}
                                        className={`p-4 rounded-xl text-left font-bold border-2 transition-all ${selectedGreeting === g.text ? 'border-purple-500 bg-purple-500/20 text-white' : 'border-white/10 text-white/50 hover:border-white/30'}`}
                                    >
                                        "{g.text}"
                                    </button>
                                ))}
                                <div className="md:col-span-2">
                                    <input 
                                        type="text" 
                                        placeholder="Ή γράψε κάτι δικό σου..." 
                                        value={customGreeting}
                                        onChange={(e) => { setCustomGreeting(e.target.value); setSelectedGreeting(''); }}
                                        className="w-full p-4 rounded-xl bg-black border border-white/20 text-white focus:border-purple-500 outline-none font-bold"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-4">
                                <button onClick={() => setCurrentStep(1)} className="text-white/50 font-bold uppercase text-xs">ΠΙΣΩ</button>
                                <button disabled={!selectedGreeting && !customGreeting} onClick={() => setCurrentStep(3)} className="px-8 py-3 bg-white text-black rounded-xl font-black uppercase disabled:opacity-50">ΕΠΟΜΕΝΟ</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: ACTION */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-white uppercase italic flex items-center gap-3">
                                <Activity className="text-emerald-400"/> 3. ΤΙ ΚΙΝΗΣΗ ΝΑ ΚΑΝΕΙ;
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {ACTIONS.map(a => (
                                    <button 
                                        key={a.id} 
                                        onClick={() => { setSelectedAction(a.text); setCustomAction(''); }}
                                        className={`p-4 rounded-xl text-left font-bold border-2 transition-all ${selectedAction === a.text ? 'border-emerald-500 bg-emerald-500/20 text-white' : 'border-white/10 text-white/50 hover:border-white/30'}`}
                                    >
                                        {a.text}
                                    </button>
                                ))}
                                <div className="md:col-span-2">
                                    <input 
                                        type="text" 
                                        placeholder="Ή γράψε δική σου κίνηση..." 
                                        value={customAction}
                                        onChange={(e) => { setCustomAction(e.target.value); setSelectedAction(''); }}
                                        className="w-full p-4 rounded-xl bg-black border border-white/20 text-white focus:border-emerald-500 outline-none font-bold"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-4">
                                <button onClick={() => setCurrentStep(2)} className="text-white/50 font-bold uppercase text-xs">ΠΙΣΩ</button>
                                <button disabled={!selectedAction && !customAction} onClick={() => setCurrentStep(4)} className="px-8 py-3 bg-white text-black rounded-xl font-black uppercase disabled:opacity-50">ΕΠΟΜΕΝΟ</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: MESSAGE */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-white uppercase italic flex items-center gap-3">
                                <MessageCircle className="text-blue-400"/> 4. ΤΙ ΜΗΝΥΜΑ ΝΑ ΠΕΙ;
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {MESSAGES.map(m => (
                                    <button 
                                        key={m.id} 
                                        onClick={() => { setSelectedMessage(m.text); setCustomMessage(''); }}
                                        className={`p-4 rounded-xl text-left font-bold border-2 transition-all ${selectedMessage === m.text ? 'border-blue-500 bg-blue-500/20 text-white' : 'border-white/10 text-white/50 hover:border-white/30'}`}
                                    >
                                        "{m.text}"
                                    </button>
                                ))}
                                <div>
                                    <textarea 
                                        placeholder="Ή γράψε το δικό σου μήνυμα..." 
                                        value={customMessage}
                                        onChange={(e) => { setCustomMessage(e.target.value); setSelectedMessage(''); }}
                                        className="w-full p-4 rounded-xl bg-black border border-white/20 text-white focus:border-blue-500 outline-none font-bold min-h-[100px]"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between pt-4">
                                <button onClick={() => setCurrentStep(3)} className="text-white/50 font-bold uppercase text-xs">ΠΙΣΩ</button>
                                <button 
                                    disabled={!selectedMessage && !customMessage} 
                                    onClick={handleGenerate} 
                                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black uppercase flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                                >
                                    <Zap size={20} fill="currentColor" /> ΔΗΜΙΟΥΡΓΙΑ
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* STANDARD VIDEOS GRID (Below Wizard) */}
      {!isWizardOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
                <div key={video.id} onClick={() => setSelectedVideo(video)} className="group cursor-pointer rounded-[2rem] overflow-hidden border border-white/10 bg-[#0f1014] relative">
                    <div className="aspect-video relative">
                        <img src={video.thumbnail} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={video.title[lang]}/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Play size={20} fill="white" className="text-white"/></div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-black text-white uppercase italic">{video.title[lang]}</h3>
                        <p className="text-white/50 text-xs mt-2 font-bold">{video.description[lang]}</p>
                    </div>
                </div>
            ))}
        </div>
      )}

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
             <div className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden relative">
                <button onClick={() => setSelectedVideo(null)} className="absolute top-4 right-4 text-white z-10"><X size={32}/></button>
                <iframe src={`${selectedVideo.videoUrl}?autoplay=1`} className="w-full h-full" allow="autoplay"></iframe>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Cinema;
