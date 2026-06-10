import { Heart, MessageCircle, Mail, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1121] border-t border-cyan-900/50 py-8 font-sans z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Link to="/" className="flex items-center space-x-2 group">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-lg text-white tracking-widest font-mono uppercase">
              Soul<span className="text-cyan-400">Sync</span>
            </span>
          </Link>
          <div className="flex items-center space-x-1 text-slate-500 text-xs">
            <span>Made by Abhi with</span>
            <Heart className="w-3 h-3 text-cyan-500 drop-shadow-[0_0_5px_rgba(6,182,212,0.4)]" />
            <span>for your well-being</span>
          </div>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} SoulSync. All rights reserved.
          </p>
        </div>

        {/* Middle: Essential Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-mono uppercase tracking-wider">
           <a href="#features" className="text-slate-400 hover:text-cyan-400 transition-colors text-xs">Features</a>
           <a href="#how-it-works" className="text-slate-400 hover:text-cyan-400 transition-colors text-xs">Protocol</a>
           <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors text-xs">Privacy</Link>
           <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors text-xs">Terms</Link>
           <Link to="/crisis" className="text-rose-400/80 hover:text-rose-300 transition-colors text-xs drop-shadow-[0_0_5px_rgba(244,63,94,0.3)]">Crisis Support</Link>
        </div>

        {/* Right Side: Quick Contact */}
        <div className="flex space-x-3">
          <a href="#" className="w-9 h-9 rounded-lg bg-[#020617] border border-cyan-900/50 flex items-center justify-center text-cyan-500/70 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="#" className="w-9 h-9 rounded-lg bg-[#020617] border border-cyan-900/50 flex items-center justify-center text-cyan-500/70 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all">
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
