import React, { useState } from 'react';
import { generateVideo } from '../services/gemini';
import { Button } from '../components/Button';
import { Video as VideoIcon, Loader2, AlertCircle, Key } from 'lucide-react';

export const VideoPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>('');

  const checkKeyAndGenerate = async () => {
    if (!prompt.trim()) return;

    setStatus('Checking API Key permissions...');
    
    // Check if key is selected for Veo
    try {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        setStatus('Waiting for API Key selection...');
        await (window as any).aistudio.openSelectKey();
        // Assume success after dialog closes (per strict instructions)
      }
      
      startGeneration();
    } catch (e) {
      console.error(e);
      setStatus('Error checking API Key.');
    }
  };

  const startGeneration = async () => {
    setLoading(true);
    setVideoUrl(null);
    setStatus('Initializing Veo model...');
    
    try {
      setStatus('Generating video... This may take a minute.');
      const url = await generateVideo(prompt);
      setVideoUrl(url);
      setStatus('');
    } catch (error: any) {
      console.error(error);
      if (error.message && error.message.includes('Requested entity was not found')) {
        setStatus('API Key invalid or project not found. Please re-select key.');
      } else {
        setStatus('Generation failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full p-6 flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
          Veo Studio
        </h2>
        <p className="text-gray-400">Cinematic video generation. Requires a paid billing project.</p>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-xl text-sm text-gray-400 flex gap-3 items-start">
        <AlertCircle size={20} className="shrink-0 mt-0.5 text-blue-400" />
        <div>
          Video generation uses the <strong>Veo</strong> model which requires a specific API key selection linked to a paid Google Cloud Project. 
          <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline ml-1">
            Read billing docs.
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
        <textarea
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:border-orange-500 min-h-[100px] resize-none"
          placeholder="Describe the video you want to create (e.g., A neon hologram of a cat driving at top speed)..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="flex justify-between items-center">
            <Button onClick={() => (window as any).aistudio.openSelectKey()} variant="secondary" className="text-xs">
                <Key size={14} /> Re-select API Key
            </Button>
            <Button onClick={checkKeyAndGenerate} disabled={loading || !prompt} className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 border-none">
            {loading ? <Loader2 className="animate-spin" size={18} /> : <VideoIcon size={18} />}
            Generate Video
            </Button>
        </div>
      </div>

      {status && (
        <div className="text-center text-orange-400 animate-pulse font-medium">
          {status}
        </div>
      )}

      {videoUrl && (
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <video 
            src={videoUrl} 
            controls 
            autoPlay 
            loop 
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};