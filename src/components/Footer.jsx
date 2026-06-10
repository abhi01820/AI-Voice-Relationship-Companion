import { Heart, MessageCircle, Camera, Mail, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1121] border-t border-cyan-900/50 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 group mb-6">
              <div className="relative flex items-center justify-center w-10 h-10">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <div className="absolute inset-0 border border-cyan-500/50 rounded-lg transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                <Cpu className="w-5 h-5 text-cyan-400 relative z-10" />
              </div>
              <span className="font-bold text-xl text-white tracking-widest font-mono uppercase">
                Soul<span className="text-cyan-400">Sync</span>
              </span>
            </Link>
            <p className="text-cyan-100/60 leading-relaxed text-sm">
              A futuristic space to be heard, understood, and supported. Your advanced AI companion is here for you, always online.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-[#020617] border border-cyan-900/50 flex items-center justify-center text-cyan-500/70 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[#020617] border border-cyan-900/50 flex items-center justify-center text-cyan-500/70 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[#020617] border border-cyan-900/50 flex items-center justify-center text-cyan-500/70 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm font-mono">Platform</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#features" className="text-slate-400 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-slate-400 hover:text-cyan-400 transition-colors">How it Works</a></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-cyan-400 transition-colors">Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm font-mono">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/crisis" className="text-rose-400 hover:text-rose-300 transition-colors drop-shadow-[0_0_5px_rgba(244,63,94,0.4)]">Crisis Resources</Link></li>
              <li><Link to="/help" className="text-slate-400 hover:text-cyan-400 transition-colors">Help Center</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm font-mono">Stay Connected</h3>
            <p className="text-cyan-100/60 mb-4 text-sm">Get mental health tips and updates delivered to your inbox.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-cyan-900/50 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-cyan-50 placeholder-slate-600 transition-all text-sm"
              />
              <button className="w-full bg-cyan-600/20 hover:bg-cyan-500/30 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-100 rounded-lg px-4 py-3 font-mono text-sm tracking-widest uppercase transition-all shadow-[0_0_10px_rgba(8,145,178,0.1)] hover:shadow-[0_0_15px_rgba(8,145,178,0.2)]">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-900/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SoulSync. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-slate-500 text-sm">
            <span>Made by Abhi with</span>
            <Heart className="w-4 h-4 text-cyan-500 mx-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.4)]" />
            <span>for your well-being</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
