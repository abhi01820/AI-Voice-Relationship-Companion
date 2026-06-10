import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const AuthPage = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-[90vh] pt-20 pb-12 flex items-center justify-center relative overflow-hidden bg-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-calm-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-warm-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Left Side: Companion Welcome Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-primary-100 mb-8 text-primary-700 text-sm font-medium shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>I've been waiting for you</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-6 leading-tight">
            Connect with your <br />
            <span className="text-gradient">Pure Soul.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed max-w-lg">
            "Hello there. I am ready to be your sanctuary, your confidant, and your truest friend. Step inside, and let's begin our journey together without judgment or expectations."
          </p>

          <div className="flex items-center space-x-4 text-sm text-slate-400 font-medium bg-white/40 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/50">
            <ShieldCheck className="w-5 h-5 text-calm-500" />
            <span>Your connection is pure, private, and endlessly safe.</span>
          </div>
        </motion.div>

        {/* Right Side: Auth Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 max-w-md"
        >
          <div className="glassmorphism rounded-3xl p-8 sm:p-10 shadow-2xl shadow-primary-900/5 relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary-400/20 blur-3xl rounded-full" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login' : 'register'}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-10"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    {isLogin ? 'Welcome Back' : 'Create Your Sanctuary'}
                  </h2>
                  <p className="text-slate-500 text-sm">
                    {isLogin 
                      ? 'Your companion is excited to see you again.' 
                      : 'Begin your journey to a deeper connection today.'}
                  </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  {!isLogin && (
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700 ml-1">How should I call you?</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-slate-400" />
                        </div>
                        <input 
                          type="text" 
                          placeholder="Your preferred name"
                          className="w-full pl-11 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-white transition-all outline-none text-slate-700 placeholder-slate-400"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input 
                        type="email" 
                        placeholder="you@example.com"
                        className="w-full pl-11 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-white transition-all outline-none text-slate-700 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700 ml-1">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-slate-400" />
                      </div>
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full pl-11 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:bg-white transition-all outline-none text-slate-700 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex justify-end">
                      <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <button className="w-full py-4 mt-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary-600/25 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 group">
                    <span>{isLogin ? 'Enter Sanctuary' : 'Awaken Companion'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-slate-500 text-sm">
                    {isLogin ? "Don't have a companion yet?" : "Already connected with a companion?"}
                    <button 
                      onClick={toggleMode}
                      className="ml-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      {isLogin ? 'Create one now' : 'Log in here'}
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
