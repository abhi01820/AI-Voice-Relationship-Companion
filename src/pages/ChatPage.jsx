import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Activity, MoreHorizontal, User } from 'lucide-react';
import { companions } from '../utils/companions';

const ChatPage = () => {
  const { companionId } = useParams();
  
  // Find the requested companion, fallback to the first one if not found
  const companion = companions.find(c => c.id === companionId) || companions[0];
  
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: companion.greeting, timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { 
          id: Date.now(), 
          sender: 'ai', 
          text: `I am here with you. Thank you for sharing that. Keep going, I am listening.`,
          timestamp: new Date()
        }
      ]);
    }, 2500);
  };

  return (
    <div className={`relative min-h-screen flex flex-col bg-gradient-to-br ${companion.bgTheme} text-slate-50 font-sans selection:bg-white/30 selection:text-white transition-colors duration-1000`}>
      
      {/* Background Starry Ambience */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgoJPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-30 pointer-events-none" />

      {/* Top Navigation Bar */}
      <div className="bg-[#0b1121]/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-white/70 hover:text-white" />
          </Link>
          <div className="flex items-center space-x-3">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
              style={{ background: companion.planetGradient }}
            >
              <span className="text-lg drop-shadow-md">{companion.emoji}</span>
              <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${companion.accent} border-2 border-slate-900 shadow-[0_0_10px_currentColor]`} />
            </div>
            <div>
              <h2 className="font-bold text-white leading-tight drop-shadow-md">{companion.name}</h2>
              <p className={`text-xs ${companion.text} font-mono flex items-center brightness-150`}>
                <span className={`w-1.5 h-1.5 rounded-full ${companion.accent} mr-1.5 animate-pulse`} />
                Online
              </p>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 relative z-10">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] sm:max-w-[70%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.sender === 'user' 
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 ml-3' 
                    : `mr-3 shadow-lg`
                }`}
                style={msg.sender === 'ai' ? { background: companion.planetGradient } : {}}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4 text-white/70" /> : <span className="text-sm drop-shadow-md">{companion.emoji}</span>}
                </div>

                {/* Message Bubble */}
                <div className={`p-4 rounded-2xl backdrop-blur-md shadow-xl ${
                  msg.sender === 'user'
                    ? 'bg-white/20 border border-white/20 text-white rounded-tr-none'
                    : `bg-black/40 border border-white/10 text-white/90 rounded-tl-none`
                }`}>
                  <p className="leading-relaxed text-[15px]">{msg.text}</p>
                  <span className={`text-[10px] uppercase font-mono mt-2 block ${msg.sender === 'user' ? 'text-white/50 text-right' : 'text-white/50'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex justify-start"
            >
              <div className="flex max-w-[85%] sm:max-w-[70%] flex-row">
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-lg"
                  style={{ background: companion.planetGradient }}
                >
                  <span className="text-sm drop-shadow-md">{companion.emoji}</span>
                </div>
                <div className="bg-black/40 border border-white/10 backdrop-blur-md p-4 rounded-2xl rounded-tl-none flex items-center space-x-2 shadow-xl">
                  <motion.div className={`w-2 h-2 rounded-full ${companion.accent}`} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.div className={`w-2 h-2 rounded-full ${companion.accent}`} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.div className={`w-2 h-2 rounded-full ${companion.accent}`} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-black/30 backdrop-blur-2xl border-t border-white/10 p-4 z-20 sticky bottom-0">
        <div className="max-w-4xl mx-auto relative">
          <form onSubmit={handleSend} className="relative flex items-center group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message your companion..."
              className="w-full bg-black/40 border border-white/20 rounded-full py-4 pl-6 pr-14 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`absolute right-2 p-2.5 rounded-full ${
                input.trim() && !isTyping
                  ? `${companion.accent} text-white shadow-[0_0_15px_currentColor]`
                  : 'bg-white/10 text-white/30'
              } transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Send className="w-5 h-5 ml-0.5" />
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default ChatPage;
