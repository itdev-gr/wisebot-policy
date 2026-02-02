
import { GoogleGenAI, GenerateContentResponse, Modality } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

// Chat / Text
export const generateChatResponse = async (
  model: string,
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: model,
    history: history,
  });

  const result = await chat.sendMessage({ message });
  return result.text || "";
};

// Image Generation
export const generateImage = async (prompt: string): Promise<string> => {
  const ai = getAI();
  // Using gemini-2.5-flash-image for better quota and speed (Nano Banana)
  // unless explicitly needing pro features
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }],
    },
    // imageConfig is not needed/supported for flash-image in the same way as pro-image-preview
    // Remove complex config for the basic flash model
  });

  if (response.candidates && response.candidates[0].content.parts) {
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }
  throw new Error("No image generated");
};

// Video Generation (Veo)
export const generateVideo = async (prompt: string): Promise<string> => {
  // Always create a new instance to pick up the selected key if changed
  const ai = getAI(); 
  
  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt,
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: '16:9'
    }
  });

  // Polling
  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 5000)); // 5s poll
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!downloadLink) throw new Error("Video generation failed or returned no URI");

  // Fetch the actual bytes to create a local blob URL for playback
  // Must append API Key
  const videoRes = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  if (!videoRes.ok) throw new Error("Failed to download video bytes");
  
  const blob = await videoRes.blob();
  return URL.createObjectURL(blob);
};

// Live API Connection Helper
// Returns the session promise so the caller can send inputs
export const connectLiveSession = async (
  onOpen: () => void,
  onMessage: (msg: any) => void,
  onError: (e: any) => void,
  onClose: (e: any) => void
): Promise<any> => {
  const ai = getAI();
  return ai.live.connect({
    model: 'gemini-2.5-flash-native-audio-preview-12-2025',
    callbacks: {
      onopen: onOpen,
      onmessage: onMessage,
      onerror: onError,
      onclose: onClose,
    },
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
      },
    },
  });
};
