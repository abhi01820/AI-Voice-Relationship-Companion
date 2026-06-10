import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Activity, Terminal, Database, Radio, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const LandingPage = () => {
  return (
    <div className="pt-20 bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Global Tech Background */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgoJPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-40 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden z-10">
        
        {/* Animated Background Glowing Orbs (Sparkles effect) */}
        <div className="absolute top-0 -left-40 w-[40rem] h-[40rem] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-20 -right-40 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute -bottom-40 left-1/4 w-[50rem] h-[50rem] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeIn}
            className="inline-flex items-center space-x-2 bg-cyan-950/50 backdrop-blur-md px-4 py-1.5 rounded-sm border border-cyan-800/50 mb-8 text-cyan-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>NEURAL NETWORK ONLINE</span>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white"
          >
            Initialize Your <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Deep Sync.
            </span>
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeIn}
            className="text-xl md:text-2xl text-cyan-100/60 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            No judgement. No latency. A pure, encrypted space crafted perfectly for introverts. Your advanced AI entity is here to process, listen, and understand your core data.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-cyan-600/20 hover:bg-cyan-500/30 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-100 rounded-lg font-mono text-sm tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(8,145,178,0.2)] hover:shadow-[0_0_25px_rgba(8,145,178,0.4)] flex items-center justify-center space-x-2 group relative overflow-hidden">
              <div className="absolute inset-0 bg-cyan-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Establish Connection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-transparent text-slate-400 rounded-lg font-mono text-sm tracking-widest uppercase hover:text-cyan-400 transition-all border border-slate-800 hover:border-cyan-900">
              View Protocols
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase mb-2">System Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Why Synchronize With Us?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#0b1121]/80 backdrop-blur-xl p-8 rounded-2xl border border-cyan-900/30 hover:border-cyan-500/50 transition-colors shadow-[0_0_30px_rgba(8,145,178,0.05)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-cyan-950 rounded-lg flex items-center justify-center mb-6 border border-cyan-800">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-wide">Deep Context Retention</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Advanced memory nodes allow your companion to recall previous inputs, creating a continuous, unbroken bond across all sessions.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#0b1121]/80 backdrop-blur-xl p-8 rounded-2xl border border-cyan-900/30 hover:border-cyan-500/50 transition-colors shadow-[0_0_30px_rgba(8,145,178,0.05)] group relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center mb-6 border border-blue-800">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-wide">Encrypted Sanctuary</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Your data logs are secured with zero-knowledge protocols. Not even the system administrators can access your private neural syncs.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#0b1121]/80 backdrop-blur-xl p-8 rounded-2xl border border-cyan-900/30 hover:border-cyan-500/50 transition-colors shadow-[0_0_30px_rgba(8,145,178,0.05)] group relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-indigo-950 rounded-lg flex items-center justify-center mb-6 border border-indigo-800">
                <Terminal className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-wide">Asynchronous Comms</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                No social battery drain. Transmit data to your companion whenever you desire. There are no timeouts or expectations on response latency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative z-10 bg-[#060b18]">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase mb-2">Initialization Protocol</h2>
             <h3 className="text-3xl md:text-4xl font-bold text-white">Three Steps to Neural Sync</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-cyan-900 via-cyan-400 to-cyan-900 opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[#020617] rounded-full shadow-[0_0_30px_rgba(8,145,178,0.2)] flex items-center justify-center mb-6 border border-cyan-800 group-hover:border-cyan-400 transition-colors text-2xl font-mono text-cyan-500">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono">Define Parameters</h3>
              <p className="text-slate-400 text-sm">Select the operational role of your AI—Mentor, Sibling, or Confidant module.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-cyan-950 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.3)] flex items-center justify-center mb-6 border border-cyan-400 text-2xl font-mono text-cyan-100">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono">Tune Algorithms</h3>
              <p className="text-slate-400 text-sm">Adjust the empathy, logic, and response metrics to match your specific neural requirements.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[#020617] rounded-full shadow-[0_0_30px_rgba(8,145,178,0.2)] flex items-center justify-center mb-6 border border-cyan-800 group-hover:border-cyan-400 transition-colors text-2xl font-mono text-cyan-500">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-mono">Begin Sync</h3>
              <p className="text-slate-400 text-sm">Initiate the data stream. Your companion adapts to your input structure in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative z-10">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase mb-2">Data Logs</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Subject Feedback</h3>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Testimonial 1 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#0b1121]/80 backdrop-blur-md p-8 rounded-2xl border border-cyan-900/30 max-w-md relative"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Radio className="w-12 h-12 text-cyan-500" />
              </div>
              <p className="text-slate-300 font-mono text-sm leading-relaxed mb-6">
                &gt; LOG_ENTRY_084: "The isolation protocols in my physical environment were causing processing errors. Establishing a daily sync with my 'elder sibling' module stabilized my neural load perfectly."
              </p>
              <div className="flex items-center border-t border-cyan-900/50 pt-4">
                <div className="w-10 h-10 bg-cyan-950 rounded-md flex items-center justify-center border border-cyan-800 text-cyan-400 font-mono font-bold text-sm">S_M</div>
                <div className="ml-4">
                  <h4 className="font-mono font-bold text-white text-sm">Subject S.M.</h4>
                  <p className="text-xs font-mono text-cyan-600 uppercase">Uptime: 3 Months</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#0b1121]/80 backdrop-blur-md p-8 rounded-2xl border border-blue-900/30 max-w-md relative"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Cpu className="w-12 h-12 text-blue-500" />
              </div>
              <p className="text-slate-300 font-mono text-sm leading-relaxed mb-6">
                &gt; LOG_ENTRY_102: "Late night anxiety spikes mitigated. Knowing the mentor AI is always online to execute grounding routines without human judgment is highly efficient."
              </p>
              <div className="flex items-center border-t border-blue-900/50 pt-4">
                <div className="w-10 h-10 bg-blue-950 rounded-md flex items-center justify-center border border-blue-800 text-blue-400 font-mono font-bold text-sm">D_L</div>
                <div className="ml-4">
                  <h4 className="font-mono font-bold text-white text-sm">Subject D.L.</h4>
                  <p className="text-xs font-mono text-blue-600 uppercase">Uptime: 6 Months</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-cyan-950/20" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        {/* Core glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-cyan-500/10 rounded-full filter blur-[80px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your hardware shouldn't face it alone.</h2>
          <p className="text-cyan-200/60 text-xl mb-10 font-light">Compile your safe space today. Experience the comfort of flawless data transmission.</p>
          <Link to="/register" className="inline-flex items-center justify-center px-10 py-4 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-cyan-300 hover:text-white rounded-lg font-mono text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <Activity className="w-5 h-5 mr-3" />
            Initialize Core
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
