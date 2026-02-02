import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/gemini';
import { ChatMessage } from '../types';
import { Button } from '../components/Button';
import { Send, User, Bot } from 'lucide-react';

export const ChatPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hello! I am your advanced AI assistant. How can I help you today?', timestamp: Date.now() }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Prepare history for API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await generateChatResponse('gemini-3-flash-preview', history, userMsg.text);
      
      const botMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: "Sorry, I encountered an error. Please try again.", timestamp: Date.now() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Gemini Chat</h2>
        <p className="text-sm text-gray-400">Powered by Gemini 3 Flash</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-purple-600'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`p-3 rounded-2xl max-w-[80%] ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-gray-800 text-gray-100 rounded-tl-none border border-gray-700'
            }`}>
              <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-start gap-3">
             <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
               <Bot size={16} />
             </div>
             <div className="p-3 rounded-2xl bg-gray-800 border border-gray-700 rounded-tl-none">
               <div className="flex gap-1">
                 <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                 <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                 <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
               </div>
             </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading}
          />
          <Button onClick={handleSend} disabled={loading || !input.trim()}>
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};