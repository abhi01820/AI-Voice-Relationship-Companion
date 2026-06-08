import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glassmorphism bg-white/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-primary-100 rounded-full">
              <Heart className="w-6 h-6 text-primary-600 fill-primary-600" />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              Soul<span className="text-primary-600">Sync</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">How it Works</a>
            <a href="#testimonials" className="text-slate-600 hover:text-primary-600 transition-colors font-medium">Stories</a>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Login
              </Link>
              <Link to="/register" className="bg-primary-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all transform hover:-translate-y-0.5">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-600 focus:outline-none"
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
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
              <a href="#features" className="block px-3 py-2 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium">How it Works</a>
              <a href="#testimonials" className="block px-3 py-2 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium">Stories</a>
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <Link to="/login" className="block w-full text-center text-primary-600 font-medium py-2 hover:bg-primary-50 rounded-lg">
                  Login
                </Link>
                <Link to="/register" className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 shadow-md">
                  Get Started
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
