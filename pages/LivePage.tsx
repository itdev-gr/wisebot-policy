import React, { useEffect, useRef, useState } from 'react';
import { connectLiveSession } from '../services/gemini';
import { createPcmBlob, decodeAudioData, blobToBase64 } from '../utils/audioUtils';
import { Button } from '../components/Button';
import { Mic, MicOff, Video, VideoOff, Activity, Radio } from 'lucide-react';

export const LivePage: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(false);
  const [status, setStatus] = useState('Ready to connect');
  
  // Audio Refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  
  // Video Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameIntervalRef = useRef<number | null>(null);
  
  // Session Ref
  // Using a ref for the session promise so we can access it inside closures without staleness
  const sessionPromiseRef = useRef<Promise<any> | null>(null);

  useEffect(() => {
    return () => {
      stopSession();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startSession = async () => {
    try {
      setStatus('Requesting permissions...');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: true, 
        video: isVideoEnabled 
      });
      streamRef.current = stream;

      // Initialize Audio Contexts
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContextClass({ sampleRate: 24000 }); // Output context
      const inputCtx = new AudioContextClass({ sampleRate: 16000 }); // Input context
      audioContextRef.current = audioCtx;

      // Handle Video Preview
      if (isVideoEnabled && videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      setStatus('Connecting to Gemini Live...');

      const onOpen = () => {
        setStatus('Connected. Listening...');
        setConnected(true);
        
        // --- Audio Streaming Setup ---
        const source = inputCtx.createMediaStreamSource(stream);
        const processor = inputCtx.createScriptProcessor(4096, 1, 1);
        
        processor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const pcmBlob = createPcmBlob(inputData);
            
            if (sessionPromiseRef.current) {
                sessionPromiseRef.current.then(session => {
                    session.sendRealtimeInput({ media: pcmBlob });
                });
            }
        };

        source.connect(processor);
        processor.connect(inputCtx.destination);
        
        sourceRef.current = source;
        processorRef.current = processor;

        // --- Video Streaming Setup ---
        if (isVideoEnabled) {
            startVideoStreaming();
        }
      };

      const onMessage = async (message: any) => {
        // Handle Audio Output
        const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
            try {
                // Ensure context is running (browser autoplay policy)
                if (audioCtx.state === 'suspended') {
                    await audioCtx.resume();
                }

                const audioBuffer = await decodeAudioData(
                    base64ToUint8Array(base64Audio),
                    audioCtx,
                    24000,
                    1
                );
                
                const source = audioCtx.createBufferSource();
                source.buffer = audioBuffer;
                source.connect(audioCtx.destination);
                
                const currentTime = audioCtx.currentTime;
                // Schedule next chunk
                const startTime = Math.max(nextStartTimeRef.current, currentTime);
                source.start(startTime);
                nextStartTimeRef.current = startTime + audioBuffer.duration;
            } catch (err) {
                console.error("Audio decode error", err);
            }
        }

        // Handle Interruption
        if (message.serverContent?.interrupted) {
            // In a real app, we would stop currently playing nodes here.
            // Simplified: reset timing
            nextStartTimeRef.current = audioCtx.currentTime;
        }
      };

      const onError = (e: any) => {
        console.error('Session error:', e);
        setStatus('Error occurred');
        stopSession();
      };

      const onClose = () => {
        console.log('Session closed');
        setStatus('Disconnected');
        stopSession();
      };

      // Connect
      sessionPromiseRef.current = connectLiveSession(onOpen, onMessage, onError, onClose);
      
    } catch (err) {
      console.error(err);
      setStatus('Failed to start session. Check permissions.');
    }
  };

  const startVideoStreaming = () => {
    if (frameIntervalRef.current) clearInterval(frameIntervalRef.current);
    
    const canvas = canvasRef.current;
    const video = videoRef.current;
    
    if (!canvas || !video) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Send frames at ~2 FPS (sufficient for context) to save bandwidth/latency
    frameIntervalRef.current = window.setInterval(() => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0);
            
            canvas.toBlob(async (blob) => {
                if (blob && sessionPromiseRef.current) {
                    const base64 = await blobToBase64(blob);
                    sessionPromiseRef.current.then(session => {
                        session.sendRealtimeInput({
                            media: { mimeType: 'image/jpeg', data: base64 }
                        });
                    });
                }
            }, 'image/jpeg', 0.5);
        }
    }, 500);
  };

  const stopSession = () => {
    setConnected(false);
    setStatus('Ready to connect');
    
    // Cleanup Audio
    if (processorRef.current) {
        processorRef.current.disconnect();
        processorRef.current = null;
    }
    if (sourceRef.current) {
        sourceRef.current.disconnect();
        sourceRef.current = null;
    }
    if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
    }
    if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
    }

    // Cleanup Video
    if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current);
        frameIntervalRef.current = null;
    }

    // Cleanup Session
    if (sessionPromiseRef.current) {
        sessionPromiseRef.current.then(session => session.close());
        sessionPromiseRef.current = null;
    }
  };

  // Utility helpers (needed here or imported)
  function base64ToUint8Array(base64: string): Uint8Array {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  return (
    <div className="h-full flex flex-col p-6 max-w-4xl mx-auto gap-6">
      <div className="text-center space-y-2">
         <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
           Live Interaction
         </h2>
         <p className="text-gray-400">Real-time multimodal conversation with Gemini 2.5.</p>
      </div>

      <div className="flex-1 bg-black rounded-2xl relative overflow-hidden border border-gray-800 shadow-2xl flex items-center justify-center">
         {/* Video Element (Hidden if disabled, but needed for stream source) */}
         <video 
            ref={videoRef} 
            className={`absolute inset-0 w-full h-full object-cover ${isVideoEnabled && connected ? 'opacity-100' : 'opacity-0'}`} 
            muted 
            playsInline 
         />
         <canvas ref={canvasRef} className="hidden" />

         {/* Placeholder / Visualizer */}
         {(!isVideoEnabled || !connected) && (
             <div className="flex flex-col items-center gap-6 z-10">
                 <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${connected ? 'bg-teal-500/20 animate-pulse-slow scale-110' : 'bg-gray-800'}`}>
                    <Radio size={48} className={connected ? 'text-teal-400' : 'text-gray-600'} />
                 </div>
                 <div className="text-xl font-mono text-teal-400">{status}</div>
             </div>
         )}
         
         {/* Overlay Controls */}
         <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
            <button 
                onClick={() => !connected && setIsVideoEnabled(!isVideoEnabled)}
                className={`p-4 rounded-full backdrop-blur-md transition-colors ${isVideoEnabled ? 'bg-white/10 text-white' : 'bg-black/40 text-gray-500'} ${connected ? 'cursor-not-allowed opacity-50' : 'hover:bg-white/20'}`}
                disabled={connected}
            >
                {isVideoEnabled ? <Video size={24} /> : <VideoOff size={24} />}
            </button>
            
            {!connected ? (
                <button 
                    onClick={startSession}
                    className="h-16 w-16 rounded-full bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center shadow-lg shadow-teal-500/30 transition-transform hover:scale-105 active:scale-95"
                >
                    <Mic size={28} />
                </button>
            ) : (
                <button 
                    onClick={stopSession}
                    className="h-16 w-16 rounded-full bg-red-500 hover:bg-red-400 text-white flex items-center justify-center shadow-lg shadow-red-500/30 transition-transform hover:scale-105 active:scale-95"
                >
                    <MicOff size={28} />
                </button>
            )}
         </div>
      </div>
      
      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 text-sm text-gray-400 text-center">
         <p>Voice: <strong>Zephyr</strong> • Latency: <strong>Low</strong> • Video: <strong>{isVideoEnabled ? 'Enabled' : 'Disabled'}</strong></p>
      </div>
    </div>
  );
};