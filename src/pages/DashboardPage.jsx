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
    <div className="relative h-screen w-full overflow-hidden flex flex-col font-sans text-slate-50">
      
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
      <div className="absolute top-6 left-0 w-full px-4 sm:px-8 flex justify-between items-center z-30">
        <Link to="/" className="inline-flex items-center space-x-2 bg-black/40 hover:bg-black/60 transition-colors backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white/80 hover:text-white text-xs font-mono tracking-widest uppercase">
          <ChevronLeft className="w-4 h-4 -ml-1" />
          <span>Exit Interface</span>
        </Link>
        
        <div className="text-right pointer-events-none hidden sm:block">
          <p className="text-sm font-mono tracking-widest uppercase opacity-60">System Core</p>
          <p className="font-bold tracking-widest">AWAITING CONNECTION</p>
        </div>
      </div>

      {/* Main Carousel Area */}
      <div className="flex-1 relative w-full flex items-center justify-center z-10 perspective-1000">
        
        {/* Navigation Arrows (Side) */}
        <button 
          onClick={prevPlanet}
          className="absolute left-4 sm:left-12 z-40 w-14 h-14 rounded-full border border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/70 hover:text-white hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8 -ml-1" />
        </button>

        <button 
          onClick={nextPlanet}
          className="absolute right-4 sm:right-12 z-40 w-14 h-14 rounded-full border border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all text-white/70 hover:text-white hover:scale-110"
        >
          <ChevronRight className="w-8 h-8 -mr-1" />
        </button>

        <AnimatePresence mode="popLayout">
          {companions.map((comp, idx) => {
            // Calculate relative position (-1, 0, 1) or out of bounds
            let relativeIndex = idx - activeIndex;
            if (relativeIndex > companions.length / 2) relativeIndex -= companions.length;
            if (relativeIndex < -companions.length / 2) relativeIndex += companions.length;
            
            // Only render adjacent planets
            if (Math.abs(relativeIndex) > 2) return null;

            const isCenter = relativeIndex === 0;
            
            // Scale and positioning based on distance from center
            const xOffset = relativeIndex * (window.innerWidth < 640 ? 150 : 300); // Distance between planets responsive
            const scale = isCenter ? 1 : Math.max(0.4, 1 - Math.abs(relativeIndex) * 0.3);
            const zIndex = isCenter ? 30 : 20 - Math.abs(relativeIndex);
            const opacity = isCenter ? 1 : Math.max(0.2, 1 - Math.abs(relativeIndex) * 0.5);

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
                  className={`relative rounded-full shadow-[0_0_80px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden transition-all duration-500 mb-8`}
                  style={{ 
                    width: isCenter ? '240px' : '140px', 
                    height: isCenter ? '240px' : '140px',
                    background: comp.planetGradient,
                    boxShadow: isCenter ? `0 0 100px ${comp.planetGradient.split(',')[1].trim()}` : '0 0 20px rgba(0,0,0,0.5)'
                  }}
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgoJPC9zdmc+')] mix-blend-overlay opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className={`relative z-10 drop-shadow-2xl transition-all duration-500 ${isCenter ? 'text-7xl scale-125' : 'text-4xl'}`}>
                    {comp.emoji}
                  </span>
                </div>

                {/* Planet Info */}
                <AnimatePresence>
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-[260px] w-[90vw] sm:w-[400px] text-center pointer-events-auto"
                    >
                      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-white drop-shadow-lg">
                        {comp.name}
                      </h2>
                      <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6 px-4">
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

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {companions.map((_, i) => (
          <div 
            key={`dot-${i}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-white shadow-[0_0_10px_white]' : 'w-1.5 bg-white/20'}`}
          />
        ))}
      </div>

    </div>
  );
};

export default DashboardPage;
