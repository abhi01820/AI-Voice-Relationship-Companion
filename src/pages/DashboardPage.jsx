import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companions } from '../utils/companions';

const DashboardPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextPlanet();
      } else if (e.key === 'ArrowLeft') {
        prevPlanet();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const nextPlanet = () => {
    setActiveIndex((prev) => (prev + 1) % companions.length);
  };

  const prevPlanet = () => {
    setActiveIndex((prev) => (prev - 1 + companions.length) % companions.length);
  };

  const activeCompanion = companions[activeIndex];

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-sans text-slate-50">
      
      {/* Dynamic Backgrounds (Cross-fading) */}
      {companions.map((comp, idx) => (
        <div
          key={`bg-${comp.id}`}
          className={`absolute inset-0 bg-gradient-to-br ${comp.bgTheme} transition-opacity duration-1000 ease-in-out z-0`}
          style={{ opacity: idx === activeIndex ? 1 : 0 }}
        />
      ))}
      
      {/* Starry Ambience */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgoJPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-30 z-0 pointer-events-none" />

      {/* Header UI overlay */}
      <div className="absolute top-24 left-0 w-full px-8 flex justify-between items-center z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-sm border border-slate-700/50 text-slate-300 text-xs font-mono tracking-widest uppercase"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Select Identity</span>
        </motion.div>
        
        <div className="text-right">
          <p className="text-sm font-mono tracking-widest uppercase opacity-60">System Core</p>
          <p className="font-bold tracking-widest">AWAITING CONNECTION</p>
        </div>
      </div>

      {/* Main Carousel Area */}
      <div className="relative w-full max-w-7xl mx-auto h-[600px] flex items-center justify-center z-10 perspective-1000">
        
        <AnimatePresence mode="popLayout">
          {companions.map((comp, idx) => {
            // Calculate relative position (-1, 0, 1) or out of bounds
            let relativeIndex = idx - activeIndex;
            if (relativeIndex > companions.length / 2) relativeIndex -= companions.length;
            if (relativeIndex < -companions.length / 2) relativeIndex += companions.length;
            
            // Only render adjacent planets
            if (Math.abs(relativeIndex) > 2) return null;

            const isCenter = relativeIndex === 0;
            const isLeft = relativeIndex < 0;
            const isRight = relativeIndex > 0;
            
            // Scale and positioning based on distance from center
            const xOffset = relativeIndex * 250; // Distance between planets
            const scale = isCenter ? 1 : Math.max(0.4, 1 - Math.abs(relativeIndex) * 0.3);
            const zIndex = isCenter ? 30 : 20 - Math.abs(relativeIndex);
            const opacity = isCenter ? 1 : Math.max(0.2, 1 - Math.abs(relativeIndex) * 0.4);

            return (
              <motion.div
                key={comp.id}
                layout
                initial={{ opacity: 0, x: xOffset + 100 * Math.sign(relativeIndex) }}
                animate={{ opacity, x: xOffset, scale }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute flex flex-col items-center justify-center cursor-pointer"
                style={{ zIndex }}
                onClick={() => {
                  if (!isCenter) setActiveIndex(idx);
                }}
              >
                {/* The Planet Orb */}
                <div 
                  className={`relative rounded-full shadow-[0_0_80px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden transition-all duration-500`}
                  style={{ 
                    width: isCenter ? '280px' : '160px', 
                    height: isCenter ? '280px' : '160px',
                    background: comp.planetGradient,
                    boxShadow: isCenter ? `0 0 100px ${comp.planetGradient.split(',')[1].trim()}` : '0 0 20px rgba(0,0,0,0.5)'
                  }}
                >
                  {/* Inner glow/texture */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgoJPC9zdmc+')] mix-blend-overlay opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Emoji / Icon */}
                  <span className={`relative z-10 drop-shadow-2xl ${isCenter ? 'text-7xl' : 'text-4xl'}`}>
                    {comp.emoji}
                  </span>
                </div>

                {/* Planet Info (Only show if centered) */}
                <AnimatePresence>
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-full mt-10 w-80 text-center"
                    >
                      <h2 className="text-4xl font-bold tracking-tight mb-3 text-white drop-shadow-lg">
                        {comp.name}
                      </h2>
                      <p className="text-slate-300 font-light leading-relaxed mb-6">
                        {comp.description}
                      </p>
                      <Link 
                        to={`/chat/${comp.id}`} 
                        className={`inline-flex items-center justify-center px-8 py-3 ${comp.accent} hover:brightness-110 text-white rounded-full font-mono text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105`}
                      >
                        <Activity className="w-4 h-4 mr-2 animate-pulse" />
                        Connect
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-12 z-30">
        <button 
          onClick={prevPlanet}
          className="w-14 h-14 rounded-full border border-slate-700 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/70 hover:text-white"
        >
          <ChevronLeft className="w-6 h-6 -ml-1" />
        </button>
        <div className="flex space-x-2">
          {companions.map((_, i) => (
            <div 
              key={`dot-${i}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/20'}`}
            />
          ))}
        </div>
        <button 
          onClick={nextPlanet}
          className="w-14 h-14 rounded-full border border-slate-700 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/70 hover:text-white"
        >
          <ChevronRight className="w-6 h-6 -mr-1" />
        </button>
      </div>

    </div>
  );
};

export default DashboardPage;
