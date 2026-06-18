import React, { useState } from 'react';
import { AvatarCanvas } from '../components/AvatarCanvas';
import { Mic, MicOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AvatarTestPage = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Link to="/" className="text-white/70 hover:text-white flex items-center space-x-2 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* 3D Canvas Container */}
      <div className="w-full max-w-4xl h-[65vh] relative z-10 cursor-grab active:cursor-grabbing">
        <AvatarCanvas isSpeaking={isSpeaking} />
      </div>

      {/* Controls */}
      <div className="mt-8 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Neuron Head</h2>
        <p className="text-white/60 mb-8 text-sm leading-relaxed">
          Test the procedural lip movement. The avatar visualizer responds to the speech state dynamically.
        </p>
        
        <button
          onClick={() => setIsSpeaking(!isSpeaking)}
          className={`w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
            isSpeaking 
              ? 'bg-cyan-500 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:bg-cyan-400' 
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
          }`}
        >
          {isSpeaking ? <Mic className="w-6 h-6 animate-pulse" /> : <MicOff className="w-6 h-6" />}
          <span className="text-lg">{isSpeaking ? 'Avatar is Speaking...' : 'Click to Speak'}</span>
        </button>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
};

export default AvatarTestPage;
