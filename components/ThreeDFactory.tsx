
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Box, Wand2, RefreshCcw, Download, Share2, Printer, Loader2, Sparkles, AlertCircle, FileCode, Cuboid, Lock } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { UI_TEXT } from '../constants';
import { useEconomy } from '../context/EconomyContext'; // Hook

interface ThreeDFactoryProps {
  lang: 'el' | 'en';
}

export default function ThreeDFactory({ lang }: ThreeDFactoryProps) {
  const { badges } = useEconomy(); // Check builder badge
  const t = UI_TEXT[lang].factory3d;
  const [image, setImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
        alert("Please upload an image file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImage(e.target.result as string);
        setResultImage(null);
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle Mouse Move for 3D Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!resultImage) return;
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const generate3DPreview = async () => {
    if (!image) return;

    setIsProcessing(true);
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const base64Data = image.split(',')[1];
        const mimeType = image.split(':')[1].split(';')[0];

        const prompt = `
        Analyze this image. I want to turn this drawing/photo into a physical 3D printed figurine.
        Generate a ultra-realistic 3D render of the subject in the image.
        Style: High-end 3D rendered character, plastic or clay material texture, glossy finish.
        Lighting: Studio lighting, soft shadows to show depth.
        Perspective: Isometric view to simulate a 3D model viewer.
        Background: Clean, dark gradient studio background.
        Keep the colors and features true to the original drawing but transform them into a tangible 3D object.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image', 
            contents: {
                parts: [
                    { inlineData: { mimeType: mimeType, data: base64Data } },
                    { text: prompt }
                ]
            }
        });

        const parts = response.candidates?.[0]?.content?.parts;
        if (parts) {
            for (const part of parts) {
                if (part.inlineData) {
                    setResultImage(`data:image/png;base64,${part.inlineData.data}`);
                    break;
                }
            }
        }

    } catch (error: any) {
        console.error("3D Generation Error:", error);
        alert(lang === 'el' ? "Κάτι πήγε στραβά. Προσπαθήστε ξανά." : "Something went wrong. Please try again.");
    } finally {
        setIsProcessing(false);
    }
  };

  const handleDownloadImage = () => {
    if (resultImage) {
        const link = document.createElement('a');
        link.href = resultImage;
        link.download = `WiseBot_3D_Preview.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  };

  const handleDownloadSTL = () => {
      // REQUIRE BUILDER BADGE
      if (!badges.builder) {
          alert(lang === 'el' ? "🔒 Χρειάζεσαι το BUILDER BADGE για να κατεβάσεις το αρχείο STL!" : "🔒 You need the BUILDER BADGE to download the STL file!");
          return;
      }

      const element = document.createElement("a");
      const file = new Blob(["WiseBot 3D Model Placeholder\n\nTo get real .stl files, integrate a 3D Mesh API here."], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "WiseBot_Model_Placeholder.stl";
      document.body.appendChild(element);
      element.click();
      
      alert(lang === 'el' ? "📂 Το αρχείο .STL κατέβηκε!" : "📂 .STL file downloaded!");
  };

  const handleOrder = () => {
      const subject = encodeURIComponent(lang === 'el' ? "Παραγγελία 3D Εκτύπωσης" : "3D Print Order");
      const body = encodeURIComponent(lang === 'el' ? "Γεια σας, θέλω το 3D μοντέλο μου!" : "Hello, I want my 3D model!");
      window.location.href = `mailto:orders@wisebot.app?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 pb-32 min-h-full flex flex-col">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter uppercase italic leading-none">
          3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">FACTORY</span>
        </h2>
        <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 items-start">
        
        <div className="flex flex-col gap-6">
            <motion.div 
                layout
                className={`w-full aspect-square border-4 border-dashed rounded-[3rem] flex flex-col items-center justify-center p-8 transition-all relative overflow-hidden group cursor-pointer ${dragActive ? 'border-cyan-400 bg-cyan-900/20' : 'border-white/10 bg-black/40 hover:border-white/30'}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => !image && fileInputRef.current?.click()}
            >
                <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleChange} />
                {image ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img src={image} alt="Original" className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl" />
                        {!isProcessing && !resultImage && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                                <p className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                    <RefreshCcw size={16}/> {lang === 'el' ? 'ΑΛΛΑΓΗ' : 'CHANGE'}
                                </p>
                            </div>
                        )}
                        {isProcessing && (
                            <div className="absolute inset-0 z-20 bg-black/80 flex flex-col items-center justify-center rounded-2xl">
                                <div className="relative w-24 h-24">
                                    <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"></div>
                                    <div className="absolute inset-0 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
                                    <Box className="absolute inset-0 m-auto text-cyan-400 animate-pulse" size={32} />
                                </div>
                                <p className="text-cyan-400 font-bold mt-4 animate-pulse uppercase tracking-widest text-xs">
                                    {t.generating}
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center space-y-4 pointer-events-none">
                        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 group-hover:scale-110 transition-transform">
                            <Upload size={40} className="text-white/40 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white uppercase italic">{t.uploadTitle}</h3>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2">{t.uploadBtn}</p>
                        </div>
                    </div>
                )}
            </motion.div>

            {image && !resultImage && (
                <button
                    onClick={generate3DPreview}
                    disabled={isProcessing}
                    className="w-full py-6 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-[2rem] font-[1000] text-xl text-white uppercase italic tracking-widest shadow-[0_0_40px_rgba(217,70,239,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Box size={24} />
                    {lang === 'el' ? 'ΜΕΤΑΤΡΟΠΗ ΣΕ 3D' : 'CONVERT TO 3D'}
                </button>
            )}
        </div>

        <div className="flex flex-col h-full gap-6">
            <div 
                className={`w-full aspect-square rounded-[3rem] border-2 relative flex flex-col items-center justify-center transition-all perspective-1000 overflow-hidden ${resultImage ? 'border-cyan-500/50 bg-gradient-to-b from-slate-900 to-black shadow-[0_0_60px_rgba(34,211,238,0.15)] cursor-move' : 'border-white/5 bg-black/20'}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] perspective-500" style={{ transform: 'rotateX(60deg) scale(2)' }}></div>

                {resultImage ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, transition: 'transform 0.1s ease-out' }}
                        className="relative w-3/4 h-3/4 flex items-center justify-center z-10"
                    >
                        <img src={resultImage} alt="3D Result" className="max-h-full max-w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" />
                        <div className="absolute top-0 right-0 bg-cyan-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30 flex items-center gap-2 shadow-lg">
                            <Cuboid size={14} className="text-cyan-400" />
                            <span className="text-[9px] font-black text-white uppercase tracking-widest">OBJ VIEWER</span>
                        </div>
                    </motion.div>
                ) : (
                    <div className="text-center opacity-30 z-10">
                        <Cuboid size={80} className="mx-auto mb-4 text-white" strokeWidth={1} />
                        <p className="font-black uppercase tracking-widest text-sm text-white">
                            {lang === 'el' ? 'Ο 3D ΧΩΡΟΣ ΕΙΝΑΙ ΑΔΕΙΟΣ' : '3D SPACE IS EMPTY'}
                        </p>
                    </div>
                )}
            </div>

            {resultImage && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* STL DOWNLOAD - LOCKED UNLESS BUILDER */}
                    <button 
                        onClick={handleDownloadSTL}
                        className={`col-span-1 md:col-span-2 py-5 rounded-2xl font-[1000] uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 border-2 transition-all ${badges.builder ? 'bg-white text-black hover:scale-[1.02] active:scale-95 border-white' : 'bg-black/40 text-white/40 border-white/10 cursor-not-allowed'}`}
                    >
                        {badges.builder ? <FileCode size={20} className="text-blue-600" /> : <Lock size={20} />}
                        {lang === 'el' ? 'ΛΗΨΗ ΑΡΧΕΙΟΥ .STL' : 'DOWNLOAD .STL FILE'}
                    </button>

                    <button onClick={handleOrder} className="py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold uppercase tracking-widest shadow-lg flex items-center justify-center gap-2">
                        <Printer size={18} /> {t.printBtn}
                    </button>
                    
                    <div className="grid grid-cols-2 gap-2">
                        <button onClick={handleDownloadImage} className="py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2">
                            <Download size={16} /> JPG
                        </button>
                        <button onClick={() => { setImage(null); setResultImage(null); }} className="py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2">
                            <RefreshCcw size={16} /> NEW
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
      </div>
    </div>
  );
}
