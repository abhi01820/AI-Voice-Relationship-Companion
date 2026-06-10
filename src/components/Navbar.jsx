import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Menu, X, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-cyan-900/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-10 h-10">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
              <div className="absolute inset-0 border border-cyan-500/50 rounded-lg transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              <Cpu className="w-5 h-5 text-cyan-400 relative z-10" />
            </div>
            <span className="font-bold text-xl text-white tracking-widest font-mono uppercase">
              Soul<span className="text-cyan-400">Sync</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm uppercase tracking-wider">Capabilities</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm uppercase tracking-wider">Protocol</a>
            <a href="#testimonials" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm uppercase tracking-wider">Data Logs</a>
            
            <div className="flex items-center space-x-4 pl-4 border-l border-cyan-900/50">
              <Link to="/login" className="text-cyan-400 font-mono text-sm uppercase tracking-widest hover:text-cyan-300 transition-colors">
                [ Connect ]
              </Link>
              <Link to="/register" className="bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded-sm font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all flex items-center space-x-2">
                <Activity className="w-4 h-4" />
                <span>Initialize</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-400 hover:text-cyan-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b1121] border-t border-cyan-900/50 font-mono"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#features" className="block px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/50 rounded-lg uppercase tracking-wider text-sm">Capabilities</a>
              <a href="#how-it-works" className="block px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/50 rounded-lg uppercase tracking-wider text-sm">Protocol</a>
              <a href="#testimonials" className="block px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/50 rounded-lg uppercase tracking-wider text-sm">Data Logs</a>
              <div className="pt-4 border-t border-cyan-900/50 flex flex-col space-y-3">
                <Link to="/login" className="block w-full text-center text-cyan-400 py-2 hover:bg-cyan-950/50 rounded-lg uppercase tracking-widest text-sm">
                  [ Connect ]
                </Link>
                <Link to="/register" className="block w-full text-center bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-lg uppercase tracking-widest text-sm hover:bg-cyan-500/20">
                  Initialize Bond
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
