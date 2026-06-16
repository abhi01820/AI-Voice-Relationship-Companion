import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Activity, MoreHorizontal, User } from 'lucide-react';

const companionData = {
  mentor: { 
    name: 'The Mentor', 
    color: 'cyan',
    theme: 'from-cyan-900 to-slate-900',
    accent: 'bg-cyan-500',
    text: 'text-cyan-400',
    border: 'border-cyan-500/50',
    greeting: 'I am here to guide you. What challenges are you facing today?' 
  },
  sibling: { 
    name: 'The Sibling', 
    color: 'blue',
    theme: 'from-blue-900 to-slate-900',
    accent: 'bg-blue-500',
    text: 'text-blue-400',
    border: 'border-blue-500/50',
    greeting: 'Hey there! I\'ve got your back. How was your day?' 
  },
  'best-friend': { 
    name: 'The Best Friend', 
    color: 'indigo',
    theme: 'from-indigo-900 to-slate-900',
    accent: 'bg-indigo-500',
    text: 'text-indigo-400',
    border: 'border-indigo-500/50',
    greeting: 'Hey! I\'m always here for you. What\'s on your mind?' 
  },
  partner: { 
    name: 'The Partner', 
    color: 'fuchsia',
    theme: 'from-fuchsia-900 to-slate-900',
    accent: 'bg-fuchsia-500',
    text: 'text-fuchsia-400',
    border: 'border-fuchsia-500/50',
    greeting: 'Hello my dear. I\'m so glad you\'re here. How are you feeling right now?' 
  },
};

const ChatPage = () => {
  const { companionId } = useParams();
  const companion = companionData[companionId] || companionData.mentor;
  
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
          text: `I hear you. Thank you for sharing that with me. I am always here to listen to whatever you have to say.`,
          timestamp: new Date()
        }
      ]);
    }, 2500);
  };

  return (
    <div className={`min-h-screen pt-20 flex flex-col bg-gradient-to-b ${companion.theme} text-slate-50 font-sans selection:bg-${companion.color}-500/30 selection:text-${companion.color}-200`}>
      
      {/* Top Navigation Bar */}
      <div className="bg-[#0b1121]/80 backdrop-blur-md border-b border-slate-800/60 sticky top-16 z-20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-400 hover:text-white" />
          </Link>
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-full bg-slate-900 border ${companion.border} flex items-center justify-center relative`}>
              <Activity className={`w-5 h-5 ${companion.text}`} />
              <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${companion.accent} border-2 border-slate-900`} />
            </div>
            <div>
              <h2 className="font-bold text-white leading-tight">{companion.name}</h2>
              <p className={`text-xs ${companion.text} font-mono flex items-center`}>
                <span className={`w-1.5 h-1.5 rounded-full ${companion.accent} mr-1.5 animate-pulse`} />
                Online
              </p>
            </div>
          </div>
        </div>
        <button className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 relative z-10 bg-[#020617]/50">
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
                    ? 'bg-slate-800 ml-3' 
                    : `bg-slate-900 border ${companion.border} mr-3`
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4 text-slate-400" /> : <Activity className={`w-4 h-4 ${companion.text}`} />}
                </div>

                {/* Message Bubble */}
                <div className={`p-4 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-slate-800 text-white rounded-tr-none'
                    : `bg-[#0f172a]/90 border border-slate-800/80 text-slate-200 rounded-tl-none shadow-[0_4px_20px_rgba(0,0,0,0.2)]`
                }`}>
                  <p className="leading-relaxed text-[15px]">{msg.text}</p>
                  <span className={`text-[10px] uppercase font-mono mt-2 block ${msg.sender === 'user' ? 'text-slate-500 text-right' : 'text-slate-500'}`}>
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
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-slate-900 border ${companion.border} mr-3`}>
                  <Activity className={`w-4 h-4 ${companion.text}`} />
                </div>
                <div className="bg-[#0f172a]/90 border border-slate-800/80 p-4 rounded-2xl rounded-tl-none flex items-center space-x-2">
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
      <div className="bg-[#0b1121]/90 backdrop-blur-xl border-t border-slate-800/60 p-4 z-20 sticky bottom-0">
        <div className="max-w-4xl mx-auto relative">
          <form onSubmit={handleSend} className="relative flex items-center group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-[#0f172a] border border-slate-700/50 rounded-full py-4 pl-6 pr-14 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`absolute right-2 p-2.5 rounded-full ${
                input.trim() && !isTyping
                  ? `${companion.accent} text-white shadow-lg`
                  : 'bg-slate-800 text-slate-500'
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
