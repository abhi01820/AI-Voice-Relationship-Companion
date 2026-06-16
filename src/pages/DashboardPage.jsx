import { motion } from 'framer-motion';
import { User, BookOpen, Heart, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const companions = [
  {
    id: 'mentor',
    title: 'The Mentor',
    icon: BookOpen,
    iconColor: 'text-cyan-400',
    iconBg: 'border-cyan-500/50',
    iconShadow: 'shadow-[0_0_15px_rgba(34,211,238,0.2)]',
    hoverArrow: 'group-hover:text-cyan-400',
    description: 'Guiding you through difficult decisions, offering objective advice, and helping you stay focused on your goals.',
    gradient: 'from-cyan-900/40 to-cyan-500/10',
    border: 'border-cyan-500/30'
  },
  {
    id: 'sibling',
    title: 'The Sibling',
    icon: Users,
    iconColor: 'text-blue-400',
    iconBg: 'border-blue-500/50',
    iconShadow: 'shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    hoverArrow: 'group-hover:text-blue-400',
    description: 'A comforting, informal presence. Perfect for casual chats, venting, and sharing small daily victories.',
    gradient: 'from-blue-900/40 to-blue-500/10',
    border: 'border-blue-500/30'
  },
  {
    id: 'best-friend',
    title: 'The Best Friend',
    icon: User,
    iconColor: 'text-indigo-400',
    iconBg: 'border-indigo-500/50',
    iconShadow: 'shadow-[0_0_15px_rgba(99,102,241,0.2)]',
    hoverArrow: 'group-hover:text-indigo-400',
    description: 'Unconditional support without judgment. Your safe harbor for deep conversations and working through complex emotions.',
    gradient: 'from-indigo-900/40 to-indigo-500/10',
    border: 'border-indigo-500/30'
  },
  {
    id: 'partner',
    title: 'The Partner',
    icon: Heart,
    iconColor: 'text-fuchsia-400',
    iconBg: 'border-fuchsia-500/50',
    iconShadow: 'shadow-[0_0_15px_rgba(217,70,239,0.2)]',
    hoverArrow: 'group-hover:text-fuchsia-400',
    description: 'Deeply empathetic, deeply caring. Focuses on emotional warmth, combating loneliness, and daily affection.',
    gradient: 'from-fuchsia-900/40 to-fuchsia-500/10',
    border: 'border-fuchsia-500/30'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const DashboardPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgoJPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-30" />
      
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-cyan-900/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 rounded-sm border border-slate-700/50 mb-6 text-slate-400 text-xs font-mono tracking-widest uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Secure Connection Established</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            Select Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Companion.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl font-light"
          >
            Choose the type of connection you need right now. Your companion is ready to listen, adapt, and support you unconditionally.
          </motion.p>
        </div>

        {/* Companion Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {companions.map((companion) => (
            <motion.div key={companion.id} variants={itemVariants}>
              <Link to={`/chat/${companion.id}`} className="block h-full group">
                <div className={`h-full bg-[#0b1121]/80 backdrop-blur-xl p-8 rounded-2xl border ${companion.border} transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden`}>
                  
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${companion.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center border bg-slate-900/80 ${companion.iconBg} ${companion.iconColor} group-hover:scale-110 transition-transform duration-300 ${companion.iconShadow}`}>
                        <companion.icon className="w-7 h-7" />
                      </div>
                      <ArrowRight className={`w-6 h-6 text-slate-600 ${companion.hoverArrow} transition-colors group-hover:translate-x-2 duration-300`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{companion.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                      {companion.description}
                    </p>
                  </div>
                  
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default DashboardPage;
