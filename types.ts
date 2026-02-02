
export enum AppView {
  HOME = 'HOME',
  CHAT = 'CHAT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  LIVE = 'LIVE'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}

export interface GeneratedVideo {
  url: string;
  prompt: string;
}

// Added interfaces for WiseBot Academy usage in constants.tsx
export interface Character {
  id: string;
  name: string;
  role: string | { el: string; en: string };
  image: string;
  motto?: string;
  description?: string | { el: string; en: string };
  color: string;
  avatar?: string; // For compatibility
}

export interface LocalizedString {
  el: string;
  en: string;
}

export interface QuizQuestion {
  q: LocalizedString;
  options: {
    el: string[];
    en: string[];
  };
  correct: number;
  explanation?: LocalizedString;
}

export interface Book {
  id: number | string; // Allow both for compatibility across components
  title: string | LocalizedString;
  author: string;
  category?: string;
  theme?: LocalizedString;
  coverImage?: string;
  cover?: string; // Compatibility
  locked?: boolean;
  requiredXp?: number;
  xp?: number;
  description?: LocalizedString;
  meaning?: LocalizedString;
  content?: LocalizedString;
  videoUrl?: string;
  questions?: QuizQuestion[];
  stepLabel?: LocalizedString;
}

// Declarations for window.aistudio
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    webkitAudioContext: typeof AudioContext;
    aistudio?: AIStudio;
  }
}
