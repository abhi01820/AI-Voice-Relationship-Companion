import { Heart, MessageCircle, Camera, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary-100 rounded-full">
                <Heart className="w-5 h-5 text-primary-600 fill-primary-600" />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">
                Soul<span className="text-primary-600">Sync</span>
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              A safe space to be heard, understood, and supported. Your AI emotional companion is here for you, 24/7.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-slate-500 hover:text-primary-600 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-slate-500 hover:text-primary-600 transition-colors">How it Works</a></li>
              <li><Link to="/pricing" className="text-slate-500 hover:text-primary-600 transition-colors">Pricing</Link></li>
              <li><a href="#testimonials" className="text-slate-500 hover:text-primary-600 transition-colors">Stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/crisis" className="text-rose-500 hover:text-rose-600 font-medium transition-colors">Crisis Resources</Link></li>
              <li><Link to="/help" className="text-slate-500 hover:text-primary-600 transition-colors">Help Center</Link></li>
              <li><Link to="/privacy" className="text-slate-500 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-500 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-6">Stay in Touch</h3>
            <p className="text-slate-500 mb-4">Get mental health tips and updates delivered to your inbox.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
              />
              <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SoulSync. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-slate-400 text-sm">
            <span>Made by Abhi  with</span>
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400 mx-1" />
            <span>for your well-being</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
