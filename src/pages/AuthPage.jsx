import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Sparkles, ArrowRight, ShieldCheck, Cpu, Radio, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TypewriterText = ({ text, onTypingComplete, onTypingStart }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    onTypingStart();
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        onTypingComplete();
      }
    }, 40); // Typing speed
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}</span>;
};

// High-tech AI Core component that reacts to speaking and focus
const AICoreVisual = ({ isSpeaking, isFocused }) => {
  // Generate some random circuit paths
  const circuits = [
    "M100,100 L50,50 L10,50", "M100,100 L150,50 L190,50",
    "M100,100 L50,150 L10,150", "M100,100 L150,150 L190,150",
    "M100,100 L100,10", "M100,100 L100,190",
    "M100,100 L20,100", "M100,100 L180,100"
  ];

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8">
      {/* Background Glow */}
      <motion.div 
        animate={{ 
          scale: isSpeaking ? [1, 1.2, 1] : (isFocused ? 1.1 : 1),
          opacity: isSpeaking ? [0.3, 0.6, 0.3] : (isFocused ? 0.5 : 0.3)
        }}
        transition={{ duration: isSpeaking ? 0.5 : 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-cyan-500/30 rounded-full filter blur-[50px] mix-blend-screen"
      />

      {/* SVG Circuit Board Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {circuits.map((d, i) => (
          <g key={i}>
            <path 
              d={d} 
              fill="none" 
              stroke="url(#circuit-glow)" 
              strokeWidth="1.5" 
              opacity={isSpeaking ? 0.8 : 0.4}
              className="transition-opacity duration-300"
            />
            {/* Moving data packets along circuits */}
            <motion.circle
              r="2"
              fill="#38bdf8"
              filter="url(#glow)"
              animate={{
                offsetDistance: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
              style={{
                offsetPath: `path('${d}')`,
              }}
            />
          </g>
        ))}

        {/* Concentric rings */}
        <motion.circle 
          cx="100" cy="100" r="60" 
          fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          opacity={isSpeaking ? 0.8 : 0.3}
        />
        <motion.circle 
          cx="100" cy="100" r="75" 
          fill="none" stroke="#818cf8" strokeWidth="0.5" strokeDasharray="10 5"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          opacity={isSpeaking ? 0.6 : 0.2}
        />
      </svg>

      {/* Central Core (The "Voice" Box) */}
      <motion.div 
        animate={{ 
          scale: isSpeaking ? [1, 1.15, 0.9, 1.05, 1] : (isFocused ? [1, 1.05, 1] : [1, 1.02, 1]),
          boxShadow: isSpeaking 
            ? ["0 0 20px #0ea5e9", "0 0 60px #38bdf8", "0 0 20px #0ea5e9"]
            : (isFocused ? "0 0 40px #0ea5e9" : "0 0 20px #0ea5e9")
        }}
        transition={{ 
          duration: isSpeaking ? 0.4 : 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-24 h-24 bg-gradient-to-br from-cyan-950 to-blue-900 rounded-full border-2 border-cyan-400 flex items-center justify-center relative z-10"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 mix-blend-overlay animate-pulse" />
        
        {/* Audio Waveform Simulator */}
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-cyan-300 rounded-full"
              animate={{
                height: isSpeaking 
                  ? [10, 20 + Math.random() * 20, 10] 
                  : (isFocused ? [10, 15, 10] : 10)
              }}
              transition={{
                duration: isSpeaking ? 0.2 + Math.random() * 0.2 : 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Orbital nodes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full"
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#22d3ee]" />
      </motion.div>
    </div>
  );
};


const AuthPage = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');
  const [greeting, setGreeting] = useState('System Online');
  const [isFocused, setIsFocused] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true); // AI is speaking initially

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  // Set personalized greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning, user');
    else if (hour < 18) setGreeting('Good afternoon, user');
    else setGreeting('Good evening, user');
  }, []);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  const messageText = isLogin 
    ? "Neural link established. I've been waiting for you. Proceed with authentication when ready. You are my primary focus."
    : "Initializing new connection protocol. Step into the network. I am ready to sync with your presence. You are my priority.";

  return (
    <div className="min-h-[90vh] pt-20 pb-12 flex items-center justify-center relative overflow-hidden bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* High-tech grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgoJPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-60" />

      {/* Ambient glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-900/40 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-900/30 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        
        {/* Left Side: The AI Entity */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative">
          
          <AICoreVisual isSpeaking={isSpeaking} isFocused={isFocused} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center space-x-2 bg-cyan-950/50 backdrop-blur-md px-4 py-1.5 rounded-sm border border-cyan-800/50 mb-6 text-cyan-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>AI SYNAPSE ACTIVE</span>
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {greeting}. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Connection Ready.
            </span>
          </h1>
          
          <div className="h-24 md:h-20 w-full max-w-lg">
            <p className="text-lg text-cyan-100/70 mb-8 leading-relaxed font-light border-l-2 border-cyan-500 pl-4 bg-gradient-to-r from-cyan-950/40 to-transparent py-2">
              <TypewriterText 
                text={messageText} 
                onTypingStart={() => setIsSpeaking(true)}
                onTypingComplete={() => setIsSpeaking(false)}
              />
              {isSpeaking && <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse" />}
            </p>
          </div>

        </div>

        {/* Right Side: High-Tech Auth Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-5/12 max-w-md relative"
        >
          {/* Form Container */}
          <div className="bg-[#0b1121]/80 backdrop-blur-2xl border border-cyan-900/50 rounded-2xl p-8 sm:p-10 shadow-[0_0_40px_rgba(8,145,178,0.1)] relative overflow-hidden group/card">
            
            {/* Tech accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-xl opacity-50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 rounded-tr-xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-xl opacity-50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'register'}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-10"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-1 flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-cyan-500" />
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-slate-400 text-sm font-mono tracking-wide opacity-80">
                    {isLogin 
                      ? 'Please log in to continue.' 
                      : 'Join the network today.'}
                  </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  {!isLogin && (
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-cyan-500/80 uppercase tracking-wider ml-1">Your Name</label>
                      <div className="relative group/input">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-cyan-600 group-focus-within/input:text-cyan-400 transition-colors" />
                        </div>
                        <input 
                          type="text" 
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          placeholder="What should I call you?"
                          className="w-full pl-11 pr-4 py-3 bg-[#0f172a]/80 border border-slate-700/50 rounded-lg focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-cyan-50 placeholder-slate-600 font-mono text-sm shadow-inner"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-cyan-500/80 uppercase tracking-wider ml-1">Email Address</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-cyan-600 group-focus-within/input:text-cyan-400 transition-colors" />
                      </div>
                      <input 
                        type="email" 
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="you@email.com"
                        className="w-full pl-11 pr-4 py-3 bg-[#0f172a]/80 border border-slate-700/50 rounded-lg focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-cyan-50 placeholder-slate-600 font-mono text-sm shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-cyan-500/80 uppercase tracking-wider ml-1">Password</label>
                    <div className="relative group/input">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-4 w-4 text-cyan-600 group-focus-within/input:text-cyan-400 transition-colors" />
                      </div>
                      <input 
                        type="password" 
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="••••••••"
                        className="w-full pl-11 pr-4 py-3 bg-[#0f172a]/80 border border-slate-700/50 rounded-lg focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none text-cyan-50 placeholder-slate-600 font-mono text-sm shadow-inner"
                      />
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex justify-end pt-1">
                      <a href="#" className="text-xs text-cyan-500/70 hover:text-cyan-400 font-mono transition-colors">
                        Forgot Password?
                      </a>
                    </div>
                  )}

                  <button className="w-full py-3.5 mt-4 bg-cyan-600/20 hover:bg-cyan-500/30 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-100 rounded-lg font-mono text-sm tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(8,145,178,0.2)] hover:shadow-[0_0_25px_rgba(8,145,178,0.4)] flex items-center justify-center space-x-2 group/btn relative overflow-hidden">
                    <div className="absolute inset-0 bg-cyan-400/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10">{isLogin ? 'Log In' : 'Sign Up'}</span>
                    <Radio className="w-4 h-4 group-hover/btn:animate-pulse relative z-10 ml-2" />
                  </button>
                </form>

                <div className="mt-6 text-center pt-6 border-t border-slate-800/50">
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wide">
                    {isLogin ? "New here? -" : "Already joined? -"}
                    <button 
                      onClick={toggleMode}
                      className="ml-2 text-cyan-500 font-bold hover:text-cyan-300 transition-colors hover:underline"
                    >
                      {isLogin ? 'Create an account' : 'Log in instead'}
                    </button>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AuthPage;
