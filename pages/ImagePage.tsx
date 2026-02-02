import React, { useState } from 'react';
import { generateImage } from '../services/gemini';
import { Button } from '../components/Button';
import { Image as ImageIcon, Download, Sparkles } from 'lucide-react';

export const ImagePage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setGeneratedImage(null);
    try {
      const base64 = await generateImage(prompt);
      setGeneratedImage(base64);
    } catch (error) {
      console.error(error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
          Imagine & Create
        </h2>
        <p className="text-gray-400">Generate high-fidelity images using Gemini 3 Pro Vision.</p>
      </div>

      <div className="flex gap-2 bg-gray-800 p-2 rounded-xl border border-gray-700 shadow-xl">
        <input
          type="text"
          className="flex-1 bg-transparent px-4 py-2 text-white focus:outline-none placeholder-gray-500"
          placeholder="Describe your imagination (e.g., A cyberpunk city in neon rain)..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
        />
        <Button onClick={handleGenerate} disabled={loading || !prompt} variant="primary">
          <Sparkles size={18} />
          Generate
        </Button>
      </div>

      <div className="flex-1 min-h-[400px] flex items-center justify-center bg-gray-900 rounded-2xl border-2 border-dashed border-gray-700 relative overflow-hidden group">
        {loading ? (
           <div className="flex flex-col items-center gap-4">
             <div className="relative w-20 h-20">
               <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full"></div>
               <div className="absolute inset-0 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
             </div>
             <p className="text-purple-400 font-medium animate-pulse">Dreaming...</p>
           </div>
        ) : generatedImage ? (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={generatedImage} 
              alt="Generated" 
              className="max-h-full max-w-full rounded-lg shadow-2xl object-contain"
            />
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <a 
                href={generatedImage} 
                download={`gemini-${Date.now()}.png`}
                className="bg-gray-900/80 backdrop-blur text-white p-3 rounded-full hover:bg-black transition-colors flex items-center justify-center"
              >
                <Download size={24} />
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <ImageIcon size={64} className="mx-auto mb-4 opacity-50" />
            <p>Your masterpiece will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};